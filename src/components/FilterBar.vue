<template>
    <div id="filter_div">
      <b>User Attributes</b>
      <ul>
        <li v-for="item in categories" :key="item.id">   
          <input type="checkbox" v-model="item.selected">
          <font-awesome-icon :icon="item.icon" />
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
ul svg { 
  color: #d4d4d4;
}
font-awesome-icon {
  color: #53575d;
}
</style>