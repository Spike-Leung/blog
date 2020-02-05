<template>
  <div :class="[prefixCls]">
    <Navbar/>
    <ul :class="[`${prefixCls}__content`]">
      <li v-for="page in pageList">
        <router-link :to="page.path">
          <h4>{{page.title}}</h4>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="stylus">
  .tag
    &__content
      margin: 0 auto
      padding: 7.2rem 1.8rem
      max-width: 500px
      li
        list-style: none
        &:hover
          cursor: pointer;
          border-color: #2e70d7
          a
            color: #2e70d7
</style>

<script>
  import Navbar from '@theme/components/Navbar.vue';
  import moment from 'moment';

export default {
  name: 'Tag',

  components: {
    Navbar,
  },

  data() {
    return {
      prefixCls: 'tag',
    };
  },

  computed: {
    pageList() {
      return this.$currentTag.pages
        .sort((a, b) => moment(a.lastUpdated).format('X') - moment(b.lastUpdated).format('X'))
        .map(a => {
          a.lastUpdatedNew = moment(a.lastUpdated).format('YYYY-MM-DD HH:mm:ss');
          return a;
        });
    },
  },
}
</script>
