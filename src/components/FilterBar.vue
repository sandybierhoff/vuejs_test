<template>
    <div id="filter_div">
      User Attributes
      <ul>
        <li v-for="item in categories" :key="item.id">   
          <input type="checkbox" v-model="item.selected">
          {{ item.name }}
        </li>       
      </ul>
    </div>
</template>

<script>
export default {
  name: 'FilterBar',
  computed: {
    categories: function(){
      return this.$store.getters.columns
    }
  }
}
</script>

<style>
ul{ 
  padding: 0px;
}

#filter_div {
  padding: 10px 20px;
}
</style>