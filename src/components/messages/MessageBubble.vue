<template>
    <div id="dumb-message-bubble">
        <div class="user-avatar">{{ avatar }}</div>
        <slot class="message-text"></slot>
    </div>
</template>

<script>
    export default {
        name: 'MessageBubble',
        props: ['avatar', 'body', 'mine', 'theirs'],
    }
</script>

<style>
    #dumb-message-bubble {
        min-width: 48px;
        display: inline-block;
        padding: 8px;
        border-radius: 8px;
        margin-right: 0;
        border-color: rgba(44, 62, 80, 0.64);
        border-width: 1px !important;
        border-style: solid;
        box-shadow: none;
    }
</style>