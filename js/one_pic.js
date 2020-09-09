/**
 * 数据生态架构
 * wangze
 * 20200903
 * */

/**
 * 页面方法
 * */
var page = {
	init() {
		methods.init();
	}
}

/**
 * 元素变量
 * */
var dom = {
	//图表元素
	el: document.querySelector(".r_relation"),
	//关系列表盒子
	r_lists_box: $(".r_lists_box"),
	//关系列表
	r_lists_ul: $(".r_lists_ul"),
	//关系列表按钮🔘
	r_lists_btn: $(".r_lists_btn"),
	//自动探索列表
	r_lists_play: $(".r_lists_play"),
	//关系探索
	switch_btn_container: $(".switch-btn-container"),
}

/**
 * 变量对象
 * */
var render = {
	myChart: echarts.init(dom.el),
	//当前操作纪实
	current: {
		//图标元素索引
		dataIndex: null,
		echarts_name: null,
	},
	app: {
		currentIndex: -1
	},
	dataLen: null
}

/**
 * option
 * */
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
	animationDuration: 1500,
	animationEasingUpdate: 'quinticInOut',
	series: [{
		type: 'graph',
		layout: 'force',
		draggable: false,
		roam: true,
		hoverAnimation: true,
		focusNodeAdjacency: true,
		categories: categories,
		symbol: "circle",
		symbolSize: 55,
		edgeSymbol: ['', 'arrow'],
		edgeSymbolSize: 6,
		//标签。
		edgeLabel: {
			show: true,
			position: "middle",
			align: "center",
			color: "#000000",
			fontSize: 12,
			fontWeight: "bold",
			verticalAlign: "middle",
			lineHeight: 1,
			padding: 10,
			borderColor: "#ffffff",
			borderWidth: 0,
			borderRadius: 4,
			backgroundColor: '#ffffff',
			formatter: (params) => {
				return params.data.name ? params.data.name : "关系";
			},
		},
		//图形样式。
		itemStyle: {
			color: "",
			borderColor: "rgba(12,12,12,0.5)",
			borderWidth: 0
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
			//edgeLength: 200,
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
				width: 3
			}
		}
	}]
};

/**
 * 文档方法集合
 * */
