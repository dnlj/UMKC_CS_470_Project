addColumn("Id");
addColumn("Value 1");
addColumn("Value 2");
addColumn("Value 3");

setDeleteFunction(row => {
	pool.request()
		.input("id", row[0])
		.query(`DELETE FROM example_table_2 WHERE id=@id`);
});

setAddFunction((row) => {
	console.log(row);
	// TODO: it would be better if we could associate columns with values instead of doing this manually.
	pool.request()
		.input("id", row[0])
		.input("value1", row[1])
		.input("value2", row[2])
		.input("value3", row[3])
		.query(`
			INSERT INTO example_table_2 (id, value1, value2, value3)
				VALUES (@id, @value1, @value2, @value3)
		`);
});

pool.query("SELECT * FROM example_table_2").then(res => {
	return res.recordset;
}).then(data => {
	// NOTE: Could actually also load columns from data.columns. Although they wouldn't be "pretty".
	for (let i = 0; i < data.length; ++i) {
		let rd = data[i];
		
		addRow([
			rd.id,
			rd.value1,
			rd.value2,
			rd.value3,
		]);
	}
});
