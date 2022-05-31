import { useReducer, useState } from 'react';
import styled from 'styled-components';
import Banner from "../components/Banner"

// Reducer - Redutor/filtro/robozinho. Tem três partes: estado, evento, contexto. Evento é quem aciona (o reducer), estado é a info que estou armazenando, contexto é a minha área de atuação. 

// Criar um reducer para armazenar todos os campos do formulário dinamicamente
// Reducer isola o estado (a informação digitada) de um componente que criamos

const Container = styled.div`
  display: flex;
  fieldset {
    min-height: 80px;
    width: 80%;
    border:none;
  }
  > div:nth-child(2) {
    height: 100vh;
    display: flex;
    justify-content: center;
  }
  form {
    width: 70%;
    display: flex;
    flex-direction: column;
    height: 70vh;
    button {
      width: 80%;
      line-height: 50px;
      border: none;
      border-radius: 25px;
      font-size: 1.2em;
      cursor: pointer;
      margin-top: 3%;
    }
  }
`;


const formReducer = (state, event) => {
  return {
    ...state, 
    [event.name]: event.value,
  }
}

function Register() {
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
        <h1>Complete os campos ao lado para pedir sua Conta e Cartão de crédito</h1>
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
          <p>Nome Completo:</p>
          <input type="text" name="Nome" id="Nome" required onChange={handleChange} />
        </label>
        </fieldset>

        <fieldset>
        <label>
          <p>Celular:</p>
          <input type="text" name="Celular" id="Celular" required onChange={handleChange} />
        </label>
        </fieldset>

        <fieldset>
        <label>
          <p>E-mail:</p>
          <input type="text" name="E-mail" id="E-mail" required onChange={handleChange} />
        </label>
        </fieldset>

        <fieldset>
        <label>
          <p>Confirmação do E-mail*:</p>
          <input type="text" name="Confirma_Email" id="Confirma_Email" required onChange={handleChange} />
        </label>
        </fieldset>    

        <fildset>
          <label>
            <p>Aceito receber comunicações do Nubank por Whatsapp. <input type="checkbox" name="aceito_comunicação" id="aceito_comunicação" /> </p>
            
          </label>
        </fildset>     

        <fildset>
          <label> 
            <p> Eu li, estou ciente das condições de tratamento dos meus dados pessoais e dou meu consentimento, quando aplicável, conforme descrito nesta Política de Privacidade. <input type="checkbox" name="aceito_contrato" id="aceito_contrato" /></p>
          </label>
        </fildset>   

        <button type="submit">Enviar</button>
      </form>
      </Banner>
    </Container>
  );
}

export default Register;


// conditional rendering = (ele vai dentro do jsx = return) recurso do react que permite que só redenriza se a condição for atendida 