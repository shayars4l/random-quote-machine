import React, { useState } from 'react'
import './App.css'


function App() {
  const [val,setval]=useState("Change your thoughts and you change your world.")
  const [author,setauthor]=useState("Norman Vincent Peale")
  const[qouteArr,setqouteArr]=useState(null)
  
  const colorlist=["#9AA0A8","#EBD494","#9AD2CB","#E0D3DE","#B3B492","#97DFFC","#92B6B1","#E8DDB5","#D8D4D5","#E2E2E2","#FDC5F5","#B388EB","#72DDF7","#EF9CDA","#FECEF1","#DBD3D8","#9FA0C3","#BCF8EC","#A0D2DB","#BB9BB0","#F1E3E4","#9BBDF9","#C4E0F9","#CBA135","#DBFEB8","#93A3B1"]
  const colorchng=()=>{
return colorlist[Math.floor(Math.random()*colorlist.length)]
  }
  
  
  
  

  const url="https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
  
const getApi = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const random=Math.floor(Math.random()*102)
    
    setval(data.quotes[random].quote)
    setauthor(data.quotes[random].author)
    document.getElementById("quote-box").style.backgroundColor=colorchng()
    document.getElementById("btn").style.backgroundColor=colorchng()

    
   


   


    
  


    
     
  } catch (error) {
    console.error("Error fetching data:", error);
  }  
 
  
};








  
  return (
    <>
      <div id="quote-box">
        <div id="box">
        <p id='text'>"{val}</p>
        <p id='author'>--{author}</p>
        </div>
        <footer>
        <div id='anchortang'>
        <a id='tweet-quote' href="twitter.com/intent/tweet">X Tweet</a>
        <a href=''>X</a>
         </div>
         <button id="new-quote" onClick={getApi} >New Quote</button>
         </footer>
        


      </div>
       
    </>
  )
}


export default App
