let opened;

new CircleType(document.getElementById('cycleText'));

$(".FAQInfo").click(function() {
        $(".FAQInfo").find('li').slideUp();
        if(opened !== this) {
            $(this).find('li').slideDown()
            opened = this;
        } else {
            $("ul").find('li').slideUp();
            opened = 0;
        }
});