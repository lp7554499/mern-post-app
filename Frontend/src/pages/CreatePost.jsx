import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Feed from './Feed'


const CreatePost = () => {
    
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        await axios.post('http://localhost:3000/create-post', formData)
        .then(response => {
            navigate("/feed")
        })
        .catch(error => {
            console.error('Error creating post:', error)
            alert('Failed to create post. Please try again.')
        })

    }

  return (
    <section className="create-post-section">
      <h2>Create Post</h2>

      <form onSubmit={handleSubmit} >
        <input type="file" name='image' accept='image/*'/><br />
        <input type="text" name='caption' placeholder='Enter caption' required /><br />
        <button type="submit">Create Post</button>
      </form>
    </section>
  )
}

export default CreatePost