<template>
  <div class="celebrity-looks">
    <div class="container">
      <h2 class="main-head">latest looks</h2>
      <div class="grid">
        <div v-for="(acount, i) in acountes" :key="i" class="card post-brief">
          <div class="head">
            <img :src="`https://unsplash.it/` + ++i + 200" alt="" />
            <div class="profile-info">
              <a class="name" href="">{{ acount.user }}</a>
              <div class="slogan">frontend developer</div>
            </div>
          </div>
          <div class="comment">
            <p v-html="textLength(acount.text, 100)"></p>
          </div>
          <div class="post-info">
            <div class="date" v-text="calcPostDate(acount.date)"></div>
            <div class="actions">
              <a class="comments" href=""
                ><span
                  class="comment-count"
                  v-text="acount.commentsCounter"
                ></span
                ><svg
                  class="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.7 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z"
                  /></svg></a
              ><a class="share" href=""
                ><span class="share-count" v-text="acount.shareCounter"></span
                ><svg
                  class="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    d="M400 255.4V240 208c0-8.8-7.2-16-16-16H352 336 289.5c-50.9 0-93.9 33.5-108.3 79.6c-3.3-9.4-5.2-19.8-5.2-31.6c0-61.9 50.1-112 112-112h48 16 32c8.8 0 16-7.2 16-16V80 64.6L506 160 400 255.4zM336 240h16v48c0 17.7 14.3 32 32 32h3.7c7.9 0 15.5-2.9 21.4-8.2l139-125.1c7.6-6.8 11.9-16.5 11.9-26.7s-4.3-19.9-11.9-26.7L409.9 8.9C403.5 3.2 395.3 0 386.7 0C367.5 0 352 15.5 352 34.7V80H336 304 288c-88.4 0-160 71.6-160 160c0 60.4 34.6 99.1 63.9 120.9c5.9 4.4 11.5 8.1 16.7 11.2c4.4 2.7 8.5 4.9 11.9 6.6c3.4 1.7 6.2 3 8.2 3.9c2.2 1 4.6 1.4 7.1 1.4h2.5c9.8 0 17.8-8 17.8-17.8c0-7.8-5.3-14.7-11.6-19.5l0 0c-.4-.3-.7-.5-1.1-.8c-1.7-1.1-3.4-2.5-5-4.1c-.8-.8-1.7-1.6-2.5-2.6s-1.6-1.9-2.4-2.9c-1.8-2.5-3.5-5.3-5-8.5c-2.6-6-4.3-13.3-4.3-22.4c0-36.1 29.3-65.5 65.5-65.5H304h32zM72 32C32.2 32 0 64.2 0 104V440c0 39.8 32.2 72 72 72H408c39.8 0 72-32.2 72-72V376c0-13.3-10.7-24-24-24s-24 10.7-24 24v64c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V104c0-13.3 10.7-24 24-24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H72z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import globalMixins from "@/mixins/globalMixins.js";
export default {
  name: "CelebrityLooks",
  data: function () {
    return {
      acountes: [
        {
          user: "ali saleem",
          slogan: "frontend developer",
          text: "Having an imaginary goal is better than not having goals, but after success, do not be sad if your goal is a mirage.",
          date: "1/20/2023",
          commentsCounter: 46,
          shareCounter: 53,
        },
        {
          user: "alnajjar",
          slogan: "frontend developer",
          text: "Having an imaginary goal is better than not having goals, but after success, do not be sad if your goal is a mirage.",
          date: "11/20/2022",
          commentsCounter: 47,
          shareCounter: 4,
        },
        {
          user: "sara",
          slogan: "enginner",
          text: "Having an imaginary goal is better than not having goals, but after success, do not be sad if your goal is a mirage.",
          date: "2/20/2023",
          commentsCounter: 72,
          shareCounter: 8,
        },
      ],
    };
  },
  mixins: [globalMixins],
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
.celebrity-looks {
  padding-bottom: 50px;
  .grid {
    gap: 1rem;
    .card {
      grid-column: span 12;
      border-radius: $border-radius;
      border-color: $l-gray;
      border-style: solid;
      border-width: 5px 0px 1px 5px;
      border-radius: 12px;
      @media ($sm) {
        grid-column: span 6;
      }
      @media ($xl) {
        grid-column: span 4;
      }
      .head {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        img {
          @include square(80px);
          border-radius: 50%;
          padding: 0.25rem;
          border: 2px solid $l-gray;
        }
        .profile-info {
          text-transform: capitalize;
          .name {
            font-weight: 700;
            color: white;
          }
          .slogan {
            font-size: 0.875rem;
          }
        }
      }
      .comment {
        padding: 1.5rem;
        margin: 1rem auto;
        border-radius: $border-radius;
        background-color: $d-gray;
        position: relative;
        &::before {
          @include arow(10px, bottom, 27px, -18px, $d-gray); // Direction
        }
      }
    }
  }
}
</style>
