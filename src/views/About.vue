<template>
  <div class="about">
    <scroller class="category-menu border-right">
    <nav class="menu-wrap">
        <li v-for="(item, index) in cateMenu" :key="index"
            class="category-item" :class="{active: index == selectIndex}"
            >
            <span>{{item}}</span>
        </li>
    </nav>
</scroller>
  </div>
</template>

<script>
export default {
       data(){
         return{
           selectIndex: 0,
           cateMenu: [1,2,3,4,5,6,7,8]
         }
       }
}
</script>

<style lang="scss" scoped>
.category-item{
    padding: 10px 0;
    span{
        display: block;
        font-size: 14px;
        color: #333;
        text-align: center;
        line-height: 44px;
        border-left: 3px solid transparent;
    }
    &.active span{
        border-left: 3px solid #ab2b2b;
        color: #ab2b2b;
    }
}
</style>

