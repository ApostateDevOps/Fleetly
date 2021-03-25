import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { Component, useEffect, useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import {VictoryChart, VictoryBar, VictoryTheme, VictoryAxis, VictoryGroup, VictoryLabel, VictoryPie} from "victory-native";
import {financeStyles, globalColors, globalFonts} from '../styles';

// redux
function sumTotal(arr){
  let sum=0
  for(let i=0;i<arr.length;i++){
    sum+=arr[i].value
  }
  return sum
}
const pieData={
  income:[
    {category:'Rental', value:11100, color:"#58cc8a"},
    {category:'Overmileage', value:450, color:"#ff8fdb"},
    {category:'Damage', value:100, color:"#3d5db8"},
    {category:'Transport', value:150, color:"#FFA32F"},
  ],
  expenses:[
    {category:'Fuel', value:280, color:"#FFA32F"},
    {category:'Repairs', value:550, color:"#41a1d9"},
    {category:'Upgrades', value:1230, color:"#f2ce3d"},
    {category:'Lease', value:3230, color:"#db6558"},
    {category:'Insurance', value:930, color:"#9552EA"},
    {category:'Other', value:350, color:"#c9bb8b"},
  ],
}
const totalData={
  totalIncome:sumTotal(pieData.income),
  totalExpenses:sumTotal(pieData.expenses),
  currency:'PLN'
}
const chartData=[
  {info:"PROFIT", value: Math.abs(totalData.totalIncome-totalData.totalExpenses), originalValue:totalData.totalIncome-totalData.totalExpenses},
  {info:"EXPENSES", value: totalData.totalExpenses, originalValue:totalData.totalExpenses},
  {info:"INCOME", value: totalData.totalIncome, originalValue:totalData.totalIncome},
]
// const defaultChartData=[
//   {info:"PROFIT",value:50},
//   {info:"EXPENSES",value:50},
//   {info:"INCOME",value:1},
// ]

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
          <Text style={{color: globalColors.income, fontFamily:globalFonts.medium, fontSize:25, textAlign:'right'}}>{totalData.totalIncome} {totalData.currency}</Text>
          <Text style={{color: globalColors.lightBlack, fontFamily:globalFonts.regular}}>INCOME</Text>
        </View>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Text style={{color: globalColors.expenses, fontFamily:globalFonts.medium, fontSize:25, textAlign:'right'}}>{totalData.totalExpenses} {totalData.currency}</Text>
          <Text style={{color: globalColors.lightBlack, fontFamily:globalFonts.regular}}>EXPENSES</Text>
        </View>
      </View>
      )
    }

    function summaryChart(){
      // const [graphicData, setGraphicData]=useState(defaultChartData);
      // useEffect(()=>{
      //   setGraphicData(chartData);
      // },[])
      return(
        <VictoryChart height={200} width={screenWidth} padding={{left:90, top:45, bottom:45, right:90}} theme={VictoryTheme.material}>
          <VictoryAxis style={{axis:{stroke:"transparent"}, ticks:{stroke:"transparent"}}}/>
          {/* tickLabels:{fill:'transparent'} */}
          <VictoryBar
            horizontal
            cornerRadius={{top:8, bottom:8}}
            data={chartData}
            x="info" y="value"
            labels={({datum})=>datum.info=="EXPENSES" ? `-${datum.value} ${totalData.currency}` : `${datum.originalValue} ${totalData.currency}`}       //visual minus value
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
        <View>
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

        {pieChart(selectedIndex)}
        
        </View>
      )
    }

    function pieChart(selectedIndex){
      return(
        <VictoryPie
          height={300}
          width={screenWidth}
          data={selectedIndex==0 ? pieData.expenses : pieData.income}
          x="category"
          y="value"
          innerRadius={55}
          style={{
            data:{
              fill:({datum})=>datum.color
            },
            labels:{
              fontWeight:'400',
              fontSize:15,
              fill:({datum})=>datum.color
            }
          }}
          labels={({datum})=>selectedIndex==0 ? `${Math.round(datum.value/totalData.totalExpenses*100)}%` : `${Math.round(datum.value/totalData.totalIncome*100)}%`}
          animate={{easing:"exp"}}
        />
      )
    }

    return (
        <SafeAreaView>
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
            {/* piechart in buttongroup */}
          </View>
        </ScrollView>
        </SafeAreaView>
    );
}
export default Finance
