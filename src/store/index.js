import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
 const state = {
  count: 0,
  appName: "我的项目",
  appAge: "项目年纪",
  list: [1,2,3,4,5,6],
}
 
 const getters ={
  count: state => { return '当前最新的count值是：' + state.count},
  length: state => { return state.list.length }
 }
export default new Vuex.Store({
  state,
  mutations: {
      increment(state,a){
        console.log('增加');
         state.count += a
      },
      reduce(state){
        console.log('减少')
        state.count--
      }
  },
  getters
  
  //   //  optCount(state){
  //   //    return '当前最新的count值是：' + state.count;
  //   //  }
    //  count: state => { return '当前最新的count值是：' + state.count}
     
  //   //  doneTodos: state => {//通过方法访问
	// 	//   return state.todos.filter(todo => todo.done)
	// 	// },
   
  ,
  actions: {

  }
})
