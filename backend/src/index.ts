import { createConnection } from "typeorm";
import server from "./app";

createConnection()
  .then(() => {
    server.listen(process.env.PORT || 3333, () => {
      console.log(`starting on ${process.env.PORT || 3333} `);
    });
  })
  .catch(console.error);
