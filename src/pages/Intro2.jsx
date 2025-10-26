import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import leftFlower from '../assets/left.png';
import rightFlower from '../assets/right.png';

const Intro2 = () => {
  const navigate = useNavigate();

  const handleTouch = () => navigate('/password2');

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
    textAlign: 'center',
    overflow: 'hidden',
    background: 'radial-gradient(circle, #ffffff 60%, #409bcb 80%, #004aad 100%)',
  }}
>


    <h1 style={{ fontSize: '7vw', marginBottom: '10px', color: '#000', lineHeight: 1.2 }}>
      <span style={{ color: '#003478' }}>도병철 경정</span>님의 <br/>
      <span style={{ color: '#004aad' }}>퇴직</span>을 축하합니다
    </h1>


      <p
        className="floating-text"
        style={{
          fontSize: '3vw',
          color: '#333',
          animation: 'floatUpDown 3s ease-in-out infinite',
        }}
      >
        화면을 터치하시면 다음 화면으로 넘어갑니다.
      </p>
    </div>
  );
};

export default Intro2;
