import React, {Component} from 'react';
import {Text, View} from 'react-native';

const TypesOfFruit = () => {
    return (
        <View>
            <Text>Fruits:</Text>
            <View>
                <Fruits type="Apples" />
                <Fruits type="Blueberries" />
                <Fruits type="Strawberries" />
                <Fruits type="Bananas" />
            </View>
        </View>
    );
    };
    
    const Fruits = (props) => {
    return (
        <View>
            <Text>
                {props.fruit}
            </Text>
        </View>
    );
    };
    
    export default class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <View>
            <Text>Types of Food:</Text>
                <TypesOfFruit />
            </View>
        );
    }
    };