import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Feed = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
      .then(response => {
        setPosts(response.data.posts)
      })
      .catch(error => {
        console.error('Error fetching posts:', error)
      })
  }, [])

  return (
    <section className="feed">

      {posts.map((post) => (

        <div key={post.id} className="post">

          <img
            src={post.image}
            alt={post.caption}
            onError={(e)=>{
              e.target.src="https://via.placeholder.com/400x300?text=No+Image"
            }}
          />

          <div className="post-content">
            <p>{post.caption}</p>
          </div>

        </div>

      ))}

    </section>
  )
}

export default Feed