const sql = require("mssql"); // https://www.npmjs.com/package/mssql
const fs = require("fs");
const $ = require("jquery");

console.log("index.js");

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
	$.ajaxPrefilter(function(op) {
		op.async = true;
	});
	
	$("#page_select").change(function() {
		$("main").load("../html/" + $(this).val() +".html");
	});
	
	$("main").load("../html/test_file.html");
};

pool.connect().then(() => {
	main();
}).catch(err => {
	error(err);
});
