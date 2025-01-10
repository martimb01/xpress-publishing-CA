const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./database.sqlite');


db.serialize(()=>{
db.run(`DROP TABLE IF EXISTS Artist`, (error)=> {
    if (error) {
        console.log('Something went wrong dropping the table')
    } else {
        console.log('Table has been dropped!')
    }
})

db.run(`CREATE TABLE Artist (id INTEGER PRIMARY KEY NOT NULL,
        name TEXT NOT NULL, date_of_birth TEXT NOT NULL,
        biography TEXT NOT NULL, is_currently_employed INTEGER DEFAULT 1)`, (error) => {
            if (error) {
                console.log('Something went wrong creating the table')
            } else {
                console.log('Table has been created!')
            }
        })
    });