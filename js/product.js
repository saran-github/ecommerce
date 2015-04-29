var Product = function(){
	
	var addProductValidate = function(event){
		var username = $("#name").val();
		var password = $("#img").val();
		$("#name_error").html("");
		$("#img_error").html("");
		if(username == "")
		{
			$("#name_error").html("Please provide a name.");
			event.preventDefault();
			return false;
		}
		if(password == "")
		{
			$("#img_error").html("Please provide a image.");
			event.preventDefault();
			return false;
		}		
		
	}
	var editProductValidate = function(event){
		var username = $("#name").val();
		var password = $("#img").val();
		$("#name_error").html("");
		$("#img_error").html("");
		if(username == "")
		{
			$("#name_error").html("Please provide a name.");
			event.preventDefault();
			return false;
		}
		if(password == "")
		{
			$("#img_error").html("Please provide a image.");
			event.preventDefault();
			return false;
		}		
		
	}
	return {
		addProductValidate : addProductValidate,
		editProductValidate : editProductValidate

	};
}();

