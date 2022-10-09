<template>
  <StackLayout class="card" :borderRadius="cardBorderRadius" :height="cardHeight" :width="cardWidth" :margin="cardMargin"> 

      <Image :src="project.imageURL" stretch="aspectFill" />

  </StackLayout>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Project, { ProjectType } from "../models/Project";
import { Screen } from "@nativescript/core/platform";

@Component
export default class ProjectRow extends Vue {

    @Prop() project: Project;
    cardMargin: number = 80;

    get cardBorderRadius(): number {
        return this.project.type == ProjectType.mobileApp ? 60 : 20;
    }

    get cardWidth(): number {                
        return Screen.mainScreen.widthDIPs - this.cardMargin;
    }

    get cardHeight(): number {
        return this.project.type == ProjectType.mobileApp ? this.cardWidth : 450;
    }

}
</script>

<style>
.card {        
    padding: 0;    
}
</style>
