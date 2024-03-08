<template>
  <v-layout>
    <v-navigation-drawer
      v-model="navbarExpand"
      color="primary-darken-1"
      disable-resize-watcher
    >
      <v-list
        v-model:opened="open"
        nav
        :lines="true"
        density="compact"
      >
        <template v-for="route in routes" :key="route.name">
          <v-list-item
            v-if="route.routeName"
            prepend-icon="mdi-home"
          >
            <NuxtLink :to="{name: route.routeName}">
              <v-list-item-title
                class="text-grey-lighten-3"
                v-text="route.name"
              />
            </NuxtLink>
          </v-list-item>
          <v-list-group
            v-else
            :value="route.name"
          >
            <template #activator="{ props }">
              <v-list-item
                v-bind="props"
                :prepend-icon="route.icon"
              >
                <v-list-item-title
                  class="text-grey-lighten-3"
                  v-text="route.name"
                />
              </v-list-item>
            </template>

            <v-list-item
              v-for="childrenRoute in route.children"
              :key="childrenRoute.name"
              class="cursor-pointer"
              color="secondary"
            >
              <NuxtLink
                :to="{name: childrenRoute.routeName}"
              >
                <v-list-item-title
                  class="text-grey-lighten-3"
                  v-text="childrenRoute.name"
                />
              </NuxtLink>
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      color="primary"
      flat
      prominent
      order="-1"
      title="MSU School"
    >
      <template #prepend>
        <v-icon
          :icon="navbarExpand ? 'mdi-chevron-left' : 'mdi-chevron-right'"
          @click.stop="navbarExpand ? closeHandler() : openHandler()"
        />
      </template>

      <template #append>
        <UserWrapper>
          <template #profile>
            <UserProfile
              :name="user.fullName"
            />
          </template>
          <template #menu>
            <SimpleMenu>
              <InfoWrapper
                :name="user.FIO"
              >
                <template #action>
                  <SimpleButton
                    variant="text"
                    size="small"
                    @click="signOutHandler"
                  >
                    <template #append>
                      <v-icon icon="mdi-logout" />
                    </template>
                    выход
                  </SimpleButton>
                </template>
              </InfoWrapper>
            </SimpleMenu>
          </template>
        </UserWrapper>
      </template>
    </v-app-bar>

    <v-main
      class="d-flex align-center justify-center"
    >
      <slot />
    </v-main>
  </v-layout>
</template>
<script setup async>
import { useNavState } from './model/useNavState.js'
import { useRoutes } from './model/useRoutes.js'
import UserWrapper from './ui/UserWrapper.vue'
import InfoWrapper from './ui/InfoWrapper.vue'
import { useUser } from './model/useUser.js'
import { UserProfile } from '@/components/ui/userProfile'
import { SimpleMenu } from '@/components/ui/simpleMenu'
import { SimpleButton } from '@/components/ui/buttons/simpleButton'
import { useCurrentUserStore } from '@/store/currentUser/index.js'
import { makeError } from '@/helpers/makeError.js'

const userStore = useCurrentUserStore()
const user = userStore.getUser
const {
  navbarExpand,
  openHandler,
  closeHandler
} = useNavState()

const {
  routes,
  open
} = useRoutes()

const router = useRouter()

const {
  signOutHandler
} = useUser(makeError, router)

</script>
<style lang="scss">
.router-link-active, .router-link-exact-active {
  div {
    color: rgb(var(--v-theme-white)) !important;
  }
}
</style>
