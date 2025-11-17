import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="text-gray-500 dark:text-gray-400 text-sm">
        Welcome to NexBTC
      </div>
    </header>
  );
};

export default Header;
