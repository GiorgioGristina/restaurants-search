import { useEffect } from "react";
import { FlatList, View, Dimensions} from "react-native";
import { Text } from "react-native";
import { ActivityIndicator } from "react-native";
import { Image } from "react-native";
import useRestaurant from "../hooks/useRestaurant";

export default function RestaurantScreen({navigation}){
  const [{data, loading, error}, searchRestaurant] = useRestaurant()
  const id = navigation.getParam("id")

  const dimensions = Dimensions.get("window")
  const imageWidth = dimensions.width
  const imageHeight = Math.round((dimensions.width * 9) / 16)

  useEffect(() => {
    searchRestaurant(id)
  }, [])

  console.log(data);

  if (loading) return <ActivityIndicator size="large" marginVertical={30}/>

  if (error) {
    return(
      <View>
        <Text>{error}</Text>
      </View>
    )
  }

  return(
    <View>
      {/* <Text>hello from restaurant screen</Text> */}
      
      {data && <FlatList 
          data={data.photos}
          keyExtractor={(photo) => photo}
          renderItem={({item}) => {
            return <Image style={{height:imageHeight, width:imageWidth}} source={{uri: item}}/>
          }}
        />}

    </View>
  )
}