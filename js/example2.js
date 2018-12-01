setDeleteFunction(generalDeleteFunction);
setAddFunction(generalAddFunction);
setEditFunction(generalEditFunction);
setTabelInfo("example_table_2", "id");

pool.query(`SELECT * FROM ${_table}`).then(res => {
	return res.recordset;
}).then(data => {
	// Load columns
	const map = buildMappingFromColumns(data.columns);
	
	// Update any custom labels we want
	map.label["id"] = "Id";
	map.label["value1"] = "Value 1";
	map.label["value2"] = "Value 2";
	map.label["value3"] = "Value 3";
	
	// TODO: Auto-setup columns when setting the mapping?
	setMapping(map);
	
	// Add columns
	for (let i = 0; i < map.trans.length; ++i) {
		addColumn(map.label[map.trans[i]]);
	}
	
	console.log(map);
	
	// Add rows
	for (let i = 0; i < data.length; ++i) {
		addRow(data[i]);
	}
});
