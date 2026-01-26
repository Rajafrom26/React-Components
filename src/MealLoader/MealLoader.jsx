import React from 'react'

const MealLoader = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-white">
      <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#ffc107" strokeWidth="2" strokeLinecap="round">
        {/* Pot Body */}
        <path d="M18 10H6c-1.1 0-2 .9-2 2s.9 2 2 2h12c1.1 0 2-.9 2-2s-.9-2-2-2zM12 14c-3.31 0-6-2.69-6-6h12c0 3.31-2.69 6-6 6z" />
        
        {/* The 3 Steam Lines - Now using CSS classes for the movement */}
        <path d="M9 6V3" className="steam-line steam-one" />
        <path d="M12 6V2" className="steam-line steam-two" />
        <path d="M15 6V3" className="steam-line steam-three" />
      </svg>
      <h3 className="text-warning mt-3">Searching Recipes...</h3>
    </div>
  )
}

export default MealLoader
