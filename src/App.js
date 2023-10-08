import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero/Hero'
import {fetchTopAlbumns,fetchNewAlbumns,fetchSongs} from './components/api/api'
import {useEffect, useState} from 'react'
import Card from './components/Card/Card';
import Section from './components/Section/Section';
import styles from './App.css'

function App() {
  
  const [topAlbumData,setTopAlbumData]=useState([])
  const [newAlbumData,setNewAlbumData]=useState([])
  const [songData,setSongData]=useState([])
  const [filteredDataValues,setFilteredDataValues]=useState([])
  const [value, setValue] = useState(0);

  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const generateSongData=(value)=>{
    let key
    if(value === 0){
        filteredData(songData)
        return
    }
    else if(value === 1){
        key="jazz"
    }
    else if(value === 2){
        key="rock"
    }
    else if(value === 3){
        key="pop"
    }
    else if(value === 4){
        key="blues"
    }
    const res= songData.filter(item=> item.genre.key===key)
    filteredData(res)
  }

  const filteredData=(res)=>{
    setFilteredDataValues(res)
  }

  useEffect(()=>{
    generateSongData(value)
  },[value])

  

  const generateData = async () => {
    try{
    const data =await fetchTopAlbumns()
    const newData=await fetchNewAlbumns()
    const songsData=await fetchSongs()
    console.log(data)
    setTopAlbumData(data)
    setNewAlbumData(newData)
    setSongData(songsData)
    setFilteredDataValues(songsData)

    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    generateData()
  },[])
  

  ////why hoisting working in arrow function
 
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <div className='sectionWrapper'>
        <Section title="Top Albums" data={topAlbumData} type="album"/>
        <Section title="New Albums" data={newAlbumData} type="album"/>
        <Section title="Songs" data={filteredDataValues} type="songs" value={value} handleChange={handleChange}/>
      </div>
    </div>
  );
}

export default App;
