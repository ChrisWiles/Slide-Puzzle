import axios from 'axios'

export function syncLeaderBoard(leaderBoard) {
  return axios.post('/leaderBoard', {leaderBoard})
}
