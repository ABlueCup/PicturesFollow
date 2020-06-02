~function ($) {
    $(function () {
        let $list = $(".container li"),
            $largeImg = $('.largeImage');
        let ele = document.createElement('img');
        $list.on('mouseenter', function (ev) {
            let $img = $("img", this);
            let link = $img.attr('src').replace(/apple_(\d)/g, `apple_$1_bigger`);
            $(ele).attr('src', link);
            $largeImg.append(ele);
            $largeImg.show();
        }).on('mouseleave', function () {
            $largeImg.empty();
            $largeImg.hide();
        }).on('mousemove', function (ev) {
            let top = ev.pageY + 10,
                left = ev.pageX + 10;
            $largeImg.css({
                top: top + 'px',
                left: left + 'px'
            });
        });
    });
}(jQuery);