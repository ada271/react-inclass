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

    const buttonTitle =()=>{

    }

  return (

    //! JSX REACT alani
    <div className='text-center container'>

        <h1>INFO: {baslik}</h1>
        <h2>COUNT: <span className='text-danger'>{count}</span> </h2>
        <button onClick={arttir} className='btn btn-primary'>ARTTIR</button>
        <button onClick={buttonTitle} className='btn btn-primary m-2'>TEMIZLE</button>
    </div>
  )
}

export default Events