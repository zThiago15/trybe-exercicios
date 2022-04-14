import React, { Component } from 'react'

export default class DadJoke extends Component {
  constructor() {
    super();
    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    };

    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);
  }

  async fetchJoke() {

    // Atualização de estado(igual ao .then)
    this.setState(
      { loading: true }, 
      async () => {
        const jokeAPI = 'https://icanhazdadjoke.com/';
        const requestHeaders = { headers: { Accept: 'application/json' } };
    
        const requestJoke = await fetch(jokeAPI, requestHeaders);
        const requestObject = await requestJoke.json();
    
        this.setState({
          loading: false,
          jokeObj: requestObject,
        })
      })
  }

  // Quando a página terminar de carregar, executar a função da fase de vida de montagem
  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    this.setState(({ jokeObj, storedJokes }) => ({
      storedJokes: [...storedJokes, jokeObj],
    }));

    this.fetchJoke();
  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button onClick={this.saveJoke}>Salvar piada</button>
      </div>
    );
  }

  render() {

    const { storedJokes, jokeObj, loading } = this.state;
    const loadingMessage = <span>Carregando..</span>
    return (
      <div>
        <span>{storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}</span>

        <p>Componente Condicional</p>
        
        {/* <p>{jokeObj ? jokeObj.joke : loadingMessage}</p> */}
        { loading ? loadingMessage : this.renderJokeElement() }
      </div>
    )
  }
}
