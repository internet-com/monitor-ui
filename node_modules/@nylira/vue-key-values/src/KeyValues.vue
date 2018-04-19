<template>
  <div class="ni-kvs">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ni-kvs'
}
</script>

<style lang="stylus">
.ni-kvs
  display flex
  flex-flow column
  justify-content center

  padding 0.5rem 0
  background #fff

  .ni-kv
    flex 1

@media screen and (min-width: 414px)
  .ni-kvs
    padding 0.75rem 0

@media screen and (min-width: 768px)
  .ni-kvs
    padding 1rem 0
</style>
