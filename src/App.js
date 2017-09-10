import React, { Component } from 'react';
import logo from './logo.svg';
import InstacarroLogo from './Instacarro_logo.png'
import HowItWorksImg from './how-it-works-IC.png'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    const cars = [
      {
        price: 24500, name: "Fiat Palio", year: 2013,
        location: "Itaim Bibi. Sao Pablo.", votes: 22
      },
      {
        price: 26750, name: "Honda Fit", year: 2015,
        location: "Itaim Bibi. Sao Pablo.", votes: 20
      },
      {
        price: 14000, name: "Volkswagen Golf", year: 2002,
        location: "Itaim Bibi. Sao Pablo.", votes: 8
      }
    ]
    this.state = {
      cars
    }
  }
  render() {
    const carsView = this.state.cars.map(c => <CarViewModel price={c.price} name={c.name} location={c.location} year={c.year} votes={c.votes} /> );
    return (
      <div className="App">
        <header>
          <div className="header-left logo">
            <img src={InstacarroLogo} alt="instacarro logo" />
          </div>
          <div className="header-right">
            <ul className="menu-list" >
              <li><a>Vender meu carro</a> </li>
              <li><a>Sou Lojista</a> </li>
            </ul>
            
          </div>
        </header>
        <div className="intro">
          <div>
            <h1> Carro vendido.</h1>
            Esqueca os classificados. seu carro e leiloado <br/>
            em um instante. Nao e brincadeira e inovacao
            </div>
            <br/><br/>
            <input className="search-models" type="text" placeholder="Qual e o modelo do carro que deseja vender?" /><input className="search-models-button" type="button" value="Vender Gratis" />
        </div>
        <div className="brands">

        </div>
        <div className="cars-list">
          <div className="popular-cars">
            <h4>Carros populares vendidos perto de voce</h4>
            <div className="list">
              {carsView}
            </div>
          </div>
          <div className="popular-models">
          <h4>Modelos de carros mais vendidos</h4>
          <div className="list" >
            {carsView}
          </div>
          </div>
        </div>
        <div className="how-it-works">
          <h1 className="heading">Como funciona InstaCarro</h1>
          <div className="container">
          <div className="image">
            <img src={HowItWorksImg} alt="how it works image" />
          </div>
          <div className="details" >
              <h3>1. Quote your car free</h3>
              <p>
                First answer a few quick questions about your car and schedule and inspection at one of our locations or we go wherever you are.
              </p>
              <h3>2. Free professional inspection and auction</h3>
              <p>
               Our mechanics evaluate your cars condition and send it to our platform where more than 1.500 carefully selected dealers compete for your car.
              </p>
              <h3>3. Inmediate payment</h3>
              <p>
                If you agree with the offer, we proceed with payment right away!
              </p>
          </div>
        </div>
        </div>
        <div className="onde-estamos">
          <h1>Onde estamos</h1>
          <div className="container">
            <div>
              <p>
                <strong> Itaim Bibi</strong> <br/>
                <span>
                R. Dr. Alceu de Campos Rodrigues, 486
                Itaim Bibi, Sao Pablo - Sp, Brazil.
                </span>
              </p>
              <p>
                <strong> Santana</strong> <br/>
                <span>
                Av.Joaquina Ramalho, 600 - Santana
                Sao Pablo - Sp, Brazil.
                </span>
              </p>
              <p>
                <strong> Shopping Morumbi Town</strong> <br/>
                <span>
                Shopping Morumbi Town - Av. Giovanni
                Gronchi, 5930 - Vila Andrade 
                (Estacionamiento, Setor A). - Sp, Brazil.
                </span>
              </p>
              <p>
                <strong> Unidas Semi-Novos (Osasco)</strong> <br/>
                <span>
                Dentro da Unidas Seminovos - Av. dos
                Autonomistas, 3299 - Centro, Osasco
                </span>
              </p>
              <p>
                <span>
                <strong> Rio de Janeiro - Casa & Gourmet Shopping (Botafogo)</strong> <br/>
                Casa e Gourmet Shopping - R. General
                Severiano, 97, Botafogo, Rio de Janeiro, RJ
                </span>
              </p>
            </div>
            <div >
            <p>
                <strong> Rio de Janeiro - Norte Shopping, Rio de Janeiro</strong> <br/>
                <span>
                Norte Shopping - Estacionamento G1 - Setor E
                - Av. Dom Helder Camara,5474 - Gacham - 
                bi, Rio de Janeiro - RJ, 20751-002
                </span>
              </p>
              <p>
                <strong> Shopping Granja Vianna</strong> <br/>
                <span>
                Estacionamento do Campinas Shopping, piso
                G3 (ao lado do Vallet) - Av. Piracema, 669 - 
                Tambore, Barueri (Estacionamento, setor G3)
                </span>
              </p>
              <p>
                <strong> Shopping Tambore</strong> <br/>
                <span>
                Estacionamento do Shopping Tampore, piso
                G3 (ao lado do Vallet) - Av. Piracema, 669< br/>
                Tampore, Barueri (Estacionamento, setor G3)
                </span>
              </p>
              <p>
                <strong> Campinas Shopping</strong> <br/>
                <span>
                Estacionamento do Campinas Shopping, piso
                G1 - Rua Jacy Teixeira de Camargo, 940, Campinas, SP
                </span>
              </p>
            </div>
          </div>
        </div>
        <footer></footer>
      </div>
    );
  }
}

class CarViewModel extends React.Component{
  render(){
    const {name, price, year, location, votes} = this.props;
    return(<div className="car-info">
              <img width="170" height="180"  />
              <div>
              <strong>R${price}</strong> {name} {year}, {location}. <br/>
              {votes} votes               
              </div>     
    </div>)
  }
}
export default App;
