import './green_submit_button.css'
import { useSubmitContext } from "../form_context/index";

const GreenSubmitButton = (): JSX.Element => {
  const buttonDisabled = useSubmitContext();

  return (
    <input
      disabled={buttonDisabled}
      id="greenButton"
      type="submit"
      value="Registrar"
      className='numeric_input'
    />
  )
}

export {GreenSubmitButton}
