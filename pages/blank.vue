<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <PageWrapper>

    <PageBody>
      <PageSection>
        <iframe class="element" src="services.html" style="flex-grow: 1; border: none; margin: 0; padding: 0 ; height: 5000px; width: 100% ;"></iframe>
      </PageSection>
    </PageBody>

  </PageWrapper>
</template>

<style>
.element::-webkit-scrollbar { width: 0 !important }
</style>