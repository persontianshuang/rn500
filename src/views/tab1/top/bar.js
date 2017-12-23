import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class Bar extends Component {
    // constructor() {
    // }
    render() {
        return (
            <View  style={styles.container}>
                <Image
                    style={styles.img}
                    source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513846585686&di=cb819cd659e3ce8b46dfb81dbc7209e8&imgtype=0&src=http%3A%2F%2Fimg12.mypsd.com.cn%2F20160114%2FMypsd_370058_201601141118060025B.jpg'}}

                ></Image>

                    <Image
                        style={styles.img}
                        source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513847069083&di=e620531faefaf367622cf0745bef8bd3&imgtype=0&src=http%3A%2F%2Fpic3.16pic.com%2F00%2F07%2F62%2F16pic_762464_b.jpg'}}


                    ></Image>

                    <Image
                        style={styles.img}
                        source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513846585686&di=cb819cd659e3ce8b46dfb81dbc7209e8&imgtype=0&src=http%3A%2F%2Fimg12.mypsd.com.cn%2F20160114%2FMypsd_370058_201601141118060025B.jpg'}}

                    ></Image>

                    <Image
                        style={styles.img}
                        source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513847069083&di=e620531faefaf367622cf0745bef8bd3&imgtype=0&src=http%3A%2F%2Fpic3.16pic.com%2F00%2F07%2F62%2F16pic_762464_b.jpg'}}


                    ></Image>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'nowrap',
        flexDirection: 'row',
        // height: 90,
        // paddingBottom: 100
},
    img:{
        flex: 1,
        height: 90
    }
});
