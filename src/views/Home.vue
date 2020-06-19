<template>
  <div :class="$options.name">
    Home
    <van-button>按钮测试</van-button>
  </div>
</template>

<script>
/**
* @file Home.vue
* @author shenjp@founder.com
* @date 2020-06-19 22:22:31
*/
export default {
  name: 'Home',
  data () {
    return {
    };
  }
};
</script>

<style lang="scss" scoped>
.Home {
  font-size: 24px;
}
</style>
