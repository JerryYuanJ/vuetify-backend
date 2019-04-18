<template>
  <v-layout class="with-bg align-center justify-center">
    <v-flex xs10 sm8 md4>
      <v-card>
        <v-card-title class="title font-weight-regular justify-space-between">
          <span>{{ currentTitle }}</span>
          <v-avatar
            color="primary lighten-2"
            class="subheading white--text"
            size="24"
            v-text="step"
          ></v-avatar>
        </v-card-title>

        <v-window v-model="step">
          <v-window-item :value="1">
            <v-card-text>
              <v-text-field
                label="邮箱"
                value="jerry@yuan.com"
                :rules="[rules.required, rules.email]"
              >
              </v-text-field>
              <span class="caption grey--text text--darken-1">
                该邮箱将会作为您的登陆账号
              </span>
            </v-card-text>
          </v-window-item>

          <v-window-item :value="2">
            <v-card-text>
              <v-text-field label="密码" type="password" :rules="[rules.maxLength]"></v-text-field>
              <v-text-field label="确认密码" type="password"></v-text-field>
              <span class="caption grey--text text--darken-1">
                请为您的账号创建密码
              </span>
            </v-card-text>
          </v-window-item>

          <v-window-item :value="3">
            <div class="pa-3 text-xs-center">
              <v-icon color="green" class="lighten-2" size="70">check</v-icon>
            </div>
          </v-window-item>
        </v-window>

        <v-divider v-if="step !== 3"></v-divider>

        <v-card-actions>
          <template v-if="step !== 3">
            <v-btn :disabled="step === 1" flat @click="step--">
              上一步
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" depressed @click="step++">
              下一步
            </v-btn>
          </template>
          <template v-else>
            <v-spacer></v-spacer>
            <v-btn color="success" depressed>
              登陆
            </v-btn>
            <v-spacer></v-spacer>
          </template>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { emptyChecker, emailChecker, lengthChecker } from '@/utils/validator'

export default {
  data: () => ({
    step: 1,
    rules: {
      required: emptyChecker("邮箱"),
      email: emailChecker,
      maxLength: lengthChecker('密码', 6, 10)
    }
  }),

  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "填写邮箱";
        case 2:
          return "创建密码";
        default:
          return "账号创建成功";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.with-bg {
  background-image: url("/bg.jpg");
  background-size: 100% 100%;
}
</style>