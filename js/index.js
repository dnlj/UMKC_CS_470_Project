const sql = require("mssql"); // https://www.npmjs.com/package/mssql
const fs = require("fs");
const $ = require("jquery");

const pages = [
	{
		label: "Vendors",
		url: "../html/example.html",
	},
	{
		label: "Warehouse",
		url: "../html/example.html",
	},
	{
		label: "Products",
		url: "../html/example.html",
	},
	{
		label: "Employees",
		url: "../html/example.html",
	},
	{
		label: "Stores",
		url: "../html/example.html",
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
	$("main").empty();
	
	for (let i = 0; i < pages.length; ++i) {
		pages[i].button.removeClass("selected");
	}
}

const loadPage = function(page) {
	clearPage();
	$("main").load(page.url);
	page.button.addClass("selected");
};

const main = function() {
	$.ajaxPrefilter(function(op) {
		op.async = true;
	});
	
	for (let i = 0; i < pages.length; ++i) {
		const p = pages[i];
		p.button = $(`<input class="nav_button" type="button" value="${p.label}">`)
			.appendTo("html > body > nav");
			
		p.button.on("click", function() {
			console.log(p);
			loadPage(p);
		});
	}
};

main();

/*
pool.connect().then(() => {
	main();
}).catch(err => {
	error(err);
});*/
