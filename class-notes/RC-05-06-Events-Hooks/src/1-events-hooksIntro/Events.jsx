import React from 'react'

const Events = () => {

    //! JS alani
    let baslik ="Merhaba arkadaslar";
    let count= 0

    const arttir = ()=>{
        count += 1
        console.log(count)

        document.querySelector("span").textContent=count
    }

    const buttonTitle =(title)=>{
        
        console.log(title)

        document.querySelector(".btn-danger").textContent=title
    }

    const baslikChange =(yeni)=>{
        baslik=yeni
        console.log(baslik)

        document.querySelector("h1").textContent=baslik
    }

  return (

    //! JSX REACT alani
    <div className='text-center container'>

        <h1>INFO: {baslik}</h1>
        <h2>COUNT: <span className='text-danger'>{count}</span> </h2>
        <button onClick={arttir} className='btn btn-primary'>ARTTIR</button>
        <button onClick={()=>buttonTitle("oi")} className='btn btn-danger m-2'>DEGISTIR</button>
        <button onClick={()=>baslikChange("hello friends")} className='btn btn-info m-2'>TIKLANDI</button>
    </div>
  )
}



export default Events