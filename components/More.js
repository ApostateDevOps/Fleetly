import React, { Component } from 'react';
import { SafeAreaView, SectionList, StatusBar, Text, View } from 'react-native';
import { FlatList, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import {ListItem, Avatar} from 'react-native-elements';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {moreStyles} from '../styles';

const list=[
  {
    title:'Account',
    icon:'account-circle-outline'
  },
  {
    title:'Upgrade to PREMIUM!',
    icon:'star-outline'
  },
  {
    title:'Vehicles',
    icon:'car'
  },
  {
    title:'Categories',
    // icon:'buffer',
    // icon:'view-grid-outline',
    icon:'dns-outline'
  },
  {
    title:'Currency',
    icon:'currency-usd'
  }
]

const renderItem=({ item })=>(
  <ListItem bottomDivider onPress={()=>alert('tap')}>
    <MaterialCommunityIcons name={item.icon} size={25} color={'#ec1817'}/>
    <ListItem.Content>
      <ListItem.Title>{item.title}</ListItem.Title>
    </ListItem.Content>
    <MaterialCommunityIcons name='chevron-right' size={25} color={'lightgrey'}/>
  </ListItem>
)

const More=()=> {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={moreStyles.topHeader}>
          <Text style={{fontFamily:'Inter_600SemiBold', fontSize:17, color:'#282828'}}>More</Text>
        </View>
        <FlatList keyExtractor={(item,index)=>index.toString()} data={list} renderItem={renderItem}/>
      </SafeAreaView>
    );
}
export default More
