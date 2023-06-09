import '@/styles/globals.css'

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri : "https://rickandmortyapi.com/graphql/",
  cache: new InMemoryCache()
})

function MyApp({ Component, pageProps }) {


  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
