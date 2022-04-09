import React, { Component } from 'react'
import './App.css';

class Form extends Component {
  render() {
    return (
      <form>
        <fieldset>
          <legend>Dados</legend>

          <div className="ComponentForm">
            <label>Nome</label>
            <input type="text" maxLength={40} placeholder="Limite de 40 caracteres" required/>
          </div>

          <div className="ComponentForm">
            <label>E-mail</label>
            <input type="email" maxLength={50} placeholder="trybe@gmail.com" required/> 
          </div>

          <div className="ComponentForm">
            <label>CPF</label> 
            <input type="text" maxLength={11} placeholder="Apenas números" required/>  
          </div>

          <div className="ComponentForm">
            <label>Endereço</label>
            <input type="text" maxLength={200} required/>
          </div>

          <div className="ComponentForm">
            <label>Cidade</label>
            <input type="text" maxLength={28} required/>
          </div>

          <div className="ComponentForm">
            <label>Estado</label>
            <select>
              <option>AC</option>
              <option>AL</option>
              <option>AP</option>
              <option>AM</option>
              <option>BA</option>
              <option>CE</option>
              <option>DF</option>
              <option>ES</option>
              <option>GO</option>
              <option>MA</option>
              <option>MT</option>
              <option>MS</option>
              <option>MG</option>
              <option>PA</option>
              <option>PB</option>
              <option>PR</option>
              <option>PE</option>
              <option>PI</option>
              <option>RJ</option>
              <option>RN</option>
              <option>RS</option>
              <option>RO</option>
              <option>RR</option>
              <option>SC</option>
              <option>SP</option>
              <option>SE</option>
              <option>TO</option>
            </select>
          </div>
          

          <div className="ComponentForm Residencia">
            <span>
              <label for="casa">Casa</label>
              <input type="radio" name="residencia" value="Casa" id="casa"/>
            </span>

            <span>
              <label for="ap">Apartamento</label>
              <input type="radio" name="residencia" value="Apartamento" id="ap"/>
            </span>
          </div>


        </fieldset>

        <fieldset>
          <legend>Currículo</legend>

          <div className="ComponentForm">
            <label>Resumo do CV</label>
            <textarea maxLength={1000} required></textarea>
          </div>

          <div className="ComponentForm">
            <label for="cargo">Cargo</label>
            <textarea maxLength={40} id="cargo"></textarea>
          </div>

          <div className="ComponentForm">
            <label for="descricao">Descrição do cargo</label>
            <input type="text" maxLength={500}/>
          </div>
        </fieldset>

        <button>Enviar</button>
        <button>Limpar</button>
      </form>
    )
  }
}

export default Form;
