(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{245:function(e,t,a){"use strict";a.r(t);a(261);var r=a(0),n=a.n(r),c=(a(237),a(248));var l=function(e){var t=e.cardTitle,a=e.cardSubtitle,r=e.link,c=e.demo,l=e.cardImage,i=null;return c&&(i=n.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"card-link"},"Demo")),n.a.createElement("div",{className:"col-lg-4"},n.a.createElement("div",{className:"card mx-3 my-5"},l?n.a.createElement("div",{class:"embed-responsive embed-responsive-16by9"},n.a.createElement("img",{src:l,className:"card-img-top fixed-top embed-responsive-item"})):null,n.a.createElement("div",{className:"card-body"},n.a.createElement("h2",{className:"card-title"},t),n.a.createElement("p",{className:"card-text"},a),n.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"card-link"},"Code"),i)))},i=a(252);a.d(t,"query",function(){return m});t.default=function(e){var t=e.data.allProjectsYaml.edges;return n.a.createElement("div",{className:"container-fluid"},n.a.createElement(c.a,null),n.a.createElement(i.Helmet,null,n.a.createElement("meta",{charSet:"utf-8"}),n.a.createElement("title",null,"Projects | Kaustubh")),n.a.createElement("div",{className:"row"},t.map(function(e){var t=e.node;return n.a.createElement(l,{cardTitle:t.title,cardImage:t.image,cardSubtitle:t.subtitle,link:t.link,key:t.id,demo:t.demo})})))};var m="3549006533"},248:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(253),l=a.n(c);function i(e){var t=e.children,a=e.to;return n.a.createElement(l.a,{cover:!0,bg:"#FF8A00",className:"nav-link",to:a,activeStyle:{color:"white"},style:{color:"grey"}},t)}function m(){return n.a.createElement("div",{className:"container my-3"},n.a.createElement("ul",{className:"nav justify-content-center"},n.a.createElement("li",{className:"nav-item mx-4"},n.a.createElement(i,{to:"/"},"Home")),n.a.createElement("li",{className:"nav-item mx-4"},n.a.createElement(i,{to:"/projects"},"Projects")),n.a.createElement("li",{className:"nav-item mx-4"},n.a.createElement(i,{to:"/work-experience"},"Experience"))))}a.d(t,"a",function(){return m})},261:function(e,t,a){"use strict";a(305)("link",function(e){return function(t){return e(this,"a","href",t)}})},305:function(e,t,a){var r=a(1),n=a(11),c=a(50),l=/"/g,i=function(e,t,a,r){var n=String(c(e)),i="<"+t;return""!==a&&(i+=" "+a+'="'+String(r).replace(l,"&quot;")+'"'),i+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(i),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}}}]);
//# sourceMappingURL=component---src-pages-projects-js-83647c92faa62fe68bc7.js.map