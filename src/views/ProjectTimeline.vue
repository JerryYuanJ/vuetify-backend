<template>
  <v-timeline>
    <v-timeline-item
      :icon="record.icon"
      fill-dot
      :small="!record.isBig"
      :right="index%2!==0"
      v-for="(record, index) in history"
      :key="index"
    >
      <v-card>
        <v-card-title class="purple lighten-2" :class="record.color">
          <h4 class="headline white--text">
            <div class="body-1">
              <v-icon small color="white">event</v-icon>
              {{ record.date }}
            </div>
            <div>{{ record.title }}</div>
          </h4>
        </v-card-title>
        <v-container>
          {{ record.detail }}
        </v-container>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import { history } from "@/utils/const.js";

export default {
  data() {
    this.history = history;
    return {};
  }
};
</script>

<style lang='scss' scoped>
</style>
