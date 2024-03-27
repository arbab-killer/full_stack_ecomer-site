/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./src/assets/post3.png')",
        "banner-pattern": "url('./src/assets/banner.jpg')",
        "banner-pattern-r": "url('./src/assets/div-img.png')",
        "banner-box-1":
          "url(https://img.freepik.com/free-vector/flat-spring-offers-banner-template_23-2148822014.jpg?w=826&t=st=1711346371~exp=1711346971~hmac=1391d87c62a6fbafa17bac51d0f1933ba96c73f3fa699a396832023df1d15451)",

        "banner-box-2":
          "url(https://img.freepik.com/free-vector/sale-landing-page-template-with-photo_23-2148273749.jpg?w=826&t=st=1711346496~exp=1711347096~hmac=d7e370da7aae4b9eb4e05cdbdf316353967c0b6391281eaf562847ca46171a53)",

        "banner-box-3":
          "url(https://img.freepik.com/free-vector/flat-spring-social-media-post-template_23-2149291888.jpg?w=826&t=st=1711346571~exp=1711347171~hmac=0f6c5b1a8af21c941aea3bac8264805f035a48eb583a4002a72d063b116365df)",

        "banner":
          "url(https://img.freepik.com/free-vector/flat-design-photography-template_23-2149687727.jpg?t=st=1711346293~exp=1711349893~hmac=48be1b3289bcbd2581f5bd886bcb39e3b4fbb7840b4a12b4a1212d465584cda4&w=1060)",
      },
    },
  },
  plugins: [],
};
