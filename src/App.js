import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero/Hero'
import {fetchTopAlbumns,fetchNewAlbumns} from './components/api/api'
import {useEffect, useState} from 'react'
import Card from './components/Card/Card';
import Section from './components/Section/Section';
import styles from './App.css'

function App() {
  
  const [topAlbumData,setTopAlbumData]=useState([])
  const [newAlbumData,setNewAlbumData]=useState([])

  useEffect(()=>{
    generateData()
  },[])

  const generateData = async () => {
    try{
    const data =await fetchTopAlbumns()
    const newData=await fetchNewAlbumns()
    console.log(data)
    setTopAlbumData(data)
    setNewAlbumData(newData)
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
        <Section title="Top Albums" data={topAlbumData}/>
      </div>
      <div className="album">
        <Section title="New Albums" data={newAlbumData}/>
      </div>
    </div>
  );
}

export default App;
