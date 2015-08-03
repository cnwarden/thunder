
// bind dropdonw list

var dropdown = function() {
    var dropdown_trigger = $("li.js-dropdown-help").find(".js-dropdown-trigger");
    var dropdown_sheet =  $("li.js-dropdown-help").find(".js-dropdown-sheet");
    //basic
    dropdown_sheet.css({
        top: dropdown_trigger.height() + 5,
        left: - (dropdown_sheet.outerWidth() - dropdown_trigger.outerWidth())/2
    });

    dropdown_trigger.bind("mouseover", function(){
        dropdown_sheet.css("display", "block");
    });

    dropdown_sheet.bind("mouseover", function(){
        dropdown_sheet.css("display", "block");
    });
    dropdown_sheet.bind("mouseout", function(){
        dropdown_sheet.css("display", "none");
    });
}

console.log("starting");
dropdown();