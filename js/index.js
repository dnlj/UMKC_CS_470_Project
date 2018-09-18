const sql = require("mssql"); // https://www.npmjs.com/package/mssql

console.log("This is a test");

const config = {
    user: "umkc_test",
    password: "abc123",
    server: "127.0.0.1", // You can use 'localhost\\instance' to connect to named instance
    database: "GroupProjectDB",
    options: {
        encrypt: false, // Use this if you're on Windows Azure
    }
};

sql.connect(config).then(pool => {
    // Query
    
	console.log("1");
	
    return pool.request()
		.query("SELECT * from TestTable");
}).then(result => {
    console.dir(result);
    
    // Stored procedure
	console.log("2");
    
    //return pool.request()
    //.input('input_parameter', sql.Int, value)
    //.output('output_parameter', sql.VarChar(50))
	//.execute('procedure_name');
}).then(result => {
	console.dir(result);
	console.log("3");
}).catch(err => {
	// ... error checks
	console.log("err: " + err);
});
 
sql.on("error", err => {
	// ... error handler
	console.log("MSSQL ERROR");
});