import imageRickMorty from './img/rick-morty.png'
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [nombre, setNombre] = useState(null)

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const characterApi = await api.json()
    setNombre(characterApi.results)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {nombre ? (
          <Characters nombre={nombre} setNombre={setNombre}/>
        ) : (
          <>
            <img src={imageRickMorty} alt='Rick & Morty' className='img-home'></img>
            <button onClick={reqApi} className='btn-search'>Buscar Personajes</button>
          </>
        )}
    </header>
    </div >
  );
}

export default App;
