console.log("Custom UI JS loaded");
window.bitmovin = window.bitmovin || {};
window.bitmovin.customMessageHandler = window.bitmovin.customMessageHandler || {
  on: function (event, cb) {
    console.log(`Registered listener for ${event}`);
    // store cb somewhere if needed
  },
};

// Simulate receiving message (for testing)
setTimeout(() => {
  console.log("Simulating hideControls message");
  // call your own handler here
}, 3000);
