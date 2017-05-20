/*
  ========================================
  Add task to list
  ========================================
*/
$("input[type='text']").on("keypress", function(event) {
	if(event.which === 13) {
		var task = $(this).val();
		$(this).val("");
		addTask(task);
	}
});

function addTask(task) {
	$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + task + "</li>");
}

/*
  ========================================
  Mark task as completed
  ========================================
*/
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

/*
  ========================================
  Remove task from list
  ========================================
*/
$("ul").on("click","li span", function(event) {
	event.stopPropagation();
	$(this).parent().fadeOut(500, function(){
		$(this.remove());
	});
});