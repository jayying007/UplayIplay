<?php
$time=date("G:i:s");
$con=@mysqli_connect('gz-cdb-l4vkmi73.sql.tencentcdb.com:63168','root','yuan2017','invite')or die('error');
mysqli_query($con,"DELETE FROM invite WHERE time<='$time'");
$result = mysqli_query($con,"SELECT  * FROM invite WHERE nickName='$_GET[nickName]' and avatarUrl='$_GET[avatarUrl]' ORDER BY date DESC");
while($row = mysqli_fetch_array($result))
  { 
  $array[]=$row;
  }
echo json_encode($array);
?>