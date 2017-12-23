import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';



export default class EachLottery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uid: 'redTab',
            img: false,
            name: false,
        };
    }


    render() {
        const navigate = this.props.navigation;
        return (
            <View>
                <TouchableHighlight
                    style={styles.container}
                    onPress={() => navigate(this.props.idname)}
                    >
                    <View >
                        <Image style={styles.img}
                            source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513847069083&di=e620531faefaf367622cf0745bef8bd3&imgtype=0&src=http%3A%2F%2Fpic3.16pic.com%2F00%2F07%2F62%2F16pic_762464_b.jpg'}}
                        ></Image>
                        {/*<Text>{this.props.name}</Text>*/}
                        <Text style={styles.name}>{this.props.name}</Text>
                    </View>
                </TouchableHighlight>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    name: {
        fontSize: 18
    },
    des: {}

});
