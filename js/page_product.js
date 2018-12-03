setDeleteFunction(generalDeleteFunction);
setAddFunction(generalAddFunction);
setEditFunction(generalEditFunction);
setTabelInfo("product", "Id");

pool.query(`SELECT * FROM ${_table}`).then(res => {
	return res.recordset;
}).then(data => {
	// Load columns
	const map = buildMappingFromColumns(data.columns);
	
	// Update any custom labels we want
	map.label["Vendor_Id"] = "Vendor Id";
	
	// Set the mapping
	setMapping(map);
	console.log(map);
	
	// Add rows
	setRows(data);
});
