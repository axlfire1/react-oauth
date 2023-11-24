//STYLE SHEETS
import './register_form.css';
import { createNewEvent } from '../../functions/graphql_requests';
//COMPONENTS
import NumericInputComponent from "../numeric_input_component"
import { GreenSubmitButton } from '../green_submit_button';

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  var number: number = parseInt((document.getElementById('numeric_input') as HTMLInputElement).value);
  createNewEvent(number);
};

export const RegisterForm = (): JSX.Element => {
  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
      >
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
