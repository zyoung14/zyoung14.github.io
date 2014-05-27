$('document').ready( function() {
    var tom = 0;
    var cuc = 0;
    var lett = 0;
    var app = 0;

    function updateList() {
        new_tom = $("input[name='tom']").val();
            /*if (new_tom==null) {
                alert("lol");
            }*/
        new_lett = $("input[name='lett']").val();
        new_app = $("input[name='app']").val();
        new_cuc = $("input[name='cuc']").val();
        tom = tom + parseInt(new_tom)
        lett = lett + parseInt(new_lett)
        app = app + parseInt(new_app)
        cuc = cuc + parseInt(new_cuc)
        var sum = .75*app + 1.00*lett + 1.50*cuc + 1.00*tom;
        var cart = "<p>" + tom + " Tomatoes" + "</p>" + "<p>" + cuc + " Cucumbers" + "</p>" + "<p>" + lett + " lbs. Lettuce" + "</p>" + "<p>" + app + " Apples" + "</p>" + "<p>" + "<strong>The total is: $</strong>" + "<strong>" + sum + "</strong>" + "</p>" 
        cart = "<div id='mycart'>" + cart + "</div>"
        $( "#mycart" ).replaceWith(cart);
    }
    function aboutUs() {
        alert("Founded in 2014 - thanks to YEI!")
    }    
    function getEmail() {
        var email = $("#email").val();
        alert("Thank you for registering. We have added the email below to our membership database:\n\n" + email);    
    }

    function resetList() {
        tom = 0;
        cuc = 0;
        lett = 0;
        app = 0;
        sum = 0;
        cart = "<p>" + tom + " Tomatoes" + "</p>" + "<p>" + cuc + " Cucumbers" + "</p>" + "<p>" + lett + " lbs. Lettuce" + "</p>" + "<p>" + app + " Apples" + "</p>" + "<p>" + "<strong>The total is: $</strong>" + "<strong>" + sum + "</strong>" + "</p>" 
        cart = "<div id='mycart'>" + cart + "</div>"
        $( "#mycart" ).replaceWith(cart);
    }

    $("#list").click(updateList);
    $("#about").click(aboutUs);
    $("#reg").click(getEmail);
    $("#reset").click(resetList);
});