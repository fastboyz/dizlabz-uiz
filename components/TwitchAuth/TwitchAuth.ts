import {Vue, Component} from 'vue-property-decorator'

@Component
export default class TwitchAuth extends Vue {
  private clientId: string = process.env.TWITCH_CLIENT_ID || "Testing_client_ID"
  private redirectUri: string = process.env.TWITCH_REDIRECT_URI || "http://localhost:3000/callback"
  private scope: string = process.env.TWITCH_SCOPE || "user_read"
  twitchUrl: string = `https://id.twitch.tv/oauth2/authorize?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&response_type=code&scope=${this.scope}&claims=<JSON object specifying requested claims>`
}
