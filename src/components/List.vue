 <template>
    <div>
        <table class="table" cellspacing="0" v-if="users.length>0">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th v-for="column in columns" :key="column.name">
                        {{ column.name }}
                    </th>
                    <th width="80" align="rigth">
                        Actions
                    </th>  
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="user.id.value">         
                    <td>
                        <slot name="avatar" v-bind:user="user">
                            <img v-bind:src="user.picture.thumbnail" />
                        </slot>
                    </td>           
                    <td v-for="columnName in columnNames" :key="columnName">
                        <slot :name="columnName" v-bind:user="user">
                            {{ getPropertyObj(user, columnName) }}
                        </slot>
                    </td>
                    <td align="right">
                        <a v-bind:href="'#/detail/'+ index">User Detail</a>
                    </td>
                </tr>
            </tbody>
        </table>
        <p v-else>
            No hay registros disponibles.
        </p>
    </div>
</template>

<script>
    const { t } = require('typy');
    export default {
        name: 'List',
        methods:{
            getPropertyObj(obj, way){
                return t(obj, way).safeString;
            }
        },
        computed : {
            columns(){
                return this.$store.getters.columns.filter( c=>c.selected );
            },
            columnNames(){
                return this.$store.getters.columns.filter( c=>c.selected ).map(x=>x.field)
            },
            users(){
                return this.$store.getters.users
            }
        }
    }
</script>

<style>
    th {
        padding: 8px 5px;
        border-bottom: 2px solid #ccc;
        text-align: left;
    }

    td {
        padding: 3px 0;
    }
</style>