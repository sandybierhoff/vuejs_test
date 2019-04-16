<template>
    <div>
        <div class="profile">
            <!-- {{ this.$store.getters.users }} -->
            <img v-bind:src="user.picture.thumbnail" /> 
            <address>
                {{ user.name.first }} {{ user.name.last }}<br>
            </address>

            <br>
        </div>
        <div id="datas">
            <p v-for="column in selectedColumns" :key="column">
                <b>{{ column }}:</b> 
                {{ getPropertyObj(user, column) }}

                <br />
            </p>
        </div>
    </div>
</template>

<script>
const { t } = require('typy');
export default {
    name: 'Detail',
    methods: {
        getPropertyObj(obj, way){
            
            return t(obj, way).safeString;
            
        }
    },
    computed: {
        user () {
            return this.$store.getters.users[ this.$route.params.index ];
        },
        selectedColumns () {
            let whiteList = ['picture', 'name.first']
            return this.$store.getters.columns.filter( c=>c.selected && whiteList.indexOf(c.field)<0 ).map(x=>x.field)
        }
    },
}
</script>

<style>
    .profile { 
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .profile > img { 
        flex: 0 1 auto;
        height: 100%;
    }
    address {
        margin-left: 10px;
    }
</style>