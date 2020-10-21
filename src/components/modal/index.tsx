import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
} from "react-native";

interface props{
    title:Array<string>
    isvisible:boolean
    action:Function,
    action1?:Function
    type:string
}

const Modals:React.FC<props> = ({isvisible,action,title,type,action1}) => {
  
  return (
    <View style={styles.centeredView}>
      {type==='sad' &&(
        <Modal
        animationType="slide"
        transparent={true}
        visible={isvisible}
        
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{title[0]}</Text>
            <Image source={require('../../assets/images/sad.png')} resizeMethod="scale" style={styles.image}/>
            <TouchableHighlight
              style={{ ...styles.openButton }}
              onPress={() => {
                action()
              }}
            >
              <Text style={styles.textStyle}>{title[1]}</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      )}
      {type==='create' && action1 && (
        <Modal
        animationType="slide"
        transparent={true}
        visible={isvisible}
        
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText1}>{title[0]}</Text>
            {/* <Image source={require('../../assets/images/sad.png')} resizeMethod="scale" style={styles.image}/> */}
            <View style={styles.buttons}>
                <TouchableHighlight
                  style={{ ...styles.openButton1a }}
                  onPress={() => {
                    action()
                  }}
                >
                  <Text style={styles.textStyle}>{title[1]}</Text>
                </TouchableHighlight>
                
                <TouchableHighlight
                  style={{ ...styles.openButton1b }}
                  onPress={() => {
                    action1()
                  }}
                >
                  <Text style={styles.textStyle}>{title[2]}</Text>
                </TouchableHighlight>
            </View>
            
          </View>
        </View>
      </Modal>

      )} 
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    
  },
  image:{
    width:100,
    height:100,

  },
  modalView: {
    margin: 20,
    
    backgroundColor: "#ffff",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor:'#223FD7',
        justifyContent:"center",
        alignItems:"center",
        height:50,
        paddingHorizontal:30,
        borderRadius:8,
        marginTop:20
  },
  openButton1a: {
    backgroundColor:'#223FD7',
        justifyContent:"center",
        width:'45%',
        alignItems:"center",
        height:50,
        paddingHorizontal:30,
        borderRadius:8,
        marginTop:20
  },
  openButton1b: {
    backgroundColor:"#ff0000",
    width:'45%',
        justifyContent:"center",
        alignItems:"center",
        height:50,
        paddingHorizontal:30,
        borderRadius:8,
        marginTop:20,
        marginLeft:10
  },
  buttons:{
    flexDirection:"row",
    justifyContent:"space-between",
    
  },
  textStyle: {
    color: "white",
    fontFamily:'Poppins_600SemiBold',
    textAlign: "center",
    fontSize:16
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize:18,
    fontFamily:"Archivo_400Regular"
  },
  modalText1: {
    marginBottom: 15,
    textAlign: "center",
    fontSize:22,
    fontFamily:"Poppins_600SemiBold"
  }
});

export default Modals;