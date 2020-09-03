const dom = document.querySelector(".r_relation");
const myChart = echarts.init(dom);
//当前操作纪实
let current = {
	//图标元素索引
	dataIndex: null
};
myChart.showLoading();

var option = {
	legend: {
		show: false,
		itemGap: 10,
		formatter: 'Legend {name}',
		textStyle: {
			color: "#ffffff",
			fontSize: 20
		}
	},
	tooltip: {
		show: false,
		formatter: '{b}<br />',
		backgroundColor: 'rgba(0,0,0,1)',
		borderColor: '#333',
	},
	series: [{
		type: 'graph',
		layout: 'force',
		draggable: true,
		roam: true,
		//focusNodeAdjacency: true,
		categories: categories,
		edgeSymbol: ['', 'arrow'],
		edgeSymbolSize: 6,
		//标签。
		edgeLabel: {
			show: true,
			position: "middle",
			align: "center",
			formatter: [
				'{a|关系}'
			].join('\n'),
			rich: {
				a: {
					color: "#000000",
					fontSize: 12,
					fontWeight: "bold",
					verticalAlign: "middle",
					lineHeight: 1,
					padding: 6,
					borderColor: "#ffffff",
					borderWidth: 0,
					borderRadius: 4,
					backgroundColor: '#ffffff',
				}
			}
		},
		//图形样式。
		itemStyle: {
			// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
			// color: {
			// 	type: 'radial',
			// 	x: 0.5,
			// 	y: 0.5,
			// 	r: 0.5,
			// 	colorStops: [{
			// 		offset: 0,
			// 		color: 'red' // 0% 处的颜色
			// 	}, {
			// 		offset: 1,
			// 		color: 'blue' // 100% 处的颜色
			// 	}],
			// 	global: false // 缺省为 false
			// },
			//color:"#ddd",
			//borderColor: "rgba(12,12,12,0.5)",
			//borderWidth: 4
		},
		//关系边的公用线条样式。
		lineStyle: {
			color: "#ffffff",
			width: 1,
			opacity: 1,
		},
		//图形上的文本标签，可用于说明图形的一些数据信息
		label: {
			show: true,
			color: "#ffffff",
			position: "bottom",
			backgroundColor: "transparent",
			borderRadius: 4,
		},
		force: {
			//进行力引导布局前的初始化布局
			initLayout: "",
			//节点受到的向中心的引力因子
			//gravity: 0.1,
			//节点之间的斥力因子。
			repulsion: 2000,
			//边的两个节点之间的距离，这个距离也会受repulsion
			edgeLength: 200,
			//是否显示布局的迭代动画
			layoutAnimation: true,
			//减缓节点的移动速度。取值范围 0 到 1。
			//friction: 0.5
		},
		data: data.nodes,
		links: data.links,
		emphasis: {
			lineStyle: {
				color: "",
				width: 4
			}
		}
	}]
};
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
				li += '<li class="r_menu_level_li posa" title_tip="' + data_3[i].name +
					'" onmouseover="li_mouseup(this)"  onmouseout="li_mouseout(this)" style="transform: rotateZ(-' + (90 - deg * i) +
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
				li += '<li class="r_menu_level_li posa" title_tip="' + data_4[i].name +
					'" onmouseover="li_mouseup(this)"  onmouseout="li_mouseout(this)" style="transform: rotateZ(-' + (90 - deg * i) +
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
				$(".r_menu_level3").addClass('r_menu_level_rotate').css("border", "5px solid #000000");
				$(".r_menu_level4").addClass('r_menu_level_rotate').css("border", "5px solid #000000");
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
	//event.stopPropagation();
	let name = params.name;
	let x = params.event.offsetX;
	let y = params.event.offsetY;
	let dia_str = '<div class="r_tip posa">' +
		'<div class="r_tip_title"><span><i class="fa fa-edit"></i>编辑关系</span></div>' +
		'<div class="r_tip_up">' +
		'<span class="r_tip_l">' + name.split(">")[0] + '</span>' +
		'<span class="r_tip_to"><i class="fa fa-long-arrow-right"></i></span>' +
		'<span class="r_tip_r">' + name.split(">")[1] + '</span>' +
		'</div>' +
		'<div class="r_tip_down">' + '请求的数据' + '</div>' +
		'</div>'
	$(".r_tip").remove();
	if (params.dataType == "edge") {
		$(".r_relation").append(dia_str);
		$(".r_tip").css({
			"left": x,
			"top": y,
			"z-index": 3,
		})
	} else if (params.dataType == "node") {
		//圆盘菜单显示隐藏
		menu(".r_menu", 4, data_menu.data3,data_menu.data4);
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
	}
	//后续操作
	console.log(params);
	//
});

//检测图表上的点击事件
$("canvas").parent("div").on("click",(e)=>{
	//获取元素cursor状态
	let def = $("canvas").parent("div").attr("style").split("cursor:")[1]
	//判断是否在元素上
	if(def.indexOf("default")>-1){
		//移除line弹窗
		$(".r_tip").remove();
		//关掉菜单
		if (!$(".r_menu").hasClass("r_menu_hide")) {
			setTimeout(function() {
				current.dataIndex = null;
				$(".r_menu").addClass("r_menu_hide");
			}, 280)
		}
	}
})

//处理菜单点击
function li_click(e) {
	$(e).stopPropagation()
	myChart.clear();
	myChart.setOption(option);
	$(e).toggleClass("r_menu_level_li_active");
}

//菜单hover(鼠标移上)的提示框
function li_mouseup(e) {
	let title = $(e).attr("title_tip");
	let str = '<span>' + title + '</span>';
	$(e).find("i").append(str);
}

//菜单鼠标移开的提示框
function li_mouseout(e) {
	$(e).find("span").remove();
}


/**
 * 全局事件监听
 * */

document.addEventListener("mousedown", function(e) {
	
})
