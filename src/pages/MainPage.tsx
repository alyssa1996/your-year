import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: 'blue' }}>
      hello
      <button onClick={() => navigate('/last-year')}>last year page</button>
      <button onClick={() => navigate('/next-year')}>next year page</button>
    </div>
  );
};

export default MainPage;
