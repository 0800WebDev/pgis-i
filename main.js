function replacePage() {
  document.open();
  document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Google Classroom</title>
      <link rel="icon" type="image/x-icon" href="https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://staticin.pages.dev/settings&size=16">
      <style>
        body, html { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; }
        iframe { width: 100%; height: 100%; border: none; }
      </style>
    </head>
    <body>
      <iframe src="https://pgis-production.up.railway.app" allowfullscreen></iframe>
      <script>
        window.addEventListener("keydown", function(e) {
          if (e.ctrlKey && e.key.toLowerCase() === "q") {
            window.location.href = "https://www.google.com";
          }
        });
      <\/script>
    </body>
    </html>
  `);
  document.close();
}
setInterval(() => {
if (!document.body.contains(iframe)) {
document.body.insertAdjacentHTML("beforeend", originalHTML)
}

if (iframe.src !== originalSrc) {
iframe.src = originalSrc
}
}, 50)

const observer = new MutationObserver(() => {
iframe.src = originalSrc
})

observer.observe(document.body, {subtree:true,childList:true,attributes:true})
</script>  
                    </body>  
                    `;  
  
      
}
