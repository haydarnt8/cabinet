<template>
    <div class="relative">
        <button class="peer">
            {{ name  }}
        </button>
        <ul class="hidden peer-hover:block absolute z-[1000] float-left m-0 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
            aria-labelledby="dropdownMenuButton2" data-te-dropdown-menu-ref>
            <li v-for="link in links" class="relative">
                <a class="block w-full bg-transparent px-4 py-2 text-neutral-700  dark:text-neutral-200 dark:hover:bg-neutral-600"
                >
                    {{ link.language.name }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup>

const { links, name } = defineProps({
    links: {
        type: Array,
        required: true
    },
    name: {
        type: String,
        required: true
    }

})

// console.log(links)
</script>