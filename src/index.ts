import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

const app = express();

// Define a simple schema with a query
const schema = buildSchema(`
    type User {
      id: ID
      name: String
      email: String
    }
  
    type Query {
      user(id: ID!): User
    }
`);

interface User {
  id: string;
  name: string;
  email: string;
}

const users: User[] = [
  { id: "1", name: "Alice", email: "alice@example.com" },
  { id: "2", name: "Bob", email: "bob@example.com" },
];

// resolver function for users
const root = {
  user: ({ id }: { id: string }) => users.find((user) => user.id === id),
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, // Enable GraphiQL interface
  })
);

app.listen(4000, () =>
  console.log("Server running on http://localhost:4000/graphql")
);
