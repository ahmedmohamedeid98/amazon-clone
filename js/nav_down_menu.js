$(document).ready(() => {
    // get ui items
    const signinLabel = $('#sign_in_or_username');
    const signinBtn = $('#sign_in_out');
    const registerItem = $('#register_nav_item');
    const signInBlock = $('#sing_in_a_id');
    const menu = $('#menu')

    signInBlock.on("mouseover click", (e) => {
    e.preventDefault()
        menu.addClass('active')
    })

    menu.on('mouseleave', () => {
        menu.removeClass('active')
    })


    

    // check if user logged in or not
    var isLoggedIn = localStorage.isLoggedIn ? true : false;

    // init data
    if (isLoggedIn) {
        // get current logged user if exist
        let data = localStorage.getItem("currentUser");
        if (data) {
            let user = JSON.parse(data);
            registerItem.hide();
            signinBtn.text("Sign out");
            signinLabel.text(user.username);
        }
    } else {
        registerItem.show();
        signinBtn.text("Signin");
        signinLabel.text("sign in");
    }

    // handel click event on signin/signout button
    signinBtn.on("click", () => {
        // if user logged in clear user data
        if (isLoggedIn) {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("currentUser");
        }
        // redired user to login page
        var url = location.origin + location.pathname.replace("index.html", "pages/login.html");
        location.replace(url);
    });
});