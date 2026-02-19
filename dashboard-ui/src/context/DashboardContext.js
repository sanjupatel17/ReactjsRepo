import { createContext, useState } from "react";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <DashboardContext.Provider value={{
      data,
      setData,
      loading,
      setLoading,
      error,
      setError
    }}>
      {children}
    </DashboardContext.Provider>
  );
};
