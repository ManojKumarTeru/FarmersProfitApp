import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';

export default function Carousel() {
  const img1 = require("../assets/MyImages/paddy.png");
  const img2 = require("../assets/MyImages/mirchi.png");
  const img3 = require("../assets/MyImages/tomato.png");

  const images = [img1, img2, img3];

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        autoplay={true} // Optional: enables auto-play
        autoplayTimeout={5} // Optional: time between auto slides
        dot={<View style={styles.dot} />} // Custom dot style
        activeDot={<View style={styles.activeDot} />} // Custom active dot style
        paginationStyle={styles.pagination} // Custom pagination style
      >
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image source={image} style={styles.image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200, // Set height for the carousel
    width: '100%', // Set width for the carousel
  },
  wrapper: {
    // Additional styling for the swiper if needed
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 350, // Set a fixed width for all images
    height: 170, // Set a fixed height for all images
    resizeMode: 'cover', // Use 'cover' to fill the space while maintaining the aspect ratio
  },
  dot: {
    backgroundColor: 'gray', // Dot color
    width: 8, // Dot width
    height: 8, // Dot height
    borderRadius: 4, // Round dot edges
    margin: 3, // Margin between dots
  },
  activeDot: {
    backgroundColor: 'brown', // Active dot color
    width: 8, // Active dot width
    height: 8, // Active dot height
    borderRadius: 4, // Round edges
    margin: 3, // Margin between dots
  },
  pagination: {
    bottom: -2, // Adjust the position of the pagination dots
  },
});
