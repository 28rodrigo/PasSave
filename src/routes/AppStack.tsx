import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import Landing from '../pages/Landing';
import Passwords from '../pages/Passwords';
import CreatePass from '../pages/CreatePass';
import EditPass from '../pages/EditPass';

const {Navigator,Screen}= createStackNavigator();
function AppStack(){
    return(
        <NavigationContainer >
            <Navigator  screenOptions={{headerShown:false}} initialRouteName="Landing" >
                <Screen name="Passwords"  component={Passwords}/>
                <Screen name="Landing" component={Landing}/>
                <Screen name="CreatePass" component={CreatePass}/>
                <Screen name="EditPass" component={EditPass}/>
            </Navigator>

        </NavigationContainer>
        
    )

}
export default AppStack