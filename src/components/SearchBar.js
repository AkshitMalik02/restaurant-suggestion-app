import React from 'react';
import {TextInput ,Text, View , StyleSheet } from 'react-native';
import { Feather} from '@expo/vector-icons'
 
const SearchBar = ( {term,onTermChange,onTermSubmit})  =>{
    const handleEndEditing = () => {
        console.log('End editing');
        onTermSubmit
        // perform validation or submit form data here
      };
    
    return <View style={styles.backgroundstyle}>
        <Feather name="search" style={styles.iconStyle}/>


        <TextInput style={styles.inputStyle}
        placeholder="Search"
        placeholderStyle={styles.placeholderStyle}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={() => handleEndEditing()}

        />
        
    </View>
};

const styles = StyleSheet.create({
    backgroundstyle:{
        backgroundColor:'#F0EEEE',
        height:50,
        marginHorizontal:15,
        borderRadius:5,
        flexDirection:'row',
        marginTop:10,
        marginBottom:10,
        
    
    },
    inputStyle:{
        flex:1,
        fontSize:18,
        

    },
    iconStyle:{
        fontSize:35,
        alignSelf: 'center',
        marginHorizontal:15,
        
    },
    placeholderStyle: {
        color: 'rgb(0, 0, 0, 1)', 
      },
    
    
    
});

export default SearchBar;