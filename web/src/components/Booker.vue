<template>
  <div class="booker">
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

<style lang="scss" scoped>
.booker {
  display: none;
}
</style>