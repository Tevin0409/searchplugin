import axios from 'axios';

const KEY = 'AIzaSyCVR0GSfSKOnzpf_KetajUvIPdLlmqqkwU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 5,
        key: KEY,
        type:'video'
    }
});
