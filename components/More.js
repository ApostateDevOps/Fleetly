import React from 'react';
import { Alert, SafeAreaView, SectionList, Text, View } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {moreStyles} from '../styles';
import MyButton from '../MyButton';

const list=[
  {
    title:'Account',
    data:[
      {info:'Michał Pawłowski',icon:'account-circle-outline'},
      {info:'Upgrade to PREMIUM!',icon:'star-circle'},
    ]
  },
  {
    title:'General',
    data:[      
      {info:'Vehicles',icon:'car'},
      {info:'Categories',icon:'dns-outline'},
      {info:'Currency',icon:'currency-usd'},
      {info:'Appearance',icon:'invert-colors'},
      {info:'Notifications',icon:'bell-ring-outline'},
    ]
  },
  {
    title:'Other',
    data:[
      {info:'Advanced', icon:'tools'},
      {info:'Support', icon:'lifebuoy'},
      {info:'Terms and Policies', icon:'information-outline'}
    ]
  },{
    data:[
      {info:'Logout'}
    ]
  }
]

const handleLogout=()=>{
  alert('Logout')
}

const Item=({ info, icon })=>{
  if(info=='Logout'){
    return(
      <View style={{justifyContent:'center'}}>
        <MyButton func={handleLogout} title={info} style={moreStyles.logoutButton}/>
        <Text style={moreStyles.version}>Fleetly v1.0.0 </Text>
      </View>
    )
  }
  else{
    return(
      <TouchableHighlight onPress={()=>alert('tap')} activeOpacity={0.7} underlayColor="lightgrey">
      <View style={moreStyles.item}>
        <MaterialCommunityIcons name={icon} size={31} color={'#ec1817'}/>
          <Text style={moreStyles.itemText}>{info}</Text>
        <MaterialCommunityIcons style={{position:'absolute', right:15}} name={'chevron-right'} size={25} color={'darkgrey'}/>
      </View>
    </TouchableHighlight>
      )
  }
}


const More=()=> {
  const renderItem=({ item })=>(
    <Item info={item.info} icon={item.icon}/>
  )
  
  const renderSectionHeader=({section:{title}})=>(
    <Text style={moreStyles.sectionHeader}>{title}</Text>
  )
  return (
      <SafeAreaView style={{flex: 1}}>
        <View style={moreStyles.topHeader}>
          <Text style={{fontFamily:'Inter_600SemiBold', fontSize:17, color:'#282828'}}>More</Text>
        </View>
        <SectionList
        sections={list} 
        keyExtractor={(item,index)=>item.info+index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        stickySectionHeadersEnabled={false}
        />
      </SafeAreaView>
    );
}
export default More
