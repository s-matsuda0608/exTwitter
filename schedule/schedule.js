function dispOnce(id){
	removeall();
	var tr = document.getElementById("once_"+id);
	var detail = document.getElementById("detail");
	var childs = tr.children;
	
	var new_tr = document.createElement('tr'); 
	new_tr.innerHTML="<td>本文</td><td>投稿日時</td><td>投稿状況</td>"
	detail.appendChild(new_tr)
	for(var i=0;i<childs.length;i++){
		tweets = childs[i].children;
		var new_tr = document.createElement('tr'); 
		for(var j=0;j<tweets.length;j++){
			var new_td = document.createElement('td'); 
			new_td.innerHTML=childs[i].children[j].firstChild.nodeValue;
			new_tr.appendChild(new_td); 
		}
		detail.appendChild(new_tr); 
	}
	detail.style.visibility="visible";
}

function dispRoutine(id){
	removeall();
	var tr = document.getElementById("routine_"+id);
	var detail = document.getElementById("detail");
	var childs = tr.children;
	
	var new_tr = document.createElement('tr'); 
	new_tr.innerHTML="<td>タイトル</td><td>本文</td><td>開始日</td><td>終了日</td>"
	detail.appendChild(new_tr)
	for(var i=0;i<childs.length;i++){
		tweets = childs[i].children;
		var new_tr = document.createElement('tr'); 
		for(var j=0;j<tweets.length;j++){
			var new_td = document.createElement('td'); 
			new_td.innerHTML=childs[i].children[j].firstChild.nodeValue;
			new_tr.appendChild(new_td); 
		}
		detail.appendChild(new_tr); 
	}
	detail.style.visibility="visible";
}


function removeall(){
	var detail = document.getElementById("detail");
	while (child = detail.lastChild) detail.removeChild(child);
}


function getOnceDetails(id){
	var tr = document.getElementById("once_"+id);
	var childs = tr.children;
	var str="単発ツイート："+childs.length+"件\n";
	for(var i=0;i<childs.length;i++){
		detail = childs[i].children;
		str = str + "-*-*-*-"+str+(i+1)+"件目-*-*-*-\n"
		for(var j=0;j<detail.length;j++){
			str=str+detail[j].firstChild.nodeValue+"\n";
		}
	}
	str = str+"-*-*-*-*-*-*-\n";
	alert(str);
	
}

function getRoutineDetails(id){
	var tr = document.getElementById("routine_"+id);
	var childs = tr.children;
	var str="定期ツイート："+childs.length+"件\n";
	for(var i=0;i<childs.length;i++){
		detail = childs[i].children;
		str = str + "-*-*-*-"+str+(i+1)+"件目-*-*-*-\n"
		for(var j=0;j<detail.length;j++){
			str=str+detail[j].firstChild.nodeValue+"\n";
		}
	}
	str = str+"-*-*-*-*-*-*-\n";
	alert(str);
	
}