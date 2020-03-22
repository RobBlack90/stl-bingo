<template>
<!-- <div class="grid-container"></div> -->
<div class="font-mono text-white min-h-full relative">
  <div class="mx-2 md:mx-32 h-full">
    <div class="flex flex-col justify-center items-center">
      <div class="m-6 flex flex-col justify-center items-center">
        <div class="flex flex-col justify-center items-center py-10">
          <img class="w-full md:w-4/6" alt="STL Bingo!" src="../assets/images/STLBingo.png">
          <p class="text-lg">#STLBingo</p>
        </div>
        <div class="pb-10">
          <p class="my-4">
            It's a strange, socially distant time we're livin' in, and we all want to do what we can to help out our favorite STL small businesses. So here's a bingo card to make sure you spread the love! Generate a custom bingo card filled with a randomized selection of this city's best local food and/or drink establishments currently offering takeout or delivery. Take a screenshot of your card, post to your favorite social media site (using the hashtag #STLBingo), and mark the spots you've supported!  
          </p>
          <p class="my-4">
            <span class="italic font-semibold">What do you win if you get a bingo?</span> Currently- the satisfaction of helping out some local spots!
          </p>
          <p class="my-4">
            <span class="italic font-semibold">Why is there no free space?</span> C'mon son! No freebies here! Help out your neighbor!
          </p>
          <p class="my-4">
            <span class="italic font-semibold">I think you missed establishment?</span> I probably did. Shoot me an email (RobBlack90@gmail.com) or Instagram message (<a class="underline" href="https://www.instagram.com/thatrobbyblack" target="_blank">@ThatRobbyBlack</a>) and I'll get it added!    
          </p>
        </div>
        <div class="flex flex-col justify-center items-center">
          <el-dropdown class="p-5">
            <span class="el-dropdown-link">
              {{ selectedType.label || 'Choose Type' }} <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="type in types" :key="type.type" @click.native="selectType(type)">{{ type.label }}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-button @click="generateCard" :disabled="!selectedType.type">Generate!</el-button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data: function () {
    return {
      types: [
        {
          label: 'Food',
          type: 'food'
        },
        {
          label: 'Booze',
          type: 'booze'
        },
        {
          label: 'Both!',
          type: 'all'
        }        
      ],
      selectedType : ''
    }
  },
  methods: {
    selectType(type) {
      this.selectedType = type
    },
    generateCard() {
      this.$router.push({ path: `/card/${this.selectedType.type}` })
    },
    isTagSelected(tag) {
      return this.selectedTags.includes(tag)
    }
  }
}
</script>

<style lang="scss">
.el-dropdown {
  color: #ffffff;
  font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
  a {
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s;
  }

  a:hover {
    color: #edf2f7;
    text-decoration:none; 
    cursor:pointer;  
  }
</style>
