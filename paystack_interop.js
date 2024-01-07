// paystack_interop.js

function paystackPopUp(
 publicKey,
 email,
 amount,
 ref,
 currency,
 onClosed,
 onSuccess) {
  let handler = PaystackPop.setup({
    key: publicKey,
    email: email,
    amount: amount,
    ref: ref,
    currency: currency,
    onClose: function () {
      alert("Window closed.");
      onClosed();
    },
    callback: function (response) {
      onSuccess();
      let message = "Payment complete! Reference: " + response.reference;
      alert(message);
    },
  });
  return handler.openIframe();
}
