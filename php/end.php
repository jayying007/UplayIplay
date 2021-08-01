<?php
$con=@mysqli_connect('gz-cdb-l4vkmi73.sql.tencentcdb.com:63168','root','yuan2017','invite')or die('error');
mysqli_query($con,"DELETE FROM invite WHERE id='$_GET[id]'");
?>