import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, ToastAndroid, Clipboard } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { RectButton, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


import Database from '../../database/Database';
import styles from './styles'
import Input from '../Input';
interface Res{
    rows:Response
    operation:string
}

interface Response{
    _array:Array<Object>
    length: number
}
interface PassItemProps{
    Id: number;
    url: string;
    nome: string;
    mail:string;
    password:string;
    nota:string;
    updatestate:Function;
}

const PassItem:React.FC<PassItemProps>=({Id,nome,url,mail,password,nota,updatestate})=>{
    const db=new Database();
    const [ide,setide]=useState(0);
    const [isClicked,setisclicked]=useState(false);
    const navigation=useNavigation()
    function clicked(){
        setisclicked(true)
    }
    function notclicked(){
        setisclicked(false)
    }
    function handleEditButton(){
        navigation.navigate("EditPass",{"id":Id});
    }
    function copyToClipboard(){
        Clipboard.setString(password);
        ToastAndroid.show('Copiado!!',ToastAndroid.SHORT);
    }
    function copyToClipboardmail(){
        Clipboard.setString(mail);
        ToastAndroid.show('Copiado!!',ToastAndroid.SHORT);
    }
    async function handleDeleteButton(){
        
        const response=await db.removebyid(Id)as Res
        const {operation}= response
        if(operation=='sucess'){
            ToastAndroid.show('Password removida com sucesso',ToastAndroid.SHORT);
            updatestate(true);
        }else{
            ToastAndroid.show('Erro a remover password',ToastAndroid.SHORT);
        }
    }
    useEffect(()=>{
        console.log('id='+Id)
        setide(Id)
        console.log('ide='+ide)
        
    },[])
    
    useEffect(()=>{

    },[isClicked])
   
    return(
        <View style={styles.container}>
               <View style={styles.profileinfo}>
                    <Text style={styles.profiletext}>{nome}</Text>
                 </View>
        <View style={styles.data}>
            <View style={{width:'86%',justifyContent:"space-between",marginLeft:10}}>
                <Input editable={false}  updatestate={()=>{}}  title='Username/Email' content={mail}/>
            </View>
            <RectButton onPress={copyToClipboardmail} style={styles.copybutton1}>
                    <Feather  name="copy" size={30} color="blue" />
            </RectButton>
          
         </View>
         <Text style={styles.text}>Password</Text> 
            <View style={styles.info}>
                <View style={styles.showhide}>
                    <TextInput style={styles.input}
                        placeholder='**********'
                        placeholderTextColor='#c1bccc'
                        secureTextEntry={!isClicked}
                        editable={false}
                        scrollEnabled={true}
                        >{password}</TextInput>
                        <TouchableWithoutFeedback onPressIn={clicked} onPressOut={notclicked}  >
                        {!isClicked &&(<Feather name="eye" style={{marginRight:10,color:'#668f'}}   size={28} color="black" />)}
                        {isClicked &&(<Feather name="eye-off" style={{marginRight:10,color:'#668f'}}   size={28} color="black" />)}
                    </TouchableWithoutFeedback>
                </View>
                
                    <RectButton onPress={copyToClipboard} style={styles.copybutton}>
                    <Feather  name="copy" size={30} color="blue" />
                    </RectButton>
                
            </View>
        
        <View style={styles.buttons}>
            <RectButton onPress={handleDeleteButton} style={styles.button}>
            <Feather name="trash-2" size={24} color="white" />
            </RectButton>
            <RectButton onPress={handleEditButton} style={styles.button}>
            <Ionicons name="ios-information-circle-outline" size={28} color="white" />
            </RectButton>
        </View>
        </View>
    );
}
export default PassItem
