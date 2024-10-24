<script>
export default {
    props: {
        contact: {
            type: Object,
            required: true
        },
    },
};
</script>

<template>
    <div>
        <div class="p-1">
            <strong>Tên:</strong>
            {{ contact.name }}
        </div>
        <div class="p-1">
            <strong>password:</strong>
            {{ contact.password }}
        </div>
    </div>
</template>