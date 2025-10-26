import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import leftFlower from '../assets/left.png';
import rightFlower from '../assets/right.png';

const Intro = () => {
  const navigate = useNavigate();

  const handleTouch = () => navigate('/password');

  return (
    <div
      className="fade"
      onClick={handleTouch}
      onTouchStart={handleTouch}
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#faf7e8',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >

      <img
        src={leftFlower}
        alt="left flowers"
        style={{
            position: 'absolute',
            top : '10%',
            left: '-10%',
            width: '45%',
            maxWidth: '50vw',
            opacity: 0.9,
            zIndex: -1,
        }}
        />

        <img
        src={rightFlower}
        alt="right flowers"
        style={{
            position: 'absolute',
            top : '10%',
            right: '-10%',
            width: '45%',
            maxWidth: '50vw',
            opacity: 0.9,
            zIndex: -1,
        }}
        />

      <h1 style={{ fontSize: '7vw', color: '#333', marginBottom: '10px' }}>
        환영합니다
      </h1>

      <p
        className="floating-text"
        style={{
          fontSize: '4vw',
          color: '#666',
          animation: 'floatUpDown 3s ease-in-out infinite',
        }}
      >
        화면을 터치하시면 다음 화면으로 넘어갑니다.
      </p>
    </div>
  );
};

export default Intro;
