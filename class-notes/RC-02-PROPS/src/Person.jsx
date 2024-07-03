import Message from "./Message";


const Person = (props) => {

    console.log(props)

    //dest
    const{name, img, tel}=props;
  return (
    <div>
        <h1>
            {name}            
        </h1>
        <img src={img} alt="" />
        <p>{tel}</p>

        <Message
            isim={name}
        />
    </div>
  )
}

export default Person