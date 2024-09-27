<template>
  <section class="section__main">
    <Item title="Libres">
      <template #iconLeading>
        <v-icon name="pr-circle-on" scale="1" fill="rgb(46,204,112)" class="mr-2" />
      </template>
    </Item>
    <Item title="Subgrupo" class="ml-2">
      <template #iconLeading>
        <v-icon name="pr-circle-on" scale="1" fill="rgb(242,192,17)" class="mr-2" />
      </template>
    </Item>

    <Item title="Reducción" class="ml-2">
      <template #iconLeading>
        <v-icon name="pr-circle-on" scale="1" fill="var(--color-ref-primary80)" class="mr-2" />
      </template>
    </Item>
  </section>
</template>

<script setup>
import Item from './Item.vue'
</script>

<style lang="css" scoped>
.section__main {
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
