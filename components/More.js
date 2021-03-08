import React, { Component } from 'react';
import { SafeAreaView, SectionList, StatusBar, Text, View } from 'react-native';
import { FlatList, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import {moreStyles} from '../styles'

const DATA=[
  {
    title:"Account",
    data:["Michał Pawłowski","Upgrade to PREMIUM"]
  },
  {
    title:"Other",
    data:["Vehicles","Categories","Currency"]
  }
]

const Item=({title})=>(
    <TouchableHighlight style={moreStyles.item} onPress={()=>alert('tap')} activeOpacity={0.7} underlayColor="lightgrey">
      <Text>{title}</Text>
    </TouchableHighlight>
  )

const More=()=> {
  const renderItem=({item})=>(
    <Item title={item}/>
  )
  const renderSectionHeader=({section:{title}})=>(
    <Text style={moreStyles.sectionHeader}>{title}</Text>
  )
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={moreStyles.topHeader}>
          <Text style={{fontFamily:'Inter_600SemiBold', fontSize:17, color:'#282828'}}>More</Text>
        </View>
        <SectionList sections={DATA} keyExtractor={(item, index) => item + index} renderItem={renderItem} renderSectionHeader={renderSectionHeader} stickySectionHeadersEnabled={false}/>
      </SafeAreaView>
    );
}
export default More
