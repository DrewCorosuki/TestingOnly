//GET ELEMENT BY ID USING UNDERSCORE
function _(id){
	return document.getElementById(id);
}
/*
	-- LOG IN --
	WHEN LOGGING IN PLEASE PUT AN ID ELEMNT ON THE SUBMIT BUTTON AND NAME IT WITH loginbtn
	eg: "<input type="button" id="loginbtn">
*/
//apendixes
//v=variable
//f=field_array
//i=counter
//e=error
//e_cnt = error counter
var v ={
	"un":"Username", 
	"pw":"Password",
	"fn":"First Name",
	"ln":"Last Name"
};
	
function emptyFieldCheck(field_array) //loop through array and check for empty field 
{
	var f=field_array; //this field array are the id's of the form supplied to an array
	var i = 0; //this will be use for indexing array
	var theForm=_("myform"); //the form 
	 //COUNT OF CHILDNODES OF THE FORM INCLUDING THE WHITESPACES "WHITESPACE WILL BE SKIPPED WHEN THE CODES RUN"
	for(i;i<f.length;i++)
	{
		//console.log(_(f[i]).value);
		if(_(f[i]).value == "")
		{
			errDiv=errDisp(_(f[i]).id);
			//insert the error inside the error div using insert before method 
			fieldBox = theForm.childNodes[i];
			fieldBox.insertBefore(errDiv,fieldBox.childNodes[0]);

		}
		else
		{
			//if all the field has a data is not empty then we have to validate each field using our own field validator 
		}
	}
}


function clearErr(id){
	_(id+"Err").innerHTML = "";
}



function setBlurFocus () {
    // var values = ["Username", "Password", "Firstname"];
    // var elements = [
        // document.getElementById('un'),
        // document.getElementById('pw'),
        // document.getElementById('fn')
    // ];

    // for(var i = elements.length; i--; ) {
        // elements[i].onfocus = hideErr("errtest");
    // }
	
	_("un").onfocus = hideErr("errtest");
}

function setValue(defaultValue) {
    return function(){this.value = defaultValue;};
}

function hideErr(target_id) {
    _(target_id).innerHTML = "";
}


////////////////////////ERROR DISPLAY///////////////////
function errDisp(target_id){
	var errDiv = document.createElement("span");
	var errMsg = "<b>X</b> ";
	errDiv.setAttribute("id",target_id+"Err");
	errDiv.setAttribute("class", "errDiv");
	errDiv.innerHTML = errMsg;
	return errDiv;
}
function deleteErrOnFocus(target_id){
	_(target_id+"Err").innerHTML="";
}












