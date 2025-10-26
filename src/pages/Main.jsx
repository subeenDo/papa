import React from 'react';
import '../App.css';
import leftFlower from '../assets/left.png';
import rightFlower from '../assets/right.png';

const Main = () => {
  return (
    <div
      className="fade"
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

      <h1 style={{ fontSize: '7vw', marginBottom: '10px', color: '#333' }}>
        도병철 경정님의 <br/> 퇴직을 축하합니다
      </h1>
      <p 
        className="floating-text" 
        style={{ 
            fontSize: '4vw', 
            color: '#4f7d5c', 
            fontWeight: '600' , 
            animation: 'floatUpDown 3s ease-in-out infinite',
        }}>
        아래에 카드를 삽입해주세요
      </p>
    </div>
  );
};

export default Main;
