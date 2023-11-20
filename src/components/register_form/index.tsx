import './register_form.css';
import NumericInputComponent from "../numeric_input_component"
import { GreenSubmitButton } from '../green_submit_button';

function RegisterForm(){
  return (
    <div className="container">
      <form action="/action_page.php">
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



