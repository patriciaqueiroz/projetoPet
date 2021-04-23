import React from 'react';
import {StyleSheet, Alert, Text, View, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';
import DbClient from '../Data/DbClient';
 
export default function ClientItem(props){
    //console.warn(props);
   
    function handleDeletePress(){ 
        Alert.alert(
            "Atenção",
            "Você tem certeza que deseja excluir este item?",
            [
                {
                text: "Não",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
                },
                { text: "Sim", onPress: () => {
                    DbClient.deleteItem(props.id)
                            .then(response => props.navigation.navigate("ClientList", {id: props.id}));
                    }
                }
            ],
            { cancelable: false }
            );
    } 

    async function handleEditPress(){ 
        const item = await DbClient.getItem(props.id);
        props.navigation.navigate("ClientForm", item);
    }
    
    return (
        <View style={styles.container}>



            <Text style={styles.textItem}>{props.item}</Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={handleDeletePress}>
                    <Icon name="delete" color="white" size={18} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.editButton}
                    onPress={handleEditPress}>
                    <Icon name="edit" color="white" size={18} />
                </TouchableOpacity>
            </View>
        </View>
        
    
      );

}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      marginTop: 20,
      width: '100%'
    },
    buttonsContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
        paddingBottom: 10,
        marginTop: 10,
    },
    editButton: {
        marginLeft: 10,
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'
    },
    deleteButton: {
        marginLeft: 10,
        height: 40,
        width: 40,
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    textItem: {
        fontSize: 20,
        color: '#f44336',
    }
  });