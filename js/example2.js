setDeleteFunction(row => {
	pool.request()
		.input("id", row.id)
		.query(`DELETE FROM example_table_2 WHERE id=@id`)
		.then(() => {
			refresh();
		});
});

setAddFunction((row) => {
	// TODO: it would be better if we could associate columns with values instead of doing this manually.
	pool.request()
		.input("id", row.id)
		.input("value1", row.value1)
		.input("value2", row.value2)
		.input("value3", row.value3)
		.query(`
			INSERT INTO example_table_2 (id, value1, value2, value3)
				VALUES (@id, @value1, @value2, @value3)
		`)
		.then(() => {
			refresh();
		});
});

setEditFunction((old, row) => {
	pool.request()
		.input("id", old.id)
		.input("value1", row.value1)
		.input("value2", row.value2)
		.input("value3", row.value3)
		.query(`
			UPDATE example_table_2
				SET value1 = @value1, value2 = @value2, value3 = @value3
				WHERE id = @id;
		`)
		.then(() => {
			refresh();
		});
});

pool.query("SELECT * FROM example_table_2").then(res => {
	return res.recordset;
}).then(data => {
	let map = {};
	map.trans = [];
	map.label = {};
	
	// Load columns
	// TODO: Move into getMappingFromSQL function or similar
	for (let col in data.columns) {
		let idx = data.columns[col].index;
		
		map.trans[idx] = col;
		map.trans[col] = idx;
		map.label[col] = col;
	}
	
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
