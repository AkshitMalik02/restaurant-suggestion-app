import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer NVKuLcLnPz7JwDs7bsRRK_BUX65FeNimK2_9VCNBUWervm7kFb2r5V05yBBpuxdEBX769HozIH4xi9lom8SHlN4Pcazxk0aQ_XXUgTJrJJyst-lcGPY5Zj7yRFJSZHYx'
        
        
        
    } 
});