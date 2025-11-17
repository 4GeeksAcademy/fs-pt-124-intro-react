import React from "react";

// otro componente utilitario de card


export const Card = () => {

    ///estilos en linea en REACT
    //style={} -> indica que escribimos js
    //style={{}} --> primero para indicar js, segundo para indicar que es un objeto
    //style={{width: '18rem'}} dentro del objeto, pasamos las propiedades css que queremos aplicar


    const cardStyle = {
        width: '18rem'
    }

    return (
        <div className="card ">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}
