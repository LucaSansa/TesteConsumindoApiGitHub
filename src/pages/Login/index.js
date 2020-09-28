import React,{useState} from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {connect} from 'react-redux';

import {editNickName} from '../../actions/AuthActions';

import api from '../../services/api';

import Icon from 'react-native-vector-icons/Feather';

export function Login(props){

    const navigation = useNavigation();


    async function pegaDados(){

        await api.get(`/users/${props.nickname}`)
        .then(() =>{
            navigation.navigate('Home');
        })
        .catch((err) =>{
            alert('invalido')
        })

    }

    return(
        <View style={styles.container}>

            <Image style={styles.logo} source={require('../../logo/github.png')}/>

            <TextInput
                style={styles.input}
                placeholder="Usuário"
                value={props.nickname}
                onChangeText={(texto) => props.editNickName(texto)}
            />

            <TouchableOpacity style={styles.btnEntrar} onPress={pegaDados}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.txtBotao}>ENTRAR</Text>
                    <Icon name="arrow-right" size={30} color="#131313"/>
                </View>
            </TouchableOpacity>

        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#292929'
    },
    logo:{
        width: 98,
        height: 98,
        marginBottom: 30
    },  
    input:{
        width: 340,
        height: 56,
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 20,
        backgroundColor: '#FFF',
        fontSize: 20,
        paddingLeft: 25
    },
    btnEntrar:{
        backgroundColor: '#ffce00',
        width: 340,
        height: 56,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtBotao:{
        fontSize: 20,
        fontWeight: 'bold',
        paddingRight: 10
    }
})

const mapStateToProps = (state) => {
    return{
        nickname: state.autenticacao.nickname,
    };
};

const LoginConnect = connect(mapStateToProps, {editNickName})(Login);

export default LoginConnect;