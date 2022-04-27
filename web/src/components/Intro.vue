<template>
  <section class="intro">
    <g-image
      v-if="$static.frontpage.image.image"
      :src="
        $urlForImage(
          $static.frontpage.image.image,
          $static.metadata.sanityOptions
        )
          .width(1200)
          .auto('format')
          .url()
      "
      :alt="$static.frontpage.image.alt[$context.locale]"
    />
    <div class="intro-text">
      <p class="lead">
        {{ $static.frontpage.text[$context.locale] }}
      </p>
      <Button type="bookRoom" />
    </div>
    <div class="booker" style="display: none">
      <div class="booker-date-picker">
        <date-picker
          v-model="selectedDate"
          range
          :disabled-date="disabledDate"
          @change="onDateRangeChange"
        ></date-picker>
      </div>
      <div class="booker-num-people">
        <div>
          <span>Voksne</span>
          <input
            type="number"
            id="booker-adults"
            name="booker-adults"
            min="1"
            max="10"
            ref="numAdults"
            @change="onNumAdultsChange"
          />
        </div>
        <div>
          <span>Barn</span>
          <input
            type="number"
            id="booker-children"
            name="booker-children"
            min="1"
            max="10"
            ref="numChildren"
            @change="onNumChildrenChange"
          />
        </div>
      </div>
      <div class="booker-launch">
        <a :href="searchUrl()" target="_blank" class="button">Søk</a>
      </div>
    </div>
  </section>
</template>

<static-query>
query {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  frontpage: sanityFrontpage(id: "frontpage") {
    text {
      no
      en
    }
    image {
      image {
        asset {
          _id
          url
        }
      }
      alt {
        no
        en
      }
    }
  }
}
</static-query>

<script>
import Button from "@/components/buttons/Button";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import "vue2-datepicker/locale/nb";

// https://be.synxis.com/?config=KNUTSBE&hotel=55981&level=hotel&locale=nb-NO

export default {
  components: {
    Button,
    DatePicker,
  },
  data() {
    return {
      selectedDate: null,
      startDate: null,
      endDate: null,
      numAdults: 1,
      numChildren: 0,
    };
  },
  methods: {
    searchUrl() {
      const url = this.makeUrl(
        this.startDate,
        this.endDate,
        this.numAdults,
        this.numChildren
      );
      return url;
    },
    makeUrl(startDate, endDate, numAdults, numChildren) {
      const baseUrl = "https://be.synxis.com/";
      const params = {
        config: "KNUTSBE",
        hotel: "55981",
        level: "hotel",
        locale: "nb-NO", // TODO: or english
        arrive: (startDate && startDate.toISOString().split("T")[0]) || "",
        depart: (endDate && endDate.toISOString().split("T")[0]) || "",
        adult: numAdults,
        child: numChildren,
      };
      const paramsString = new URLSearchParams(params).toString();
      return `${baseUrl}?${paramsString}`;
    },
    onDateRangeChange(value) {
      const [startDate, endDate] = value;
      this.startDate = startDate;
      this.endDate = endDate;
    },
    onNumAdultsChange(e) {
      this.numAdults = this.$refs.numAdults.value;
    },
    onNumChildrenChange(e) {
      this.numChildren = this.$refs.numChildren.value;
    },
    disabledDate(date, currentValue) {
      // disable selecting dates before today
      return (
        new Date(date.toDateString()) < new Date(new Date().toDateString())
      );
    },
  },
};
</script>

<style lang="scss">
.intro {
  background: var(--color-background);
  color: var(--color-text);
  padding-top: 0 !important;
  gap: var(--spacing-sitepadding);
  img {
    display: block;
    border-radius: var(--border-radius);
    max-width: 86%;
    margin: 0 auto;
  }
  &-text {
    text-align: center;
  }
  .lead {
    margin: calc(var(--spacing-sitepadding) * 2) auto var(--spacing-sitepadding);
    max-width: 24em;
  }
}
</style>
