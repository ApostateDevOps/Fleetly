import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {globalColors, globalFonts} from '../styles'

export default function TopPickers() {
    return (
        <View style={localStyles.pickersContainer}>
          <TouchableOpacity style={localStyles.soloPickerView}>
            <Text style={{paddingLeft:5, color: globalColors.lightBlack, fontFamily:globalFonts.light}}>All cars</Text>
            <MaterialCommunityIcons name={'chevron-down'} size={15} color={ globalColors.lightBlack} style={{paddingTop:2}}/>
          </TouchableOpacity>
          <TouchableOpacity style={localStyles.soloPickerView}>
            <Text style={{paddingLeft:5, color: globalColors.lightBlack, fontFamily:globalFonts.light}}>All time</Text>
            <MaterialCommunityIcons name={'chevron-down'} size={15} color={ globalColors.lightBlack} style={{paddingTop:2}}/>
          </TouchableOpacity>
        </View>
    )
}

const localStyles = StyleSheet.create({
    pickersContainer:{
        flexDirection:'row',
        paddingTop:5,
        paddingBottom:15,
        justifyContent:'center',
        borderColor:'lightgrey',
        borderBottomWidth:1,
    },
    soloPickerView:{
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:4,
        // backgroundColor:'lightgrey',
        borderWidth:1,
        borderColor:'darkgrey',
        marginHorizontal:10,
        height:30,
        width:80,
        borderRadius:45
    },
})
