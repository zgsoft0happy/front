new Vue({
	el: "#vue-app2",
	data: {
		name:"yyb",
		job:"developer"
	},
	methods: {
		greet: function() {
			return "Good Morning!";
		},
		greet1: function(time) {
			return"Good " + time + "," + this.name + "!";
		}
	}
})