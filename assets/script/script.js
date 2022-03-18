let ClickToInfo = $(".FAQInfo");
let opened;

new CircleType(document.getElementById('cycleText'));

ClickToInfo.click(function() {
    ClickToInfo.find('li').slideUp();
        if(opened !== this) {
            $(this).find('li').slideDown()
            opened = this;
        } else {
            ClickToInfo.find('li').slideUp();
            opened = 0;
        }
});