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
  props: {
    photos: {
      type: Array,
      default: function() {
        return [
          {
            "albumId": 1,
            "id": 1,
            "title": "accusamus beatae ad facilis cum similique qui sunt",
            "url": "https://via.placeholder.com/600/92c952",
            "thumbnailUrl": "https://via.placeholder.com/150/92c952"
          },
          {
            "albumId": 1,
            "id": 2,
            "title": "reprehenderit est deserunt velit ipsam",
            "url": "https://via.placeholder.com/600/771796",
            "thumbnailUrl": "https://via.placeholder.com/150/771796"
          },
          {
            "albumId": 1,
            "id": 3,
            "title": "officia porro iure quia iusto qui ipsa ut modi",
            "url": "https://via.placeholder.com/600/24f355",
            "thumbnailUrl": "https://via.placeholder.com/150/24f355"
          },
          {
            "albumId": 1,
            "id": 4,
            "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
            "url": "https://via.placeholder.com/600/d32776",
            "thumbnailUrl": "https://via.placeholder.com/150/d32776"
          },
          {
            "albumId": 1,
            "id": 5,
            "title": "natus nisi omnis corporis facere molestiae rerum in",
            "url": "https://via.placeholder.com/600/f66b97",
            "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
          },
          {
            "albumId": 1,
            "id": 6,
            "title": "accusamus ea aliquid et amet sequi nemo",
            "url": "https://via.placeholder.com/600/56a8c2",
            "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
          },
          {
            "albumId": 1,
            "id": 7,
            "title": "officia delectus consequatur vero aut veniam explicabo molestias",
            "url": "https://via.placeholder.com/600/b0f7cc",
            "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
          }
        ]
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