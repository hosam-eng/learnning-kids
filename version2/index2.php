

<?php


 $dbhost = "localhost";
 $dbuser = "root";
 $dbpass = "root";
 $db = "store";


 $mysqli = new mysqli($dbhost, $dbuser,$dbpass,$db) or die("Connect failed: %s\n". $conn -> error); 
 
 
 
 if(isset($_GET['object'])){
	 
  //Convert it to an Associative Array
  $event = json_decode($_GET['object'], true);
 }
    
	// In Case of Multiple Objects!!
  // Looping through the generated array of associative arrays
	
	if($event)
	{
	for($i = 0; $i < count($event); $i++){
		$str =array();
		$c=0;
      foreach ($event[$i] as $key => $value) {
      	$str[$c]=$value;
          $c++;
          }
if ($mysqli->query("Insert Into event values('$str[0]','$str[1]','$str[2]')") === TRUE) {
    printf("values are inserted\n");
}
        
		
	  }
	}
	else
		echo "no event sent yet";
	


 
  

    // $sql = "select * from event";
// $q=mysqli_query($sql);	//$q=$con->query($sql);
// if(!$q)
	// echo mysqli_error();
  	
 
 
?>

<?php
  


// if(isset($_GET['load']))
// {
	// //echo "the response of server is ".$_GET['load'];
// }

// if(isset($_GET['unload']))
// {
	// //echo "<br>"."the response of server is ".$_GET['unload'];
// }

// if(isset($_GET['btngenerate']))
// {
	// //echo "<br>"."the response of server is ".$_GET['btngenerate'];
// }

// if(isset($_GET['btnalphabet']))
// {
	// //echo "<br>"."the response of server is ".$_GET['btnalphabet'];
// }

?>