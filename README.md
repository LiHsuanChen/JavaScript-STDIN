JavaScript-STDIN
================

Handles STDIN in JavaScript

1. Listen STDIN and convert them into a string chunk

2. Create a new array, and put the string chunk into the array by spliting ("\n")

3. Create a new array if there is any field in the first array contains more than one standard input (by space)

Example:

STDIN

<code>1 2 5<br>
5<br>
9 9 9<br></code>

Array will be

[<br>
	[1, 2, 5],<br>
	[5],<br>
	[9, 9, 9]<br>
]<br>