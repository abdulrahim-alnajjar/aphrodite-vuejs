export default {
  methods: {
    textLength(v, l) {
      return `${v.slice(0, l)}... <a class="read-more" href="#">read more</a>`;
    },
    calcPostDate(d) {
      d = new Date(d);
      let date = new Date();
      let diff = date - d;
      return diff <= 60000
        ? `${(diff / 1000).toFixed()}s`
        : diff < 3600000
        ? `${(diff / 60000).toFixed()}m`
        : diff <= 86400000
        ? `${(diff / 3600000).toFixed()}h`
        : diff <= 2592000000
        ? `${(diff / 86400000).toFixed()}d`
        : diff <= 31104000000
        ? `${(diff / 2592000000).toFixed()}mo`
        : `${(diff / 31104000000).toFixed()}y`;
    },
  },
};
