<template>
  <div id="message" v-on:click="markAsRead(message.sender.name)">
    <h1>{{message.sender.name}}</h1>
    <h2>{{message.content}}</h2>
    <div id="state-icon" v-if="message.read">
      <i class="fas fa-check-double"></i>
    </div>
    {{getHour}}
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
      message: Object,
  },
  data(){
    return {
      date: new Date(this.message.date)
    }
  },
  computed: {
    getHour(){
      return this.date.getHours()+":"+this.date.getMinutes();
    }
  },
  methods : {
    markAsRead(name) {
      console.log(name+" marked as read");
      this.$emit("read", true);
    },
    say(message) {
      console.log(message);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
}

#message {
  border-style: solid;
  border-width: 2px;
  margin: 2px;
  border-radius: 5px;
}
</style>
