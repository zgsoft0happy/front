new Vue({
  el:'#vue-app7',
  data:{
    a:0,
    b:0,
    age:20
  },
  methods:{
    addToA:function() {
      console.log('Add To A');
      return this.a + this.age;
    },
    addToB:function() {
      console.log('Add To B');
      return this.b + this.age;
    }
  },
  computed:{
    addToA1:function() {
      console.log('Add To A 1');
      return this.a + this.age;
    },
    addToB1:function() {
      console.log('Add To B 1');
      return this.b + this.age;
    }
  }
})
