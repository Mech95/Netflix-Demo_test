import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import './App.css'; 
import RowPost from './Components/RowPost/RowPost';
import {action,comedy,documentaries,originals, trending} from '/home/nikhil/Desktop/Brotoype/netflix-2/src/url.js'
import YouTube from 'react-youtube';


function App() {
  return (
    <div className='App'>
    <NavBar />
    <Banner />
    <RowPost url={originals} title='Netflix Originals'/>
    <RowPost url={trending} title='Latest & Trending' isSmall/>
    <RowPost url={action} title='Popular in Action' isSmall/>Documentaries
    <RowPost url={documentaries} title='Netflix Documentaries ' isSmall/>
    <RowPost url={comedy} title='Shows Recommended For You' isSmall/>
    
    </div>
  )
}



export default App;
