<template>
  <div class="flex flex-col justify-center items-center">
    <div class="h-full min-w-full md:min-w-1/2">
      <div class="px-2 pt-2">
        <div :class="logoSpacing">
            <img class="w-full md:w-3/6 cursor-pointer" @click="goHome()" alt="STL Bingo!" src="../assets/images/STLBingo.png">
            <p>#STLBingo</p>
            <p class="font-xxs">https://stlbingo.rocks/</p>
        </div>
      </div>
      <div class="h-full p-0">
        <p class="text-xs text-center">Mark the spots you've gotten takeout/delivery!</p>
        <div :class="gridClasses">
          <div class="bg-white m-1 pb-11/12 relative text-black" 
          v-for="establishment in establishments" :key="establishment.name">
            <div class="absolute h-full w-full top-auto text-xs md:text-sm flex justify-center items-center text-center break-words">
              {{ establishment.name }}
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import establishmentsDb from "../assets/data/establishmentdb.js";

export default {
  name: 'Bingo',
  components: {
  },
  data: function () {
    return {
      establishments: [],
      selectedType : '',
      isFourRows: false
    }
  },
  mounted() {
    let establishments = [...establishmentsDb]
    this.selectedType = this.$route.params.type.toLowerCase()

    if (this.selectedType !== 'all') {
      establishments = establishments.filter(establishment => establishment.type === this.selectedType)
      if (establishments.length < 20) {
        this.$router.push('/')
      }
    }

    if(establishments.length < 25) {
      this.isFourRows = true
    }
    establishments = this.shuffle(establishments)
    establishments.length = this.isFourRows ? 20 : 25
    this.establishments = establishments

    if (this.isMobile) {
      this.openDialogue()
    }
  },
  computed: {
    gridClasses: function () {
      let gridClass = 'grid grid-cols-5 grid-flow-col'
      gridClass = this.isFourRows ? `${gridClass} grid-rows-4 md:px-4` : `${gridClass} grid-rows-5 md:px-10`
      return gridClass 
    },
    logoSpacing: function () {
      let spacing = 'flex flex-col justify-center items-center'
      spacing = this.isFourRows ? `${spacing} pt-5 pb-10` : `${spacing} p-4`
      return spacing 
    },
    isMobile() {
      return screen.width < 768         
    }
  },
  methods: {
    openDialogue() {
      this.$confirm('Makes screenshots easier!', 'View your card fullscreen?', {
        confirmButtonText: 'Sure!',
        cancelButtonText: 'Nah'
      }).then(() => {
        this.toggleFullscreen()
      }).catch(() => {})
    },
    toggleFullscreen: function(){
      var elem = document.documentElement;
      if (
        document.fullscreenEnabled || 
        document.webkitFullscreenEnabled || 
        document.mozFullScreenEnabled ||
        document.msFullscreenEnabled
      ) {
          if (elem.requestFullscreen) {
            elem.requestFullscreen();
            this.isFullscreen = true;
            return;
          } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
            this.isFullscreen = true;
            return;
          } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
            this.isFullscreen = true;
            return;
          } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
            this.isFullscreen = true;
            return;
          }
      }
    },
    shuffle (array) {
      let currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    },
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss">
  .font-xxs {
    font-size: .5rem;
  }
  .el-message-box {
    width: auto;
    display: inherit;
  }
</style>
