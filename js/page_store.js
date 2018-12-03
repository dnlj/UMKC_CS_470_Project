setDeleteFunction(generalDeleteFunction);
setAddFunction(generalAddFunction);
setEditFunction(generalEditFunction);
setTabelInfo("store", "Id");

pool.query(`SELECT * FROM ${_table}`).then(res => {
	return res.recordset;
}).then(data => {
	// Load columns
	const map = buildMappingFromColumns(data.columns);
	
	// Update any custom labels we want
	map.label["FirstName"] = "First Name";
	map.label["LastName"] = "Last Name";
	
	// Set the mapping
	setMapping(map);
	console.log(map);
	
	// Add rows
	setRows(data);
});
