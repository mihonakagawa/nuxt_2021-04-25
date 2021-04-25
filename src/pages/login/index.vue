<template>
  <div>
    <v-card max-width="30vw" class="mx-auto">
      <v-form>
        <v-container>
          <v-row justify="center">
            <v-col cols="8" sm="10">
              <v-text-field
                name="usrename"
                label="username"
                type="text"
                v-model="username"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="8" sm="10">
              <v-text-field
                name="password"
                label="password"
                v-model="password"
                :append-icon="isShowPassword ? 'mdi-eye-off' : 'mdi-eye'"
                :type="isShowPassword ? 'text' : 'password'"
                @click:append="isShowPassword = !isShowPassword"
              />
            </v-col>
          </v-row>
          <v-row justify="center" class="text-center">
            <v-col cols="8" sm="8">
              <v-btn
                color="primary"
                text
                :loading="isLoading"
                @click="submit"
              >
                Submit
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
    <div class="text-center">
      <v-dialog
        width="500"
        v-model="isShowDialog"
        @click:outside="updateIsLogged"
      >
        <v-card>
          <v-card-title class="headline red lighten-3"> ERROR! </v-card-title>
          <v-card-text class="text-center">
            {{ message }}
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  layout: 'login',
  head() {
    return this.$head(this.$route);
  },
  data() {
    return {
      username: 'admin_user',
      password: 'this_is_super_password',
      isShowPassword: false,
      isShowDialog: false,
      isLoading: false,
    };
  },
  methods: {
    ...mapActions('user', ['login', 'updateIsLogged']),
    submit() {
      const user = {
        username: this.username,
        password: this.password,
      };
      this.login(user);
      this.isLoading = true;
    },
  },
  computed: {
    // そのままのゲッター名で書くとき => Array
    ...mapGetters('user', ['isLogged']),
    // ゲッター名を変更したいとき => Object
    ...mapGetters('user', {
      message: 'errorMessage',
    }),
  },
  watch: {
    isLogged() {
      this.isLogged
        ? this.$router.push('/')
        : (this.isShowDialog = !this.isShowDialog);

      this.isLoading = false;
    },
  },
};
</script>
