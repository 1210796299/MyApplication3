/*************************************

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/user\.chinayanghe\.com\/gateway\/api-integral-mall\/commodity\/getInventoryById url script-response-body https://raw.githubusercontent.com/mxsolid/MyApplication3/master/MyScript.js

[mitm]
hostname = user.chinayanghe.com

*************************************/


var body = $response.body;

body = body.replace(/\"resultBody":\d+/g, '\"resultBody":10');
console.log(body)

$done({body});
