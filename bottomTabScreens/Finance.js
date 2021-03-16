import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import {financeStyles} from '../styles'

// change to useState
const data={
  totalIncome:1050,
  totalExpenses:500,
  currency:'PLN'
}

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

        <ScrollView style={{paddingTop:12}}>
          <View style={financeStyles.transactionsContainer}>
            <Text style={financeStyles.sectionHeader}>Summary</Text>
            <View style={financeStyles.topTransactions}>
              <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'rgb(67,203,149)', fontFamily:'Inter_500Medium', fontSize:25, textAlign:'right'}}>{data.totalIncome} {data.currency}</Text>
                <Text style={{color:'#282828', fontFamily:'Inter_400Regular'}}>INCOME</Text>
              </View>
              <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'rgb(255,80,102)', fontFamily:'Inter_500Medium', fontSize:25, textAlign:'right'}}>{data.totalExpenses} {data.currency}</Text>
                <Text style={{color:'#282828', fontFamily:'Inter_400Regular'}}>EXPENSES</Text>
              </View>
            </View>
            
          </View>

          <View style={financeStyles.categoriesContainer}>
            <Text style={financeStyles.sectionHeader}>Categories</Text>
          </View>
        </ScrollView>

      </SafeAreaView>
    );
}
export default Finance
