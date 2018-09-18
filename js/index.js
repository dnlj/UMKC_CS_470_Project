const sql = require("mssql"); // https://www.npmjs.com/package/mssql
const $ = require("jquery");

console.log("This is a test");

let error = function(err) {
	console.log("ERROR: " + err);
};

let pool = new sql.ConnectionPool({
    user: "umkc_test",
    password: "abc123",
    server: "127.0.0.1",
    database: "GroupProjectDB",
});

let main = function() {
	$("#test_button").on("click", () => {
		pool.query("SELECT * FROM TestTable").then(res => {
			console.log(res);
		});
	});
};

pool.connect().then(() => {
	main();
}).catch(err => {
	error(err);
});
