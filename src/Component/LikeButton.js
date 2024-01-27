import React, { useState } from 'react';
import '../assets/likeButton.css';

const LikeButton = () => {
  const [likeState, setLikeState] = useState('default');

  const handleLike = () => {
    setLikeState((prevState) => (prevState === 'liked' ? 'default' : 'liked'));
  };

  return (
    <button
      className={`like-button ${likeState}`}
      onClick={handleLike}
    >
      {likeState === 'liked' ? <span >&#x2764; Liked! </span>  : 'Like'}
    </button>
  );
};

export default LikeButton;
