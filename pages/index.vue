<template>
    <Header :headerLinks="headerLinks" />
    <Footer :footerLinks="footerLinks" />
</template>
  
<script setup>

const { data } = await useFetch('http://164.92.187.207:5005/api/app/navigation/tree-grouped-by-nav-type?NavTypeSlugs=footer-1&NavTypeSlugs=footer-2&NavTypeSlugs=footer-3&NavTypeSlugs=footer-4&NavTypeSlugs=header&NavTypeSlugs=imp-links&Language=ar')


const items = toRaw(data.value).items
const headerLinks = items.filter((link) => link.navType.slug === 'header')
const footerLinks = items.filter((link) => link.navType.slug !== 'header')

</script>