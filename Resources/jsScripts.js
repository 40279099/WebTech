	function helloFunction()
	{
		alert('Hello Napier');
	}

	function addMessage()
	{
		document.getElementById("outputDemo").innerHTML += "<p>HELLO WORLD</p>";
	}
	
	function changeColour()
	{
		if(current === "white")
			current = "blue";
		else
			current = "white";
		
		document.getElementById("whitePara").style.color=current;
	}