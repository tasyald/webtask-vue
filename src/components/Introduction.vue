<template>
  <section class="introduction container-body">
    <div class="columns">
      <div class="introduction-text column is-4">
        <h1 class="title">{{ title }}</h1>
        <p class="introduction-description">{{ description }}</p>
      </div>

      <div class="column is-8">
        <img class="introduction-illustration" src="@/assets/images/illustration.jpg" alt="illustration"/>
      </div>

      <div class="introduction-text-mobile column is-4">
        <p>{{ description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Introduction',
  props: {
    title: {
      type: String,
      default: 'Lorem Ipsum'
    },
    description: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum turpis orci.'
    }
  },
}
</script>

<style lang="scss">
.introduction {
  padding: 3rem;

  .introduction-text {
    align-self: center;
    text-align: left;
  }

  .introduction-illustration {
    width: 100%;
  }

  .introduction-text-mobile {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .introduction {
    padding: 2.5rem 1rem;

    .title {
      text-align: center;
    }

    .introduction-description {
      display: none;
    }

    .introduction-text-mobile {
      display: block;
    }
  }
}
</style>
