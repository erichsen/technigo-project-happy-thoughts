import { useState } from 'react'

export const ThoughtForm = ({ setThoughts }) => {
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('https://happy-thoughts-api-4ful.onrender.com/thoughts', {
            method: 'POST',
            body: JSON.stringify({ message }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then((res) => res.json())
            .then((data) => {
                setThoughts((prevThoughts) => [data, ...prevThoughts])
                setMessage('')
            })
    }
    return (
        <form className="thought-form" onSubmit={handleSubmit}>
            <p>What's making you happy right now?</p>
            <textarea
                className="thought-input"
                placeholder="What's making you happy right now?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button className="submit-button">❤️ Send Happy Thought ❤️</button>
        </form>
    )
}