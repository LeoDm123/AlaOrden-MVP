import { StyleSheet } from 'react-native';
import { FONTS, SHADOWS, COLORS, SIZES, assets, dim } from './theme';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
  },

////////////////HEADER AND LOGO///////////////

  LogoView: {
    resizeMode:"cover",
    justifyContent: "space-between",
    alignItems: "center",
    width:150,
    height:150,
  },
  HeaderTitle: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
    color: COLORS.primary,
    marginTop: SIZES.base / 2,
    textAlign:'center',  
  },

  HeaderTitleView: {
    marginVertical:SIZES.font,
    alignItems:"center",
  },

  Header: {
    backgroundColor: COLORS.white,
    borderColor:COLORS.primary,
    borderBottomWidth:0.5,
    padding: SIZES.font,
    alignItems:"center",
  },

  Header2: {
    backgroundColor: COLORS.white,
    borderColor:COLORS.primary,
    borderBottomWidth:0.5,
    padding: SIZES.font,
  },

  Header3: {
    backgroundColor: COLORS.white,
    borderColor:COLORS.primary,
    borderBottomWidth:0.5,
  },

  HeaderPosition: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  Logo3View: {
    resizeMode:"contain",
    width:"100%",
    marginTop:20,
  },

  Logo3View2: {
    resizeMode:"contain",
    width:"100%",
  },

  LogoDisplay: {
    marginTop:20,
    padding:SIZES.font,   
  },

  SubTitle: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.large,
    color: COLORS.primary, 
    textAlign:'center', 
  },

  StatusBar: {
    backgroundColor:COLORS.white,
    barStyle:COLORS.primary,
  },

  ////////////////APP IMAGES///////////////
  Home: {
    width:'100%',
    resizeMode:"contain"
  },
 
  Arrows: {
    height:25,
    width:25,
  },

  ////////////////APP BUTTONS//////////////
  HomeButtons: {
    justifyContent:"space-between",
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.small/2,
  },

  Button: {
    height:40,
    flexDirection:'row',
    paddingHorizontal:24.9,
  },

  PayButtonText: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium,
    color:COLORS.white,
    textAlign: "center",
  },

  CounterMinusView: {
    borderRadius: 100,
    marginRight: 20,
    padding: 4,
    borderWidth: 1,
    borderColor: COLORS.primary,
    opacity: 0.5,    
  },

  CounterIcon: {
    fontSize: 20,
    color: COLORS.primary,
  },

  CounterPlusView: {
    borderRadius: 100,
    marginLeft: 20,
    padding: 4,
    borderWidth: 1,
    borderColor: COLORS.primary,
    opacity: 0.5,    
  },

  CounterView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  /////////////////AVATAR//////////////////
  AvatarView: {
    resizeMode:"contain",
    width:"100%",
    height:"100%",
    borderRadius:"100%",
  },

  AvatarSize: {
    width:45,
    height:45,
  },

  AvatarBadge: {
    width:20,
    height:20,
    bottom:0,
    right:0,
    position:"absolute",
    resizeMode:"contain",
  },

//////////////////SEARCH BAR//////////////////////

  SearchBarPosition: {
    width: "100%",
    borderRadius: SIZES.font,
    backgroundColor: COLORS.lightGray,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.small - 2,  
  },

  SearchBarLogo: {
    resizeMode:"contain",
    width: 20, 
    height: 20,
    marginRight:SIZES.base,  
  },

  SearchBarText: {
    flex:1,
  },

  CatButtonDisplay: {
    width:"80%",
    alignContent:'center',
    flexDirection:'row',    
  },

  HorizontalDisplay: {
    alignItems:'center',
    flexDirection:'row',
    marginTop:10,
    justifyContent:'space-evenly',
  },

////////////////CARDS////////////////////////////////
MATCard:{
  backgroundColor: COLORS.lightGray,
  borderColor:COLORS.primary,
  borderWidth:0.3,
  borderRadius: SIZES.font,
  margin: SIZES.base,
  ...SHADOWS.dark,
},

ImgContainer:{
  width: "100%",
  height: 150,  
  backgroundColor:COLORS.white,
  borderTopEndRadius: SIZES.font,
  borderTopStartRadius: SIZES.font,
  padding:5,
},

ProdImg:{
  width: 373, //REVISARRR!!!! 
  height: "100%",
  borderTopLeftRadius: SIZES.font,
  borderTopRightRadius: SIZES.font,
  resizeMode:'contain',
},

MatTitle:{
  width: "100%", 
  padding: SIZES.font,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
},

MatPrice:{
  marginTop: SIZES.font,  
},

AdCardView: {
  backgroundColor: COLORS.white,
  borderRadius: SIZES.extraLarge,
  width:"100%",
  borderEndColor:COLORS.primary,
  borderWidth:0.5,
  ...SHADOWS.light,
},

AdCardImgView: {
  flexDirection:"row",
  maxWidth:200,
  padding:SIZES.base,
},

AdCardImg: {
  width:100, 
  height:110,
  resizeMode:"contain",
  borderRadius:SIZES.extraLarge,
},

