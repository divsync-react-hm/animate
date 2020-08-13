// import React, {  useRef, useState } from 'react';
// import { View,
//          Text, 
//          StyleSheet, 
//          Image, 
//          Animated, 
//          PanResponder,
//          Platform,
//          LayoutAnimation,
//          UIManager,
//         } from "react-native";
// import ProductCard from '../components/ProductCard';

// import Icon from 'react-native-vector-icons/FontAwesome5';

// const data = [0, 1, 2];

// const StartReturnScreen = () =>{

//   const [ cardIndex, setCardIndex ] = useState(0);
//   let [ direction, setDirection ] = useState('');
//   let [ cardStyle, setCardStyle] = useState({zIndex: 1});
//   const [bagWidth, setBagWidth] = useState('90%');

//   let pan = useRef(new Animated.ValueXY()).current;
//   let zCardIndex = useRef(new Animated.Value(0)).current;
    

//   //  const panResponder = PanResponder.create({
//   //   onStartShouldSetPanResponder: () => true,
//   //   onPanResponderMove: Animated.event([
//   //     null,
//   //     {
//   //       dx: pan.x, // x,y are Animated.Value
//   //       dy: pan.y,
//   //     }
//   //   ]),
//   //   onPanResponderRelease: (event, gesture) => {

//   //     if(gesture.dy > '50' ){
//   //       setDirection('down');
//   //       Animated.timing(
//   //         pan, // Auto-multiplexed
//   //         { 
//   //           toValue: { x: 0, y: 750 },
//   //           duration: 250,
//   //           useNativeDriver: false
//   //       } // Back to zero
//   //       ).start(()=> {
//   //         setCardIndex(cardIndex + 1);
//   //         pan.setValue({x: 0, y: 0})
//   //         setCardStyle({
//   //           zIndex: 1,
//   //         })
//   //       });
//   //     }

//   //     if(gesture.dy < '-5'){
//   //       setDirection('up');

//   //       Animated.sequence([
//   //         Animated.timing(
//   //           pan, // Auto-multiplexed
//   //           { 
//   //             toValue: { x: 0, y: -100 },
//   //             duration: 500,
//   //             useNativeDriver: false
//   //         } // Back to zero
//   //         ),
//   //         Animated.spring(
//   //           pan, // Auto-multiplexed
//   //           { 
//   //             toValue: { x: 0, y: 0 },
//   //             useNativeDriver: false
//   //         } // Back to zero
//   //         )
//   //         ]).start(()=> {
//   //           setCardIndex
//   //           pan.setValue({x: 0, y: 0});
//   //           cardIndex < data.length ? setCardIndex(cardIndex + 1) : setCardIndex(0) ;
//   //         });
        
//   //       setCardStyle({ zIndex: 1 })

//   //     }
//   //   },
//   // });

// /////////////

// // restricted

//   // const panResponder = PanResponder.create({
//   //   onStartShouldSetPanResponder: () => true,
//   //   onPanResponderMove: Animated.event([
//   //     null,
//   //     {
//   //       dx: pan.x, // x,y are Animated.Value
//   //       dy: pan.y,
//   //     }
//   //   ]),
//   //   onPanResponderRelease: (event, gesture) => {

//   //     if(gesture.dy > '50' ){
//   //       setDirection('down');
//   //       Animated.timing(
//   //         pan, // Auto-multiplexed
//   //         { 
//   //           toValue: { x: 0, y: 750 },
//   //           duration: 250,
//   //           useNativeDriver: false
//   //       } // Back to zero
//   //       ).start(()=> {
//   //         setCardIndex(cardIndex + 1);
//   //         pan.setValue({x: 0, y: 0})
//   //         setCardStyle({
//   //           zIndex:  1,
//   //         })
//   //       });
//   //     }

//   //     if(gesture.dy < '-5'){
//   //       setDirection('up');

//   //       Animated.sequence([
//   //         Animated.timing(
//   //           pan, // Auto-multiplexed
//   //           { 
//   //             toValue: { x: 0, y: -100 },
//   //             duration: 350,
//   //             useNativeDriver: false
//   //         } // Back to zero
//   //         ),
//   //         Animated.timing(
//   //           pan, // Auto-multiplexed
//   //           { 
//   //             toValue: { x: 0, y: 0 },
//   //             useNativeDriver: false
//   //         } // Back to zero
//   //         )
//   //         ]).start(()=> {
//   //           pan.setValue({x: 0, y: 0});
//   //           cardIndex < data.length ? setCardIndex(cardIndex + 1) : setCardIndex(0) ;
//   //         });
//   //       setCardStyle({ zIndex: cardIndex + 1 })

