<template>
    <div class="counter">
         <input type="button" value="增加" @click="add"/>
         <input type="button" value="减少" @click="reduce"/>
         <br>
         <input type="text" v-model="$store.state.count">
         
         <p>{{name}} - {{age}}</p>
        <h3>{{$store.getters.count}}</h3>
         <!-- <hr/> -->
         <input type="number" v-model.number="a">
         <input type="number" v-model.number="b">
         <p>{{qiuhe}}</p>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
   data(){
       return{
            // count: 0
            a: 1,
            b: 2
       }
   },
   computed:{
      ...mapState({
          name: 'appName',
          age:  'appAge'
      }),
      ...{
           qiuhe(){
               return this.a + this.b;
           }
      }
           
      
   },
   methods:{
        add(){
            // this.$store.state.count++;
             this.$store.commit('increment',3);
        },
        reduce(){
             this.$store.commit('reduce');

        }
   }
  
}
</script>

<style>
input[type=button]{
     border: none;
     display: inline-block;
     width: 0.5rem;
     height: 0.3rem;
     background: lightblue;
     margin-left: 0.2rem;
}
p{
     font-size: .16rem;
}
</style>
