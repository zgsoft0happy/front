new Vue({
	el:"#vue-app3",
	data:{
		name:"yyb",
		job:"developer",
		website:"http://www.baidu.com",
		websiteTag:"<a href='www.baidu.com'>baidu</a>"
	},
	methods: {
		alert1: function() {
			alert('Hello World!')
		}
	}
})
