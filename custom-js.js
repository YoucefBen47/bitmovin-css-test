if (window.bitmovin?.customMessageHandler) {
  window.bitmovin.customMessageHandler.on("hideControls", (data) => {
    // data is optional string payload sent from RN (can be JSON.parse(data) if needed)
    console.log("[UI] Received hideControls from React Native", data);

    // === Your logic to hide controls ===
    // Option 1: Hide the entire control bar / UI container

    // Option 4: Hide specific elements (seekbar, buttons, etc.)
    // const seekBar = this.getDomElement().querySelector('.bmpui-seekbar');
    // if (seekBar) seekBar.style.visibility = 'hidden';
  });

  // Optional: also support showing them again
  window.bitmovin.customMessageHandler.on("showControls", (data) => {
    console.log("[UI] Received showControls", data);
  });
}
