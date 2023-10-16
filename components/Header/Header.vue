<template>
    <header class="fixed flex flex-col ">
        <nav class="md:flex md:items-center px-10 md:px-24 min-h-[80px] w-screen py-2 flex justify-center items-center bg-emerald-950 text-white"
            dir="rtl">
            <div class="max-w-[1100px] w-full flex items-center gap-4 md:gap-14 "
                :class="{ 'justify-between': !show, 'justify-end': show }" dir="rtl">

                <span class="text-3xl cursor-pointer md:hidden block">
                    <Icon name="ic:outline-menu" @click="Menu($event.target)" />
                </span>
                <ul v-if="!show"
                    class="flex px-10 md:px-0 gap-4 md:gap-5 flex-col md:flex-row flex-wrap md:items-center z-[-1] md:z-auto md:static absolute bg-emerald-950 w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500"
                    dir="rtl">
                    <li v-for="navigation in headerLinks[0].navigations">
                        <HoverLink v-if="navigation.children.length > 0" :links="navigation.children"
                            :name="navigation.language.name" />
                        <a v-else>{{ navigation.language.name }}</a> 
                    </li>
                </ul>

                <div v-if="show" class="md:w-3/5 w-full">
                    <div class="relative" dir="rtl">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Icon name="ic:outline-search" />
                        </div>
                        <input type="search" id="default-search"
                            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                            placeholder="البحث عن" required>
                    </div>
                </div>

                <button @click="show = !show" dir="ltr" class="flex items-center justify-center">
                    <Icon v-if="!show" name="ic:outline-search" size="25px" />
                    <Icon v-else name="ic:outline-close" size="25px" />
                </button>
            </div>
        </nav>
        <hr class="w-screen h-2 bg-yellow-300 border-none opacity-80" />
    </header>
</template>

<script setup lang="ts">

import { Item } from '~/types/interfaces';

function Menu(e : any) {
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close", list?.classList.add('top-[80px]'), list?.classList.add('opacity-100')) : (e.name = "menu", list?.classList.remove('top-[80px]'), list?.classList.remove('opacity-100'))
}

const { headerLinks } = defineProps({
    headerLinks: {
        type: Array as PropType<Item[]>,
        required: true
    }
})

console.log(headerLinks)

const show = ref(false)

</script>
  