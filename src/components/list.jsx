import React, { useState } from 'react';
import Popap from './popap';

function List({ todos, remove, onChange }) {
    const [clicked, setClicked] = useState(false);
    const [id, setId] = useState(0); 
    
    
    return (
        <div className='listBlock'>
            {
                todos.map((todo) => {
                    return (
                        <div key={todo.id} className='listItem'>
                            <input type="checkbox" className='listCheckbox' onChange={() => {
                                onChange(todo.id); 
                            }} />
                            {todo.validation ? (
                                <p className='checkedListValue'>
                                {todo.value}
                            </p>
                            ) : <p className='listValue'>
                                {todo.value}
                                </p>}
                            
                            <button className='removeButton' onClick={()=>{
                                setClicked(true);
                                setId(todo.id);
                            }}>X</button>
                        </div>
                    )
                })
            }
            {clicked ? (
                <Popap  
                    remove={remove} 
                    id={id} 
                    changingYes={() => {
                        remove(id);
                        setClicked(false)
                    }}
                    changingNo={() =>setClicked(false)}
                />
            ) : <></>}
        </div>
    )
}
export default List;


//remove(todo.id)
