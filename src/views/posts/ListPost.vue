<template>
<DataTable class="display">
    <thead>
        <tr>
            <th>A</th>
            <th>B</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="ax in aaa">
            <td>{{ ax[0] }}</td>
            <td>{{ ax[1] }}</td>
        </tr>
    </tbody>
</DataTable>
</template>

<script>
import BadgeStatus from "@/components/block/BadgeStatus.vue";
import BadgeDisplay from "@/components/block/BadgeDisplay.vue";

import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';

DataTable.use(DataTablesCore);

export default {
    components: {
        BadgeStatus,
        BadgeDisplay
    },
    data() {
        return {
            aaa: [
                [1, 2],
                [3, 4],
            ],
        }
    },
    methods: {
        toggleDetails(item) {
            if (this.details.includes(item._id)) {
                this.details = this.details.filter((_item) => _item !== item._id)
                return
            }
            this.details.push(item._id)
        },
    },
}
</script>
