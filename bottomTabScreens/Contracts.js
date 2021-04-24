import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { View, Text } from 'react-native';
import {globalColors, globalFonts} from '../styles'
import TopHeader from '../components/TopHeader'
import TopPickers from '../components/TopPickers'
import { ScrollView } from 'react-native-gesture-handler';

const Contracts=()=> {
    return (
      <View style={{flex:1}}>
        <SafeAreaView style={{flex:1}}>
          <TopHeader title={"Contracts"}/>
          <TopPickers/>
        </SafeAreaView>
      </View>
    );
}
export default Contracts
