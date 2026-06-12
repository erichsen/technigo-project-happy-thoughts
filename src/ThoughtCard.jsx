import { formatDistanceToNow } from 'date-fns'
import { useState } from 'react'

export const ThoughtCard = ({ thought }) => {
    const [hearts, setHearts] = useState(thought.hearts)
    const handleLike = () => {
        fetch(`https://happy-thoughts-api-lni3.onrender.com/thoughts/${thought._id}/like`, {
            method: 'POST',
        })
            .then((res) => res.json())
            .then((updatedThought) => {
                setHearts(updatedThought.hearts)
            })
    }
    return (
        <div className="thought-card">
            <p>{thought.message}</p>
            <div className="thought-card-footer">
                <button className={`heart-button ${hearts > 0 ? 'heart-button--liked' : ''}`} onClick={handleLike}>
                    ❤️
                </button>
                <span>x {hearts}</span>
                <span className="timestamp">{formatDistanceToNow(new Date(thought.createdAt))} ago</span>
            </div>
        </div>
    )
}