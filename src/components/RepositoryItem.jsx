import React from "react"
import { View, Text, StyleSheet, Image } from 'react-native'
import StyledText from './StyledText'
import RepositoryStants from "./RepositoryStats"
import theme from "../theme"

const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingVertical:5
    },
    strong:{
        color:'#09f',
        fontWeight:'bold',
        marginBottom:5
    },
    language: {
        padding:4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf:'flex-start',
        marginVertical:4,
        borderRadius:4,
        overflow:'hidden'
    },
    image:{
        width:48,
        height:48,
        borderRadius:4
    }
})

const RepositoryItemHeader = ({id, ownerAvatarUrl, fullName, description, language}) => (
    <View style={{flexDirection:'row', paddingBottom:2}}>
        <View style={{paddingRight:10}}>
            <Image style={styles.image} source={{uri:ownerAvatarUrl}}></Image>
        </View>
        <View>
            <StyledText text bold>{id}</StyledText>
            <StyledText colorSecondary>{fullName}</StyledText>
            <StyledText colorSecondary>{description}</StyledText>
            <StyledText style={styles.language}>{language}</StyledText>
        </View>
    </View>
)



const RepositoryItem =(repo)=>{
    return(
        <View key={repo.id} style={styles.container}>
            <RepositoryItemHeader {...repo}/>
            <RepositoryStants {...repo}/>
        </View>
    )
}

export default RepositoryItem