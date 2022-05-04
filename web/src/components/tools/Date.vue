<template>
  <span class="date">{{ date[$context.locale] }}</span>
</template>

<script>
export default {
  props: {
    rawDate: String,
  },
  data() {
    return {
      monthnames: {
        no: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Mai",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Okt",
          "Nov",
          "Des",
        ],
        en: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    };
  },
  computed: {
    date() {
      const dateObject = new Date(this.rawDate);
      const year = dateObject.getFullYear();
      const day = dateObject.getDate();
      const monthnumber = dateObject.getMonth() + 1;

      return {
        no: day + ". " + this.monthnames.no[monthnumber] + " " + year,
        en: day + " " + this.monthnames.en[monthnumber] + " " + year,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.date {
  display: block;
  font-size: var(--font-size-xxs);
  font-style: italic;
  text-transform: uppercase;
  color: var(--color-blue);
  margin: 0 auto 1rem;
}
</style>
