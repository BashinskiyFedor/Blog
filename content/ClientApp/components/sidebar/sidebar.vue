<template>
  <div class="navbar navbar-expand navbar-vertical navbar-dark bg-dark">
    <ul class="navbar-nav align-items-center">
      <slot name="links">
      </slot>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'sidebar'
  }
</script>