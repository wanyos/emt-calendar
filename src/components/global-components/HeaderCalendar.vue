<template>
  <section class="section__main">

    <Item title="Libres">
      <template #iconLeading>
        <v-icon name="pr-circle-on" scale="1" fill="var(--color-free-day)" class="mr-3" />
      </template>
    </Item>


    <div v-if="showMotion" class="div__show-motion">
      <Item title="Subgrupo" class="ml-2">
        <template #iconLeading>
          <v-icon name="pr-circle-on" scale="1" fill="var(--color-free-subgroup)" class="mr-2" />
        </template>
      </Item>

      <Item title="Grupos(A/C/E/G)" class="ml-2">
        <template #iconLeading>
          <v-icon name="pr-circle-on" scale="1" fill="var(--color-free-groups_aceg)" class="mr-2" />
        </template>
      </Item>

      <Item title="Grupos(B/D/F/H)" class="ml-2">
        <template #iconLeading>
          <v-icon name="pr-circle-on" scale="1" fill="var(--color-free-groups_bdfh)" class="mr-2" />
        </template>
      </Item>
    </div>

      

    <Item v-if="showReduction" title="D.Reduccion" class="ml-2">
      <template #iconLeading>
        <v-icon name="pr-circle-on" scale="1" fill="var(--color-free-reduction)" class="mr-2" />
      </template>
    </Item>
    <Item v-if="showPartial" title="Jda.Parcial" class="ml-2">
      <template #iconLeading>
        <v-icon name="pr-circle-on" scale="1" fill="var(--color-free-partial)" class="mr-2" />
      </template>
    </Item>
  </section>
</template>

<script setup>
import Item from './Item.vue'
import { useOptionsCalendarStore } from '@/stores/optionCalendarStore.js'
import { computed } from 'vue';

// ref y computadas
const calendarStore = useOptionsCalendarStore();

const showMotion = computed(() =>  ['Conductor', 'Conductor-Buho', 'Inspector', 'Inspector-Noche'].includes(calendarStore.getType) );
const showReduction = computed(() => ['ParkingDSM-100', 'ParkingDSM-50'].includes(calendarStore.getType));
const showPartial = computed(() => ['Grua', 'GruaDSM', 'ParkingDSM-50'].includes(calendarStore.getType));

</script>

<style lang="css" scoped>
.section__main {
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.div__show-motion {
  display: flex;
}
</style>
