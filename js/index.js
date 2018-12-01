const sql = require("mssql"); // https://www.npmjs.com/package/mssql
const $ = require("jquery");

let _deleteFunction = null;
let _addFunction = null;
let _currentPage = null;
let _editFunction = null;
let _mapping = null;

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

const getEditRowValues = function() {
	let row = [];
	
	$(`#edit > td`).children(`input[type="text"]`).each((idx, el) => {
		row.push(el.value);
	});
	
	return row;
};

const clearPage = function() {
	$("#edit").empty();
	$("#labels").empty();
	$("#primary > tbody").empty();
	
	_deleteFunction = null;
	_addFunction = null;
	_currentPage = null;
	_editFunction = null;
	_mapping = null;
	
	for (let i = 0; i < pages.length; ++i) {
		pages[i].button.removeClass("selected");
	}
};

const loadPage = function(page) {
	clearPage();
	
	_currentPage = page;
	
	page.button.addClass("selected");
	$("#labels").append(`<th id="action_label">Action</th>`);
	let add = $(`<td id="add_button"><input type="button" value="Add"></td>`).appendTo(`#edit`);
	
	$.getScript(page.file, function() {
		add.on("click", function() {
			if (_addFunction) {
				_addFunction(getEditRowValues());
			}
		});
	});
};

const addColumn = function(label) {
	$("#add_button").before(`<td><input type="text"></td>`);
	$("#action_label").before(`<th>${label}</th>`);
};

const addRow = function(data) {
	let row = $("<tr></tr>");
	
	for (let i = 0; i < _mapping.trans.length; ++i) {
		row.append(`<td>${data[_mapping.trans[i]]}</td>`);
	}
	
	let td = $(`<td></td>`).appendTo(row);
	let edit = $(`<input type="button" value="Edit">`).appendTo(td);
	let del = $(`<input type="button" value="Delete">`).appendTo(td);
	
	edit.on("click", function() {
		if (_editFunction) {
			console.log(data);
			console.log(getEditRowValues());
			
			_editFunction(data, getEditRowValues());
		}
	});
	
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

const setEditFunction = function(func) {
	_editFunction = func;
};

const setMapping = function(map) {
	_mapping = map;
};

const refresh = function() {
	loadPage(_currentPage);
};

const main = function() {
	// TODO: Error reporting
	
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
