import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import RadiusButton from './btn-radius';

export default class CircleButton extends Component {
    // constructor() {
    // }
    render() {
        return (
            <View>
                <RadiusButton
                    btnName= {this.props.name}
                    textStyle= {{
                        fontSize: 16,
                        color: '#ff4b46',
                    }}
                    btnStyle= {{
                        width: this.props.r,
                        height: this.props.r,
                        borderRadius: this.props.r,
                    }}
                    underlayColor= '#ffffff'
                    onPress={this._pressCreditClick}>
                </RadiusButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({


});
