# GraphQL TypeScript Server

A simple GraphQL server built with TypeScript and Express. This project demonstrates setting up a GraphQL API with queries to fetch data in a type-safe way using TypeScript.

## Project Setup

This project is structured using Express, GraphQL, and TypeScript.

### Prerequisites

Ensure you have Node.js installed. Then, clone the repository and navigate to the project folder.

### Installation

1. Initialize a new Node.js project.

2. Install dependencies:

   - express
   - express-graphql
   - graphql
   - typescript
   - @types/node
   - ts-node
   - nodemon
   - @types/express

3. Initialize TypeScript.

```bash
npx tsc --init
```

### Project Structure

- index.ts: Main server file that configures the Express server and sets up the GraphQL endpoint.
- User: Basic schema and resolver for a `User` type to demonstrate fetching data via GraphQL.

### Setting up the Server

The server is configured with a simple GraphQL schema and resolver to handle basic data retrieval.

1. **Schema Definition**:

   - Defines a `User` type with `id`, `name`, and `email` fields.
   - Sets up a `Query` type to retrieve a `User` by `id`.

   **Schema definition example**:
   Define the schema to include types like `User` and queries, such as `user` to get a user by ID.

   ```typescript
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
   ```

2. **Resolver**:

   - Resolves the `user` query by retrieving a user object from a sample in-memory dataset.

   **Resolver example**:
   Implement a sample dataset for users and define a resolver that finds and returns a user by their ID.

   ```typescript
   const users: User[] = [
     { id: "1", name: "Alice", email: "alice@example.com" },
     { id: "2", name: "Bob", email: "bob@example.com" },
   ];

   const root = {
     user: ({ id }: { id: string }) => users.find((user) => user.id === id),
   };
   ```

### Running the Server

To run the server, start it with nodemon.

```bash
npm start
```

The server will be running at http://localhost:4000/graphql. You can use the GraphiQL interface at this endpoint to test queries.

### Example Queries

1. **Get User by ID**:

   **Query example**:
   Request a user by ID to return the `name` and `email` fields only.

   ```graphql
   {
     user(id: "1") {
       name
       email
     }
   }
   ```

### Additional Resources

To expand further, consider using Apollo Server or TypeGraphQL for advanced setups with more complex schemas, caching, and subscriptions.

---

## License

This project is open source and available under the MIT License.
