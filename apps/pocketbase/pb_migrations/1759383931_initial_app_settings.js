/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
    let settings = app.settings()

    settings.meta.appName = "9a50e1f7-18d5-4d18-a49b-93036a336b68.app-preview.com"
    settings.meta.appURL = "https://9a50e1f7-18d5-4d18-a49b-93036a336b68.app-preview.com/hcgi/platform"
    settings.meta.hideControls = true

    settings.logs.maxDays = 7
    settings.logs.minLevel = 8
    settings.logs.logIP = true
    
    settings.trustedProxy.headers = [
        "X-Real-IP",
        "X-Forwarded-For",
        "CF-Connecting-IP",
    ]

    app.save(settings)
})
