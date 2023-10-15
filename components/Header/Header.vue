<template>
    <header class="fixed flex flex-col ">
        <nav class="px-24 min-h-[80px] w-screen h-20 flex justify-center items-center bg-emerald-950 text-white">
            <div class="max-w-[1100px] w-full flex items-center justify-between gap-14" dir="rtl">
                <ul v-if="!show" class="flex flex-wrap gap-5 items-center" dir="rtl">
                    <li v-for="navigation in navigations" :key="navigation.id">
                        <HoverLink v-if="navigation.children.length > 0" :links="navigation.children"
                            :name="navigation.language.name" />
                        <a v-else class="" :href="navigation.url">{{ navigation.language.name }}</a>
                    </li>
                </ul>

                <div v-if="show" class="w-3/5" >
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
        <hr class="w-screen h-2 bg-yellow-300  border-none opacity-80" />
    </header>
</template>

<script setup>

const { headerLinks } = defineProps({
    headerLinks: {
        type: Array,
        required: true
    }
})

const show = ref(false)

const navigations = headerLinks[0].navigations
// console.log(navigations)
</script>
  