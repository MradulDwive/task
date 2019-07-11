import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import bookReducer from './reducers/bookReducer';
import {Provider} from 'react-redux'

let initialState = [
    {
        "author": "Chinua Achebe",
        "description": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        "count": 209,
        "name": "Things Fall Apart",
        "id":1
      },
      {
        "author": "Hans Christian Andersen",
        "description": "https://en.wikipedia.org/wiki/",
        "count": 784,
        "name": "Fairy tales",
        "count": 1836,
        "id": 2
      },
      {
        "author": "Dante ",
        "description": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
        "count": 928,
        "name": "The Divine Comedy",
        "id": 3
      },
      {
        "author": "Alighieri",
        "description": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
        "count": 160,
        "name": "The Epic Of Gilgamesh",
        "id":4
      },
      {
        "author": "Richie",
        "description": "https://en.wikipedia.org/wiki/Book_of_Job\n",
        "count": 176,
        "name": "The Book Of Job",
        "id": 5
      },
];

if( localStorage.getItem("books") === null)
localStorage.setItem('books',JSON.stringify(initialState));
else 
initialState = JSON.parse(localStorage.getItem('books'));

const store = createStore(bookReducer,initialState);


ReactDOM.render(
<Provider store={store}><App /></Provider>, document.getElementById('root'));


serviceWorker.unregister();
