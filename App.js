
import { StatusBar } from 'expo-status-bar';
import {View, Text, StyleSheet, FlatList } from "react-native"
import CategoryItem from './src/components/CategoryItem';
import Header from "./src/components/Header"
import Search from "./src/components/Search"

export default function App() {

  const commonCategories = [
    {
      name: "burger",
      imageUrl:require("./src/assets/images/hamburger.png"),
    },
    {
      name: "Pasta",
      imageUrl:require("./src/assets/images/spaguetti.png"),
    },
    {
      name: "Pizza",
      imageUrl:require("./src/assets/images/pizza.png"),
    },
    {
      name: "Drink",
      imageUrl:require("./src/assets/images/drink.png"),
    },
    {
      name: "Cake",
      imageUrl:require("./src/assets/images/cake-slice.png"),
    },
    {
      name: "Steack",
      imageUrl:require("./src/assets/images/meat.png"),
    }
  ]



  return (
    <View >
      <Header />
      <Search />
      
        <FlatList 
          data={commonCategories}
          renderItem={({item, index}) => {
            console.log(item, index);
            return <CategoryItem name={item.name} index={index} imageUrl={item.imageUrl} />
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(category) => category.name }
        />
     
      
      <StatusBar />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// })