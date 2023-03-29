/*
  Copyright 2018 Google Inc.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
// PushSubscription {endpoint: "https://fcm.googleapis.com/fcm/send/dKaAneiHlqY:AP…YTv61tRW8YwlBA9DCJSPIRkSmEw_6eHMDRoaiahDsoqI2L2Ib", expirationTime: null, options: PushSubscriptionOptions}
const webPush = require("web-push");

const pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/dfOK_-577FQ:APA91bFzk7rjJFYZkB0w07whJ0VD220-hVOP4JUK0USIf9xW8pOXFEHAskTUqM2qL1ArPNsTkTOK7VhL85O4SIO-wtIpaJCuHc2PGwvnjMs2x4HF_gB1ewPdj8l06LNNmh-E7r250tjo",
  expirationTime: null,
  keys: {
    p256dh:
      "BIhFdY2WuwA8uRivT7dMtPrFapASlof0WAhXSHuMmEhDmAg6bYGgAJRRmltUmYIoERIz-VYAKLAk0nzvvK6jd_w",
    auth: "NGLAXHZ30QWnNH61ziT4Dw",
  },
};

const vapidPublicKey =
  "BKOzlja6y2OWQ5biN4KZvBc537l0R3yvfJsjWUIy6k9jm8OoqsXCU9-OkGzMR_iT7D-t4c6dU8cghn0UEkAN4tA";
const vapidPrivateKey = "9B75uwivLdzJL1jZkX-IcCVouYPkQqa6zV7RnIABiqI";

const payload = "Here is a payload!";

const options = {
  //  gcmAPIKey: "YOUR_SERVER_KEY",
  TTL: 60,

  vapidDetails: {
    subject: "mailto: poonprakash22@gmail.com",
    publicKey: vapidPublicKey,
    privateKey: vapidPrivateKey,
  },
};

webPush.sendNotification(pushSubscription, payload, options);
