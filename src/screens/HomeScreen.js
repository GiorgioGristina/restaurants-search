import { View, StyleSheet } from "react-native"
import Categories from "../components/Categories"
import Search from "../components/Search"
import Header from "../components/Header"
import Restaurants from "../components/Restaurants"
import { StatusBar } from "expo-status-bar"
import { useState } from "react"


export default function HomeScreen(){
  const [term, setTerm] = useState("burger")

  const commonCategories = [
    {
      name: "burger",
      imageUrl:require("../assets/images/hamburger.png"),
    },
    {
      name: "Pasta",
      imageUrl:require("../assets/images/spaguetti.png"),
    },
    {
      name: "Pizza",
      imageUrl:require("../assets/images/pizza.png"),
    },
    {
      name: "Drink",
      imageUrl:require("../assets/images/drink.png"),
    },
    {
      name: "Cake",
      imageUrl:require("../assets/images/cake-slice.png"),
    },
    {
      name: "Steack",
      imageUrl:require("../assets/images/meat.png"),
    }
  ]

  return(
  <View style={styles.container} >
      <Header />
      <Search   
        setTerm={setTerm} 
        />
      <Categories 
        categories={commonCategories}
        setTerm={setTerm} 
        term={term}
        />
      < Restaurants term={term} />    
      <StatusBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: "rgb(253,253,253)",
    // backgroundColor: "pink",
   
  }
})