<template>
    <li class="list-group-item media" @click="onVideoSelect">
        <img :src="thumbnailUrl" :alt="video.snippet.title" class="img-responsive img mr3">
        <div class="media-body">
            <span>{{video.snippet.title}}</span>
        </div>
    </li>
</template>

<script>
export default {
    name: 'VideoListItem',
    props: ['video'],
    methods: {
        onVideoSelect() {
            this.$emit("videoSelect", this.video)
        }
    },
    computed: {
        thumbnailUrl() {
            return this.video.snippet.thumbnails.default.url;
        }
    }
};
</script>

<style scoped>
.img {
    margin-right: 8px;
}

.media {
    display: flex;
    cursor: pointer;
}

.media:hover {
    background-color: #eee;
}
</style>