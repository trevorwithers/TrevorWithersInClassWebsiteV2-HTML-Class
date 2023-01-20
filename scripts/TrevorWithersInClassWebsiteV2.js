//Trevor Withers
function todaysDate()
{
    
    var rightNow2 =  new Date();
    var theMonth = 0, todaysDate = "", monthNumber; 
    monthNumber = rightNow2.getMonth() + 1;
    theMonth = getMonthName(monthNumber); 
    todaysDate = theMonth + ' ' + rightNow2.getDate() + ', ' + rightNow2.getFullYear();
    document.getElementById("theDate").innerHTML = todaysDate;
    

    /*var rightNow1 =  new Date();
	document.getElementById("theDate").innerHTML = rightNow1;*/
}
function getMonthName(month)
{
    var mName;
	switch(month)
	{
		case 1:  mName="January"; break;
		case 2:  mName="February"; break;	
		case 3:  mName="March"; break;
		case 4:  mName="April"; break;
		case 5:  mName="May"; break;
		case 6:  mName="June"; break;
		case 7:  mName="July"; break;
		case 8:  mName="August"; break;	
		case 9:  mName="September"; break;
		case 10: mName="October"; break;	
		case 11: mName="November"; break;	
		case 12: mName="December"; break;				
	}
	return(mName);
}
var onOff = 1;
function changeTableFunction()
{
    if (onOff == 1)
    {
        onOff = 2;
        document.getElementById("changeTable").style.color = "green";
        document.getElementById("changeTable").style.borderWidth = "0.3em";
        document.getElementById("changeTable").style.borderStyle = "dashed";
        document.getElementById("changeTable").style.borderColor = "yellow";
    }
    else
    {
        onOff = 1;
        document.getElementById("changeTable").style.color = "black";
        document.getElementById("changeTable").style.borderWidth = "0.1em";
        document.getElementById("changeTable").style.borderStyle = "solid";
        document.getElementById("changeTable").style.borderColor = "#555658";
    }
    
}
function jumpToTop()
{
    window.scrollTo(0, 0);
}