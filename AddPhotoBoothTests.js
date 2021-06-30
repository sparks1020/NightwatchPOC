module.exports = {
    'AddPhotoBooth_AddOneAlreadyOwn_ShutterPilot_OnCaptureLandingPage' : function (browser) {
        var url = "https://localhost:5001/auth/login"
        //var username = "bparks";
        var usernametemp = "test";
        var password = "testing.1022";

        browser.url(url)

        var login = browser.page.Login()
        //login.create_user(username, password)
        login.login(usernametemp, password)

        //Navigating to Booths section
        browser

            .click('.nav.navbar-nav a[href*= booths]')
            .click('p a[href*= \'booths/new\']')
            .click('.wizard a[href*= own]')
            .click('#purchase_shutter_pilot')
            .assert.visible('#capture a[href*= \'capture\']')
            .end()
    },

    'AddPhotoBooth_AddOneAlreadyOwn_OhSnapMadison_OnCaptureLandingPage': function (browser) {
        var url = "https://localhost:5001/auth/login"
        //var username = "bparks";
        var usernametemp = "test";
        var password = "testing.1022";

        browser.url(url)

        var login = browser.page.Login()
        //login.create_user(username, password)
        login.login(usernametemp, password)

       //Navigating to Booths section
        browser
            .click('.nav.navbar-nav a[href*= booths]')
            .click('p a[href*= \'booths/new\']')
            .click('.wizard a[href*= own]')
            .click('#purchase_oh_snap_madison')
            .assert.visible('#capture a[href*= \'capture\']')
            .end()
    },

    'AddPhotoBooth_AddOneAlreadyOwn_PictureboothPortable_OnCaptureLandingPage': function (browser) {
        var url = "https://localhost:5001/auth/login"
        //var username = "bparks";
        var usernametemp = "test";
        var password = "testing.1022";

        browser.url(url)

        var login = browser.page.Login()
        login.login(usernametemp, password)

        //Navigating to Booths section
        browser
            .click('.nav.navbar-nav a[href*= booths]')
            .click('p a[href*= \'booths/new\']')
            .click('.wizard a[href*= own]')
            .click('#purchase_picturebooth')
            .click('#picturebooth_portable')
            .assert.visible('#capture a[href*= \'capture\']')
            .end()
    },

    'AddPhotoBooth_AddOneAlreadyOwn_AnotherVendorCapture_OnCaptureLandingPage': function (browser) {
        var url = "https://localhost:5001/auth/login"
        //var username = "bparks";
        var usernametemp = "test";
        var password = "testing.1022";

        browser.url(url)

        var login = browser.page.Login()
        login.login(usernametemp, password)
        browser
            //Navigating to Booths section
            .click('.nav.navbar-nav a[href*= booths]')
            .click('p a[href*= \'booths/new\']')
            .click('.wizard a[href*= own]')
            .click('#purchase_another_vendor')
            .click('#booth_capture')
            .assert.visible('#capture a[href*= \'capture\']')
            .end()
    },

    'AddPhotoBooth_AddOneAlreadyOwn_BuiltMyOwn_OnCaptureLandingPage': function (browser) {
        var url = "https://localhost:5001/auth/login"
        //var username = "bparks";
        var usernametemp = "test";
        var password = "testing.1022";

        browser.url(url)
        var login = browser.page.Login()
        login.login(usernametemp, password)
        browser
            //Navigating to Booths section
            .click('.nav.navbar-nav a[href*= booths]')
            .click('p a[href*= \'booths/new\']')
            .click('.wizard a[href*= own]')
            .click('#purchase_built_my_own')
            .assert.visible('#capture a[href*= \'capture\']')
            .end()
    },

    'AddPhotoBooth_AddOneAlreadyOwn_PictureboothSelfieWindows_OnCaptureLandingPage': function (browser) {
        var url = "https://localhost:5001/auth/login"
        //var username = "bparks";
        var usernametemp = "test";
        var password = "testing.1022";

        browser.url(url)
        var login = browser.page.Login()
        login.login(usernametemp, password)
        //Navigating to Booths section
        browser
            .click('.nav.navbar-nav a[href*= booths]')
            .click('p a[href*= \'booths/new\']')
            .click('.wizard a[href*= own]')
            .click('#purchase_picturebooth')
            .click('#picturebooth_selfie')
            .click('#os_windows')
            .assert.visible('#capture a[href*= \'capture\']')
            .end()
    },

    'AddPhotoBooth_AddOneAlreadyOwn_PictureboothSelfieLinux_OnCaptureLandingPage': function (browser) {
        var url = "https://localhost:5001/auth/login"
        //var username = "bparks";
        var usernametemp = "test";
        var password = "testing.1022";

        browser.url(url)
        var login = browser.page.Login()
        login.login(usernametemp, password)
        //Navigating to Booths section
        browser
            .click('.nav.navbar-nav a[href*= booths]')
            .click('p a[href*= \'booths/new\']')
            .click('.wizard a[href*= own]')
            .click('#purchase_picturebooth')
            .click('#picturebooth_selfie')
            .click('#os_linux')
            .assert.visible('#selfie-linux')
            .end()
    },

    'AddPhotoBooth_AddOneAlreadyOwn_PictureboothEnclosed_OnCaptureLandingPage': function (browser) {
        var url = "https://localhost:5001/auth/login"
        //var username = "bparks";
        var usernametemp = "test";
        var password = "testing.1022";

        browser.url(url)

        var login = browser.page.Login()
        login.login(usernametemp, password)

        //Navigating to Booths section
        browser
            .click('.nav.navbar-nav a[href*= booths]')
            .click('p a[href*= \'booths/new\']')
            .click('.wizard a[href*= own]')
            .click('#purchase_picturebooth')
            .click('#picturebooth_enclosed')
            .assert.visible('#capture a[href*= \'capture\']')
            .end()
    },

    'AddPhotoBooth_AddOneAlreadyOwn_AnotherVendorSocialBooth_OnCopilotLandingPage': function (browser) {
        var url = "https://localhost:5001/auth/login"
        //var username = "bparks";
        var usernametemp = "test";
        var password = "testing.1022";

        browser.url(url)

        var login = browser.page.Login()
        login.login(usernametemp, password)

        //Navigating to Booths section
        browser
            .click('.nav.navbar-nav a[href*= booths]')
            .click('p a[href*= \'booths/new\']')
            .click('.wizard a[href*= own]')
            .click('#purchase_another_vendor')
            .click('#booth_socialbooth')
            .assert.visible('#socialbooth')
            .end()
    },

    'AddPhotoBooth_AddOneAlreadyOwn_AnotherVendorDSLRBooth_OnCopilotLandingPage': function (browser) {
        var url = "https://localhost:5001/auth/login"
        //var username = "bparks";
        var usernametemp = "test";
        var password = "testing.1022";

        browser.url(url)

        var login = browser.page.Login()
        login.login(usernametemp, password)

        //Navigating to Booths section
        browser
            .click('.nav.navbar-nav a[href*= booths]')
            .click('p a[href*= \'booths/new\']')
            .click('.wizard a[href*= own]')
            .click('#purchase_another_vendor')
            .click('#booth_dslrbooth')
            .assert.visible('#dslrbooth')
            .end()
    },

    'AddPhotoBooth_AddOneAlreadyOwn_AnotherVendorOtherSoftware_OnSupportLandingPage': function (browser) {
        var url = "https://localhost:5001/auth/login"
        //var username = "bparks";
        var usernametemp = "test";
        var password = "testing.1022";

        browser.url(url)

        var login = browser.page.Login()
        login.login(usernametemp, password)

        //Navigating to Booths section
        browser
            .click('.nav.navbar-nav a[href*= booths]')
            .click('p a[href*= \'booths/new\']')
            .click('.wizard a[href*= own]')
            .click('#purchase_another_vendor')
            .click('#booth_other')
            .assert.visible('#other-software')
            .end()
    },

    'AddPhotoBooth_AddOneAlreadyOwn_AnotherVendorNotSure_OnSupportLandingPage': function (browser) {
        var url = "https://localhost:5001/auth/login"
        //var username = "bparks";
        var usernametemp = "test";
        var password = "testing.1022";

        browser.url(url)

        var login = browser.page.Login()
        login.login(usernametemp, password)

        //Navigating to Booths section
        browser
            .click('.nav.navbar-nav a[href*= booths]')
            .click('p a[href*= \'booths/new\']')
            .click('.wizard a[href*= own]')
            .click('#purchase_another_vendor')
            .click('#booth_other')
            .assert.visible('#other-software')
            .end()
    }
}