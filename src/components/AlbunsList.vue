<template>
    <div class="row mt-3">
        <div class="col">
            <h2> Albuns </h2>
            <div v-for="album of albuns" v-bind:key="album['.key'] " class="card mt-2">
                <div class="card-body">
                    <h5 class="card-title">{{album.name}}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{{album.artist}} - {{album.releaseDate}}</h6>
                    <p class="card-text">{{album.comment}}</p>
                    <span v-for="(genre, index) in album.genres" :key="index" class="badge badge-dark ml-1 mr-1">{{genre}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { albunsRef } from '@/firebase';

export default {
    name: 'albunsList',
    firebase: {
        albuns: albunsRef
    }
}    
</script>

<style scoped>

</style>
