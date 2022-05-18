import React from 'react';
import { useState } from 'react';
import deleteBtn from "./deletetodo-removebg-preview.png"
import editBtn from "./edit-removebg-preview.png"


const App=()=> {
  
  const [todo, settodo] = useState("");
  const [shortNote, setshortNote] = useState("");
  const [timmy, settimmy] = useState("");
  const [todoArray, settodoArray] = useState([]);
  const [filteredTodo, setFilteredTodo] = useState([]);

  const [bool, setbool] = useState(false)
  const saveTodo=()=>{
    let newTodo= {todo,shortNote,timmy};
    console.log(newTodo);
    let newestTodo=[...todoArray, newTodo];
    settodoArray(newestTodo);
    setFilteredTodo(newestTodo);
    settodo("");
    setshortNote("");
    settimmy("");



  }
  const deleteTodo=(index)=>{
    let loadsOfMytodo=[...todoArray]
    let deleteIndex= loadsOfMytodo.filter((todoo, i)=>(index!==i))
    settodoArray(deleteIndex)
    setFilteredTodo(deleteIndex)
  }
  const editTodo=(index)=>{
    setbool(true)
    let loadsOfMytodo=[...todoArray]
    let editTodo= loadsOfMytodo[index]
    settodo(editTodo.todo);
    setshortNote(editTodo.shortNote);
    settimmy(editTodo.timmy)
    



  }
  const doneEditing=()=>{
    let newTodo= {todo,shortNote,timmy};
    let edittedTodo=[newTodo];
    settodoArray(edittedTodo);
    setFilteredTodo(edittedTodo);
    settodo("");
    setshortNote("");
    settimmy("");
  }
  const [search, setNewSearch] = useState("")
  const handleSearchChange=(e)=>{
    setNewSearch(e.target.value)
    console.log(e.target.value);
    console.log(todoArray);
    let found = todoArray.filter(t => t.todo.toLowerCase().includes(e.target.value.toLowerCase()))
     console.log(found);
     setFilteredTodo(found)
     
     
  
  }
     


  return (
    
    <div>
      <div className="whole">
      <h2 className='text-light'>To-dos</h2>
        {/* search input */}
        <div className=' d-flex justify-content-center '>
          <input type="text"  name="" id="" onChange={handleSearchChange} value={search} className='inp m-3 form-control text-light' placeholder='Search to-dos' />

          </div>
          {/* search input ends */}
        <div className="addBtn">
           {/* <!-- Button trigger modal --> */}
            <button type="button" className=" plus btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                          +
            </button>
        </div>

        <div>
           { filteredTodo.length<1? <h1 className='text-light text-center my-4'>No todo yet</h1>:
          <div>
          {filteredTodo.map((todos, index)=>(
            <div className='d-flex justify-content-center my-2'  key={index} >
            <div className='display text-light px-5 py-3'>
            <div className='float-end'>
              <button onClick={()=>deleteTodo(index)} className="deleteBTN mx-2 btn text-light"><img src={deleteBtn} alt="delete" srcset="" className="delete" /> </button>
              <button onClick={()=>editTodo(index)} data-bs-toggle="modal" data-bs-target="#staticBackdrop" className='edittBtn btn text-light'><img className="edit" src={editBtn} alt="edit" srcset="" /> </button><br />
              <small className='time text-light float-end'>{todos.timmy}</small>
              </div>
              <span className='todos'>{todos.todo}</span><br />
              <small className='note'>{todos.shortNote}</small>
                            
            </div>
            </div>
    
            
          ))}
          </div>} 
          
         

       
{/* <!-- Modal --> */}
<div className="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog ">
    <div className=" modal-content ">
      <div className="modal-header">
        <h5 className="modal-title text-light" id="staticBackdropLabel">Add a to-do</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        
        <input type="text" className="form-control my-3" onChange={(event)=>settodo(event.target.value)} placeholder='Add a to-do item' maxLength={12} value={todo}/>
        <input type="text" className="form-control" maxLength={17} placeholder='Add a short Note' onChange={(event)=>setshortNote(event.target.value)} value={shortNote}/>
        <input type="time"  className="timmy form-control my-2" value={timmy} onChange={(event)=> settimmy(event.target.value)}/>
        

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        {bool===false? <button type="button" className="btn btn-success w-25" onClick={saveTodo} >Save</button>:  <button type="button" className="btn btn-success w-25" onClick={doneEditing}  >Done</button> }
       
      </div>
    </div>
  </div>
</div>

        


      </div>

      
      </div>
      
    </div>
  )
}

export default App
