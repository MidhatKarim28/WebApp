import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback, Animated, Easing, Image} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

const numStars = 5

export default class Rating extends React.Component{
    state = {
        rating : this.props.rating ?? 1,
        animation: new Animated.Value(1),
        numStars: this.props.numStars ?? 5,
        starColor: this.props.starColor ?? "#f86464"
    };

    rate = star => {
        this.setState({rating:star})
    };

    animate = () => {
        Animated.timing (this.state.animation,
            {
                toValue: 2,
                duration: 400,
                easing: Easing.ease,
                useNativeDriver: true
            }).start(()=>{
                this.state.animation.setValue(1);
            });
    };

    render(){
        let stars = [];

        const animateScale = this.state.animation.interpolate({
            inputRange: [1,1.5,2],
            outputRange: [1,1.4,1]
        });

        const animateOpacity = this.state.animation.interpolate({
            inputRange : [1,1.2,2],
            outputRange: [1,0.5,1]
        });

        const animateWobble = this.state.animation.interpolate({
            inputRange: [1,1.25,1.75,2],
            outputRange: ['0deg','-3deg','3deg','0deg']
        });

        const animationStyle = {
            transform: [{scale: animateScale}, {rotate: animateWobble}],
            opacity: animateOpacity
        };

        for(let x = 1; x<=numStars; x++){
            stars.push(
                <TouchableWithoutFeedback 
                key = {x} 
                onPress = {()=> {
                    this.rate(x),
                    this.animate();
                }}
                >

                    <Animated.View style = {x <= this.state.rating ? animationStyle : ""}>
                        <Star filled = {x <= this.state.rating ? true:false} color = {this.state.starColor}/>
                    </Animated.View>
                </TouchableWithoutFeedback >
            );
        }
        return (
            <View style = {styles.container}>
                <Image
                  style={styles.image}
                  source={require("../assets/rate.png")}
                />
            <Text style = {styles.textStyle}>
            Please Rate this Conversation 
            </Text>
                <View style = {{flexDirection: 'row'}}>
                    {stars}
                </View>
            </View>
        );
    }
}

class Star extends React.Component{
    render(){
        return (
            <FontAwesome 
            name = {this.props.filled === true ? 'star' : 'star-o'} 
            color = '#f86464' 
            size = {32}
            style = {{marginHorizontal: 6}}/>
        )
    }
} 

const styles = StyleSheet.create(
    {
        container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f0f4f5'
        },
        textStyle: {
            fontSize: 30,
            textAlign: 'center',
            marginVertical: '5%' ,
            fontWeight: 'bold'
        },
        image:{
            height:"35%",
            width:"55%",
            top:"15%",
            resizeMode:'contain',
            alignSelf:'center',
            marginVertical: '5%'
        },
      
    }
)