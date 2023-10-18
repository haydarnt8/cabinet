<template>

    <div class="rounded-xl w-full md:w-1/4 h-full flex flex-col overflow-hidden">
        <div dir="rtl" class=" text-2xl p-3" style="
        background-image: linear-gradient(hsla(0,0%,100%,.7),hsla(0,0%,100%,.7)),url('http://164.92.187.207:5007/_nuxt/img/stars.4d8d60b.png');
        background-size: 64px;
        background-position: 50%;
        ">
            روابط مهمة
        </div>
        <ul dir="rtl" class="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 pb-10 bg-[#E6E6E6]">
            <li v-for="link in importantLinks[0].navigations" class="aspect-[140.61/61.31]">
                <NuxtLink :to="link.language.url">
                    <div class="w-full h-full bg-no-repeat bg-center bg-contain rounded-[11%] overflow-hidden"
                        :style="{ backgroundImage: 'url(http://164.92.187.207:5005//host/cms/images/md/' + link.language.image + ')' }">
                    </div>
                </NuxtLink>
            </li>
        </ul>


    </div>
</template>

<script setup lang="ts">
import { Item } from '~/types/interfaces';

const { importantLinks } = defineProps({
    importantLinks: {
        type: Array as PropType<Item[]>,
        required: true
    }
})

console.log(importantLinks[0])

</script>