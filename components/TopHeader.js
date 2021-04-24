import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {globalFonts, globalColors} from '../styles'

const TopHeader = (title) => {
    return (
        <View style={title.title=='More'? localStyles.topHeaderNoPickers : localStyles.topHeader}>
            <Text style={{fontFamily:globalFonts.semibold, fontSize:17, color: globalColors.lightBlack}}>{title.title}</Text>
        </View>
    )
}

export default TopHeader

const localStyles=StyleSheet.create({
    topHeader:{
        alignItems:'center',
        justifyContent:'center',
        height:45,
    },
    topHeaderNoPickers:{
        alignItems:'center',
        justifyContent:'center',
        height:45,
        borderColor:'lightgrey',
        borderBottomWidth:1,
    }
})
