<template>
    <div class="row friend-link">
        <div class="col-md-2 col-sm-2 col-xs-4 friend-link__wrap" v-for="link in links" :key="link._id">
            <a
                target="_blank"
                class="friend-link__wrap__item"
                :href="link.link"
            >
                <img :src="`https://api.uviewui.com${link.imageUrl}`" />
            </a>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            links: []
        }
    },
    created() {
        axios.get(`https://api.uviewui.com/client/link`).then(({ data }) => {
            const { data: { list }, code } = data
            if(code === 0) {
                this.links = list
            }
        });
    }
}
</script>

<style lang="scss" scoped>
.friend-link {
    &__wrap {
        margin-top: 8px;

        &__item {
            border-radius: 5px;
            overflow: hidden;
            display: inline-block;
        }
    }
}
</style>
