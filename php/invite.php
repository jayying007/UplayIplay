<?php
	$con=@mysqli_connect('gz-cdb-l4vkmi73.sql.tencentcdb.com:63168','root','yuan2017','invite')or die('error');
	
$sql="INSERT INTO invite (sport,sex,age,adress,latitude,longitude,time,limit_people,nickName,avatarUrl) 
VALUES ('$_GET[sport]','$_GET[sex]','$_GET[age]','$_GET[adress]','$_GET[latitude]','$_GET[longitude]','$_GET[time]','$_GET[limit]','$_GET[nickName]','$_GET[avatarUrl]')";
mysqli_query($con,$sql)
?>