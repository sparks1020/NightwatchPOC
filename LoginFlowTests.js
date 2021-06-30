//Tests for Login User Flow

module.exports = {
    'SignUpNewPhotoHubAccount_CreateNewTeam_LogInSuccess': function (browser) {
        var usernametemp = "test";
        var password = "testing.1022";

        browser
            .url('https://localhost:5001/auth/login')
            .click('.nav.navbar-nav a[href*= register]')
            .click('.form-group label[for= username]')
            .setValue('.form-group input[name= username]', usernametemp)
            .setValue('.form-group input[name= password]', password)
            .setValue('.form-group input[name=confirmPassword]', 'testing.1022')
            .setValue('.form-group input[name=emailAddress]', 'sara.parks1020@gmail.com')
            .click('.form-group .btn.btn-primary')


        //Now we have to log in

            .click('.form-group label[for= username]')
            .setValue('.form-group input[name= username]', 'test')
            .setValue('.form-group input[name= password]', 'testing.1022')
            .click('.form-group .btn')

            //Asked to choose a team, we are creating a team
            .setValue('.form-group input[name= name]', 'test_team')
            .click('.form-group .btn.btn-primary')

            //Checking to make sure the user is logged in
            .click('.nav-link.dropdown-toggle')
            .assert.visible('.dropdown-menu a[href*=change-password]')

        //Cleanup setup
        var login = browser.page.Login()
        login.create_client_id_secret('bparks', password)
        login.cleanup_user(usernametemp, password)

            browser.end()

        
            
    },

    'LogIntoPhotoHub_ExistingUserAccount_Success': function (browser) {
        var url = "https://localhost:5001/auth/login"
        //var username = "bparks";
        var usernametemp = "test";
        var password = "testing.1022";

        browser.url(url)

        //Login setup
        var login = browser.page.Login()
        login.login(usernametemp, password)

        browser
            //Checking to make sure the user is logged in
            .click('.nav-link.dropdown-toggle')
            .assert.visible('.dropdown-menu a[href*= change-password]')
            .end()

        //Cleanup setup
        var cleanup = browser.page.TestCleanup()
        cleanup.cleanup(usernametemp, password)

    },
}