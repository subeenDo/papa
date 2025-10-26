import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Password2 = () => {
  const [input, setInput] = useState('');
  const [shake, setShake] = useState(false);
  const [popIndex, setPopIndex] = useState(null);
  const navigate = useNavigate();
  const correctPassword = '251031';

  const handleClick = (num) => {
    const newInput = input + num;
    setInput(newInput);
    setPopIndex(newInput.length - 1);
    setTimeout(() => setPopIndex(null), 200);

    if (newInput === correctPassword) {
      setTimeout(() => navigate('/main2'), 400);
    } else if (newInput.length >= correctPassword.length) {
      setShake(true);
      setTimeout(() => {
        setShake(false);
        setInput('');
      }, 600);
    }
  };

  const handleBack = () => setInput((prev) => prev.slice(0, -1));
  const handleClear = () => setInput('');

  const numBtnStyle = {
    width: '110px',
    height: '110px',
    backgroundColor: '#c7def8',
    border: '2px solid #7ea6e0',
    borderRadius: '12px',
    fontSize: '30px',
    fontWeight: '700',
    color: '#004aad',
    boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.15)',
    cursor: 'pointer',
    transition: 'transform 0.1s ease',
  };

  const funcBtnStyle = {
    ...numBtnStyle,
    backgroundColor: '#7ea6e0',
    color: '#fff',
  };

  const resetBtnStyle = {
    ...numBtnStyle,
    backgroundColor: '#004aad',
    color: '#fff',
  };

  return (
    <div
      className="fade"
      style={{
        height: '100vh',
        display: 'flex',
        backgroundColor: '#fff',
      }}
    >
      {/* 영역 1: 이미지 */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={require('../assets/symbol.png')}
          alt="페이지 이미지"
          style={{
            width: '50%',
            height: 'auto',
          }}
        />
      </div>

      {/* 영역 2: 비밀번호 입력 다이얼로그 */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#7ea6e0',
          padding: '40px', // 충분히 넓게
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          minWidth: '400px', // 너무 좁아지지 않게
        }}
      >
        <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '40px' }}>
          비밀번호를 입력하세요
        </h2>

        {/* 입력 점 */}
        <div
          className={`password-display ${shake ? 'shake' : ''}`}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={i === popIndex ? 'dot-pop' : ''}
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: i < input.length ? '#004aad' : '#e0f0ff',
                transition: 'background-color 0.2s ease',
              }}
            ></div>
          ))}
        </div>

        {/* 숫자 키패드 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 110px)',
            gap: '18px',
            justifyContent: 'center',
            backgroundColor: '#e6f0fb',
            padding: '35px 25px',
            borderRadius: '12px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              className="button-touch"
              onClick={() => handleClick(num)}
              onTouchStart={() => handleClick(num)}
              style={numBtnStyle}
            >
              {num}
            </button>
          ))}

          <button className="button-touch" onClick={handleBack} style={funcBtnStyle}>
            ←
          </button>
          <button className="button-touch" onClick={() => handleClick(0)} style={numBtnStyle}>
            0
          </button>
          <button className="button-touch" onClick={handleClear} style={resetBtnStyle}>
            정정
          </button>
        </div>
      </div>
    </div>
  );
};

export default Password2;
