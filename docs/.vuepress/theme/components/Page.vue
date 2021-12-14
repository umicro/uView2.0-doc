<template>
    <main
        class="page"
        :style="{
            marginTop: showV2Tips ? '2.3rem' : 0,
        }"
    >
        <slot name="top" />

        <Content class="theme-default-content" />
        <PageEdit />
        <PageNav v-bind="{ sidebarItems }" />

        <slot name="bottom" />
    </main>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";

export default {
    components: { PageEdit, PageNav },
    props: ["sidebarItems"],
    data() {
        return {
            showV2Tips: !this.$cookies.get("showV2Tips"),
        };
    },
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl';

.page {
    padding-bottom: 2rem;
    display: block;
}
</style>
