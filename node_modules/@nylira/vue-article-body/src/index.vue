<template>
  <div class="ni-article-body">
    <div class="ni-article-body-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ni-article-body',
  props: ['content']
}
</script>

<style src="./style.css"></style>
