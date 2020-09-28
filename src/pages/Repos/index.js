import React, {useEffect, useState} from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import api from '../../services/api';

import {connect} from 'react-redux';

import RepoDetalhes from './RepoDetalhes';

import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';



export function Repos(props){

    const navigation = useNavigation()
    const [listarepos, setListarepos] = useState([]);

    useEffect(() =>{
        async function pegaRepos(){
            let url = props.repos.substring(22);
            const response2 = await api.get(`${url}`);
            setListarepos(response2.data);
        }
        pegaRepos();
    },[]);


    return(
        <View style={styles.container}>

            <View style={styles.areaHeader}>
                <TouchableOpacity style={styles.btnVoltar} onPress={() => navigation.navigate('Home')}>
                    <Icon name="arrow-left" size={22} color="#FFF"/>
                </TouchableOpacity>
                <Text style={styles.txtHeader}>{props.nrepos} Repositórios</Text>
            </View>

            <FlatList
                data={listarepos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <RepoDetalhes data={item}/>}
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
        repos: state.autenticacao.repos,
        nrepos: state.autenticacao.nrepos
    };
};

const ReposConnect = connect(mapStateToProps)(Repos);

export default ReposConnect;