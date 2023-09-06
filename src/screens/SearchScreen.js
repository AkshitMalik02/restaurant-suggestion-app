import React ,{useState} from 'react';
import {Text , View , StyleSheet,ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import Resultslist from '../components/Resultslist'


const SearchScreen = () =>{
    const [term,setTerm]=useState(' ')
    const [searchApi,results,errormessage]=useResults()

    const filterResultsByPrice=(price)=>{
        return results.filter(result=>{
            return result.price === price;
        })
    }
    
    return( <View style={{flex: 1}}>
        <SearchBar 
        term={term} 
        onTermChange={newTerm=>setTerm(newTerm)}
        onTermSubmit={searchApi(term)}/>
        {{errormessage} ? <Text>{errormessage}</Text> : null}
        <ScrollView>
        <Resultslist tittle='Cost effective'
         results={filterResultsByPrice('$')}
        />
        <Resultslist tittle='Bit pricer'
         results={filterResultsByPrice('$$')}
        />
        <Resultslist tittle='Big spender'
         results={filterResultsByPrice('$$$')}
         />
        </ScrollView>
    </View>)
};

const styles = StyleSheet.create({});

export default SearchScreen;
