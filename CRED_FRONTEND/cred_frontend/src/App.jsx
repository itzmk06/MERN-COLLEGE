import {Axios} from 'axios';
import './App.css'
import  {useEffect, useState} from "react";
function App() {
  const [foodName,setFoodName]=useState("");
  const [days,setDays]=useState();
  const [newFoodName,setNewFoodName]=useState("");
  const [foodList,setFoodList]=useState([]);
  const fetchData=()=>{
    Axios.get('http://localhost:3000/read')
      .then((response)=>{
        setFoodList(response.data);
      })
      .catch((error)=>{
        console.log(error);
      })
  };
  useEffect(()=>{fetchData()},[foodList,newFoodName]);
  
  const addToFoodList=()=>{
    Axios.post('http://localhost:3000/insert',{
      foodName:foodName,
      days:days
    })
  }

  const updateFood=()=>{
    Axios.put('http://localhost:3000/update',{
      id:id,
      foodName:newFoodName
    })
  }

  const deleteFood=()=>{
    Axios.delete(`http://localhost:3000/delete/${id}`)
     .then((response)=>{
        console.log(response);
      })
     .catch((error)=>{
        console.log(error);
      })
  }

  return (
    <>
      <div>
        <h1>CRUD Application</h1>
        <label>Food Name</label>
        <input type="text" onChange={(e)=>setFoodName(e.target.value)}/>
        <label>Days</label>
        <input type="number" onChange={(e)=>setDays(e.target.value)}/>
        <button onClick={addToFoodList}>Add to List</button>

        <h1>Food List</h1>
        {
          foodList.map((food,index)=>{
            return(
              <div className='food' key={index}>
                <h2>{food?.foodName}</h2>
                <h3>{food?.daysSinceIAte} days</h3>
                <input type="text" placeholder='Type in new food name...' onChange={(e)=>setNewFoodName(e.target.value)}/>
                <button onClick={updateFood(food._id)}>Update</button>
                <button onClick={deleteFood(food._id)}>Delete</button>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App
