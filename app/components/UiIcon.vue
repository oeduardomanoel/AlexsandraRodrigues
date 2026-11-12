<script setup lang="ts">
defineProps<{ name: string; size?: number }>()
</script>

<template>
  <svg
    :width="size ?? 24"
    :height="size ?? 24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.4"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <!-- unha -->
    <template v-if="name === 'nail'">
      <path d="M7 21V9a5 5 0 0 1 10 0v12" />
      <path d="M9 9.5a3 3 0 0 1 6 0V13H9z" />
      <path d="M7 17h10" />
    </template>
    <!-- gota / micose -->
    <template v-else-if="name === 'drop'">
      <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />
      <path d="M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5" />
    </template>
    <!-- laser -->
    <template v-else-if="name === 'laser'">
      <circle cx="12" cy="12" r="2.2" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
    </template>
    <!-- coração / cuidado -->
    <template v-else-if="name === 'heart'">
      <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
      <path d="M9 11h2l1-2 1.5 4 1-2H16" />
    </template>
    <!-- pé -->
    <template v-else-if="name === 'foot'">
      <path d="M9 21c-2.5 0-3.5-2-3.5-4 0-3 1.5-5 1.5-8 0-2 1-3.5 3-3.5s3 1.6 3 4c0 2.4-1 4-1 6.5S13 21 9 21z" />
      <circle cx="15" cy="5" r="1.3" />
      <circle cx="17.6" cy="7.2" r="1.1" />
      <circle cx="18.8" cy="10.2" r=".9" />
      <circle cx="18.6" cy="13" r=".8" />
    </template>
    <!-- folha / hidratação -->
    <template v-else-if="name === 'leaf'">
      <path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15" />
      <path d="M5 19 14 10" />
    </template>
    <template v-else-if="name === 'whatsapp'">
      <path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z" />
      <path d="M9.2 8.6c.2-.5.6-.5.9-.5h.4c.2 0 .4.1.5.4l.6 1.5c.1.2 0 .5-.1.6l-.5.6c.6 1.1 1.5 2 2.7 2.6l.6-.5c.2-.2.4-.2.6-.1l1.5.6c.3.1.4.3.4.5v.4c0 .3-.1.7-.6.9-.6.3-1.5.4-2.6 0-1.6-.6-3.5-2.4-4.2-4.1-.4-1.1-.4-2-.2-2.9z" fill="currentColor" stroke="none" />
    </template>
    <template v-else-if="name === 'pin'">
      <path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </template>
    <template v-else-if="name === 'clock'">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </template>
    <template v-else-if="name === 'phone'">
      <path d="M5 4h3.5l1.5 4-2 1.5a10 10 0 0 0 6.5 6.5L16 14l4 1.5V19a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </template>
    <template v-else-if="name === 'instagram'">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r=".6" fill="currentColor" />
    </template>
    <template v-else-if="name === 'star'">
      <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8L3.5 9.7l5.9-.9z" fill="currentColor" stroke="none" />
    </template>
    <template v-else-if="name === 'arrow'">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </template>
    <template v-else-if="name === 'arrow-up-right'">
      <path d="M7 17 17 7M8 7h9v9" />
    </template>
    <template v-else-if="name === 'coffee'">
      <path d="M4 9h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" />
      <path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16" />
      <path d="M8 3c0 1.5 1.5 1.5 1.5 3M11.5 3c0 1.5 1.5 1.5 1.5 3" />
    </template>
    <template v-else-if="name === 'shield'">
      <path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6z" />
      <path d="m9 12 2 2 4-4" />
    </template>
    <template v-else-if="name === 'sparkle'">
      <path d="M12 3c.6 4.4 2.6 6.4 7 7-4.4.6-6.4 2.6-7 7-.6-4.4-2.6-6.4-7-7 4.4-.6 6.4-2.6 7-7z" />
      <path d="M19 17c.2 1.3.7 1.8 2 2-1.3.2-1.8.7-2 2-.2-1.3-.7-1.8-2-2 1.3-.2 1.8-.7 2-2z" />
    </template>
    <template v-else-if="name === 'chat'">
      <path d="M4 5h16v11H9l-5 4z" />
      <path d="M8 10h8M8 13h5" />
    </template>
    <template v-else-if="name === 'search'">
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-4.5-4.5" />
    </template>
    <template v-else-if="name === 'plus'">
      <path d="M12 5v14M5 12h14" />
    </template>
    <template v-else-if="name === 'menu'">
      <path d="M4 8h16M4 16h16" />
    </template>
    <template v-else-if="name === 'close'">
      <path d="M6 6l12 12M18 6 6 18" />
    </template>
    <template v-else-if="name === 'graduation'">
      <path d="M2.5 9 12 4.5 21.5 9 12 13.5z" />
      <path d="M6.5 11v4.5c0 1.5 2.5 3 5.5 3s5.5-1.5 5.5-3V11" />
      <path d="M21.5 9v5" />
    </template>
  </svg>
</template>
