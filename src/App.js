import React, {Component} from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"; 
import DodajKontakt from "./components/DodajKontakt";
import ListaKontaktow from "./components/ListaKontaktow";
import EdytujKontakt from "./components/EdytujKontakt";
import UsunKontakt from "./components/UsunKontakt";

class App extends Component{
  render(){
    return(
      <div>

      <h1>Ksiązka telefoniczna</h1>

      <ul>
          <li>
              <a href="/">Lista kontaktow</a>
          </li>
          <li>
              <a href="/dodaj">Dodaj nowy kontakt</a>
          </li>
      </ul>

      <BrowserRouter>
      
        <Switch>

          <Route exact path="/" component={ListaKontaktow} />
          <Route path="/dodaj" component={DodajKontakt} />
          <Route path="/edytuj/:id" component={EdytujKontakt} />
          <Route path="/usun/:id" component={UsunKontakt} />

        </Switch>
      
      </BrowserRouter>

      </div>
    )
  }
}

export default App;