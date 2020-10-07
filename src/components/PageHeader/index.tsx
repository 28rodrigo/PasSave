import React ,{ReactNode} from 'react'
import {Ionicons} from '@expo/vector-icons'
import styles from './styles'
import { View,Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

interface PageHeaderProps{
    title: string;
    headerPlus ?: ReactNode;
    headerMinus ?: ReactNode;
}
const PageHeader:React.FC<PageHeaderProps>=({title,headerPlus,headerMinus})=>{
    return (
        <View style={styles.container}>  
            <View style={styles.topbar}>
                {headerMinus}
                <Text style={styles.topbartext}>PasSave</Text>
                {headerPlus}
                
            </View>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
            </View>
                   
        </View>
    );

}

export default PageHeader;