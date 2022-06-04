import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { useState } from "react";
import  axios  from "axios";
import { useEffect } from 'react';
import Card from './Card';



const Data = () => {

  const [data, Setdata] = useState([]);
 
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://asos2.p.rapidapi.com/products/v2/list',
      params: {
        store: 'US',
        offset: '0',
        categoryId: '4209',
        limit: '48',
        country: 'US',
        sort: 'freshness',
        currency: 'USD',
        sizeSchema: 'US',
        lang: 'en-US'
      },
      headers: {
        'X-RapidAPI-Host': 'asos2.p.rapidapi.com',
        'X-RapidAPI-Key': 'cd17455652msha65012a068ec406p1438aejsn0ecf90d0b504'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data.products);
      Setdata(response.data.products);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);
  

  return (
    <div>
<Carousel>
{data.map((item, i) => (
  <div>

  
    <img
      className="d-block w-100"
      src={item.url}
     
    />
 
  
      <h3>{item.name}</h3>


 
 
  </div>
  ))}
     </Carousel> 
  


    </div>
  )
}

export default Data