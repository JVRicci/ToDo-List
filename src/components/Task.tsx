import { Trash} from 'phosphor-react'
import {useState } from 'react'


interface taskProps{
    id: number,
}

export default function Task( {id}:taskProps) {

    const [taskName, setTaskName] = useState('')
    
    const labeltask = document.getElementById('taskNameLabel')

    const onChangeHandler = e =>{
        setTaskName(e.target.value);

    }

    function ocultLabel(){
        // labeltask?.setAttribute('color', 'blue');
    }

    return (
        <>
            <div className="grid grid-cols-2 border rounded-xl p-5 gap-5 hover:bg-zinc-600 hover:text-xl hover:font-semibold hover:duration-100   ">
                
                <label htmlFor={`taskName-${id}`} className='text-justify' id='taskNameLabel' onClick={ocultLabel}>
                {taskName? taskName : <h6>Sem Titulo</h6> }
                </label>
                
                <input type="checkbox" 
                className='  bg-gray-100 border-gray-300 rounded max-h-8'/>
                <input type="text" name={`taskName-${id}`} id={`taskName-${id}`} className="w-0 max-h-5  text-sm rounded-lg text-zinc-950  focus:w-52 focus:duration-300" value={taskName}
                onChange={onChangeHandler}
                />

            </div>

        </>
    )
}
