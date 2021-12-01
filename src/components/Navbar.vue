<script setup lang="ts">
  import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  } from '@headlessui/vue'
  import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'
  import { ChevronDownIcon } from '@heroicons/vue/solid'

  interface ItemProps {
    title: string
    path: string
  }

  const mainNavigation: ItemProps[] = [{ title: 'Home', path: '/' }]

  const navigation: ItemProps[] = [
    { title: 'Mes scores', path: '/my-score' },
    { title: 'Se déconnecter', path: '/logout' },
  ]
</script>

<template>
  <Disclosure as="nav" class="bg-transparent" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <a
                v-for="item in mainNavigation"
                :key="item.title"
                :href="item.path"
                :class="[
                  item.current
                    ? 'bg-purple-900 text-white'
                    : 'text-white hover:bg-purple-200 hover:text-white',
                  'px-3 py-2 rounded-md text-sm font-medium',
                ]"
                :aria-current="item.current ? 'page' : undefined"
              >
                {{ item.title }}</a
              >
            </div>
          </div>
        </div>
        <Menu as="div" className="relative inline-block text-left">
          <MenuButton
            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Profil
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </MenuButton>

          <MenuItems
            className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div className="px-1 py-1 ">
              <MenuItem v-for="item in navigation">
                <DisclosureButton
                  :key="item.title"
                  as="a"
                  :href="item.path"
                  :class="[
                    active ? 'bg-violet-500 text-white' : 'text-gray-900',
                    'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                  ]"
                >
                  {{ item.title }}
                </DisclosureButton>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <DisclosureButton
          v-for="item in mainNavigation"
          :key="item.title"
          as="a"
          :href="item.path"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block px-3 py-2 rounded-md text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.title }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
