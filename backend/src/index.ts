import { createConnection } from "typeorm";
import server from "./app";

createConnection()
  .then(() => {
    server.listen(3333, () => {
      console.log("starting on 3333");
    });
  })
  .catch(console.error);
