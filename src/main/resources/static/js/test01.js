/**
 * 加载进度条
 */
var progress = 0;

function loadProgress01() {
    progress = progress + Math.round(Math.random() * 10);
    console.log("当前进度" + progress);
    var $progress01 = $("#progress01");
    if (progress > 100) {
        clearInterval(progressInterval);
        $progress01.width("100%");
        return;
    }
    $progress01.width(progress + "%");
}

var progressInterval = setInterval("loadProgress01()", 1000);

/**
 * 提示框
 */
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

/**
 * 弹出框
 */
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});

