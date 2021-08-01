<?php
	$con=@mysqli_connect('gz-cdb-l4vkmi73.sql.tencentcdb.com:63168','root','yuan2017','invite')or die('error');
	$invite_people=$_GET[invite_people]+1;
$sql="UPDATE invite SET invite_people = '$invite_people'
WHERE id='$_GET[id]'";
mysqli_query($con,$sql)
?>