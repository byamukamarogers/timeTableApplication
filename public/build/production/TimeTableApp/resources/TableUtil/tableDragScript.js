function allowDrop(ev) {
	ev.preventDefault();
	ev.dataTransfer.dropEffect = "copy";
	ev.dataTransfer.effectAllowed ="copy";
  }
  
  function drag(ev) {	  
	ev.dataTransfer.effectAllowed = "copy";   
	const canvas = document.createElement("canvas");
	canvas.width = canvas.height = 50;  
	const ctx = canvas.getContext("2d");
	ctx.fillText(ev.target.innerHTML,10,25);	
	const dt = ev.dataTransfer;
	dt.setData("text/plain", ev.target.id);
	dt.setDragImage(ctx, 25, 25);
  }
  
  function drop(ev) {
	ev.preventDefault();
	ev.dataTransfer.dropEffect = "copy";  
	var data = ev.dataTransfer.getData("text/plain");
	ev.target.appendChild(document.getElementById(data));
	console.log(document.getElementById(data));
  }