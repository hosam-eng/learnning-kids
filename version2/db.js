

	$.ajax({
		"type":"GET",
        "url":"index2.php",
        "data":{"db":""},
        "beforeSend":function(){
          console.log("sending to server...");
			
		},
        "success":function(response){
				
            console.log("server replayed");
			var $db =JSON.parse(response);
			$(".database").append("<table> <tr> <th>type</th> <th>target</th> <th>date</th> </tr>");
			
			for($i=0;$i<$db.length;$i++){	
			  	
			$(".database").append("<tr> <td>"+  $db[$i].type+ "</td> <td>"+ $db[$i].target +"</td> <td>"+
              			$db[$i].date +"</td></tr></table>");
			 
			  
			}
     
	}
})
