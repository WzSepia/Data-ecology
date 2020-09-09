var data = {
	nodes: [{
		name: '美洲',
		category: 0,
		relation_name: "本地",
		relation_a: "美洲",
		relation_b: "美洲",
		relation_name: "属于",
		relation_time: "1433年 - 1521年",
		desc_full: "美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。",
		desc: "美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。"
	}, {
		name: '美洲原住民',
		category: 1,
		relation_name: "属于",
		relation_a: "美洲原住民",
		relation_b: "美洲",
		relation_name: "属于",
		relation_time: "1433年 - 1521年",
		desc_full: "美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。",
		desc: "美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。"
	}, {
		name: '蒙古人种',
		category: 2,
		relation_name: "属于",
		relation_a: "蒙古人种",
		relation_b: "美洲",
		relation_name: "属于",
		relation_time: "1433年 - 1521年",
		desc_full: "与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。",
		desc: "现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。"
	}, {
		name: '印度人种',
		category: 3,
		relation_name: "属于",
		relation_a: "印度人种",
		relation_b: "美洲",
		relation_name: "属于",
		relation_time: "1433年 - 1521年",
		desc_full: "美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。",
		desc: "美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。"
	}, {
		name: '巴拿马人种',
		category: 4,
		relation_name: "属于",
		relation_a: "巴拿马人种",
		relation_b: "美洲",
		relation_name: "属于",
		relation_time: "1433年 - 1521年",
		desc_full: "美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。",
		desc: "美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。"
	}, {
		name: '奥巴马人种',
		category: 5,
		relation_name: "属于",
		relation_a: "奥巴马人种",
		relation_b: "美洲",
		relation_name: "属于",
		relation_time: "1433年 - 1521年",
		desc_full: "美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。",
		desc: "美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。"
	}, {
		name: '川普人种',
		category: 6,
		relation_name: "属于",
		relation_a: "川普人种",
		relation_b: "美洲",
		relation_time: "1466年 - 1521年",
		desc_full: "美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。",
		desc: "美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。"
	}, {
		name: '阿根廷人种',
		category: 7,
		relation_name: "属于",
		relation_a: "阿根廷人种",
		relation_b: "美洲",
		relation_time: "1466年 - 1521年",
		desc_full: "美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。",
		desc: "美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。"
	}, {
		name: '巴西人种',
		category: 8,
		relation_name: "属于",
		relation_a: "巴西人种",
		relation_b: "美洲",
		relation_time: "1466年 - 1521年",
		desc_full: "美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。",
		desc: "美洲原住民属于东亚人种美洲支系，与现代东亚人有共同的祖先，最晚在一万年前从东亚迁徙到美洲。"
	}],

	links: [{
		source: '美洲原住民',
		target: '美洲',
		name: '本地'
	}, {
		source: '蒙古人种',
		target: '美洲',
		name: '迁入'
	}, {
		source: '印度人种',
		target: '美洲',
		name: '迁入'
	}, {
		source: '巴拿马人种',
		target: '美洲',
		name: '迁入'
	}, {
		source: '奥巴马人种',
		target: '美洲',
		name: '迁入'
	}, {
		source: '川普人种',
		target: '美洲',
		name: '迁入'
	}, {
		source: '阿根廷人种',
		target: '美洲',
		name: '迁入'
	}, {
		source: '巴西人种',
		target: '美洲',
		name: '迁入'
	}]
}

const color1 = '#006acc';
const color2 = '#ff7d18';
const color3 = '#10a050';

data.nodes.forEach(node => {
	if (node.category === 0) {
		node.symbol = "image://./img/1.jpg";
	} else if (node.category === 1) {
		node.symbol = "image://./img/circle-1.png";
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
		name: 0,
		itemStyle: {
			color: color1
		}
	}, {
		name: 1,
		itemStyle: {
			color: color2
		}
	},
	{
		name: 2
	},
	{
		name: 3
	},
	{
		name: 4
	},
	{
		name: 5
	},
	{
		name: 6
	},
	{
		name: 7
	},
	{
		name: 8
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
