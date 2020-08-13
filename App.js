import 'react-native-gesture-handler';
import React, { Fragment, useState, useEffect } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import AsyncStorage from '@react-native-community/async-storage';

import Navigation from './src/Navigation';
import { ThemeContext } from './src/context/theme-context';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  useEffect(() => {
    const loadTheme = async () => {
      try {
        await AsyncStorage.getItem('theme', (error, result) => {
          if (error) {
            setTheme(theme);
          } else {
            if (result === 'dark') {
              setTheme(result);
            } else {
              setTheme(theme);
            }
          }
        });
      } catch (error) {
        console.log(error);
      }
    };

    loadTheme();
  }, []);

  return (
    <Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ApplicationProvider {...eva} theme={eva[theme]}>
          <Navigation />
        </ApplicationProvider>
      </ThemeContext.Provider>
    </Fragment>
  );
};

export default App;
