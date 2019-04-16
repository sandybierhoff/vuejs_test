<template>
    <div class="row">
      <div id="filter-bar" class="column">
        <FilterBar />
      </div>
      <div id="content" class="column">

        <h2>{{ users.length }} total users</h2>

        <List>
          <!-- <template slot-scope="user" slot="name.first" >
            {{ user.user.name.first }}
          </template> -->

          <template slot-scope="user" slot="picture">
            <img v-bind:src="user.user.picture.thumbnail" />
          </template>
        </List>
      </div>
    </div>
</template>

<script>

import List from './List.vue'
import FilterBar from './FilterBar.vue'

export default {
    name: 'Detail',
    components: {
        List, 
        FilterBar
    },
    mounted(){ 
      this.$store.dispatch('getUsers') 
    },
    computed : {
        users(){
          return this.$store.getters.users
        }
    }
}
</script>

<style>
body, html, #app {
  margin: 0px;
  padding: 0px;
  
  height: 100%;
  margin: 0;
}

.table { 
  width: 100%;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  margin: 0;
}

.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
}

#filter-bar { 
  flex: 1; 
  background-color: #f7f8f9;
  border-right: 2px solid #eceeef;
}

#filter-bar li { 
  list-style:  none; 
} 

#content { 
  flex: 4;
  padding: 20px 40px;
}
</style>