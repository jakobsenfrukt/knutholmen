<template>
  <section class="intro">
    <div class="intro-top">
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
        class="illustration"
      />
      <div class="intro-text">
        <p class="lead">
          {{ $static.frontpage.text[$context.locale] }}
        </p>
      </div>

      <div class="booker-wrapper">
        <Button type="bookRoom" />
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
      </div>
    </div>
    <div class="photo">
      <g-image
        v-if="$static.frontpage.image2.image"
        :src="
          $urlForImage(
            $static.frontpage.image2.image,
            $static.metadata.sanityOptions
          )
            .width(1600)
            .auto('format')
            .url()
        "
        :alt="$static.frontpage.image2.alt[$context.locale]"
      />
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
    image2 {
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
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  gap: var(--spacing-sitepadding);
  overflow: visible;
  &-top {
    position: relative;
    padding-bottom: calc(var(--spacing-sitepadding) * 1.75);
  }
  .illustration {
    display: block;
    width: 90%;
    max-width: 40rem;
    margin: 0 auto;
  }
  .photo {
    display: block;
    margin: 0 calc(var(--spacing-sitepadding) * -1);
    img {
      display: block;
      width: 100%;
      max-height: 75vh;
      object-fit: cover;
    }
  }
  &-text {
    text-align: center;
  }
  .lead {
    margin: calc(var(--spacing-sitepadding) * 2) auto var(--spacing-sitepadding);
    max-width: 30em;
  }
}
.booker {
  &-wrapper {
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }
}
</style>
