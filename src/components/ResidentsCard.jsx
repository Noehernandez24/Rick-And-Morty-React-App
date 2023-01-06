import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentsCard = ({dimension}) => {
     const [resident, setResident] = useState({})

     useEffect(() => {
        axios.get(dimension)
        .then(res => setResident(res.data))
     },[])
    
    //  console.log(resident);

    return (
        <>
            <div className="card">

                <article className="card-img-container">
                    <img className='card-img' src={resident.image} alt="" />
                    <p className="card-status">
                        <span style={resident.status === "Alive" ? {backgroundColor: "greenyellow"} : resident.status === "Dead" ? {backgroundColor: "red"} : {backgroundColor: "gray"}}>

                        </span>
                        {resident.status}
                    </p>
                </article>

                <article className="card-info">
                    <h3 className='card-name'>{resident.name}</h3>
                    <p className="card-features">RAZA <br /> <span>{resident.species}</span></p>
                    <p className="card-features">ORIGEN <br /> <span>{resident.origin?.name}</span></p>
                    <p className="card-features">APARICIÓN EN EPISODIOS <br /> <span>{resident.episode?.length}</span></p>
                </article>

            </div>
        </>
    );
};

export default ResidentsCard;