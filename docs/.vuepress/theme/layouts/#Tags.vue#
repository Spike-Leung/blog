<template>
  <div :class="[prefixCls]">
    <Navbar/>
    <ul :class="[`${prefixCls}__list`]">
      <li v-for="item in tagList" :class="[`${prefix}__list__item`]">
        <router-link class="page-link" :to="item.path">{{ `${item.name} (${item.pages.length})` }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="stylus">
  .tags
    &__list
      margin: 0 auto
      padding: 7.2rem 1.8rem
      width: 500px
      li
        list-style: none
        border: 2px solid #3eaf7c
        border-radius: 5px
        padding: 0.5rem
        text-align: center
        display: inline-block
        & + li
          margin-left: 0.5rem
        &:hover
          cursor: pointer;
          border-color: #2e70d7
          a
            color: #2e70d7
</style>

<script>
  import Navbar from '@theme/components/Navbar.vue';

  export default {
    name: 'Tags',

    components: {
      Navbar,
    },

    data() {
      return {
        prefixCls: 'tags',
      };
    },

    computed: {
        tagList() {
             return this.$frontmatterKey.list.sort((a, b) => a.name.localeCompare(b.name));
      },
    }
  }
</script>
