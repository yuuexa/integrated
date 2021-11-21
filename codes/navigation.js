$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#navi").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#navi a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#navi").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});