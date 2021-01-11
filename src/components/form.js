import React from 'react'


function form() {
    return (
        <div className='form-container'>
            <h2>Kontakt</h2>
            <select id="country" name="country">
                <option  value="" disabled selected hidden>Salutation</option>
                <option value="miss">Miss</option>  
            </select>
            <input id='fname' type='text' placeholder='First Name'/>
            <input id='lname' type='text' placeholder='Last Name'/>
            <textarea type='text' placeholder="Message"></textarea>.
            <div className='form-terms'>
                <div>
                    <input class="inp-cbx" id="hello" type="checkbox" />
                    <label class="cbx" for="hello">
                    <span>
                        <svg width="30px" height="30px">
                            <use href="#check"></use>
                        </svg>
                        </span>
                        </label>
                        I've read the <span>Terms & Conditions</span>  and accept them.
                    <svg class="inline-svg">
                        <symbol id="check" viewbox="0 0 12 10">
                            <polyline points="0 6 4.5 9 10.5 1"></polyline>
                        </symbol>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default form
