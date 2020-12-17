import axios from 'axios'

export default {
    joinRoom: function(passcode, userObj) {
        return axios.put('http://localhost:4000/api/room/join/' + passcode, userObj)
    }
}