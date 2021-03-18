import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import {VictoryChart, VictoryBar, VictoryTheme, VictoryAxis, VictoryGroup, VictoryLabel} from "victory-native";
import {financeStyles} from '../styles';

// change to useState
const data={
  totalIncome:500,
  totalExpenses:350,
  currency:'PLN'
}
const chartData=[
  {info:"PROFIT", value: Math.abs(data.totalIncome-data.totalExpenses), originalValue:data.totalIncome-data.totalExpenses},
  {info:"EXPENSES", value: data.totalExpenses, originalValue:data.totalExpenses},
  {info:"INCOME", value: data.totalIncome, originalValue:data.totalIncome},
]
const screenWidth = Math.round(Dimensions.get('window').width);

const Finance=()=> {
    
    function topHeader(){
      return(
          <View style={financeStyles.topHeader}>
            <Text style={{fontFamily:'Inter_600SemiBold', fontSize:17, color:'#282828'}}>Finance</Text>
          </View>
          )
    }

    function topPickers(){
      return(
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
      )
    }

    function summaryTop(){
      return(
        <View style={financeStyles.summaryTop}>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Text style={{color:'rgb(67,203,149)', fontFamily:'Inter_500Medium', fontSize:25, textAlign:'right'}}>{data.totalIncome} {data.currency}</Text>
          <Text style={{color:'#282828', fontFamily:'Inter_400Regular'}}>INCOME</Text>
        </View>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Text style={{color:'rgb(255,80,102)', fontFamily:'Inter_500Medium', fontSize:25, textAlign:'right'}}>{data.totalExpenses} {data.currency}</Text>
          <Text style={{color:'#282828', fontFamily:'Inter_400Regular'}}>EXPENSES</Text>
        </View>
      </View>
      )
    }

    function summaryChart(){
      return(
        <VictoryChart height={200} width={screenWidth} padding={{left:90, top:40, bottom:40, right:90}} theme={VictoryTheme.material}>
          <VictoryAxis style={{axis:{stroke:"transparent"}, ticks:{stroke:"transparent"}}}/>
          {/* tickLabels:{fill:'transparent'} */}
          <VictoryBar
            horizontal
            cornerRadius={{top:8, bottom:8}}
            data={chartData}
            x="info" y="value"
            labels={({datum})=>{
              if(datum.info=="EXPENSES"){
                return(
                  `-${datum.value} ${data.currency}`
                )
              }
              else{
                return(
                  `${datum.originalValue} ${data.currency}`
                )
              }
            }}
            labelComponent={<VictoryLabel/>}
            barRatio={1}
            style={{
              data:{
                fill: ({datum})=> datum.info=="EXPENSES" || datum.originalValue<0 ? 'rgb(255,80,102)' : 'rgb(67,203,149)'
              }
            }}
            />
        </VictoryChart>
      )
    }

    return (
      <SafeAreaView style={{ flex: 1}}>
        {topHeader()}
        {topPickers()}
        <ScrollView style={{paddingTop:12}}>
          <View style={financeStyles.summaryContainer}>
            <Text style={financeStyles.sectionHeader}>Summary</Text>
            {summaryTop()}
            {summaryChart()}
          </View>

          <View style={financeStyles.categoriesContainer}>
            <Text style={financeStyles.sectionHeader}>Categories</Text>
          </View>
        </ScrollView>

      </SafeAreaView>
    );
}
export default Finance
