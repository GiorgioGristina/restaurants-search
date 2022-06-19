
// import { StatusBar } from 'expo-status-bar';
// import {View, Text, StyleSheet, FlatList } from "react-native"
// import { useState } from 'react';
// import Header from "./src/components/Header"
// import Search from "./src/components/Search"
// import Categories from "./src/components/Categories"
// import Restaurants from './src/components/Restaurants';



// export default function App() {
    // const [term, setTerm] = useState("burger")
  //   const commonCategories = [
    //     {
      //       name: "burger",
      //       imageUrl:require("./src/assets/images/hamburger.png"),
//     },
//     {
//       name: "Pasta",
//       imageUrl:require("./src/assets/images/spaguetti.png"),
//     },
//     {
//       name: "Pizza",
//       imageUrl:require("./src/assets/images/pizza.png"),
//     },
//     {
//       name: "Drink",
//       imageUrl:require("./src/assets/images/drink.png"),
//     },
//     {
//       name: "Cake",
//       imageUrl:require("./src/assets/images/cake-slice.png"),
//     },
//     {
//       name: "Steack",
//       imageUrl:require("./src/assets/images/meat.png"),
//     }
//   ]



//   return (
  //     <View style={styles.container}>
  //       <Header />
//       <Search  
//         setTerm={setTerm} 
//         />
//       <Categories 
//         categories={commonCategories}
//         setTerm={setTerm} 
//         term={term}
//         />
//       < Restaurants term={term} />



//       <StatusBar />
//     </View>
//   );
// }

// // const styles = StyleSheet.create({
  // //   container: {
    // //     flex: 1,
// //     backgroundColor: "#fff",
// //     alignItems: "center",
// //     justifyContent: "center"
// //   }
// // })
// const styles = StyleSheet.create({
  //   container: {
    
    //     backgroundColor: "rgb(253,253,253)",
    //     // backgroundColor: "pink",
    
    //   }
    // })

import { createAppContainer, createNavigationContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantScreen from "./src/screens/RestaurantScreen";


const navigator = createStackNavigator({
  Home: HomeScreen,
  Restaurant: RestaurantScreen,
}, {
  initialRouteName: "Home",
  defaultNavigationOpptions: {
    title: "BusinessSearch",
  }
});

export default createAppContainer(navigator) 