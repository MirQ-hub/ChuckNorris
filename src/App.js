import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const URL = "https://api.chucknorris.io/jokes/random"


function App() {

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  useEffect(()=>{
    async function getJoke(){
      try{
        const response = await fetch(URL);
        if (response.ok) {
          const json = await response.json();
          const id = json.id;
          const joke = json.value;
          setTitle("Chuck makes my day")
          setText(joke)
        }
        else{
          alert("Sorry, no Chuck Norris today!")
        }
      }
        catch(err){
          alert(err)
        }
        }
        getJoke()
      },[])
    

  return (
    <>
    <div class="container-mt3" style={{margin: 50}}>
      <h3>Knock knock..</h3>
      <p>Here is Chuck Norris!</p>
   

      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal"><i class="bi bi-exclamation-octagon-fill"></i> Open joke <i class="bi bi-exclamation-octagon-fill"></i></button>
    </div>
    <div class="modal" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">
          
    <div class="modal-header">
      <h3 class="modal-title">Tadaa!</h3>
      <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div class="modal-body">
        <p>{text}</p>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>  
      </div>


      </div>
      </div>
      </div>
      
      
      </>






  );
}

export default App;
