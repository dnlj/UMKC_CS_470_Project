const sql = require("mssql"); // https://www.npmjs.com/package/mssql
const $ = require("jquery");

const pages = [
	{
		label: "Vendors",
		file: "../js/example.js",
	},
	{
		label: "Warehouse",
		file: "../js/example.js",
	},
	{
		label: "Products",
		file: "../js/example.js",
	},
	{
		label: "Employees",
		file: "../js/example.js",
	},
	{
		label: "Stores",
		file: "../js/example.js",
	},
];

const error = function(err) {
	console.log("ERROR: " + err);
};

const pool = new sql.ConnectionPool({
	user: "umkc_test",
	password: "abc123",
	server: "127.0.0.1",
	database: "GroupProjectDB",
});

const clearPage = function() {
	$("#edit").empty();
	$("#labels").empty();
	$("#primary > tbody").empty();
	
	for (let i = 0; i < pages.length; ++i) {
		pages[i].button.removeClass("selected");
	}
}

const loadPage = function(page) {
	clearPage();
	
	$.getScript(page.file, function() {
		page.button.addClass("selected");
		$("#edit").append(`<td><input type="button" value="Add"></td>`);
		$("#labels").append(`<th>Action</th>`);
	});
};

const addColumn = function(label) {
	$("#edit").append(`<td><input type="text"></td>`);
	$("#labels").append(`<th>${label}</th>`);
}

const addRow = function(data) {
	let row = $("<tr></tr>");
	
	for (let i = 0; i < data.length; ++i) {
		row.append(`<td>${data[i]}</td>`);
	}
	
	row.append(
		`<td>
			<input type="button" value="Edit">
			<input type="button" value="Delete">
		</td>`
	);
	
	$("#primary > tbody").append(row);
}

const main = function() {
	// TODO: insert row (sql)
	// TODO: edit row (sql)
	// TODO: delete row (sql)
	
	for (let i = 0; i < pages.length; ++i) {
		const p = pages[i];
		p.button = $(`<input class="nav_button" type="button" value="${p.label}">`)
			.appendTo("html > body > nav");
			
		p.button.on("click", function() {
			loadPage(p);
		});
	}
};

main();

/*pool.connect().then(() => {
	main();
}).catch(err => {
	error(err);
});*/
