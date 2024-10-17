/*
[rewrite_local]
^https:\/\/billing\.chaton\.ai\/v1\/subscriptions url script-response-body https://raw.githubusercontent.com/Konghen001/myself/main/aaa.js

[mitm] 

hostname = billing.chaton.ai

*/


$done({
  body: JSON.stringify({
    "subscriptions": [
      {
        "id": "696969696969696969",
        "provider": "apple",
        "status": "active",
        "periodEnd": 4102444800,
        "createdAt": 1728922317
      }
    ]
  })
});