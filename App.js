import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen'
import ResultShowScreen from './src/screens/ResultsShowScreen';


const navigator=createStackNavigator({
  Search:SearchScreen,
  ResultShow:ResultShowScreen
  

},
{
  initialRouteName: 'Search',
  defaultNavitionOptions:{
    title:'business Search'
  }
});

export default createAppContainer(navigator);