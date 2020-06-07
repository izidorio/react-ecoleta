import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    // sqlite3 flag not support inserting default values
    useNullAsDefault: true,
});

export default connection;