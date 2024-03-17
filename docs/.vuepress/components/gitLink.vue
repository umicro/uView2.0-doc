<script>
export default {
  name: "gitLink",
  props: {
    anchors: {
      type: String
    },
    type: {
      type: String,
      default: 'pull'
    }
  }
}
</script>

<template>
  <a :href="`https://github.com/umicro/uView2.0/${type}/${anchors}`" target="_blank">#{{anchors}}</a>
</template>
