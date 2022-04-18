import React, { Component } from 'react'

class CurriculumFieldset extends Component {
  render() {

    const { cv, cargo, descricao, handleChange } = this.props;
    return (
      <fieldset>
        <legend>Currículo</legend>

        <div className="ComponentForm">
          <label>Resumo do CV</label>
          <textarea maxLength={1000} value={cv} name="cv" onChange={handleChange} required></textarea>
        </div>

        <div className="ComponentForm">
          <label htmlFor="cargo">Cargo</label>
          <textarea maxLength={40} value={cargo} name="cargo" onChange={handleChange}  id="cargo" onMouseLeave={() => alert('Preencha com cuidado está informação.')} required></textarea>
        </div>

        <div className="ComponentForm">
          <label htmlFor="descricao">Descrição do cargo</label>
          <input type="text" maxLength={500} value={descricao} name="descricao" onChange={handleChange} required/>
        </div>
      </fieldset>
    )
  }
}

export default  CurriculumFieldset;