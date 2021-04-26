import React, { useEffect, useState } from "react";
import cardata from '../../data.json'
import { Link } from "react-router-dom";
const Cars = (props) => {
  useEffect(() =>{
    fetchCarData();
  },[])


const fetchCarData = async () =>{
  console.log(cardata)
 setCars(cardata)
}
const [cars,setCars] = useState([])








  return (
  <div>   
  
  {
    cars.map(car =>(<h2 key={car.id}>
      
     <Link to={`/cars/${car.id}`} >{car.type}</Link>
      </h2>))
  }
    </div>   
  )

}

export default Cars;
