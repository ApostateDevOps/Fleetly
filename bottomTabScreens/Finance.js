import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import {financeStyles} from '../styles'

const Finance=()=> {
    return (
      <SafeAreaView style={{ flex: 1}}>
        <View style={financeStyles.topHeader}>
          <Text style={{fontFamily:'Inter_600SemiBold', fontSize:17, color:'#282828'}}>Finance</Text>
        </View>
        <View style={financeStyles.pickersContainer}>
          <TouchableOpacity style={financeStyles.soloPickerView}>
            <Text style={{paddingLeft:5, color:'#282828', fontFamily:'Inter_300Light'}}>All cars</Text>
            <MaterialCommunityIcons name={'chevron-down'} size={15} color={'#282828'} style={{paddingTop:2}}/>
          </TouchableOpacity>
          <TouchableOpacity style={financeStyles.soloPickerView}>
            <Text style={{paddingLeft:5, color:'#282828', fontFamily:'Inter_300Light'}}>All time</Text>
            <MaterialCommunityIcons name={'chevron-down'} size={15} color={'#282828'} style={{paddingTop:2}}/>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
}
export default Finance
