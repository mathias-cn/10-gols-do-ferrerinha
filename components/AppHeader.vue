<template>
    <div class="z-10 flex items-center justify-between p-4">
        <NuxtImg 
            src="/ferrerinha-logo.svg"
            alt="10 Gols do Ferrerinha"
            width="300"
            height="80"
            class="sm:hidden md:block"
        />
        <NuxtImg 
            src="/ferrerinha-logo.svg"
            alt="10 Gols do Ferrerinha"
            width="100"
            height="40"
            class="hidden sm:block md:hidden"
        />

        <div class="flex items-center gap-2">
            <a href="https://www.instagram.com/mathiascn_/" target="_blank" class="flex items-center justify-center w-10 h-10 bg-fuchsia-600 rounded-md">
                <Icon name="uil:instagram" class="text-2xl text-white" />
            </a>
            <a href="https://github.com/mathias-cn" target="_blank" class="flex items-center justify-center w-10 h-10 bg-slate-700 rounded-md">
                <Icon name="uil:github" class="text-2xl text-white" />
            </a>
        </div>
    </div>
</template>