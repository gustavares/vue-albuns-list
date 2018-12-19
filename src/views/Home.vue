<template>
  <div class="container-fluid">
    
    <h1>Music Albuns List</h1>
    <Form></Form>
    <AlbunsList></AlbunsList>
  </div>
</template>

<script>
// @ is an alias to /src
import Form from '@/components/Form'
import AlbunsList from '@/components/AlbunsList'

export default {
  name: 'home',
  components: {
    Form,
    AlbunsList
  }
}
</script>
