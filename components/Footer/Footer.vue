<template>
    <footer class="bg-emerald-950 w-screen py-10 flex justify-center px-10 md:px-24" dir="rtl">
        <div class="max-w-[1100px] flex  h-full w-[1100px] ">
            <div class="w-4/6 h-full flex gap-8 flex-wrap">
                <div v-for="footerLink in footerLinks" class="flex flex-col gap-4">
                    <p class="text-white text-xl font-bold">{{ footerLink.navType.language.name }}</p>
                    <ul class="flex flex-col " dir="rtl">
                        <li v-for="child in footerLink.navigations" class="flex gap-1 items-center">
                            <Icon name="ic:twotone-insert-link" color="white"/><a class="text-white">{{child.language.name }}</a>
                        </li>
                    </ul>
                </div>

            </div>
            <div class="w-4/12 min-h-[220px] min-w-[220px] flex justify-end">
                <div class="min-w-[240px] h-full flex flex-col justify-between items-center">
                    <div class="w-full h-1/2 bg-no-repeat bg-center bg-contain"
                        style="background-image: url('https://cabinet.iq/_nuxt/img/logo.e8031eb.gif');">
                    </div>
                    <div class="w-full h-1/5 bg-no-repeat bg-center bg-contain"
                        style="background-image: url('https://cabinet.iq/_nuxt/img/logo-nav.99acc40.png');">

                    </div>
                    <div class="flex h-1/5 items-center justify-evenly w-1/2">
                        <a v-for="social in socialLink" :href="social.url">
                            <Icon :name="social.icon" size="25px" color="gray" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
  
<script setup lang="ts">
import { Item } from '~/types/interfaces';

const socialLink = {
    facebook: {
        url: 'https://www.facebook.com/iraqicabinet',
        icon: 'bxl:facebook-circle'
    },
    twitter: {
        url: 'https://twitter.com/IraqiCabinet',
        icon: 'bxl:twitter'
    },
    youtube: {
        url: 'https://www.youtube.com/channel/UC4QXUgqZpQqZQZ0JyjZ1j1w',
        icon: 'bxl:youtube'
    },
    telegram: {
        url: 'https://t.me/IraqiCabinet',
        icon: 'bxl:telegram'
    },
}

const { footerLinks } = defineProps({
    footerLinks: {
        type: Array as PropType<Item[]>,
        required: true
    }
})


console.log(footerLinks)


</script>


<style scoped>
* {
    outline: none;
}
</style>