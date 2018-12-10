import React, { Component } from "react";
import * as $ from "axios";

class Searchpage extends Component {

    state = {
        providers: [],
        providersFiltered: []
    }

    getProviders = event => {
        $.get(`api/users/`).then(results => {
          console.log(results);
          this.setState({ providers: results.data });
        });
      };

      handleClick = (event) => {
        event.preventDefault();
        const providersFiltered = this.state.providers.filter(data => data.categories.includes(this.state.input))
        this.setState({ results: providersFiltered });
      }

      render() {
          return(
              <div>

                 Search Providers 

              </div>
          )
      }
}

export default Searchpage