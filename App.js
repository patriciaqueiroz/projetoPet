import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import  {createStackNavigator} from '@react-navigation/stack';
import ClientList from './Client/ClientList';
import ClientForm from './Client/ClientForm';
import {Icon, Button} from 'react-native-elements';



const Stack = createStackNavigator()

export default props => {
    return (
       
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName="ClientList"
            screenOptions={screenOptions}>
            <Stack.Screen 
                    name = "ClientList" 
                    component = {ClientList} 
                    options = {({navigation}) => {
                        return {
                            title: "Lista de Clientes",
                            headerRight: () => (
                                <Button 
                                    onPress={() => navigation.navigate("ClientForm")}
                                    type="clear"
                                    icon={<Icon name="add" size={25} color="white" />}
                                />
                            )
                        }
                    }}
            />
            <Stack.Screen 
                    name="ClientForm" 
                    component={ClientForm} 
                    options={{
                        title: "Formulário de Clientes"
                    }}
            />
          </Stack.Navigator>
        </NavigationContainer>
       
      );
    }

    const screenOptions = {
        headerStyle: {
            backgroundColor: '#f4511e'
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
            fontWeight: 'bold'
        }
    }