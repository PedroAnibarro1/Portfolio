<template>
  <BottomNavigation>
    <TabStrip
      backgroundColor="white"
      selectedItemColor="rgb(41, 36, 36)"
      unSelectedItemColor="#b3b3b3"
    >
      <TabStripItem title=" " iconSource="res://idea_on"></TabStripItem>
      <TabStripItem title="" iconSource="res://wired_controller"></TabStripItem>
      <TabStripItem title=" " iconSource="res://user_settings"></TabStripItem>
      <TabStripItem title="" iconSource="res://shopping_bag"></TabStripItem>
    </TabStrip>

    <TabContentItem>
      <Frame>
        <News />
      </Frame>
    </TabContentItem>
    <TabContentItem>
      <Frame>
        <Projects />
      </Frame>
    </TabContentItem>
    <TabContentItem>
      <Frame>
        <Services />
      </Frame>
    </TabContentItem>
    <TabContentItem>
      <Frame>
        <Merch />
      </Frame>
    </TabContentItem>
  </BottomNavigation>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import News from "./views/News.vue";
import Projects from "./views/Projects.vue";
import Services from "./views/Services.vue";
import Merch from "./views/Merch.vue";

@Component({
  components: {
    News,
    Projects,
    Services,
    Merch
  },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
@import "~@nativescript/theme/scss/variables/blue";

// Custom styles
.fas {
  @include colorize($color: accent);
}

.info {
  font-size: 20;
  horizontal-align: center;
  vertical-align: center;
}
</style>
