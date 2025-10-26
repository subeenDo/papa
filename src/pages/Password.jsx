import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Password = () => {
  const [input, setInput] = useState('');
  const [shake, setShake] = useState(false);
  const [popIndex, setPopIndex] = useState(null);
  const navigate = useNavigate();
  const correctPassword = '251031';

  const handleClick = (num) => {
    const newInput = input + num;
    setInput(newInput);
    setPopIndex(newInput.length - 1); // dot pop animation
    setTimeout(() => setPopIndex(null), 200);

    if (newInput === correctPassword) {
      setTimeout(() => navigate('/main'), 400);
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
    backgroundColor: '#e4dec2', // 숫자 버튼
    border: '1px solid #aba482',
    borderRadius: '12px',
    fontSize: '30px',
    fontWeight: '700',
    color: '#7c7241',
    boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.15)',
    cursor: 'pointer',
    transition: 'transform 0.1s ease',
  };
  
  const funcBtnStyle = {
    ...numBtnStyle,
    backgroundColor: '#f3dbaa', // ← 버튼
    color: '#7c7241',
  };
  
  const resetBtnStyle = {
    ...numBtnStyle,
    backgroundColor: '#edca80', // 정정 버튼
    color: '#7c7241',
  };
  
  return (
    <div
  className="fade"
  style={{
    height: '100vh',
    display: 'flex',
    backgroundColor: '#faf7e8',
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
      src={require('../assets/text.png')}
      alt="페이지 이미지"
      style={{
        width: '60%',
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
            backgroundColor: '#f6e4bd',
            padding: '40px',
            borderRadius: '12px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            minWidth: '400px',
        }}
    >
    <h2 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '40px' }}>
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
                backgroundColor: i < input.length ? '#7c7241' : 'rgb(250 249 235)',
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
        backgroundColor: 'rgb(250 249 235)',
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

// 스타일 공통화
const numBtnStyle = {
  width: '80px',
  height: '60px',
  backgroundColor: '#cfd8e3',
  border: '1px solid #b0bec5',
  borderRadius: '6px',
  fontSize: '22px',
  fontWeight: '600',
  color: '#333',
  boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.15)',
};

const funcBtnStyle = {
  ...numBtnStyle,
  backgroundColor: '#e8eaf6',
  color: '#3e4a59',
};

const resetBtnStyle = {
  ...numBtnStyle,
  backgroundColor: '#f8c7c7',
  color: '#8a3a3a',
};

export default Password;
