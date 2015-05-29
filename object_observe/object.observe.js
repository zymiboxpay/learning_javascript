var model = {};

Object.observe(model, function(changes) {
	// body...
	changes.forEach(function(change){
		console.log(change.type, change.name, change.oldValue);
	})
})

var todoModel = window.todoModel = {
	label: "Default",
	completed: false
};

function observer(changes){
	changes.forEach(function(change, i){
		console.log("property changed: ", change.name);
		console.log("type of  change: ", change.type);
		console.log("value before change: ", change.oldValue);
		console.log("value after change: ", change.object[change.name]);
		console.log(change);
	})
}


Object.observe(todoModel, observer, /*optAcceptList*/['update']);

todoModel.label = "Buy some more milk";

todoModel.completed = "2015/05/29";

Object.unobserve(todoModel, observer);

