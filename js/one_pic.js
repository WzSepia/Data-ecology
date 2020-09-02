const dom = document.querySelector(".r_relation");
const myChart = echarts.init(dom);
//当前操作纪实
let current = {
	//图标元素索引
	dataIndex: null
};
myChart.showLoading();

myChart.setOption(option);
myChart.hideLoading();
/**
 * 菜单
 * @param {type} dom = 元素
 * @param {type} level = [3,4]  
 * @param {type} data = {}  
 * */
function menu(dom, level, data_3, data_4) {
	//菜单外围盒子
	let menu = $(dom);
	//定义文档
	let ul_start = '';
	let ul_end = '</ul>';
	let li = '';
	let a = null;
	//定义变量(数据长度，旋转角度)
	let len = null;
	let deg = null;
	$(dom).find("ul[class^='r_menu_level']").fadeOut("fast", function() {
		$(this).remove();
	});
	$(".r_menu_bg").fadeOut("fast");
	//switch_case(level:级别3,4)
	switch (level) {
		case 3:
			//判断数据存在
			if (!data_3) return;
			len = data_3 ? data_3.length : 0;
			deg = data_3 ? (90 / len) : 0;
			for (i in data_3) {
				li += '<li class="r_menu_level_li posa" title="' + data_3[i].name + '" style="transform: rotateZ(-' + (90 - deg * (
						Number(i) + 1)) + 'deg);" onclick = "li_click(this)">' +
					'<a href="' + data_3[i].url + '">' +
					'<i class="fa ' + data_3[i].symbol + '"></i></a>' +
					'</li>'
				console.log(deg * i, (Number(i) + 1));
			}
			////绘制3级
			ul_start = '<ul class="r_menu_level3 posa">';
			menu.append(ul_start + li + ul_end);
			//精确标
			a = $(".r_menu_level3 .r_menu_level_li>a");
			if (a) {
				a.css({
					"transform": "rotateZ(" + (deg / 2 - 0.5) + "deg)"
				});
			}
			break;
		case 4:
			//判断数据存在
			if (!data_4) return;
			len = data_3 ? data_3.length : 0;
			deg = data_3 ? (90 / len) : 0;
			//组合3级
			for (i in data_3) {
				li += '<li class="r_menu_level_li posa" title_tip="' + data_3[i].name + '" onmouseover="li_mouseup(this)"  onmouseout="li_mouseout(this)" style="transform: rotateZ(-' + (90 - deg * i) +
					'deg);" onclick = "li_click(this)">' +
					'<div href="' + data_3[i].url + '">' +
					'<i class="fa ' + data_3[i].symbol + '"></i></div>' +
					'</li>'
			}
			//绘制3级
			ul_start = '<ul class="r_menu_level3 posa">';
			menu.append(ul_start + li + ul_end);
			//精确标
			a = $(".r_menu_level3 .r_menu_level_li>div");
			if (a) {
				a.css({
					"transform": "rotateZ(" + (deg / 2 - 0.5) + "deg)"
				});
			}
			//四级变量获取
			li = '';
			len = data_4 ? data_4.length : 0;
			deg = data_4 ? (90 / len) : 0;
			//组合4级
			for (i in data_4) {
				li += '<li class="r_menu_level_li posa" title_tip="' + data_4[i].name + '" onmouseover="li_mouseup(this)"  onmouseout="li_mouseout(this)" style="transform: rotateZ(-' + (90 - deg * i) +
					'deg);" onclick = "li_click(this)">' +
					'<div href="' + data_4[i].url + '">' +
					'<i class="fa ' + data_4[i].symbol + '"></i></div>' +
					'</li>'
			}
			//绘制4级
			ul_start = '<ul class="r_menu_level4 posa">';
			menu.append(ul_start + li + ul_end);
			//精确标
			a = $(".r_menu_level4 .r_menu_level_li>div");
			if (a) {
				a.css({
					"transform": "rotateZ(" + (deg / 2 - 0.5) + "deg)"
				});
			}
			setTimeout(() => {
				$(".r_menu_level3").addClass('r_menu_level_rotate').css("border","5px solid #000000");
				$(".r_menu_level4").addClass('r_menu_level_rotate').css("border","5px solid #000000");
				$(".r_menu_bg").fadeIn("slow");
			}, 100)
			break;
		default:
			break;
	}
}

/**
 * 操作
 * */

// 处理图表点击
myChart.on('click', function(params) {
	//圆盘菜单显示隐藏
	menu(".r_menu", 4, [{
		name: "测试fa-link",
		symbol: "fa-link",
		url: "01"
	}, {
		name: "测试fa-phone",
		symbol: "fa-phone",
		url: "02"
	}, {
		name: "fa-info",
		symbol: "fa-info",
		url: "03"
	}], [{
		name: "测试01pencil",
		symbol: "fa-pencil",
		url: "001"
	}, {
		name: "测试02magic",
		symbol: "fa-magic",
		url: "002"
	}, {
		name: "测试03meh-o",
		symbol: "fa-meh-o",
		url: "003"
	}, {
		name: "测试04plane",
		symbol: "fa-plane",
		url: "004"
	}]);
	if (current.dataIndex == params.dataIndex) {
		current.dataIndex = null;
		$(".r_menu").addClass("r_menu_hide");
	} else {
		current.dataIndex = params.dataIndex;
		$(".r_menu").addClass("r_menu_hide");
		setTimeout(function() {
			$(".r_menu").removeClass("r_menu_hide");
		}, 290)
	}
	//后续操作
	console.log(params);
	//
});

//处理菜单点击
function li_click(e) {
	myChart.clear();
	myChart.setOption(option);
	$(e).toggleClass("r_menu_level_li_active");
}

function li_mouseup(e) {
	let title = $(e).attr("title_tip");
	let str = '<span>' + title + '</span>';
	$(e).find("i").append(str);
}

function li_mouseout(e) {
	$(e).find("span").remove();
}
