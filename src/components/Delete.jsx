import React from 'react';

function Delete({ todos, setTodos })  {
    function removeSelected() {
        setTodos(
            todos.filter((rem)=>!rem.validation)
        )
    }
    return (
        <div>
            <button className='removeChecked' onClick={() => {
                removeSelected();
            }}>Remove Selected</button>
        </div>
    );
}

export default Delete;








