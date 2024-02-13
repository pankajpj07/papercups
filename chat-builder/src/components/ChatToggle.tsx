import React from 'react';
import styled from '@emotion/styled';

const ToggleButton = styled.button({
  outline: 'none',
  border: 'none',
  userSelect: 'none',
  cursor: 'pointer',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '&:focus': {
    outline: 'none',
  },
});

const OpenIcon = () => {
  return (
    <svg width='27' height='27' viewBox='0 0 27 27'>
      <path
        fill='transparent'
        strokeWidth='3'
        stroke='hsl(0, 0%, 99%)'
        strokeLinecap='round'
        opacity='0'
        d='M 7.5 14.5 L 19 14.5'
      ></path>
      <path
        fill='transparent'
        strokeWidth='3'
        stroke='hsl(0, 0%, 99%)'
        strokeLinecap='round'
        opacity='0'
        d='M 7.5 8.5 L 19 8.5'
      ></path>
      <path
        fill='transparent'
        strokeWidth='3'
        stroke='hsl(0, 0%, 99%)'
        strokeLinecap='round'
        d='M22 21.6453C22 20 23 19.5 23 19.5C23 19.5 25.5 18 25.5 14V9C25.5 4 23 1.5 18 1.5H9C4 1.5 1.5 4 1.5 9V14C1.5 19 4 21 9 21H13.5C14 21 14 21 15 21.5L20.25 24.8572L20.8517 25.2118C21.5184 25.6046 22 25.631 22 24.8572V24.0287V22.7858V21.6453Z'
        opacity='1'
      ></path>
    </svg>
  );
};

const CloseIcon = () => {
  return (
    <svg width='24' height='25' viewBox='0 0 24 25' fill='none'>
      <path
        fill='transparent'
        strokeWidth='3'
        stroke='hsl(0, 0%, 99%)'
        strokeLinecap='round'
        opacity='1'
        d='M 5 5 L 20 20'
      ></path>
      <path
        fill='transparent'
        strokeWidth='3'
        stroke='hsl(0, 0%, 99%)'
        strokeLinecap='round'
        opacity='1'
        d='M 5 20 L 20 5'
      ></path>
      <path
        d='M20.5 21.1453C20.5 19.5 21.5 19 21.5 19C21.5 19 24 18.5 24 13.5V8.5C24 3.5 21.5 1 16.5 1H7.5C2.5 1 0 3.5 0 8.5V13.5C0 18.5 2.5 20.5 7.5 20.5H12C12.5 20.5 12.5 20.5 13.5 21L18.75 24.3572L19.3517 24.7118C20.0184 25.1046 20.5 25.131 20.5 24.3572V23.5287V22.2858V21.1453Z'
        fill='white'
        fillOpacity='0.7'
        opacity='0'
      ></path>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21.5 18C21.5 18 20.5 18.5 20.5 20.1453V21.2858V22.5287V23.3572C20.5 24.131 20.0184 24.1046 19.3517 23.7118L18.75 23.3572L13.5 20C12.8174 19.6587 12.6007 19.5504 12.3729 19.516C12.267 19.5 12.1587 19.5 12 19.5H7.5C2.5 19.5 0 17.5 0 12.5V7.5C0 2.5 2.5 0 7.5 0H16.5C21.5 0 24 2.5 24 7.5V12.5C24 17.5 21.5 18 21.5 18ZM21 17.557C21.8581 17.557 24 13.557 23 13.057C22.3869 12.7505 21.8801 13.7414 21.4646 14.554C21.2023 15.0668 20.9764 15.5086 20.783 15.5086C20.283 15.5086 20 16.0554 20 16.7568C20 17.4582 20.1419 17.557 21 17.557Z'
        fill='white'
        opacity='0'
      ></path>
    </svg>
  );
};

const ChatToggle = ({
  isOpen,
  onToggleOpen,
}: {
  isOpen?: boolean;
  onToggleOpen: () => void;
}) => {
  return (
    <ToggleButton
      style={{background: 'rgb(24, 144, 255)'}}
      onClick={onToggleOpen}
    >
      {isOpen ? <CloseIcon /> : <OpenIcon />}
    </ToggleButton>
  );
};

export default ChatToggle;
