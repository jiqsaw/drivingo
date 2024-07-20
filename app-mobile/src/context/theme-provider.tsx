/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useContext } from "react";
import { ReactNode, useEffect, useState } from "react";
import { Preferences } from '@capacitor/preferences';

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => { },
});

interface ThemeProviderProps {
  children: ReactNode;
}



export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useState(prefersDark ? 'dark' : 'light');

  useEffect(() => {
    const getTheme = async () => {
      const { value } = await Preferences.get({ key: 'app-theme' });
      if (value) {
        setTheme(value === 'dark' ? 'dark' : 'light');
      }
    };
    getTheme();
  }, []);


  const toggleTheme = async () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    await Preferences.set({ key: 'app-theme', value: newTheme });
  };


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
