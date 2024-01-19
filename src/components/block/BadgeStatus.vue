<template>
    <CBadge :color="getBadge(status)">{{ getName(status) }}</CBadge>
</template>

<script>
    export default {
        name: "BadgeStatus",
        props: ['status'],   
        methods: {
            getBadge(status) {
                switch (status) {
                    case 2:
                        return 'warning'
                    case 3:
                        return 'success'
                    default: 
                        return 'danger'
                }
            },
            getName(status) {
                switch (status) {
                    case 2:
                        return 'Chờ duyệt'
                    case 3:
                        return 'Xuất bản'
                    default: 
                        return 'Bản nháp'
                }
            },
        }
    };
</script>