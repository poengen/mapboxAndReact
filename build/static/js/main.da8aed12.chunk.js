(this.webpackJsonpmapboxandreact=this.webpackJsonpmapboxandreact||[]).push([[0],{14:function(t,e,a){"use strict";a.r(e);var n=a(1),o=a(2),i=a(4),s=a(3),c=a(5),r=a(0),l=a.n(r),m=a(8),p=a.n(m),u=a(6),h=a.n(u);h.a.accessToken="pk.eyJ1IjoicG9lbmdlbiIsImEiOiJjazQyaHBpbTgwMGhpM2txaXFjaGkxZHZhIn0.jNn4DBU-6Og93-B_NifxKA";var v=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(i.a)(this,Object(s.a)(e).call(this,t))).state={location:t.location,lng:7.4,lat:62.42,zoom:10,map:null},a}return Object(c.a)(e,t),Object(o.a)(e,[{key:"componentDidUpdate",value:function(){"B"===this.props.location&&(console.log("B\xf8st\xf8len"),this.state.map.setCenter([7.4,62.42]),this.state.map.setZoom(10)),"T"===this.props.location&&(console.log("Torshov"),this.state.map.setCenter([10.757933,59.911491]),this.state.map.setZoom(11.6))}},{key:"componentDidMount",value:function(){this.setState({map:new h.a.Map({container:this.mapContainer,style:"mapbox://styles/mapbox/streets-v11",center:[this.state.lng,this.state.lat],zoom:this.state.zoom})})}},{key:"render",value:function(){var t=this;return l.a.createElement("div",null,l.a.createElement("div",{ref:function(e){return t.mapContainer=e},className:"mapContainer"}))}}]),e}(l.a.Component),b=function(t){function e(){var t,a;Object(n.a)(this,e);for(var o=arguments.length,c=new Array(o),r=0;r<o;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(c)))).state={location:"B"},a}return Object(c.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"ui vertical inverted menu"},l.a.createElement("div",{className:"link item",onClick:function(){t.setState({location:"B"})}},"B\xf8st\xf8len"),l.a.createElement("div",{className:"link item",onClick:function(){t.setState({location:"T"})}},"Torshov")),l.a.createElement("div",{className:"pusher"},l.a.createElement(v,{location:this.state.location})))}}]),e}(l.a.Component);p.a.render(l.a.createElement(b,null),document.querySelector("#app"))},9:function(t,e,a){t.exports=a(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.da8aed12.chunk.js.map