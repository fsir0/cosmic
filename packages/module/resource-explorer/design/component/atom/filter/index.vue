<script lang="ts" setup>
    import Item from './item.vue';

    const data = [
        {
            text: '颜色',
            num: '120',
            icon: 'https://fe-dev.bj.bcebos.com/cosmic/%E9%A2%9C%E8%89%B2%E6%9C%AA%E9%80%89%E4%B8%AD.png',
            hoverIcon: 'https://fe-dev.bj.bcebos.com/cosmic/%E9%A2%9C%E8%89%B2%E9%80%89%E4%B8%AD.png',
        },
        {
            text: '文字',
            num: '120',
            icon: 'https://fe-dev.bj.bcebos.com/cosmic/%E6%96%87%E5%AD%97%E6%9C%AA%E9%80%89%E4%B8%AD.png',
            hoverIcon: 'https://fe-dev.bj.bcebos.com/cosmic/%E6%96%87%E5%AD%97%E9%80%89%E4%B8%AD.png',
        },
        {
            text: '蒙层',
            num: '120',
            icon: 'https://fe-dev.bj.bcebos.com/cosmic/%E8%92%99%E5%B1%82%E6%9C%AA%E9%80%89%E4%B8%AD.png',
            hoverIcon: 'https://fe-dev.bj.bcebos.com/cosmic/%E8%92%99%E5%B1%82%E9%80%89%E4%B8%AD.png',
        },
        {
            text: '描边',
            num: '120',
            icon: 'https://fe-dev.bj.bcebos.com/cosmic/%E6%8F%8F%E8%BE%B9%E6%9C%AA%E9%80%89%E4%B8%AD.png',
            hoverIcon: 'https://fe-dev.bj.bcebos.com/cosmic/%E6%8F%8F%E8%BE%B9%E9%80%89%E4%B8%AD.png',
        },
        {
            text: '外阴影',
            num: '120',
            icon: 'https://fe-dev.bj.bcebos.com/cosmic/%E5%A4%96%E9%98%B4%E5%BD%B1%E6%9C%AA%E9%80%89%E4%B8%AD.png',
            hoverIcon: 'https://fe-dev.bj.bcebos.com/cosmic/%E5%A4%96%E9%98%B4%E5%BD%B1%E9%80%89%E4%B8%AD.png',
        },
        {
            text: '内阴影',
            num: '120',
            icon: 'https://fe-dev.bj.bcebos.com/cosmic/%E5%86%85%E9%98%B4%E5%BD%B1%E6%9C%AA%E9%80%89%E4%B8%AD.png',
            hoverIcon: 'https://fe-dev.bj.bcebos.com/cosmic/%E5%86%85%E9%98%B4%E5%BD%B1%E9%80%89%E4%B8%AD.png',
        },
    ];
</script>

<template>
    <div
        class="flex items-center text-black w-full"
        :class="$style.filter"
    >
        <Item
            v-for="item in data"
            v-bind="item"
            :key="item.icon + item.text"
        />
    </div>
</template>

<style module>
    .filter {
        overflow-x: scroll;
    }
    .filter::-webkit-scrollbar {
        display: none; /* Chrome Safari */
    }
</style>
