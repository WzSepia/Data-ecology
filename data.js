var data = {
	nodes: [{
		name: '操作系统集团',
		category: 0
	}, {
		name: '浏览器有限公司',
		category: 0
	}, {
		name: 'HTML科技',
		category: 0
	}, {
		name: 'JavaScript科技',
		category: 0
	}, {
		name: 'CSS科技',
		category: 0
	}, {
		name: 'Chrome',
		category: 1
	}, {
		name: 'IE',
		category: 1
	}, {
		name: 'Firefox',
		category: 1
	}, {
		name: 'Safari',
		category: 1
	}],

	links: [{
		source: '浏览器有限公司',
		target: '操作系统集团',
		name: '参股'
	}, {
		source: 'HTML科技',
		target: '浏览器有限公司',
		name: '参股'
	}, {
		source: 'CSS科技',
		target: '浏览器有限公司',
		name: '参股'
	}, {
		source: 'JavaScript科技',
		target: '浏览器有限公司',
		name: '参股'
	}, {
		source: 'Chrome',
		target: '浏览器有限公司',
		name: '董事'
	}, {
		source: 'IE',
		target: '浏览器有限公司',
		name: '董事'
	}, {
		source: 'Firefox',
		target: '浏览器有限公司',
		name: '董事'
	}, {
		source: 'Safari',
		target: '浏览器有限公司',
		name: '董事'
	}, {
		source: 'Chrome',
		target: 'JavaScript科技',
		name: '法人'
	}]
}


const color1 = '#006acc';
const color2 = '#ff7d18';
const color3 = '#10a050';

data.nodes.forEach(node => {
	if (node.category === 0) {
		node.symbolSize = 100;
		node.itemStyle = {
			color: color1
		};
	} else if (node.category === 1) {
		node.itemStyle = {
			color: color2
		};
	}
});

data.links.forEach(link => {
	link.label = {
		position: "middle",
		verticalAlign: "middle",
		padding: 10,
		lineHeight: 5,
		align: 'center',
		fontSize: 14,
		backgroundColor: "#eee",
	};

	if (link.name === '参股') {
		link.lineStyle = {
			color: color2
		}
	} else if (link.name === '董事') {
		link.lineStyle = {
			color: color1
		}
	} else if (link.name === '法人') {
		link.lineStyle = {
			color: color3
		}
	}
});

var categories = [{
		name: '公司',
		itemStyle: {
			color: color1
		}
	},
	{
		name: '董事',
		itemStyle: {
			color: color2
		}
	}
]

var option = {
	title: {
		text: '数据生态',
		textAlign: 'center',
		left: "center",
		textStyle: {
			color: "#ffffff",
		}
	},
	tooltip: {
		formatter: '{b}: {c}<br />',
		backgroundColor: 'rgba(0,0,0,1)',
		borderColor: '#333',
	},
	// legend: [{
	// 	// selectedMode: 'single',
	// 	data: categories.map(x => x.name),
	// 	// icon: 'circle'
	// }],
	series: [{
		type: 'graph',
		layout: 'force',
		symbol: "image://./img/1.jpg",
		symbolSize: 58,
		draggable: false,
		roam: true,
		focusNodeAdjacency: false,
		categories: categories,
		edgeSymbol: ['circle', 'arrow'],
		edgeLabel: {
			show: true,
			fontSize: 12,
			formatter: [
				'{a|这a}',
				'{b|这b}'
			].join('\n'),
			rich: {
				a: {
					color: 'red',
					lineHeight: 16
				},
				b: {
					backgroundColor: {
						image: 'xxx/xxx.jpg'
					},
					height: 40
				}
			}
		},
		itemStyle: {
			borderColor: "#f00",
			borderWidth: 4
		},
		markPoint: {
			symbol: "pin",
			symbolSize: 50,
			label: {
				show: true,
				width: 100,
				height: 100,
				formatter: 'shijiaii',
				backgroundColor: "#f60",
				borderColor: "#000",
				borderWidth: 10,
			}
		},
		label: {
			show: true,
			position: "",
			backgroundColor: "transparent",
			borderRadius: 4,
		},
		force: {
			repulsion: 2000,
			edgeLength: 120
		},
		data: data.nodes,
		links: data.links
	}]
}
