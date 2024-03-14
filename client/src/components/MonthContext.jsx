// DataContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context
const MonthContext = createContext();

// Create a provider component
export const MonthProvider = ({ children }) => {
  const [monthData, setMonthData] = useState(null); // initialData is the initial state

  // Define functions to update the shared state
  const updateMonth = (newData) => {
    setMonthData(newData);
  };

  // Provide the shared data and update functions through the context value
  return (
    <MonthContext.Provider value={{ monthData, updateMonth }}>
      {children}
    </MonthContext.Provider>
  );
};

// Custom hook to consume the context
export const useMonth = () => useContext(MonthContext);
