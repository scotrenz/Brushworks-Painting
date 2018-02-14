$(function scroll1() {
    $(window).scroll(function() {
        var wintop = $(window).scrollTop(),
            docheight = $("#main").height(),
            winheight = $(window).height();
        var totalScroll = (wintop / winheight) * 100;
        $("#progressBar1").css("width", totalScroll + "%");
        $("#roller1").css("left", totalScroll - 2 + "%");
    });
});
$(function scroll2() {
    $(window).scroll(function() {
        var wintop = $(window).scrollTop(),
            docheight = $("#main").height(),
            winheight = $(window).height();
        var totalScroll = ((wintop - 850) / winheight) * 100;
        $("#progressBar2").css("width", totalScroll + "%");
        $("#roller2").css("left", totalScroll - 2 + "%");
    });
});
$(function scroll3() {
    $(window).scroll(function() {
        var wintop = $(window).scrollTop(),
            docheight = $("#main").height(),
            winheight = $(window).height();
        var totalScroll = ((wintop - 1800) / winheight) * 100;
        $("#progressBar3").css("width", totalScroll + "%");
        $("#roller3").css("left", totalScroll - 2 + "%");
    });
});

$("#submit").on("click", function(e) {
    var livingTotal = 0;
    var kitchenTotal = 0;
    var bathroomTotal = 0;
    var bedroomTotal = 0;
    var bedMultiplier = 0;
    var bathMultiplier = 0;
    var total = 0;

    e.preventDefault();
    var buildingType = $("#building option:selected").val();
    
    if (buildingType == "1") {
        bedMultiplier = 2;
        bathMultiplier = 2;
    }
    if (buildingType == "2") {
        bedMultiplier = 1.5;
        bathMultiplier = 1.25;
    }
    if (buildingType == "3") {
        bedMultiplier = 1.75;
        bathMultiplier = 1.25;
    }
    if (buildingType == "4") {
        bedMultiplier = 1;
        bathMultiplier = 1;
    }

    // Kitchen Logic
    var kitchen = $("#kitchen option:selected").val();
    var kitchenArr = [];
    var kitchenTrim = $('input[name="trim2"]:checked').val();
    var kitchenWall = $('input[name="wall2"]:checked').val();
    var kitchenCeiling = $('input[name="ceiling2"]:checked').val();

    if (kitchenTrim != null) {
        kitchenArr.push(175);
    }
    if (kitchenWall != null) {
        kitchenArr.push(375);
    }
    if (kitchenCeiling != null) {
        kitchenArr.push(125);
    }
    kitchenTotal = kitchenArr.reduce(function(previousVal, currentVal) {
        return previousVal + currentVal;
    }, 0);
    if (kitchen == 0) {
        kitchenTotal = 0
    } else {
        kitchenTotal = Math.round((kitchenTotal * kitchen * bedMultiplier) / 10) * 10 - 5;
    }
    $("#kitchenTotal").html("$" + kitchenTotal);

    //bathroom Logic
    var bathroom = $("#bathroom option:selected").val();
    var bathroomArr = [];
    var bathroomTrim = $('input[name="trim3"]:checked').val();
    var bathroomWall = $('input[name="wall3"]:checked').val();
    var bathroomCeiling = $('input[name="ceiling3"]:checked').val();

    if (bathroomTrim != null) {
        bathroomArr.push(80);
    }
    if (bathroomWall != null) {
        bathroomArr.push(225);
    }
    if (bathroomCeiling != null) {
        bathroomArr.push(80);
    }
    bathroomTotal = bathroomArr.reduce(function(previousVal, currentVal) {
        return previousVal + currentVal;
    }, 0);
    if (bathroom == 0) {
        bathroomTotal = 0
    } else {
        bathroomTotal = Math.round((bathroomTotal * bathroom * bathMultiplier) / 10) * 10 - 5;
    }
    $("#bathroomTotal").html("$" + bathroomTotal);

    //bedroom Logic
    var bedroom = $("#bedroom option:selected").val();
    var bedroomArr = [];
    var bedroomTrim = $('input[name="trim4"]:checked').val();
    var bedroomWall = $('input[name="wall4"]:checked').val();
    var bedroomCeiling = $('input[name="ceiling4"]:checked').val();

    if (bedroomTrim != null) {
        bedroomArr.push(175);
    }
    if (bedroomWall != null) {
        bedroomArr.push(375);
    }
    if (bedroomCeiling != null) {
        bedroomArr.push(125);
    }
    bedroomTotal = bedroomArr.reduce(function(previousVal, currentVal) {
        return previousVal + currentVal;
    }, 0);
    if (bedroom == 0) {
        bedroomTotal = 0
    } else {
        bedroomTotal = Math.round((bedroomTotal * bedroom * bedMultiplier) / 10) * 10 - 5;
    }
    $("#bedroomTotal").html("$" + bedroomTotal);


    //living room Logic
    var livingArr = [];
    var livingroom = $("#livingroom option:selected").val();
    var livingroomTrim = $('input[name="trim1"]:checked').val();
    var livingroomWall = $('input[name="wall1"]:checked').val();
    var livingroomCeiling = $('input[name="ceiling1"]:checked').val();

    if (livingroomTrim != null) {
        livingArr.push(175);
    }
    if (livingroomWall != null) {
        livingArr.push(375);
    }
    if (livingroomCeiling != null) {
        livingArr.push(125);
    }
    livingTotal = livingArr.reduce(function(previousVal, currentVal) {
        return previousVal + currentVal;
    }, 0);
    if (livingroom == 0) {
        livingTotal = 0
    } else {
        livingTotal = Math.round((livingTotal * livingroom * bedMultiplier) / 10) * 10 - 5;
    }
    $("#livingTotal").html("$" + livingTotal);

    //Total
    total = livingTotal + kitchenTotal + bedroomTotal + bathroomTotal;
    $("#total").html("Total: $" + total);

});