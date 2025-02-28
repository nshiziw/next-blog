import mysql from "mysql2/promise"

type DbConfig = {
    host: string,
    user: string,
    password: string,
    database: string
};

const config: DbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'next-app',
};

const pool = mysql.createPool(config);

export default pool;