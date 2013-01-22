$(document).ready(function() {
	var aTags = $("a#tag");
	handleTags(aTags);
	
	$("#menu").click(function() {
		$sideBar = $("#sidebar").hasClass('moveSide');
		if($sideBar){
			$("#footer").removeClass("moveMain");
			$("#content").removeClass("moveMain");
			$("#sidebar").removeClass("moveSide");
		}else{
			$("#footer").addClass("moveMain");
			$("#content").addClass("moveMain");
			$("#sidebar").addClass("moveSide");
		}
	});
});