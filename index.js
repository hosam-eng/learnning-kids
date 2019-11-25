
store_event=window.localStorage;


  //hanle load event
  window.addEventListener("load", function(e){
	  
	var e_load=e.type+", "+ e.target +","+new Date();
	 store_event.setItem("load",e_load);
  });

//hanle unload event
  window.addEventListener("unload", function(e){
	  
	var e_unload=e.type+", "+ e.target +","+new Date();
	 store_event.setItem("unload",e_unload);
  });
	



var btn =document.getElementById("sub");

btn.addEventListener("click",random_range);

btn.addEventListener("click",function(e)
{
//hanle event for botton generate 
     var e_btngenerate=e.type+", "+ e.target +","+new Date();
	 store_event.setItem("clickOnbtngen",e_btngenerate);
});
  
  function random_range() {
	  	 	 
   var txt=document.getElementById("n");
   var num=txt.value;
   var result= '';
   var characters= 'abcdefghijklmnopqrstuvwxyz';
   var charactersLength = characters.length;
	  if(num>0 && num<27)
	  {
   for ( var i = 0; i < num; i++ ) {
      result+= characters.charAt(Math.floor(Math.random() * charactersLength));	   
   } 
   create_btns(result);  
}
  }

  
   function create_btns(result)
   {
	   
       for(var i=0;i<result.length;i++)
	{
	  // 1. Create the button
var button = document.createElement("input");
button.setAttribute("type","submit");
button.setAttribute("value",result[i]);
button.setAttribute("class","b1");


//insert botton in page
var body=document.getElementsByTagName("body")[0];
body.appendChild(button);


//add event botton alphabet
button.addEventListener("click",function(e){
	
	// hanle event for botton alphabet 
   var e_btnalphabet=e.type+", "+ e.target +","+new Date();
	 store_event.setItem("clickOnbtnalpha",e_btnalphabet);
	 
	 
		var di=document.getElementById("divim");
		var image=document.createElement("img");
		
		
		if(di.innerHTML !=null)
		{
		di.innerHTML=null;
		di.appendChild(image);
		image.src="images/"+e.target.value+".jpg ";
		image.setAttribute("style","width:600;height:300;");
		}
		else
		{
			di.appendChild(image);
		image.src="images/"+e.target.value+".jpg ";
		image.setAttribute("style","width:600;height:300;");
		}
		
	   });

	}  
}

 
