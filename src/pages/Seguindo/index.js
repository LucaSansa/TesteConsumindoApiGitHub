import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import {connect} from 'react-redux';
import api from '../../services/api';

import SeguindoDetalhes from './SeguindoDetalhes';

import Icon from 'react-native-vector-icons/Feather';

import {useNavigation} from '@react-navigation/native';

export function Seguindo(props){

    const navigation = useNavigation();

    const [listaSeguindo, setListaSeguindo] = useState([]);

    useEffect(() =>{
        async function pegaSeguindo(){
            let url = props.seguindo.substring(22);
            const response4 = await api.get(`${url}`);
            setListaSeguindo(response4.data);
        }
        pegaSeguindo();
    })

    return(
        <View style={styles.container}>

            <View style={styles.areaHeader}>
                <TouchableOpacity style={styles.btnVoltar} onPress={() => navigation.navigate('Home')}>
                    <Icon name="arrow-left" size={22} color="#FFF"/>
                </TouchableOpacity>
                <Text style={styles.txtHeader}>Seguindo {props.nseguindo}</Text>
            </View>            

            <FlatList
                data={listaSeguindo}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <SeguindoDetalhes data={item}/>}
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

        seguindo: state.autenticacao.seguindo,
        nseguindo: state.autenticacao.nseguindo
        

    };
};

const SeguindoConnect = connect(mapStateToProps)(Seguindo);
export default SeguindoConnect;