setDeleteFunction(function(value) {
	if (!_table) {
		error("Table not set.");
		return;
	}
	
	pool.request()
		.input("Store_Id", value.Store_Id)
		.input("Product_Id", value.Product_Id)
		.query(`DELETE FROM ${_table} WHERE Store_Id = @Store_Id AND Product_Id = @Product_Id`)
		.then(() => {
			refresh();
		});
});

setAddFunction(generalAddFunction);

setEditFunction(function(old, row) {
	if (row.length == 0) { return; }
	let req = pool.request();
	
	// Setup input
	for (let i = 0; i < _mapping.trans.length; ++i) {
		req.input(_mapping.trans[i], row[i]);
	}
	
	// Build values
	let values = "";
	for (let i = 0; i < _mapping.trans.length; ++i) {
		let prop = _mapping.trans[i];
		
		if (prop == "Store_Id" || prop == "Product_Id") { continue; }
		
		values += `${prop} = @${prop},`;
	}
	
	// Remove trailing comma
	values = values.slice(0, -1);
	
	// Perform query
	req.query(`UPDATE ${_table} SET ${values} WHERE Store_Id = ${old.Store_Id} AND Product_Id = ${old.Product_Id}`)
		.then(() => {
			refresh();
		});
});

setTabelInfo("sells", "Id");

pool.query(`SELECT * FROM ${_table}`).then(res => {
	return res.recordset;
}).then(data => {
	// Load columns
	const map = buildMappingFromColumns(data.columns);
	
	// Update any custom labels we want
	map.label["Managed_By"] = "Managed By";
	
	// Set the mapping
	setMapping(map);
	
	// Add rows
	setRows(data);
});
