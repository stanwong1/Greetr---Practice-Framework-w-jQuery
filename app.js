// gets a new object( the architecture allows us to not have to use the 'new' keyword here)
var g = G$('Rexx', 'Boy');

// use our chainable methods
g.greet().setLang('en').greet(true).log();

// using objects on the click of the login button
$('#login').click(function() {

    // create a new 'Greetr' object; hard coding name
    var loginGrtr = G$('Rexx', 'Boy');

    // hide the div after clicked
    $('#logindiv').hide();

    // insert HTML greeting, passing the '#greeting' as the selector, chosen language, and the welcome 
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

});