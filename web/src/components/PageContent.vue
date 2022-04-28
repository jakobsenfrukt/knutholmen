<template>
  <div class="page-content">
    <div
      v-for="(block, index) in content"
      :key="index"
      class="content-block"
      :class="block._type"
    >
      <!-- Text blocks -->
      <template v-if="block._type === 'localeBody'">
        <block-content
          :blocks="block._rawNo"
          v-if="block._rawNo && $context.locale == 'no'"
          class="block-content"
        />
        <block-content
          :blocks="block._rawEn"
          v-else-if="block._rawEn && $context.locale == 'en'"
          class="block-content"
        />
      </template>

      <!-- Text + image blocks -->
      <template v-if="block._type === 'textAndImage'">
        <div class="text">
          <block-content
            :blocks="block.text._rawNo"
            v-if="block.text._rawNo && $context.locale == 'no'"
            class="block-content"
          />
          <block-content
            :blocks="block.text._rawEn"
            v-else-if="block.text._rawEn && $context.locale == 'en'"
            class="block-content"
          />
        </div>
        <figure class="image">
          <img
            v-if="block.image.image"
            :src="
              $urlForImage(block.image.image, $static.metadata.sanityOptions)
                .width(800)
                .auto('format')
                .url()
            "
            :alt="block.image.alt[$context.locale]"
          />
          <figcaption
            v-if="block.image.caption && block.image.caption[$context.locale]"
          >
            {{ block.image.caption[$context.locale] }}
          </figcaption>
        </figure>
      </template>

      <!-- Single image blocks -->
      <template v-if="block._type === 'localeFigureCaptioned'">
        <figure class="image">
          <img
            v-if="block.image"
            :src="
              $urlForImage(block.image, $static.metadata.sanityOptions)
                .width(1400)
                .auto('format')
                .url()
            "
            :alt="block.alt[$context.locale]"
          />
          <figcaption v-if="block.caption && block.caption[$context.locale]">
            {{ block.caption[$context.locale] }}
          </figcaption>
        </figure>
      </template>

      <!-- Image column blocks -->
      <template v-if="block._type === 'imageColumns'">
        <figure
          v-for="(image, index) in block.images"
          :key="index"
          class="image"
        >
          <img
            v-if="image.image"
            :src="
              $urlForImage(image.image, $static.metadata.sanityOptions)
                .width(600)
                .auto('format')
                .url()
            "
            :alt="image.alt[$context.locale]"
          />
          <figcaption v-if="image.caption && image.caption[$context.locale]">
            {{ image.caption[$context.locale] }}
          </figcaption>
        </figure>
      </template>

      <!-- Section blocks -->
      <template v-if="block._type === 'sectionWithHeading'">
        <div class="wrapper" :class="!block.image ? 'noimage' : ''">
          <div class="text">
            <span class="page-title">{{ block.title[$context.locale] }}</span>
            <h1 class="page-heading">{{ block.heading[$context.locale] }}</h1>
            <block-content
              :blocks="block.text._rawNo"
              v-if="block.text._rawNo && $context.locale == 'no'"
              class="block-content"
            />
            <block-content
              :blocks="block.text._rawEn"
              v-else-if="block.text._rawEn && $context.locale == 'en'"
              class="block-content"
            />
          </div>
          <figure class="image" v-if="block.image">
            <img
              v-if="block.image.image"
              :src="
                $urlForImage(block.image.image, $static.metadata.sanityOptions)
                  .width(800)
                  .auto('format')
                  .url()
              "
              :alt="block.image.alt[$context.locale]"
            />
            <figcaption
              v-if="block.image.caption && block.image.caption[$context.locale]"
            >
              {{ block.image.caption[$context.locale] }}
            </figcaption>
          </figure>
        </div>
      </template>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
}
</static-query>

<script>
import BlockContent from "@/components/tools/BlockContent";
import Button from "@/components/buttons/Button";

export default {
  components: {
    BlockContent,
    Button,
  },
  props: {
    content: Array,
    button: String,
  },
};
</script>

<style lang="scss" scoped>
.content-block {
  &:first-of-type {
    margin-top: 0;

    &.localeFigureCaptioned {
      margin-top: 5rem;
    }
  }
  &:last-of-type {
    padding-bottom: 6rem;
  }
}
.page-content img {
  display: block;
}
.localeBody {
  margin: var(--spacing-sitepadding) auto;
}
.textAndImage {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: var(--spacing-sitepadding);
  margin: var(--spacing-sitepadding) auto;
  max-width: 70rem;
}
.localeFigureCaptioned {
  display: block;
  margin: 0 calc(var(--spacing-sitepadding) * -2);
  img {
    display: block;
    width: 100%;
    max-height: 90vh;
    object-fit: cover;
  }
  figcaption {
    text-align: center;
    max-width: 30rem;
    margin: 0 auto;
  }
}
.imageColumns {
  display: flex;
  align-items: center;
  gap: var(--spacing-sitepadding);
  margin: var(--spacing-sitepadding) auto;
  max-width: 70rem;
}
figcaption {
  font-size: var(--font-size-xs);
  padding: 0.7rem 1rem;
  margin: 0;
}
.sectionWithHeading {
  background-color: var(--color-red-light);
  margin: 0 calc(var(--spacing-sitepadding) * -2);
  padding: calc(var(--spacing-sitepadding) * 2);

  + .sectionWithHeading {
    background-color: var(--color-background);
  }
  + .sectionWithHeading + .sectionWithHeading {
    background-color: var(--color-background);
  }

  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: calc(var(--spacing-sitepadding) * 2);
    align-items: center;
    max-width: 70rem;
    margin: 0 auto;
    &.noimage {
      grid-template-columns: 1fr;
      .block-content {
        margin: 3rem 0;
        p {
          margin: 0;
        }
      }
    }
  }
  .text {
    width: 100%;
    max-width: 70rem;
    margin: 0 auto;
  }
  .block-content {
    margin: 3rem 0;
    p {
      margin: 0;
    }
  }
}

@media (max-width: 800px) {
  .textAndImage,
  .sectionWithHeading .wrapper {
    grid-template-columns: 1fr;
  }
  .imageColumns {
    display: block;
    figure {
      margin-bottom: 2rem;
    }
  }
}

@media (min-width: 800px) {
  .textAndImage,
  .sectionWithHeading {
    &:nth-child(odd) {
      .text {
        order: 2;
      }
      .image {
        order: 1;
      }
    }
    &:nth-child(even) {
      .text {
        order: 1;
      }
      .image {
        order: 2;
      }
    }
  }
}
</style>