//   //     }
//   //   },
//   // });

//   /////////////////


//   const panResponder = PanResponder.create({
//     onStartShouldSetPanResponder: () => true,
//     onPanResponderMove: Animated.event([
//       null,
//       {
//         dx: pan.x, // x,y are Animated.Value
//         dy: pan.y,
//       },
//     ]),
//     onPanResponderRelease: (event, gesture) => {
//       if (gesture.dy > "100") {
//         setDirection("down");
//         setBagWidth('95%')
//         Animated.timing(
//           pan, // Auto-multiplexed
//           {
//             toValue: { x: 0, y: 750 },
//             duration: 250,
//             useNativeDriver: false,
//           } // Back to zero
//         ).start(() => {
//           setCardIndex(cardIndex + 1);
//           setBagWidth('90%')
//           pan.setValue({ x: 0, y: 0 });
//           setCardStyle({
//             zIndex: 1,
//           });
//         });
//       }
//       if (gesture.dy < "-5") {
//         setDirection("up");
//         //let val = data.shift();
//         Animated.timing(
//           pan, // Auto-multiplexed
//           {
//             toValue: { x: 0, y: -100 },
//             duration: 350,
//             useNativeDriver: false,
//           } // Back to zero
//         ).start(() => {
//           Animated.timing(
//             pan, // Auto-multiplexed
//             {
//               toValue: { x: 0, y: 20 },
//               useNativeDriver: false,
//             } // Back to zero
//           ).start(() => {
//             pan.setValue({ x: 0, y: 0 });
//             setCardIndex(cardIndex + 1)
//             cardIndex < data.length
//               ? setCardIndex(cardIndex + 1)
//               : setCardIndex(0);
//           });
//           setCardStyle({ zIndex: cardIndex + 1 });
//           //data.push(val);
//         });
//       }
//     },
//   });

//   if (
//     Platform.OS === "android" &&
//     UIManager.setLayoutAnimationEnabledExperimental
//   ) {
//     UIManager.setLayoutAnimationEnabledExperimental(true);
//     LayoutAnimation.spring();
//   }

//     return(
//         <View style={styles.screen}>
//          <View >
//             { 
//                 cardIndex > data.length  ? (
//                 <View style={styles.noCardLeft}>
//                   <Text style={{color: '#412a74'}}>No item left! </Text>
//                 </View>
//               ) : 
//             data.map( (item, index) => {
//               if(direction === 'down') {
//                 if(index < cardIndex){
//                   return null;
//                 }
//               }

//             if(index === cardIndex){
//               return <Animated.View 
//               {...panResponder.panHandlers}
//               style={[ pan.getLayout(), 
//                 {position: 'absolute', width: '100%',
//               zIndex: zCardIndex.interpolate({inputRange: [ 0, 0.5, 1 ], outputRange: [ 3, 2, 0 ] })
//               }, 
//                 cardStyle 
//               ]} 
//               key={item}
//             >
//                 <ProductCard
//                     title='Lorem Ipsum is simply dummy text of the printing'
//                     price={item}
//                 /> 
//             </Animated.View>
//             }

            
//             return (
//               <Animated.View 
//               {...panResponder.panHandlers}
//               key={item}
//               style={[
//                 {position: 'absolute', width: '100%',
//                  top: -20 * (index - cardIndex),
//                  zIndex: index
//                  }]}
//             >
//                 <ProductCard
//                     // style={{ marginTop: 50 }}
//                     title='Lorem Ipsum is simply dummy text of the printing'
//                     price={item}
//                 /> 
//             </Animated.View> 
//           )
            
//           }).reverse()
//           }
//         </View>

//             <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end', marginBottom: 40}}>
//                 <Text numberOfLines={2} style={{ color: '#412a74', width: '50%',  textAlign: "center"}}>
//                     switch each item down
//                     to confirm
//                 </Text>
//                 <Icon name='chevron-down' size={12}  color='#412a74' />
//             </View>

