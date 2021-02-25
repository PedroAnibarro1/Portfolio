<template>
  <Page @loaded="onLoaded" navigatedTo="onNavigatedTo">
    <ActionBar :title="title"> </ActionBar>
    <StackLayout>
      <ListView for="item in items" @itemTap="onItemTap">
        <v-template>
          <StackLayout>
            <Label :text="item" />
          </StackLayout>
        </v-template>
      </ListView>
    </StackLayout>
  </Page>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { isIOS } from "@nativescript/core/platform";
import { Page } from "@nativescript/core";

@Component
export default class Services extends Vue {
  get title(): string {
    return "What I Do"
  }
  get items(): string[] {
    return ["Pedro", "Natalia"];
  }

  onLoaded(args: any) {
    const page: Page = args.object;
    if (isIOS) {
      page.frame.ios.controller.navigationBar.prefersLargeTitles = true;
      page.frame.ios.controller.navigationBar.sizeToFit();
    }
  }
}
</script>

<style>
ListView {
  height: 100%;
}
</style>
