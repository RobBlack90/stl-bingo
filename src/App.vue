<template>
  <div id="app">
    <router-view/>
    <div class="footer">
      <a v-if="isMobile" href="https://www.instagram.com/thatrobbyblack" target="_blank">Instagram: @ThatRobbyBlack</a>
      <a v-else href="https://robby.black/" target="_blank">Duct taped together by Robby Black.</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: function () {
    return {}
  },
  computed:{
    isMobile() {
      return screen.width < 768         
    }
  },
  methods: {}
}
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footer {
  margin: .5rem;
  display: flex;
  align-items: center;

  p {
    font-size: .5rem;
  }

  a {
    float: right;
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s;
    margin-left: auto;
  }

  a:hover {
    color: #edf2f7;
    text-decoration:none; 
    cursor:pointer;  
  }
}

@media (max-width: 768px) {
  .footer {
    font-size: .75rem;
  }

}
</style>
