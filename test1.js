/*
GitHub 1.142.1
除了Ai功能，其他功能都可用

[rewrite_local]
https://api.github.com/graphql url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/Github.js

[mitm]
hostname = api.github.com

*/

let obj = JSON.parse($response.body);
if (obj.data && obj.data.lessons) {
  obj.data.lessons.is_lock = "0";
  obj.data.lessons.is_audition = "1";
 

  $done({
    body: JSON.stringify(obj)
  });
} else {
  $done({});
}
