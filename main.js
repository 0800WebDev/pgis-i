function replacePage() {
    document.documentElement.innerHTML = `
                    <head>
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
                        <iframe src="https://pgis.onrender.com/index.html"></iframe>
                    const iframe = document.querySelector("iframe");

iframe.addEventListener("load", () => {
    iframe.contentWindow.addEventListener("keydown", function(e) {
        if (e.ctrlKey && e.key.toLowerCase() === "q") {
            window.location.href = "https://www.google.com";
        }
    });
});
                    </body>
                    `;

    
}
