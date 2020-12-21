import './App.css';
import React, { useState, useEffect } from 'react';
import ListItem from './component/ListItems.js';

function App() {

   const [suggestionList,setSuggestionList] = useState(["hello this is first","second one is out know","here is the third one"]);
  
   const [outputList,setoutputList] = useState(["hello this is output","output one is out know","here is the output one"]);
   

   useEffect(()=>{},[suggestionList,outputList]);
    

  const moveItemHandler = (index) => {
    setoutputList([...outputList , suggestionList[index]])
    suggestionList.splice(index,1);

  }

  const editTextChangeHandler = (event,index) => {
    suggestionList[index]  = event.target.value;
    setSuggestionList([...suggestionList]);
  }
  
  const editTextChangeOutputListHandler = (event,index) => {
    outputList[index]  = event.target.value;
    setoutputList([...outputList]);
  }

  let suggestionListTemplate = null;
  let outputListTemplate = null;

  suggestionListTemplate = (
    <div>
    {suggestionList.map((value,index)=> {
       return <ListItem  id={index} itemValue =  {value} click = {()=>moveItemHandler(index)} change = {(event)=>editTextChangeHandler(event,index)} /> }
     )}
    </div>
    );

    outputListTemplate = (
        <div>
        {outputList.map((value,index)=> {
          return <ListItem  id={index} itemValue =  {value} click = {null}  change = {(event)=>editTextChangeOutputListHandler(event,index)} /> }
        )}
        </div>
      );
 
  

  return (
    <div className="App">

        <div> 
            <h1>Suggestion Box </h1>
            <div className="suggestionBox">  {suggestionListTemplate}   </div>
                    
            <h1>Output Box </h1>
              
            <div className="suggestionBox"> {outputListTemplate} </div>

        </div>           
   
     </div>
         
                  
  );
}

export default App;
