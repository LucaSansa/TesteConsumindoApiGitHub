import React, {useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, YellowBox } from 'react-native';



import api from '../../services/api';
import {connect} from 'react-redux';

import Icon from 'react-native-vector-icons/Feather';

import {useNavigation} from '@react-navigation/native';

import {editNickName,
    editNome,
    editAvatar,
    editEmail,
    editLocal,
    editNSeguidores,
    editNSeguindo,
    editNRepos,
    editBio,
    editRepos,
    editSeguidores, 
    editSeguindo,
    estadoInicial} from '../../actions/AuthActions';


export function Home(props){

    const navigation = useNavigation();

    useEffect(() =>{

        async function pegaDados(){

                const response = await api.get(`/users/${props.nickname}`);
                await props.editAvatar(response.data.avatar_url);
                await props.editNome(response.data.name);
                await props.editEmail(response.data.email);
                await props.editLocal(response.data.location);
                await props.editNSeguidores(response.data.followers);
                await props.editNSeguindo(response.data.following);
                await props.editNRepos(response.data.public_repos);
                await props.editBio(response.data.bio);
                await props.editRepos(response.data.repos_url);
                await props.editSeguidores(response.data.followers_url);

                let a = response.data.following_url;
                let b = a.indexOf("{");

                await props.editSeguindo(a.substring(0, b));

            }
            pegaDados();
    },[]);

   function sair(){

        navigation.navigate('Login');
    }


    return(
        <View style={styles.container}>

            <View style={styles.areaHeader}>
                <Text style={styles.txtLogin}>#{props.nickname}</Text>

                <TouchableOpacity style={styles.btnSair} onPress={sair}>
                    <View style={styles.areaBotao}>
                        <Text style={{color: '#FFF'}}>Sair</Text>
                        <Icon style={styles.iconeBotao}name="log-out" size={22} color="#D03434"/>
                    </View>
                    
                </TouchableOpacity>
                 
            </View>

            <View style={styles.areaAvatar}>
                <Image style={styles.avatar} source={{uri: props.avatar}}/>
            </View>
            
            <View style={styles.areaIdentificacao}>
                <Text style={styles.txtNome}>{props.nome}</Text>
                <Text style={styles.txtEmailLocalidade}>{props.email}</Text>
                <Text style={styles.txtEmailLocalidade}>{props.lugar}</Text>
            </View>

            <View style={styles.areaNumeros}>

                <View style={styles.numero}>
                    <Text style={styles.txtNumero}>{props.nseguidores}</Text>
                    <Text style={styles.txtDesNumero}>seguidores</Text>
                </View>

                <View style={styles.numero}>
                    <Text style={styles.txtNumero}>{props.nseguindo}</Text>
                    <Text style={styles.txtDesNumero}>Seguindo</Text>
                </View>

                <View style={styles.numero}>
                    <Text style={styles.txtNumero}>{props.nrepos}</Text>
                    <Text style={styles.txtDesNumero}>Repos</Text>
                </View>

            </View>

            <View style={styles.areaBio}>
                <Text style={styles.tituloBio}>BIO</Text>

                <ScrollView style={styles.areaBio}>
                    <Text style={styles.txtBio}>{props.bio}</Text>
                </ScrollView>

            </View>


            

        </View>
    )

}

const mapStateToProps = (state) => {
    return{

        nickname: state.autenticacao.nickname,
        avatar: state.autenticacao.avatar,
        nome: state.autenticacao.nome,
        email: state.autenticacao.email,
        lugar: state.autenticacao.lugar,
        nseguidores: state.autenticacao.nseguidores,
        nseguindo: state.autenticacao.nseguindo,
        nrepos: state.autenticacao.nrepos,
        bio: state.autenticacao.bio,
        repos: state.autenticacao.repos,
        seguidores: state.autenticacao.seguidores,
        seguindo: state.autenticacao.seguindo
    };
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#292929',

    }, 
    areaHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        alignItems: 'center',
        backgroundColor: '#131313'
    },
    txtLogin:{
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    btnSair:{
        marginRight: 15
    },
    areaBotao:{
        flexDirection: 'row'
    }, 
    iconeBotao:{
        marginLeft: 10
    },
    areaAvatar:{
        alignItems: 'center',
        height: 100,
        backgroundColor: '#131313'
    },
    avatar:{
        width: 100,
        height: 100,
        position: 'absolute',
        marginTop: 50,
        borderWidth: 4,
        borderColor: '#FFF',
        borderRadius: 50
    },
    areaIdentificacao:{
        marginTop: 80
    },
    txtNome:{
        fontSize: 26,
        color: '#FFF',
        fontWeight: 'bold',
        borderLeftWidth: 10,
        borderColor: '#FFCE00',
        paddingLeft: 20
    },
    txtEmailLocalidade:{
        fontSize: 18,
        color: '#FFF',
        paddingLeft: 20
    },
    areaNumeros:{
        flexDirection: 'row',
        marginTop: 35, 
        backgroundColor: '#383838',
        justifyContent: 'space-between',
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 10,
        paddingBottom: 10
    },
    numero:{
        alignItems: 'center'
    },
    txtNumero:{
        fontSize: 40,
        color: '#FFF',
        fontWeight: 'bold'
    },
    txtDesNumero:{
        fontSize: 17,
        color: '#FFF'
    },
    areaBio:{
        marginTop: 20
    },
    tituloBio:{
        fontSize: 26,
        color: '#FFF',
        borderLeftWidth: 10,
        borderColor: '#FFCE00',
        paddingLeft: 20
    },
    areaBio:{
        marginTop: 15,
    },
    txtBio:{
        marginLeft: 20,
        fontSize: 18,
        color: '#FFF'
    }


})

const HomeConnect = connect(mapStateToProps, {
    editNickName,
    editNome, 
    editAvatar, 
    editEmail, 
    editLocal, 
    editNSeguidores, 
    editNSeguindo, 
    editNRepos,
    editBio,
    editRepos,
    editSeguidores,
    editSeguindo,
    estadoInicial
})(Home);

export default HomeConnect;