//             <View style={styles.imgCont}>
//                 <Image style={{...styles.bagImg, width: bagWidth}} source={require('../assets/start_return_bag.png')} />
//             </View>
            
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     screen :{
//         flex: 1,
//         justifyContent: 'space-between',
//         marginTop: 50,
        
//     },
//     bagImg :{
//         height: 150,
//         alignSelf: 'center',
//         zIndex: 3,
//     },
//     noCardLeft :{
//       width: '100%',
//       height: 100,
//       justifyContent: 'center',
//       alignItems: 'center',
//       position: 'absolute',
//     }
// });

// export default StartReturnScreen;




import React, { useRef, useState } from "react";
import {
  Animated,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  PanResponder,
  Platform,
  UIManager,
  LayoutAnimation,
} from "react-native";
import ItemCard from '../components/item_card';
// import Header from "../header";
// import ItemCard from "./item_card";
// import { RQText } from "../uiComponents";
// import { connect } from "react-redux";
// import TouchableHighlight from "react-native-web/dist/exports/TouchableHighlight";
// import TextInput from "react-native-web/src/exports/TextInput";

const data = [0, 1, 2];
const color = ["red", "blue", "gree"];

const StartReturnScreen = (props) => {
// const ReturnsScreen = (props) => {
  const [cardIndex, setCardIndex] = useState(0);
  let [direction, setDirection] = useState("");
  let [cardStyle, setCardStyle] = useState({ zindex: 2 });
  const [boxWidth, setBoxWidth] = useState(280);
  const [ num, setNum] = useState(1);

  const pan = useRef(new Animated.ValueXY()).current;
  // const zCardIndex = useRef(new Animated.Value(0)).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        dy: pan.y,
      },
    ]),
    onPanResponderRelease: (event, gesture) => {
      if (gesture.dy > "50") {
        setDirection("down");
        setBoxWidth(330);
        Animated.timing(
          pan, // Auto-multiplexed
          {
            toValue: { x: 0, y: 750 },
            duration: 250,
            useNativeDriver: false,
          } // Back to zero
        ).start(() => {
          setCardIndex(cardIndex + 1);
          setBoxWidth(280)
          pan.setValue({ x: 0, y: 0 });
          setCardStyle({
            zIndex: 1,
          });
        });
      }

      if (gesture.dy < "-5") {
        setDirection("up");
        setCardStyle({zIndex: 0})
        setNum(0)

        Animated.sequence([
          Animated.timing(
            pan, // Auto-multiplexed
            {
              toValue: { x: 0, y: -250 },
              duration: 350,
              useNativeDriver: false,
            } // Back to zero
          ),
          Animated.spring(
            pan, // Auto-multiplexed
            {
              toValue: { x: 0, y: -40 },
              useNativeDriver: false,
            } // Back to zero
          ),
        ]).start(() => {
        setCardStyle({ zIndex: 1 });
        setNum(1)
        pan.setValue({ x: 0, y: 0 });

          cardIndex < data.length
            ? setCardIndex(cardIndex + 1)
            : setCardIndex(0);
        });
      }
    },
  });

  // const panResponder = PanResponder.create({
  //   onStartShouldSetPanResponder: () => true,
  //   onPanResponderMove: Animated.event([
  //     null,
  //     {
  //       dx: pan.x, // x,y are Animated.Value
  //       dy: pan.y,
  //     },
  //   ]),
  //   onPanResponderRelease: (event, gesture) => {
  //     if (gesture.dy > "50") {
  //       setDirection("down");
  //       setBoxWidth(335);
  //       Animated.timing(
  //         pan, // Auto-multiplexed
  //         {
  //           toValue: { x: 0, y: 750 },
  //           duration: 350,
  //           useNativeDriver: false,
  //         } // Back to zero
  //       ).start(() => {
  //         setCardIndex(cardIndex + 1);
  //         setBoxWidth(329);
  //         pan.setValue({ x: 0, y: 0 });
  //         setCardStyle({
  //           zIndex: 1,
  //         });
  //       });
  //     }

  //     if (gesture.dy < "-5") {
  //       setDirection("up");
  //       setCardStyle({zIndex: -1})
  //       //let val = data.shift();

  //       Animated.timing(
  //         pan, // Auto-multiplexed
  //         {
  //           toValue: { x: 0, y: -200 },
  //           duration: 250,
  //           useNativeDriver: false,
  //         } // Back to zero
  //       ).start(() => {
  //         setCardStyle({zIndex: 0})
  //         Animated.timing(
  //           pan, // Auto-multiplexed
  //           {
  //             toValue: { x: 0, y: -40 },
  //             useNativeDriver: false,
  //           } // Back to zero
  //         ).start(() => {
  //           pan.setValue({ x: 0, y: 0 });
  //           cardIndex < data.length
  //             ? setCardIndex(cardIndex + 1)
  //             : setCardIndex(0);
  //         });
  //         setCardStyle({ zIndex: 2 });
  //         //data.push(val);
  //       });
  //     }
  //   },
  // });

  if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  }

  return (
    <View style={{ flex: 1 }}>

      <View style={{ flex: 1, marginTop: 50 }}>
        {cardIndex > data.length ? (
          <View style={styles.noCardLeft}>
            <Text style={{ color: "#412a74" }}>No item left! </Text>
          </View>
        ) : (
          data
            .map((item, index) => {

              if (direction === "down") {
                if (index < cardIndex) {
                  return null;
                }
              }

              if (index === cardIndex) {
                return (
                  <Animated.View
                    {...panResponder.panHandlers}
                    style={[
                      pan.getLayout(),
                      {
                        position: "absolute",
                        width: "100%",
                        elevation: num,
                        marginTop : 20,
                        // zIndex: 3,
                        // zIndex: pan.y.interpolate({
                        //   inputRange: [0, 1, 2 ],
                        //   outputRange: [3,2,0],
                        // }),
                      },
                      // cardStyle,
                    ]}
                    key={item}
                  >
                    <ItemCard text={item} />
                  </Animated.View>
                );
              }

              return (
                <Animated.View
                  {...panResponder.panHandlers}
                  key={item}
                  style={[
                    {
                      position: "absolute",
                      width: "100%",
                      // top: -20 * (index - cardIndex ),
                      marginTop: -20 * index,
                      elevation: 0
                    },
                  ]}
                >
                  <ItemCard text={item} />
                </Animated.View>
              );
            })
            .reverse()
        )}
      </View>

      <View style={{ flex: 1 }}>
        <View style={{ alignItems: "center" }}>
          {/* <RQText
            style={{ marginTop: 10, color: "#8755DE" }}
            value={"Swipe each item down"}
          />
          <RQText
            style={{ color: "#8755DE", marginBottom: 2 }}
            value={"to confirm."}
          /> */}
          <Image
            style={{
              height: 7.67,
              width: 14.82,
              marginTop: 10,
              marginBottom: 10,
            }}
            // source={require("../../assets/images/down_arrow_purple.png")}
            source={require('../assets/down_arrow_purple.png')}
          />
        </View>
        <View style={{ ...styles.bagContainer, alignItems: "center" }}>
          <Image
            style={{ ...styles.bag, width: boxWidth }}
            // source={require("../../assets/images/start_return_bag.png")}
            source={require('../assets/start_return_bag.png')}
            resizeMode="contain"
          />
          <View style={styles.container}>
            {/* <RQText
              style={styles.userText}
              // value={props.user.first_name + "'s RQ Bag"}
            /> */}
          </View>
        </View>
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
        >
          {/* <TouchableOpacity
            onPress={() => props.navigation.navigate("BagCheck")}
            style={{
              backgroundColor: "#F4F2F2",
              height: 40,
              width: 150,
              flexDirection: "row",
              justifyContent: "center",
              borderRadius: 40,
            }}
          >
            <RQText
              style={{ fontSize: 17, color: "#9A9A9A", alignSelf: "center" }}
              value={"Continue"}
            />
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // position: "absolute",
    height: "70%",
    paddingLeft: "15%",
    justifyContent: "flex-end",
  },
  noCardLeft: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    // position: "absolute",
  },
  bag: {
    height: 276.5,
  },
  userText: {
    color: "white",
  },
  cardsView: {
    height: "50%",
  },
  bagContainer: {
    width: "100%",
    //zIndex: 2,
  },
});

// const Returns = connect((state) => ({
//   user: state.user,
// }))(ReturnsScreen);

// export default Returns;

export default StartReturnScreen;

