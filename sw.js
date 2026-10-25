self.addEventListener('install', function (event) {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('notificationclick', function (event) {
  var chosenAction = event.action || 'acknowledge';
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (clientList) {
      for (var i = 0; i < clientList.length; i++) {
        var client = clientList[i];
        try {
          client.postMessage({
            type: 'MEDPULSE_NOTIF_ACTION',
            action: chosenAction
          });
        } catch (e) {}
      }
      if (chosenAction !== 'snooze' && chosenAction !== 'acknowledge' && clientList.length > 0 && 'focus' in clientList[0]) {
        return clientList[0].focus();
      }
    })
  );
});
