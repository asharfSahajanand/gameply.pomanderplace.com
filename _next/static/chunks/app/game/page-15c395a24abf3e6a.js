(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [421],
  {
    4529: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 8278));
    },
    8278: function (e, t, r) {
      "use strict";
      r.r(t);
      var a = r(7437),
        s = r(2265),
        l = r(7907),
        n = r(7158),
        i = r.n(n),
        d = r(2917),
        o = r(703),
        c = r(6350),
        x = r(6899),
        m = r(102),
        p = r(8098);
      let u = () => {
        var e, t;
        let r = (0, l.useRouter)(),
          n =
            null === (e = (0, l.useSearchParams)()) || void 0 === e
              ? void 0
              : e.get("name"),
          u = d[n];
        return (
          u || (0, l.notFound)(),
          n || r.push("/"),
          (0, s.useEffect)(() => {
            if (u) {
              let e = (function (e) {
                if (!e) return "";
                let t = e
                  .toLowerCase()
                  .split(/\s+/)
                  .map((e) => {
                    let [t, ...r] = e;
                    return t.toUpperCase() + r.join("");
                  });
                return 1 === t.length ? t[0] : t.join(" ");
              })(
                ""
                  .concat(null == u ? void 0 : u.main, " Game | Play ")
                  .concat(
                    null == u ? void 0 : u.tag[0],
                    " Game Online | Pomander",
                  ),
              );
              document.title = e;
            }
          }, [u]),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(c.default, { solidBackground: !0 }),
              (0, a.jsx)("span", {
                className: "sm:flex hidden h-[59px] w-full ",
              }),
              (0, a.jsxs)("div", {
                className:
                  "px-[20.2rem] media_resp lg:px-[14px] sm:!px-0 text-[#abb7c4] pb-10 pt-14 md:pt-[58px] sm:!pt-0 ".concat(
                    i().gameBackground,
                  ),
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "flex justify-between items-center sm:border-transparent  md:flex-col lg:gap-10 xl:gap-4 sm:!gap-0 relative",
                    children: [
                      (0, a.jsx)(o.default, {
                        src: "https://pokiigame.com/images/grid_Frame.svg",
                        alt: "game thumbnail",
                        width: 600,
                        height: 600,
                        sizes: "100vw",
                        style: { width: "100%" },
                        className:
                          "absolute inset-0 w-full h-[400px] md:h-[333px] object-cover rounded-[20px] sm:rounded-none",
                        priority: !0,
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "absolute top-0 left-0 w-full  h-[400px] md:h-[333px] pointer-events-none rounded-[20px] sm:rounded-none",
                        style: {
                          background:
                            "\n      radial-gradient(circle at top left, rgba(255,255,255,0.8), transparent 60%),\n      radial-gradient(circle at top right, rgba(255,255,255,0.8), transparent 60%),\n      radial-gradient(circle at bottom left, rgba(255,255,255,0.8), transparent 60%),\n      radial-gradient(circle at bottom right, rgba(255,255,255,0.8), transparent 60%)\n    ",
                        },
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "w-full py-6 md:py-5 sm:!pt-[0.5rem] sm:!pb-[0.30rem] flex justify-center items-center flex-col z-10",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "text-[48px] px-[4px] italic md:text-[32px] xs:text-[22px]  text-[#000] font-semibold sm:mb-[8px] mb-[15px] text-center",
                            children: null == u ? void 0 : u.main,
                          }),
                          (0, a.jsx)(o.default, {
                            src: null == u ? void 0 : u.thumbnail,
                            alt: "game thumbnail1111",
                            width: 172,
                            height: 172,
                            className:
                              "w-[200px] border border-bordercolor h-[200px] md:h-[160px] md:w-[160px] sm:h-[130px] sm:w-[150px] xs:w-[155px] xs:h-[155px] xxs:h-[140px] xxs:w-[140px]  opacity-100",
                            loading: "eager",
                            priority: !0,
                          }),
                          (0, a.jsx)("a", {
                            href: null == u ? void 0 : u.path,
                            className:
                              "bg-[#1877F2] h-[42px] py-[10px] earn-coin-btn px-4 sm:w-[280px] w-[332px] mt-7 sm:mt-4 tracking-wide flex items-center justify-center relative overflow-hidden z-[1px]  text-center text-[14px]  text-white font-semibold  cursor-pointer  rounded-[393px]",
                            children: "START GAME",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "z-20 relative md:!mx-0 border-x border-y md:border-x-0 border-bordercolor",
                    children: [
                      (0, a.jsx)("span", {
                        className:
                          "text-[10px] text-center flex justify-center tracking-widest text-gray-500",
                        children: "ADVERTISEMENT",
                      }),
                      (0, a.jsx)(p.Z, {}),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "text-black  lg:px-[14px]  text-justify pt-6 leading-relaxed",
                    children: [
                      (0, a.jsx)("p", {
                        className: "h-auto sm:text-[14px] text-[16px]",
                        dangerouslySetInnerHTML: {
                          __html: null == u ? void 0 : u.descripiton,
                        },
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "flex justify-start items-center flex-wrap gap-3 mt-10",
                        children:
                          (null == u
                            ? void 0
                            : null === (t = u.tag) || void 0 === t
                              ? void 0
                              : t.length) > 0 &&
                          u.tag.map((e, t) =>
                            (0, a.jsx)(
                              "button",
                              {
                                className:
                                  "border border-solid text-[14px] border-bordercolor hover:border-[#0B70D8] hover:text-[#0B70D8] px-4 py-1 rounded-[393px]",
                                children: e,
                              },
                              t,
                            ),
                          ),
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "mb-6",
                children: (0, a.jsx)(m.default, {}),
              }),
              (0, a.jsx)(x.default, {}),
            ],
          })
        );
      };
      t.default = () =>
        (0, a.jsx)(s.Suspense, {
          fallback: (0, a.jsx)("div", {}),
          children: (0, a.jsx)(u, {}),
        });
    },
    8098: function (e, t, r) {
      "use strict";
      var a = r(7437),
        s = r(2265);
      t.Z = () => (
        (0, s.useEffect)(() => {
          try {
            window.adsbygoogle && window.adsbygoogle.push({});
          } catch (e) {
            console.error("AdSense error:", e);
          }
        }, []),
        (0, a.jsx)("div", {
          style: { textAlign: "center" },
          children: (0, a.jsx)("ins", {
            className: "adsbygoogle",
            style: { display: "block" },
            "data-ad-client": "ca-pub-2402953735246121",
            "data-ad-slot": "3503714080",
            "data-ad-format": "auto",
            "data-full-width-responsive": "true",
          }),
        })
      );
    },
    102: function (e, t, r) {
      "use strict";
      r.r(t);
      var a = r(7437),
        s = r(2265),
        l = r(1991),
        n = r.n(l),
        i = r(7907),
        d = r(2917);
      r(703);
      var o = r(8792),
        c = r(8098);
      t.default = () => {
        let e = (0, i.usePathname)();
        return (
          (0, s.useEffect)(() => {
            let e;
            let t = () => {
              document.querySelectorAll("picture.lazy-picture").forEach((e) => {
                if ("true" === e.dataset.loaded) return;
                let t = e.getBoundingClientRect();
                if (
                  t.bottom >= 0 &&
                  t.top < window.innerHeight &&
                  t.right >= 0 &&
                  t.left < window.innerWidth
                ) {
                  let t = e.querySelector("img"),
                    r = e.querySelector(".loader");
                  ((null == t ? void 0 : t.dataset.src) &&
                    (r && (r.style.display = "flex"),
                    (t.onload = () => {
                      (t.classList.add("loaded"),
                        r && (r.style.display = "none"));
                    }),
                    (t.src = t.dataset.src)),
                    (e.dataset.loaded = "true"));
                }
              });
            };
            t();
            let r = function () {
              (clearTimeout(e), (e = setTimeout(t, 40)));
            };
            return (
              window.addEventListener("scroll", r),
              window.addEventListener("resize", r),
              () => {
                (window.removeEventListener("scroll", r),
                  window.removeEventListener("resize", r));
              }
            );
          }, []),
          (0, a.jsxs)("div", {
            className: ""
              .concat(
                null === n() || void 0 === n() ? void 0 : n().Gsection,
                " text-white ",
              )
              .concat("/" === e ? "pt-20 " : "bg-white"),
            children: [
              (0, a.jsxs)("div", {
                className:
                  "text-black text-[36px] px-[14px] tracking-[-1px] sm:text-[26px] sx:text-[20px] xxxss:text-[18px] font-light italic justify-between items-center text-center ".concat(
                    "/" === e ? "pb-5 " : " mt-10",
                  ),
                children: [
                  "YOUR ",
                  (0, a.jsx)("strong", {
                    className: "font-semibold",
                    children: "GAME ZONE",
                  }),
                  ". ALWAYS ON.",
                ],
              }),
              "/" === e &&
                (0, a.jsxs)("div", {
                  className:
                    "mx-[20.2rem] media_resp_ad lg:mx-5 md:!mx-0 border-x border-y md:border-x-0 border-bordercolor",
                  children: [
                    (0, a.jsx)("span", {
                      className:
                        "text-[10px] text-center flex justify-center tracking-widest text-gray-500 ",
                      children: "ADVERTISEMENT",
                    }),
                    (0, a.jsx)(c.Z, {}),
                  ],
                }),
              (0, a.jsx)("div", {
                className:
                  "game_container px-[20.2rem] media_resp lg:px-[14px] ".concat(
                    "",
                  ),
                children:
                  Object.keys(d).length > 0
                    ? Object.entries(d).map((e) => {
                        let [t, r] = e;
                        return (0, a.jsx)(
                          o.default,
                          {
                            href: {
                              pathname: "/game.html",
                              query: { name: null == r ? void 0 : r.route },
                            },
                            className:
                              "justify-between gap-5 cursor-pointer w-full h-full",
                            children: (0, a.jsx)("div", {
                              className:
                                "relative group w-full h-full overflow-hidden",
                              children: (0, a.jsxs)("div", {
                                className:
                                  "relative overflow-hidden border border-bordercolor transform transition-transform gradient-overlay group duration-500 w-full h-full",
                                children: [
                                  (0, a.jsxs)("picture", {
                                    className: "lazy-picture w-full",
                                    "data-loaded": "false",
                                    children: [
                                      (0, a.jsx)("img", {
                                        "data-src":
                                          null == r ? void 0 : r.thumbnail,
                                        alt: null == r ? void 0 : r.route,
                                        width: 200,
                                        height: 200,
                                        decoding: "async",
                                        className:
                                          "w-full lazy-load transition-opacity duration-300 z-0",
                                      }),
                                      (0, a.jsx)("div", {
                                        className: "loader",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)("span", {
                                    className:
                                      "absolute bottom-1 left-1/2 capitalize -translate-x-1/2 text-white font-semibold text-sm w-full px-2 py-1 bg-opacity-60 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10",
                                    children: null == r ? void 0 : r.main,
                                  }),
                                ],
                              }),
                            }),
                          },
                          t,
                        );
                      })
                    : (0, a.jsx)("div", {
                        className:
                          "flex justify-center items-center w-full h-[300px]",
                        children: (0, a.jsx)("p", {
                          className: "text-3xl",
                          children: "No Data Available",
                        }),
                      }),
              }),
            ],
          })
        );
      };
    },
    7158: function (e) {
      e.exports = {
        Gsection: "game_Gsection__i0EL8",
        blurbackground: "game_blurbackground__NgkMH",
        gameBackground: "game_gameBackground__NNM9D",
      };
    },
  },
  function (e) {
    (e.O(0, [134, 990, 971, 69, 744], function () {
      return e((e.s = 4529));
    }),
      (_N_E = e.O()));
  },
]);
