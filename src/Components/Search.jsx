import React from 'react'
import { useState } from 'react';


const Search = () => {
const [result, setResult]=useState([]);
const[filter, setFilter]=useState([]);

  const search =async()=>{
    let data=await fetch('https://jsonplaceholder.typicode.com/users');
    data=await data.json();
    setFilter(data);
  }

  const handleFilter=(value)=>{
    const res=filter.filter(f=>f.name.toLowerCase().includes(value))
    setResult(res);
    if(value===''){
      setResult([]);
    }
  }
  return (
    <div className='search'>
    <input type='text' onClick={search} onChange={(e)=>handleFilter(e.target.value)}
     placeholder='Search Here...' />

   <div className='search-res'>
    {
      result.map((d, i)=>(
        <div key={i}>
          {d.name}
        </div>
      ))
    }
   </div>
    </div>
  )
}

export default Search
