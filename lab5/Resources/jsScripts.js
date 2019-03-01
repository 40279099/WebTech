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
	
	function encode()
	{
		var plain_text = document.getElementById("message").value;
		var cypher_text = [];
		var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		
		for(var i = 0; i<plain_text.length; i++)
		{
			input = alphabet.indexOf(plain_text[i]);
			if(input == -1)
			{
				cypher_text.push(plain_text[i]);
			}
			else
			{
				var coded = (input +13)%26;
				var letter = alphabet[coded];
				cypher_text.push(letter);
			}
		}
		document.getElementById("output").innerHTML = cypher_text.join("");
	}