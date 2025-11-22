import { Fragment } from 'react'
import CounterComp from './CounterComp'
import TodoComp from './TodoComp'
import FolderComp from './FolderComp'


function App() {
  return (
    <Fragment>

     {/* <CounterComp /> <hr className='text-primary'/> <br /> */}
     {/* <TodoComp /> */}
     <FolderComp />
     

    </Fragment>
  )
}

export default App
