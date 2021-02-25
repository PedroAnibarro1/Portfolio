<template>
  <BottomNavigation>
    <TabStrip
      backgroundColor="white"
      selectedItemColor="black"
      unSelectedItemColor="#b3b3b3"
    >      
      <TabStripItem
        title="News"
      ></TabStripItem>      
    </TabStrip>    

    <TabContentItem>
      <Frame>
        <Page>
          <ActionBar title="Title">             
          </ActionBar>
            <Label :text="message" textWrap="true" />            
        </Page>
      </Frame>
    </TabContentItem>
    
  </BottomNavigation>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";

  export default Vue.extend({
    computed: {
      message() {
        return "Blank {N}-Vue app";
      }
    }
  });
</script>

<style scoped lang="scss">
  @import '~@nativescript/theme/scss/variables/blue';

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
