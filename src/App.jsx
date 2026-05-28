import { useState, useEffect } from 'react'
import { ThoughtCard } from './ThoughtCard'
import { ThoughtForm } from './ThoughtForm'

export const App = () => {
  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    fetch('https://happy-thoughts-api-4ful.onrender.com/thoughts')
      .then((res) => res.json())
      .then((data) => {
        setThoughts(data)
      })
  }, [])
  return (
    <div className="app">
      <ThoughtForm setThoughts={setThoughts} />
      {
        thoughts.map((thought) => (
          <ThoughtCard key={thought._id} thought={thought} />
        ))}
    </div>
  )
}
