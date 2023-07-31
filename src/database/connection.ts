import { Pool } from "pg";

let connection: any;

if (!connection) {
  const user = process.env.PGSQL_USER;
  const password = process.env.PGSQL_PASSWORD;
  const host = process.env.PGSQL_HOST;
  const port = process.env.PGSQL_PORT as unknown as number;
  const database = process.env.PGSQL_DATABASE;

  connection = new Pool({
    database,
    host,
    port,
    user,
    password,
  });
}

export default connection;
