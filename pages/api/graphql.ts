import { ApolloServer } from 'apollo-server-micro';
import schema from '../../lib/schema';
import Cors from 'micro-cors';

const apolloServer = new ApolloServer({
  schema,
});

const handler = apolloServer.createHandler({ path: '/api/graphql' });

const cors = Cors({
  allowMethods: ['POST', 'OPTIONS'],
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default cors(handler);
