if (app.documents.length == 0) {  
	alert("No Open / Active Document Found");  
} else {
	var doc = app.activeDocument;
	for (var i = 1; i <= doc.artboards.length; i++) {
		var number = (i > 9) ? "" + i : "0" + i;
		doc.artboards[i-1].name = number;
	}
}
