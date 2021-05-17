import './App.css';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import HeroList from './HeroList';

const public_key = `f4664ca8e6a7bc4ddccda0c00480a972`;
const hash = `8d14e7bce8c239d96aad15754ec7174d`;
const id = ['1009220', '1009368', '1009664' , '1009610', '1009351', '1009297'];
const url = `http://gateway.marvel.com/v1/public/characters/1009220?ts=1&apikey=${public_key}&hash=${hash}`;


console.log(url);
console.log(public_key);
console.log(hash);


function App() {


  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(()=>{
    const fetch = async()=>{
      const result = await axios(url)
      console.log(result.data)
      setItems(result.data.data.results)
      setLoading(false)
    }
    fetch()
  }, [])


  return (
    <div className="App">

    <HeroList items={items} isLoading={isLoading} />

 
    </div>
  );
}

export default App;
