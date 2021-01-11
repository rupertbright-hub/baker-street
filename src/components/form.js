import React from 'react'



function form() {
    return (
        <div className='form-container'>
        <h2>Kontakt</h2>
        <select id="country" name="country">
        <option  value="" disabled selected hidden>Salutation</option>
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
        </select>
        <input type='text' placeholder='First Name'/>
        <input type='text' placeholder='Last Name'/>
        <textarea type='text' placeholder="Message"></textarea>.
        <div className='form-terms'>
        <input type='checkbox'/><label>I've read the <span>Terms & Conditions</span>  and accept them.</label>
        </div>
        </div>
    )
}

export default form
