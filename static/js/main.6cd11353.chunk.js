(this["webpackJsonpreact-complete-guide"] =
  this["webpackJsonpreact-complete-guide"] || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    ,
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(8),
        c = n.n(a),
        l = (n(14), n(5)),
        s = n(2),
        i = n(1),
        r = (n(15), n(16), n(0)),
        u = function (e) {
          var t = "card ".concat(e.className);
          return Object(r.jsx)("div", { className: t, children: e.children });
        },
        j =
          (n(18),
          function (e) {
            return Object(r.jsx)("div", {
              className: "expenses-filter",
              children: Object(r.jsxs)("div", {
                className: "expenses-filter__control",
                children: [
                  Object(r.jsx)("label", { children: "Filter by year" }),
                  Object(r.jsxs)("select", {
                    value: e.selected,
                    onChange: function (t) {
                      e.onFiltered(t.target.value);
                    },
                    children: [
                      Object(r.jsx)("option", {
                        value: "2025",
                        children: "2025",
                      }),
                      Object(r.jsx)("option", {
                        value: "2024",
                        children: "2024",
                      }),
                      Object(r.jsx)("option", {
                        value: "2023",
                        children: "2023",
                      }),
                      Object(r.jsx)("option", {
                        value: "2022",
                        children: "2022",
                      }),
                      Object(r.jsx)("option", {
                        value: "2021",
                        children: "2021",
                      }),
                      Object(r.jsx)("option", {
                        value: "2020",
                        children: "2020",
                      }),
                    ],
                  }),
                ],
              }),
            });
          }),
        o =
          (n(19),
          n(20),
          function (e) {
            var t = e.date.toLocaleString("en-Us", { month: "long" }),
              n = e.date.getFullYear(),
              a = e.date.toLocaleString("en-Us", { day: "2-digit" });
            return Object(r.jsxs)("div", {
              className: "expense-date",
              children: [
                Object(r.jsx)("div", {
                  className: "expense-date__month",
                  children: t,
                }),
                Object(r.jsx)("div", {
                  className: "expense-date__year",
                  children: n,
                }),
                Object(r.jsx)("div", {
                  className: "expense-date__day",
                  children: a,
                }),
              ],
            });
          }),
        d =
          (n(21),
          function (e) {
            return Object(r.jsxs)(u, {
              className: "expense-item",
              children: [
                Object(r.jsx)(o, { date: e.date }),
                Object(r.jsx)("div", {
                  className: "expense-item__description",
                  children: Object(r.jsx)("h2", { children: e.title }),
                }),
                Object(r.jsx)("div", {
                  className: "expense-item__price",
                  children: e.amount,
                }),
              ],
            });
          }),
        b = function (e) {
          return 0 === e.item.length
            ? Object(r.jsx)("h2", {
                className: "expenses-list__fallback ",
                children: "Found no expenses",
              })
            : Object(r.jsx)("ul", {
                className: "expenses-list",
                children: e.item.map(function (e) {
                  return Object(r.jsx)(
                    d,
                    { amount: e.amount, title: e.title, date: e.date },
                    e.id
                  );
                }),
              });
        },
        x = n(9),
        O =
          (n(22),
          n(23),
          function (e) {
            var t = "0%";
            return (
              e.maxValue > 0 &&
                (t = Math.round((100 * e.value) / e.maxValue) + "%"),
              Object(r.jsxs)("div", {
                className: "chart-bar",
                children: [
                  Object(r.jsx)("div", {
                    className: "chart-bar__inner",
                    children: Object(r.jsx)("div", {
                      className: "chart-bar__fill",
                      style: { height: t },
                    }),
                  }),
                  Object(r.jsx)("div", {
                    className: "chart-bar__label",
                    children: e.label,
                  }),
                ],
              })
            );
          }),
        m = function (e) {
          var t = e.dataPoints.map(function (e) {
              return e.value;
            }),
            n = Math.max.apply(Math, Object(l.a)(t));
          return Object(r.jsx)("div", {
            className: "chart",
            children: e.dataPoints.map(function (e) {
              return Object(r.jsx)(
                O,
                { value: e.value, maxValue: n, label: e.label },
                e.label
              );
            }),
          });
        },
        v = function (e) {
          var t,
            n = [
              { label: "Jan", value: 0 },
              { label: "Feb", value: 0 },
              { label: "Mar", value: 0 },
              { label: "Apr", value: 0 },
              { label: "May", value: 0 },
              { label: "Jun", value: 0 },
              { label: "Jul", value: 0 },
              { label: "Aug", value: 0 },
              { label: "Sep", value: 0 },
              { label: "Oct", value: 0 },
              { label: "Nov", value: 0 },
              { label: "Dec", value: 0 },
            ],
            a = Object(x.a)(e.expenses);
          try {
            for (a.s(); !(t = a.n()).done; ) {
              var c = t.value;
              n[c.date.getMonth()].value += c.amount;
            }
          } catch (l) {
            a.e(l);
          } finally {
            a.f();
          }
          return Object(r.jsx)("div", {
            children: Object(r.jsx)(m, { dataPoints: n }),
          });
        },
        h = function (e) {
          var t = Object(i.useState)("2021"),
            n = Object(s.a)(t, 2),
            a = n[0],
            c = n[1],
            l = e.item.filter(function (e) {
              return e.date.getFullYear().toString() === a;
            });
          return Object(r.jsx)("div", {
            children: Object(r.jsxs)(u, {
              className: "expenses",
              children: [
                Object(r.jsx)(v, { expenses: l }),
                Object(r.jsx)(j, {
                  selected: a,
                  onFiltered: function (e) {
                    c(e), console.log(e);
                  },
                }),
                Object(r.jsx)(b, { item: l }),
              ],
            }),
          });
        },
        p = n(7),
        f =
          (n(24),
          n(25),
          function (e) {
            var t = Object(i.useState)(""),
              n = Object(s.a)(t, 2),
              a = n[0],
              c = n[1],
              l = Object(i.useState)(""),
              u = Object(s.a)(l, 2),
              j = u[0],
              o = u[1],
              d = Object(i.useState)(""),
              b = Object(s.a)(d, 2),
              x = b[0],
              O = b[1];
            return Object(r.jsxs)("form", {
              onSubmit: function (t) {
                if ((t.preventDefault(), x && a && j)) {
                  var n = { title: a, amount: +j, date: new Date(x) };
                  e.onSubmitBtn(n), c(""), o(""), O("");
                }
              },
              children: [
                Object(r.jsxs)("div", {
                  className: "new-expense__controls",
                  children: [
                    Object(r.jsxs)("div", {
                      className: "new-expense__control",
                      children: [
                        Object(r.jsx)("label", {
                          htmlFor: "",
                          children: "Title",
                        }),
                        Object(r.jsx)("input", {
                          type: "text",
                          value: a,
                          onChange: function (e) {
                            c(e.target.value);
                          },
                        }),
                      ],
                    }),
                    Object(r.jsxs)("div", {
                      className: "new-expense__control",
                      children: [
                        Object(r.jsx)("label", {
                          htmlFor: "",
                          children: "Amount",
                        }),
                        Object(r.jsx)("input", {
                          value: j,
                          type: "number",
                          min: "0.01",
                          step: "0.01",
                          onChange: function (e) {
                            o(e.target.value);
                          },
                        }),
                      ],
                    }),
                    Object(r.jsxs)("div", {
                      className: "new-expense__control",
                      children: [
                        Object(r.jsx)("label", {
                          htmlFor: "",
                          children: "Date",
                        }),
                        Object(r.jsx)("input", {
                          value: x,
                          type: "date",
                          max: "2025-09-20",
                          min: "2019-04-22",
                          onChange: function (e) {
                            O(e.target.value);
                          },
                        }),
                      ],
                    }),
                  ],
                }),
                Object(r.jsx)("div", {
                  className: "new-expense__actions",
                  children: Object(r.jsx)("button", {
                    type: "submit",
                    children: "submit",
                  }),
                }),
              ],
            });
          }),
        _ = function (e) {
          return Object(r.jsx)("div", {
            className: "new-expense",
            children: Object(r.jsx)(f, {
              onSubmitBtn: function (t) {
                var n = Object(p.a)(
                  Object(p.a)({}, t),
                  {},
                  { id: Math.random().toString() }
                );
                e.onAddExspense(n);
              },
            }),
          });
        },
        N = [
          {
            id: "e1",
            title: "Toilet Paper",
            amount: 94.12,
            date: new Date(2020, 7, 14),
          },
          {
            id: "e2",
            title: "New TV",
            amount: 799.49,
            date: new Date(2021, 2, 12),
          },
          {
            id: "e3",
            title: "Car Insurance",
            amount: 294.67,
            date: new Date(2021, 2, 28),
          },
          {
            id: "e4",
            title: "New Desk (Wooden)",
            amount: 450,
            date: new Date(2021, 5, 12),
          },
        ];
      var g = function () {
        var e = Object(i.useState)(N),
          t = Object(s.a)(e, 2),
          n = t[0],
          a = t[1];
        return Object(r.jsxs)("div", {
          children: [
            Object(r.jsx)(_, {
              onAddExspense: function (e) {
                a(function (t) {
                  return [e].concat(Object(l.a)(t));
                });
              },
            }),
            Object(r.jsx)(h, { item: n }),
          ],
        });
      };
      c.a.render(Object(r.jsx)(g, {}), document.getElementById("root"));
    },
  ],
  [[26, 1, 2]],
]);
//# sourceMappingURL=main.6cd11353.chunk.js.map
