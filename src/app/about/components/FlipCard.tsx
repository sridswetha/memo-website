'use client';
import React, { useState } from 'react';

const FlipCard = ({ name, position, bio, major, imageUrl, pronouns, hobbies, className = "" }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className={`relative ${className}`} 
      style={{ perspective: '1000px', width: '400px', height: '400px' }} // unified height
    >
      <div
        className="relative w-full h-full cursor-pointer transition-transform duration-700"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
        onClick={handleFlip}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 bg-[#0E1E3D] rounded-lg shadow-lg flex flex-col items-center p-4"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Name on top */}
          <h3 className="text-white text-xl font-semibold text-center mb-2 tracking-wider" style={{ fontFamily: 'UpheavalTT, Arial, sans-serif', fontSize: '25px' }}>
            {position}
          </h3>

          {/* Image */}
          <div className="w-32 h-32 bg-white rounded-full mb-4 overflow-hidden flex-shrink-0">
            {imageUrl ? (
              <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Photo</span>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col items-center text-center space-y-1 flex-grow">
            <p className="text-white font-medium font-montserrat font-semibold">{name}</p>
            {pronouns && <p className="text-white text-sm font-montserrat">{pronouns}</p>}
            {major && <p className="text-white text-sm font-montserrat ">{major}</p>}
            {hobbies && <p className="text-white text-sm break-words text-center font-montserrat">{hobbies}</p>}

          </div>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 bg-[#0E1E3D] rounded-lg p-4 shadow-lg flex items-center justify-center"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <p className="text-white text-sm leading-relaxed text-center overflow-auto max-h-full font-montserrat">
            {bio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
