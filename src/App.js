import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [joke, setJoke] = useState("");
  const newJoke = ()=> {
    //tener la url de la API
    const url = "https://v2.jokeapi.dev/joke/Dark?type=single"
    //crear una peticion con fetch
    const peticion = fetch(url);
    //traducir a js convierto la peticion cn json
    peticion.then(dato=> dato.json())
    //acciones
        //crear un div con un boton que muestre una nueva 
        //broma cada vez que de click
    .then( broma => setJoke(broma.joke)) 
    .catch(()=>console.log("error")) 
    //para que solo se ejecute la primera vez
  }
  
  //usamos useEffect para que solo se ejecute una vez
  useEffect(()=>{
     newJoke();
  },[])
  return (
    <>
    <div className='caja1'>
     <h1> DARK JOKES </h1>
     </div>
     <div className='caja' >
      {joke}
      </div>

     <div className='my-div'>
      <button onClick={newJoke}>NEW JOKE</button>
      </div>

      <div className="corazon">
        
      </div>
    </>
  );
}

export default App;
