<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { mdiAccount, mdiAsterisk } from "@mdi/js";
import SectionFullScreen from "@/components/SectionFullScreen.vue";
import CardBox from "@/components/CardBox.vue";
import FormCheckRadio from "@/components/FormCheckRadio.vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import { useAuthStore } from "@/stores/authStore";
import { useGraphqlAPIStore } from "@/stores/graphqlAPI";

const form = reactive({
  loginEmail: "",
  password: "",
  remember: true,
});

// const form = reactive({
//   loginEmail: "zenithathang@gmail.com",
//   password: "Zenithathang@gmail.com@99",
//   remember: true,
// });

const router = useRouter();

const AuthStore = useAuthStore();

const GraphqlAPIStore = useGraphqlAPIStore();

const submit = async () => {
  //call the login method from the Authstore
  // const user_from_amplify = await AuthStore.login({
  //   email: form.loginEmail,
  //   password: form.password,
  // });
  // console.log(user_from_amplify);

  const response = await GraphqlAPIStore.createSuperAdmin({ input: {} });
  console.log("response", response);

  // router.push("/dashboard");
};
</script>

<template>
  <div>
    <NuxtLayout>
      <SectionFullScreen v-slot="{ cardClass }" bg="purplePink">
        <CardBox :class="cardClass" is-form @submit.prevent="submit">
          <FormField label="Login" help="Please enter your login">
            <FormControl
              v-model="form.loginEmail"
              :icon="mdiAccount"
              name="login"
              autocomplete="username"
            />
          </FormField>

          <FormField label="Password" help="Please enter your password">
            <FormControl
              v-model="form.password"
              :icon="mdiAsterisk"
              type="password"
              name="password"
              autocomplete="current-password"
            />
          </FormField>

          <FormCheckRadio
            v-model="form.remember"
            name="remember"
            label="Remember"
            :input-value="true"
          />

          <template #footer>
            <BaseButtons>
              <BaseButton type="submit" color="info" label="Login Now" />
              <BaseButton to="/dashboard" color="info" outline label="Back" />
            </BaseButtons>
          </template>
        </CardBox>
      </SectionFullScreen>
    </NuxtLayout>
  </div>
</template>
