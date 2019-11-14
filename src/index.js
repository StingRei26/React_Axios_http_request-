import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'; 

// GLOBAL CONFIG / HEADERS 
 axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'; 
//axios.defaults.headers.commom['Authorization'] = 'AUTH TOKEN'; 
axios.defaults.headers.post['Content-Type'] = 'application/json'

console.log("testing"); 

// To make global requests 
axios.interceptors.request.use(request => {
 console.log(request); 
 return request; 
}, error => {
    console.log(error); 
    return Promise.reject(error); 
  }  
); 

axios.interceptors.response.use(response => {
    console.log(response); 
    // Edit request config 
    return response; 
  }, error => {
      return Promise.reject(error);
  });


ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
