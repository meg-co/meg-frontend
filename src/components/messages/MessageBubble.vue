<template>
    <div id="dumb-message-bubble">
        <div class="user-avatar">{{ avatar }}</div>
        <div class="message-text">{{ this.$el.textContent }}</div>
    </div>
</template>

<script>
    export default {
        name: 'MessageBubble',
        props: ['avatar', 'body', 'mine', 'theirs'],
        mounted() {
            console.dir(this)
        },
    }
</script>