//* ==================== HOOKS ===============================
//! Hook’lar fonksiyonel component’ler icerisinde state’leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler’in
//! kullanimini cok azaltmistir.
//? React’ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.
//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from “react”;
//* 2. Hook’lar ust seviyede tanimlanmalidir. Yani Hook’lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook’lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook’lar icerisinde bir hook cagrilabilir)
//?    https://react.dev/reference/react/hooks#state-hooks
//* =============================================================

import { useState } from "react";
import Events from "../1-events-hooksIntro/Events";

const Hooks = () => {
    const [sayac, setSayac] = useState(0);

    const [kisi, setKisi] = useState({
        isim: "Mustafa",
        meslek: "developer",
        yas: 45,
        renk: "red",
    });

    const [toggle, setToggle] = useState(true);

    const arttir = () => {
        setSayac(sayac + 1);
    };

    //! 1.YOL
    // const changeAll = () => {
    //     if (kisi.isim == "Mustafa") {
    //         setKisi({
    //             isim: "Erkan",
    //             meslek: "FS",
    //             yas: 30,
    //             renk: "green",
    //         });
    //     } else{
    //         setKisi({
    //             isim: "Mustafa",
    //             meslek: "developer",
    //             yas: 45,
    //             renk: "red",
    //         })
    //     }
    // };

    //! 2.YOL
    const changeAll = () => {

        setToggle(!toggle)

        if (toggle) {
            setKisi({
                isim: "Mustafa",
                meslek: "developer",
                yas: 45,
                renk: "red",
            });
        } else {
            setKisi({
                isim: "Erkan",
                meslek: "FS",
                yas: 30,
                renk: "green",
            });
        }
    };

    const changeName = () => {
        setKisi({ ...kisi, isim: "osman", renk: "blue" });
    };

    return (
        <div className="container text-center">
            <h1>********************************************************</h1>
            <h1>USESTATE</h1>
            <h2 className="text-danger">COUNT:{sayac}</h2>

            <button onClick={arttir} className="btn btn-primary">
                ARTTIR
            </button>

            <h1 className="mt-5">USESTATE OBJECT KULLANIMI</h1>
            <div style={{ color: kisi.renk }}>
                <h1>{kisi.isim}</h1>
                <h2>{kisi.meslek}</h2>
                <h3>{kisi.yas}</h3>
            </div>
            <button onClick={changeAll} className="btn btn-primary m-2">
                Change All
            </button>
            <button onClick={changeName} className="btn btn-info m-2">
                Change Name
            </button>
            <button
                onClick={() => setKisi({ ...kisi, yas: 35 })}
                className="btn btn-warning"
            >
                Change Age
            </button>
            <button
                onClick={() => setToggle(!toggle)}
                className="btn btn-secondary"
            >
                SHOW
            </button>

            {toggle && <Events />}
            {/* {toggle ? <Events/> : ""} */}
            {/* Toggle true ise Events componentini goster aksi takdirde gosterme, alttakini yorumdan çıkarmak istersek App.js deki Events comp. yoruma almalıyız */}
            {/* 
            {
                toggle===true? <Events/>:""
            } */}
        </div>
    );
};

export default Hooks;
