
 store_event=window.localStorage;


//store_event.clear();
function store(key,events)
{
	this.key=key;
	this.events=function(){
		 var old = localStorage.getItem(key);
    if(old === null) 
		 store_event.setItem(key,events);
	 else
    store_event.setItem(key,old +"&"+ events);
	}
}


          

   setInterval(function(){	
 
 	   if(localStorage.length !=0)
	   {
	   function ob(type,target,date)
	   {
		   this.type=type;
		   this.target=target;
		    this.date=date;
	   }
          var arr=[];
          var arr_object=[];
    
	  for(var i=0;i<localStorage.length;i++)
		 {
			arr[i]=localStorage.getItem(localStorage.key(i));		
		 }
		 
		  if(arr.length>0)
		  {
		for(var i=0; i<arr.length;i++)
		{

			var sp1=arr[i].split("&");
			for(var j=0;j<sp1.length;j++)
			{
			var sp2=sp1[j].split(",");
			var create_ob=new ob(sp2[0],sp2[1],sp2[2]);
		     arr_object.push(create_ob);
			 
		}}
		  }
		

	 $.ajax({
		"type":"GET",
        "url":"index2.php",
        "data":{"object":JSON.stringify(arr_object)}	,
        "beforeSend":function(){
          console.log("sending to server...");
		  console.log(arr_object);
			
		},
        "success":function(response){
				
            console.log("server replayed");
			console.log(response);
            store_event.clear();			
        }		
				 
  }); 
		 
	   }
else 
	console.log("localStorage is empty");	  
 },5000);

   
  
  //hanle load event
  window.addEventListener("load", function(e){
	var e_load=	e.type+","+ e.target+","+new Date();
	var e1=new store("load",e_load);
	 e1.events();	
  });

//hanle unload event
  window.addEventListener("unload", function(e){
	  
	var e_unload=	e.type+","+ e.target+","+new Date(); 

	var e1=new store("unload",e_unload);
	 e1.events();
	
  });
	



var btn =document.getElementById("sub");

btn.addEventListener("click",random_range);

btn.addEventListener("click",function(e)
{
//hanle event for botton generate 
     var e_btngenerate=	e.type+","+ e.target.value+","+new Date();
	 var e1=new store("click",e_btngenerate);
     	 e1.events();
});
  
  function random_range() {
	  	 	 
   var txt=document.getElementById("n");
   var num=txt.value;
   var result= '';
   var characters= 'abcdefghijklmnopqrstuvwxyz';
   var charactersLength = characters.length;
	  if(num>0 && num<27)
	  {
		  document.getElementById("error").innerHTML=null;
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
	else
		document.getElementById("error").innerHTML="number must be between 1 to 26, try again";
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
   var e_btnalphabet=e.type+","+ e.target.value+","+new Date();

	var e1=new store("click",e_btnalphabet);
     	 e1.events();
	 
 
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

	
				 
  
	
	




	
