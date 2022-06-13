import { View, TextInput, StyleSheet} from "react-native"
import { FontAwesome} from "@expo/vector-icons"
import { elevation } from "../common/style"


export default function Search(){
  return(
    <View style={[styles.container,  styles.elevation]}>
      <FontAwesome name="search" size={25}/>
      <TextInput 
        style={styles.input}
        placeholder="Restaureant, food"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 5,
    marginHorizontal: 25,
    backgroundColor: "white",
    
    borderRadius: 40,
    padding: 15,    
  },
  elevation,
  input: {
    fontSize: 20 ,
    marginLeft: 10,
  }
})