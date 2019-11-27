<html>
<head>

<title>project 1</title>
<style>

   .head1{position:relative;width:700;border:dashed #c2c7c1; background-color: #ededed;}
   .kids{position:absolute;width:110;right:100;top:30}
  #divim{position:absolute;margin-top:20;width:1000;text-align:center}
  .im{position:relative;width:500;text-align:center;margin-left:50}
  h1{color:lightblue;margin-top:50;margin-bottom:50}
  p{margin-left:30;color:#3bd1b5;font-size:40}
  #divbtn{width:1000;}
  
.b1{
  background-color: #008CBA;
  border: none;
  color: white;
  padding: 16px 32px;
  margin: 4px 2px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 12px;
  margin-top:30;
}

 .b1:hover {
  background-color: #7ac7eb;
}

#sub{
  background-color:#9a7e9c;
  border: double;
  color: white;
  padding: 8px 10px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
}
#n{
  background-color:white;
  border: solid #eaebe8;
  color: gray;
  padding: 10px 8px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
</head>

<body>

<div class=head1>
<h1><p><i><span style="color:#03dffc">Learn</span> <span style="color:#e8f005">The</span>
 <span style="color:#4386b0">English</span> <span style="color:#b04343">Letters</span></h1></i>
<img src="images/image.jpg" class="kids">
<p>number of letters:
<input type="text" id="n" placeholder="enter number" size=10>
<input type="submit" value="Generate" id="sub">
</p>
</div>
<div id="divbtn">

</div>

<div id="divim">

</div>
<script src="index.js"></script>
</body>
</html>
