import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import { Carousel } from 'antd-mobile';

export default class ImgCarousel extends Component {
    // constructor() {
    // }

    state = {
        data: ['', '', '',''],
    }
    render() {
        return (
            <View>
                {/*<Text>轮播图</Text>*/}

                <Carousel
                    autoplay={true}
                    infinite
                    selectedIndex={1}
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {this.state.data.map(ii => (
<Image
    style={styles.img}
source={{uri: 'https://zos.alipayobjects.com/rmsportal/TekJlZRVCjLFexlOCuWn.png'}}

></Image>
                    ))}
                </Carousel>



            </View>
        );
    }
}

const styles = StyleSheet.create({
    img:{
        width: 400,
        height: 200
    }

});
