(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{eWDE:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return g}));a("a1Th"),a("Btvt");var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),i=a("vrFN"),o=(a("f3/d"),a("0mN4"),a("7HQ6")),c=a("9eSz"),m=a.n(c),s=a("p3AD"),p=function(){var e=o.data,t=e.site.siteMetadata,a=t.author,n=t.social;return r.a.createElement("div",{style:{display:"flex",marginBottom:Object(s.a)(2.5)}},r.a.createElement(m.a,{fixed:e.avatar.childImageSharp.fixed,alt:a.name,style:{marginRight:Object(s.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),r.a.createElement("p",null,"Written by ",r.a.createElement("strong",null,a.name)," ",a.summary," ",r.a.createElement("a",{href:"https://twitter.com/"+n.twitter},"You should follow him on Twitter")))},u=(a("91GP"),function(e){var t,a=e.location,n=e.title,i=e.children;return t="/"===a.pathname?r.a.createElement("h1",{style:Object.assign({},Object(s.b)(1.5),{marginBottom:Object(s.a)(1.5),marginTop:0})},r.a.createElement(l.Link,{style:{boxShadow:"none",color:"inherit"},to:"/"},n)):r.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},r.a.createElement(l.Link,{style:{boxShadow:"none",color:"inherit"},to:"/"},n)),r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(24),padding:Object(s.a)(1.5)+" "+Object(s.a)(3/4)}},r.a.createElement("header",null,t),r.a.createElement("main",null,i),r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))});var d=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).getSrc=function(e){var t=JSON.parse(e.json_metadata).image;return t?t[0]:"noimage.png"},t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this,t=this.props.data,a=t.site.siteMetadata.title,n=t.allHiveArticle.edges,o=this.props.pageContext,c=o.currentPage,m=1===c,d=c===o.numPages,g=c-1==1?"/":(c-1).toString(),h=(c+1).toString();return r.a.createElement(u,{location:this.props.location,title:a},r.a.createElement(i.a,{title:a,keywords:["blog","gatsby","javascript","react"]}),r.a.createElement(p,null),n.map((function(t){var a=t.node,n=a.title||a.permlink;return r.a.createElement("article",{key:a.permlink},r.a.createElement("header",null,r.a.createElement("h3",{style:{marginBottom:Object(s.a)(1/4)}},r.a.createElement(l.Link,{style:{boxShadow:"none"},to:a.permlink},n)),r.a.createElement("small",null,a.created)),r.a.createElement("section",null,r.a.createElement("img",{className:"img-body",srcSet:e.getSrc(a),alt:a.permlink}),r.a.createElement("p",{className:"hive-body",dangerouslySetInnerHTML:{__html:a.body}})))})),r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",listStyle:"none",padding:0}},!m&&r.a.createElement(l.Link,{to:g,rel:"prev"},"← Previous Page"),r.a.createElement("li",{key:"pagination-number"+c,style:{margin:0}},c),!d&&r.a.createElement(l.Link,{to:h,rel:"next"},"Next Page →")))},n}(r.a.Component),g=(t.default=d,"1768858745")}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-828f88da99911a733546.js.map