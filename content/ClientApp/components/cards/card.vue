<template>
  <div class="card"
        :class="[
        {[`bg-gradient-${gradient}`]:gradient}
        ]">
    <div class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot name="body"></slot>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    gradient: {
      type: String,
      description: "Card background"
    }
  }
}
</script>
