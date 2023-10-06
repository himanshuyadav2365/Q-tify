import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero/Hero'
import {fetchTopAlbumns} from './components/api/api'
import {useEffect, useState} from 'react'
import Card from './components/Card/Card';
import Section from './components/Section/Section';


function App() {
  
  const [topAlbumData,setTopAlbumData]=useState([])

  useEffect(()=>{
    generateData()
  },[])

  const generateData = async () => {
    try{
    const data =await fetchTopAlbumns()
    console.log(data)
    setTopAlbumData(data)
    }catch(err){
      console.log(err)
    }
  }

  ////why hoisting working in arrow function
 
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <div>
        <Section title="Top Album" data={topAlbumData}/>
      </div>
    </div>
  );
}

export default App;
