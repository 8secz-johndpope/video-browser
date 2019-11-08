<template>
<div class="mainContainer">
    <Sidebar class="sidebar col-xs-3"></Sidebar>
    <div class="col-xs-9">
    <SearchBar @termChange="onTermChange"> </SearchBar>
        <div class="row">
            <VideoList :videos = "videos" @videoSelect="onVideoSelect"></VideoList>
            <VideoDetail :video="selectedVideo"></VideoDetail>
        </div>
    </div>
</div> 
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import Sidebar from './components/Sidebar/Sidebar';

const API_KEY = 'AIzaSyCt4ELsQl-kDnmSkKaSorciZjgY3cI3SIo';
export default {
    name: 'App',
    data() {
        return {
            videos: [],
            selectedVideo: null
        };
    },
    components: {
        SearchBar,
        VideoList,
        VideoDetail,
        Sidebar
    },
    methods: {
        onTermChange (searchTerm) {
            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    key: API_KEY,
                    type: 'video',
                    part: 'snippet',
                    q: searchTerm
                }
            }).then(
                response => this.videos = response.data.items
            ).catch(error => {
                window.console.log(error.response)
            });
        },
        onVideoSelect (video) {
            this.selectedVideo = video;
        }
    }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #EFF4F7;
}

.mainContainer {
    display: flex;
}

.sidebar {
    height: 100vh;
    width: 200px;
}
</style>