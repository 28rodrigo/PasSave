import React ,{useState, useEffect} from 'react'
import {Feather} from '@expo/vector-icons'
import { View,Text, TextInput } from 'react-native';
import {TouchableWithoutFeedback } from 'react-native-gesture-handler';

import Modals from '../modal';
import styles from './styles'


interface InputProps{
    title: string;
    type?: string;
    content:string;
    updatestate:Function;
    editable: boolean;          
}

const Input:React.FC<InputProps>=({title,type,content,updatestate,editable})=>{
   const [isClicked,setisClicked]=useState(false)
   const [isModalVisible,setisModelVisible]=useState(false)
   const [password,setpassword]=useState("");

   function clicked(){
       setisClicked(true);
   }
   function notclicked(){
    setisClicked(false);
    }
    function handleGenerateButton(){
        const text=Math.random().toString(36).substr(0,10)
        handleChangeText(text);
        setisModelVisible(false)
    }   
    function handleFocusPassword(){
        console.log("content"+password)
        if(password==='' || password==undefined)
            setisModelVisible(true)
    
    }
    function handleChangeText(text:string){
        console.log("handleChangeText -> text", text)
        updatestate(text);
        setpassword(text);
    }
    function handleNotUseButton(){
        setisModelVisible(false)
    }

   useEffect(()=>{  
       if (type==='pass'){
        console.log('rodrigo'+content)
        handleChangeText(content)
       } 
   },[content])
    
   
   return (
        <View style={styles.container}>  
            <Text style={styles.text}>{title}</Text>
            { type=='pass' &&(
                <>
                <Modals type="create" title={['Password gerada !','Utilizar','Não Utilizar']} isvisible={isModalVisible} action={handleGenerateButton} action1={handleNotUseButton}></Modals>
               
                <View style={styles.showhide}>
                    <TextInput style={editable ? [styles.password,{color:'black'}]:[styles.password,{color:'#668f'}]}
                    textContentType='password'
                    value={password}
                    placeholderTextColor='#c1bccc'
                    secureTextEntry={!isClicked}
                    onFocus={handleFocusPassword}
                    editable={editable}
                    scrollEnabled={true}
                    onChangeText={text=> handleChangeText(text)}
                    ></TextInput>
                    <TouchableWithoutFeedback onPressIn={clicked} onPressOut={notclicked}  >
                        {!isClicked &&(<Feather name="eye" style={{marginRight:12,color:'#668f'}}   size={28} color="black" />)}
                        {isClicked &&(<Feather name="eye-off" style={{marginRight:12,color:'#668f'}}   size={28} color="black" />)}
                    </TouchableWithoutFeedback>
                    
                </View>
                </>
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
                <>
                    <TextInput style={editable ? [styles.input,{color:'black'}]:[styles.input,{color:'#668f'}]}
                    textContentType='password'
                    editable={editable}
                    scrollEnabled={true}
                    onChangeText={text=> updatestate(text)}
                    placeholderTextColor='#c1bccc'
                    >{content}</TextInput>     
                </> 
            )}

        </View>
    );
}

export default Input;