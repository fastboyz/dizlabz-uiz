<template>
  <div>
    <div
      class="
        container
        d-flex
        align-items-center
        justify-content-center
        flex-column
      "
    >
      <img src="~/static/loading.svg" alt="Loading..." width="80px" />
      Logging in...
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Callback',
  data() {
    return {
    }
  },
    mounted() {
    this.getUser()
  },
  methods: {
    async getUser() {
      const clientId = process.env.TWITCH_CLIENT_ID || 'Testing_client_ID'
      const clientSecret =  process.env.TWITCH_CLIENT_SECRET || 'Testing_client_SECRET'
      const redirectUri = process.env.TWITCH_REDIRECT_URI || 'http://localhost:3000/callback'
      if (this.$route.query.code) {
        const url = `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&code=${this.$route.query.code}&grant_type=authorization_code&redirect_uri=${redirectUri}`
        const { data } = await this.$axios.post(url)
        this.$store.commit('setUser', data)
        this.$router.push('/')
      }
      // TODO-Steve: Handle error
      // TODO-Steve: Handle no code
      // TODO-Steve: Handle no user
      // TODO-Steve: Handle no token
      // TODO-steve: Send token to server
    },
  },
})
</script>
