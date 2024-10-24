import './index.css';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape/Index';

function App() {

  const times = [
  {      
    nome:'Programação',
    corPrimaria:'#82CFFA',
    corSecundaria:'#E8F8FF'
  },
  {
    nome:'Front-End',
    corPrimaria:'#A6D157',
    corSecundaria:'#F0F8E2'
  },
  {
    nome:'Data Science',
    corPrimaria:'#A6D137',
    corSecundaria:'#D9F7E9'
  },
  {
    nome:'Devops',
    corPrimaria:'#A60157',
    corSecundaria:'#F0F8E2'
  },
  {
    nome:'UX e Design',
    corPrimaria:'#DB6E8F',
    corSecundaria:'#FAE9F5'
  },
  {
    nome:'Mobile',
    corPrimaria:'#FFBA05',
    corSecundaria:'#FFF509'
  },
  {
    nome:'Inovação e Gestão',
    corPrimaria:'#FF8A29',
    corSecundaria:'#FFEEDF'
  }

  ];

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores,colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

      {times.map((time,index) => <Time 
        key={index} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Rodape/>

    </div>
  );
}

export default App;
