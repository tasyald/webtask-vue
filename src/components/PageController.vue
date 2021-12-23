<template>
  <nav class="page-controller pagination is-centered" role="navigation" aria-label="pagination">
    <v-pagination
      v-model="currentPage"
      :length="pages"
      :total-visible="11"
      color="#108EE9"
      circle
      @input="onChangePage"
    />
  </nav>
</template>

<script>
export default {
  name: 'PageController',
  data() {
    return {
      currentPage: 1
    }
  },
  props: {
    pages: {
      type: Number,
      default: 1
    },
    onChange:  {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    onChangePage(page) {
      this.onChange(page)
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/base';

.page-controller {
  justify-content: center !important;
  margin-bottom: 4rem !important;

  .v-pagination__item {
    color: $primary_color !important;
  }

  .v-pagination__item--active {
    color: #FFFFFF !important;
  }

  li:first-child button {
    box-shadow: none;
    width: 100%;
  }

  li:first-child button::after {
    content: '❮ Back';
    margin: 0 0.5rem 0 1rem;
    color: $primary_color;
  }

  li:first-child button.v-pagination__navigation--disabled::after {
    color: rgba(0, 0, 0, 0.87);
  }

  li:last-child button {
    box-shadow: none;
    width: 100%;
  }

  li:last-child button::before {
    content: 'Next ❯';
    margin-left: 1rem;
    margin: 0 1rem 0 0.5rem;
    color: $primary_color;
  }

  li:last-child button.v-pagination__navigation--disabled::before {
    color: rgba(0, 0, 0, 0.87);
  }
}

@media screen and (max-width: 768px) {
  .page-controller {
    li:first-child button::after {
      content: '❮';
    }
  
    li:last-child button::before {
      content: '❯';
    }
  }
}
</style>
