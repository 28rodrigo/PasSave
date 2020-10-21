import React, {useState,useEffect} from 'react'
import { View, ToastAndroid } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation, useIsFocused } from '@react-navigation/native';

import Database from '../../database/Database';
import Modals from '../../components/modal';
import PageHeader from '../../components/PageHeader';
import PassItem from '../../components/PassItem';
import styles from './styles'
interface Res{
    rows:Response
    operation:string
}

interface Response{
    _array:React.SetStateAction<never[]>
    length: number
}
interface Params{
    id:number;
    url: string;
    nome: string;
    mail: string;
    password: string;
    nota: string;
}
function Passwords(){
    const navigation=useNavigation()
    const isFocused=useIsFocused()
    const db= new Database();
    const [passwords,setpasswords]=useState([]);
    const [ismodalVisible,setIsModalVisible]=useState(false);
    const [ismodalErrorVisible,setIsModalErrorVisible]=useState(false);
    const [isclicked,setIsClicked]=useState(false);
    async function getdata(){
        setIsModalErrorVisible(false);
        const response = await db.findall();
        console.log(response)
        const {rows,operation}= response as Res
        if(operation=='sucess'){
            const{_array,length}=rows
            console.log(_array);
            setpasswords(_array);
            if(length==0){
                setIsModalVisible(true)
            }
         }else{
             setIsModalErrorVisible(true);
             ToastAndroid.show("Erro a obter passwords",ToastAndroid.LONG);
             return
         }
    }
    useEffect(()=>{
        if(isFocused){
            setIsClicked(false)
            getdata()
        }
        else
            return
    },[isFocused,isclicked])
    
    useEffect(()=>{

    },[ismodalVisible,ismodalErrorVisible])
    function handleCreateButton(){
        navigation.navigate("CreatePass")
        setIsModalVisible(false);
    }
    return(
        <>
        <PageHeader title='Passwords Guardadas'
            headerPlus={(
                <RectButton style={{borderRadius:10,width:32,height:32,alignItems:"center"}} onPress={handleCreateButton}>
                <Ionicons name="ios-add-circle-outline" size={32} color="white" />
                </RectButton>
            )}
        />
       
        <View style={styles.container}>
            
            <ScrollView
            disableScrollViewPanResponder={false}
            showsVerticalScrollIndicator = {false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal:16,
                paddingBottom:270
            }}
            >
                {passwords.map((pass:Params)=>{
                    
                    return <PassItem updatestate={setIsClicked} key={pass.id} Id={pass.id} nome={pass.nome} mail={pass.mail} url={pass.url} nota={pass.nota} password={pass.password} ></PassItem>
                })}
               
            </ScrollView>
            
        </View>
            <Modals type="sad" title={['Sem Passwords guardadas!','Criar Password']} isvisible={ismodalVisible} action={handleCreateButton}></Modals>
            <Modals type="sad" title={['Erro a carregar Passwords!','Tentar Novamente']} isvisible={ismodalErrorVisible} action={getdata}></Modals>
        
        </>
    );
}

export default Passwords;