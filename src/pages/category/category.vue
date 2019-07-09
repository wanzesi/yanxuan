<template>
  <div class="page category">
    <div class="wrapper" ref="wrapper"  :scrollY="true" :scrollbar="options.scrollbar" :startY="options.startY">
      <ul class="content">
        <li  v-for="(item,index) in arrNew" :key="index">{{item}}</li>
        
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "category",
  data() {
    return {
      arrNew: [1,1,2,3,4,5,6,8],
      options: {
        pullDownRefresh: {
          threshold: 50, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
          stop: 0 // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
        },
        pullUpLoad: {
          threshold: -100 // 在上拉到超过底部 20px 时，触发 pullingUp 事件
        },
        click: true,
        tap: true,
        probeType: 3,
        startY: 0,
        scrollbar: true
    //  pullDownRefresh: false, //关闭下拉
    //  pullUpLoad: false, // 关闭上拉
      },
      scroll: null,
    };
  },
  methods: {
    load() {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, this.options);
        // this.scroll.hasVerticalScroll = true;
        // 上拉
        this.scroll.on("pullingUp", () => {
          // 刷新数据的过程中，回弹停留在距离顶部还有20px的位置
          this.setData();
        });
      } else {
        this.scroll.refresh();
      }
    },
    setData() {
      this.$nextTick(() => {
        console.log(this.scroll);
        let arr = [1, 2, 3, "8",4,5,6,7];
        // this.arrNew = this.arrNew.concat(arr); // 添加数据
        this.arrNew = arr;
        this.scroll.finishPullUp();
        this.pullingDownUp();
      });
    },
    pullingDownUp() {
      this.scroll.refresh(); //重新计算元素高度
    }
  },
  created(){
     this.$nextTick(() => {
        this.load()
        this.setData()
      })
  },
  mounted() {}
};
</script>

<style lang="scss" scope>
.category h1 {
  /* font-size: 40px; */
  font-size: 20px;
  font-style: italic;
}
.category {
  // overflow: hidden;
  position: relative;
  p {
    font-size: 1rem;
  }
  .wrapper{
    
    // position: absolute;
    // left: 0;
    // top: 0;
    // bottom: 0.44rem;
    // overflow: hidden;
    height: 6.67-0.44rem;
    ul{
      li{
        width: 100%;
      }
    }
  }
}
</style>
