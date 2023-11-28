import React from 'react'

export default function Avatar({ avatar_url }) {
    return (
        <figure className='w-24 h-24 overflow-hidden rounded-full mx-auto'>
            <img
                src={avatar_url}
                className='w-full h-full object-cover object-top'
            />
        </figure>
    )
}
