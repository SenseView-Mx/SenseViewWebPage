import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Button.css';

const Button = ({ children, onClick, type = 'button', variant = 'primary', style = {}, to }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
    if (to) {
      navigate(to);
    }
  };

  const className = variant === 'primary' ? 'demo-button' : 'demo-button secondary';

  return (
    <button type={type} className={className} onClick={handleClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
