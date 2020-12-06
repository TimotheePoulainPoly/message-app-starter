<template>
  <div class="messages">
    <h1>Messages</h1>
      <Message v-on:read="updateMsgRead(currentMessage.id, $event)" v-for="currentMessage in msgList" :key="currentMessage.id" :message="currentMessage"/>
  </div>
</template>

<script>
import Message from "./Message";

export default {
  name: "Messages",
  created() {
    this.sortMessagesByDate();
    this.unreadMessages();
  },
  components : {
    Message
  },
  computed: {
    msgList() {
      return this.$store.getters.sortMessagesByDate;
    }
  },
  methods: {
    updateMsgRead(id, read){
      this.msgList.find((m) => m.id === id).read = read;
      this.$emit("readcount", this.unreadMessages())
    },

    sortMessagesByDate(){
      this.msgList.sort((a,b)=>new Date(b.date) - new Date(a.date));
    },

    unreadMessages(){
      let i=0;
      this.msgList.forEach(msg=>{if(!msg.read){i++}});
      console.log("Unread messages : "+i);
      this.$root.$emit("count", i);
      return i;
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
