<template>
  <div class="notification-bar">
    <p :class="notificationTypeClass">{{ notification.message }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      timeout: null
    }
  },
  mounted() {
    this.timeout = setTimeout(() => {
      this.remove(this.notification)
    }, 5000)
  },
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  computed: {
    notificationTypeClass() {
      return `-text-${this.notification.type}`
    }
  },
  methods: {
    ...mapActions('notification', ['remove'])
  }
}
</script>

<style scoped>
.notification-bar {
  margin: 1em 0 1em;
}
.-text-success {
  color: green;
}
.-text-error {
  color: red;
}
</style>
