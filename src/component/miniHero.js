import React from 'react'
import './miniHero.css'

function miniHero() {
    return (
        <div className="grid grid-cols-1  relative">
            <div className="container absolute bg-red-900 left-72 mini-bar">
            <h2 className="text-white">Trusted By</h2>
            </div>
            <div className="stroke"></div>
        </div>
    )
}

export default miniHero
