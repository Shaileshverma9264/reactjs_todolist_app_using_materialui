import React, { useState } from "react";
import ToDoList from "./ToDoList";
import AddIcon from '@material-ui/icons/Add';


const App = ()=>{
    const[inputList,setInputList] = useState("");
    const[Items, setItems] = useState([]);

    const itemEvent = (event)=>{
        setInputList(event.target.value);
        
    };
    const listOfItems = ()=>{

        setItems((oldItems)=> {
            return[...oldItems,inputList];
        });
        setInputList("");
    };
    const deleteItems = (id) =>{
          console.log("deleted");
          setItems((oldItems)=>{
              return oldItems.filter((arrElem,index)=>{
                  return index!== id;
              })
          })
    }
   
    return(
        <>
        <div className = "main_div">
         <div className = "center_div">
         <br/>
         <h1>ToDo List</h1>
         <br/>
         <input type = "text" placeholder = "Add a item" value = {inputList} onChange={itemEvent}/>

         <button onClick={listOfItems}><AddIcon/></button>
         <ol>
             {/* <li>{inputList}</li> */}
            { Items.map((itemval,index) =>{
               return <ToDoList
               key = {index}
               id={index}
               onSelect={deleteItems}
                    text = {itemval} 
                />
             })};
         </ol>
         </div>
        </div>
    
       
       </>
    );
};
export default App;