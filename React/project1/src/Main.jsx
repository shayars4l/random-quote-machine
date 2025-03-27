import React, { useState } from "react";
export default function Main() {
    const [recipeShown,setRecipeshown]=React.useState("false")










    const [val,setval]=React.useState([]);

    const submit=(formData)=>{
        const newvalue=formData.get("input")
        setval(prevval=>[...prevval,newvalue])

        


        

        
        
        


    }
    const[v,setv]=React.useState(0)
    function counter(){
       if("+"){
        setv(pres=>v+1)
       }
       
    }
    function counter1(){
        if("-"){
            setv(pres=>v-1)
           }
    }


    
    
    

   
        
      



    return (
        <>
            <main>
                <form action={submit}>
                    <input
                        name="input"
                        aria-label="Add Ingredient"
                        type="text"
                        placeholder="e.g oregano"
                        
                        
                    />
                    <button >+ Add Ingredient</button>
                </form>
            </main>
            {val.length? <fieldset>
                <legend>Ingredients Avalaible</legend>
            <ul>{val.map((v,index)=><li key={index}>{v}</li>)}</ul>
            </fieldset>:null}
            {val.length >2?<div className="get-recipe-container">
                <div>
                    <h3>Ready for a  recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                    <button>Get a recipe</button>
                </div>

            </div>:null}

            <button onClick={counter} name="+">+</button>
            <h1>{v}</h1>
            <button onClick={counter1} name="-">-</button>
        </>
    );
    }