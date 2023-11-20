//STYLE SHEETS
import './register_form.css';
//COMPONENTS
import NumericInputComponent from "../numeric_input_component"
import { GreenSubmitButton } from '../green_submit_button';
//EVENTS
import { handleButtonClick } from '../../events/event_handler';

function RegisterForm(){
  return (
    <div className="container">
      <form onSubmit={handleButtonClick}>
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



