//import AsyncStorage from '@react-native-community/async-storage';
import React, { useContext, useEffect, useState } from 'react';
import {Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { css } from '../css/Css'
//import UsersContext from '../Data/UsersContext';
import DbClient from '../Data/DbClient';

export default function ClientForm ({ route, navigation }) {
    // export default props => {
    // console.warn (Object.keys(props.route.params))
    //const [user, setUser] = useState(props.route.params ? props.route.params : {})
    
    //const [user, setUser] = useState(route.params ? route.params : {})
      
    //const {dispatch} = useContext(UsersContext)
    
    const id = route.params ? route.params.id : undefined;
    const [name, setName] = useState ('');
    const [email, setEmail] = useState ('');
    const [telefone, setTelefone] = useState ('');
    const [avatarUrl, setAvatarUrl] = useState ('');

    useEffect(() => {
        if(!route.params) return;
        setName(route.params.name);
        setEmail(route.params.email);
        setTelefone(route.params.telefone);
        setAvatarUrl(route.params.avatarUrl);
      }, [route])

   
    function handleNameChange(name) {setName(name);}
    function handleEmailChange(email) {setEmail(email);}
    function handleTefeloneChange(telefone) {setTelefone(telefone);}
    function handleAvatarUrlChange(avatarUrl) {setAvatarUrl(avatarUrl);}
    
    async function handleButtonPress(){ 
        const listItem = {name, email, telefone, avatarUrl};
        DbClient.saveItem(listItem, id)
        .then(response => navigation.navigate ("ClientList", listItem))
    }


    return (
        
        <View style={css.formForm}>
            <Text>Nome do Cliente</Text>
            <TextInput
                style={css.inputForm}
                onChangeText={handleNameChange} // o onChangeText permite alterar o texto assim que o estado for alterado
                placeholder="Informe o Nome"
                value={name}
            />

            <Text>Email do CLiente</Text>
            <TextInput
                style={css.inputForm}
                onChangeText={handleEmailChange}
                placeholder="Informe o Email"
                value={email}
            />
            
            <Text>Telefone do CLiente</Text>
            <TextInput
                style={css.inputForm}
                onChangeText={handleTefeloneChange}
                placeholder="Informe o telefone"
                value={telefone}
            />

            <Text>Url do Avatar do CLiente</Text>
            <TextInput
                style={css.inputForm}
                onChangeText={handleAvatarUrlChange}
                placeholder="Informe a Url do Avatar"
                value={avatarUrl}
            />
            <Button
                title="Salvar"
                onPress={handleButtonPress}
                
            />

        </View>

    )
}