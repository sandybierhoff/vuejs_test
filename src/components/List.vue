 <template>
    <div>
        <table class="table" cellspacing="0">
            <thead>
                <tr>
                    <th v-for="column in columns" :key="column.name">
                        {{ column.name }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="user.id.value">
                    <td v-for="columnName in columnNames" :key="columnName">
                        <slot :name="columnName" v-bind:user="user">
                            {{ getPropertyObj(user, columnName) }}
                        </slot>
                    </td>
                    <td>
                        <a v-bind:href="'#/detail/'+ index">User Detail</a>
                    </td>
                </tr>
            </tbody>
        </table>
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
        padding: 10px 5px;
        border-bottom: 2px solid #ccc;
    }
</style>