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
		node.symbol = "image://./img/1.jpg";
		//node.symbolSize = 100;
		// node.itemStyle = {
		// 	color: color1
		// };
	} else if (node.category === 1) {
		node.symbol = "image://./img/circle-1.png";
		// node.itemStyle = {
		// 	color: color2
		// };
	}
});

data.links.forEach(link => {
	// link.label = {
	// 	position: "middle",
	// 	verticalAlign: "middle",
	// 	padding: 4,
	// 	lineHeight: 5,
	// 	align: 'center',
	// 	fontSize: 14,
	// 	backgroundColor: "#eee",
	// };

	// if (link.name === '参股') {
	// 	link.lineStyle = {
	// 		color: color2
	// 	}
	// } else if (link.name === '董事') {
	// 	link.lineStyle = {
	// 		color: color1
	// 	}
	// } else if (link.name === '法人') {
	// 	link.lineStyle = {
	// 		color: color3
	// 	}
	// }
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

//菜单数据
var data_menu = {
	data3: [{
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
	}],
	data4: [{
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
	}]
}

/**
	* 菜单列表
	* */
var relations_lists_data = [{
	relation_name:"属于",
	relation_a:"美洲原住民",
	relation_b:"蒙古人种",
	relation_time:"1400年 - 2521年",
	desc_full:"美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。",
	desc:"美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。"
},{
	relation_name:"属于",
	relation_a:"美洲原住民",
	relation_b:"蒙古人种",
	relation_time:"1428年 - 1521年",
	desc_full:"美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。",
	desc:"美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。"
},{
	relation_name:"属于",
	relation_a:"美洲原住民",
	relation_b:"蒙古人种",
	desc_full:"美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。",
	desc:"美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。"
},{
	relation_name:"属于",
	relation_a:"美洲原住民",
	relation_b:"蒙古人种",
	desc_full:"美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。",
	desc:"美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。"
},{
	relation_name:"属于",
	relation_a:"美洲原住民",
	relation_b:"蒙古人种",
	desc_full:"美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。",
	desc:"美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。"
},{
	relation_name:"属于",
	relation_a:"美洲原住民",
	relation_b:"蒙古人种",
	desc_full:"美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。",
	desc:"美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。"
},{
	relation_name:"属于",
	relation_a:"美洲原住民",
	relation_b:"蒙古人种",
	desc_full:"美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。",
	desc:"美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。"
},{
	relation_name:"属于",
	relation_a:"美洲原住民",
	relation_b:"蒙古人种",
	desc_full:"美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。",
	desc:"美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。"
},{
	relation_name:"属于",
	relation_a:"美洲原住民",
	relation_b:"蒙古人种",
	desc_full:"美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。",
	desc:"美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。"
},{
	relation_name:"属于",
	relation_a:"美洲原住民",
	relation_b:"蒙古人种",
	desc_full:"美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。",
	desc:"美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。"
},{
	relation_name:"属于",
	relation_a:"美洲原住民",
	relation_b:"蒙古人种",
	desc_full:"美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。",
	desc:"美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。"
},{
	relation_name:"属于",
	relation_a:"美洲原住民",
	relation_b:"蒙古人种",
	desc_full:"美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。",
	desc:"美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。"
},{
	relation_name:"属于",
	relation_a:"美洲原住民",
	relation_b:"蒙古人种",
	desc_full:"美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。",
	desc:"美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。"
},{
	relation_name:"属于",
	relation_a:"美洲原住民",
	relation_b:"蒙古人种",
	desc_full:"美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。",
	desc:"美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。"
}]