<script setup lang="ts">
type Props = {
  slug?: string;
};
const props = defineProps<Props>()
const loadedSlug = usePathParams('slug')
const eventSlug = computed(() => props.slug || loadedSlug)
const canPost = useCanPostGame(eventSlug.value)
</script>

<template>
  <div v-if="canPost">
    <div v-if="canPost === 'enabled'" class="w-full flex justify-center">
      <UIButton
        @click="navigateTo('/entry/register')"
      >
        作品を登録する
      </UIButton>
    </div>
    <div v-else-if="canPost === 'notLoggedIn'" class="w-full flex justify-center">
      <UIButton
        @click="navigateTo('/entry/register')"
      >
        ログインして作品を登録する
      </UIButton>
    </div>
    <div v-else-if="canPost === 'prePeriod'" class="text-center text-brand-violet h3-text">
      応募はまだ開始されていません
    </div>
    <div v-else-if="canPost === 'postPeriod'" class="text-center text-brand-violet h3-text">
      応募は締め切りました！
    </div>
  </div>
</template>
