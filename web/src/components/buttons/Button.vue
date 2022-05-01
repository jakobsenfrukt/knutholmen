<template>
  <div class="button-wrapper">
    <!-- Book room -->
    <div v-if="type && type === 'bookRoom'">
      <a
        class="button large blank"
        :href="$static.general.bookRoom.url[$context.locale]"
        target="_blank"
        >{{ $static.general.bookRoom.buttonText[$context.locale] }}</a
      >
      <p class="info">{{ $static.general.bookRoom.info[$context.locale] }}</p>
    </div>

    <!-- Book activity -->
    <div v-if="type && type === 'bookActivity'">
      <a
        class="button large blank"
        :href="$static.general.bookActivity.url[$context.locale]"
        target="_blank"
        >{{ $static.general.bookActivity.buttonText[$context.locale] }}</a
      >
      <p class="info">
        {{ $static.general.bookActivity.info[$context.locale] }}
      </p>
    </div>

    <!-- Book table -->
    <div v-if="type && type === 'bookTable'">
      <a
        class="button large blank"
        :href="$static.general.bookTable.url[$context.locale]"
        target="_blank"
        >{{ $static.general.bookTable.buttonText[$context.locale] }}</a
      >
      <p class="info">{{ $static.general.bookTable.info[$context.locale] }}</p>
    </div>

    <!-- Buy gift card -->
    <div v-if="type && type === 'giftcard'">
      <p>{{ $static.general.giftcard.info[$context.locale] }}</p>
      <a
        class="button large blank"
        :href="$static.general.giftcard.url[$context.locale]"
        target="_blank"
        >{{ $static.general.giftcard.buttonText[$context.locale] }}</a
      >
    </div>

    <!-- Other buttons -->
    <button class="button" v-else-if="action" @click="action">
      {{ text }}
    </button>
    <a
      class="button blank"
      v-else-if="link && blank"
      :href="link"
      target="_blank"
      >{{ text }}</a
    >
    <a class="button" v-else-if="link" :href="link">{{ text }}</a>
  </div>
</template>

<static-query>
query {
  general: sanityGeneral(id: "general") {
    bookRoom {
      buttonText {
        no
        en
      }
      url {
        no
        en
      }
      info {
        no
        en
      }
    }
    bookActivity {
      buttonText {
        no
        en
      }
      url {
        no
        en
      }
      info {
        no
        en
      }
    }
    bookTable {
      buttonText {
        no
        en
      }
      url {
        no
        en
      }
      info {
        no
        en
      }
    }
    giftcard {
      buttonText {
        no
        en
      }
      url {
        no
        en
      }
      info {
        no
        en
      }
    }
  }
}
</static-query>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Klikk her",
    },
    action: {
      type: Function,
      default: undefined,
    },
    link: {
      type: String,
      default: undefined,
    },
    blank: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: undefined,
    },
  },
};
</script>

<style lang="scss">
.button {
  display: inline-block;
  position: relative;
  background: var(--color-highlight);
  color: var(--color-background);
  outline: none;
  border: none;
  font-family: inherit;
  font-size: var(--font-size-s);
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 1.2rem 2rem;
  border-radius: var(--border-radius-l);
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition-hover);
  &:hover {
    background: var(--color-hover-background);
    color: var(--color-hover);
  }
  &.blank {
    &:after {
      content: "↑";
      display: inline-block;
      transform: rotate(45deg);
      margin-left: 1rem;
    }
  }
  &.ribbon {
    &:before {
      content: "";
      height: 0;
      width: 0;
      display: block;
      position: absolute;
      top: 0;
      left: -1.5rem;
      border-top: 1.5rem solid var(--color-text);
      border-bottom: 1.5rem solid var(--color-text);
      border-right: 1.5rem solid transparent;
      border-left: 1.5rem solid transparent;
      transition: var(--transition-hover);
    }
    &:after {
      content: "";
      height: 0;
      width: 0;
      display: block;
      position: absolute;
      top: 0;
      right: -1.5rem;
      border-top: 1.5rem solid var(--color-text);
      border-bottom: 1.5rem solid var(--color-text);
      border-right: 1.5rem solid transparent;
      border-left: 1.5rem solid transparent;
      transition: var(--transition-hover);
    }
    &:hover {
      &:before,
      &:after {
        border-top-color: var(--color-hover);
        border-bottom-color: var(--color-hover);
      }
    }
  }
}
.info {
  font-size: var(--font-size-xs);
  font-style: italic;
  opacity: 0.6;
  margin: 1em 0;

  display: none;
}
.button-wrapper + .button-wrapper {
  margin-top: 0.5rem;
}
.site-footer .button {
  color: var(--color-blue-dark);
  background: var(--color-white);

  &:hover {
    color: var(--color-hover);
    background: var(--color-hover-background);
  }
}
</style>
