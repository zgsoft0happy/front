new Vue({
	el:"#vue-app4",
	data:{
		x:0,
		y:0,
		name:"yyb",
		age: 30
	},
	methods:{
		add:function() {
			this.age++;
		},
		subtract:function() {
			this.age--;
		},
		addten: function() {
			this.age = this.age + 10;
		},
		subtractten: function() {
			this.age = this.age - 10;
		},
		addnew:function(tmp) {
			this.age = this.age + tmp;
		},
		subtractnew:function(tmp) {
			this.age = this.age - tmp;
		},
		updateXY:function(event) {
			this.x = event.offsetX;
			this.y = event.offsetY;
		},
		stopMoving: function(event) {
			event.stopPropagation();
		}
	}
})
