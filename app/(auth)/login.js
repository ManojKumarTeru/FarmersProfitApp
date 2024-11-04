import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import React,{useState,useEffect} from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from "expo-router";
import { supabase } from "../../Superbase";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const router=useRouter();

  useEffect(() => {
    const checkLogin = async () => {
        try{
            const token = await AsyncStorage.getItem("authToken");
            if(token){
                router.replace("/(home)")
            }
        } catch(error){
            console.log(error)
        }
    }

    checkLogin();
},[])
async function signUpWithEmail(){
    const {data,error} = await supabase.auth.signInWithPassword({
        email:email,
        password:password
    })
    if(data){
        const token = data?.session?.access_token;
        AsyncStorage.setItem("authToken",token)
        router.replace("/home")
    }
}

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontSize: 40, textAlign: "center", fontWeight: "bold", marginTop:10 }}>
          Farmers Profit
        </Text>
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 12,
              color: "green",
            }}
          >
            Log in to your account
          </Text>
        </View>
        <View style={{ marginTop: 70 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#E0E0E0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <MaterialIcons style={{marginLeft:6}} name="email" size={24} color="black" />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{ color: "gray", marginVertical: 10, width: 300 }}
              placeholder="Enter your Email"
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#E0E0E0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <Feather style={{marginLeft:6}} name="lock" size={24} color="black" />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={{ color: "gray", marginVertical: 10, width: 300 }}
              placeholder="Enter your password"
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          <Text>Keep me Logged In</Text>
          <Text>Forgot Password</Text>
        </View>
        <Pressable
        onPress={signUpWithEmail}
          style={{
            width: 120,
            backgroundColor: "green",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 10,
            marginTop:50
          }}
        >
          <Text style={{textAlign:"center",fontWeight:"bold",fontSize:20,color:"white"}}>Login</Text>
        </Pressable>
        <Pressable onPress={() => router.replace("/register")} style={{marginTop:15}}>
            <Text style={{textAlign:"center",color:"gray",fontSize:16}}>Don't have an Account? Sign Up</Text>
        </Pressable>
      </KeyboardAvoidingView>
      </SafeAreaView>
  )
}