import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/Feather';


export default function RepoDetalhes(props){
    var teste = '';
    return(
        <View style={styles.container}>

            <Text style={styles.titulo}>{props.data.name}</Text>
            <Text style={styles.desc}>{props.data.description}</Text>

            <View style={styles.areaEstrelas}>
                <Icon style={styles.iconeEstrela}name="star" size={22} color="#FFCE00" />
                <Text style={styles.nestrelas}>{props.data.stargazers_count}</Text>

                <View style={styles.areaCadeados}>
                    {
                    props.data.private ? <Icon2 name="lock" size={22} color="#CC042A"/>  : <Icon3 style={{marginRight: 6}} name="unlock" size={22} color="#63BF1F"/>
                    }

                    {
                        props.data.private ? <Icon3 name="unlock" size={22} color="#63BF1F"/> : <Icon2 name="lock" size={22} color="#CC042A"/>
                    }
                </View>

            </View>
            

            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 40,
        borderBottomWidth: 0.5,
        borderColor: '#FFF'
    },
    titulo:{
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 10
    },
    desc:{
        color: '#FFF',
        fontSize: 15,
        marginBottom: 10
    },
    nestrelas:{
        fontSize: 15,
        color: '#FFF'
    },
    areaEstrelas:{
        flexDirection: 'row'
    },
    iconeEstrela:{
        marginRight: 8
    },
    areaCadeados:{
        flexDirection: 'row',
        marginLeft:320,
        position: 'absolute'
    }
})