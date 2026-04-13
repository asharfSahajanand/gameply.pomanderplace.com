(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [990],
  {
    6899: function (e, a, t) {
      "use strict";
      (t.r(a),
        t.d(a, {
          default: function () {
            return d;
          },
        }));
      var r = t(7437);
      t(2265);
      var i = t(1991),
        o = t.n(i),
        n = t(703);
      t(8939);
      var s = {
          src: "https://pokiigame.com/_next/static/media/facebook.4332defa.svg",
          height: 14,
          width: 14,
          blurWidth: 0,
          blurHeight: 0,
        },
        l = {
          src: "https://pokiigame.com/_next/static/media/instagram.59a91f5f.svg",
          height: 14,
          width: 14,
          blurWidth: 0,
          blurHeight: 0,
        },
        c = t(8792),
        h = t(7907),
        d = () => {
          let e = (0, h.usePathname)(),
            a = async () => {
              try {
                let e = encodeURIComponent("Contact Request"),
                  a = encodeURIComponent(
                    "Hello, I would like to get in touch.",
                  ),
                  t = "help.pomanderplace@gmail.com",
                  r = "https://mail.google.com/mail/?view=cm&fs=1&to="
                    .concat(t, "&su=")
                    .concat(e, "&body=")
                    .concat(a),
                  i = "mailto:"
                    .concat(t, "?subject=")
                    .concat(e, "&body=")
                    .concat(a),
                  o = window.open(r, "_blank");
                setTimeout(() => {
                  (!o || o.closed || void 0 === o.closed) &&
                    (window.location.href = i);
                }, 500);
              } catch (e) {
                (console.error(e),
                  toast.error("Something went wrong. Please try again."));
              }
            },
            t = [
              { name: "STRIKE BOWLING", path: "strike-bowling" },
              { name: "KNIFE HIT EMOJI", path: "knife-hit-emoji" },
              { name: "BLOCK BREAKER", path: "block-breaker" },
              { name: "SPEED BOAT", path: "speed-boat" },
              { name: "GOAL MASTER", path: "goal-master" },
              { name: "LUDO ROYAL", path: "ludo-royal" },
              { name: "LOVE'S QUEST", path: "love's-quest" },
              { name: "PET MERGE", path: "pet-merge" },
              { name: "BASKETBALL DUNK", path: "basketball-dunk" },
              { name: "EMOJI BINGO", path: "emoji-bingo" },
            ];
          return (0, r.jsx)("div", {
            className: null === o() || void 0 === o() ? void 0 : o().footer,
            style: { borderTop: "1px solid rgba(0, 0, 0, 0.1)" },
            children: (0, r.jsxs)("div", {
              className: "mx-auto w-full max-w-screen-xl ",
              children: [
                (0, r.jsxs)("div", {
                  className:
                    "footer-grid md:gap-4 md:flex-col px-[20.2rem] media_resp  lg:px-[14px] border-b border-opacity-[0.1] border-[#000]",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "".concat(
                        null === o() || void 0 === o()
                          ? void 0
                          : o().footerheading,
                      ),
                      children: [
                        (0, r.jsx)("h4", {
                          className:
                            "mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white",
                          children: "Resources",
                        }),
                        (0, r.jsx)("ul", {
                          className:
                            null === o() || void 0 === o()
                              ? void 0
                              : o().footertext,
                          children: [
                            { name: "Home", path: "/" },
                            { name: "About Us", path: "/aboutus.html" },
                            { name: "Developers", path: "/developer.html" },
                            { name: "Affiliates", path: "/affiliates.html" },
                            { name: "Privacy Policy", path: "/privacy-policy.html" },
                          ].map((a) =>
                            (0, r.jsx)(
                              "li",
                              {
                                className: "mb-4",
                                children: (0, r.jsx)("a", {
                                  href: a.path,
                                  className: "".concat(
                                    e === a.path
                                      ? "text-[#0b70d8]"
                                      : "#000000 hover:underline",
                                    "  uppercase",
                                  ),
                                  children: a.name,
                                }),
                              },
                              a.name,
                            ),
                          ),
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        null === o() || void 0 === o()
                          ? void 0
                          : o().footerheading,
                      children: [
                        (0, r.jsx)("h4", {
                          className:
                            "mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white",
                          children: "Reacent Games",
                        }),
                        (0, r.jsx)("div", {
                          className:
                            "flex justify-between w-full gap-8 md:flex-col md:gap-0",
                          children: (0, r.jsx)("ul", {
                            className:
                              null === o() || void 0 === o()
                                ? void 0
                                : o().footertext,
                            children: t.slice(0, 5).map((e, a) =>
                              (0, r.jsx)(
                                "li",
                                {
                                  className: "mb-4",
                                  children: (0, r.jsx)("a", {
                                    // href: {
                                    //   pathname: "/game.html",
                                    //   query: { name: e.path },
                                    // },
                                    href: "/game.html?name=" + e.path,
                                    className: "hover:underline",
                                    children: e.name,
                                  }),
                                },
                                a + 100,
                              ),
                            ),
                          }),
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        null === o() || void 0 === o()
                          ? void 0
                          : o().footerheading,
                      children: [
                        (0, r.jsx)("h4", {
                          className:
                            "mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white",
                          children: "Top Games",
                        }),
                        (0, r.jsx)("div", {
                          className:
                            "flex justify-between w-full gap-8 md:flex-col md:gap-0",
                          children: (0, r.jsx)("ul", {
                            className:
                              null === o() || void 0 === o()
                                ? void 0
                                : o().footertext,
                            children: t.slice(5, 10).map((e, a) =>
                              (0, r.jsx)(
                                "li",
                                {
                                  className: "mb-4",
                                  children: (0, r.jsx)("a", {
                                    // href: {
                                    //   pathname: "/game.html",
                                    //   query: { name: e.path },
                                    // },
                                    href: "/game.html?name=" + e.path,
                                    className: "hover:underline",
                                    children: e.name,
                                  }),
                                },
                                a + 100,
                              ),
                            ),
                          }),
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        null === o() || void 0 === o()
                          ? void 0
                          : o().footerheading,
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "hidden xxss:justify-start justify-end contact-us-btn",
                          children: (0, r.jsx)("button", {
                            onClick: a,
                            className:
                              "text-white bg-[#1877F2] hover:bg-[#0072d1] duration-200 rounded-[20px] px-[25px] py-[11px] font-[600] text-[12px] xxss:py-[8px] xxss:px-[20px] md:px-[25px] md:py-[11px] lg:py-[11px] lg:px-[22px] xxl:py-[8px] xxl:px-[20px] ",
                            children: "CONTACT US",
                          }),
                        }),
                        (0, r.jsx)("div", {
                          className:
                            "flex xxss:justify-start justify-end final-btn",
                          children: (0, r.jsx)("button", {
                            onClick: a,
                            className:
                              "text-white bg-[#1877F2] hover:bg-[#0072d1] duration-200 rounded-[20px] px-[25px] py-[11px] font-[600] text-[12px] xxss:py-[8px] xxss:px-[20px] md:px-[25px] md:py-[11px] lg:py-[11px] lg:px-[22px] xxl:py-[8px] xxl:px-[20px]",
                            children: "CONTACT US",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className:
                    "py-5 flex md:flex-col gap-2 justify-between items-center px-[20.2rem] media_resp  lg:px-[14px]",
                  children: [
                    (0, r.jsxs)("ul", {
                      className: "".concat(
                        null === o() || void 0 === o()
                          ? void 0
                          : o().footertext,
                        " flex gap-4",
                      ),
                      children: [
                        (0, r.jsx)("li", {
                          className: " flex items-center gap-2",
                          children: (0, r.jsx)("a", {
                            href: "https://www.facebook.com",
                            "aria-label": "Facebook : Pomander",
                            className: "hover:underline",
                            children: (0, r.jsx)(n.default, {
                              src: s,
                              alt: "facebook",
                              width: 0,
                              height: 0,
                            }),
                          }),
                        }),
                        (0, r.jsx)("li", {
                          className: " flex items-center gap-2",
                          children: (0, r.jsx)("a", {
                            href: "https://www.instagram.com",
                            "aria-label": "Instagram : Pomander",
                            className: "hover:underline",
                            children: (0, r.jsx)(n.default, {
                              src: l,
                              alt: "facebook",
                              width: 0,
                              height: 0,
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      children: (0, r.jsx)("span", {
                        children: "Copyright \xa9 2026 Pomander",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        };
    },
    6350: function (e, a, t) {
      "use strict";
      t.r(a);
      var r = t(7437),
        i = t(2265),
        o = t(703),
        n = t(2917),
        s = t(8939),
        l = t(7907),
        c = t(8792);
      a.default = function (e) {
        let { solidBackground: a = !1 } = e,
          [t, h] = (0, i.useState)(!1),
          [d, u] = (0, i.useState)(""),
          [g, m] = (0, i.useState)([]),
          b = (e) => {
            let a = e.target.value.toLowerCase();
            if ((u(a), "" === a.trim())) {
              m([]);
              return;
            }
            m(
              Object.entries(n).filter((e) => {
                let [t, r] = e;
                return r.main.toLowerCase().includes(a);
              }),
            );
          };
        (0, i.useEffect)(() => {
          let e = () => h(window.innerWidth < 640);
          return (
            e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
          );
        }, []);
        let p = [
            { name: "HOME", path: "/" },
            { name: "ABOUT US", path: "/aboutus.html" },
            { name: "DEVELOPER", path: "/developer.html" },
            { name: "AFFILIATES", path: "/affiliates.html" },
            { name: "CONTACT US", path: "/contactus.html" },
          ],
          y = (0, l.usePathname)(),
          
          [f, v] = (0, i.useState)(!1),
          [w, k] = (0, i.useState)(!1),
          [x, j] = (0, i.useState)(!1),
          T = (e) => {
            ("Enter" === e.key || "Escape" === e.key) && j(!1);
          },
          z = () => {
            j(!0);
          },
          C = () => {
            j(!1);
          },
          N = () => {
            k(!w);
          };
        ((0, i.useEffect)(() => {
          let e = () => v(window.scrollY > 0);
          return (
            window.addEventListener("scroll", e),
            () => window.removeEventListener("scroll", e)
          );
        }, []),
          (0, i.useEffect)(() => {
            A();
          }, []));
        let A = () => {
          window.scrollY > 0 ? v(!0) : v(!1);
        };
        return (0, r.jsxs)("div", {
          className: "fixed w-full z-50 top-0 h-[56px]",
          style: {
            backgroundColor: "#ffffff",
            margin: "0 auto",
            borderBottom: "1px solid #E6E7E8",
            borderColor: "#E6E7E8",
          },
          children: [
            (0, r.jsxs)("div", {
              className:
                "lg:flex items-center justify-between  lg:px-[14px]  h-[56px]",
              children: [
                (0, r.jsxs)("div", {
                  className:
                    "flex items-center justify-between px-80 media_resp w-full  lg:px-0",
                  children: [
                    (0, r.jsx)("a", {
                      href: "/",
                      className: "lg:py-[12px] py-[16px]",
                      children: (0, r.jsx)(o.default, {
                        src: s.Z,
                        className: "cursor-pointer",
                        alt: "main logo",
                        width: 108,
                        height: 18,
                        priority: !0,
                      }),
                    }),
                    (0, r.jsx)("div", {
                      children: (0, r.jsxs)("div", {
                        className:
                          "flex items-center gap-5 md:hidden text-[16px]",
                        children: [
                          p.map((e) =>
                            (0, r.jsxs)(
                              "div",
                              {
                                className: "flex items-center",
                                children: [
                                  (0, r.jsx)("hr", {
                                    className:
                                      "h-[56px] w-[1px] mr-5 bg-bordercolor",
                                  }),
                                  (0, r.jsx)("a", {
                                    href: e.path,
                                    children: (0, r.jsx)("h1", {
                                      className:
                                        "font-[400] text-[14px] header-text ".concat(
                                          y === e.path
                                            ? "text-[#0b70d8]"
                                            : "text-[#000] hover:underline",
                                        ),
                                      children: e.name,
                                    }),
                                  }),
                                ],
                              },
                              e.name,
                            ),
                          ),
                          (0, r.jsx)("div", {
                            className:
                              "w-[32px] h-[32px] p-2 rounded-full border-bordercolor border flex justify-center items-center cursor-pointer",
                            onClick: z,
                            children: (0, r.jsxs)("svg", {
                              width: "13",
                              height: "13",
                              viewBox: "0 0 13 13",
                              children: [
                                (0, r.jsx)("title", { children: "search" }),
                                (0, r.jsx)("path", {
                                  d: "m4.8495 7.8226c0.82666 0 1.5262-0.29146 2.0985-0.87438 0.57232-0.58292 0.86378-1.2877 0.87438-2.1144 0.010599-0.82666-0.28086-1.5262-0.87438-2.0985-0.59352-0.57232-1.293-0.86378-2.0985-0.87438-0.8055-0.010599-1.5103 0.28086-2.1144 0.87438-0.60414 0.59352-0.8956 1.293-0.87438 2.0985 0.021197 0.8055 0.31266 1.5103 0.87438 2.1144 0.56172 0.60414 1.2665 0.8956 2.1144 0.87438zm4.4695 0.2115 3.681 3.6819-1.259 1.284-3.6817-3.7 0.0019784-0.69479-0.090043-0.098846c-0.87973 0.76087-1.92 1.1413-3.1207 1.1413-1.3553 0-2.5025-0.46363-3.4417-1.3909s-1.4088-2.0686-1.4088-3.4239c0-1.3553 0.4696-2.4966 1.4088-3.4239 0.9392-0.92727 2.0864-1.3969 3.4417-1.4088 1.3553-0.011889 2.4906 0.45771 3.406 1.4088 0.9154 0.95107 1.379 2.0924 1.3909 3.4239 0 1.2126-0.38043 2.2588-1.1413 3.1385l0.098834 0.090049z",
                                }),
                              ],
                            }),
                          }),
                          x &&
                            (0, r.jsx)("div", {
                              className:
                                "fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm flex items-start justify-center pt-10 sm:py-20 px-5 overflow-auto",
                              onClick: C,
                              children: (0, r.jsxs)("div", {
                                className:
                                  "relative w-full max-w-2xl mx-4 sm:mx-0 bg-white rounded-xl shadow-lg",
                                onClick: (e) => e.stopPropagation(),
                                children: [
                                  (0, r.jsx)("div", {
                                    className:
                                      "flex items-center justify-between px-4 py-3 border-b border-gray-200",
                                    children: (0, r.jsxs)("div", {
                                      className:
                                        "flex items-center gap-2 w-full",
                                      children: [
                                        (0, r.jsxs)("svg", {
                                          width: "16",
                                          height: "16",
                                          viewBox: "0 0 24 24",
                                          fill: "none",
                                          stroke: "gray",
                                          strokeWidth: "2",
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          children: [
                                            (0, r.jsx)("circle", {
                                              cx: "11",
                                              cy: "11",
                                              r: "8",
                                            }),
                                            (0, r.jsx)("line", {
                                              x1: "21",
                                              y1: "21",
                                              x2: "16.65",
                                              y2: "16.65",
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)("input", {
                                          type: "text",
                                          placeholder: "Search games...",
                                          className:
                                            "w-full outline-none border-none text-gray-800 placeholder:text-gray-400",
                                          value: d,
                                          onChange: b,
                                          onKeyDown: T,
                                          autoFocus: !0,
                                        }),
                                        (0, r.jsx)("button", {
                                          onClick: C,
                                          className:
                                            "border border-gray-200 w-8 h-6 rounded-[6px] text-gray-500 text-[12px]",
                                          children: "esc",
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "max-h-[80vh] overflow-y-auto p-4",
                                    children:
                                      g.length > 0
                                        ? (0, r.jsx)("div", {
                                            className:
                                              "grid grid-cols-4  gap-3",
                                            children: g.map((e) => {
                                              let [a, t] = e;
                                              return (0, r.jsx)(
                                                "a",
                                                {
                                                  // href: {
                                                  //   pathname: "/game.html",
                                                  //   query: {
                                                  //     name:
                                                  //       null == t
                                                  //         ? void 0
                                                  //         : t.route,
                                                  //   },
                                                  // },
                                                  href: "/game.html?name=" + (t?.route ?? ""),
                                                  className:
                                                    "justify-between gap-5 cursor-pointer w-full h-full",
                                                  children: (0, r.jsx)("div", {
                                                    className:
                                                      "relative group w-full h-full overflow-hidden",
                                                    children: (0, r.jsxs)(
                                                      "div",
                                                      {
                                                        className:
                                                          "relative overflow-hidden border border-bordercolor transform transition-transform gradient-overlay group duration-500 w-full h-full",
                                                        children: [
                                                          (0, r.jsx)(
                                                            o.default,
                                                            {
                                                              src:
                                                                null == t
                                                                  ? void 0
                                                                  : t.thumbnail,
                                                              alt:
                                                                null == t
                                                                  ? void 0
                                                                  : t.route,
                                                              width: 150,
                                                              height: 150,
                                                              className:
                                                                "w-full transition-opacity duration-300 z-0",
                                                              priority: !0,
                                                            },
                                                          ),
                                                          (0, r.jsx)("span", {
                                                            className:
                                                              "absolute bottom-2 left-1/2 capitalize -translate-x-1/2 text-white font-semibold text-sm w-full px-2 py-1 bg-opacity-60 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10",
                                                            children:
                                                              null == t
                                                                ? void 0
                                                                : t.main,
                                                          }),
                                                        ],
                                                      },
                                                    ),
                                                  }),
                                                },
                                                a,
                                              );
                                            }),
                                          })
                                        : (0, r.jsx)("div", {
                                            className:
                                              "text-center text-sm text-gray-400 py-12",
                                            children: "No results found",
                                          }),
                                  }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "flex justify-end px-4 py-3 border-t border-gray-200 text-xs text-gray-400",
                                    children: "Search by\xa0PomanderPlace",
                                  }),
                                ],
                              }),
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "hidden md:block",
                  children: [
                    w
                      ? (0, r.jsxs)("div", {
                          className:
                            "flex items-center justify-center sm:gap-3 gap-6",
                          children: [
                            (0, r.jsx)(r.Fragment, {
                              children: (0, r.jsx)("div", {
                                className:
                                  " flex justify-center items-center cursor-pointer",
                                onClick: z,
                                children: (0, r.jsx)("svg", {
                                  viewBox: "0 0 16 16",
                                  fill: "currentColor",
                                  className: "size-4",
                                  children: (0, r.jsx)("path", {
                                    "fill-rule": "evenodd",
                                    d: "M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z",
                                    "clip-rule": "evenodd",
                                  }),
                                }),
                              }),
                            }),
                            (0, r.jsx)("div", {
                              onClick: N,
                              children: (0, r.jsx)("svg", {
                                viewBox: "0 0 16 16",
                                fill: "currentColor",
                                className: "size-4",
                                children: (0, r.jsx)("path", {
                                  d: "M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z",
                                }),
                              }),
                            }),
                          ],
                        })
                      : (0, r.jsx)(r.Fragment, {
                          children: (0, r.jsxs)("div", {
                            className:
                              "flex items-center justify-center sm:gap-3 gap-6",
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  " flex justify-center items-center cursor-pointer",
                                onClick: z,
                                children: (0, r.jsx)("svg", {
                                  viewBox: "0 0 16 16",
                                  fill: "currentColor",
                                  className: "size-4",
                                  children: (0, r.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z",
                                    clipRule: "evenodd",
                                  }),
                                }),
                              }),
                              (0, r.jsx)("div", {
                                onClick: N,
                                children: (0, r.jsx)("svg", {
                                  viewBox: "0 0 16 16",
                                  fill: "currentColor",
                                  className: "size-4",
                                  children: (0, r.jsx)("path", {
                                    d: "M8 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM8 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM9.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                    x &&
                      (0, r.jsx)("div", {
                        className:
                          "fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm flex items-start justify-center pt-10 sm:py-20 px-5 overflow-auto",
                        onClick: C,
                        children: (0, r.jsxs)("div", {
                          className:
                            "relative w-full max-w-2xl mx-4 sm:mx-0 bg-white rounded-xl shadow-lg",
                          onClick: (e) => e.stopPropagation(),
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "flex items-center justify-between px-4 py-3 border-b border-gray-200",
                              children: (0, r.jsxs)("div", {
                                className: "flex items-center gap-2 w-full",
                                children: [
                                  (0, r.jsxs)("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "gray",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                      (0, r.jsx)("circle", {
                                        cx: "11",
                                        cy: "11",
                                        r: "8",
                                      }),
                                      (0, r.jsx)("line", {
                                        x1: "21",
                                        y1: "21",
                                        x2: "16.65",
                                        y2: "16.65",
                                      }),
                                    ],
                                  }),
                                  (0, r.jsx)("input", {
                                    type: "text",
                                    placeholder: "Search games...",
                                    className:
                                      "w-full outline-none border-none text-gray-800 placeholder:text-gray-400",
                                    value: d,
                                    onChange: b,
                                    onKeyDown: T,
                                    autoFocus: !0,
                                  }),
                                  (0, r.jsx)("button", {
                                    onClick: C,
                                    className:
                                      "border border-gray-200 w-8 h-6 rounded-[6px] text-gray-500 text-[12px]",
                                    children: "esc",
                                  }),
                                ],
                              }),
                            }),
                            (0, r.jsx)("div", {
                              className: "max-h-[80vh] overflow-y-auto p-4",
                              children:
                                g.length > 0
                                  ? (0, r.jsx)("div", {
                                      className:
                                        "grid  grid-cols-3 xs:grid-cols-2   gap-3",
                                      children: g.map((e) => {
                                        let [a, t] = e;
                                        return (0, r.jsx)(
                                          "a",
                                          {
                                            // href: {
                                            //   pathname: "/game.html",
                                            //   query: {
                                            //     name:
                                            //       null == t ? void 0 : t.route,
                                            //   },
                                            // },
                                            href: "/game.html?name=" + (t?.route ?? ""),
                                            className:
                                              "justify-between gap-5 cursor-pointer w-full h-full",
                                            children: (0, r.jsx)("div", {
                                              className:
                                                "relative group w-full h-full overflow-hidden",
                                              children: (0, r.jsxs)("div", {
                                                className:
                                                  "relative overflow-hidden border border-bordercolor transform transition-transform gradient-overlay group duration-500 w-full h-full",
                                                children: [
                                                  (0, r.jsx)(o.default, {
                                                    src:
                                                      null == t
                                                        ? void 0
                                                        : t.thumbnail,
                                                    alt:
                                                      null == t
                                                        ? void 0
                                                        : t.route,
                                                    width: 150,
                                                    height: 150,
                                                    className:
                                                      "w-full transition-opacity duration-300 z-0",
                                                    priority: !0,
                                                  }),
                                                  (0, r.jsx)("span", {
                                                    className:
                                                      "absolute bottom-2 left-1/2 capitalize -translate-x-1/2 text-white font-semibold text-sm w-full px-2 py-1 bg-opacity-60 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10",
                                                    children:
                                                      null == t
                                                        ? void 0
                                                        : t.main,
                                                  }),
                                                ],
                                              }),
                                            }),
                                          },
                                          a,
                                        );
                                      }),
                                    })
                                  : (0, r.jsx)("div", {
                                      className:
                                        "text-center text-sm text-gray-400 py-12",
                                      children: "No results found",
                                    }),
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "flex justify-end px-4 py-3 border-t border-gray-200 text-xs text-gray-400",
                              children: "Search by\xa0PomanderPlace",
                            }),
                          ],
                        }),
                      }),
                  ],
                }),
              ],
            }),
            w &&
              (0, r.jsx)("div", {
                className: " h-screen bg-white",
                children: (0, r.jsx)("div", {
                  className:
                    "grid gap-1 px-[14px] py-5 border-b-[1px] border-solid",
                  style: {
                    backgroundColor: "#fff",
                    textAlign: "left",
                    borderBottomColor: f ? "#ffffff1c" : "transparent",
                  },
                  children: p.map((e) =>
                    (0, r.jsx)(
                      "a",
                      {
                        href: e.path,
                        children: (0, r.jsx)("h1", {
                          className: "font-[500] text-[16px] py-2 ".concat(
                            y === e.path ? "text-[#0b70d8]" : "text-[#000]",
                          ),
                          children: e.name,
                        }),
                      },
                      e.path,
                    ),
                  ),
                }),
              }),
          ],
        });
      };
    },
    1991: function (e) {
      e.exports = {
        footer: "Footer_footer__JrJN9",
        footer1: "Footer_footer1__xeaK6",
        Gsection: "Footer_Gsection__OyuQG",
        footerheading: "Footer_footerheading__0emrr",
        footertext: "Footer_footertext__IQnDc",
        spinner: "Footer_spinner__Oj4Od",
        "spinner-e04l1k": "Footer_spinner-e04l1k__fA_gp",
        blurbackground: "Footer_blurbackground__qPzKm",
        blurbackground1: "Footer_blurbackground1__2E2tF",
      };
    },
    8939: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/logo.png",
        height: 27,
        width: 145,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    2917: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"feed-the-frog":{"main":"FEED THE FROG","route":"feed-the-frog","descripiton":"Feed The Frog is a fun and addictive puzzle game that will challenge your reflexes and timing skills.<br><br>Your goal is simple—help the hungry frog catch as many delicious bugs as possible! But be careful, not all insects are safe to eat!<br><br>In Feed The Frog, you’ll tap at just the right moment to make the frog extend its tongue and grab tasty treats while avoiding dangerous obstacles.<br><br>As you progress, the game gets more challenging, with faster-moving bugs, tricky patterns, and unexpected surprises that keep you on your toes.<br><br>The game features <b>simple yet exciting gameplay</b>, <b>colorful graphics</b>, and <b>fun sound effects</b> that make every level engaging and enjoyable.<br><br>Unlock new frogs, beat high scores, and test your skills in this exciting feeding frenzy!<br><br>Can you help the frog get its meal without missing a bite?<br><br><b>Play Feed The Frog now and see how many bugs you can catch!</b> \uD83D\uDC38\uD83C\uDF7D️","thumbnail":"https://pokiigame.com/images/jpg/feed-the-frog.jpg","tag":["Frog Game","Eating Game","Skill Game","Fun Challenge"],"rate":"9","totalreview":"98","path":"/games/feed-the-frog/index.html"},"cannon-attack":{"main":"CANNON ATTACK","route":"cannon-attack","descripiton":"Cannon Attack is an action-packed shooting game that puts your aim and timing to the test.<br><br>Take control of a powerful cannon and fire explosive shots to destroy targets, obstacles, and enemy structures.<br><br>Each level presents new challenges with moving targets, tricky angles, and limited ammunition that require smart planning.<br><br>The game becomes more intense as you progress, demanding precise shots and quick decision-making.<br><br>With <b>simple controls</b>, <b>smooth animations</b>, and <b>satisfying explosions</b>, Cannon Attack delivers nonstop fun.<br><br>Upgrade your cannon, unlock new levels, and prove your shooting skills in this thrilling arcade experience.<br><br><b>Load the cannon and start the attack now!</b> \uD83D\uDCA3\uD83C\uDFAF","thumbnail":"https://pokiigame.com/images/jpg/cannon-attack.jpg","tag":["Shooting Game","Action Game","Arcade Game","Skill Based"],"rate":"8.8","totalreview":"134","path":"/games/cannon-attack/index.html"},"car-jam-solver":{"main":"CAR JAM SOLVER","route":"car-jam-solver","descripiton":"Car Jam Solver is a brain-teasing puzzle game that challenges your logic and problem-solving skills.<br><br>Your mission is to clear traffic jams by moving cars in the correct order without causing chaos.<br><br>Each level introduces tighter spaces, more vehicles, and clever obstacles that require strategic thinking.<br><br>The puzzles grow more complex as you advance, pushing your mind to find the smartest solution.<br><br>Featuring <b>clean visuals</b>, <b>smooth controls</b>, and <b>satisfying puzzle mechanics</b>, this game is perfect for puzzle lovers.<br><br>Think ahead, avoid deadlocks, and free the road in this addictive traffic puzzle adventure.<br><br><b>Can you solve every car jam?</b> \uD83D\uDEA6\uD83E\uDDE0","thumbnail":"https://pokiigame.com/images/jpg/car-jam-solver.jpg","tag":["Puzzle Game","Logic Game","Brain Teaser","Strategy Game"],"rate":"9.1","totalreview":"212","path":"/games/car-jam-solver/index.html"},"princess-dress-up":{"main":"PRINCESS DRESS UP","route":"princess-dress-up","descripiton":"Princess Dress Up is a creative fashion game where you style beautiful princesses with stunning outfits.<br><br>Choose from a wide range of dresses, hairstyles, accessories, and makeup to create the perfect royal look.<br><br>Mix and match styles to design elegant, cute, or glamorous appearances for every occasion.<br><br>The game encourages creativity and imagination with colorful visuals and easy-to-use controls.<br><br>Perfect for players who love fashion, design, and makeovers.<br><br>Create unique styles, save your favorite looks, and let your fashion sense shine.<br><br><b>Dress your princess and rule the fashion kingdom!</b> \uD83D\uDC51✨","thumbnail":"https://pokiigame.com/images/jpg/princess-dress-up.jpg","tag":["Dress Up Game","Fashion Game","Girls Game","Creative Game"],"rate":"8.9","totalreview":"176","path":"/games/princess-dress-up/index.html"},"ninja-fruit-slice":{"main":"NINJA FRUIT SLICE","route":"ninja-fruit-slice","descripiton":"Ninja Fruit Slice is a fast-paced arcade game that tests your reflexes and slicing skills.<br><br>Swipe like a ninja to slice flying fruits while avoiding dangerous bombs that can end your run instantly.<br><br>The game speeds up as you progress, challenging your reaction time and accuracy.<br><br>Combo slices, smooth controls, and exciting sound effects make every session thrilling.<br><br>Easy to play but hard to master, this game keeps you coming back for higher scores.<br><br>Sharpen your blade, stay focused, and slice your way to victory.<br><br><b>Become the ultimate fruit-slicing ninja!</b> \uD83E\uDD77\uD83C\uDF4E","thumbnail":"https://pokiigame.com/images/jpg/ninja-fruit-slice.jpg","tag":["Arcade Game","Reflex Game","Fruit Game","Action Game"],"rate":"9.3","totalreview":"289","path":"/games/ninja-fruit-slice/index.html"},"fill-water-tank":{"main":"FILL WATER TANK","route":"fill-water-tank","descripiton":"Fill Water Tank is a fun and challenging puzzle game that will put your precision and problem-solving skills to the test.<br><br> Your mission is simple—fill the water tank to the perfect level without wasting a single drop! But with tricky obstacles, moving platforms, and unexpected twists, it’s not as easy as it sounds.<br><br> In Fill Water Tank, you’ll carefully control the flow of water, guiding it through pipes, barriers, and gaps while avoiding leaks and overflows.<br><br> As you progress, each level becomes more difficult, requiring sharp timing and strategic thinking to get the perfect fill.<br><br> The game features <b>realistic water physics</b>, <b>intuitive controls</b>, and <b>visually stunning environments</b> that make the gameplay immersive and engaging.<br><br> Earn points with precise fills, unlock new tank designs, and take on increasingly complex challenges that will keep you hooked!<br><br> Can you master the art of perfect water flow and fill every tank with precision?<br><br> <b>Play Fill Water Tank now and put your skills to the test!</b> \uD83D\uDEB0\uD83D\uDCA6","thumbnail":"https://pokiigame.com/images/jpg/fill-water-tank.jpg","tag":["Water Puzzle","Skill Game","Fill the Tank","Precision Game","Fun Challenge"],"rate":"9","totalreview":"77","path":"/games/fill-water-tank/index.html"},"cricket-premier-league":{"main":"CRICKET PREMIER LEAGUE","route":"cricket-premier-league","descripiton":"Cricket Premier League is an action-packed cricket game that brings the thrill of professional T20 leagues right to your fingertips!<br><br>Step onto the pitch, choose your favorite team, and compete in intense matches to become the ultimate champion.<br><br>In Cricket Premier League, you\'ll experience <b>realistic batting and bowling mechanics</b>, <b>fast-paced gameplay</b>, and <b>exciting tournament modes</b> where every run counts!<br><br>Time your shots perfectly, hit massive sixes, and take crucial wickets to dominate the competition.<br><br>The game features <b>stunning graphics</b>, <b>smooth controls</b>, and <b>various teams</b> to choose from, making it the perfect cricket experience for fans of the sport.<br><br>Can you lead your team to victory and lift the championship trophy?<br><br><b>Play Cricket Premier League now and prove your cricketing skills!</b> \uD83C\uDFCF\uD83D\uDD25 ","thumbnail":"https://pokiigame.com/images/jpg/cricket-premier-league.jpg","tag":["Cricket","Bat","Ball","T20","Sixes","Wickets","Bowlers","Batsman","Strike","Tournament"],"rate":"8","totalreview":"81","path":"/games/cricket-premier-league/index.html"},"cross-runner":{"main":"CROSS RUNNER","route":"cross-runner","descripiton":"Cross Runner is an exciting and fast-paced endless running game that will test your reflexes and agility!<br><br>Your mission is simple—run, dodge obstacles, and cross dangerous roads while avoiding traffic, traps, and unexpected hurdles.<br><br>In Cross Runner, every step matters! Time your movements carefully, collect power-ups, and stay alert as the challenges keep getting tougher.<br><br>The game features <b>smooth controls</b>, <b>vibrant graphics</b>, and <b>engaging gameplay</b> that will keep you on your toes.<br><br>Unlock new characters, set high scores, and challenge yourself to go as far as possible!<br><br>How far can you run without getting stopped?<br><br><b>Play Cross Runner now and test your skills!</b> \uD83C\uDFC3‍♂️\uD83D\uDEA6","thumbnail":"https://pokiigame.com/images/jpg/cross-runner.jpg","tag":["Endless Runner","Obstacle Dodge","Fast-Paced","Reflex Game","Adventure"],"rate":"10","totalreview":"72","path":"/games/cross-runner/index.html"},"skibidi-toilet":{"main":"SKIBIDI TOILET","route":"skibidi-toilet","descripiton":"Playing as a character with their head sticking out of a toilet is hilarious and crazy in the game Skibidi Toilet! Grab toilet paper to gather strength, lift your head, and push other toilets out of the arena to emerge victorious.<br><br>Your goal is to grow larger by gathering toilet paper when you first start out in a battle arena full of Skibidi Toilets.<br><br>But every time you run into one of the larger Skibidi Toilets or the arena\'s spikes, your size decreases. Choose to compete against a friend or play by yourself to become the arena champion!<br><br>Play fast-paced skibidi toilet combat against other players as one feature of the restrooms. The game has amazing graphics, easy controls, and endless fun.<br><br>Play smoothly across PC, Android, and mobile platforms thanks to a dedicated Android app and web browser compatibility.<br><br>Desktop to move, use the arrow keys or WASD. On a mobile device, swipe left to move Player 1. Player 2 can be moved by touching the right side of the screen.","thumbnail":"https://pokiigame.com/images/jpg/skibidi-toilet.jpg","path":"/games/skibidi-toilet/index.html","rate":"10","totalreview":"80","tag":["War","Toilet Paper","Speed"]},"snake.go":{"main":"SNAKE.GO","route":"snake.go","descripiton":"To avoid the other snakes and collect as much energy as you can, slither your snake.<br><br>Points can be earned by gathering magic food or stars. Your serpent grows larger as more magical nourishment is gathered.<br><br>Encircle opponents to score extra points and destroy them. Increase the dash power to accelerate. Play Snake. An online game, on your computer, tablet, or smartphone and have fun.<br><br>Use the mouse cursor to move the snake around on a computer. Holding down the left mouse button will accelerate you.<br><br>Use the onscreen control pad on touch screen devices to rotate the snake. To accelerate, press and hold the dash button.<br><br>Snake go online works with tablets, smart phones, Android in addition to PCs. This game runs directly in your browser and doesn\'t require any downloads, registration, Flash, or plug-in to play.","thumbnail":"https://pokiigame.com/images/jpg/snakego.jpg","path":"/games/snake.go/index.html","rate":"10","totalreview":"80","tag":["Snake","Stars","Extra Point"]},"water-color-sort":{"main":"WATER COLOR SORT","route":"water-color-sort","descripiton":"As each color is in its own test tube, the colored water in the tubes is sorted. <br><br>Your brain will be challenged and exercised by the entertaining and addictive puzzle game Water Sort Puzzle! Use your computer, tablet, or mobile device to play the online game water color sort.<br><br>Move the colors from one container to the next until one color covers every piece of glassware. You can only transfer liquids to another glass that is the same color. <br><br>Use as few moves as possible to complete each level to earn a star rating. You can use the various help buttons if you encounter problems! <br><br>Use the mouse to click on or touch a test tube to select it. <br><br>Next, click or touch the tube to begin pouring the water into it. Pour into individual test tubes until each color is separated. <br><br>An easygoing and relaxed theme permeates the puzzle game Water Color Sort. <br><br>HTML5 was used in the development of this free online game. Chrome, Firefox, Opera, Safari, or later are compatible with it. <br><br>Water Color Sort can be used online on tablets and smart phones running PC, iOS, and Android software. This game runs directly in your browser and doesn\'t require any downloads, registration, Flash, or plugins to play.","thumbnail":"https://pokiigame.com/images/jpg/water-color-sort.jpg","path":"/games/water-color-sort/index.html","rate":"9","totalreview":"80","tag":["Strategy Puzzle","Games","Logic Game","Easy","Stress-Free"]},"car-parking-jam-3D":{"main":"CAR PARKING JAM 3D","route":"car-parking-jam-3D","descripiton":"Play this entertaining online game and free every car from the parking lot.<br/><br/>To rearrange the cars, swipe. To aid in their escape, clear the obstruction and shove them onto the road.<br/><br/>To solve each puzzle, attempt to unblock every vehicle.<br/><br/>car parking jam  is an HTML5 game that can be played online, so downloading is not required.<br/><br/>To play, slide the cars with your finger or mouse.<br/><br/>We personally selected the online puzzle game car parking jam for Pomander.<br/><br/>You can play one of our favorite puzzle games on your phone, which is this one.<br/><br/>Just hit the big play button to get into the fun.","thumbnail":"https://pokiigame.com/images/jpg/car-parking-jam-3D.jpg","tag":["Parking","cars","Rearranges","Puzzle","vehicle"],"rate":"10","totalreview":"91","path":"/games/car-parking-jam-3D/index.html"},"knife-hit-emoji":{"main":"KNIFE HIT EMOJI","route":"knife-hit-emoji","descripiton":"Play the entertaining game Knife Hit Emoji to test your reflexes and knife-throwing prowess! Throwing all of your knives at a spinning emoji while avoiding the ones that are already stuck in it is your goal for each level.<br><br>The Phaser Game Engine was used to create this game.<br><br>You can play Knife Hit Emoji for free. Online, play Knife Hit Emoji.<br><br>Knife Hit Emoji is an HTML5 game that can be played online, so downloading is not required.","thumbnail":"https://pokiigame.com/images/jpg/knife-hit-emoji.jpg","tag":["Emoji","Knife","Spinning Emoji"],"rate":"9","totalreview":"91","path":"/games/knife-hit-emoji/index.html"},"block-breaker":{"main":"BLOCK BREAKER","route":"block-breaker","descripiton":"When the ball reaches the floor, try to break as many blocks as you can! Create an infinite ball chain by gathering extra balls as a bonus!<br><br>Play the Balls and Blocks game on your computer, tablet, or Smartphone.<br><br>The number on each block indicates the number of hits required for it to disappear. To prevent the blocks from getting to the line at the bottom of the screen, strategically aim and shoot the stream of balls.<br><br>To increase the quantity of balls that can be shot, hit the stationary ball power-ups that are situated on the screen. The quantity of balls to be shot is indicated by the number in the circular circle at the bottom of the screen.<br><br>Controls: To aim, move the mouse by holding down the left mouse button. To fire, release the mouse button. The touch controls are the same, but in order to fire, you must release your finger after moving it to aim.<br><br>In order to reload, press the down arrow icon to bring all of the bouncing balls down. This comes in handy when there\'s just a single ball bouncing around and it\'s not hitting anything.","thumbnail":"https://pokiigame.com/images/jpg/block-breaker.jpg","tag":["Ball","Skill games","Action games"],"rate":"9","totalreview":"91","path":"/games/block-breaker/index.html"},"speed-boat":{"main":"SPEED BOAT","route":"speed-boat","descripiton":"Prepare for an amazing race where you\'ll steer a strong speedboat through a challenging course full of obstacles!<br><br>Skillfully avoid rocks, boats, and other obstacles in your path as you sail at a fast pace. Points can be earned by gathering life preservers.<br><br>A live preserver is worth fifteen points. To raise your overall score, play for longer stretches of time and collect as many life preserves as you can.<br><br>Although missing a life preserver won\'t harm you, avoid picking ones that spawn too near obstacles. Your best and most recent scores are displayed on the game over screen.<br><br>This game was created using Construct 3 and works with all popular browsers.<br><br>This game is ideal for casual gaming on a variety of devices, including PC, mobile, Android, and iOS, because it supports a wide range of online browsers.<br><br>It can be operated via a keyboard, mouse, or touchscreen. Enjoy fluid gameplay on both PC and mobile devices with simple reskinning options and controls.","thumbnail":"https://pokiigame.com/images/jpg/speed-boat.jpg","path":"/games/speed-boat/index.html","rate":"9","totalreview":"80","tag":["Water","Boats","Focus"]},"flight-landing":{"main":"FLIGHT LANDING","route":"flight-landing","descripiton":"Play Flight Landing, a free online game! In this free simulation, assume the role of an air traffic controller.<br><br>It is your responsibility to direct airplanes and helicopters to their landing locations safely and without incident.<br><br>After selecting the aircraft by clicking on them, select a clear path that will direct them to the runway or landing area. Keep an eye out for any nearby aircraft indicated by red warning symbols.<br><br>Continue to focus intently and steer clear of crashes to advance to the next level. This fun and free online game will test your skills as an air traffic controller.","thumbnail":"https://pokiigame.com/images/jpg/flight-landing.jpg","tag":["Flights","Flight Track","direction","Free game","Commander"],"rate":"9","totalreview":"91","path":"/games/flight-landing/index.html"},"strike-bowling":{"main":"STRIKE BOWLING","route":"strike-bowling","descripiton":"Prepare to take on the best online bowling game available for free Strike Bowling! Aim to hit every pin in one throw to score a strike, so put your skills to the test. <br><br>Initiate your game play right away and test your ability to become a lanes expert! <br><br>Strike Bowling is an HTML5 game that can be played online, so downloading is not required. <br><br>Strike Bowling offers you the opportunity to enjoy the thrill of free bowling anytime, anywhere!","thumbnail":"https://pokiigame.com/images/jpg/strike-bowling.jpg","tag":["Bowling","Hint Pins","free game","Focus","Strike"],"rate":"9","totalreview":"91","path":"/games/strike-bowling/index.html"},"goal-master":{"main":"GOAL MASTER","route":"goal-master","descripiton":"A simple and entertaining game called Soccer Goal Master.<br><br>Goal Master is an HTML5 game that can be played online, so downloading is not required.<br><br>Put on your cleats and get ready to score goals on the soccer pitch! Your task in this free goal master game is to shoot the ball past the opponent\'s goalie.<br><br> Before moving your player, adjust the height and angle of the shot to perfection.<br><br>It is considerably harderthan it sounds, but the player has 15 chances to get the highest score while evading the goalkeeper! Additionalgoalies appear in every new level! <br><br>The action can be carried out by dragging the left mouse button.","thumbnail":"https://pokiigame.com/images/jpg/goal-master.jpg","tag":["Goals","Focus","Pitch","mind game","HTML5"],"rate":"9","totalreview":"91","path":"/games/goal-master/index.html"},"basketball-slam":{"main":"BASKETBALL SLAM","route":"basketball-slam","descripiton":"Basketball Slam is a humorous puzzle and sports game template where you have to aim and shoot at them to get them to fall into the basket.<br><br>In this lighthearted basketball game, you can compete in multiple modes and take on the roles of various balls. There are numerous options available to you, including the rooftop, the park, the beach, and the gym.<br><br>Main 2 modes: You can play a single game against a series of maps in Quick Match. You can select roughly five random maps in the tournament and view the overall score.<br><br>For those who enjoy casual games or basketball, the game is made to be enjoyable and simple to play. All ages and skill levels can enjoy it.<br><br>Desktop: Charge and aim your ball with your mouse by left-clicking and dragging. Let go to fire.<br><br>Touch screen devices: To aim and charge your shot, tap and swipe the screen with your fingers. To shoot the ball, release<br><br>To the baskets at the top of the screen, shoot the ball from the bottom center. To aim and charge your shot, select and drag. Avoid taking shots that are either too strong or too weak. Let go to fire. Usually, the basket is positioned above the ball. Gather up the stars.","thumbnail":"https://pokiigame.com/images/jpg/basketball-slam.jpg","path":"/games/basketball-slam/index.html","rate":"8","totalreview":"80","tag":[]},"love-couple-puzzle":{"main":"LOVE COUPLE PUZZLE","route":"love-couple-puzzle","descripiton":"In our captivating game, which honors the beauty of romance and togetherness, set out on a heartwarming journey through a world where love is the ultimate adventure. <br><br>Dive into a tapestry of enthralled couples, gorgeous scenery, and the enchanting spirit of Valentine\'s Day with 15 captivating levels of delightful puzzles waiting for you.<br><br>Every level presents a different and endearing riddle to work out, ranging from finding lost soulmates to creating the ideal romantic gesture. <br><br>Navigate through breathtaking scenes that perfectly capture the essence of love in its most basic form. These scenes are full of vivid colors and minute details.<br><br>Romantic Locations: Discover enchanting gardens, intimate settings, and lovely couples that create the ideal backdrop for a love tale. Every level has been thoughtfully designed with lovely graphics and endearing details to capture the spirit of Valentine\'s Day.<br><br>15 Levels of Increasing Difficulty: Begin with easy, beginner-friendly riddles and progress to increasingly challenging tasks. The puzzles in the game get increasingly difficult as you go through it, demanding quick thinking and deft problem-solving techniques.<br><br>Simple Controls: The game\'s interface was made to be intuitive to use. Players of all ages and skill levels can connect the pieces by simply tapping and dragging them.<br><br>Mobile-Friendly: Developed to be playable on computers and mobile devices, so users can enjoy the game on the platform of their choice.","thumbnail":"https://pokiigame.com/images/jpg/love-couple-puzzle.jpg","path":"/games/love-couple-puzzle/index.html","rate":"8","totalreview":"80","tag":["Love Puzzle","Valentine’s Day","Delightful Puzzle"]},"galaxy-hole":{"main":"GALAXY HOLE","route":"galaxy-hole","descripiton":"Galaxy Hole is a humorous puzzle and sports game template where you have to aim and shoot at them to get them to fall into the hole.<br><br>For those who enjoy casual games or just like basketball, the game is made to be enjoyable and simple to play. All ages and skill levels can enjoy it.<br><br>Desktop: Charge and aim your ball with your mouse by left-clicking and dragging. Touch screen devices: To aim and charge your shot, tap and swipe the screen with your fingers. To shoot the ball, release<br><br>In each level the position of the hole will change, given the position you can shoot the ball in the direction of the hole. <br><br>To aim and change your shot, select and drag. Avoid taking shots that are either too strong or too weak. Let go to fire. Aim correctly and collect stars.","thumbnail":"https://pokiigame.com/images/jpg/galaxy-hole.jpg","path":"/games/galaxy-hole/index.html","rate":"9","totalreview":"80","tag":["Ball","Aim","Focus"]},"goalkeeper":{"main":"GOALKEEPER","route":"goalkeeper","descripiton":"Play new free online games with elements from both the GoalKeeper and HTML5 genres. Pick a game and start playing it online right now, no need to download or register.<br><br>How fantastic of a game GoalKeeper is!<br><br>Tossing in the balls is all that is required. Refrain from touching the bombs! Take care; you only have five health points.<br><br>It works with every popular web browser.<br><br>It\'s very easy to customize and reskin the game. Press the corresponding button to change the on-screen button\'s position and size. An HTML5 frame may contain the game.","thumbnail":"https://pokiigame.com/images/jpg/goalkeeper.jpg","path":"/games/goalkeeper/index.html","rate":"9","totalreview":"80","tag":["Goal","Focus","Bombs"]},"ludo-royal":{"main":"LUDO ROYAL","route":"ludo-royal","descripiton":"Ludo Royal Game is a classic board game brought to life in a digital format, providing hours of fun and entertainment for players of all ages. Gather your friends or challenge computer opponents in this engaging multiplayer experience.<br><br>In Ludo Royal Game, your goal is to be the first player to move all your tokens from the starting area to the center of the board. Roll the dice and strategically navigate your tokens across the colorful board, avoiding obstacles and opponents along the way.<br><br>The game offers multiple game modes, including traditional rules and variations, allowing you to customize the gameplay to your liking. Enjoy the thrill of competition as you race against others to reach the finish line.<br><br>With its intuitive controls, vibrant visuals, and lively animations, Ludo Game captures the essence of the classic board game while adding modern twists. Experience the joy of playing Ludo Royal with friends and family, or challenge yourself against computer opponents in this timeless and entertaining digital rendition.","thumbnail":"https://pokiigame.com/images/jpg/ludo-royal.jpg","tag":["Ludo Royal","Ludo Royal Game King","Online Ludo Royal Game","Ludo Royal Club Fun Dice Game","Ludo Royal Battle The Dice Game"],"rate":"10","totalreview":"78","path":"/games/ludo-royal/index.html"},"sprinters-challenge":{"main":"SPRINTERS CHALLENGE","route":"sprinters-challenge","descripiton":"Sprinters challenge is available to play online on Pomander.<br><br>You can have endless fun with this game whether you\'re taking a break from school or using your trusted Chrome.<br><br>Be the ultimate sprint race champion by beating other athletes, improving your speed, and climbing the levels. You can run by tapping the left and right sides of the screen or using the arrow keys.<br><br>Remember, the faster you run and the quicker you time your key tapping, the faster your final score will be. Practice your skills, aim to win every race, and finish the game!<br><br>The realistic game play and simple controls make this game suitable for players of all ages.","thumbnail":"https://pokiigame.com/images/jpg/sprinters-challenge.jpg","tag":["Race","Speed","fast","Climb Level","Realistic game"],"rate":"9","totalreview":"91","path":"/games/sprinters-challenge/index.html"},"moto-hill-climbing":{"main":"MOTO HILL CLIMBING","route":"moto-hill-climbing","descripiton":"Play Moto Hill Climbing, a thrilling online game where you take control of a motorcycle and navigate exhilarating hill climbs, for free. <br><br>Get gold coins as you make your way through eight difficult stages spread over two beautiful locales. <br><br> As you sprint to the finish line, test your abilities and speed. I wish you luck and an enjoyable rush of adrenaline. <br><br>Set a goal for yourself to conquer difficult terrain and cross the finish line as fast as you can. <br><br>In this thrilling play-free adventure, get ready to blast through the hills with your engines running!","thumbnail":"https://pokiigame.com/images/jpg/moto-hill-climbing.jpg","tag":["Climb","Hiils","coins","Moto Ninja"],"rate":"9","totalreview":"91","path":"/games/moto-hill-climbing/index.html"},"bubble-blaster":{"main":"BUBBLE BLASTER","route":"bubble-blaster","descripiton":"Play some amazing free bubble blaster games, where the objective is to have fun and keep beating your high score! We think that Bubble Blaster\'s simplicity is what draws in players time and time again! It\'s also our games\' excellent quality.<br><br>Untimed bubble-popping strategy game Bubble Blaster features an old-fashioned UI and sounds from an arcade. <br><br>To score points, the player must pop groups of three or more matching bubbles using an arrow shooter.<br><br>The goal of Bubble Blaster is to get as many points as you can. You must pop the colored bubbles to receive points. You must row or connect a minimum of two or more bubbles of the same color to pop those bubbles.<br><br>An arrow can be found in the center of the bottom of the gaming window. Using your mouse, you can move this arrow in a different direction. <br><br>The left mouse button will fire a new bubble in the direction of the arrow each time you click it. A new row of bubbles will be added to the top after you shoot six more. If a ball crosses the bottom border, the game is over.<br><br>Bubbles that split off from the others will also pop. The impending bubble will be visible on the lower, downward side.<br><br>The objective of Bubble Blaster is to gather as many points as you can; there is no \'final end.","thumbnail":"https://pokiigame.com/images/jpg/bubble-blaster.jpg","path":"/games/bubble-blaster/index.html","rate":"9","totalreview":"80","tag":["Bubble","Shorts","Blast"]},"ping-pong-ball":{"main":"PING PONG BALL","route":"ping-pong-ball","descripiton":"Play free Ping Pong Ball right now at Pomanders. You can play Ping Pong Ball for free.<br><br>Ping Pong Ball is a game of physics that is based on the well-known party trick. Carefully aim the table tennis ball so that it lands in the cup.<br><br>To aim, try progressively harder trick shots, and finish all 60 levels, follow the dotted path.<br><br>Desktop: To aim, left-click with your mouse and pull back. Let go to fire. Touch screen devices: You can use your fingers as a mouse by tapping the screen.<br><br>Indicators and controls (upper row, left to right): <br><br>- Remaining Balls: Indicates the quantity of balls you still have.<br><br>- Level Number: Shows the level you are on right now.<br><br>- Reset Button: This button lets you start the level over.<br><br>- Grid Button: Returns you to the level selection screen after ending the game.<br><br>- Home Button: Takes you back to the welcome screen after ending the game.<br><br>- Speaker Button: Manages the audio in the game.","thumbnail":"https://pokiigame.com/images/jpg/ping-pong-ball.jpg","tag":["Ball","Skill Games"],"rate":"9","totalreview":"91","path":"/games/ping-pong-ball/index.html"},"dress-up-diva":{"main":"DRESS UP DIVA","route":"dress-up-diva","descripiton":"The Dress Up Diva game allows the player to customize the girl\'s look by choosing from a range of options. To make the girl appear her best, use your creativity.<br><br>When it comes to outfitting adorable virtual avatars, you have an endless amount of options. Accentuate the models\' beauty! Our endeavors offer ample opportunities to satisfy all of your fashion fantasies.<br><br>It only takes a few mouse clicks to try on new shoes, put on accessories, and change into new clothes.<br><br>Our dress-up games have controls that are easy enough for players of all skill levels to understand.<br>Join us in selecting new clothes, accessories, footwear, and more in our dress-up games.<br><br>After deciding on your favorite character, start dressing him up and give him a chic haircut! Our genre-based games feature a wide range of character types.<br><br>You can play our online dress-up games for free. Play our games on your PC, tablet, or smartphone without downloading. Every game can be played directly in your browser. Here, enjoy your Q10 attire.","thumbnail":"https://pokiigame.com/images/jpg/dress-up-diva.jpg","path":"/games/dress-up-diva/index.html","rate":"9","totalreview":"80","tag":["Makeup","Dress-Up","Style","Fashion"]},"bubble-pop-mania":{"main":"BUBBLE POP MANIA","route":"bubble-pop-mania","descripiton":"In the entertaining and difficult color matching and bubble popping game Bubble Pop Mania, your goal is to pop as many bubbles as you can in the allotted time.<br><br>You can only pop two or more matching bubbles of the same color in this free online game, so start moving strategically to group them all and increase your score.<br><br>Bubble Pop Mania is an HTML5 game that can be played online, so downloading is not required.<br><br>Make an effort to make the diamonds fall to the bottom of the screen and try popping bubbles that have clocks inside of them to gain extra seconds.<br><br>You have to move quickly and wisely in order to set the highest score before the time runs out.<br><br>Play Bubble Pop Mania, a free online game available at Pomander, and have fun!","thumbnail":"https://pokiigame.com/images/jpg/bubble-pop-mania.jpg","tag":["Bubbles","Match bubble","free game","Pop Mania"],"rate":"9","totalreview":"91","path":"/games/bubble-pop-mania/index.html"},"love\'s-quest":{"main":"LOVE\'S QUEST","route":"love\'s-quest","descripiton":"Embody a protagonist on a love-filled mission, conquering hurdles to collect scattered hearts. The game takes place in a colorful, love-themed universe with challenging tasks to prove your mettle.<br><br>Love\'s Quest is an HTML5 game that can be played online, so downloading is not required.<br><br>You must use strategic thinking to complete the challenging tasks in the game in order to collect hearts. You move by using the keyboard arrows.<br><br>It won\'t be unusual to run into difficulties; use your creativity to get past them. Leveling up through accomplished heart collections and obstacle removal is how progress is made.<br><br>Play Love\'s Quest, a free online game available at Pomander, and have fun!","thumbnail":"https://pokiigame.com/images/jpg/love\'s-quest.jpg","tag":["Skill","Puzzle","Hearts collected"],"rate":"9","totalreview":"91","path":"/games/love\'s-quest/index.html"},"tennis-mania":{"main":"TENNIS MANIA","route":"tennis-mania","descripiton":"Tennis Mania is an entertaining sports and stickman game with funny pixel graphics. You must use your racket to hit the ball in an exciting doubles match until you score many goals on the other player\'s court.<br><br>To jump with your tennis players, use the W and Up keys, two for each player. If you\'re playing in 1P mode and competing against the computer, use only one key.<br><br>If you\'re on a mobile device, use the special touch controls.<br><br>Tennis Mania is an HTML5 game that can be played online, so downloading is not required.<br><br>The rules are straightforward: if your opponent does not return the ball, you score a point. Your players\' rackets must hit the balls and force them to hit the other side. They\'ll try to accomplish the same thing.<br><br>Play free Tennis Mania right now at Pomanders. You can play Tennis Mania for free.","thumbnail":"https://pokiigame.com/images/jpg/tennis-mania.jpg","tag":["Tennis","Hit the Ball","Players","Focus"],"rate":"9","totalreview":"91","path":"/games/tennis-mania/index.html"},"basketball-dunk":{"main":"BASKETBALL DUNK","route":"basketball-dunk","descripiton":"Basketball dunk is a basketball-themed physics-based arcade game.<br><br>The goal of the game is to get the ball into the basketball hoop by guiding it with the help of the objects in the scene.<br><br>The game Fishing Gone is a lot of fun. Basketball is a straightforward but incredibly addictive sport. How many points are you able to get? You can miss three times before the game is over. Get a good score by showcasing your abilities!<br><br>You must use careful planning and strategic thinking to finish all 10 levels.<br><br>Basketball dunk is an HTML5 game that can be played online, so downloading is not required.<br><br>To interact, use the touch screen or the mouse.","thumbnail":"https://pokiigame.com/images/jpg/basketball-dunk.jpg","tag":["Arcade","Basketball","Aim","Free game"],"rate":"9","totalreview":"91","path":"/games/basketball-dunk/index.html"},"emoji-bingo":{"main":"EMOJI BINGO","route":"emoji-bingo","descripiton":"Basketball dunk is a basketball-themed physics-based arcade game.<br><br>The goal of the game is to get the ball into the basketball hoop by guiding it with the help of the objects in the scene.<br><br>The game Fishing Gone is a lot of fun. Basketball is a straightforward but incredibly addictive sport. How many points are you able to get? You can miss three times before the game is over. Get a good score by showcasing your abilities!<br><br>You must use careful planning and strategic thinking to finish all 10 levels.<br><br>Basketball dunk is an HTML5 game that can be played online, so downloading is not required.<br><br>To interact, use the touch screen or the mouse.","thumbnail":"https://pokiigame.com/images/jpg/emoji-bingo.jpg","tag":["Emojis","Match","Gain Point","joyful"],"rate":"9","totalreview":"91","path":"/games/emoji-bingo/index.html"},"animal-saga":{"main":"ANIMAL SAGA","route":"animal-saga","descripiton":"In Connect Animals: Animal Saga, how quickly will you be able to match up all of the cute animals? It\'s a charming puzzle game that suits players of all skill levels.<br><br>Play free Animal Saga right now at Pomanders. You can play Animal Saga for free.<br><br>Examine the tiles on the game board in every level. Can you connect the camels, cows, bears, and other animals? Each animal on a tile must be connected to an identical animal on a nearby tile.<br><br>To get a hint when you\'re stuck and unable to move forward, simply click the magic wand! In each of the entertaining and difficult stages of this animal saga game, will you be able to earn points?<br><br>To expose the tiles pair, use the hint. To randomly reorganize the tiles on the board, use Shuffle.","thumbnail":"https://pokiigame.com/images/jpg/animal-saga.jpg","tag":["Animal","Brain Training","Puzzle"],"rate":"9","totalreview":"91","path":"/games/animal-saga/index.html"},"emoji-puzzle":{"main":"EMOJI PUZZLE","route":"emoji-puzzle","descripiton":"Your objective is to ensure that all blue circles display the correct sign. When you alter a circle, it automatically receives the correct designation.<br><br>However, if you jump over a circle that already bears the correct sign, it will lose this designation. Your ultimate goal is to ensure that all circles are correctly marked with the sign.<br><br>Emoji Puzzle is an HTML5 game that can be played online, so downloading is not required.<br><br>Use your creativity to come up with new plans and finish every level.","thumbnail":"https://pokiigame.com/images/jpg/emoji-puzzle.jpg","tag":["Emoji","Brain Training","Puzzle"],"rate":"9","totalreview":"91","path":"/games/emoji-puzzle/index.html"},"pet-merge":{"main":"PET MERGE","route":"pet-merge","descripiton":"Experience the thrill of matching pets and staying clear of a potentially harmful red line. As the intensity of the game increases, remain alert and make quick decisions.<br><br>Every match raises your score and aids in clearing rows. Aim for the top score while staying clear of the red line, testing your speed and strategy along the way.<br><br>So too simple to play this game like, Match the same pet in a row while keeping an eye on the red line at the top.<br><br>Pet Merge is an HTML5 game that can be played online, so downloading is not required.<br><br>Pet Merge is a mobile game that\'s sure to keep you entertained for a very long time, regardless of your preference for puzzle games or just a fun and challenging game to play.<br><br>It\'s an incredibly engaging game with lovely graphics, challenging gameplay, and easy-to-use controls.","thumbnail":"https://pokiigame.com/images/jpg/pet-merge.jpg","tag":["Pet","Animals","Brain Training","Puzzle"],"rate":"9","totalreview":"91","path":"/games/pet-merge/index.html"},"home-color-3d":{"main":"HOME COLOR 3D","route":"home-color-3d","descripiton":"<p>Home Color 3D Game is a creative and engaging puzzle game that allows you to unleash your inner artist and transform dull houses into vibrant works of art. In this colorful adventure, you take on the role of a skilled painter, tasked with reviving the appearance of various houses.<br><br>In Home Color 3D Game, your objective is to strategically paint different sections of the houses to match the given color patterns. Use your brushes and mix colors to create beautiful designs and bring life back to the neighborhood.<br><br>The game features a wide array of challenging levels with increasing difficulty, introducing new elements and obstacles to overcome. From simple color swaps to intricate designs, every house presents a unique artistic challenge.<br><br>With its intuitive controls, charming visuals, and relaxing music, Home Color 3D Game provides a calming and immersive painting experience. Unleash your creativity, show off your artistic skills, and transform ordinary houses into stunning masterpieces in this delightful and colorful painting adventure.</p>","thumbnail":"https://pokiigame.com/images/jpg/home-color-3d.jpg","tag":["House","Painting","HousePainting","Paint Online","Wall Painting","Artwork"],"rate":"9","totalreview":"78","path":"/games/home-color-3d/index.html"},"grocery-grove":{"main":"GROCERY GROVE","route":"grocery-grove","descripiton":"Grocery Grove! You have to manage a food store in this game. Your responsibilities include replenishing produce, incorporating fresh items into your stock, and assisting patrons at the point of sale. Your progress will result in the availability of new screens to display your products. The stockroom is located in the upper left corner; don\'t forget to keep it supplied! <br><br> You own your market in Tap SuperMart and want to make a lot of money by managing it well. Add more departments to enhance your Grocery Grove\'s ranking and revenue! <br><br> To replenish the store room and items, tap the resupply symbol. <br><br> To reduce wait times, tap the register. <br><br> To achieve a 5-star rating, continue expanding and adding new departments.","thumbnail":"https://pokiigame.com/images/jpg/grocery-grove.jpg","tag":["No Download","Grocery Grove","Inventory","Cash","Smartmarket"],"rate":"9","totalreview":"91","path":"/games/grocery-grove/index.html"},"animal-pictionary":{"main":"ANIMAL PICTIONARY","route":"animal-pictionary","descripiton":" The game Animal Pictionary helps young children learn how to spell a variety of animal names. <br><br> The animal is displayed on the screen, and to spell the type of animal at the bottom of the screen, the player must click on the falling letter tiles in the word\'s order of appearance.<br><br> Play Animal Pictionary on your computer, tablet, or phone to learn animal names in an entertaining way.<br><br> Click your mouse on the falling letter tiles in the name of the animal type shown on the screen in the same order to finish the game.<br><br> Once you\'ve determined the correct name, click the next button to earn more points.<br><br> Play Animal Pictionary, a free online game available at Pomander, and have fun!<br><br>","thumbnail":"https://pokiigame.com/images/jpg/animal-pictionary.jpg","tag":["Animals","Perditions","guess the name","memory","Learn","Kids games"],"rate":"9","totalreview":"91","path":"/games/animal-pictionary/index.html"},"cube-3d":{"main":"CUBE 3D","route":"cube-3d","descripiton":"Cube 3D game is a captivating and challenging puzzle experience that will test your spatial reasoning and problem-solving skills. In this game, you are presented with a three-dimensional Cube 3D consisting of smaller interconnected cubes. <br><br>Your objective is to manipulate the cube, rotating and shifting its components, to solve various puzzles or achieve specific goals.<br><br>The game offers a wide range of puzzles and challenges, each requiring a unique approach and logical thinking. You\'ll encounter obstacles, locked cubes, hidden passages, and more as you navigate through the cube\'s intricate structure.<br><br>Cube 3D game provides intuitive controls and immersive graphics, allowing you to fully engage with the puzzle-solving process. As you progress, the puzzles become increasingly complex, pushing your abilities to the limit.<br><br>Whether you\'re a puzzle enthusiast or simply seeking an entertaining mental workout, Cube 3D game offers endless hours of immersive and brain-teasing gameplay. <br><br>Dive into the world of cubes and unlock the mysteries hidden within their three-dimensional realm.","thumbnail":"https://pokiigame.com/images/jpg/cube-3d.jpg","tag":["Onlinecubegames","Puzzle","Challenging"],"rate":"8","totalreview":"81","path":"/games/cube-3d/index.html"},"cross-and-circle":{"main":"CROSS AND CIRCLE","route":"cross-and-circle","descripiton":"Cross and Circle is a classic and timeless game that brings fun and strategy to players of all ages. It is played on a grid consisting of nine squares, arranged in a 3x3 layout.<br><br>The game is commonly played by two players, who take turns marking their symbol (typically \'X\' or \'O\') in an attempt to create a line of three of their symbols horizontally, vertically, or diagonally.<br><br>The objective of Cross and Circle is to outsmart your opponent by strategically placing your symbols and blocking their attempts to form a line. The game requires careful planning, anticipating your opponent\'s moves, and seizing opportunities to secure your victory.<br><br>With its simple rules and quick gameplay, Cross and Circle is a popular choice for friendly competitions, family gatherings, and casual gaming sessions. <br><br>It\'s easy to learn but offers endless possibilities for strategic gameplay and competitive fun. Engage in this iconic game and see if you have what it takes to become the Cross and Circle champion!","thumbnail":"https://pokiigame.com/images/jpg/cross-and-circle.jpg","tag":["cross-and-circle","Strategicgames","Puzzle"],"rate":"10","totalreview":"72","path":"/games/cross-and-circle/index.html"},"rapid-racer":{"main":"RAPID RACER","route":"rapid-racer","descripiton":"Speed Race Game is a heart-pounding and adrenaline-fueled racing experience that will push your driving skills to the limit. Get ready to buckle up and hit the accelerator as you compete against skilled opponents in high-speed races.<br><br>In Speed Race Game, you\'ll navigate through a variety of exhilarating tracks, each filled with twists, turns, and challenging obstacles. With responsive controls and realistic physics, you\'ll feel the thrill of every hairpin turn and nail-biting overtaking maneuver.<br><br>Customize your racing vehicle, unlock new cars, and upgrade their performance to gain a competitive edge. Engage in single-player races or test your skills against friends in exciting multiplayer modes.<br><br>With stunning graphics, immersive sound effects, and intense gameplay, Speed Race Game delivers an immersive and immersive racing experience.<br><br>Are you ready to push the pedal to the metal and claim victory in the ultimate speed race? Step into the driver\'s seat and find out!Rapid Racer Game is a heart-pounding and adrenaline-fueled racing experience that will push your driving skills to the limit. Get ready to buckle up and hit the accelerator as you compete against skilled opponents in high-speed races. <br><br> In Rapid Racer Game, you\'ll navigate through a variety of exhilarating tracks, each filled with twists, turns, and challenging obstacles. With responsive controls and realistic physics, you\'ll feel the thrill of every hairpin turn and nail-biting overtaking maneuver. <br><br> Customize your racing vehicle, unlock new cars, and upgrade their performance to gain a competitive edge. Engage in single-player races or test your skills against friends in exciting multiplayer modes. <br><br> With stunning graphics, immersive sound effects, and intense gameplay, Rapid Racer Game delivers an immersive and immersive racing experience. <br><br> Are you ready to push the pedal to the metal and claim victory in the ultimate Rapid Racer? Step into the driver\'s seat and find out!","thumbnail":"https://pokiigame.com/images/jpg/rapid-racer.jpg","tag":["Race","Car","Drift","Action"],"rate":"9","totalreview":"88","path":"/games/rapid-racer/index.html"},"match-true-colors":{"main":"MATCH TRUE COLORS","route":"match-true-colors","descripiton":"Match true colors Match true colors Game is a fun and educational game designed to help children develop their color recognition skills. With its vibrant and engaging interface, this game provides a colorful learning experience for young minds.<br><br>In Match true colors Game, children are presented with various objects or shapes, each in different colors. The objective is to match the objects with their corresponding colors by selecting the correct color from a palette.<br><br>The game features a wide range of objects and colors, providing a diverse learning experience. With each correct match, children are rewarded with positive feedback and encouragement, fostering a sense of accomplishment and boosting their confidence.<br><br>Match true colors Game offers a playful and interactive environment that promotes cognitive development and color awareness. It\'s an ideal game for young children to enhance their color recognition abilities in an enjoyable and engaging way. Let your little ones explore the world of colors and have a blast with Match true colors Game!","thumbnail":"https://pokiigame.com/images/jpg/match-true-colors.jpg","tag":["Color","Kids","Knowledge","Match"],"rate":"8","totalreview":"76","path":"/games/match-true-colors/index.html"},"fight-ninja":{"main":"FIGHT NINJA","route":"fight-ninja","descripiton":"Fight Ninja Game is an action-packed and fast-paced platformer that puts your agility and reflexes to the test. Play as a skilled ninja warrior on a mission to navigate through treacherous obstacles and defeat enemies. <br><br> InFight Ninja Game, you must leap, dash, and climb your way through challenging levels filled with deadly traps, moving platforms, and cunning adversaries. Use your ninja skills to avoid hazards, time your jumps perfectly, and unleash powerful attacks to overcome enemies. <br><br> The game features responsive controls, allowing you to execute precise movements and perform impressive acrobatic maneuvers. Collect power-ups and unlock new abilities to enhance your ninja\'s capabilities. <br><br> With its captivating graphics, immersive sound effects, and thrilling gameplay,Fight Ninja Game delivers an adrenaline-pumping experience. <br><br> Can you master the art of the ninja and overcome every obstacle in your path? Prepare for an epic adventure filled with intense jumps, epic battles, and heroic feats.","thumbnail":"https://pokiigame.com/images/jpg/fight-ninja.jpg","tag":["Ninja","Action","Hero","Jumping"],"rate":"9","totalreview":"89","path":"/games/fight-ninja/index.html"},"duck-hunt":{"main":"DUCK HUNT","route":"duck-hunt","descripiton":"Duck Hunt Game is an addictive and fast-paced shooting game that tests your aim and reflexes. Step into the shoes of an expert marksman as you take on the challenge of shooting down ducks flying across the screen.<br><br>In Duck Hunt Game, you must quickly react and take aim at the ducks before they disappear. Use your virtual firearm to fire precise shots and earn points for each successful hit. Be careful not to shoot the friendly ducks or miss your targets, as it will cost you valuable points.<br><br>The game features multiple levels with increasing difficulty, introducing faster ducks and challenging shooting scenarios. With its vibrant graphics, realistic sound effects, and smooth controls, Duck Hunt Game provides an immersive and enjoyable shooting experience.<br><br>Challenge yourself to achieve the highest score, improve your accuracy, and become the ultimate Duck Hunt. Get ready to take aim and let the feathers fly in this thrilling and addictive shooting adventure.","thumbnail":"https://pokiigame.com/images/jpg/duck-hunt.jpg","tag":["Shooting","Thrilling","Fun"],"rate":"8","totalreview":"78","path":"/games/duck-hunt/index.html"},"defender-legacy":{"main":"DEFENDER LEGACY","route":"defender-legacy","descripiton":"Defender Legacy Game is an addictive and fast-paced basketball game that challenges your dribbling skills and reflexes. In this action-packed sports adventure, you take on the role of a talented basketball player, aiming to dribble your way through various challenging levels.<br><br>In Defender Legacy Game, your objective is to navigate through an obstacle course while dribbling the basketball. Tackle obstacles such as cones, hurdles, and moving platforms as you showcase your ball-handling skills.<br><br>Time your moves, dodge defenders, and maintain control of the ball to score points and complete each level.<br><br>The game offers different game modes, including timed challenges and endless dribbling quests, keeping the excitement high. With its smooth controls, vibrant graphics, and energetic soundtrack, Defender Legacy Game provides an immersive and thrilling basketball experience.<br><br>Put your dribbling skills to the test, show off your moves, and become the ultimate Dribble King in this fast-paced and entertaining basketball game.","thumbnail":"https://pokiigame.com/images/jpg/defender-legacy.jpg","tag":["King","Action","Fun"],"rate":"8","totalreview":"88","path":"/games/defender-legacy/index.html"},"crazy-fish":{"main":"CRAZY FISH","route":"crazy-fish","descripiton":"Crazy Fish Game is a wild and exhilarating underwater adventure that puts you in control of a rebellious and energetic fish on a mission to explore the vast ocean depths.<br><br>Dive into a world teeming with colorful marine life and embark on an epic journey filled with excitement and challenges.<br><br>In Crazy Fish Game, you must navigate through a series of underwater obstacles, including coral reefs, sea mines, and treacherous whirlpools. Use your quick reflexes and agile swimming skills to avoid dangers and collect power-ups along the way.<br><br>The game features intuitive controls, allowing you to perform daring maneuvers, leap out of the water, and even glide through the air. Unlock different fish species with unique abilities and unleash special moves to overcome obstacles and defeat enemies.<br><br>With its vibrant graphics, dynamic gameplay, and catchy soundtrack, Crazy Fish Game offers an immersive and entertaining aquatic experience.<br><br>Prepare to ride the waves, leap to new heights, and become the ultimate Crazy Fish in this thrilling underwater escapade.","thumbnail":"https://pokiigame.com/images/jpg/crazy-fish.jpg","tag":["Fish","Fight","Action"],"rate":"9","totalreview":"78","path":"/games/crazy-fish/index.html"},"christmas-candy":{"main":"CHRISTMAS CANDY","route":"christmas-candy","descripiton":"Christmas Candy Game is a festive and delightful puzzle game that brings the holiday spirit to your screen. Immerse yourself in a winter wonderland as you match and swap colorful Christmas-themed tiles to create chains of three or more.<br><br>In Christmas Candy Game, your goal is to complete various objectives within a limited number of moves or a specific time frame. Match candy canes, ornaments, presents, and other festive symbols to clear the board and progress through levels.<br><br>The game features multiple gameplay modes, including classic match-3, timed challenges, and puzzle-solving missions. Unlock power-ups and special abilities to create dazzling combos and overcome obstacles.<br><br>With its cheerful graphics, jolly sound effects, and joyful holiday-themed music, Christmas Candy Game provides a merry and addictive gaming experience.<br><br>Enjoy the warmth and joy of the holiday season as you immerse yourself in this delightful match-3 adventure.","thumbnail":"https://pokiigame.com/images/jpg/christmas-candy.jpg","tag":["Christmas","Santa","Gift"],"rate":"9","totalreview":"98","path":"/games/christmas-candy/index.html"},"beans-stumble-3d":{"main":"BEANS STUMBLE 3D","route":"beans-stumble-3d","descripiton":"Beans Stumble 3D Game is a hilarious and fast-paced multiplayer game that will keep you on the edge of your seat. In this wacky competition, you control a clumsy bean character and navigate through a series of challenging obstacle courses.<br><br>In Beans Stumble 3D Game, your objective is to outmaneuver other players and be the last bean standing. Jump, slide, and dash your way through crazy courses filled with spinning platforms, swinging hammers, and treacherous gaps.<br><br>The catch? The courses are filled with beans that can push you off, adding an element of chaos and unpredictability.<br><br>The game features vibrant and cartoonish graphics, upbeat music, and intuitive controls that make it easy to pick up and play. Compete against friends or other players online in thrilling multiplayer matches, testing your agility and reflexes.<br><br>Prepare to laugh, scream, and strategize as you tumble, slide, and bounce your way to victory in Beans Stumble 3D Game. Will you be the ultimate bean champion?","thumbnail":"https://pokiigame.com/images/jpg/beans-stumble-3d.jpg","tag":["FallingBemas","Jump"],"rate":"8","totalreview":"99","path":"/games/beans-stumble-3d/index.html"},"jurassic-dino-run":{"main":"JURASSIC DINO RUN","route":"jurassic-dino-run","descripiton":"Jurassic Dino Run Game is a captivating and nostalgic platformer that brings back the magic of classic 2D adventure games.<br><br>Embark on a thrilling journey with our beloved hero, as they venture through mesmerizing landscapes, encounter challenging enemies, and unravel an epic story.<br><br>In Jurassic Dino Run Game, you\'ll navigate through beautifully designed levels filled with secret treasures, hidden passages, and clever puzzles. Jump, run, and fight your way through hordes of enemies using an array of exciting abilities and power-ups.<br><br>The game features a captivating storyline, immersive gameplay, and stunning pixel art visuals that pay homage to the golden age of platformers. Unlock new abilities, discover hidden secrets, and encounter memorable characters as you progress through the game.<br><br>With its nostalgic charm, engaging gameplay mechanics, and a delightful soundtrack, Jurassic Dino Run Game offers an unforgettable gaming experience for both longtime fans of classic platformers and new players alike.<br><br>Are you ready to embark on a heroic adventure and save the day? Get ready to jump back into the magical world of Jurassic Dino Run Returns!","thumbnail":"https://pokiigame.com/images/jpg/jurassic-dino-run.jpg","tag":["2d Games ","Cartoon Games","Simulation Games"],"rate":"9","totalreview":"90","path":"/games/jurassic-dino-run/index.html"},"city-warrior":{"main":"CITY WARRIOR","route":"city-warrior","descripiton":"In the thrilling and action-packed mobile game city warrior, users take control of acity warrior who must run and jump through a variety of stages and obstacles.<br><br>Players must use their hero abilities to progress through levels chock-full of lethal obstacles, enemies, and traps in city warrior. With the game\'s simple touch controls, players can easily jump, slide, and attack their way through every level.<br><br>Desert Hero is an HTML5 game that can be played online, so downloading is not required.<br><br>The gaming experience in Desert Hero is immersive and captivating due to itsstunning graphics and vibrant color scheme.<br><br>Players can spend hours or minutes at a time playing this game because of its fast-paced action.","thumbnail":"https://pokiigame.com/images/jpg/city-warrior.jpg","tag":["Thrilling","Actions","Action Games","HTML5"],"rate":"9","totalreview":"89","path":"/games/city-warrior/index.html"},"frozen-rush":{"main":"FROZEN RUSH","route":"frozen-rush","descripiton":"Frozen Rush Game is an adrenaline-pumping and fast-paced platformer that will test your reflexes and agility. In this thrilling adventure, you find yourself navigating treacherous cliffs, precarious platforms, and deadly obstacles.<br><br>In Frozen Rush Game, your objective is to guide your character safely through each level, avoiding pitfalls, spikes, and other hazards. Time your jumps, make precise movements, and use power-ups strategically to overcome challenges and reach the goal.<br><br>The game features dynamic level designs, offering a variety of cliff formations and environmental hazards that keep you on your toes. With each level, the difficulty increases, pushing your skills to the limit.<br><br>With its vibrant visuals, engaging gameplay, and immersive sound effects, Frozen Rush Game provides an exhilarating gaming experience.<br><br>Can you conquer the dangerous cliffs and emerge victorious? Brace yourself for an intense platforming adventure that will keep you hooked from start to finish.","thumbnail":"https://pokiigame.com/images/jpg/frozen-rush.jpg","tag":["Action","Thrilling","Danger","FROZEN"],"rate":"9","totalreview":"98","path":"/games/frozen-rush/index.html"},"sly-crab":{"main":"SLY CRAB","route":"sly-crab","descripiton":"Sly Crab Game is a clever and addictive puzzle game that will test your problem-solving skills and challenge your wit. In this engaging adventure, you control a mischievous crab who must navigate through a series of intricate mazes to reach the treasure.<br><br>In Sly Crab Game, you\'ll encounter a variety of obstacles, traps, and tricky pathways that require careful planning and strategic moves.<br><br>Slide, rotate, and manipulate tiles to create a clear path for the crab, avoiding dangerous traps and collecting gems along the way.<br><br>The game features multiple levels with increasing complexity, offering a range of brain-teasing puzzles to solve. With its intuitive controls, charming graphics, and soothing music, Sly Crab Game provides a captivating and enjoyable gaming experience.<br><br>Challenge yourself to unlock all the treasures, overcome every obstacle, and prove your puzzle-solving prowess in this delightful and Sly Crab adventure.","thumbnail":"https://pokiigame.com/images/jpg/sly-crab.jpg","tag":["Gold","Treasure Hunt","Treasure"],"rate":"9","totalreview":"99","path":"/games/sly-crab/index.html"},"magic-block":{"main":"MAGIC BLOCK","route":"magic-block","descripiton":"Magic Block is a captivating and brain-teasing puzzle game that challenges players to arrange numbers in a square grid in such a way that the sum of each row, column, and diagonal is equal.<br><br>The objective is to create a square grid where all numbers align perfectly, forming a magical pattern.<br><br>In the game, players are presented with a partially filled grid and must strategically place the remaining numbers to complete the square. <br><br>Each number can only appear once in each row, column, and diagonal, adding an element of logical deduction and problem-solving.<br><br>Magic Block offers a range of difficulty levels, from beginner to expert, ensuring there\'s a challenge for players of all skill levels. The game\'s intuitive interface and sleek design make it easy to navigate and enjoyable to play.<br><br>Engage your mind and unlock the secrets of the Magic Block as you strive to solve increasingly complex puzzles and achieve perfect symmetry. Can you crack the code and create the ultimate magical arrangement? Play Magic Block and find out!","thumbnail":"https://pokiigame.com/images/jpg/magic-block.jpg","tag":["magic-blockgames","Puzzle","Mathwithfun"],"rate":"9","totalreview":"77","path":"/games/magic-block/index.html"},"race-mania":{"main":"RACE MANIA","route":"race-mania","descripiton":"Race Mania is a high-speed and exhilarating racing game that will satisfy your need for adrenaline-fueled action. Strap in and prepare for an intense experience as you take the wheel of powerful racing cars on the open highway.<br><br>In Race Mania, you\'ll navigate through a variety of challenging tracks, each filled with twists, turns, and obstacles. Push your limits as you weave through traffic, dodge oncoming vehicles, and make daring overtakes to gain an edge over your opponents.<br><br>The game offers a range of customizable cars, allowing you to upgrade their performance and appearance to suit your racing style. <br><br>Engaging graphics, realistic sound effects, and dynamic music create an immersive atmosphere that enhances the racing experience.<br><br>Compete against AI-controlled opponents or challenge your friends in multiplayer mode as you race towards the finish line. <br><br>With its fast-paced gameplay and intense competition, Race Mania guarantees an adrenaline rush and endless hours of racing excitement. Buckle up and prepare for the ultimate highway racing challenge!","thumbnail":"https://pokiigame.com/images/jpg/race-mania.jpg","tag":["Racing","Action","Thrilling"],"rate":"8","totalreview":"83","path":"/games/race-mania/index.html"},"skyscraper-builder":{"main":"SKYSCRAPER BUILDER","route":"skyscraper-builder","descripiton":"skyscraper-builder Game is a thrilling and addictive construction game that will test your engineering skills and challenge your sense of balance. In this exciting adventure, your objective is to build the tallest and most stable tower possible using a variety of different blocks.<br><br>In skyscraper-builder Game, you\'ll carefully place blocks on top of each other, making sure to maintain stability and prevent the tower from toppling over. As you progress, the difficulty increases, requiring more precision and strategic thinking to keep the tower standing.<br><br>The game features intuitive controls, realistic physics, and stunning graphics that enhance the immersive experience. With each successful placement, you earn points and unlock new block types, adding complexity and variety to your tower-building endeavors.<br><br>Challenge yourself to reach new heights, create the most impressive tower, and test the limits of your construction abilities in skyscraper-builder Game. <br><br>Will your tower withstand the test of balance and become a towering masterpiece? Get ready to stack and strategize your way to greatness!","thumbnail":"https://pokiigame.com/images/jpg/skyscraper-builder.jpg","tag":["Building Games","Kids Games","Block Games"],"rate":"9","totalreview":"99","path":"/games/skyscraper-builder/index.html"}}',
      );
    },
  },
]);
