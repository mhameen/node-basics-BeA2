const axios = require('axios');

async function fetchApi() {
    try {
      const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  
  fetchApi();