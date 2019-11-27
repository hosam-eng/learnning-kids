
store_event=window.localStorage;


setInterval(function(){store_event.clear();},5000);
  //hanle load event
  window.addEventListener("load", function(e){
	  
	var e_load=e.type+", "+ e.target +","+new Date();
	var x=store_event.length +1;
	 store_event.setItem(x,e_load);
	
  });

//hanle unload event
  window.addEventListener("unload", function(e){
	  
	var e_unload=e.type+", "+ e.target +","+new Date();
	var x=store_event.length +1;
	 store_event.setItem(x,e_unload);
	
  });
	



var btn =document.getElementById("sub");

btn.addEventListener("click",random_range);

btn.addEventListener("click",function(e)
{
//hanle event for botton generate 
     var e_btngenerate=e.type+", "+ e.target +","+new Date();
	 var x=store_event.length +1;
	 store_event.setItem(x,e_btngenerate);
	
});
  
  function random_range() {
	  	 	 
   var txt=document.getElementById("n");
   var num=txt.value;
   var result= '';
   var characters= 'abcdefghijklmnopqrstuvwxyz';
   var charactersLength = characters.length;
	  if(num>0 && num<27)
	  {
   for ( var i = 0; i < num; i++ ) 
   {
	  var s=characters.charAt(Math.floor(Math.random() * charactersLength));
	   if(result.length !=0 && result.indexOf(s)!=-1)
	   {
	   num++;
	   }
	   else
	   {
      result+=s;
    
   create_btns(result);  
        }
      }
    }
  } 
   function create_btns(result)
   {
	   
	   var div=document.getElementById("divbtn");
	   if(div.innerHTML !=null)
		div.innerHTML=null;
       for(var i=0;i<result.length;i++)
	   {
		
	  // 1. Create the button
var button = document.createElement("input");
  div.appendChild(button);
button.setAttribute("type","submit");
button.setAttribute("value",result[i]);
button.setAttribute("class","b1");

//add event botton alphabet
button.addEventListener("click",function(e){
	
	// hanle event for botton alphabet 
   var e_btnalphabet=e.type+", "+ e.target +","+new Date();
   var x=store_event.length +1;
	 store_event.setItem(x,e_btnalphabet);
	
	 
		var di=document.getElementById("divim");
		var image=document.createElement("img");
		
		
		if(di.innerHTML !=null)
		{
		di.innerHTML=null;
		di.appendChild(image);
		image.src="images/"+e.target.value+".jpg ";
		image.setAttribute("style","width:600;height:300; border: 4px double #375380;border-radius: 5px;");
		}
		else
		{
			di.appendChild(image);
		image.src="images/"+e.target.value+".jpg ";
		image.setAttribute("style","width:600;height:300; border: double #375380;border-radius: 5px;");
		}
		
	   });

	}  
}

