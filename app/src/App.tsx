import React from 'react';
import { StatusBar } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';

// Theme
import { theme } from '&theme';
import { ThemeProvider } from 'styled-components/native';

// Apollo
// import { setContext } from '@apollo/client/link/context';
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from '@apollo/client';

const httpLink = createHttpLink({
  uri: ``,
});

// const authLink = setContext(async (_, { headers }) => {
//   const token = await AsyncStorage.getItem('userToken');
//   return {
//     headers: {
//       ...headers,
//       Authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <>
        <StatusBar barStyle="dark-content" />
      </>
    </ApolloProvider>
  </ThemeProvider>
  );
};

export default App;
