import React, {Component} from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom";

class UsunKontakt extends Component{

    state = {
        dane : JSON.parse(localStorage.getItem("KT")),
        id : this.props.match.params.id
    }

    usunKontakt = () => {

        this.state.dane.splice(this.state.id, 1);

        localStorage.setItem("KT", JSON.stringify(this.state.dane));
        window.location.href="/";

        }

        anuluj = () => {
            window.location.href="/";
            }

  render(){

    return(
      <div>
        
        <p>
        Czy usunąć kontakt?<br/>
        Imie: {this.state.dane[this.state.id].imie}<br/>
        Nazwisko: {this.state.dane[this.state.id].nazwisko}
        </p>

        <button onClick={this.usunKontakt}>TAK</button>


        <button onClick={this.anuluj}>NIE</button>

      </div>
    )

  }

}

export default UsunKontakt;