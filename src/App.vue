<template>
<div class="mainContainer">
    <Sidebar class="sidebar col-xs-3"></Sidebar>
    <div class="content col-xs-9">
        <Navbar></Navbar>
    <!-- <SearchBar @termChange="onTermChange"> </SearchBar>
        <div class="row">
            <VideoList :videos = "videos" @videoSelect="onVideoSelect"></VideoList>
            <VideoDetail :video="selectedVideo"></VideoDetail>
        </div> -->
    </div>
</div> 
</template>

<script>
import axios from 'axios';
// import SearchBar from './components/SearchBar';
// import VideoList from './components/VideoList';
// import VideoDetail from './components/VideoDetail';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';

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
        // SearchBar,
        // VideoList,
        // VideoDetail,
        Sidebar,
        Navbar
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
    width: 100%;
}

.sidebar {
    height: 100vh;
    width: 200px;
}

.content {
    width: 100%;
}
</style>