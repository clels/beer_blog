$(document).ready(function() {
	var aTags = $("a#tag");
	handleTags(aTags);
	
	$("#menu").click(function() {
		$sideBar = $("#sidebar").hasClass('moveSide');
		if($sideBar){
			$("#content").removeClass("moveMain");
			$("#sidebar").removeClass("moveSide");
		}else{
			$("#content").addClass("moveMain");
			$("#sidebar").addClass("moveSide");
		}
	});
});