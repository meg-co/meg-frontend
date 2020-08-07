<template>
    <div class="page-container">
        <md-app md-waterfall md-mode="fixed-last">
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



            <md-app-content>
              <router-view/>
            </md-app-content>
        </md-app>
    </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vw;
}
.meg-logo {
  font-weight: 900 !important;
  font-family: Avenir, Helvetica, Arial, sans-serif !important;
  font-size: 52px !important;
  display: inline-block;
  margin: 0;
  float: left;
  color: #35495E !important;
}
.meg-logo div {
  display: inline-block;
  vertical-align: text-bottom;
}
.md-toolbar-section-start {
    height: 80px;
}
#nav a {
  padding-top: 0;
  font-weight: bold;
  color: #2c3e50;
}
.md-title {
    height: 48px;
}
.md-app {
    max-height: 400px;
    border: 1px solid rgba(#000,.12);
}

   .md-drawer {
       width: 230px;
       max-width: calc(100vw - 125px);
   }

#nav a.router-link-exact-active {
  color: #42b983;
}

/* global styles */
.md-toolbar.md-theme-default.md-primary {
    background-color: #F6F6F6 !important;
}
.md-tabs.md-theme-default.md-primary .md-tabs-navigation {
    background-color: #F6F6F6 !important;
    color: #2c3e50 !important;
}
.md-toolbar.md-theme-default.md-primary .md-button:not([disabled]):not(.md-raised) {
    color: #2c3e50 !important;
    font-family:  Avenir, Helvetica, Arial, sans-serif !important;
}
</style>
