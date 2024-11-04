import { View, Text,Pressable } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';



export default function Hotel({item}) {

    const ratingColor = item.aggregate_rating <= 3.5 ? 'red' : 'green';
    const router=useRouter();
  return (
    <Pressable onPress={()=>router.push({
        pathname:"/hotel",
            params: {
                id: item.id,
                name: item.name,
                adress: item.adress,
                smalladress: item.smalladress,
                cuisines: item.cuisines,
                aggregate_rating: item.aggregate_rating,
              },
    })} style={{
        marginHorizontal:6,
        marginVertical:12,
        borderRadius:20,
        backgroundColor:"white"
    }}>
    <Image source={{uri:item.featured_image}} style={{
        width:"100%",height:200,aspectRatio:7/4, borderTopLeftRadius:6,borderTopRightRadius:6
    }}/>

    <View style={{
            flexDirection:"row",alignItems:"center",justifyContent:"space-between"
        }}>
        <View style={{paddingVertical:4,paddingHorizontal:3}}>
            <Text style={{
                marginTop:10,
                fontSize:16,
                fontWeight:"600",
                paddingHorizontal:10
            }}>{item.name}</Text>
            <Text style={{
                marginTop:10,
                fontSize:16,
                fontWeight:"400",
                paddingHorizontal:10,
                color:"gray"
            }}>South Indian Natural Products</Text>
            <Text style={{
                marginTop:10,
                fontSize:16,
                fontWeight:"400",
                paddingHorizontal:15,
                color:"gray"
            }}>{item.time}</Text>
        </View>
        
        <View style={{
            flexDirection:"row",
            alignItems:"center",
            borderRadius:4,
            backgroundColor:ratingColor,
            paddingHorizontal:4,
            paddingVertical:5,
            marginRight:10
            }}>
        <Text style={{color:"white"}}>{item.aggregate_rating}/5</Text>
        </View>
    </View>
    <View style={{flexDirection:'row'}}>
         <MaterialCommunityIcons name="brightness-percent" size={24} color="green" style={{marginLeft:15}} />
        <Text style={{color:"green",fontSize:15, marginLeft:2}}>upto {item.offer.toLowerCase()}</Text>
    </View>
    <View style={{
        borderWidth:0.5,
        borderColor:"gray",
        marginHorizontal:10,
        marginVertical:4
    }}/>

    </Pressable>
  )
}