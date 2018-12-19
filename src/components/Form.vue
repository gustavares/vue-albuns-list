<template>
    <div class="row" id="inputs">
      <div class="col">
        <form v-on:submit="onSubmit">
          <div class="form-group">
            <label for="name"> Name: </label>
            <input class="col-4 form-control" v-model="name" id="name" type="text"/>
          </div>

          <div class="form-group">
            <label for="artist"> Artist: </label>
            <input class="col-4 form-control" id="artist" v-model="artist" type="text"/>
          </div>

          <div class="form-group">
            <label for="releaseDate"> Release Date: </label>
            <input class="col-4 form-control" id="releaseDate" v-model="releaseDate" type="date"/>
          </div>

          <fieldset>
            <legend>Genre: </legend>
          
            <div class="form-check form-check-inline">
              <input class="form-check-input" value="Hip-hop" v-model="genres" type="checkbox">
              <label class="form-check-label" for="hip-hop">Hip-hop</label>
              
            </div>
            
            <div class="form-check form-check-inline">
              <input class="form-check-input" value="Rock" v-model="genres" type="checkbox">
              <label class="form-check-label" for="rock">Rock</label>
            </div>
            
            <div class="form-check form-check-inline">
              <input class="form-check-input" value="Jazz" v-model="genres" type="checkbox">
              <label class="form-check-label" for="jazz">Jazz</label>
            </div>
            
            <div class="form-check form-check-inline">
              <input class="form-check-input" value="Randb" v-model="genres" type="checkbox">
              <label class="form-check-label" for="randb">R&B</label>
            </div>

            <div class="form-check form-check-inline">
              <input class="form-check-input" value="Indie" v-model="genres" type="checkbox">
              <label class="form-check-label" for="indie">Indie</label>
            </div>
          </fieldset>

          <div class="form-group">
            <label for="comment">Comment: </label>
            <textarea class="form-control" id="comment" v-model="comment" rows="4" cols="50"></textarea>
          </div>

          <button class="btn btn-primary" id="submit" type="submit">Add Album</button>
        </form>
      </div> <!-- .col -->
    </div> <!-- .row -->
</template>

<script>
import { albunsRef } from '@/firebase';

  export default {
    data() {
      return {
        name: '',
        artist: '',
        releaseDate: '',
        genres: [],
        comment: ''
      }
    },
    methods: {
      onSubmit(event) {
        console.log('Submitting...')
        albunsRef.push({ 
          name: this.name,
          artist: this.artist,
          releaseDate: this.releaseDate,
          genres: this.genres,
          comment: this.comment
        });
        event.target.reset();
      } 
    }
  }
</script>
