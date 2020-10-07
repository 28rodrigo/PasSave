import React ,{ReactNode, useState, useEffect} from 'react'
import {Ionicons,Feather} from '@expo/vector-icons'
import styles from './styles'
import { View,Text, TextInput } from 'react-native';
import { RectButton, TouchableWithoutFeedback } from 'react-native-gesture-handler';


interface InputProps{
    title: string;
    type?: string;
    content?:string;
    updatestate:Function;
    editable: boolean;       
    
}
const Input:React.FC<InputProps>=({title,type,content,updatestate,editable})=>{
   const [isClicked,setisClicked]=useState(false)
   function clicked(){
       setisClicked(true);
   }
   function notclicked(){
    setisClicked(false);
}
   useEffect(()=>{

   },[isClicked])
    return (

        <View style={styles.container}>  
            <Text style={styles.text}>{title}</Text>
            { type=='pass' &&(
                <View style={styles.showhide}>
                    <TextInput style={editable ? [styles.password,{color:'black'}]:[styles.password,{color:'#668f'}]}
                    textContentType='password'
                    clearTextOnFocus
                    placeholderTextColor='#c1bccc'
                    secureTextEntry={!isClicked}
                    editable={editable}
                    scrollEnabled={true}
                    onChangeText={text=> updatestate(text)}
                    >{content}</TextInput>
                    <TouchableWithoutFeedback onPressIn={clicked} onPressOut={notclicked}  >
                        {!isClicked &&(<Feather name="eye" style={{marginRight:12,color:'#668f'}}   size={28} color="black" />)}
                        {isClicked &&(<Feather name="eye-off" style={{marginRight:12,color:'#668f'}}   size={28} color="black" />)}
                    </TouchableWithoutFeedback>
                   
                </View>
                
            ) }
            { type=='bio' &&(
                <TextInput style={editable ? [styles.input,{height:120,color:'black'}]:[styles.input,{height:120,color:'#668f'}]}
                onChangeText={text=> updatestate(text)}
                placeholderTextColor='#c1bccc'
                multiline
                scrollEnabled={true}
                editable={editable}
                >{content}</TextInput>
            ) }
            {!(type=='pass')&& !(type=='bio') &&(
                 <TextInput style={editable ? [styles.input,{color:'black'}]:[styles.input,{color:'#668f'}]}
                 textContentType='password'
                 editable={editable}
                 scrollEnabled={true}
                 onChangeText={text=> updatestate(text)}
                 placeholderTextColor='#c1bccc'
                 >{content}</TextInput>
            )}
           
                   
        </View>
    );

}

export default Input;