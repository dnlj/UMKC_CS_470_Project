setDeleteFunction(generalDeleteFunction);
setAddFunction(generalAddFunction);
setEditFunction(generalEditFunction);
setTabelInfo("ex_products", "id");

pool.query(`SELECT * FROM ${_table}`).then(res => {
	return res.recordset;
}).then(data => {
	// Load columns
	const map = buildMappingFromColumns(data.columns);
	
	// Update any custom labels we want
	map.label["id"] = "Id";
	map.label["name"] = "Name";
	map.label["msrp"] = "MSRP";
	map.label["description"] = "Description";
	
	// Set the mapping
	setMapping(map);
	
	// Add rows
	setRows(data);
});
