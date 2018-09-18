const sql = require("mssql"); // https://www.npmjs.com/package/mssql

console.log("This is a test");

let error = function(err) {
	console.log("ERROR: " + err);
};

const config = {
    user: "umkc_test",
    password: "abc123",
    server: "127.0.0.1",
    database: "GroupProjectDB",
    options: {
        encrypt: true,
    }
};

sql.connect(config).then(pool => {
	console.log("1");
    return pool.request()
		.query("SELECT * from TestTable");
}).then(result => {
	console.log("2");
	console.log(result);
}).catch(err => {
	error(err);
});
 
sql.on("error", err => {
	error(err);
});