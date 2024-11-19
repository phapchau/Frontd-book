<script>
export default {
    props: {
        contacts: { type: Array, default: [], },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        }
    }
};
</script>
<template>
    <ul class="list-group">
        <li class="list-group-item" v-for="(contact, index) in contacts" :key="contact._id"
            :class="{ active: index === activeIndex }" @click="updateActiveIndex(index)">
            {{ contact.username }}

            <!-- <div v-if="index === activeIndex">
                <BooKCard2 :contact="contact"></BooKCard2>
                <router-link :to="{
                    name: 'contact.edit',
                    params: { id: contact._id },
                }">
                    <button class="btn btn-warning">Hiệu chỉnh</button>
                </router-link>
            </div> -->
        </li>
    </ul>
</template>