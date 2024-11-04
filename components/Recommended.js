import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { ScrollView } from 'react-native'
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function Recommended() {

    const veg1=require("../assets/MyImages/carrot.png");
    const veg2=require("../assets/MyImages/banana.png");
    const veg3=require("../assets/MyImages/banana.png");
    const veg4=require("../assets/MyImages/onions.png");
    const recommended = [
        {
          id: 0,
          name: "Krishnaiah",
          image:veg4,
          time: "35 - 45",
          type: "Pulivendula",
        },
        {
          id: 0,
          name: "Ravi Kumar",
          image:veg1,
          time: "10 - 35",
          type: "Vempalli",
        },
        {
          id: 0,
          name: "Suresh Reddy",
          image:veg3,
          time: "40 - 45",
          type: "Kadapa",
        },
      ];
     
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {recommended?.map((item, index) => ( 
      <View key={index}
        style={{
          backgroundColor: "white",
          flexDirection: "row",
          margin: 10,
          borderRadius: 8,
        }}
      >
        <View>
          <Image
            style={{
              width: 100,
              height: 100,
              resizeMode: "cover",
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 7,
            }}
            source={item.image}
          />
        </View>
        <View style={{ padding: 10, flexDirection: "column" }}>
          <Text style={{ fontSize: 15, fontWeight: "500" }}>
            {item?.name}
          </Text>
          <Text
            style={{
              flex: 1,
              marginTop: 3,
              color: "gray",
              fontWeight: "500",
            }}
          >
            {item?.type}
          </Text>

          <View
            style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
          >
            <Ionicons name="time" size={24} color="green" />
            <Text>{item?.time} mins</Text>
          </View>
        </View>
      </View>
    ))}
  </ScrollView>

  )
}