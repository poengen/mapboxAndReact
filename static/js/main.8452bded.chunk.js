(this.webpackJsonpmapboxandreact=this.webpackJsonpmapboxandreact||[]).push([[0],{10:function(t,e){t.exports={id:"points",type:"symbol",source:{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[7.42,62.433]},properties:{title:"Hytta til P\xe5l",icon:"harbor"}}]}},layout:{"icon-image":"{icon}-15","text-field":"{title}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-offset":[0,.6],"text-anchor":"top"}}},11:function(t,e){t.exports={id:"torshovparken",type:"line",source:{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[10.76939,59.93402],[10.77359,59.93514],[10.77186,59.93628],[10.76862,59.93646],[10.76897,59.93503],[10.76841,59.93425],[10.76841,59.93425],[10.76936,59.93399]]}}},layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"#888","line-width":8}}},12:function(t,e,n){t.exports=n(18)},18:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(9),r=n.n(i),s=n(6),c=n.n(s),l=n(1),p=n(2),u=n(4),h=n(3),m=n(5),d=n(7),f=n.n(d),y=n(10),b=n(11);f.a.accessToken="pk.eyJ1IjoicG9lbmdlbiIsImEiOiJjazQyaHBpbTgwMGhpM2txaXFjaGkxZHZhIn0.jNn4DBU-6Og93-B_NifxKA";var j=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(u.a)(this,Object(h.a)(e).call(this,t))).state={location:t.location,lng:7.4,lat:62.42,zoom:10,map:null},n}return Object(m.a)(e,t),Object(p.a)(e,[{key:"componentDidUpdate",value:function(){"B"===this.props.location&&(this.state.map.setCenter([7.4,62.42]),this.state.map.setZoom(10)),"T"===this.props.location&&(this.state.map.setCenter([10.757933,59.911491]),this.state.map.setZoom(11.6)),this.props.point&&this.state.map.addLayer(y),this.props.route&&this.state.map.addLayer(b)}},{key:"componentDidMount",value:function(){this.setState({map:new f.a.Map({container:this.mapContainer,style:"mapbox://styles/mapbox/streets-v11",center:[this.state.lng,this.state.lat],zoom:this.state.zoom})})}},{key:"render",value:function(){var t=this;return o.a.createElement("div",null,o.a.createElement("div",{ref:function(e){return t.mapContainer=e},className:"mapContainer"}))}}]),e}(o.a.Component),v=function(t){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"link item",onClick:this.props.onClick},this.props.itemName))}}]),e}(o.a.Component),O=function(t){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"ui vertical inverted menu"},o.a.createElement(v,{itemName:"B\xf8st\xf8len",onClick:function(){t.props.onLocationChange("B")}}),o.a.createElement(v,{itemName:"Torshov",onClick:function(){t.props.onLocationChange("T")}}),o.a.createElement(v,{itemName:this.props.athlete,onClick:function(){t.props.onGetAthlete()}}),o.a.createElement(v,{itemName:"Get Route",onClick:function(){t.props.onGetRoute()}}),o.a.createElement(v,{itemName:"Get Point",onClick:function(){t.props.onGetPoint()}}))}}]),e}(o.a.Component),k=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(o)))).state={location:"B",athleteName:"getAthlete",point:!1,route:!1},n.handleLocationChange=function(t){n.setState({location:t})},n.onGetAthlete=function(){return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:n.setState({athleteName:"P\xe5l Oskar (Mock)"});case 1:case"end":return t.stop()}}))},n.onGetRoute=function(){return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:n.state.route?alert("route already plotted."):n.setState({route:!0});case 1:case"end":return t.stop()}}))},n.onGetPoint=function(){return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:n.state.point?alert("point already plotted."):n.setState({point:!0});case 1:case"end":return t.stop()}}))},n}return Object(m.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(O,{onLocationChange:this.handleLocationChange,athlete:this.state.athleteName,onGetAthlete:this.onGetAthlete,onGetRoute:this.onGetRoute,onGetPoint:this.onGetPoint}),o.a.createElement(j,{location:this.state.location,point:this.state.point,route:this.state.route}))}}]),e}(o.a.Component);r.a.render(o.a.createElement(k,null),document.querySelector("#app"))}},[[12,1,2]]]);
//# sourceMappingURL=main.8452bded.chunk.js.map