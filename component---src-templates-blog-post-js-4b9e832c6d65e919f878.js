(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{141:function(t,e,a){"use strict";a.r(e);a(33),a(165),a(48);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(166),s=a.n(c),l=a(144),u=a(168),p=a.n(u),d=(a(75),a(76),a(50),o.a.memo(function(t){var e=t.post,a=t.images,n=Object(i.useState)(e.customFields.values[0]),r=n[0],c=n[1],s=a.filter(function(t){return t.name==r}),l=s.length>0?s[0].src:a[0].src;return o.a.createElement("div",null,o.a.createElement("img",{src:l,width:"400px"}),o.a.createElement("h3",null,e.customFields.name),o.a.createElement("select",{id:e.customFields.name,onChange:function(t){return c(t.target.value)},value:r,style:{borderRadius:"5px",paddingRight:"20px",paddingBlockStart:"13px",paddingBlockEnd:"13px",marginRight:"15px"}},e.customFields.values.map(function(t){return o.a.createElement("option",{key:t},t)})),o.a.createElement("a",{style:{backgroundColor:"#212121",borderRadius:"5px",color:"#F5F5F5",fontWeight:"bold",paddingBottom:"15px",paddingTop:"15px",paddingRight:"35px",paddingLeft:"35px",fontSize:"24"},id:"buyButton",href:"#",className:"snipcart-add-item buyBtn","data-item-id":e.id,"data-item-price":e.price,"data-item-image":l,"data-item-name":e.title,"data-item-description":e.description,"data-item-custom1-name":e.customFields.name,"data-item-custom1-value":r,"data-item-url":"https://snipcart-react-gatsby.netlify.com/"+e.path},"Buy for ",e.price,"$"))})),m=a(148),f=a(146);a.d(e,"pageQuery",function(){return h});var g=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.markdownRemark,e=p()(this.props,"data.site.siteMetadata.title"),n=t.excerpt,r=this.props.pageContext,i=r.previous,c=r.next,u=t.frontmatter.image.map(function(e){return{name:e.name,src:a(159)("./pages"+t.frontmatter.path+e.src+".jpg")}});return o.a.createElement(m.a,{location:this.props.location,title:e},o.a.createElement(s.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:n}],title:t.frontmatter.title+" | "+e,link:[{href:"https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css",rel:"stylesheet",type:"text/css"}],script:[{type:"text/javascript",id:"snipcart","data-api-key":"YjdiNWIyOTUtZTIyMy00MWMwLTkwNDUtMzI1M2M2NTgxYjE0",src:"https://cdn.snipcart.com/scripts/2.0/snipcart.js"},{type:"text/javascript",src:"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"}]}),o.a.createElement("h1",null,t.frontmatter.title),o.a.createElement("p",{style:Object.assign({},Object(f.b)(-.2),{display:"block",marginBottom:Object(f.a)(1),marginTop:Object(f.a)(-1)})}),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),o.a.createElement(d,{post:t.frontmatter,images:u}),o.a.createElement("ul",{style:{marginTop:"45px",display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,i&&o.a.createElement(l.Link,{to:i.fields.slug,rel:"prev"},"← ",i.frontmatter.title)),o.a.createElement("li",null,c&&o.a.createElement(l.Link,{to:c.fields.slug,rel:"next"},c.frontmatter.title," →"))))},e}(o.a.Component),h=(e.default=g,"3680521524")},144:function(t,e,a){"use strict";a.r(e),a.d(e,"graphql",function(){return f}),a.d(e,"StaticQueryContext",function(){return d}),a.d(e,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(143),s=a.n(c);a.d(e,"Link",function(){return s.a}),a.d(e,"withPrefix",function(){return c.withPrefix}),a.d(e,"navigate",function(){return c.navigate}),a.d(e,"push",function(){return c.push}),a.d(e,"replace",function(){return c.replace}),a.d(e,"navigateTo",function(){return c.navigateTo});var l=a(145),u=a.n(l);a.d(e,"PageRenderer",function(){return u.a});var p=a(34);a.d(e,"parsePath",function(){return p.a});var d=r.a.createContext({}),m=function(t){return r.a.createElement(d.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(t,e,a){var n;t.exports=(n=a(147))&&n.default||n},146:function(t,e,a){"use strict";a.d(e,"a",function(){return s}),a.d(e,"b",function(){return l});var n=a(157),r=a.n(n),i=a(158),o=a.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var c=new r.a(o.a);var s=c.rhythm,l=c.scale},147:function(t,e,a){"use strict";a.r(e);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(49),s=a(2),l=function(t){var e=t.location,a=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=l},148:function(t,e,a){"use strict";a(33);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(144),s=a(146),l=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,a=e.location,n=e.title,r=e.children;return t="/gatsby-starter-blog/"===a.pathname?o.a.createElement("h1",{style:Object.assign({},Object(s.b)(1.5),{marginBottom:Object(s.a)(1.5),marginTop:0})},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(s.a)(-1)}},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(24),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)}},t,r,o.a.createElement("hr",{style:{marginBottom:Object(s.a)(1)}}),o.a.createElement("div",{style:{textAlign:"center"}},"Made with ",o.a.createElement("span",{style:{color:"red"}},"❤")," by ",o.a.createElement("a",{target:"_blank",href:"https://snipcart.com"},"Snipcart")))},e}(o.a.Component);e.a=l},159:function(t,e,a){var n={"./pages/bow-ties/blue-red.jpg":160,"./pages/bow-ties/white-blue.jpg":161,"./pages/bow-ties/white-gray.jpg":162,"./pages/dry-martini/dry-martini.jpg":163,"./pages/fireworks/fireworks.jpg":164};function r(t){var e=i(t);return a(e)}function i(t){var e=n[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}r.keys=function(){return Object.keys(n)},r.resolve=i,t.exports=r,r.id=159},160:function(t,e,a){t.exports=a.p+"static/blue-red-1afa4782a66a6562030782eb1dabda93.jpg"},161:function(t,e,a){t.exports=a.p+"static/white-blue-0f4624a37601be391c99f2d7c1e2bd5a.jpg"},162:function(t,e,a){t.exports=a.p+"static/white-gray-5160a1a58bf56cc27ce8f15df6d124a4.jpg"},163:function(t,e,a){t.exports=a.p+"static/dry-martini-26f53ee4a63d7eb1464228d2380f3a48.jpg"},164:function(t,e,a){t.exports=a.p+"static/fireworks-20597fcaeaac8def4a67a35c68fb8d41.jpg"},165:function(t,e,a){var n=a(25).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||a(16)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-4b9e832c6d65e919f878.js.map