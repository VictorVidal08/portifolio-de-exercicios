import React, { Component } from 'react';
import PersonalData from './PersonalData';
import LastJob from './LastJob';

class Form extends Component {
   /*  constructor() {
        super()
        
        handleChange({ target }) {
            const { name } = target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
          
            this.setState({
              [name]: value,
            });
          } */


        render(){
            return (
                <header>
                    <h1>Formulário exercicio 11.2</h1>
                    <main>
                        <PersonalData />
                        <LastJob />
                    </main>
                </header>
            )
        }
    }
// }

export default Form;
