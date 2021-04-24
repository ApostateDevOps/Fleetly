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
        paddingTop:10,
        paddingBottom:15,
        justifyContent:'center',
        borderColor:'lightgrey',
        borderBottomWidth:1,
        // backgroundColor:'rgb(242,242,242)',
        // shadowColor: "#000",
        // shadowOffset: {
        //   width: 0,
        //   height: 4,
        // },
        // shadowOpacity: 0.22,
        // shadowRadius: 2.22,
        // elevation: 3,
    },
    soloPickerView:{
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:4,
        borderWidth:1,
        borderColor:'darkgrey',
        marginHorizontal:10,
        height:30,
        width:80,
        borderRadius:45,
    },
})
