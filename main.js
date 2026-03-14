function replacePage() {  
    document.documentElement.innerHTML = `  
                    <head>  
                    <meta http-equiv="Content-Security-Policy" content="script-src 'self'; object-src 'none';">
                        <title>Google Classroom</title>  
                        <link rel="icon" type="image/x-icon" href="https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://staticin.pages.dev/settings&size=16">  
                        <style>  
                            body, html {  
                                margin: 0;  
                                padding: 0;  
                                width: 100%;  
                                height: 100%;  
                                overflow: hidden;  
                            }  
                            iframe {  
                                width: 100%;  
                                height: 100%;  
                                border: none;  
                            }  
                        </style>  
                    </head>  
                    <body>  
                        <iframe src="https://pgis.onrender.com/index.html" allowfullscreen></iframe>  
                        <script>  
                    // Put this in the parent page, outside the dynamic HTML
window.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.key.toLowerCase() === "q") {
        window.location.href = "https://www.google.com";
    }
});


const iframe = document.querySelector("iframe")

const observer = new MutationObserver(() => {
iframe.src = iframe.src
})

observer.observe(iframe, { childList: true, subtree: true })
</script>  
                    </body>  
                    `;  
  
      
}
