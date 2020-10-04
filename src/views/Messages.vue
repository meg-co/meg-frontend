<template id="template-hi">
    <div>
        <md-app-toolbar class="md-large md-dense md-primary">
            <div class="md-toolbar-row">
                <div class="md-toolbar-section-start">
                    <span class="md-title meg-logo">meg.</span>
                </div>

                <div class="md-toolbar-section-end">
                    <md-button class="md-icon-button">
                        <md-icon>more_vert</md-icon>
                    </md-button>
                </div>
            </div>
        </md-app-toolbar>
        <MessageBubble>uUUUUu</MessageBubble>
    </div>
</template>
<style>
    md-app {
        width: 100vw !important;
    }
    #login {
        margin-top: 10px;
        background: #FAFAFA;
    }
</style>

<script>
    import MessageBubble from "../components/messages/MessageBubble";
    export default {
        components: {MessageBubble}
    }

</script>
