// déclaration
function inc(a) {
	var res;
	res = a + 1;
	return res;
}


// programme principal 
var a, b;
a = 41;
b = inc(a);
b = inc(b);
console.log(a);
console.log(b);

