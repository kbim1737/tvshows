(this.webpackJsonptv_show=this.webpackJsonptv_show||[]).push([[0],{16:function(e,a,t){e.exports=t(30)},21:function(e,a,t){},22:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},23:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(9),c=t.n(o),i=(t(21),t(22),t(10)),s=t(11),l=t(5),h=t(15),u=t(12),d=t(7),m=t(14),v=t(13),f=(t(23),function(e){Object(h.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).state={wasSearched:!1,inputValue:"",searchResult:[],isLoaded:!1},e.handleChange=e.handleChange.bind(Object(l.a)(e)),e.handleSearch=e.handleSearch.bind(Object(l.a)(e)),e}return Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState({inputValue:e.target.value})}},{key:"handleSearch",value:function(){var e=this;this.setState({wasSearched:!this.state.wasSearched});var a=this.state.inputValue.replace(" ","+");fetch("https://api.themoviedb.org/3/movie/550?api_key=a04e46bcb6a28479586d4331d7049f7f&query="+a).then((function(e){return e.json()})).then((function(a){e.setState({isLoaded:!0,searchResult:a.results})})),console.log(this.state.searchResult)}},{key:"render",value:function(){var e=this.state.wasSearched?"topSearch":"middleSearch";return r.a.createElement("div",{className:"Main-div"},r.a.createElement("div",{className:e},r.a.createElement(d.a,{className:"mb-3"},r.a.createElement(m.a,{placeholder:"What are you looking for?","aria-label":"What are you looking for?","aria-describedby":"basic-addon2",onChange:this.handleChange}),r.a.createElement(d.a.Append,null,r.a.createElement(v.a,{onClick:this.handleSearch,variant:"outline-secondary"},"Search")))))}}]),t}(r.a.Component));t(29);var p=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.5c442286.chunk.js.map