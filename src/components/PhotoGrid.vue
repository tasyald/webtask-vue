<template>
  <div class="photo-grid container-body">
    <div class="columns is-multiline">
      <div class="column is-3-desktop is-4-tablet" v-for="photo in photos" :key="photo.id">
        <div class="photo-actions">
          <font-awesome-icon icon="heart" color="#FF0000" :style="{ marginRight: '0.25rem' }" />
          <span class="like-count" :style="{ marginLeft: 0 }">124</span>
          <span class="action-share">
            <font-awesome-icon icon="share-alt" />
            <div class="share-social-media">
              <font-awesome-icon :icon="['fab', 'facebook-square']" />
              <font-awesome-icon :icon="['fab', 'instagram']" />
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </div>
          </span>
        </div>
        <img class="photo-grid-item" :src="photo.thumbnailUrl" :alt="photo.title" />
        <figcaption class="photo-caption">{{ photo.title }}</figcaption>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoGrid',
  props: {
    photos: {
      type: Array,
      default: function() {
        return []
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/base';

.photo-grid {
  padding: 3rem 2rem;

  .column {
    position: relative;

    .photo-actions {
      position: absolute;
      right: 1.5rem;
      top: 1rem;
      color: #FFFFFF;
      opacity: 0;
      transition: all 0.25s linear;

      > * {
        margin-left: 0.75rem;
      }

      .action-share {
        display: inline-grid;

        .share-social-media {
          float: right;
          opacity: 0;
          display: inline-grid;
        }

      }
      .action-share:hover .share-social-media {
        opacity: 1;

        > * {
          margin-top: 0.5rem;
        }
      }
    }

    .photo-grid-item {
      width: 100%;
      height: 12.5rem;
      object-fit: cover;
      border-radius: 6px;
      box-shadow: 4px 4px 4px rgba(70, 63, 63, 0.2);
    }

    .photo-caption {
      position: absolute;
      top: 9.75rem;
      width: 80%;
      margin: 0 1rem;
      color: #FFFFFF;
      opacity: 0;
      transition: all 0.25s linear;
      text-align: left;
    }
  }

  .column:hover .photo-actions {
    opacity: 1;
  }

  .column:hover .photo-caption {
    opacity: 1;
  }
}

@media screen and (max-width: 768px) {
  .photo-grid {
    padding: 3rem 0px;

    .column {
      .photo-actions {
        position: absolute;
        right: 1.5rem;
        bottom: -0.5rem;
        top: auto;
        color: #4A4A4A;
        opacity: 1;

        .like-count {
          display: none;
        }
      }

      .photo-grid-item {
        height: auto;
        border-radius: 0;
      }

      .photo-caption {
        margin: 0 1rem;
        position: static;
        opacity: 1;
        color: $grey_text;
        height: 3rem;
        padding-right: 1rem;
        text-align: left;
      }
    }
  }
}
</style>
