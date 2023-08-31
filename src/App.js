import React, { useState } from 'react';
import Navbar from './NavBar';
import MovieList from './MovieList';
import MovieCard from './MovieCard';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Rating } from 'react-simple-star-rating';
import Arr from './Data';

function App() {
  
  const [search, setsearch] = useState("");
  
const [Data, setData] = useState(Arr)

const [rating, setRating] = useState(0)

const handleRating = (rate)=> {
  setRating(rate)
} 


function add(title,description,rating) {
setData([...Data,{title:title,description:description,rating:rating}])
} return(
<div className="/App">
<Navbar add={add} />
<input placeholder='search app' onChange={(e)=>setsearch(e.target.value)}/>
<Rating onClick={handleRating} />
<MovieList info={Data.filter((el)=>el.title.toLowerCase().includes(search.toLowerCase())&&el.rating>=rating)}/> 
</div>

  );

}
export default App;