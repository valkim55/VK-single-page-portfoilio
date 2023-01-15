
import { validateEmail } from '../utils/helpers'
import {useState} from 'react'

const Contact = () => {

    /* using the state for contact form to set the default value to user's input.
     assigning empty string will also take care of emptying the input fields after each submission - DOESN'T EMPTY */
    const [contactFormState, setContactFormState] = useState({name: '', email: '', message: ''});

    // add error message as a state (empty string by default), to be able to update it depending on user's input
    const [errorMessage, setErrorMessage] = useState('')

    //const {name, email, message} = contactFormState;


    function checkErrors(e) {
         /* use imported helper function to validate email input */
         if(e.target.name === 'email') {
            const emailValid = validateEmail(e.target.value);
            //console.log(emailValid)

            if(!emailValid) {
                setErrorMessage('Invalid email. Please try again');
            } else {
                setErrorMessage('');
            }
        
        } else {
            //setErrorMessage(`all fields required`)
            
            // if(!e.target.value.length) {
            //     setErrorMessage(`${e.target.name} is required`);
            // } else {
            //     setErrorMessage('');
            // }
            if(!e.target.value.length ) {
                setErrorMessage(`${e.target.name} is required`);
        
            } else {
                setErrorMessage('');
                
            }
        }
    }


    // this function handles the input elements of the form
    function fillOutForm(e) {

            // by using 'name' attribute each input field's event target name will capture user's value and update it as a new contact form state        
        setContactFormState( {...contactFormState, [e.target.name]: e.target.value});
        
          
    };

    /* this function will take care of submitting the form when the button is clicked */
    function submitForm(e) {
        e.preventDefault();
        console.log(contactFormState);



        setContactFormState({name: '', email: '', message: ''});
        
        
        // if(!errorMessage) {
        //     setContactFormState({[e.target.name]: e.target.value});
        //     console.log('form', contactFormState)
        // }
    };


    return (
        <section id='contact'>
            <h1>reach out</h1>
            <p>if you're hiring or would like to collaborate please refer to the form below</p>
            <form id='' onSubmit={submitForm}>
                <div>
                    <label htmlFor='name'>name:</label>
                    <input type='text' name='name' value={contactFormState.name} onBlur={checkErrors} onChange={fillOutForm} />
                </div>

                <div>
                    <label htmlFor='email'>email:</label>
                    <input type='email' name='email' value={contactFormState.email} onBlur={checkErrors} onChange={fillOutForm} />
                </div>

                <div>
                    <label htmlFor='message'>message:</label>
                    <textarea name='message' value={contactFormState.message} onBlur={checkErrors} onChange={fillOutForm} />
                </div>

                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}

                <button type='submit'>submit</button>
            </form>
            
        </section>
    )
}

export default Contact