import { View, Text,ScrollView,TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import { Alert } from 'react-native'
import * as LocationGeocoding from 'expo-location'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable } from 'react-native'
import Carousel from '../../components/Carousel'
import Categories from '../../components/Categories'
import Recommended from '../../components/Recommended'
import Explore from '../../components/Explore'
import Hotel from '../../components/Hotel'


export default function home() {

  const [locationServicesEnabled,setLocationServicesEnabled]=useState(false);
  const [displayCurrentAddress,setDisplayCurrentAddress]=useState("Fetching your location...")

  useEffect(()=>{
    CheckIfLocationEnabled();
    GetCurrentLocation();
  })

  const CheckIfLocationEnabled=async ()=>{
    let enabled=await Location.hasServicesEnabledAsync();

    if(!enabled){
      Alert.alert("Location Services not enabled..Please give me your location status",
        "Please enable location services to proceed.",
        [{ text: "OK" }],
        { cancelable: false }
      );
    }
    else{
      setLocationServicesEnabled(true);
    }
  }

const GetCurrentLocation=async()=>{
  let {status}=await Location.requestForegroundPermissionsAsync();

  if(status!='granted'){
    Alert.alert(
      "Permission not granted!",
      "Please allow the app to access location services!",
      [{ text: "OK" }],
      { cancelable: false }
    );
  }

  const location=await Location.getCurrentPositionAsync({
    accuracy:Location.Accuracy.High,
  });
  let {coords}=await Location.getCurrentPositionAsync();
  if(coords){
    const {latitude,longitude}=coords;

    let response=await Location.reverseGeocodeAsync({
      latitude,
      longitude
    })

    const address=await LocationGeocoding.reverseGeocodeAsync({
      latitude,
      longitude
    })

    const streetAddress=address[0].name;
    for(let item of response){
      let address=`${item.name},${item?.postalCode},${item?.city}`
      setDisplayCurrentAddress(address);
    }

  }
}

console.log("My address",displayCurrentAddress);



const hotels = [
  {
    id: "0",
    featured_image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCYsmzl1yfX0MwTN-E_uHC-bk3p181VzjIA&usqp=CAU",
    images: [
      {
        id: "0",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCYsmzl1yfX0MwTN-E_uHC-bk3p181VzjIA&usqp=CAU",
        description: "Desi Burrito • Rs249",
      },
      {
        id: "0",
        image:
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCYsmzl1yfX0MwTN-E_uHC-bk3p181VzjIA&usqp=CAU",
        description: "Indain Burrito • Rs149",
      },
    ],
    name: "Hauz Khas Social",
    cuisines: "North Indian • Fast Food • 160 for one",
    time: "35 - 40 min • 1Km",
    average_cost_for_two: 1600,
    aggregate_rating: 4.3,
    adress: "9-A & 12, Hauz Khas Village, New Delhi",
    smalladress: "Hauz Khas Village, New Delhi",
    offer: "₹80 OFF",
    no_of_Delivery: 1500,
    latitude: 12.9916,
    longitude: 77.5712,
  },

  {
    id: "1",
    featured_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCYsmzl1yfX0MwTN-E_uHC-bk3p181VzjIA&usqp=CAU",
    name: "Qubitos - The Terrace Cafe",
    cuisines: "Thai, European, Mexican",
    average_cost_for_two: 1500,
    aggregate_rating: 4.5,
    adress:
      "C-7, Vishal Enclave, Opposite Metro Pillar 417, Rajouri Garden, New Delhi",
    smalladress: "Rajouri Garden, New Delhi",
    offer: "₹80 OFF",
    no_of_Delivery: 2500,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "44 min",
  },

  {
    id: "2",
    featured_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCYsmzl1yfX0MwTN-E_uHC-bk3p181VzjIA&usqp=CAU",
    name: "The Hudson Cafe",
    cuisines: "Cafe, Italian, Continental",
    average_cost_for_two: 850,
    aggregate_rating: 4.3,
    adress:
      "2524, 1st Floor, Hudson Lane, Delhi University-GTB Nagar, New Delhi",
    smalladress: "Delhi University-GTB Nagar",
    offer: "₹60 OFF",
    no_of_Delivery: 1800,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "20 min",
  },

  {
    id: "3",
    featured_image:
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCYsmzl1yfX0MwTN-E_uHC-bk3p181VzjIA&usqp=CAU",
    name: "Summer House Cafe",
    cuisines: "Italian, Continental",
    average_cost_for_two: 1850,
    aggregate_rating: 4.1,
    adress:
      "1st Floor, DDA Shopping Complex, Aurobindo Place, Hauz Khas, New Delhi",
    smalladress: "Hauz Khas, New Delhi",
    offer: "₹50 OFF",
    no_of_Delivery: 1700,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "38 min",
  },

  {
    id: "4",
    featured_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCYsmzl1yfX0MwTN-E_uHC-bk3p181VzjIA&usqp=CAU",
    name: "38 Barracks",
    cuisines: "North Indian, Italian, Asian",
    average_cost_for_two: 1600,
    aggregate_rating: 4.4,
    adress: "M-38, Outer Circle, Connaught Place, New Delhi",
    smalladress: "Connaught Place, New Delhi",
    offer: "₹70 OFF",
    no_of_Delivery: 1230,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "51 min",
  },
  {
    id: "5",
    featured_image:
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCYsmzl1yfX0MwTN-E_uHC-bk3p181VzjIA&usqp=CAU",
    name: "Terra Mayaa Restaurant",
    cuisines: "North Indian, Continental, Italian",
    aggregate_rating: 3.5,
    adress: "6th Floor, Anil Plaza 2, G.S. Road, Christian Basti",
    smalladress: "Anil Plaza 2, G.S. Road",
    offer: "₹55 OFF",
    no_of_Delivery: 500,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "42 min",
  },
  {
    id: "6",
    featured_image:
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCYsmzl1yfX0MwTN-E_uHC-bk3p181VzjIA&usqp=CAU",
    name: "Mocha Hotel",
    cuisines: "Cafe, Italian",
    aggregate_rating: 4.2,
    adress: "Christian Basti, Guwahati",
    smalladress: "Christian Basti, Guwahati",
    offer: "₹90 OFF",
    no_of_Delivery: 1100,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "34 min",
  },
  {
    id: "7",
    featured_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCYsmzl1yfX0MwTN-E_uHC-bk3p181VzjIA&usqp=CAU",
    name: "4 Seasons",
    cuisines: "Chinese, North Indian",
    aggregate_rating: 4.5,
    adress:
      "Opposite Institute of Social Science, Bhuban Road, Uzan Bazaar, Guwahati",
    smalladress: "Bhuban Road, Uzan Bazaar, Guwahati",
    offer: "₹55 OFF",
    no_of_Delivery: 1500,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "30 min",
  },
  {
    id: "8",
    featured_image:
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCYsmzl1yfX0MwTN-E_uHC-bk3p181VzjIA&usqp=CAU",
    name: "Shanghai Salsa",
    cuisines: "Continental, Fast Food, Chinese",
    aggregate_rating: 4.1,
    adress:
      "37, 1st Floor, Hatigarh Chariali, Mother Teresa Road, Zoo Tiniali Area, Zoo Tiniali, Guwahati",
    smalladress: "Mother Teresa Road,Guwahati",
    offer: "₹75 OFF",
    no_of_Delivery: 1500,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "45 min",
  },
  {
    id: "9",
    featured_image:
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCYsmzl1yfX0MwTN-E_uHC-bk3p181VzjIA&usqp=CAU",
    name: "Underdoggs Sports Bar & Grill",
    cuisines: "North Indian, Continental",
    aggregate_rating: 3.9,
    adress:
      "1st Floor, Central Mall, G.S. Road, Sree Nagar, Christian Basti, Guwahati",
    smalladress: "Sree Nagar, Christian Basti, Guwahati",
    offer: "₹70 OFF",
    no_of_Delivery: 2500,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "33 min",
  },
  {
    id: "10",
    featured_image:
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCYsmzl1yfX0MwTN-E_uHC-bk3p181VzjIA&usqp=CAU",
    name: "Fat Belly",
    cuisines: "Asian, Chinese, Tibetan",
    aggregate_rating: 4.5,
    adress:
      "Opposite Rabindra Bhawan, GNB Road, Ambari, Dighalipukhuri East, Uzan Bazaar, Guwahati",
    smalladress: "Dighalipukhuri East, Guwahati",
    offer: "₹60 OFF",
    no_of_Delivery: 900,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "53 min",
  },
  {
    id: "11",
    featured_image:
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCYsmzl1yfX0MwTN-E_uHC-bk3p181VzjIA&usqp=CAU",
    name: "Makhan Fish and Chicken Corner",
    cuisines: "Asian, Chinese",
    aggregate_rating: 4.5,
    adress:
      "21-A, Near Madaan Hospital, Majitha Road, Basant Nagar, Amritsar",
    smalladress: "Basant Nagar, Amritsar",
    offer: "₹55 OFF",
    no_of_Delivery: 1200,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "43 min",
  },
  {
    id: "12",
    featured_image:
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCYsmzl1yfX0MwTN-E_uHC-bk3p181VzjIA&usqp=CAU",
    name: "Bharawan Da Dhaba",
    cuisines: "North Indian, Fast Food",
    aggregate_rating: 3.6,
    adress: "Near Amritsar Municipal Corporation, Town Hall, Amritsar",
    smalladress: "Town Hall, Amritsar",
    offer: "₹70 OFF",
    no_of_Delivery: 1600,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "28 min",
  },
  {
    id: "13",
    featured_image:
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCYsmzl1yfX0MwTN-E_uHC-bk3p181VzjIA&usqp=CAU",
    name: "The Kulcha Land",
    cuisines: "North Indian,Asian",
    aggregate_rating: 4.3,
    adress:
      "Opposite M.K Hotel, District Shopping Centre, Ranjit Avenue, Amritsar",
    smalladress: "Ranjit Avenue, Amritsar",
    offer: "₹80 OFF",
    no_of_Delivery: 2600,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "32 min",
  },
  {
    id: "14",
    featured_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCYsmzl1yfX0MwTN-E_uHC-bk3p181VzjIA&usqp=CAU",
    name: "Brothers Dhaba",
    cuisines: "North Indian",
    aggregate_rating: 4.6,
    adress:
      "Golden Temple Out Road, Opposite Amritsar Municipal Corporation, Town Hall, Amritsar",
    smalladress: "Amritsar",
    offer: "₹65 OFF",
    no_of_Delivery: 1300,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "42 min",
  },
  {
    id: "15",
    featured_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCYsmzl1yfX0MwTN-E_uHC-bk3p181VzjIA&usqp=CAU",
    name: "Charming Chicken",
    cuisines: "North Indian",
    aggregate_rating: 4.6,
    adress:
      "Golden Temple Out Road, Opposite Amritsar Municipal Corporation, Town Hall, Amritsar",
    smalladress: "Near Basant Nagar, Amritsar",
    offer: "₹45 OFF",
    no_of_Delivery: 700,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "28 min",
  },
  {
    id: "16",
    featured_image:
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCYsmzl1yfX0MwTN-E_uHC-bk3p181VzjIA&usqp=CAU",
    name: "Beera Chicken Corner",
    cuisines: "North Indian",
    aggregate_rating: 4.4,
    adress:
      "Opposite Bandari Hospital, Sehaj Avenue, Majitha Road, Near White Avenue, Amritsar",
    smalladress: "Near White Avenue, Amritsar",
    offer: "₹80 OFF",
    no_of_Delivery: 1400,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "34 min",
  },
  {
    id: "17",
    featured_image:
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCYsmzl1yfX0MwTN-E_uHC-bk3p181VzjIA&usqp=CAU",
    name: "La Roma Pizzeria",
    cuisines: "Fast Food, Italian",
    aggregate_rating: 4.6,
    adress: " Ranjit Avenue, Amritsar",
    smalladress: " Ranjit Avenue, Amritsar",
    offer: "₹40 OFF",
    no_of_Delivery: 2200,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "46 min",
  },
  {
    id: "18",
    featured_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCYsmzl1yfX0MwTN-E_uHC-bk3p181VzjIA&usqp=CAU",
    name: "Crystal Restaurant",
    cuisines: "North Indian, Mughlai",
    aggregate_rating: 3.5,
    adress: " Crystal Chowk, Queens Road, INA Colony, Amritsar",
    smalladress: "INA Colony, Amritsar",
    offer: "₹80 OFF",
    no_of_Delivery: 2500,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "22 min",
  },
];


  return (
   <ScrollView style={{flex:1}} className="bg-[#f8f8f8] mt-10">
      <View style={{flexDirection:'row',alignItems:'center', gap:12, padding:10}}>
        <Ionicons name="location-outline" size={24} color="green" />
        <View className='flex-1'>
          <Text style={{fontSize:15,fontWeight:"500"}}>Location</Text>
          <Text className="text-[18px] font-bold text-gray-600">{displayCurrentAddress.substring(9,displayCurrentAddress.length)}</Text>
        </View>
        <Pressable className="bg-[#6cb4ee] w-[40px] h-[40px] rounded-full flex items-center justify-center">
            <Text className="text-green-800 font-bold">M</Text>
        </Pressable>
      </View>
      <View style={{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        borderWidth:1,
        borderColor:"#c0c0c0",
        borderRadius:1,
        marginTop:20,
        paddingVertical:8,
        paddingHorizontal:10,
        marginHorizontal:20,
        borderRadius:15
      }}>
        <TextInput placeholder='Search for items' />
        <Ionicons name="search-outline" size={24} color="#e52b50" />
      </View>
      <View>
        <Carousel />
      </View>
      <View className="mt-3">
        <Categories />
      </View>
      <View>
        <Recommended />
      </View>
      <View>
        <Explore />
      </View>
      <Text style={{textAlign:"center",marginTop:7,letterSpacing:4,marginBottom:5,color:"gray"}}>ALL Natural Products</Text>

      <View style={{marginHorizontal:8}}>
           {hotels?.map((item,index) => (
               <Hotel key={index} item={item} menu={item?.menu}/>
          ))}
      </View>
   </ScrollView>
  )
}