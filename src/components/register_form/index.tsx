//STYLE SHEETS
import './register_form.css';
//COMPONENTS
import NumericInputComponent from "../numeric_input_component"
import { GreenSubmitButton } from '../green_submit_button';

function registerInBackernd(number: number, eventId: number){
    
  const graphqlEndpoint = 'http://127.0.0.1:3001/graphql';

  // GraphQL query or mutation
  const graphqlQuery = `
    mutation CreateEvent {
      createEvent(
        input: {
          userId: 1,
          title: "shit fucker",
          eventNumber: 5,
          status: "on_hold",
          datetime: "2022-10-26T17:30:00.000-04:00",
          eventType: "athletic_race",
        }
      ) {
          errors
          clientMutationId
      }
    }
  `;
    
  // Headers for the POST request
  const headers = {
    'Content-Type': 'application/json',
  };
    
  // Data to be sent in the request body
  const data = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ query: graphqlQuery }),
  };
    
  // Make the POST request using fetch
  fetch(graphqlEndpoint, data)
    .then(response => response.json())
    .then(result => {
      // Handle the GraphQL response here
        console.log(result);
    })
    .catch(error => {
      // Handle errors here
      console.error('Error:', error);
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
