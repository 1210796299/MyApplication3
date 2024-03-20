/*************************************

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/user\.chinayanghe\.com\/gateway\/api-integral-mall\/commodity\/getInventoryById url script-response-body https://raw.githubusercontent.com/mxsolid/RefreshChStock/master/wacaijizhang.js?token=GHSAT0AAAAAACMH4HQFWUPSFSAUSMRFT2HWZP2NFLA

[mitm]
hostname = user.chinayanghe.com

*************************************/


var body = $response.body;

body = body.replace(/\"resultBody":\d+/g, '\"resultBody":10');


$done({body});
