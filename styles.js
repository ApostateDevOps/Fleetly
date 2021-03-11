const {StyleSheet} = require ("react-native")
const loginStyles=StyleSheet.create({
logoView:{
    flex:3,
    backgroundColor:"white"
},
underLogoView:{
    flex:4,
    backgroundColor:"white"
},
textInputsView:{
    flexDirection:"row",
    height:60,
    borderBottomWidth:1,
    marginHorizontal:45,
    marginTop:10,
    paddingTop:20,
},
textInputs:{
    flex:1
},
inputIcons:{
    paddingTop:12,
    paddingRight:7,
    paddingLeft:3
},
forgotPasswordText:{
    fontSize:13,
    fontFamily:"Inter_400Regular",
    color:"#ec1817",
    alignSelf:"flex-end",
    marginRight:45,
    marginTop:15
},
loginButton:{
    alignSelf:'stretch',
    alignItems:'center',
    justifyContent:'center',
    flex:1,
    backgroundColor:"#ec1817",
    borderRadius:45,
},
loginButtonView:{
    alignSelf:'stretch',
    alignItems:'center',
    justifyContent:'center',
    marginTop:50,
    height:53,
    borderRadius:45,
    marginHorizontal:90,
    shadowColor: "red",
    shadowOffset: {
	    width: -1,
	    height: 6,
},
    shadowOpacity: 0.44,
    shadowRadius: 10.322,
    backgroundColor:"#ec1817",
    elevation: 16,
    // borderWidth:1
},
loginFB:{
    alignItems:'center',
    justifyContent:'center',
    height:47,
    borderRadius:30,
    backgroundColor:'#4267B2',
    width: 150
},
loginGG:{
    alignItems:'center',
    justifyContent:'center',
    height:40,
    borderRadius:30,
    backgroundColor:'wheat'
},
signUp:{
    fontFamily:"Inter_400Regular",
    color:"grey"
}
})
export {loginStyles}

const moreStyles=StyleSheet.create({
    item:{
        // backgroundColor: 'red',
        paddingHorizontal:15,
        height:55,
        // borderBottomWidth:1,
        justifyContent:'center'
    },
    topHeader:{
        alignItems:'center',
        justifyContent:'center',
        height:45,
        borderColor:'lightgrey',
        borderBottomWidth:1,
    },
})
export {moreStyles}