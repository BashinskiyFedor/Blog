<template>
  <card class="stats-card">
    <div class="row">
      <div class="col">
        <h5 class="text-uppercase card-title text-muted" v-if="title">{{title}}</h5>
        <span class="h2 font-weight-bold mb-0"></span>
      </div>
      <div class="col-auto" v-if="icon">
        <div class="icon icon-shape text-white rounded-circle shadow"
              :class="[`bg-${type}`, iconClasses]">
          <i :class="icon"></i>
        </div>
      </div>
    </div>
    <p class="mt-3 mb-0 text-sm">
      <slot name="footer">
      </slot>
    </p>
  </card>
</template>

<script>
export default {
  name: 'stats-card',
  props: {
    type: {
      type: String,
      default: 'dark'
    },
    title: {
      type: String,
      default: 'Title'
    },
    subtitle: {
      type: String,
      default: 'Subtitle'
    },
    icon: String,
    iconClasses: [String, Array]

  }
}
</script>