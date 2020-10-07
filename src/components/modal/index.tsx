import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
} from "react-native";
import { useNavigation } from "@react-navigation/native";

interface props{
    title:Array<string>
    isvisible:boolean
    action:Function
}
const Modals:React.FC<props> = ({isvisible,action,title}) => {
  
  return (
    <View style={styles.centeredView}>
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
  }
});

export default Modals;