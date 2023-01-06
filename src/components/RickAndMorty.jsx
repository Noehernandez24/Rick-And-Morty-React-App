import axios from 'axios';
import React, { useEffect, useState } from 'react';
import hero from '../assets/hero.png'
import ResidentsCard from './ResidentsCard';
import unknowText from '../assets/unknow-text.png'
import unknowImg from '../assets/unknow-residents.png'
import loaderImg from '../assets/loader.gif'

const RickAndMorty = () => {
    const [dimension, setDimension] = useState({});
    const [inputID, setInputID] = useState("");
    const [loader, setLoader] = useState(true)


    useEffect(() => {
        const randomID = Math.floor(Math.random() * 127)
        axios.get(`https://rickandmortyapi.com/api/location/${randomID}`)
        .then(res => {
            setDimension(res.data)
            setTimeout(() => {
             setLoader(false)
            }, 3000);
            
        })
    },[])

    const searchForID = () =>{
        if (inputID < 127) {
            axios.get(`https://rickandmortyapi.com/api/location/${inputID}`)
            .then(res => setDimension(res.data))
        } 
    }


    // console.log(dimension);

    return (
        <main>
            {
                loader === true &&
                <div className="loader">
                <img src={loaderImg} alt="" className="loader-img" />
                </div>
            }
             
           
            <header className="hero">
                <img className='hero-img' src={hero} alt="" />

                <div className="input-container">

                <input id='id' className='hero-input' type="text" placeholder='Escribe el ID de la ubicación (1 - 126)' value={inputID} onChange={e => setInputID(e.target.value)}/>
                <button className='hero-btn' onClick={searchForID}>SEARCH</button>
                {inputID > 126 && <p className= "error" id='error'> "El ID ingresado no puede sobrepasar de 126"</p>}
                

                </div>
            </header>

            <article className="dimension-info">
                <h3>Nombre: <br/> <span>{dimension.name}</span></h3>
                <h3>Tipo: <br /> <span>{dimension.type}</span></h3>
                <h3>Dimensión: <br /> <span>{dimension.dimension}</span></h3>
                <h3>Población: <br /> <span>{dimension.residents?.length}</span></h3>
            </article>

            {
                dimension.residents?.length == 0 &&
                <section className='residents-unknow'>
                    <img className='u-img' src={unknowText} alt="" />
                    <img className='u-img' src={unknowImg} alt="" />
                </section>
            }

            <section className='card-container'>
            {
                dimension.residents?.map(dimension => (
                    <ResidentsCard key={dimension} dimension={dimension}/>
                ))
            }
            </section>
            
            
        </main>
    );
};

export default RickAndMorty;