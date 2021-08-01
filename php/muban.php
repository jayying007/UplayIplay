<?php
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
    function httpPost($data,$url) {  
	   $curl = curl_init($url);  
	curl_setopt($curl, CURLOPT_POST, 1);  
	curl_setopt($curl, CURLOPT_HEADER, 0);  
	curl_setopt($curl, CURLOPT_POSTFIELDS, $data);  
	   curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);  
	   curl_setopt($curl, CURLOPT_TIMEOUT, 500);  
	   // 为保证第三方服务器与微信服务器之间数据传输的安全性，所有微信接口采用https方式调用，必须使用下面2行代码打开ssl安全校验。  
	   // 如果在部署过程中代码在此处验证失败，请到 http://curl.haxx.se/ca/cacert.pem 下载新的证书判别文件。  
	   curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, true);  
	   curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 2);  
	   curl_setopt($curl, CURLOPT_URL, $url);  
	  
	   $res = curl_exec($curl);  
	   curl_close($curl);  
	  
	   return $res;  
	} 
	$formId=$_GET["formId"];
	$openid=$_GET["openid"];
	//$openid="oevYe5UwomI2p9rR0_x5ajXW9H3s";
	$templateid="JL8kLiO5O5HDZVxO52ON3YCcnfOxBLloN8G8cgRcbgY";

	$data = <<<END
	{
	  "touser": "{$openid}",  
	  "template_id": "{$templateid}", 
	  "page": "index",          
	  "form_id": "{$formId}",         
	  "data": {
	      "keyword1": {
	          "value": "已经有人接受你的邀请", 
	          "color": "#173177"
	      }, 
	      "keyword2": {
	          "value": "注意安全哟", 
	          "color": "#173177"
	      }
	  },
	  "emphasis_keyword": "keyword1.DATA" 
	}
END;
	$appid="wx2c78ebe3fb0f417d";
	$secret="a982fa502515417984bca8ab0eadd0b4";
	$tokenapi="https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={$appid}&secret={$secret}";
	$resultStr = httpGet($tokenapi);
	$arr=json_decode($resultStr,true);
	$token=$arr["access_token"];

	$templateapi="https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token={$token}";
	$res = httpPost($data,$templateapi);

?>