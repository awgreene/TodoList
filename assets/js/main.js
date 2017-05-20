/*
  ========================================
  Add task to list
  ========================================
*/
$("input[type='text']").on("keypress", function(event) {
	if(event.which === 13) {
		var task = $(this).val();
		addTask(task);
		$(this).val("");
		console.log(task);
	}
});

function addTask(task) {
	$("ul").append("<li><span>X</span> " + task + "</li>");
}

/*
  ========================================
  Mark task as completed
  ========================================
*/
$("li").on("click", function() {
	$(this).toggleClass("completed");
});

/*
  ========================================
  Remove task from list
  ========================================
*/
$("li span").on("click", function(event) {
	event.stopPropagation();
	$(this).parent().fadeOut(500, function(){
		$(this.remove());
	});
});