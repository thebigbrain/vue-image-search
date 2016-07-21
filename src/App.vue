<template>
  <div id="app">
    <div class="mdl-layout mdl-js-layout">
      <div class="mdl-layout__content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Search from './components/Search'

export default {
  components: {
    Search
  }
}
</script>
