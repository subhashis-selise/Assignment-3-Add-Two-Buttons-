
function cnt(id)
{
	// alert(id);
	console.log(count);
	if(count==0)
	{
		fst = document.getElementById(id).value;
		count++;
	}
	else if(count==1)
	{
		scnd = document.getElementById(id).value;
		add_number(fst,scnd);
		fst=-1,scnd=-1;
		count=0;
	}
	console.log(fst,scnd);
	//alert(count);
}
function add_number(ff,ss) {
	this.sum=parseInt(ff)+parseInt(ss);
	var button = document.createElement("button");
	button.innerHTML =this.sum;
	button.value =this.sum.toString();
	button.id=this.total;
	button.style.backgroundColor =colorAr[total%2];
	button.setAttribute("onclick","cnt(this.id)");
	document.body.appendChild(button);
	this.total++;
}