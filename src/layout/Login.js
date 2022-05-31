import { useReducer, useState } from 'react';
import styled from 'styled-components';
import bannerBG from '../assets/images/bannerBG.png';
import Banner from "../components/Banner"

// Reducer - Redutor/filtro/robozinho. Tem três partes: estado, evento, contexto. Evento é quem aciona (o reducer), estado é a info que estou armazenando, contexto é a minha área de atuação. 

// Criar um reducer para armazenar todos os campos do formulário dinamicamente
// Reducer isola o estado (a informação digitada) de um componente que criamos

const Container = styled.div`
  display: flex;
  fieldset{
    width: 60%;
    border:none;
  }
`;


const formReducer = (state, event) => {
  return {
    ...state, 
    [event.name]: event.value,
  }
}

function Login() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false); //armazena informação padrão que muda o estado do componente
 
  //function expression handleSubmit = só existe a partir desta linha. Ela não sofre: hoisting (ser içada pra primeira linha)
  const handleChange = (event) => {
    // aqui está sendo utilizado o reducer através do setFormData
    setFormData({
      name: event.target.name, 
      value: event.target.value,
    })

  }
  const handleSubmit = (event) => {
    event.preventDefault();

      setSubmitting(true);
      setTimeout(()=>{
        setSubmitting(false);
      }, 3000); //milisegundos; Timer que recebe uma função para executar após o tempo determinado
  }
  
  
//componente inteligente é um componente abstrato que se adapta a situações mas que continua simples

  return (
    <Container>
      <Banner background={true}>
        <h1>Bem vindo, preencha os dados para acessar sua conta</h1>
      </Banner>
      <Banner>
      {/* && Operador lógico. Tenha medo do operador AND. || Tenha pavor do operador OR */}
      {/* sempre que o and estiver sendo usado, se a informação for falsa todo o resto é ignorado */}
      {submitting && (
        <div>
          <p>Enviando formulário...</p>
          <ul>
            {Object.entries(formData).map(([name, value])=>
            <li key={name}>
              <strong>{name}</strong>: {value.toString()}
            </li>
            )} 
          </ul>
          </div>
      )}
      <form onSubmit={handleSubmit}>
        {/* Nome completo / CPF / Celular / E-mail / Confirmação do E-mail */}
        <fieldset>
        <label>
          <p>CPF:</p>
          <input type="text" name="CPF" id="CPF" required onChange={handleChange} />
        </label>
        </fieldset>
        
        <fieldset>
        <label>
          <p>Senha:</p>
          <input type="password" name="Senha" id="Senha" required onChange={handleChange} />
        </label>
        </fieldset>

        <button type="submit">Entrar</button>
      </form>
      </Banner>
    </Container>
  );
}

export default Login;


// conditional rendering = (ele vai dentro do jsx = return) recurso do react que permite que só redenriza se a condição for atendida 