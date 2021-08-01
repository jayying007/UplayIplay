 <?php
 	include('./connect.php');
 

	// some code
	$username=$_GET['username'];
	$content=$_GET['content'];	

	if(strlen($username)<2){
		echo '用户名不能小于两个字';
		exit;
	}
	if(strlen($content)<1){
		echo '内容不能为空';
		exit;
	}
	$sql="insert into guestbook(username,content) values('$username','$content')";
	echo $sql;
	$r=mysqli_query($conn,$sql);

	if($r){
		echo '发表成功';
		echo '<a href="./index.php">回到首页</a>';
	}else{
		echo '发表失败';
		echo mysqli_error($conn);
	}
--------------------------分割-----------------------------
<?php
	//header('Content-Type:text/html; charset=utf-8');
	$conn = @mysqli_connect('gz-cdb-kgyjnvo5.sql.tencentcdb.com:63186','root','sjk11725','book') or die('');
	mysqli_query($conn,'set names utf8');
	
--------------------------分割-----------------------------
<?php
    /**
     * 一段简单的代码
     *  微信登录：获取调用接口获取登录凭证（code）进而换取用户登录态信息，包括用户的唯一标识（openid）
     */

    $code =$_GET['code'];
    $appid="wx0814d796500aa841";//微信开发者appId
    $secret="f5728c0f2bbf6d948edb71022152eee7";// appId秘钥

    $api="https://api.weixin.qq.com/sns/jscode2session?appid={$appid}&secret={$secret}&js_code={$code}&grant_type=authorization_code"; //调用官方接口

    //封装方法：从接口中获取内容
    function httpGet($url){
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_TIMEOUT,500);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, true);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST , true);
        curl_setopt($curl, CURLOPT_URL, $url);
        $res = curl_exec($curl);
        curl_close($curl);
        return $res;
    }
    $str = httpGet($api); //执行方法：从接口中获取内容（json格式）
    echo $str;
?>

<?php
	//header('Content-Type:text/html; charset=utf-8');
	$conn = @mysqli_connect('gz-cdb-kgyjnvo5.sql.tencentcdb.com:63186','root','sjk11725','info') or die('error');
	mysqli_query($conn,'set names utf8');
	
<?php
 	include('./connect.php');
 
	
	/* some code
     *  age:e.detail.value.age,
        detail:e.detail.value.detail,
        location:e.detail.value.location,
        sex:e.detail.value.sex,
        sport:e.detail.value.sport,
        latitude:latitude,
        longitude:longitude
    */
	$age=$_GET['age'];
	$detail=$_GET['detail'];
	$location=$_GET['location'];
	$sex=$_GET['sex'];
	$sport=$_GET['sport'];
	$latitude=$_GET['latitude'];
	$longitude=$_GET['longitude'];
	$nickName=$_GET['nickName'];
	$avatarUrl=$_GET['avatarUrl'];
	$state=$_GET['state'];

	/*if(strlen($username)<2){
		echo '用户名不能小于两个字';
		exit;
	}
	if(strlen($content)<1){
		echo '内容不能为空';
		exit;
	}*/
	$sql="insert into detail(age,sex,detail,location,sport,latitude,longitude,nickName,avatarUrl,state) values('$age','$sex','$detail','$location','$sport','$latitude','$longitude','$nickName','$avatarUrl','$state')";
	echo $sql;
	$r=mysqli_query($conn,$sql);

	if($r){
		echo '邀请成功';
		echo '<a href="./index.php">回到首页</a>';
	}else{
		echo '邀请失败';
		echo mysqli_error($conn);
	}
	
<?php
 	include('./connect.php');

	$sql='select * from detail order by intime desc';
		$rs=mysqli_query($conn,$sql);
		
		while($row=mysqli_fetch_object($rs)){
            $arr[]=$row;
        //echo json_encode($row);
        //var_dump($row);
        }
		echo json_encode($arr);


 ?>
 
  <?php
 	include('./connect.php');
 ?>
<!DOCTYPE HTML>
<html>
<head>
	<meta charset="utf-8"/>
	<title>留言板。。。</title>
</head>

<body>
	<form action="save.php" method="GET">
		<p>用户名：<input type="text" name="username"/></p>
		<p>留言：<textarea name="content" cols="80" rows="10"></textarea></p>
		<p><input type="submit" value="马上留言"/></p>
	</form>
	<hr/>

	<?php
		$sql='select * from guestbook';
		$rs=mysqli_query($conn,$sql);
		while($row=mysqli_fetch_assoc($rs)){
			echo "<p>{$row['id']}#{$row['username']}于{$row['intime']}说:<br/>{$row['content']}";
		}
	?>
</body>
</html>

 <?php
 	include('./connect.php');
 

	// some code
	$username=$_GET['username'];
	$content=$_GET['content'];	

	if(strlen($username)<2){
		echo '用户名不能小于两个字';
		exit;
	}
	if(strlen($content)<1){
		echo '内容不能为空';
		exit;
	}
	$sql="insert into guestbook(username,content) values('$username','$content')";
	echo $sql;
	$r=mysqli_query($conn,$sql);

	if($r){
		echo '发表成功';
		echo '<a href="./index.php">回到首页</a>';
	}else{
		echo '发表失败';
		echo mysqli_error($conn);
	}
	
<?php
 	include('./connect.php');

	$sql='select * from guestbook order by intime desc';
		$rs=mysqli_query($conn,$sql);
		
		while($row=mysqli_fetch_object($rs)){
            $arr[]=$row;
        //echo json_encode($row);
        //var_dump($row);
        }
		echo json_encode($arr);


 ?>
 
