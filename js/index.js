const sql = require("mssql"); // https://www.npmjs.com/package/mssql
const $ = require("jquery");

let _deleteFunction = null;
let _addFunction = null;
let _currentPage = null;

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
		file: "../js/example2.js",
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
	
	_deleteFunction = null;
	
	for (let i = 0; i < pages.length; ++i) {
		pages[i].button.removeClass("selected");
	}
};

const loadPage = function(page) {
	clearPage();
	
	_currentPage = page;
	
	$.getScript(page.file, function() {
		page.button.addClass("selected");
		$("#labels").append(`<th>Action</th>`);
		let add = $(`<td><input type="button" value="Add"></td>`).appendTo(`#edit`);
		
		add.on("click", function() {
			if (_addFunction) {
				let row = [];
				
				$(`#edit > td`).children(`input[type="text"]`).each((idx, el) => {
					row.push(el.value);
				});
				
				_addFunction(row);
			}
		});
	});
};

const addColumn = function(label) {
	$("#edit").append(`<td><input type="text"></td>`);
	$("#labels").append(`<th>${label}</th>`);
};

const addRow = function(data) {
	let row = $("<tr></tr>");
	
	for (let i = 0; i < data.length; ++i) {
		row.append(`<td>${data[i]}</td>`);
	}
	
	let td = $(`<td></td>`).appendTo(row);
	let edit = $(`<input type="button" value="Edit">`).appendTo(td);
	let del = $(`<input type="button" value="Delete">`).appendTo(td);
	
	del.on("click", function() {
		if (_deleteFunction) {
			_deleteFunction(data);
		}
	});
	
	$("#primary > tbody").append(row);
};

const setDeleteFunction = function(func) {
	_deleteFunction = func;
};

const setAddFunction = function(func) {
	_addFunction = func;
};

const refresh = function() {
	loadPage(_currentPage);
}

const main = function() {
	// TODO: Error reporting
	// TODO: edit row (sql)
	
	for (let i = 0; i < pages.length; ++i) {
		const p = pages[i];
		p.button = $(`<input class="nav_button" type="button" value="${p.label}">`)
			.appendTo("html > body > nav");
			
		p.button.on("click", function() {
			loadPage(p);
		});
	}
};

pool.connect().then(() => {
	main();
}).catch(err => {
	error(err);
});
