import React from 'react';
import { Text, View, StyleSheet,FlatList,TouchableOpacity } from 'react-native';
import ResultDetails from './ResultDetails';
import { withNavigation } from 'react-navigation';

const Resultslist=({tittle,results,navigation})=>{
    if(!results.length)
    {
        return null;
    }
    return <View>
        <Text style={styles.tittle}>{tittle}</Text>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result=>result.id}
        renderItem={({item})=>{
            return (<TouchableOpacity onPress={()=>navigation.navigate('ResultShow',{id:item.id})}>
            <ResultDetails result={item} />
               </TouchableOpacity>   ) }   }
        />
        
    </View>
}

const styles = StyleSheet.create({
    tittle:{
        fontSize:18,
        fontWeight: 'bold',
        marginLeft:15,
        marginBottom:5
    }
});

export default withNavigation(Resultslist);