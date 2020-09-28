import React, {useEffect, useState} from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import api from '../../services/api';

import {connect} from 'react-redux';

import SeguidoresDetalhes from './SeguidoresDetalhes';

import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

export function Seguidores(props){

    const navigation = useNavigation();

    const [listaSeguidores, setListaSeguidores] = useState([]);

    useEffect(() =>{
        async function pegaSeguidores(){
            let url = props.seguidores.substring(22);
            const response3 = await api.get(`${url}`);
            setListaSeguidores(response3.data);
            
        }
        pegaSeguidores();
    },[]);

    return(
        <View style={styles.container}>

            <View style={styles.areaHeader}>
                <TouchableOpacity style={styles.btnVoltar} onPress={() => navigation.navigate('Home')}>
                    <Icon name="arrow-left" size={22} color="#FFF"/>
                </TouchableOpacity>
                <Text style={styles.txtHeader}>{props.nseguidores} Seguidores</Text>
            </View>

            <FlatList
                data={listaSeguidores}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <SeguidoresDetalhes data={item}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#292929'
    },
    areaHeader:{
        height: 68,
        backgroundColor: '#1f1f1f',
        flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'center',

    },
    txtHeader:{
        color: '#FFF',
        fontSize: 17,
        position: 'absolute',
        marginLeft: '35%'
    },
    btnVoltar:{
        marginLeft: 15
    }
})

const mapStateToProps = (state) => {
    return{
        seguidores: state.autenticacao.seguidores,
        nseguidores: state.autenticacao.nseguidores
    };
};

const SeguidoresConnect = connect(mapStateToProps)(Seguidores);

export default SeguidoresConnect;