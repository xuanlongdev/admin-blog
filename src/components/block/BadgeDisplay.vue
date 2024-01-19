<template>
    <CBadge :color="getBadge(display)">{{ getName(display) }}</CBadge>
</template>

<script>
    export default {
        name: "BadgeDisplay",
        props: ['display'],   
        methods: {
            getBadge(display) {
                switch (display) {
                    case 2:
                        return 'success'
                    default: 
                        return 'danger'
                }
            },
            getName(display) {
                switch (display) {
                    case 2:
                        return 'Hiển thị'
                    default: 
                        return 'Đang ẩn'
                }
            },
        }
    };
</script>