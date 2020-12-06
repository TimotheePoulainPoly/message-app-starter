<template>
  <div class="menu">
    <h1>Menu</h1>
    <h3>Chats ({{unreadMessages}})</h3>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    readcount: {
      type: Number,
      required: false,
    }
  },
  computed: {
    unreadMessages() {
      return this.$store.getters.numberOfUnreadMessages;
    }
  },
  mounted() {
    this.getReadCount();
  },
  methods: {
    getReadCount(){
      this.readCount = this.$root.$props.count;
      console.log(this.readCount);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
}
</style>
