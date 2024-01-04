function paystackPopUp(pkTest, email, amount, ref, currency, onClosed, callback) {
  let handler = PaystackPop.setup({
    key: pkTest, // Replace with your public key
    email: email,
    amount: amount,
    ref: ref, // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    currency,
    onClose: function () {
      alert("Window closed.");
      onClosed();
    },
    callback: function (response) {
      callback();
      let message = "Payment complete! Reference: " + response.reference;
      alert(message);
    },
  });
  return handler.openIframe();
}
