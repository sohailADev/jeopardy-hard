import React, { useEffect, useState } from "react";
import cardata from '../../data.json'

const CarDetail = ({match}) => {

 const [car,setCar] = useState({})

  useEffect(()=>{

    const  newCar = cardata.find(cardata=>cardata.id === match.params.id)

    
    setCar(newCar)
  },[])






  return (
  <div> 
   CarDetail
    <p>carId:{car.id}</p>
    <p>Car color:{car.color}</p>
    <p>Car type:{car.type}</p>
    <p>Car Capaicty: {car.capacity}</p>
   </div>
)}

export default CarDetail;
