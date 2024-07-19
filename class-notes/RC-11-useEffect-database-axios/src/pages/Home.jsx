import React, { useEffect, useState } from 'react'
import axios from "axios";
import BilgiList from "../components/BilgiList";
import AddBilgi from "../components/AddBilgi";
const Home = () => {

const [tutorials,setTutorials]=useState([])

  const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";


  //!GET- READ

  const getBilgiler=async()=>{

    const res=  await axios.get(url);
// console.log(res.data);
    setTutorials(res.data)


  }

  useEffect(()=>{
     getBilgiler()
  },[])

  //! delete
const deleteBilgi=async(id)=>{
await axios.delete(`${url}${id}/`)
getBilgiler()
}

//!post veri gönderme

const postBilgi=async(yeniVeri)=>{
await axios.post(url, yeniVeri)
getBilgiler()
}


  return (
    <div>
      <AddBilgi postBilgi={postBilgi}/>
      <BilgiList tutorials={tutorials} deleteBilgi={deleteBilgi} />
    </div>
  );
}

export default Home