AdCardAdress: {
  fontFamily: FONTS.semiBold,
  fontSize: SIZES.medium-1,
  color: COLORS.primary,
  marginStart:10,
  marginTop:5,
},

AdCardInstructions: {
  fontFamily: FONTS.regular,
  fontSize: SIZES.regular,
  color: COLORS.primary,
  marginStart:10,
  marginTop:5,
},

AdCardName: {
  fontFamily: FONTS.bold,
  fontSize: SIZES.large,
  color: COLORS.primary,
  marginStart:10,
  marginTop:5,
},

ButtonDisplay: {
  flexDirection:"row",
  alignSelf: "flex-end",
  justifyContent:"space-evenly",  
  paddingBottom:10,
},

////////////////PRODUCT RENDER///////////////////////

  ProductSafeArea: {
    width: width,
    height:240,
    alignItems: 'center',
    justifyContent: 'center',
  },

  PhotoAlign: {
    height: 240,
    alignItems: 'center',
    justifyContent: 'center', 
  },

  PhotoDisplay: {
    height: '100%',
    resizeMode:"contain",
    marginTop:10,
  },

  Display: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    marginTop: 32,
  },

  AnimatedView: {
    width: '16%',
    height: 2.4,
    backgroundColor: COLORS.primary,
    opacity:0.5,
    marginHorizontal: 4,
    borderRadius: 100,   
  },

  InfoDisplay: {
    paddingHorizontal: 16,
    marginTop: 6,
  },

  InfoSubDisplay: {
    flexDirection: 'row',
    marginVertical: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  ProductName: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.extraLarge,
    color: COLORS.primary,
    maxWidth:300,  
  },

  ProductInfoAnimated: {
    width: '16%',
    height: 2.4,
    backgroundColor: COLORS.primary,
    opacity:0,
    marginHorizontal: 4,
    borderRadius: 100,
  },

  ProductPresentation: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.large,
    color: COLORS.primary, 
  },

  DescriptionTitle: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.large,
    color: COLORS.primary,
    marginBottom:5,
  },

  Description: {
    fontSize: SIZES.medium,
    color: COLORS.primary,
    lineHeight:20,
    textAlign:"justify",
  },

  CounterAligment: {
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    borderBottomColor:COLORS.primary,
    borderBottomWidth:0.5,
    paddingVertical:SIZES.large,
  },

  Price: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.large+3,
    color: COLORS.primary,
  },

  Separator: {
    paddingVertical:SIZES.large,
    borderBottomColor:COLORS.primary,
    borderBottomWidth:0.5,
  },

  SubText: {
    fontFamily:FONTS.regular,
    fontSize: SIZES.medium,
  },

  PriceBig: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.large+3,
    color: COLORS.primary,
  },  

  CatTitle: {
    fontFamily: FONTS.bold,
    fontSize: 15,
    color: COLORS.primary,
    marginStart:15,
    marginTop:10,
  },

  AdCardFormat: {
    padding:5,
  },

  AddCardFormat: {
    padding:5,
    alignItems:'center',
  },

  AdCardsScroll: {
    height: 550,
  },


///////////////// MY CART/////////////////////////////////

  CartRenderStack: {
    flexDirection:"row",
    alignItems:"center",
    padding:SIZES.base,
  },

  CartRenderImage: {
    resizeMode: 'contain',
    height:120,
    width:120,
  },

  CartRenderTitle: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.large,
    color: COLORS.primary,
    maxWidth:280,    
  },

  CartRenderPrice: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.regular,
    color: COLORS.primary,
    maxWidth:280,
    marginTop:10,
    marginEnd:5,    
  },

  CartRenderCounter: {
    flexDirection: 'row',
    alignItems: 'center',    
  },

  CartRenderRemove: {
    fontSize:SIZES.extraLarge,
    color: COLORS.primary,
    padding: SIZES.medium,
    marginStart:80,
  },

  CartView: {
    paddingVertical:SIZES.medium,
    paddingHorizontal:SIZES.small/2,   
  },

  CartTitle: {
    fontFamily:FONTS.bold,
    fontSize:SIZES.large,
    padding:SIZES.base,
    color:COLORS.primary,    
  },

  CartPricesView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  CartPriceM: {
    fontFamily:FONTS.regular,
    fontSize:SIZES.medium,
    padding:SIZES.base,
    color:COLORS.primary,  
  },

  CartPriceS: {
    fontFamily:FONTS.regular,
    fontSize:SIZES.small,
    padding:SIZES.base,
    color:COLORS.primary,  
  },

  CartSafeAreaView: {
    justifyContent: "center",
    alignItems: "center", 
  },

  FormView: {
    padding:SIZES.base,
  },

  InputForm: {
    borderWidth:1,
    borderColor:COLORS.primary,
    borderRadius:10,
    padding:SIZES.base,
    marginBottom:10,
    color:COLORS.primary,
  },

//////////////////////////////// LOGISTICA ///////////////////////////////

  LogisticSafeAreaView: {
    justifyContent: "center",
    alignItems: "center", 
    marginBottom:20,
  },

});

export default styles;