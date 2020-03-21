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
        <p class="pb-10">
          I'm baby vaporware cardigan ethical quinoa church-key tumblr taxidermy neutra intelligentsia artisan asymmetrical cliche. Celiac ethical venmo, cronut PBR&B salvia copper mug fam unicorn etsy fashion axe flexitarian irony vice. Chia lyft fingerstache tousled salvia unicorn banjo craft beer YOLO narwhal chambray lomo PBR&B bicycle rights. Hell of raclette polaroid church-key.
        </p>
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
</style>
