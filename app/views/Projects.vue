<template>
  <Page @loaded="onLoaded" navigatedTo="onNavigatedTo">
    <ActionBar :title="title"> </ActionBar>
    <StackLayout>
      <ListView for="item in items" @itemTap="onItemTap">
        <v-template>
          <ProjectRow :project="item" />
        </v-template>
      </ListView>
    </StackLayout>
  </Page>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { isIOS } from "@nativescript/core/platform";
import { Page } from "@nativescript/core";
import ProjectRow from "../components/ProjectRow.vue";
import Project from "@/models/Project";
import Order404 from "@/projects/Order404";

@Component({
  components: {
    ProjectRow
  }
})
export default class Projects extends Vue {
  get title(): string {
    return "Projects"
  }
  get items(): Project[] {

    const order404 = new Order404();
    
    return [order404];

  }

  onLoaded(args: any) {
    const page: Page = args.object;
    if (isIOS) {
      page.frame.ios.controller.navigationBar.prefersLargeTitles = true;
      page.frame.ios.controller.navigationBar.sizeToFit();
    }
  }

  onItemTap(event: any) {
    console.log(event.item.name);
  }

}
</script>

<style scoped>
ListView {
  height: 100%;
}
</style>
