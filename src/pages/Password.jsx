import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import textImg from '../assets/text.png';
import '../App.css';

const Password = () => {
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

  const onPressNumber = (e, num) => { e.preventDefault(); handleClick(num); };
  const onPressBack = (e) => { e.preventDefault(); handleBack(); };
  const onPressClear = (e) => { e.preventDefault(); handleClear(); };

  // << 여기만 사이즈 다운 >>
  const KEY = 90;     // 버튼 한 변(px) — 기존 110에서 감소
  const GAP = 14;     // 버튼 간격 — 기존 18에서 감소
  const PADDING_Y = 28, PADDING_X = 20;

  const numBtnStyle = {
    width: `${KEY}px`,
    height: `${KEY}px`,
    backgroundColor: '#e4dec2',
    border: '1px solid #aba482',
    borderRadius: '12px',
    fontSize: '26px',         // 기존 30 -> 26
    fontWeight: '700',
    color: '#7c7241',
    boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.15)',
    cursor: 'pointer',
    transition: 'transform 0.1s ease',
    touchAction: 'manipulation',
  };

  const funcBtnStyle = { ...numBtnStyle, backgroundColor: '#f3dbaa' };
  const resetBtnStyle = { ...numBtnStyle, backgroundColor: '#edca80' };

  return (
    <div className="fade" style={{ height: '100vh', display: 'flex', backgroundColor: '#faf7e8' }}>
      {/* 이미지 영역 */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={textImg} alt="페이지 이미지" style={{ width: '60%', height: 'auto' }} />
      </div>

      {/* 비번 다이얼로그 */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f6e4bd',
          padding: '36px',              // 40 -> 36
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          minWidth: '360px',            // 400 -> 360
        }}
      >
        <h2 style={{ fontSize: '2.2rem', color: '#333', marginBottom: '32px' }}>
          비밀번호를 입력하세요
        </h2>

        {/* 입력 점 */}
        <div
          className={`password-display ${shake ? 'shake' : ''}`}
          style={{ display: 'flex', justifyContent: 'center', gap: '14px', marginBottom: '28px' }}
          aria-label="비밀번호 입력 진행도"
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={i === popIndex ? 'dot-pop' : ''}
              style={{
                width: '22px',           // 24 -> 22
                height: '22px',
                borderRadius: '50%',
                backgroundColor: i < input.length ? '#7c7241' : 'rgb(250 249 235)',
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
            backgroundColor: 'rgb(250 249 235)',
            padding: `${PADDING_Y}px ${PADDING_X}px`,
            borderRadius: '12px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          }}
        >
          {[1,2,3,4,5,6,7,8,9].map((num) => (
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

export default Password;
