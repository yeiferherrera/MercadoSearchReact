import React, { Component } from 'react';
import axios from 'axios'

var api = "https://api.mercadolibre.com/sites/MCO/search?q="

class App extends Component {
  constructor(props){
    super(props)
    this.state = {cadena: '',
                  Result: []
                };
    this.textChanged = this.textChanged.bind(this);
    this.buscar = this.buscar.bind(this);
  }

  buscar()
  {
    var self = this
     axios.get(api+this.state.cadena).then(function(response)
      {
        self.setState({
          Result: response.data.results
        })
      }).catch(function(error){
        console.log(error);
      })
  }

  textChanged(event){
  var entrada = event.target.value
  this.setState({cadena:entrada})
  
  }

  render() {
    return (
      <div>
        <header>
          <h1>MercadoSearch yeiferherrera</h1>
        </header>
        <br/>
        <div>
          <input type="text" onChange={this.textChanged}/>
          <button onClick={this.buscar}>Buscar</button>
        </div>
        <div>
        <ul>
          {
            this.state.Result.map(item =>
            <li key={item.id}>
              <img  src={item.thumbnail} />
            <div >
              <h3 >Nombre: {item.title}</h3>
              <p >Precio: {item.price}</p>
              <p >Vendidos: {item.sold_quantity}</p>
            </div>
            </li>
            )
          }
        </ul>
        </div>
      </div>
    );
  }
}

export {App};