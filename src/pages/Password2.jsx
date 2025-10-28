import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import symbolImg from '../assets/symbol.png';
import '../App.css';

const Password2 = () => {
  const [input, setInput] = useState('');
  const [shake, setShake] = useState(false);
  const [popIndex, setPopIndex] = useState(null);
  const navigate = useNavigate();
  const correctPassword = '251031';

  const handleClick = (num) => {
    const newInput = input + String(num);
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

  // 포인터 통일 핸들러 (터치/펜에서 클릭 합성 방지)
  const onPressNumber = (e, num) => { e.preventDefault(); handleClick(num); };
  const onPressBack = (e) => { e.preventDefault(); handleBack(); };
  const onPressClear = (e) => { e.preventDefault(); handleClear(); };

  // 키패드 사이즈(필요하면 KEY만 조절)
  const KEY = 90;      // 110 -> 90으로 축소
  const GAP = 14;
  const PADDING_Y = 28, PADDING_X = 20;

  const numBtnStyle = {
    width: `${KEY}px`,
    height: `${KEY}px`,
    backgroundColor: '#c7def8',
    border: '2px solid #7ea6e0',
    borderRadius: '12px',
    fontSize: '26px', // 30 -> 26
    fontWeight: '700',
    color: '#004aad',
    boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.15)',
    cursor: 'pointer',
    transition: 'transform 0.1s ease',
    touchAction: 'manipulation',
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
          src={symbolImg}
          alt="페이지 이미지"
          style={{ width: '50%', height: 'auto' }}
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
          padding: '36px',       // 40 -> 36
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          minWidth: '360px',     // 400 -> 360
        }}
      >
        <h2 style={{ fontSize: '2.2rem', color: '#fff', marginBottom: '32px' }}>
          비밀번호를 입력하세요
        </h2>

        {/* 입력 점 */}
        <div
          className={`password-display ${shake ? 'shake' : ''}`}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '14px',
            marginBottom: '28px',
          }}
          aria-label="비밀번호 입력 진행도"
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={i === popIndex ? 'dot-pop' : ''}
              style={{
                width: '22px',   // 24 -> 22
                height: '22px',
                borderRadius: '50%',
                backgroundColor: i < input.length ? '#004aad' : '#e0f0ff',
                transition: 'background-color 0.2s ease',
              }}
            />
          ))}
        </div>

        {/* 숫자 키패드 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(3, ${KEY}px)`,
            gap: `${GAP}px`,
            justifyContent: 'center',
            backgroundColor: '#e6f0fb',
            padding: `${PADDING_Y}px ${PADDING_X}px`,
            borderRadius: '12px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              type="button"
              className="button-touch"
              onPointerDown={(e) => onPressNumber(e, num)}
              style={numBtnStyle}
              aria-label={`${num} 입력`}
            >
              {num}
            </button>
          ))}

          <button
            type="button"
            className="button-touch"
            onPointerDown={onPressBack}
            style={funcBtnStyle}
            aria-label="한 글자 지우기"
          >
            ←
          </button>
          <button
            type="button"
            className="button-touch"
            onPointerDown={(e) => onPressNumber(e, 0)}
            style={numBtnStyle}
            aria-label="0 입력"
          >
            0
          </button>
          <button
            type="button"
            className="button-touch"
            onPointerDown={onPressClear}
            style={resetBtnStyle}
            aria-label="전체 지우기"
          >
            정정
          </button>
        </div>
      </div>
    </div>
  );
};

export default Password2;
