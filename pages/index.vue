<template>
    <Header :headerLinks="headerLinks" />
    <div class="h-screen"></div>
    <Footer :footerLinks="footerLinks" />
</template>
  
<script setup lang="ts">
import { Data, Item } from '@/types/interfaces'

const { data, error } = await useFetch<Data>('http://164.92.187.207:5005/api/app/navigation/tree-grouped-by-nav-type?NavTypeSlugs=footer-1&NavTypeSlugs=footer-2&NavTypeSlugs=footer-3&NavTypeSlugs=footer-4&NavTypeSlugs=header&NavTypeSlugs=imp-links&Language=ar')

if (error.value) {
    console.log(error.value)
}
console.log(toRaw(data.value))

const items = toRaw(data.value)?.items
const headerLinks = items?.filter((link) => link.navType.slug === 'header') || [];
const footerLinks = items?.filter((link) => link.navType.slug === 'footer-1'
    || link.navType.slug === 'footer-2'
    || link.navType.slug === 'footer-3'
    || link.navType.slug === 'footer-4')
    || [];

</script>