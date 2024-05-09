import { Outlet } from 'react-router-dom'
import './styles.css'
import Navbar from './Components/Navbar'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [posts, setPosts] = useState([])

  const getPosts = async() => {

    try {
      const response = await axios.get("http://localhost:8080/listar");

      const data = response.data;

      setPosts(data)
    }catch (error){
      console.log(error)
    }
  };

  useEffect(() => {
    getPosts();
  },[]);

  return (
    <>
    <Navbar/>
    <div className="container">
      <Outlet/>
    </div>
    </>
  )
}

export default App
