<template>
  <div class="booker">
    <div class="booker-date-picker">
      <span class="label">Dato</span>
      <date-picker
        v-model="selectedDate"
        range
        :disabled-date="disabledDate"
        @change="onDateRangeChange"
      ></date-picker>
    </div>
    <div class="booker-num-people">
      <span class="label">Antall gjester</span>
      <div>
        <input
          type="number"
          id="booker-adults"
          name="booker-adults"
          min="1"
          max="10"
          ref="numAdults"
          @change="onNumAdultsChange"
        />
        <span class="sub-label">Voksne</span>
        <input
          type="number"
          id="booker-children"
          name="booker-children"
          min="1"
          max="10"
          ref="numChildren"
          @change="onNumChildrenChange"
        />
        <span class="sub-label">Barn</span>
      </div>
    </div>
    <div class="booker-launch">
      <a :href="searchUrl()" target="_blank" class="button">{{
        $t("links.checkAvailability")
      }}</a>
    </div>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import "vue2-datepicker/locale/nb";

// https://be.synxis.com/?config=KNUTSBE&hotel=55981&level=hotel&locale=nb-NO

export default {
  components: {
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
.booker {
  background: var(--color-white);
  color: var(--color-blue-dark);
  box-shadow: var(--box-shadow);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
  padding: 0.7rem 0.8rem 0.8rem;
  text-align: left;

  &-date-picker {
  }
  &-num-people {
    input {
      margin-right: 0.4rem;
    }
  }
  &-launch {
  }
  .label {
    display: block;
    text-transform: uppercase;
    font-size: var(--font-size-xs);
    margin-bottom: 0.2rem;
  }
  .sub-label {
    display: inline-block;
    margin-right: 0.6rem;
  }
  .button {
    background: var(--color-green) !important;
    &:hover {
      background: var(--color-yellow) !important;
    }
  }
}
.mx-datepicker-main {
  font-family: var(--font-main);
  color: currentColor;

  button {
    font-family: var(--font-main);
    text-transform: capitalize;
    color: currentColor;
  }
}
.mx-table-date .today {
  color: var(--color-blue-text);
}
.mx-calendar-content .cell.active {
  background-color: var(--color-blue-text);
}
.mx-calendar-content .cell.hover-in-range {
  background-color: var(--color-blue-light);
}
.mx-calendar-content .cell:hover {
  background-color: var(--color-blue-text);
  color: var(--color-white);
}
.mx-input,
.booker input {
  font-family: var(--font-main);
  color: var(--color-blue-dark);
  font-size: 1rem;
  border: 1px solid rgba(28, 41, 75, 0.6);
  border-radius: 0;
  padding: 0.2rem 0.4rem;
  height: auto;
  line-height: 1.5;
}
.mx-datepicker-range {
  width: 16rem;
}

@media (max-width: 1000px) {
  .booker {
    display: inline-block;
    padding: 1rem;
    &-date-picker,
    &-num-people {
      margin-bottom: 1rem;
    }
    &-launch {
      margin-bottom: 0;
      .button {
        width: 100%;
        text-align: center;
      }
    }
    .mx-datepicker-range {
      width: 100%;
    }
  }
}
</style>
