(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        22: function (e, t, a) {
            e.exports = a(43)
        },
        27: function (e, t, a) {},
        28: function (e, t, a) {},
        29: function (e, t, a) {},
        38: function (e, t, a) {
            e.exports = a.p + "sathish-movies/static/media/welcome.7e5435fe.png"
        },
        39: function (e, t, a) {},
        40: function (e, t, a) {
            e.exports = a.p + "sathish-movies/static/media/mickey.71c11d61.png"
        },
        41: function (e, t) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAIVBMVEXy8vLZ2dna2tre3t7h4eHw8PD09PTs7Ozm5ubj4+Pp6emhOneKAAAD3ElEQVR4nO3b2XKjMBBGYRYjlvd/4GERkpCMaewptZg531WccioNRp1fDakqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANUa7gC+NvXlg6aav63aoHle6edWLV/+wwrum3rSPKtwMtux6fFTdVbvX3dlvPONK7+voMjHD8IDOaMa97mkvtlkXaeml76uytq/NtL5qhq7k0m2Vwaq0bXHtjOVeL8avSltjV3vNWOpJ91W224Xh26L99lTiST9WuaxG/wH4k17eIjVNVOPQx2Vvn0VZTd28rfKtohap7x0CbTmdsbuu9njSy1ikce8QmDujdtVVEKmSJnKugLQbRKpubD4VGxjU6z5EKlP1spPuf1ztAI6RyphO0F5ee4wZtTrjp0h1rg9ijE5nNMlGR9AWG7e52F7P8SU3V2W7H4igLbpVmRx0Lu83Olf2CyPZ3eWr21VpF5gsrGxvfnPQucoOq1w3ZdKwsmwmkt1dvrqjKucFJit7fbM73dlnLncj1Ynsq/J+pHqnvf5Nf9mNJPWB6qr8XqPXvO9UOcQf0iv7X3nfxwZpgF2q7I9dKPfIPIxUxvTCxt2v2TU46U3equNIdSzmlI1Uxl9j2bcQPlJF8e6Tx0Yq+8OKkcp99Ekt5/xGJznoXGX/tNHxH0320+0u0Ncep6/Lng9ym9cmB51NGKmWMbGRhpV26ky6u8slqnIZE4vDSjO6051//pNU+VXGIlIJ674zOz6XPVJ14hz1kV6kuiNdEnmrDpv3JB7Bzr2jj96sGalMNwk7yTD3+OrwZt1INZcu2vhsPxrMa/Uilbsd/x9Eqq6ASBXOsS+4eW0Bkeqb2XEJkWq0ATa+0f32fNu73MnuLp8mLkYYVtYnDsqYHW+jbPH8pxnc5iL/+CHuHe1X0838q/J/ilSJp86O9SLVb/Qi1XjjxFdxZsw/O95/c1PJH394zX27O4yaNWfHy78GyKbHa5XhmxvFSLW9NpLb8W8POquHRqrKLTBXi3x2rBmplgtjva3wqNmx/f3zAruz0dnntX5grlH1WoE/X9dlL9fF8viD4qpMiG90L48/RK1Ite47jwy6L7SrnsmfGPT0nx2slkU63R3NlvCMaeU7o1T+SHVKmlNWRf0H2+ld7j5+4iB7pLpikjFxvc5roycOiliVEZPsDwYTL4BCVmXERJuJPcZoRiqhcJGWEqlk/KbMVelWpWph17bVWMBG5765M6YbHf1IJeDibrK7ewbFZ6l+4i6T7Lfjf7T/ySwoUsnY+FJUpBJa4ot2DV964NkGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/jj9cXSDEl6hGSAAAAABJRU5ErkJggg=="
        },
        42: function (e, t, a) {
            e.exports = a.p + "sathish-movies/static/media/no-result.135b6967.png"
        },
        43: function (e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                l = a.n(n),
                i = a(19),
                o = a.n(i),
                s = (a(27), a(6)),
                c = a(7),
                r = a(9),
                m = a(8),
                u = a(10),
                h = (a(28), a(12)),
                v = a(5),
                d = (a(29), function (e) {
                    function t(e) {
                        var a;
                        return Object(s.a)(this, t), a = Object(r.a)(this, Object(m.a)(t).call(this, e)), localStorage.getItem("visited") > 0 ? localStorage.setItem("visited", JSON.parse(localStorage.getItem("visited")) + 1) : localStorage.setItem("visited", 1), a.state = {
                            showRedirection: !1,
                            visited: localStorage.getItem("visited")
                        }, a
                    }
                    return Object(u.a)(t, e), Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: function () {}
                    }, {
                        key: "showRedirection",
                        value: function () {
                            this.setState({
                                showRedirection: !0
                            })
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this;
                            return l.a.createElement("div", {
                                className: "New"
                            }, l.a.createElement("div", {
                                className: "welcome-head"
                            }, l.a.createElement("h1", {
                                className: "app-head"
                            }, "Sathish cinemas welcomes you"), l.a.createElement("p", null, "Search your favourite movies and get detailed information"), this.state.showRedirection ? null : l.a.createElement("button", {
                                onClick: function (t) {
                                    return e.showRedirection(t)
                                },
                                className: "app-button"
                            }, "Call Mickey to go")), this.state.showRedirection ? l.a.createElement("div", {
                                className: "redirection"
                            }, l.a.createElement("button", {
                                className: "app-button"
                            }, l.a.createElement(h.b, {
                                to: "/home"
                            }, "Click here")), l.a.createElement("img", {
                                src: a(38),
                                alt: "Welcome"
                            })) : null, this.state.visited > 1 ? l.a.createElement(v.a, {
                                to: "/home"
                            }) : null)
                        }
                    }]), t
                }(l.a.Component)),
                p = (a(39), function (e) {
                    function t() {
                        var e;
                        return Object(s.a)(this, t), (e = Object(r.a)(this, Object(m.a)(t).call(this))).state = {
                            movie: [],
                            inputVal: "",
                            notfound: !1,
                            showLoader: "",
                            hide: "",
                            rating: ""
                        }, e
                    }
                    return Object(u.a)(t, e), Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: function () {
                            this.nameInput.focus()
                        }
                    }, {
                        key: "getMovie",
                        value: function (e) {
                            var t = this;
                            this.setState({
                                showLoader: "show"
                            }), fetch("https://www.omdbapi.com/?t=" + this.state.inputVal + "&apikey=BanMePlz").then(function (e) {
                                return e.json()
                            }).then(function (e) {
                                var a = "False" === e.Response;
                                t.setState({
                                    movie: e,
                                    notfound: a,
                                    showLoader: "",
                                    hide: "hide"
                                }), t.state.movie.Error || t.setState({
                                    rating: t.state.movie.Ratings[0].Value
                                })
                            }).catch(function (e) {
                                console.log(e)
                            }), e.preventDefault()
                        }
                    }, {
                        key: "updateInputVal",
                        value: function (e) {
                            this.setState({
                                inputVal: e.target.value
                            }), e.preventDefault()
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this;
                            return l.a.createElement("div", {
                                className: "App"
                            }, l.a.createElement("img", {
                                className: "header-img " + this.state.hide,
                                src: a(40),
                                alt: "Header img"
                            }), l.a.createElement("h2", {
                                className: "app-head"
                            }, "Sathish cinemas"), l.a.createElement("form", null, l.a.createElement("input", {
                                placeholder: "Your search goes here",
                                type: "text",
                                className: "search-bar",
                                ref: function (t) {
                                    e.nameInput = t
                                },
                                value: this.state.inputVal,
                                onChange: function (t) {
                                    return e.updateInputVal(t)
                                }
                            }), l.a.createElement("button", {
                                className: "app-button",
                                onClick: function (t) {
                                    return e.getMovie(t)
                                }
                            }, l.a.createElement("i", {
                                className: "fas fa-search"
                            }))), l.a.createElement("div", {
                                className: "loaderRoot " + this.state.showLoader
                            }, l.a.createElement("div", {
                                className: "showbox"
                            }, l.a.createElement("div", {
                                className: "loader"
                            }, l.a.createElement("svg", {
                                className: "circular",
                                viewBox: "25 25 50 50"
                            }, l.a.createElement("circle", {
                                className: "path",
                                cx: "50",
                                cy: "50",
                                r: "20",
                                fill: "none",
                                strokeWidth: "2",
                                strokeMiterlimit: "10"
                            }))))), this.state.movie.Title ? l.a.createElement("div", {
                                className: "movie-details"
                            }, l.a.createElement("div", {
                                className: "title"
                            }, this.state.movie.Title), l.a.createElement("div", {
                                className: "movie-desc"
                            }, l.a.createElement("div", {
                                className: "img-container"
                            }, l.a.createElement("img", {
                                src: this.state.movie.Poster,
                                onError: function (e) {
                                    e.target.onerror = null, e.target.src = a(41)
                                },
                                alt: "Movie poster"
                            })), l.a.createElement("div", {
                                className: "desc"
                            }, this.state.movie.Plot ? l.a.createElement("div", null, l.a.createElement("p", null, "Movie Overview:"), this.state.movie.Plot) : null, l.a.createElement("div", {
                                className: "column-data"
                            }, l.a.createElement("p", null, "Language:"), l.a.createElement("span", null, this.state.movie.Language), l.a.createElement("p", null, "Runtime:"), l.a.createElement("span", null, this.state.movie.Runtime)), this.state.movie.Genre ? l.a.createElement("div", null, l.a.createElement("p", null, "Genre:"), this.state.movie.Genre) : null, this.state.movie.Actors ? l.a.createElement("div", null, l.a.createElement("p", null, "Actors:"), this.state.movie.Actors) : null, this.state.movie.Writer ? l.a.createElement("div", null, l.a.createElement("p", null, "Director:"), this.state.movie.Writer) : null, this.state.rating ? l.a.createElement("div", null, l.a.createElement("p", null, "Rating:"), this.state.rating) : null, this.state.movie.Released ? l.a.createElement("div", null, l.a.createElement("p", null, "Release Date:"), this.state.movie.Released) : null))) : null, this.state.notfound ? l.a.createElement("img", {
                                className: "no-movie",
                                src: a(42),
                                alt: "No Movie Found"
                            }) : null)
                        }
                    }]), t
                }(l.a.Component)),
                A = function (e) {
                    function t(e) {
                        return Object(s.a)(this, t), Object(r.a)(this, Object(m.a)(t).call(this, e))
                    }
                    return Object(u.a)(t, e), Object(c.a)(t, [{
                        key: "render",
                        value: function () {
                            return l.a.createElement(h.a, null, l.a.createElement(v.d, null, l.a.createElement(v.b, {
                                exact: !0,
                                path: "/",
                                component: d
                            }), l.a.createElement(v.b, {
                                exact: !0,
                                path: "/home",
                                component: p
                            })))
                        }
                    }]), t
                }(l.a.Component);
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            o.a.render(l.a.createElement(A, null), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then(function (e) {
                e.unregister()
            })
        }
    },
    [
        [22, 1, 2]
    ]
]);
//# sourceMappingURL=main.0d60491d.chunk.js.map