import React ,{ReactNode} from 'react'
import { View,Text } from 'react-native';

import styles from './styles'
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