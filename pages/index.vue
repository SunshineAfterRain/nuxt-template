<template>
  <div class="container">
    <img src="~assets/img/btn_create_nor.png" alt="" />
  </div>
</template>

<script>
export default {
  components: {},
  fetch({ app }) {},
  asyncData({ app }) {},
  created() {},
  mounted() {
    console.log(
      this.$axios.get(
        'index.php?m=Api&c=ActivitiesTemplate&a=get_vote_activity_info'
      )
    )
    this.$store.dispatch('user/increment', 100)
    console.log(this.$store.state.user.counter)
  }
}
</script>

<style lang="less">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
