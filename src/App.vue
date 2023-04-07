<template>
  <nav>
    <router-link to="/">Home</router-link> 
    <!--  ssgit  -->
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<!--
<template>
    <div class="page-container">
      <md-app md-mode="reveal-home">
        <md-app-toolbar class="md-primary">
          <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
            <md-icon>menu</md-icon>
          </md-button>
          <span class="md-title">My Title</span>
        </md-app-toolbar>

        <md-app-drawer v-model:md-active="menuVisible">
          <md-toolbar class="md-transparent" md-elevation="0"
            >Navigation</md-toolbar
          >

          <md-list>
            <md-list-item>
              <md-icon>move_to_inbox</md-icon>
              <span class="md-list-item-text">Inbox</span>
            </md-list-item>

            <md-list-item>
              <md-icon>send</md-icon>
              <span class="md-list-item-text">Sent Mail</span>
            </md-list-item>

            <md-list-item>
              <md-icon>delete</md-icon>
              <span class="md-list-item-text">Trash</span>
            </md-list-item>

            <md-list-item>
              <md-icon>error</md-icon>
              <span class="md-list-item-text">Spam</span>
            </md-list-item>
          </md-list>
        </md-app-drawer>

        <md-app-content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            quibusdam, non molestias et! Earum magnam, similique, quo recusandae
            placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
            explicabo, neque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            quibusdam, non molestias et! Earum magnam, similique, quo recusandae
            placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
            explicabo, neque.
          </p>
        </md-app-content>
      </md-app>
  </div>
</template>

<style lang="scss" scoped>
.md-app {
  max-height: 400px;
  border: 1px solid rgba(#000, 0.12);
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>

<script>
export default {
  name: "AboutView",
  data: () => ({
    menuVisible: false,
  }),
};
</script> -->
