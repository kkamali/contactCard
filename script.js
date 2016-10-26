$(document).ready(function() {
    var description = "";
    $("form").submit(function() {
        var firstName = $(this).children("#first_name").val();
        var lastName = $(this).children("#last_name").val();
        name = firstName + " " + lastName;
        description = $(this).children("textarea").val();
        $(".rightSide").append("<div class='contact_card'><p>" + name + "</p><p>Click me to read the description</p></div>");
        return false;
    });

    $(document).on('click', ".contact_card", function() {
        $(this).text(description);
    });
});
