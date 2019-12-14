

<?php


 $dbhost = "localhost";
 $dbuser = "root";
 $dbpass = "root";
 $db = "store";


 $mysqli = new mysqli($dbhost, $dbuser,$dbpass,$db) or die("Connect failed: %s\n". $conn -> error); 
 
 
 
 if(isset($_GET['object'])){
	 
  //Convert it to an Associative Array
  $event = json_decode($_GET['object'], true);
 
    
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
 }

	
	
	if(isset($_GET['db'])){
	 
if ($result =$mysqli->query("select * from event")){
    $rows = array();
    if($result->num_rows > 0){
     while($row = $result->fetch_assoc()){
      array_push($rows, $row);
     }
    //Convert to JSON Before Sending to Client
    echo json_encode($rows);
   }
 }
 else{
  echo "No Data to Retrieve";
 }
}

 
 
 
    


  
 
 
?>

