import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
export default class ReactNativeHacks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: true
        }
    }
    buttonClick() {
        // Write your logic here to toggle the flag 
        if (flag) {
            this.setState({
                text: "show",
                flag: false
            })
        }else{
            this.setState({
                text: "hidden",
                flag: true
            })
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {/* Code to show/hide on basis of `this.state.flag` value  */}
                <TouchableOpacity onPress={this.buttonClick()} ></TouchableOpacity>
                <Text>{this.state.text}</Text>
                {/* Code to show/hide using styles on basis of `this.state.flag` value   */}
                <Text style={(!this.state.flag) ? styles.hideClass : styles.welcome}>Welcome</Text>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={styles.buttonText} //call function `buttonClick`
                            onPress={() => { this.buttonClick() }}>Click here.</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    button: {
        backgroundColor: '#ff8000',
        borderRadius: 4,
        padding: 10
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    hideClass: {
        height: 0,
        width: 0
    }
});
AppRegistry.registerComponent('ReactNativeHacks', () => ReactNativeHacks)