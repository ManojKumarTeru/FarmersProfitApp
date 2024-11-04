import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

export default function Categories() {
  const items = [
    { id: "1", name: "Fastest delivery" },
    { id: "2", name: "Rating 4.0 +" },
    { id: "3", name: "Offers" },
    { id: "4", name: "Cuisines" },
    { id: "5", name: "MAX Safety" },
    { id: "6", name: "Pro" },
  ];

  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={items}
        horizontal={true} // To make the list scroll horizontally
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => ( 
          <TouchableOpacity activeOpacity={0.8} style={styles.item}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

// Create styles using StyleSheet for better performance in React Native
const styles = StyleSheet.create({
  item: {
    padding: 10,
    margin: 5, 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 5, 
    backgroundColor:"#FAF9F6",
  },
});
