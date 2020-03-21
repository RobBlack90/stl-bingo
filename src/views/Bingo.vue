<template>
  <div class="flex flex-col justify-center items-center">
    <div class="border-solid h-full min-w-full md:min-w-1/2">
      <div class="px-2 pt-2">
        <div class="flex flex-col justify-center items-center">
            <img class="w-full md:w-3/6 cursor-pointer" :class="{ 'py-10': isFourRows, 'p-4': !isFourRows}" @click="goHome()" alt="STL Bingo!" src="../assets/images/STLBingo.png">
            <p>#STLBingo</p>
        </div>
      </div>
      <div :class="gridClasses">
        <div class="bg-white m-1 pb-12/12 relative text-black" 
        v-for="establishment in establishments" :key="establishment.name">
          <div class="absolute h-full w-full top-auto text-xs md:text-sm flex justify-center items-center text-center break-words">
            {{ establishment.name }}
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
  },
  computed: {
    gridClasses: function () {
      let gridClass = 'h-full grid grid-cols-5 grid-flow-col p-0'
      gridClass = this.isFourRows ? `${gridClass} grid-rows-4 md:px-4` : `${gridClass} grid-rows-5 md:px-10`
      return gridClass 
    }
  },
  methods: {
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