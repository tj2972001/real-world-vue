import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000
})
export default {
  getEvents(limit, page) {
    return apiClient.get('/events/?_limit=' + limit + '&_page=' + page)
  },
  showEvent(id) {
    return apiClient.get(`/events/${id}`)
  },
  postEvent(event) {
    return apiClient.post('/events', event)
  }
}
