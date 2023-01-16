var times = 0;
document.getElementById("whitenotes").addEventListener('tap', function() {
	mui.openWindow({
		url: "white.html",
		id: "whitenotes"
	});
});

function getitems() {
	//请求计划表结束日期，剩余时间，剩余时间百分比，完成度（会传给后端保存各个小目标的完成情况）
	var items = {
		finishtime: "2022-05-17",
		leasttime: "200days",
		pi_least: 10000, //10000就是100.00%
		pi_finish: 10000,
		start: 0, //完成事件数
		total: 12, //总共事件数
		next: "这是计划的一部分",
		saying: "时间最不偏私，给任何人都是二十四小时；时间也最偏私，给任何人都不是二十四小时。——赫胥黎"
	}
	return items;
}

function printcards() {
	var carditem = "";
	var itemobj;
	for (var i = 1; i <= times; i++) {
		itemobj = getitems();

	}
}
document.getElementById("refreshbutton").addEventListener('tap', function() {

})
