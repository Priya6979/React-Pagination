import React from 'react'

const Posts = ({posts , loading}) => {
    if(loading){
        return <h2>Loading...</h2>;
    }
  return (
  
  <ul className='lists-group mb-4'>
    {
        posts.map(posts=>(
            <li key={posts.id} className='lists-group-item'>{posts.title}</li>
        ))
    }
  </ul>
  );
}

export default Posts;
