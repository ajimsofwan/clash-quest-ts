<script setup lang="ts">
import { computed } from 'vue';
import Job from '../types/Job';
import OrderTerm from '../types/OrderTerm';
import Card from './Card.vue';

const props = defineProps<{
  jobs: Job[],
  order: OrderTerm
}>()

const orderedJobs = computed(() => {
  return [...props.jobs].sort((a: Job, b: Job) => {
    return a[props.order] > b[props.order] ? 1 : -1
  })
})

</script>

<template>
  <div class="mb-2">Order By <span class="font-bold capitalize">{{ order }}</span></div>
  <transition-group name="list" tag="div">
    <div v-for="job in orderedJobs" :key="job.id" class="duration-300 ease-in">
      <Card>
        <h1 class="mb-3 text-4xl font-bold capitalize">{{ job.title }} In {{ job.location }}</h1>
        <div class="flex items-center"><img src="../assets/coin.png" alt="coin" class="w-6 h-6 mr-2">
          <p class="mt-2 mb-3 text-lg font-bold text-amber-500">{{
            job.salary.toLocaleString('en-Us') }} Coin</p>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dicta sed a possimus nulla reiciendis voluptas
          sequi? Dolorem sunt iste laborum odit esse possimus. Quo aliquid fugit quas nesciunt laboriosam perferendis
          dolorum? Dolor incidunt delectus ullam odio eveniet nostrum blanditiis a tenetur, voluptatum excepturi! Delectus
          architecto deserunt corrupti distinctio veritatis!</p>
      </Card>
    </div>
  </transition-group>
</template>
<style scoped>
.list-move {
  transition: all 1s;
}
</style>