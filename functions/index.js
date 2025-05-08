const {onDocumentCreated} = require("firebase-functions/v2/firestore");
const admin = require("firebase-admin");

admin.initializeApp();

exports.sendFeedNotification = onDocumentCreated(
    "notification_requests/{requestId}",
    async (event) => {
      const notificationData = event.data.data();

      try {
        // Prepare the notification message
        const message = {
          notification: {
            title: `${notificationData.senderUsername}`,
            body: notificationData.description.length > 50 ?
                        `${notificationData.description.substring(0, 50)}...` :
                        notificationData.description,
          },
          data: {
            type: "new_feed",
            senderId: notificationData.senderId,
            senderUsername: notificationData.senderUsername,
            province: notificationData.province,
            click_action: "FLUTTER_NOTIFICATION_CLICK",
          },
          topic: "all_users",
        };

        // Send the notification
        await admin.messaging().send(message);

        // Update the request status
        await event.data.ref.update({
          status: "completed",
          completedAt: admin.firestore.FieldValue.serverTimestamp(),
        });

        // Log successful delivery
        await admin.firestore().collection("notification_logs").add({
          type: "feed_upload",
          sender_id: notificationData.senderId,
          sender_username: notificationData.senderUsername,
          notification_data: notificationData,
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
          status: "delivered",
        });

        return null;
      } catch (error) {
        console.error("Error sending notification:", error);

        // Update the request status
        await event.data.ref.update({
          status: "failed",
          error: error.message,
          failedAt: admin.firestore.FieldValue.serverTimestamp(),
        });

        // Log failed delivery
        await admin.firestore().collection("notification_logs").add({
          type: "feed_upload",
          sender_id: notificationData.senderId,
          sender_username: notificationData.senderUsername,
          notification_data: notificationData,
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
          status: "failed",
          error: error.message,
        });

        return null;
      }
    });
