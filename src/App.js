import { useState } from 'react';
import './index.css';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [message, setMassage] = useState('');

  function calculcarImc(){
    const alt = altura /100;
    const imc = peso / (alt * alt);

    if(imc < 18.6){
      setMassage(` >> Você está abaixo do peso! Seu IMC ${imc.toFixed(2)} <<`);
    }else if(imc >= 18.6 && imc < 24.9){
      setMassage(` >> Peso ideal! Seu IMC ${imc.toFixed(2)} <<`);
    }else if (imc >= 24.9 && imc < 34.9){
      setMassage(` >> Você está levemente acima do peso!!! Seu IMC ${imc.toFixed(2)} <<`);
    }else if(imc > 34.9){
      setMassage(` >> Cuidado Obesidade! Seu IMC ${imc.toFixed(2)} <<`);
    }
  }


  return (
    <div className='app'>
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc</span>

      <div className='area-input'>
        <input 
          type="text"
          placeholder='Peso em (kg) Ex: 90'
          value={peso}
          onChange={(e)=> setPeso(e.target.value)}
        />
        <input 
          type="text"
          placeholder='Altura em (cm) Ex: 180'
          value={altura}
          onChange={(e)=> setAltura(e.target.value)}
        />

        <button onClick={calculcarImc} >
          Calcular
        </button>

      </div>
      <h2>{message}</h2>
    </div>
  );
}

export default App;
