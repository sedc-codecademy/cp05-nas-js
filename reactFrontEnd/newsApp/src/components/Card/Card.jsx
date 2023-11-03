import React from 'react'

function Card({ title, id }) {
    return (
        <div>
            <h1>{title}</h1>
            <h1> {id}</h1>
        </div>
    )
}

export default Card