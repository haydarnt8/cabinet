<template>
    <footer class="bg-emerald-950 h-80 w-screen absolute bottom-0 py-10 flex justify-center" dir="rtl">
        <div class="max-w-[1100px] flex  h-full w-[1100px] ">
            <div class="w-4/6 h-full flex gap-8 flex-wrap" >
                <div v-for="footerLink in footerLinks" class="flex flex-col gap-4">
                    <p class="text-white text-xl font-bold">{{ footerLink.navType.language.name }}</p>
                    <ul class="flex flex-col " dir="rtl">
                        <li v-for="child in footerLink.navigations" class="flex gap-1 items-center">
                            <Icon name="ic:twotone-insert-link" color="white" /><a :href="child.language.url" class="text-white">{{
                                child.language.name }}</a>
                        </li>
                    </ul>
                </div>

            </div>
            <div class="w-4/12 min-w-[220px] bg-blue-300 h-full">

            </div>

        </div>
    </footer>
</template>
  
<script setup>

const { footerLinks } = defineProps({
    footerLinks: {
        type: Array,
        required: true
    }
})

console.log(footerLinks[0].navType)

</script>