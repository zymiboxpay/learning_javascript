var model = {};

Object.observe(model, function(changes) {
	// body...
	changes.forEach(function(change){
		console.log(change.type, change.name, change.oldValue);
	})
})