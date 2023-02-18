import React from "react";
import {StyleSheet, View, Text} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import Footer from './Footer';

const Data = [
    {id: 1,username: "Client 1",image: '',lastMessage: "Message 1"},
    {id: 2,username: "Client 2",image: '',lastMessage: "Message 2"},
    {id: 3,username: "Client 3",image: '',lastMessage: "Message 3"},
    {id: 4,username: "Client 4",image: '',lastMessage: "Message 4"},
    {id: 5,username: "Client 5",image: '',lastMessage: "Message 5"},
    {id: 6,username: "Client 6",image: '',lastMessage: "Message 6"},
];

export default function Listing(props){ 

    const renderItem = ({item}) => {
        return (
            <View style = {styles.userItemContainer}>
                {/* <Image 
                style={styles.userIcon} 
                source={{uri: './assets/male.png'}}
                >
                </Image> */}
                <View style = {styles.userDetailsSectionContainer}>
                    <Text style = {styles.label1}>{item.username}</Text>
                    <Text style = {styles.label2}>{item.lastMessage}</Text>
                </View>
            </View>
        );
    };

    return(
        <View>
            <SwipeListView data = {Data} renderItem = {renderItem}></SwipeListView>
            <Footer/>
        </View>
    )
};

const styles = StyleSheet.create({
    container : {
      flex: 1,
      backgroundColor: '#F1F4F4',
    },
    userItemContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center'
    },
    userIcon:{
        width: '10%',
        height: '10%',
        resizeMode:'contain',
    },
    userDetailsSectionContainer:{
        marginLeft: 15,
    },
    label1:{
        color: '#0d0d0c',
        fontSize: 17,
        fontWeight: '500',
        lineHeight: 22
    },
    label2:{
        color: '#0d0d0c',
        opacity: 0.5,
        fontWeight: '400'
    }
})
