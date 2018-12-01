{
	// Fake data from https://www.mockaroo.com/
	const data = [{ "id": 1, "name": "Ronstring", "msrp": "$112.15", "desc": "consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac" }, { "id": 2, "name": "Y-Solowarm", "msrp": "$44.60", "desc": "et ultrices posuere cubilia curae donec pharetra magna" }, { "id": 3, "name": "Latlux", "msrp": "$22.86", "desc": "ligula suspendisse ornare consequat lectus in est risus" }, { "id": 4, "name": "Tampflex", "msrp": "$93.44", "desc": "suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris" }, { "id": 5, "name": "Hatity", "msrp": "$134.62", "desc": "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan" }, { "id": 6, "name": "Matsoft", "msrp": "$30.70", "desc": "et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna" }, { "id": 7, "name": "Vagram", "msrp": "$60.60", "desc": "purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat" }, { "id": 8, "name": "Tresom", "msrp": "$95.60", "desc": "ultrices posuere cubilia curae duis faucibus accumsan odio" }, { "id": 9, "name": "Otcom", "msrp": "$33.59", "desc": "rhoncus aliquet pulvinar sed nisl nunc rhoncus" }, { "id": 10, "name": "Namfix", "msrp": "$35.05", "desc": "sit amet nulla quisque arcu" }, { "id": 11, "name": "Home Ing", "msrp": "$115.54", "desc": "cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus" }, { "id": 12, "name": "Vagram", "msrp": "$46.58", "desc": "congue risus semper porta volutpat quam" }, { "id": 13, "name": "Tin", "msrp": "$98.79", "desc": "ipsum dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non" }, { "id": 14, "name": "Job", "msrp": "$105.73", "desc": "sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti" }, { "id": 15, "name": "Tin", "msrp": "$93.21", "desc": "eu tincidunt in leo maecenas pulvinar lobortis" }, { "id": 16, "name": "Andalax", "msrp": "$129.91", "desc": "sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a" }, { "id": 17, "name": "Zaam-Dox", "msrp": "$89.57", "desc": "eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi" }, { "id": 18, "name": "Span", "msrp": "$47.63", "desc": "quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in" }, { "id": 19, "name": "Redhold", "msrp": "$52.73", "desc": "quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante" }, { "id": 20, "name": "Subin", "msrp": "$93.81", "desc": "aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis" }, { "id": 21, "name": "Gembucket", "msrp": "$76.66", "desc": "ut blandit non interdum in ante vestibulum ante ipsum primis in" }, { "id": 22, "name": "Cookley", "msrp": "$17.52", "desc": "blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus" }, { "id": 23, "name": "Duobam", "msrp": "$11.26", "desc": "massa volutpat convallis morbi odio odio" }, { "id": 24, "name": "Holdlamis", "msrp": "$17.47", "desc": "gravida sem praesent id massa id nisl venenatis lacinia aenean sit" }, { "id": 25, "name": "Hatity", "msrp": "$41.07", "desc": "nisl duis bibendum felis sed interdum" }, { "id": 26, "name": "Transcof", "msrp": "$99.25", "desc": "ut nulla sed accumsan felis ut at dolor quis odio" }, { "id": 27, "name": "Tin", "msrp": "$99.15", "desc": "morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum" }, { "id": 28, "name": "Home Ing", "msrp": "$14.27", "desc": "molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea" }, { "id": 29, "name": "Fintone", "msrp": "$109.30", "desc": "amet sapien dignissim vestibulum vestibulum" }, { "id": 30, "name": "Sonair", "msrp": "$56.26", "desc": "duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate" }, { "id": 31, "name": "Regrant", "msrp": "$34.68", "desc": "integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id" }, { "id": 32, "name": "Fintone", "msrp": "$28.03", "desc": "nisi vulputate nonummy maecenas tincidunt lacus at" }, { "id": 33, "name": "Fintone", "msrp": "$131.43", "desc": "donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio" }, { "id": 34, "name": "Sub-Ex", "msrp": "$119.54", "desc": "ullamcorper purus sit amet nulla" }, { "id": 35, "name": "Namfix", "msrp": "$48.79", "desc": "maecenas tincidunt lacus at velit" }, { "id": 36, "name": "Namfix", "msrp": "$22.77", "desc": "auctor sed tristique in tempus sit amet sem" }, { "id": 37, "name": "Namfix", "msrp": "$75.83", "desc": "cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam" }, { "id": 38, "name": "Biodex", "msrp": "$77.18", "desc": "parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum" }, { "id": 39, "name": "Daltfresh", "msrp": "$61.80", "desc": "sed sagittis nam congue risus semper porta volutpat quam" }, { "id": 40, "name": "Bitwolf", "msrp": "$104.16", "desc": "id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit" }, { "id": 41, "name": "Solarbreeze", "msrp": "$97.38", "desc": "ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo" }, { "id": 42, "name": "Cookley", "msrp": "$84.74", "desc": "rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede" }, { "id": 43, "name": "Ronstring", "msrp": "$17.54", "desc": "faucibus orci luctus et ultrices posuere cubilia curae duis" }, { "id": 44, "name": "Tresom", "msrp": "$34.65", "desc": "proin interdum mauris non ligula pellentesque" }, { "id": 45, "name": "Zamit", "msrp": "$121.63", "desc": "hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida" }, { "id": 46, "name": "Zaam-Dox", "msrp": "$32.25", "desc": "justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut" }, { "id": 47, "name": "It", "msrp": "$104.20", "desc": "a feugiat et eros vestibulum ac" }, { "id": 48, "name": "Cardguard", "msrp": "$120.14", "desc": "ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed" }, { "id": 49, "name": "Holdlamis", "msrp": "$64.18", "desc": "in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae" }, { "id": 50, "name": "Cardify", "msrp": "$75.84", "desc": "pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate" }];
	
	// Setup column mapping
	let map = {};
	map.trans = [];
	map.label = {};
	
	// Simulate the default mapping we would get from mssql
	map.trans[0] = "id";
	map.trans["id"] = 0;
	map.label["id"] = "id";
	
	map.trans[1] = "name";
	map.trans["name"] = 1;
	map.label["name"] = "name";
	
	map.trans[2] = "msrp";
	map.trans["msrp"] = 2;
	map.label["msrp"] = "msrp";
	
	map.trans[3] = "desc";
	map.trans["desc"] = 3;
	map.label["desc"] = "desc";
	
	// Customize the labels
	map.label["id"] = "Id";
	map.label["name"] = "Name";
	map.label["msrp"] = "MSRP";
	map.label["desc"] = "Description";
	
	// Set the mapping
	setMapping(map);
	
	// Add columns
	for (let i = 0; i < map.trans.length; ++i) {
		addColumn(map.label[map.trans[i]]);
	}
	
	// Add rows
	for (let i = 0; i < data.length; ++i) {
		addRow(data[i]);
	}
}
