import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MachineryRental.css';

const MachineryRental = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>آیا آپ کا کسان؟</h1>
      <button onClick={() => navigate('/farmer-registration')}>کسیا بمقابلہ</button>
      <button onClick={() => navigate('/farmer-registration')}>مشینری کی رہنمائی</button>
    </div>
  );
};

export default MachineryRental;