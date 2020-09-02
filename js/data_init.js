var data = {
	nodes: [{
		name: 'node0', //数据项名称。
		category: 0 //数据项所在类目的 index。
	}, {
		name: 'node1',
		category: 1
	}, {
		name: 'node2',
		category: 2
	}],
	//节点间的关系数据
	links: [{
			source: 'node0',
			target: 'node1'
		},
		{
			source: 'node1',
			target: 'node2'
		}
	]
}

data.nodes.forEach(node => {
	if (node.category === 0) {
		node.symbolSize = 150;
		node.itemStyle = {
			color: "#000"
		};
	} else if (node.category === 1) {
		node.symbolSize = 100;
		node.itemStyle = {
			color: "#666"
		};
	} else if (node.category === 2) {
		node.symbolSize = 70;
		node.itemStyle = {
			color: "#333"
		};
	}
});

/*节点分类的类目，可选。
 *如果节点有分类的话可以通过data[i].category
 *指定每个节点的类目，类目的样式会被应用到节点样式上。
 *图例也可以基于categories名字展现和筛选。
 */
var categories = [{
		//类目名称，用于和 legend 对应以及格式化 tooltip 的内容。
		name: 0,
		itemStyle: {
			color: "#ff0"
		},
		label: {
			formatter: [
				'{a|categories修改label}'
			].join('\n'),
			rich: {
				a: {
					color: '#ffffff',
					fontSize: 22,
				}
			}
		}
	},
	{
		name: 1,
		itemStyle: {
			color: "#f0f", //图例颜色
			borderColor: "#00f",
			borderWidth: 10,
			borderType: 'solid',
		}
	},
	{
		name: 2,
		itemStyle: {
			color: "#f0f" //图例颜色
		}
	}
]

var option = {
	legend: {
		itemGap: 10,
		formatter: 'Legend {name}',
		textStyle: {
			color: "#ffffff",
			fontSize: 20
		}
	},
	tooltip: {
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
		edgeSymbolSize: 20,
		//标签。
		edgeLabel: {
			show: true,
			position: "middle",
			align: "left",
			formatter: [
				'{a|关系}'
			].join('\n'),
			rich: {
				a: {
					color: "#f00",
					fontSize: 20,
					fontWeight: "bold",
					verticalAlign: "top",
					lineHeight: "",
					borderColor: "hotpink",
					borderWidth: 4,
					borderRadius: 4,
					backgroundColor: 'pink',
				}
			}
		},
		//图形样式。
		itemStyle: {
			borderColor: "#f00",
			borderWidth: 4
		},
		//关系边的公用线条样式。
		lineStyle: {
			color: "#ffffff",
			width: 4,
		},
		//图形上的文本标签，可用于说明图形的一些数据信息
		label: {
			show: true,
			position: "inside",
			backgroundColor: "#f00",
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
		links: [{
				source: 'node0',
				target: 'node1',
				value: 100,
				lineStyle: {
					color: "#f00",
					curveness: 0.5
				}
			},
			{
				source: 'node1',
				target: 'node2'
			}
		]
	}]
}
