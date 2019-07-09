<template>
    <div class="index page">
        <h1></h1>
        <Counter></Counter>
        <Amount/>
    </div>
</template>

<script>
import Amount from '@/components/amount';
// import Amount from '../../components/amount';
import Counter from '@/components/counter';
export default {
    data(){
        return{
                 
        }
    },
     components: {
       Amount,
       Counter
   }
}
</script>

<style>

</style>
