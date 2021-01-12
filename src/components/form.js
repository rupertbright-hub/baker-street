import React, {useState} from 'react'
import {Button} from '../components';

function Form(props) {

//basic form functionality 

const [form, setForm] = useState({salutation:'', fname:'', lname:'', message:''})

function handleChange(evt) {
    const value = evt.target.value;
    setForm({
      ...form,
      [evt.target.name]: value
    });
  }

  function handleSubmit() {
    console.log(form);
    props.toggle();
  }

    return (
        <div>
        <form id='form' className='form-container'>
            <h2>Kontakt</h2>
            <label>
            <select onChange={handleChange} name='salutation' >
                <option hidden value="">Salutation</option>
                <option value='miss'>Miss</option>  
                <option value='mr'>Mr</option>  
            </select>
            </label>
            <input onChange={handleChange} name='fname' type='text' placeholder='First Name'/>
            <input onChange={handleChange}  name='lname' type='text' placeholder='Last Name'/>
            <textarea onChange={handleChange} name='message'   type='text' placeholder="Message"></textarea>.
            <div className='form-terms'>
                <div>
                    <input id="box"  className="inp-cbx" type="checkbox" />
                    <label  for="box" className="cbx">
                    <span>
                        <svg width="16px" height="16px">
                            <use href="#check"></use>
                        </svg>
                        </span>
                        </label>
                        I've read the <span>Terms & Conditions</span>  and accept them.
                    <svg className="inline-svg">
                        <symbol id="check" viewBox="0 0 12 10">
                            <polyline points="0 6 4.5 9 10.5 1"></polyline>
                        </symbol>
                    </svg>
                </div>
            </div>
        </form>
        <Button handleSubmit={handleSubmit}/>
        </div>
    )
}

export default Form
