import React,{useState,useEffect} from 'react'
import axios from 'axios'
import  './App.css'
import Posts from './Components/Posts';
import Pagination from './Components/Pagination';
import './Styles.css'
import { error } from 'jquery';

const App=()=> {
  const[posts,setPosts]=useState([]);
  const[loading,setLoading]=useState(false);
  const[currentPage,setCurrentPage]=useState(1);
  const[postsPerPage]=useState(10);

  useEffect(()=>{
    setLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
      setPosts(res.data)
      setLoading(false)
    })
    .catch(
      error =>{
        console.log(error)
      })
  },[])
  
  //Get Current posts

  const indexOfLastPost= currentPage * postsPerPage
  const indexOfFirstPost= indexOfLastPost - postsPerPage
  const currentPosts= posts.slice(indexOfFirstPost,indexOfLastPost)
 
  //Change page

  const paginate=(pageNumber)=>setCurrentPage(pageNumber)

  return (
    <div>
    <div className='container mt-g carding'>
      <h1 className=' mb-3' style={{color:'white'}}>My Blog</h1>
      
      <Posts posts={currentPosts} loading={loading}/>

      <Pagination 
      postsPerPage={postsPerPage} 
      totalPosts={posts.length} 
      paginate={paginate}/>
   
    </div>
    </div>
  );
}

export default App;
