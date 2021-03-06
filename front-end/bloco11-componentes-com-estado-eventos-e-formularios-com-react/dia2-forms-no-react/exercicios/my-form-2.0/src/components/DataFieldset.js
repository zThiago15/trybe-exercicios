import React, { Component } from 'react'

class DataFieldset extends Component {
  
  render() {
    const { nome, email, cpf, endereco, cidade, estado, handleChange } = this.props;

    return (
      <fieldset>
          <legend>Dados</legend>

          <div className="ComponentForm">
            <label>
              Nome
              <input onChange={ handleChange } name="nome" value={nome} type="text" maxLength={40} placeholder="Limite de 40 caracteres" required/>
            </label>
          </div>

          <div className="ComponentForm">
            <label>E-mail</label>
            <input onChange={ handleChange } name="email" value={email} type="email" maxLength={50} placeholder="trybe@gmail.com" required/> 
          </div>

          <div className="ComponentForm">
            <label>CPF</label> 
            <input onChange={ handleChange } name="cpf" value={cpf} type="text" maxLength={11} placeholder="Apenas números" required/>  
          </div>

          <div className="ComponentForm">
            <label>Endereço</label>
            <input onChange={ handleChange } name="endereco" value={endereco} type="text" maxLength={200} required/>
          </div>

          <div className="ComponentForm">
            <label>Cidade</label>
            <input onChange={ handleChange } onBlur={this.validateCity} name="cidade" value={cidade} type="text" maxLength={28} required/>
          </div>

          <div className="ComponentForm">
            <label>Estado</label>
            <select name="estado" value={estado} onChange={this.handleChange}>
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AP">AP</option>
              <option value="AM">AM</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MT">MT</option>
              <option value="MS">MS</option>
              <option value="MG">MG</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PR">PR</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RS">RS</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="SC">SC</option>
              <option value="SP">SP</option>
              <option value="SE">SE</option>
              <option value="TO">TO</option>
            </select>
          </div>

          <div className="ComponentForm Residencia">
            <span>
              <label htmlFor="casa">Casa</label>
              {/* selec radio by deafult - https://stackoverflow.com/questions/5592345/how-to-select-a-radio-button-by-default */}
              <input type="radio" name="residencia" onChange={ handleChange } value="Casa" id="casa" required/>
            </span>

            <span>
              <label htmlFor="ap">Apartamento</label>
              <input type="radio" name="residencia" onChange={ handleChange } value="Apartamento" id="ap"/>
            </span>
          </div>
      </fieldset>
    )
  }
}

export default DataFieldset;