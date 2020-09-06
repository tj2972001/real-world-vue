<template>
  <div>
    <h1>Events for {{ user.user.name }}</h1>
    <EventCard v-for="event in event.events" :event="event" :key="event.id" />
    <template v-if="page != 1">
      <router-link :to="{ name: 'event-list', query: { page: page - 1 } }"
        >previous</router-link
      >
    </template>
    <template v-if="page * limit < totalEvents">
      <router-link :to="{ name: 'event-list', query: { page: page + 1 } }">
        | next</router-link
      >
    </template>
  </div>
</template>
<script>
import EventCard from '../components/EventCard'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    EventCard
  },
  created() {
    this.fetchEvents({
      limit: 3,
      page: this.page
    })
    // this.$store.dispatch('fetchEvents', {
    //   limit: 3,
    //   page: this.page
    // })
  },
  computed: {
    ...mapState(['event', 'user']),
    page() {
      return this.$route.query.page || 1
    },
    limit() {
      return this.$route.query.limit || 3
    },
    totalEvents() {
      return this.$store.state.event.eventsTotal
    }
  },
  methods: mapActions('event', ['fetchEvents'])
}
</script>
