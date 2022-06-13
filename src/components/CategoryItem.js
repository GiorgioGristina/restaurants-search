import { View, StyleSheet, Text, Image } from "react-native"
import { elevation } from "../common/style"

export default function CategoryItem(){
  
  return (
    <View style={[styles.container, styles.elevation]}>
      <View style={ styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/images/hamburger.png")}/>
      </View>
      <Text style={styles.header}>Burger</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    borderRadius: 50,
    marginVertical: 15,
    marginHorizontal: 25,
    backgroundColor: "rgb(241,186,87)",
    alignItems: "center",
    justifyContent: "center",
  },
  elevation,
  image: {
    width: 35,
    height:35,
  },
  imageContainer: {
    width: 50,
    height:50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginBottom: 5,
   
  },
  header: {
    fontWeight: "bold",
  }
})
