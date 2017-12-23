import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity
} from 'react-native';
import RadiusButton from './btn-radius';
import CircleButton from './btn-circle';

export default class BallFactory extends Component {
    // constructor() {
    // const butlist = [1,2,3,4]
    // }

    _pressCreditClick() {
        // alert('dsa')
    }

    renderList(list){
        return list.map( item => this.renderItem(item))
    }
    renderItem(item){
        return (

                <RadiusButton
                    btnName= {item}
                    textStyle= {{
                        fontSize: 16,
                        color: '#ffffff',
                    }}
                    btnStyle= {{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                    }}
                    underlayColor= '#4169e1'
                    onPress={this._pressCreditClick}>
                </RadiusButton>

            // </View>
        );
    }


    render() {
        return (
            <View style={styles.cross}>
                {this.renderList(['1','2','3','4'])}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cross : {
        flex: 1, flexDirection: 'row'

        // flexWrap: 'wrap',
        // flex: 1,
    }

});
