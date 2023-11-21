//STYLE SHEETS
import './register_form.css';
//COMPONENTS
import NumericInputComponent from "../numeric_input_component"
import { GreenSubmitButton } from '../green_submit_button';
//EVENTS
import axios from 'axios';

function registerInBackernd(number: number, eventId: number){
  
  const response = axios.post('http://localhost:3001/api/v1/posts', {
    username: number,
    content: eventId
  })
  .then(function (response) {
    alert(response);
  })
  .catch(function (error) {
    alert(error);
  });
}

function RegisterForm(){

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    var number: number = parseInt(
      (document.getElementById('numeric_input') as HTMLInputElement).value
    );
    
    registerInBackernd(number, 1)
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-100">
            <NumericInputComponent/>
          </div>
        </div>
        <div className="row">
          <div className="col-100">
            <GreenSubmitButton/>
          </div>
        </div>
      </form>
    </div>
  )
}

export {RegisterForm}
