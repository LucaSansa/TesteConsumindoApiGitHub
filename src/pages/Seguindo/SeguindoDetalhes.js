import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import {useNavigation} from '@react-navigation/native';

export default function SeguindoDetalhes(props){

    const navigation = useNavigation();

    return(
        <View style={styles.container}>

            <View style={styles.areaFotoNome}>

                <Image style={styles.avatar} source={{uri: props.data.avatar_url}}/>
                <Text style={styles.txtNome}>#{props.data.login}</Text>

                <View style={styles.areaBtnVoltar}>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
                        <Icon name="arrow-right" size={25} color="#FFF"/>
                    </TouchableOpacity>
                    
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 30,
        borderBottomWidth: 0.2,
        borderColor: '#FFF'
    },
    avatar:{
        width: 60,
        height: 60,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#FFF'
    },
    areaFotoNome:{
        flexDirection: 'row'
    },
    areaBtnVoltar:{
        flexDirection: 'row',
        marginLeft:320,
        position: 'absolute'
    },
    txtNome:{
        marginTop: 20, 
        marginLeft: 30,
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold'
    },
    btn:{
        marginTop: 20
    }
    
})