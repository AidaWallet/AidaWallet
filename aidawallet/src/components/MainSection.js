import React, { useState, useEffect } from 'react';

const MainSection = ({ fetchUserBalance }) => {
  const [icon, setIcon] = useState('❄️');
  const [balance, setBalance] = useState(0);

  const fetchBalance = async () => {
    try {
      const latestBalance = await fetchUserBalance();
      setBalance(latestBalance);
    } catch (error) {
      console.error('Error fetching balance:', error);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  return (
    <div className="bg-light flex flex-col items-center p-4 space-y-4">
      {/* User Balance Section */}
      <div className="text-center">
        <h2 className="text-secondary">User Balance</h2>
        <p className="text-primary text-2xl font-bold">${balance.toFixed(2)}</p>
      </div>

      {/* Icon Selector */}
      <div className="flex justify-center w-full mb-4">
        <label htmlFor="icon-selector" className="mr-2 text-secondary">Select Icon:</label>
        <select
          id="icon-selector"
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="❄️">Snowflake</option>
          <option value="🌟">Star</option>
          <option value="🍂">Leaf</option>
          <option value="💧">Drop</option>
        </select>
      </div>

      {/* Buttons Section */}
      <div className="flex justify-around w-full space-x-2">
        <button className="flex flex-col items-center bg-container p-3 rounded-md shadow">
          <span>⬆️</span>
          <span className="text-secondary">Send</span>
        </button>
        <button className="flex flex-col items-center bg-container p-3 rounded-md shadow">
          <span>⭐</span>
          <span className="text-secondary">Buy</span>
        </button>
        <button className="flex flex-col items-center bg-container p-3 rounded-md shadow">
          <span>⬇️</span>
          <span className="text-secondary">Receive</span>
        </button>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-container p-4 flex justify-around">
        <button className="flex flex-col items-center">
          <span>🏠</span>
          <span className="text-secondary">Home</span>
        </button>
        <button className="flex flex-col items-center">
          <span>😀</span>
          <span className="text-secondary">Stickers</span>
        </button>
        <button className="flex flex-col items-center">
          <span>🌐</span>
          <span className="text-secondary">DApps</span>
        </button>
        <button className="flex flex-col items-center">
          <span>⚙️</span>
          <span className="text-secondary">Settings</span>
        </button>
      </div>
    </div>
  );
};

export default MainSection;
