import { View, Text } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'
import { FontAwesome } from "@expo/vector-icons";
import { Image } from 'react-native';
import { useState } from "react";
// import { useDispatch } from 'react-redux';


export default function MenuItem({item}) {
    const [additems, setAddItems] = useState(0);
    const [selected, setSelected] = useState(false);
    // const dispatch=useDispatch()
  return (
    <View>
    <Pressable
      style={{
        margin: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 15,
      }}
    >
      <View>
        <Text style={{ fontSize: 18, fontWeight: "600", width: 220 }}>
          {item?.name}
        </Text>
        <Text style={{ marginTop: 4, fontSize: 15, fontWeight: "500" }}>
          ₹{item?.price}
        </Text>
        <Text
          style={{
            marginTop: 5,
            borderRadius: 4,
          }}
        >
          {[0, 0, 0, 0, 0].map((en, i) => (
            <FontAwesome
              // key={`${food.id}-${i}`}
              key={i}
              style={{ paddingHorizontal: 3 }}
              name={i < Math.floor(item.rating) ? "star" : "star-o"}
              size={15}
              color="#FFD700"
            />
          ))}
        </Text>
        <Text
          style={{ width: 200, marginTop: 8, color: "gray", fontSize: 16 }}
        >
          {item?.description.length > 40
            ? item?.description.substr(0, 37) + "..."
            : item?.description}
        </Text>
      </View>
      <Pressable style={{ marginRight: 10 }}>
          <Image
            style={{ width: 120, height: 120, borderRadius: 8 }}
            source={require("../assets/MyImages/carrot.png")}
          />
          </Pressable>
    </Pressable>
  </View>
  )
}