var plan = 0;

function onrun() {
	if (plan == 30) {
		mui.alert('最大30个计划！', '提示', '确认', function(e) {
			e.index
		}, 'div')
		return;
	}
	plan += 1;
	document.getElementById("plan" + plan).style = "null";

}

function makeajson() {
	var jsons = $("form").serializeArray();
	var myjson = {},
		flagdate = [0, 0, 0, 0],
		flagtext = 0,
		flagsmall = 0;
	for (var i = 0; i < jsons.length; i++) {
		if (jsons[i].value != "") {
			myjson[jsons[i].name.toString()] = jsons[i].value;
		}
		if (jsons[i].name == "indate" && jsons[i].value != "") flagdate[0] = 1;
		if (jsons[i].name == "year" && jsons[i].value != "") flagdate[1] = 1;
		if (jsons[i].name == "month" && parseInt(jsons[i].value) < 13) flagdate[2] = 1;
		if (jsons[i].name == "day" && parseInt(jsons[i].value) < 32) flagdate[3] = 1;
		if (jsons[i].name == "usertext" && jsons[i].value != "") flagtext = 1;
		if (jsons[i].name == "plan1" && jsons[i].value != "") flagsmall = 1
	}
	if ((flagdate[0] || (flagdate[1] && flagdate[2] && flagdate[3])) && flagtext && flagsmall)
		return myjson;
	else return 0;
}

function deleterun() {
	if (plan == 0) {
		mui.alert('最小0个计划！', '提示', '确认', function(e) {
			e.index
		}, 'div')
		return;
	}
	document.getElementById("plan" + plan).style = "hidbl";

	running -= 1;
}

document.getElementById("rubutton").addEventListener('tap', function() {
	onrun();
	document.getElementById("cntofjh").innerHTML = '计划个数：' + plan;
});
document.getElementById("rubutton-delete").addEventListener('tap', function() {
	deleterun();
	document.getElementById("cntofjh").innerHTML = '计划个数：' + plan;
});
document.getElementById("submitbutton").addEventListener('tap', function() {
	mui(this).button('loading');
	var obj = makeajson();
	if (obj != 0) {
		// 将obj提交的代码写这里
		mui.alert('提交成功！', '提交计划', 'OK', function() {
			setTimeout(function() {
				mui.back();
			}, 500);
		}, 'div')
	} else {
		//不符合要求的代码写这里
		mui.alert('请检查日期是否合法且完整，大计划及详细计划是否填写', '警告：提交失败', '确定', function(e) {
			e.index
		}, 'div')
		mui(this).button('reset');
	}
});
