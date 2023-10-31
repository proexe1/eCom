import React, {Component, useRef, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Image} from 'react-native';
import {hp, wp} from '../Helpers/Constant';


const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isCarousel = useRef(null);

  const renderItem = ({item, index}) => {
    return (
      <View>
        <Image style={styles.imageStyle} source={item.url} />
      </View>
    );
  };

  const data = [
    {url: require('../Assests/BannerSlider.png')},
    {url: require('../Assests/SliderImage.png')},
    {url: require('../Assests/SliderImage2.png')},
    {url: require('../Assests/BannerSlider.png')},
  ];

  return (
    <View>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={hp(100)}
        itemWidth={hp(100)}
        onSnapToItem={index => {
          setActiveIndex(index);
        }}
      />
      <Pagination
        activeDotIndex={activeIndex}
        carouselRef={isCarousel}
        tappableDots={true}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.2}
        dotsLength={data.length}
        inactiveDotStyle={{
          backgroundColor: 'grey',
          width: 20,
          height: 20,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  imageStyle: {
    resizeMode: 'contain',
    width: wp(91.46),
    height: hp(25.36),
  },
});

export default Slider;
