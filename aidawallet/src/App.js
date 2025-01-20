import React from 'react';
import MainSection from './components/MainSection';

const App = () => {
  const fetchUserBalance = async () => {
    // Здесь можно подключить реальную логику получения баланса
    return 123.45; // Для теста возвращаем статичное значение
  };

  return (
    <div>
      <MainSection fetchUserBalance={fetchUserBalance} />
    </div>
  );
};

export default App;