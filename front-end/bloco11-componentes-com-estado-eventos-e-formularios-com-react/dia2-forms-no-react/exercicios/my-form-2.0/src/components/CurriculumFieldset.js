import React, { Component } from 'react'

class CurriculumFieldset extends Component {
  render() {
    return (
      <fieldset>
        <legend>Currículo</legend>

        <div className="ComponentForm">
          <label>Resumo do CV</label>
          <textarea maxLength={1000} required></textarea>
        </div>

        <div className="ComponentForm">
          <label htmlFor="cargo">Cargo</label>
          <textarea maxLength={40} id="cargo" onMouseEnter={() => {alert('Preencha com cuidado está informação.')}}></textarea>
        </div>

        <div className="ComponentForm">
          <label htmlFor="descricao">Descrição do cargo</label>
          <input type="text" maxLength={500}/>
        </div>
      </fieldset>
    )
  }
}

export default  CurriculumFieldset;