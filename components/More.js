import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const DATA=[
  {
    category:'account',
    title:'Upgrade to PREMIUM',
    icon:''
  }
]

const Item=({title})=>(
    <View>
      <Text>{title}</Text>
    </View>
  )

const More=()=> {
  const renderItem=({item})=>(
    <Item>{item.title}</Item>
  )
    return (
      <SafeAreaView style={{flex: 1}}>
        <FlatList>
          <Text>More</Text>
        </FlatList>
      </SafeAreaView>
    );
}
export default More
