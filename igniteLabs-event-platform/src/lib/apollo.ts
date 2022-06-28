import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4xe5h9h0dvl01t84e888xkp/master',
  cache: new InMemoryCache()
})