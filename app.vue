<template>
  <div>
    <ClientOnly fallbackTag="span">
      commentaires client
      <template #fallback>
        <div>commentaires fallback</div>
      </template>
    </ClientOnly>
    <NuxtWelcome />
  </div>
</template>
