<?php

?>
<!doctype html>
<html>
<head>
<title>My Library | input checker, ajax loader | javascript</title>
<script src="js/input_checker.js"></script>
<style>
body{
	font-family:arial;
}
#body_wrapper{
	margin:0 auto;
	width:990px;
}
.inputField{
	border:1px solid #aaa;
	padding:5px 10px ;
	
	width:91%;
}
.form-inputs{
	max-width:250px;
	display:block;
	position:relative;
	margin-bottom:10px;
}
.input-sm{
	
}
#err_msg_box{
	border:1px solid #ccc;
	padding:10px;
	position:absolute;
}
#e_msg{
	border:1px solid #ccc;
	display:none;
	padding:10px;
}
.errDiv{
	position:absolute;
	left:92%;
	top:5px;
	color:#f01;
}
</style>
<script>

</script>
</head>
<body onload="setBlurFocus()">
<div id="body_wrapper">
<h4 id="lib_title">My Library | input checker, ajax loader | javascript</h4>
<h1 id='errtest'>sdfds</h1>
<div id="e_msg"></div>

<br/>
<form action="" onsubmit="return false" id="">

	<div id="myform"><div class="form-inputs">
			<input type="text" name="un" id="un" value="" class="inputField" onfocus=""/>
		</div><div class="form-inputs">
			<input type="text" name="pw" id="pw" value="" class="inputField"/>
		</div><div class="form-inputs">
		<input type="text" name="fn" id="fn" value="" class="inputField"/>
		</div><div class="form-inputs">
		<input type="text" name="ln" id="ln" value="" class="inputField"/>
		</div></div>
	<button name="" id="loginbtn"  onclick="emptyFieldCheck(['un','pw','fn','ln'])" >Test Now</button>
</form>
</div>

    

</body>
</html>