
import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
// import users from '../Data/users'; //não é necessario já que se utilizou do ContextAPI
//import { Avatar, Button, Icon } from 'react-native-elements';
//import { ListItem } from 'react-native-elements';
//import AsyncStorage from '@react-native-async-storage/async-storage';
//import ClientForm from './ClientForm';
//import UsersContext from '../Data/UsersContext';
import DbClient from '../Data/DbClient';
import ClientItem from '../Client/ClientItem';





export default function ClientList({ route, navigation }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    DbClient.getItems().then(items => setItems(items));
  }, [route]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>Lista de Clientes</Text>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.itemsContainer}>
        {items.map(item => {
          return <ClientItem key={item.id} id={item.id} item={item.name}  navigation={navigation} />
        })}
      </ScrollView>
      </View>
    );
    
  }
  
  const styles = StyleSheet.create({
        container: {
        flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 50,
      marginBottom: 20
    },
    scrollContainer: {
        flex: 1,
      width: '90%'
    },
    itemsContainer: {
        flex: 1,
      marginTop: 10,
      padding: 20,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      alignItems: 'stretch',
      backgroundColor: '#fff'
    },
  });
