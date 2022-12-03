<template>
    <div>
        <h2>Home Page</h2>
        <button> {{ $t ("loginText") }} </button>
        <button @click="change"> {{ $t ("change") }} </button>
    </div>
</template>

<script>
export default {
  methods: {
    change() {
      if(this.$i18n.locale === "en") {
        this.$i18n.locale = "zh";
      } else {
        this.$i18n.locale = "en";
      }
    }
  }
}
</script>

<style>

</style>