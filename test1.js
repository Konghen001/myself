/*
[rewrite_local]
^https:\/\/(chatai\.qupeiyin\.com\/member\/index|www\.longstargpt\.com\/member\/index\/chatgpt\/chat\/sseV2|chatai\.qupeiyin\.com\/lesson\/getLessons) url script-response-body https://raw.githubusercontent.com/Konghen001/myself/main/test1.js

[mitm] 

hostname = chatai.qupeiyin.com

*/

let obj = JSON.parse($response.body);
if (obj.data && obj.data.lessons) {
  obj.data.lessons.is_lock = "0";
  obj.data.lessons.is_audition = "1";
  $done({
    body: JSON.stringify(obj)
  });
} else if (obj.data) {
  obj.data.nickname = "helloWorld";
  obj.data.vip_text = "永久会员";
  obj.data.vip_endtime = "98799879987";
  obj.data.vip_button_text = "successful";
  obj.data.is_vip = "1";
  obj.data.vip = true;
  obj.data.total_free_second = "6000";
  obj.data.free_second = "4800";
  obj.data.used_second = "0";
  $done({
    body: JSON.stringify(obj)
  });
} else {
  $done({});
}
