"use strict";

const downloadLink = document.querySelector(".download-button");
if (downloadLink) {
  downloadLink.href = new URL("resume.pdf", document.baseURI).href;
}
