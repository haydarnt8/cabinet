<template>
    <Header :headerLinks="headerLinks" />
    <div class="w-full flex items-center justify-center pt-[100px]">
        <ImprtantLinkCard :importantLinks="importantLinks" />
    </div>
    <div class="h-60 flex items-center justify-center text-red-500 text-9xl">
        Test!!
    </div>
    <Footer :footerLinks="footerLinks" />
</template>
  
<script setup lang="ts">
import { Data } from '@/types/interfaces'

const { data, error } = await useFetch<Data>('http://164.92.187.207:5005/api/app/navigation/tree-grouped-by-nav-type?NavTypeSlugs=footer-1&NavTypeSlugs=footer-2&NavTypeSlugs=footer-3&NavTypeSlugs=footer-4&NavTypeSlugs=header&NavTypeSlugs=imp-links&Language=ar')

if (error.value) {
    console.log(error.value)
}
console.log(toRaw(data.value))

const items = toRaw(data.value)?.items
const headerLinks = items?.filter((link) => link.navType.slug === 'header') || [];
const footerLinks = items?.filter((link) => link.navType.slug !== 'header' && link.navType.slug !== 'imp-links') || [];
const importantLinks = items?.filter((link) => link.navType.slug === 'imp-links') || [];
</script>