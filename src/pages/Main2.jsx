import React from 'react';
import '../App.css';

const Main2 = () => {
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
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
    <img
      src={require('../assets/text2.png')}
      alt="페이지 이미지"
      style={{
        width: '100vw',
        height: 'auto',
      }}
    />
      <p 
        className="floating-text" 
        style={{ 
            fontSize: '2vw', 
            color: '#333', 
            fontWeight: '600' , 
            animation: 'floatUpDown 3s ease-in-out infinite',
        }}>
        아래에 카드를 삽입해주세요
      </p>
    </div>
  );
};

export default Main2;
