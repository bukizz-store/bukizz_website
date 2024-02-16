import { createPool } from "mysql2";
export const db = createPool({
    host: "193.203.184.47",
    user: "u991064025_bukizz",
    password: "Bukizz@123987",
    database: "u991064025_bukizz",
    connectionLimit: "1000"
});