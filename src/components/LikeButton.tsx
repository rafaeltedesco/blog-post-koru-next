'use client'

import { useState } from 'react'

export default function LikeButton() {
  const [likes, setLikes] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1)
      setIsLiked(false)
    } else {
      setLikes(likes + 1)
      setIsLiked(true)
    }
  }

  return (
    <button
      onClick={handleLike}
      className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 ${
        isLiked
          ? 'bg-red-100 text-red-700 border border-red-200'
          : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
      }`}
    >
      <span className={`text-lg transition-transform duration-200 ${isLiked ? 'animate-pulse' : ''}`}>
        {isLiked ? '❤️' : '🤍'}
      </span>
      <span className="text-sm">
        {likes} {likes === 1 ? 'curtida' : 'curtidas'}
      </span>
    </button>
  )
}
