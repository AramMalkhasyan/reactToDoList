import React from 'react';
import { useState } from 'react';


function Input({ addItem, todos }) {
    const[value, setValue] = useState("");
    const submit = (ev) => {
        ev.preventDefault();
        if (value.length > 20 || value.length == 0) {
            return
        }
        addItem(value);
        setValue("")
    }
    return (
        <div>
            {value.length > 20 ? (
                <p className='falsePar'>your text is more then 30 characters</p>
            ) : <p className='par'>Task</p>}
            <form onSubmit={submit} >
                {value.length > 20 ? (
                    <input className='falseInput' value={value} onChange={ev => setValue(ev.target.value)}/>
                ) : <input className='input' value={value} onChange={ev => setValue(ev.target.value)}/>}
                {value.length > 20 ? (
                    <button className='FalseInputButton'  type='submit'>Add</button>
                ) : <button className='inputButton'  type='submit'>Add</button>}    
            </form>
        </div>
    )
}

export default Input;







