import { useState,useRef } from 'react'
import { IoThumbsDownSharp,IoThumbsUpSharp  } from "react-icons/io5"
import './App.css'

function App() {
  const [imc, setImc] = useState(null)
  const altura = useRef(null)
  const peso = useRef(null)

  function calcularImc(){
    if(altura == null){
      setImc(0)
    }else if(peso == null){
      setImc(0)
    }else{
      const alturaValue = parseFloat(altura.current.value)
      const pesoValue = parseFloat(peso.current.value)

      setImc( pesoValue / alturaValue**2)
    }
  }
  return (
    <>
      <header></header>
      <main className='container'>
        <div className='divImc'>
          <h1>Calcule o seu IMC</h1>
          <p>IMC é a sigla para índice de Massa Corpórea, parâmetro adotado pela OMS para calcular o peso ideal de cada pessoa</p>
          <div className='inputDiv'>
            <input type="text" placeholder='Digite sua altura (M)' ref={altura}  />
            <input type="text" placeholder='Digite seu peso (KG)' ref={peso} />

            <button onClick={calcularImc}>Calcular</button>

            {
              imc && 
              <div>
                  Seu IMC é de {imc}
              </div>
            }
          </div>
          
        </div>
        <div className='divBox'>
          <div className="boxStatus">
            <div className='icon'>
              <IoThumbsDownSharp />
            </div>
            
            <h2>Magreza</h2>
            <p>IMC está entre 0 e 18.5</p>
          </div>
          <div className="boxStatus">
          <div className='icon'>
              <IoThumbsUpSharp />
            </div>
            <h2>Normal</h2>
            <p>IMC está entre 18.6 e 24.9</p>
          </div>
          <div className="boxStatus">
          <div className='icon'>
              <IoThumbsDownSharp />
            </div>
            <h2>Sobrepeso</h2>
            <p>IMC está entre 25 e 30</p>
          </div>
          <div className="boxStatus">
          <div className='icon'>
              <IoThumbsDownSharp />
            </div>
            <h2>Obesidade</h2>
            <p>IMC está entre 30.1 e 99</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
