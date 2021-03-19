import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { Component, useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import {VictoryChart, VictoryBar, VictoryTheme, VictoryAxis, VictoryGroup, VictoryLabel} from "victory-native";
import {financeStyles, globalColors, globalFonts} from '../styles';

// change to useState
const data={
  totalIncome:1050,
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
            <Text style={{fontFamily:globalFonts.semibold, fontSize:17, color: globalColors.lightBlack}}>Finance</Text>
          </View>
          )
    }

    function topPickers(){
      return(
        <View style={financeStyles.pickersContainer}>
          <TouchableOpacity style={financeStyles.soloPickerView}>
            <Text style={{paddingLeft:5, color: globalColors.lightBlack, fontFamily:globalFonts.light}}>All cars</Text>
            <MaterialCommunityIcons name={'chevron-down'} size={15} color={ globalColors.lightBlack} style={{paddingTop:2}}/>
          </TouchableOpacity>
          <TouchableOpacity style={financeStyles.soloPickerView}>
            <Text style={{paddingLeft:5, color: globalColors.lightBlack, fontFamily:globalFonts.light}}>All time</Text>
            <MaterialCommunityIcons name={'chevron-down'} size={15} color={ globalColors.lightBlack} style={{paddingTop:2}}/>
          </TouchableOpacity>
        </View>
      )
    }

    function summaryTop(){
      return(
        <View style={financeStyles.summaryTop}>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Text style={{color: globalColors.income, fontFamily:globalFonts.medium, fontSize:25, textAlign:'right'}}>{data.totalIncome} {data.currency}</Text>
          <Text style={{color: globalColors.lightBlack, fontFamily:globalFonts.regular}}>INCOME</Text>
        </View>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Text style={{color: globalColors.expenses, fontFamily:globalFonts.medium, fontSize:25, textAlign:'right'}}>{data.totalExpenses} {data.currency}</Text>
          <Text style={{color: globalColors.lightBlack, fontFamily:globalFonts.regular}}>EXPENSES</Text>
        </View>
      </View>
      )
    }

    function summaryChart(){
      return(
        <VictoryChart height={200} width={screenWidth} padding={{left:90, top:45, bottom:45, right:90}} theme={VictoryTheme.material}>
          <VictoryAxis style={{axis:{stroke:"transparent"}, ticks:{stroke:"transparent"}}}/>
          {/* tickLabels:{fill:'transparent'} */}
          <VictoryBar
            horizontal
            cornerRadius={{top:8, bottom:8}}
            data={chartData}
            x="info" y="value"
            labels={({datum})=>datum.info=="EXPENSES" ? `-${datum.value} ${data.currency}` : `${datum.originalValue} ${data.currency}`}       //visual minus value
            labelComponent={<VictoryLabel/>}
            barRatio={1}
            style={{
              data:{
                fill: ({datum})=> datum.info=="EXPENSES" || datum.originalValue<0 ? globalColors.expenses : globalColors.income
              },
              labels:{
                fontWeight:'500',
                fontSize:13,
                fill: ({datum})=> datum.info=="EXPENSES" || datum.originalValue<0 ? globalColors.expenses : globalColors.income
              }
            }}
            />
        </VictoryChart>
      )
    }

    function buttonGroup(){
      const buttons=['Expenses', 'Income']
      const [selectedIndex, setSelectedIndex]= useState(0)
      return(
        <ButtonGroup 
          onPress={(newSelectedIndex)=>setSelectedIndex(newSelectedIndex)}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{height:55, marginHorizontal:45, marginVertical:25, backgroundColor:'#dbdbdbdb', borderWidth:2, borderColor:'#dbdbdbdb' ,borderRadius:15}}
          innerBorderStyle={{width:0}}
          buttonStyle={{backgroundColor:'transparent'}}
          selectedButtonStyle={{backgroundColor:'rgb(242,242,242)', borderRadius:13}}
          selectedTextStyle={{color: globalColors.lightBlack}}
        />
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
            {buttonGroup()}
          </View>
        </ScrollView>

      </SafeAreaView>
    );
}
export default Finance
