// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect, useState } from 'react'
import './Styles/App.css'
import Task from './components/Task'
import { Plus, Trash } from 'phosphor-react'


export default function App() {


  const [taskList, setTaskList] = useState([{tarefa:""}])

  const addTask = ()=> {
    setTaskList([...taskList, {tarefa:""}])
  }


  return (
    <>
      <div className="flex h-screen w-screen  justify-center  bg-zinc-800 text-zinc-50">

        


      <div className='items-center mt-20 rounded-lg p-5 mb-10 max-w-screen-md bg-zinc-700 overflow-y-scroll'>
      <h6 className='font-extrabold mb-5'>To Do list</h6>

      <div className='grid grid-cols-2  hover:text-xl hover:font-semibold hover:duration-100 '
                      onClick={()=>addTask()}>
        
          <h6 className='mr-10'>
            Adcionar tarefa
          </h6>
          <Plus color="#fff" className='border rounded-full mt-2'/>
      </div>


      <div id='taskListDiv' className='mt-10'>
        {
          taskList.map((tarefa,i)=>(
          <div key={i} className='mt-5 '>
            
            <Task id={i} />
          
            {/* <Trash color='#fff' className='mt-2'/> */}
          </div>
          
          ))
        }
      </div>

      </div>

      </div>
    </>
  )
}



