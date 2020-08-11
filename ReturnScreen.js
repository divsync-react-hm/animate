import React, { useRef, useState } from "react";
import {
  Animated,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,
  PanResponder,
  Platform,
  UIManager,
  LayoutAnimation,
} from "react-native";
// import Header from "../header";
import ItemCard from "../components/item_card";
// import { RQText } from "../uiComponents";
// import { connect } from "react-redux";
// import TouchableHighlight from "react-native-web/dist/exports/TouchableHighlight";
// import TextInput from "react-native-web/src/exports/TextInput";

const data = [0, 1, 2];
const color = ["red", "blue", "gree"];

const RQText = props => {
return <Text {...props}> {props.value}</Text>
}

const ReturnsScreen = (props) => {
  const [cardIndex, setCardIndex] = useState(0);
  let [direction, setDirection] = useState("");
  let [cardStyle, setCardStyle] = useState({ zindex: 1 });
  const [boxWidth, setBoxWidth] = useState();
  const [topVal, setTopVal] = useState(0);

  let pan = useRef(new Animated.ValueXY()).current;
  let zCardIndex = useRef(new Animated.Value(0)).current;


  // const panResponder = PanResponder.create({
  //   onStartShouldSetPanResponder: () => true,
  //   onMoveShouldSetPanResponderCapture: () => true,
  //   onPanResponderMove: Animated.event([
  //     null,
  //     {
  //       dx: pan.x, // x,y are Animated.Value
  //       dy: pan.y,
  //     },
  //   ]),
  //   onPanResponderRelease: (event, gesture) => {
  //     if (gesture.dy > "100") {
  //       setDirection("down");
  //       Animated.timing(
  //         pan, // Auto-multiplexed
  //         {
  //           toValue: { x: 0, y: 750 },
  //           duration: 250,
  //           useNativeDriver: false,
  //         } // Back to zero
  //       ).start(() => {
  //         setCardIndex(cardIndex + 1);
  //         pan.setValue({ x: 0, y: 0 });
  //         setCardStyle({
  //           zIndex: 1,
  //         });
  //       });
  //     }

  //     if (gesture.dy < "-5") {
  //       setDirection("up");

  //       Animated.sequence([
  //         Animated.timing(
  //           pan, // Auto-multiplexed
  //           {
  //             toValue: { x: 0, y: -100 },
  //             duration: 350,
  //             useNativeDriver: false,
  //           } // Back to zero
  //         ),
  //         Animated.timing(
  //           pan, // Auto-multiplexed
  //           {
  //             toValue: { x: 0, y: 20 },
  //             useNativeDriver: false,
  //           } // Back to zero
  //         ),
  //       ]).start(() => {
  //         pan.setValue({ x: 0, y: -45 });
  //         cardIndex < data.length
  //           ? setCardIndex(cardIndex + 1)
  //           : setCardIndex(0);
  //       });
  //       setCardStyle({ zIndex: 0 });
  //     }
  //   },
  // });

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        dy: pan.y,
      },
    ]),
    onPanResponderRelease: (event, gesture) => {
      if (gesture.dy > "100") {
        setDirection("down");
        setBoxWidth("100%");
        Animated.timing(
          pan, // Auto-multiplexed
          {
            toValue: { x: 0, y: 750 },
            duration: 350,
            useNativeDriver: false,
          } // Back to zero
        ).start(() => {
          setCardIndex(cardIndex + 1);
          setBoxWidth("95%");
          pan.setValue({ x: 0, y: 0 });
          setCardStyle({
            zIndex: 1,
          });
        });
      }

      if (gesture.dy < "-5") {
        setDirection("up");
        // setCardIndex({zIndex: 0})
        //let val = data.shift();

        Animated.timing(
          pan, // Auto-multiplexed
          {
            toValue: { x: 0, y: -200 },
            duration: 250,
            useNativeDriver: false,
          } // Back to zero
        ).start(() => {
          // setCardIndex({zIndex: -1});
          Animated.timing(
            pan, // Auto-multiplexed
            {
              toValue: { x: 0, y: 0 },
              useNativeDriver: false,
            } // Back to zero
          ).start(() => {
            pan.setValue({ x: 0, y: 30 });
            cardIndex < data.length
              ? setCardIndex(cardIndex + 1)
              : setCardIndex(0) && setTopVal(0);
              setTopVal(30)

          });
          setCardStyle({ zIndex: 1 });
          //data.push(val);
        });
      }
    },
  });

  renderReturnHeader = () => {
    return (
      <View>
        <RQText
          style={{ color: "white", fontSize: 25 }}
          bold
          value="Start Return"
        />
      </View>
    );
  };

  if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  }


  return (
    <View style={{ flex: 1 }}>
      {/* <Header
        newNav={this.renderReturnHeader.bind(this)}
        showNewNav={true}
        shrinkNav={true}
        backgroundColor="#8755DE"
      /> */}

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
                        // top: topVal,
                        // zIndex: zCardIndex.interpolate({
                        //   inputRange: [0, 1, 2],
                        //   outputRange: [3, 2, 0],
                        // }),
                      },
                      cardStyle,
                    ]}
                    key={item}
                  >
                    <ItemCard text={item}/>
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
                      // top: -20,
                      top: -25 * (index),
                      zIndex: 0,
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
          <RQText
            style={{ marginTop: 10, color: "#8755DE" }}
            value={"Swipe each item down"}
          />
          <RQText
            style={{ color: "#8755DE", marginBottom: 2 }}
            value={"to confirm."}
          />
          <Image
            style={{
              height: 7.67,
              width: 14.82,
              marginTop: 10,
              marginBottom: 10,
            }}
            source={require("../assets/down_arrow_purple.png")}
          />
        </View>
        <View style={{ ...styles.bagContainer, alignItems: "center" }}>
          <Image
            style={{ ...styles.bag, width: "95%" }}
            source={require("../assets/start_return_bag.png")}
            resizeMode="contain"
          />
          <View style={styles.container}>
            {/* <RQText
              style={styles.userText}
              value={props.user.first_name + "'s RQ Bag"}
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

export default ReturnsScreen;
