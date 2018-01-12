new Vue({
  el:'#vue-app6',
  data:{
    name:'hello',
    age:''
  },
  methods:{
    logName: function() {
      this.name = this.$refs.name1.value;
    },
    logAge: function() {
      this.age = this.$refs.age1.value;
    }
  }
})
