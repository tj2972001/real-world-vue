import EventService from './../../services/EventSErvice'
export const namespaced = true
export const state = {
  events: [],
  eventsTotal: 0,
  event: {}
}
export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event)
  },
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_TOTAL_EVENTS(state, totalEvents) {
    state.eventsTotal = totalEvents
  },
  SHOW_EVENT(state, event) {
    state.event = event
  }
}
export const actions = {
  createEvent({ commit, dispatch }, event) {
    return EventService.postEvent(event)
      .then(() => {
        commit('ADD_EVENT', event)
        const notification = {
          type: 'success',
          message: 'Event was created successfully '
        }
        dispatch('notification/add', notification, { root: true })
      })
      .catch(e => {
        const notification = {
          type: 'error',
          message: 'Cannot reach to server' + e.message
        }
        dispatch('notification/add', notification, { root: true })
      })
  },
  fetchEvents({ commit, dispatch }, { limit, page }) {
    console.log('Created')
    EventService.getEvents(limit, page)
      .then(res => {
        // this.events = res.data
        commit('SET_EVENTS', res.data)
        commit('SET_TOTAL_EVENTS', res.headers['x-total-count'])
        const notification = {
          type: 'success',
          message: 'Events was fetched successfully'
        }
        dispatch('notification/add', notification, { root: true })
      })
      .catch(e =>
        //console.log(e)
        {
          const notification = {
            type: 'error',
            message: 'Cannot reach the server ' + e.message
          }
          dispatch('notification/add', notification, { root: true })
        }
      )
  },
  fetchEvent({ commit, dispatch }, event) {
    return EventService.showEvent(event).then(response => {
      commit('SHOW_EVENT', response.data)
      const notification = {
        type: 'success',
        message: 'Events was fetched successfully'
      }
      dispatch('notification/add', notification, { root: true })
    })
    // .catch(error => {
    //   const notification = {
    //     type: 'error',
    //     message: 'Cannot reach to server' + error.message
    //   }
    //   dispatch('notification/add', notification, { root: true })
    // })
  }
}
