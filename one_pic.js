const $ = $j1110;
const dom = document.querySelector(".r_relation");
const myChart = echarts.init(dom);
myChart.showLoading();
var option = {
	title: {
		text: '这就是关系',
		subtext: 'Default layout',
		top: 'bottom',
		left: 'right',
	},
	tooltip: {},
	legend: [{
		//selectedMode: 'single',
		data: categories.map(function(a) {
			return a.name;
		})
	}],
	animationDuration: 1500,
	animationEasingUpdate: 'quinticInOut',
	series: [{
		name: 'Les Miserables',
		type: 'graph',
		layout: 'none',
		symbol: "image://img/T1orhyB5ZT1RCvBVdK.jpg",
		//edgeSymbol:["circle","arrow"],
		data: graph.nodes,
		links: graph.links,
		categories: categories,
		roam: true,
		focusNodeAdjacency: true,
		itemStyle: {
			borderColor: '#fff',
			borderWidth: 1,
			shadowBlur: 10,
			shadowColor: 'rgba(0, 0, 0, 0.3)'
		},
		label: {
			position: 'right',
			formatter: '{b}',
			rich: {
				a: {
					color: 'red',
					lineHeight: 10
				},
				b: {
					backgroundColor: {
						image: 'xxx/xxx.jpg'
					},
					height: 40
				},
				x: {
					fontSize: 18,
					fontFamily: 'Microsoft YaHei',
					borderColor: '#449933',
					borderRadius: 4
				},
			}
		},
		lineStyle: {
			color: 'source',
			curveness: 0.3
		},
		markLine: {
			symbol: "circle",
			symbolSize: 120,
			label: {
				show: true,
				formatter: "测试测试markline"
			}
		},
		emphasis: {
			//鼠标移上线的样式
			lineStyle: {
				width: 10
			}
		}
	}]
};
myChart.hideLoading();
myChart.setOption(option);

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
	//switch_case(level:级别3,4)
	switch (level) {
		case 3:
			//判断数据存在
			if (!data_3) return;
			len = data_3 ? data_3.length : 0;
			deg = data_3 ? (90 / len) : 0;
			for (i in data_3) {
				li += '<li class="r_menu_level_li posa" title="' + data_3[i].name + '" style="transform: rotateZ(-' + (90 - deg * (
						Number(i) + 1)) + 'deg);">' +
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
			if(a){
				a.css({
					"transform": "rotateZ("+ (deg/2 - 0.5) +"deg)"
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
				li += '<li class="r_menu_level_li posa" title="' + data_3[i].name + '" style="transform: rotateZ(-' + (90 - deg * i) +'deg);">' +
					'<div href="' + data_3[i].url + '">' +
					'<i class="fa ' + data_3[i].symbol + '"></i></div>' +
					'</li>'
			}
			//绘制3级
			ul_start = '<ul class="r_menu_level3 posa">';
			menu.append(ul_start + li + ul_end);
			//精确标
			a = $(".r_menu_level3 .r_menu_level_li>div");
			if(a){
				a.css({
					"transform": "rotateZ("+ (deg/2 - 0.5) +"deg)"
				});
			}
			//四级变量获取
			li = '';
			len = data_4 ? data_4.length : 0;
			deg = data_4 ? (90 / len) : 0;
			//组合4级
			for (i in data_4) {
				li += '<li class="r_menu_level_li posa" title="' + data_4[i].name + '" style="transform: rotateZ(-' + (90 - deg * i) +'deg);">' +
					'<div href="' + data_4[i].url + '">' +
					'<i class="fa ' + data_4[i].symbol + '"></i></div>' +
					'</li>'
			}
			//绘制4级
			ul_start = '<ul class="r_menu_level4 posa">';
			menu.append(ul_start + li + ul_end);
			//精确标
			a = $(".r_menu_level4 .r_menu_level_li>div");
			if(a){
				a.css({
					"transform": "rotateZ("+ (deg/2 - 0.5) +"deg)"
				});
			}
			break;
		default:
			break;
	}
}

menu(".r_menu", 4, [{
	name: "测试01",
	symbol: "fa-link",
	url: "01"
}, {
	name: "测试02",
	symbol: "fa-phone",
	url: "02"
}, {
	name: "测试03",
	symbol: "fa-info",
	url: "03"
}], [{
	name: "测试01",
	symbol: "fa-pencil",
	url: "001"
}, {
	name: "测试02",
	symbol: "fa-magic",
	url: "002"
}, {
	name: "测试03",
	symbol: "fa-meh-o",
	url: "003"
}, {
	name: "测试04",
	symbol: "fa-plane",
	url: "004"
}]);