var methods = {
	//==============页面初始加载===============
	init() {
		//绘制关系图
		render.myChart.showLoading();
		render.myChart.setOption(option);
		render.myChart.hideLoading();
		//绘制关系列表	
		methods.relationLists(data.nodes);
		//图表事件
		methods.myChartsClick();
		//图表当前选中了什么
		methods.myChartsBrushSelected();
		//图表父元素事件
		methods.canvasPreDivClick();
		//关系列表事件（显示隐藏）
		methods.relationListsBtn();
	},
	//============菜单绘制
	menu(dom, level, data_3, data_4) {
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
					li += '<li class="r_menu_level_li posa" title="' + data_3[i].name + '" style="transform: rotateZ(-' + (90 - deg *
							(
								Number(i) + 1)) + 'deg);" onclick = "methods.li_click(this)">' +
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
						'" onmouseover="methods.li_mouseup(this)"  onmouseout="methods.li_mouseout(this)" style="transform: rotateZ(-' +
						(90 - deg * i) +
						'deg);" onclick = "methods.li_click(this)">' +
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
						'" onmouseover="methods.li_mouseup(this)"  onmouseout="methods.li_mouseout(this)" style="transform: rotateZ(-' +
						(90 - deg * i) +
						'deg);" onclick = "methods.li_click(this)">' +
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
	},
	//=============菜单列表绘制============
	relationLists(data) {
		if (!data) return;
		let html = '';
		for (i in data) {
			html +=
				`<div class="swiper-slide">
							<div class="relation-name">` + data[i].relation_name +
				`</div>
							<div class="circle"></div>
							<div class="detail">
								<div class="relation-a">` + data[i].relation_a +
				`</div>
								<div class="relation-arrow right"></div>
								<div class="relation-b">` + data[i].relation_b +
				`</div>
								<div class="relation-time">` + data[i].relation_time +
				`</div>
								<div class="desc-full hidden">` + data[i].desc_full +
				`</div>
								<div class="desc">` + data[i].desc +
				`</div>
								<div class="c"></div>
							</div>
						</div>`
		}
		dom.r_lists_ul.append(html);
		//轮播
		dom.swiper = new Swiper('.swiper-container', {
			//init:false,
			direction: 'vertical',
			//speed:3000,
			slidesPerView: "auto", //4,
			//centeredSlides : true,
			slideToClickedSlide: true,
			spaceBetween: 0,
			//roundLengths: true,
			freeMode: false, //slide惯性滑动
			loop: true,
			loopedSlides: 5,
			mousewheel: true,
			autoplay: false
		});
		//swiper从当前slide开始过渡到另一个slide时执行
		dom.swiper.on("slideChangeTransitionStart", function() {
			let _that = this;
			
			console.log("option.series[0]",option.series[0]);
			
			render.dataLen = option.series[0].data.length;
			// 取消之前高亮的图形
			render.myChart.dispatchAction({
				type: 'downplay',
				seriesIndex: 0,
				dataIndex: _that.activeIndex - 5
			});
			render.app.currentIndex = (render.app.currentIndex + 1) % render.dataLen;
			// 高亮当前图形
			render.myChart.dispatchAction({
				type: 'focusNodeAdjacency',
				seriesIndex: 0,
				dataIndex: _that.activeIndex - 5 //render.app.currentIndex
			});
			// 显示 tooltip
			render.myChart.dispatchAction({
				type: 'showTip',
				seriesIndex: 0,
				dataIndex: render.app.currentIndex
			});
			console.log('计数：', _that.activeIndex);

			//自动播放按钮动画
			if (dom.swiper.autoplay.running) {
				$(".rightcircle").addClass("rotate45_225");
				render.time = setTimeout(function() {
					$(".leftcircle").addClass("rotate45_225");
				}, 1500);
				setTimeout(function() {
					$(".rightcircle").removeClass("rotate45_225");
					$(".leftcircle").removeClass("rotate45_225");
					clearTimeout(render.time);
				}, 2999);
			}
			//console.log(this);
		});
		//添加回调函数或者事件句柄
		dom.swiper.on("click", function() {
			let _that = this;
			$(".swiper-slide").removeClass("swiper-slide-active");
			$(this.clickedSlide).addClass("swiper-slide-active");
			//图形连接高亮
			render.myChart.dispatchAction({
				type: 'focusNodeAdjacency',
				// 使用 seriesId 或 seriesIndex 
				//或 seriesName 来指定 series.
				//seriesId: "series00",
				seriesIndex: 0,
				//seriesName: "series0",
				// 使用 dataIndex 来指定目标节点，或者使用 edgeDataIndex 来指定目标边。
				dataIndex: _that.clickedIndex, //6
				//edgeDataIndex: 5
			})
		});
		//关系列表播放
		dom.r_lists_play.off("click").on("click", (e) => {
			dom.r_lists_box.show();
			dom.r_lists_box.addClass("open");
			if (dom.swiper.autoplay.running) {
				$(".r_lists_play_btn").css({
					"backgroundImage": "url(./img/pause.svg)",
					"left": "15px"
				})
				dom.swiper.autoplay.stop();
				$(".rightcircle").removeClass("rotate45_225");
				$(".leftcircle").removeClass("rotate45_225");
				clearTimeout(render.time);
			} else {
				$(".r_lists_play_btn").css({
					"backgroundImage": "url(./img/play.svg)",
					"left": "13px"
				})
				dom.swiper.autoplay.start();
				$(".rightcircle").addClass("rotate45_225");
				render.timer = setTimeout(function() {
					$(".leftcircle").addClass("rotate45_225");
				}, 1500);
				setTimeout(function() {
					$(".rightcircle").removeClass("rotate45_225");
					$(".leftcircle").removeClass("rotate45_225");
					clearTimeout(render.timer);
				}, 2990);
			}
		});
		//关系探索点击
		dom.switch_btn_container.on("click", function(e) {
			if ($(this).hasClass("close")) {
				$(this).removeClass("close");
			} else {
				$(this).addClass("close");
				dom.swiper.autoplay.stop();
				$(".r_lists_play_btn").css({
					"backgroundImage": "url(./img/pause.svg)",
					"left": "15px"
				});
				$(".rightcircle").removeClass("rotate45_225");
				$(".leftcircle").removeClass("rotate45_225");
				clearTimeout(render.time);
				clearTimeout(render.timer);
			}
		});
	},
	//=============图表点击事件=============
	myChartsClick() {
		//图表添加点击
		render.myChart.on('click', function(params) {
			render.current.echarts_name = params.name;
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
			//移除自定义弹框
			$(".r_tip").remove();
			//判断点击位置
			if (params.dataType == "edge") {
				$(".r_relation").append(dia_str);
				$(".r_tip").css({
					"left": x,
					"top": y,
					"z-index": 3,
				})
			} else if (params.dataType == "node") {
				//圆盘菜单显示隐藏
				methods.menu(".r_menu", 4, data_menu.data3, data_menu.data4);
				if (render.current.dataIndex == params.dataIndex) {
					render.current.dataIndex = null;
					$(".r_menu").addClass("r_menu_hide");
				} else {
					render.current.dataIndex = params.dataIndex;
					$(".r_menu").addClass("r_menu_hide");
					setTimeout(function() {
						$(".r_menu").removeClass("r_menu_hide");
					}, 290)
				}
			}
			//后续操作
			console.log("图表添加点击", params);
			//
		})
	},
	//==========图表当前选中了什么============
	myChartsBrushSelected() {
		//图表添加点击
		render.myChart.on('brushselected', function(params) {
			console.log("对外通知当前选中了什么", params);
		})
	},
	//=========绘制弹窗====================
	chartTipTop(data) {
		console.log(data);
		render.myChart.setOptions({
			graphic: [{
				type: 'group',
				position: [100, 100],
				draggable: false,
				$action: 'replace',
				width: 380,
				height: 200,
				z: 100,
				children: [{
						type: 'rect',
						z: 100,
						shape: {
							width: 380,
							height: 80
						},
						style: {
							fill: '#444850',
						}
					},
					{
						type: 'text',
						z: 100,
						left: "center",
						top: "5%",
						style: {
							fill: '#e8e9f0',
							text: [
								'种位 ➡ ️置爱'
							].join('\n'),
							font: '14px Microsoft YaHei'
						}
					},
					{
						type: 'rect',
						z: 100,
						left: "center",
						top: 80,
						shape: {
							width: 380,
							height: 120
						},
						style: {
							fill: '#32363d',
							stroke: "transparent",
							lineWidth: 0
						}
					},
					{
						type: 'text',
						z: 100,
						left: "center",
						top: 120,
						style: {
							fill: '#bec0d0',
							text: [
								'请求的数据'
							].join('\n'),
							font: '14px Microsoft YaHei'
						}
					}
				]
			}]
		})
	},
	//=========检测图表上的点击事件==========
	canvasPreDivClick() {
		$("canvas").parent("div").on("click", (e) => {
			//获取元素cursor状态
			let def = $("canvas").parent("div").attr("style").split("cursor:")[1]
			//判断是否在元素上
			if (def.indexOf("default") > -1) {
				//移除line弹窗
				$(".r_tip").remove();
				//关掉菜单
				if (!$(".r_menu").hasClass("r_menu_hide")) {
					setTimeout(function() {
						render.current.dataIndex = null;
						$(".r_menu").addClass("r_menu_hide");
					}, 100)
				}
			}
		})
	},
	//=============圆盘菜单点击==============
	li_click(e) {
		//请求数据以及数据处理
		//$.ajax()
		data.nodes.push({
			name: "" + Date.now(),
			category: 2
		});
		data.links.push({
			target: render.current.echarts_name,
			source: "" + Date.now(),
			name: "qwer"
		});
		categories.push({
			name: '其他',
			itemStyle: {
				color: "#f00"
			}
		})
		//清空操作
		render.myChart.clear();
		//图表设置
		render.myChart.setOption(option);
		$(e).toggleClass("r_menu_level_li_active");
		//其他操作。。。
	},
	//=============菜单hover(鼠标移上)的提示框
	li_mouseup(e) {
		let title = $(e).attr("title_tip");
		let str = '<span>' + title + '</span>';
		$(e).find("i").append(str);
	},
	//=============菜单鼠标移开的提示框=======
	li_mouseout(e) {
		$(e).find("span").remove();
	},
	//=============关系列表控制==============
	relationListsBtn() {
		dom.r_lists_btn.off("click").on("click", (e) => {
			if (dom.r_lists_box.hasClass("open")) {
				dom.r_lists_box.hide();
				dom.r_lists_box.removeClass("open");
				$(".r_lists_play_btn").css({
					"backgroundImage": "url(./img/pause.svg)",
					"left": "15px"
				});
				$(".leftcircle").removeClass("rotate45_225");
				$(".rightcircle").removeClass("rotate45_225");
				dom.swiper.autoplay.stop();
			} else {
				dom.r_lists_box.show();
				dom.r_lists_box.addClass("open");
			}
		})
	}
}

/**
 * 执行脚本
 * */
page.init();
