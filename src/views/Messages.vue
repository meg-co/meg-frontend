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
            <div class="md-toolbar-row">
                <md-tabs style="background-color: #F6F6F6">
                    <md-tab id="tab-home" md-label="Messages"></md-tab>
                    <md-tab id="tab-pages" md-label="Events"></md-tab>
                    <md-tab id="tab-posts" md-label="Groups"></md-tab>
                </md-tabs>
            </div>
        </md-app-toolbar>
        <MessageBubble body="hello world">uUUUUu</MessageBubble>
<!--        <h1>messages wow</h1>-->
    </div>
</template>
<style>
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
