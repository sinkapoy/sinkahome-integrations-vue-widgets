<script setup lang="ts">
import { computed, onBeforeMount, onBeforeUnmount, reactive } from "vue";
import { IWidgetViewModel } from "./IWidgetViewModel";

const props = defineProps<{ widget: IWidgetViewModel }>();

const store = reactive({ isPortrait: false });

const queryChecker = () => {
    store.isPortrait = window.matchMedia('(orientation: portrait)').matches
};


onBeforeMount(() => {
    window.addEventListener('resize', queryChecker);
});
onBeforeUnmount(() => {
    window.removeEventListener('resize', queryChecker);
})

queryChecker();

const width = computed(() => {
    return props.widget.properties.get('width')?.value || 2;
});
const height = computed(() => {
    return props.widget.properties.get('height')?.value || 2;
});

</script>

<template>
    <template v-if="!store.isPortrait">
        <div class="widget-landscape" :style="{
            width: width * 4 + 'rem',
            height: height * 4 + 'rem',
        }
            ">
            <slot name="landscape" />
        </div>
    </template>
    <template v-else>
        <div class="widget-protrait">
            <slot name="portrait" />
        </div>
    </template>
</template>
