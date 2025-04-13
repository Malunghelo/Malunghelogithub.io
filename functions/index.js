const admin = require("firebase-admin");
const {onSchedule} = require("firebase-functions/v2/scheduler");

admin.initializeApp();
const db = admin.firestore();

/**
 * Helper function to check expiration date and update the 'paid' field.
 *
 * @param {string} collectionName - The Firestore collection name.
 */
async function checkExpiredPayments(collectionName) {
  const snapshot = await db.collection(collectionName).get();
  const now = admin.firestore.Timestamp.now();

  // Add 2 hours to compensate for UTC+2
  const adjustedNow = new Date(now.toDate().getTime() + (2 * 60 * 60 * 1000));
  const adjustedNowTimestamp = admin.firestore.Timestamp.fromDate(adjustedNow);

  const updates = snapshot.docs.map(async (doc) => {
    const data = doc.data();
    if (data.expirationDate && data.expirationDate < adjustedNowTimestamp) {
      await doc.ref.update({paid: false});
      console.log(`Updated ${doc.id} in ${collectionName}: paid = false`);
    }
  });

  return Promise.all(updates);
}

// Scheduled function using v2 API
exports.checkExpiredLhubsPayments = onSchedule(
    {schedule: "every 24 hours", timeZone: "Africa/Johannesburg"},
    async (event) => {
      console.log("Running scheduled payment check...");
      await checkExpiredPayments("paymentOCG10MathsAbove50");
      await checkExpiredPayments("paymentOCG10PhysAbove50");

      await checkExpiredPayments("paymentOCG11MathsAbove50");
      await checkExpiredPayments("paymentOCG11PhysAbove50");

      await checkExpiredPayments("paymentOCG12LifesAbove50");
      await checkExpiredPayments("paymentOCG12LifesUpgrading");

      await checkExpiredPayments("paymentOCG12MathsAbove50");
      await checkExpiredPayments("paymentOCG12MathsUpgrading");

      await checkExpiredPayments("paymentOCG12PhysAbove50");
      await checkExpiredPayments("paymentOCG12PhysUpgrading");

      console.log("Finished checking payment statuses.");
    });
