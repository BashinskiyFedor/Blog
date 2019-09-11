<template>
  <div class="navbar navbar-vertical navbar-light bg-dark">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <slot name="links">
        </slot>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'sidebar'
  }
</script>