import React from 'react'

function Characters(props) {
    const { nombre, setNombre } = props;

    const reset = () => {
        console.log("El contenido esta vacio")
        setNombre(null)
    }

    console.log(nombre)
    return (
        <div className='characters'>

            <h1>Personajes</h1>
            <span className='back-home' onClick={reset}>Volver a Inicio</span>
            <div className='container-characters'>
                {nombre.map((personaje, index) => (
                    <div className='character-container' key={index}>
                        <div>
                            <img src={personaje.image} alt={personaje.name} />
                        </div>
                        <div>
                            <h3>{personaje.name}</h3>
                            <h6>{personaje.status === "Alive" ? (
                                <>
                                    <span className="alive" />Alive
                                </>
                            ) : (
                                <>
                                <span className="dead" />Dead
                                </>
                            )}</h6>
                            <p>
                                <span className='text-grey'>Episodios: </span>
                                <span>{personaje.episode.length}</span>
                            </p>
                            <p>
                                <span className='text-grey'>Especie: </span>
                                <span>{personaje.species}</span>
                            </p>
                            <p>
                                <span className='text-grey'>Genero</span>
                                <span>{personaje.gender}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <span className='back-home' onClick={reset}>Volver a Inicio</span>
        </div>
    )
}

export default Characters