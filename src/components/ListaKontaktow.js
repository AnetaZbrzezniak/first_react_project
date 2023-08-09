import React, {Component} from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom";

class ListaKontaktow extends Component{

    state = {
        dane : JSON.parse(localStorage.getItem("KT"))
    }

  render(){

    return(
      <div>
        
        <table border="1">
            <tr>
                <th>Imię</th>
                <th>Nazwisko</th>
                <th>Email</th>
                <th>Telefon</th>
            </tr>

            {this.state.dane.map((value, index) => 
            
                <tr>
                    <td>{value.imie}</td>
                    <td>{value.nazwisko}</td>
                    <td>{value.email}</td>
                    <td>{value.telefon}</td>
                    <td>
                        <a href={`/edytuj/${index}`}>edytuj</a><br/>
                        <a href={`/usun/${index}`}>usun</a>
                    </td>
                </tr>
            )}

        </table>

      </div>
    )

  }

}

export default ListaKontaktow;