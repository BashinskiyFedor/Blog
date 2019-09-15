<template>
  <div class="card"
        :class="[
        {[`bg-gradient-${gradient}`]:gradient}
        ]">
    <div class="card-header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
    <div class="card-footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    gradient: {
      type: String,
      description: "Card background",
      default: "dark"
    }
  }
}
</script>
