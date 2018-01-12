new Vue({
  el:'#vue-app8',
  data:{
    changeColor:false,
    changeLength:false
  },
  methods:{

  },
  computed:{
    compClasses:function() {
      return {
        changeColor: this.changeColor,
        changeLength: this.changeLength,
      }
    }
  }
})
