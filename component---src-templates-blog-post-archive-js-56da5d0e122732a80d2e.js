(self.webpackChunkgatsby_starter_wordpress_blog=self.webpackChunkgatsby_starter_wordpress_blog||[]).push([[701],{2329:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return te}});var n=a(3552),s=a(7294),r=a(5444),i=a(3310),l=a(1496),c=a(2122),o=a(9756),m=a(5900),d=a.n(m),u=a(3033),p=function(e){var t=e.className,a=e.cssModule,n=e.color,r=e.innerRef,i=e.pill,l=e.tag,m=(0,o.Z)(e,["className","cssModule","color","innerRef","pill","tag"]),p=(0,u.mx)(d()(t,"badge","badge-"+n,!!i&&"badge-pill"),a);return m.href&&"span"===l&&(l="a"),s.createElement(l,(0,c.Z)({},m,{className:p,ref:r}))};p.defaultProps={color:"secondary",pill:!1,tag:"span"};var h=p,E=a(3349),g=a(5697),f=a.n(g),v=a(7449),b=a(5999),N=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={startAnimation:!1},a.onEnter=a.onEnter.bind((0,E.Z)(a)),a.onEntering=a.onEntering.bind((0,E.Z)(a)),a.onExit=a.onExit.bind((0,E.Z)(a)),a.onExiting=a.onExiting.bind((0,E.Z)(a)),a.onExited=a.onExited.bind((0,E.Z)(a)),a}(0,n.Z)(t,e);var a=t.prototype;return a.onEnter=function(e,t){this.setState({startAnimation:!1}),this.props.onEnter(e,t)},a.onEntering=function(e,t){var a=e.offsetHeight;return this.setState({startAnimation:!0}),this.props.onEntering(e,t),a},a.onExit=function(e){this.setState({startAnimation:!1}),this.props.onExit(e)},a.onExiting=function(e){this.setState({startAnimation:!0}),e.dispatchEvent(new CustomEvent("slide.bs.carousel")),this.props.onExiting(e)},a.onExited=function(e){e.dispatchEvent(new CustomEvent("slid.bs.carousel")),this.props.onExited(e)},a.render=function(){var e=this,t=this.props,a=t.in,n=t.children,r=t.cssModule,i=t.slide,l=t.tag,m=t.className,p=(0,o.Z)(t,["in","children","cssModule","slide","tag","className"]);return s.createElement(b.Transition,(0,c.Z)({},p,{enter:i,exit:i,in:a,onEnter:this.onEnter,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(t){var a=e.context.direction,i=t===u.E5.ENTERED||t===u.E5.EXITING,c=(t===u.E5.ENTERING||t===u.E5.EXITING)&&e.state.startAnimation&&("right"===a?"carousel-item-left":"carousel-item-right"),o=t===u.E5.ENTERING&&("right"===a?"carousel-item-next":"carousel-item-prev"),p=(0,u.mx)(d()(m,"carousel-item",i&&"active",c,o),r);return s.createElement(l,{className:p},n)}))},t}(s.Component);N.defaultProps=(0,v.Z)({},b.Transition.defaultProps,{tag:"div",timeout:u.wF.Carousel,slide:!0}),N.contextTypes={direction:f().string};var x=N,y=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleKeyPress=a.handleKeyPress.bind((0,E.Z)(a)),a.renderItems=a.renderItems.bind((0,E.Z)(a)),a.hoverStart=a.hoverStart.bind((0,E.Z)(a)),a.hoverEnd=a.hoverEnd.bind((0,E.Z)(a)),a.handleTouchStart=a.handleTouchStart.bind((0,E.Z)(a)),a.handleTouchEnd=a.handleTouchEnd.bind((0,E.Z)(a)),a.touchStartX=0,a.touchStartY=0,a.state={activeIndex:a.props.activeIndex,direction:"right",indicatorClicked:!1},a}(0,n.Z)(t,e);var a=t.prototype;return a.getChildContext=function(){return{direction:this.state.direction}},a.componentDidMount=function(){"carousel"===this.props.ride&&this.setInterval(),document.addEventListener("keyup",this.handleKeyPress)},t.getDerivedStateFromProps=function(e,t){var a=null,n=t.activeIndex,s=t.direction,r=t.indicatorClicked;return e.activeIndex!==n&&(e.activeIndex===n+1?s="right":e.activeIndex===n-1?s="left":e.activeIndex<n?s=r?"left":"right":e.activeIndex!==n&&(s=r?"right":"left"),a={activeIndex:e.activeIndex,direction:s,indicatorClicked:!1}),a},a.componentDidUpdate=function(e,t){t.activeIndex!==this.state.activeIndex&&this.setInterval(this.props)},a.componentWillUnmount=function(){this.clearInterval(),document.removeEventListener("keyup",this.handleKeyPress)},a.setInterval=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){void 0===e&&(e=this.props),this.clearInterval(),e.interval&&(this.cycleInterval=setInterval((function(){e.next()}),parseInt(e.interval,10)))})),a.clearInterval=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){clearInterval(this.cycleInterval)})),a.hoverStart=function(){var e;("hover"===this.props.pause&&this.clearInterval(),this.props.mouseEnter)&&(e=this.props).mouseEnter.apply(e,arguments)},a.hoverEnd=function(){var e;("hover"===this.props.pause&&this.setInterval(),this.props.mouseLeave)&&(e=this.props).mouseLeave.apply(e,arguments)},a.handleKeyPress=function(e){this.props.keyboard&&(37===e.keyCode?this.props.previous():39===e.keyCode&&this.props.next())},a.handleTouchStart=function(e){this.props.enableTouch&&(this.touchStartX=e.changedTouches[0].screenX,this.touchStartY=e.changedTouches[0].screenY)},a.handleTouchEnd=function(e){if(this.props.enableTouch){var t=e.changedTouches[0].screenX,a=e.changedTouches[0].screenY,n=Math.abs(this.touchStartX-t);n<Math.abs(this.touchStartY-a)||n<40||(t<this.touchStartX?this.props.next():this.props.previous())}},a.renderItems=function(e,t){var a=this,n=this.props.slide;return s.createElement("div",{className:t},e.map((function(e,t){var r=t===a.state.activeIndex;return s.cloneElement(e,{in:r,slide:n})})))},a.render=function(){var e=this,t=this.props,a=t.cssModule,n=t.slide,r=t.className,i=(0,u.mx)(d()(r,"carousel",n&&"slide"),a),l=(0,u.mx)(d()("carousel-inner"),a),c=this.props.children.filter((function(e){return null!=e&&"boolean"!=typeof e}));if(c.every((function(e){return e.type===x})))return s.createElement("div",{className:i,onMouseEnter:this.hoverStart,onMouseLeave:this.hoverEnd},this.renderItems(c,l));if(c[0]instanceof Array){var o=c[0],m=c[1],p=c[2];return s.createElement("div",{className:i,onMouseEnter:this.hoverStart,onMouseLeave:this.hoverEnd},this.renderItems(o,l),m,p)}var h=c[0],E=s.cloneElement(h,{onClickHandler:function(t){"function"==typeof h.props.onClickHandler&&e.setState({indicatorClicked:!0},(function(){return h.props.onClickHandler(t)}))}}),g=c[1],f=c[2],v=c[3];return s.createElement("div",{className:i,onMouseEnter:this.hoverStart,onMouseLeave:this.hoverEnd,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd},E,this.renderItems(g,l),f,v)},t}(s.Component);y.defaultProps={interval:5e3,pause:"hover",keyboard:!0,slide:!0,enableTouch:!0},y.childContextTypes={direction:f().string};var w=y,k=function(e){var t=e.direction,a=e.onClickHandler,n=e.cssModule,r=e.directionText,i=e.className,l=(0,u.mx)(d()(i,"carousel-control-"+t),n),c=(0,u.mx)(d()("carousel-control-"+t+"-icon"),n),o=(0,u.mx)(d()("sr-only"),n);return s.createElement("a",{className:l,style:{cursor:"pointer"},role:"button",tabIndex:"0",onClick:function(e){e.preventDefault(),a()}},s.createElement("span",{className:c,"aria-hidden":"true"}),s.createElement("span",{className:o},r||t))},A=function(e){var t=e.items,a=e.activeIndex,n=e.cssModule,r=e.onClickHandler,i=e.className,l=(0,u.mx)(d()(i,"carousel-indicators"),n),c=t.map((function(e,t){var i=(0,u.mx)(d()({active:a===t}),n);return s.createElement("li",{key:""+(e.key||Object.values(e).join("")),onClick:function(e){e.preventDefault(),r(t)},className:i})}));return s.createElement("ol",{className:l},c)},I=function(e){var t=e.captionHeader,a=e.captionText,n=e.cssModule,r=e.className,i=(0,u.mx)(d()(r,"carousel-caption","d-none","d-md-block"),n);return s.createElement("div",{className:i},s.createElement("h3",null,t),s.createElement("p",null,a))},Z=function(e){function t(t){var a;return(a=e.call(this,t)||this).animating=!1,a.state={activeIndex:t.defaultActiveIndex||0},a.next=a.next.bind((0,E.Z)(a)),a.previous=a.previous.bind((0,E.Z)(a)),a.goToIndex=a.goToIndex.bind((0,E.Z)(a)),a.onExiting=a.onExiting.bind((0,E.Z)(a)),a.onExited=a.onExited.bind((0,E.Z)(a)),a}(0,n.Z)(t,e);var a=t.prototype;return a.onExiting=function(){this.animating=!0},a.onExited=function(){this.animating=!1},a.next=function(){if(!this.animating){var e=this.state.activeIndex===this.props.items.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:e})}},a.previous=function(){if(!this.animating){var e=0===this.state.activeIndex?this.props.items.length-1:this.state.activeIndex-1;this.setState({activeIndex:e})}},a.goToIndex=function(e){this.animating||this.setState({activeIndex:e})},a.render=function(){var e=this,t=this.props,a=(t.defaultActiveIndex,t.autoPlay),n=t.indicators,r=t.controls,i=t.items,l=t.goToIndex,m=(0,o.Z)(t,["defaultActiveIndex","autoPlay","indicators","controls","items","goToIndex"]),d=this.state.activeIndex,u=i.map((function(t){var a=t.key||t.src;return s.createElement(x,{onExiting:e.onExiting,onExited:e.onExited,key:a},s.createElement("img",{className:"d-block w-100",src:t.src,alt:t.altText}),s.createElement(I,{captionText:t.caption,captionHeader:t.header||t.caption}))}));return s.createElement(w,(0,c.Z)({activeIndex:d,next:this.next,previous:this.previous,ride:a?"carousel":void 0},m),n&&s.createElement(A,{items:i,activeIndex:m.activeIndex||d,onClickHandler:l||this.goToIndex}),u,r&&s.createElement(k,{direction:"prev",directionText:"Previous",onClickHandler:m.previous||this.previous}),r&&s.createElement(k,{direction:"next",directionText:"Next",onClickHandler:m.next||this.next}))},t}(s.Component);Z.defaultProps={controls:!0,indicators:!0,autoPlay:!0};var S=Z,P=function(e){var t=e.className,a=e.cssModule,n=e.top,r=e.bottom,i=e.tag,l=(0,o.Z)(e,["className","cssModule","top","bottom","tag"]),m="card-img";n&&(m="card-img-top"),r&&(m="card-img-bottom");var p=(0,u.mx)(d()(t,m),a);return s.createElement(i,(0,c.Z)({},l,{className:p}))};P.defaultProps={tag:"img"};var M=P,T=a(6921),C=a(6667),j=a(7798),L=a(6277),F=a(9527),B=a(9092),D=a(9742),R=a(6555),H=a(6179),Y=(a(7727),a(3925)),K=a(2340),X=a(3973),G=a(6849),z=a(6995),W=a(4130),O=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleModal=function(){return a.setState({modal:!a.state.modal})},a.onChangeInputNama=function(e){return a.setState({nama:e.target.value})},a.onChangeInputEmail=function(e){return a.setState({email:e.target.value})},a.onChangeInputPesan=function(e){return a.setState({pesan:e.target.value})},a.onSubmit=function(e){a.state.submitLoading||(a.setState({submitLoading:!a.state.submitLoading}),e.preventDefault(),fetch("https://script.google.com/macros/s/AKfycbzgWHhvkfDM4JwhYGqFRWC6eUNSZidk9i4fTiDxmwL2aeXrkWmezcX25lEaX0cz8ybfNw/exec",{method:"POST",body:new FormData(document.forms["form-guest-book"])}).then((function(e){a.toggleModal()})).catch((function(e){return alert("Proses penyimpanan gagal, terdapat gangguan. Yuk laporkan issue ini di github kami untuk perkembangan website ini. terima kasih")})).finally((function(){return a.setState({submitLoading:!a.state.submitLoading})})))},a.state={nama:"",email:"",pesan:"",namaFocused:!1,emailFocused:!1,pesanFocused:!1,modal:!1,submitLoading:!1},a}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this;return s.createElement(s.Fragment,null,s.createElement(W.Z,{title:"Berhasil",content:"Kunjungan anda berhasil kami catat pada sistem database kami. terima kasih banyak sahabat. Salam Pergerakan...",isOpen:this.state.modal,toggleModal:this.toggleModal}),s.createElement("section",{className:"section section-lg pt-lg-0 section-contact-us"},s.createElement(T.Z,null,s.createElement(C.Z,{className:"justify-content-center "+(this.props.isTopFloat?"mt--300 ":"")},s.createElement(j.Z,{lg:"8"},s.createElement(F.Z,{className:"bg-gradient-secondary shadow"},s.createElement(B.Z,{className:"p-lg-5"},s.createElement("form",{name:"form-guest-book",onSubmit:this.onSubmit},s.createElement("h4",{className:"mb-1"},"Buku Tamu Pengunjung"),s.createElement("p",{className:"mt-0"},"Catat kunjungan anda di buku tamu kami dan kirimkan pesan kepada kami."),s.createElement(Y.Z,{className:d()("mt-5",{focused:this.state.nameFocused})},s.createElement(K.Z,{className:"input-group-alternative"},s.createElement(X.Z,{addonType:"prepend"},s.createElement(G.Z,null,s.createElement("i",{className:"ni ni-user-run"}))),s.createElement(z.Z,{placeholder:"Nama Lengkap",type:"text",name:"nama",onFocus:function(t){return e.setState({nameFocused:!0})},onBlur:function(t){return e.setState({nameFocused:!1})},onChange:this.onChangeInputNama}))),s.createElement(Y.Z,{className:d()({focused:this.state.emailFocused})},s.createElement(K.Z,{className:"input-group-alternative"},s.createElement(X.Z,{addonType:"prepend"},s.createElement(G.Z,null,s.createElement("i",{className:"ni ni-email-83"}))),s.createElement(z.Z,{placeholder:"Alamat Email",type:"email",name:"email",onFocus:function(t){return e.setState({emailFocused:!0})},onBlur:function(t){return e.setState({emailFocused:!1})},onChange:this.onChangeInputEmail}))),s.createElement(Y.Z,{className:"mb-4"},s.createElement(z.Z,{className:"form-control-alternative",cols:"80",name:"pesan",placeholder:"Tulis sebuah pesan...",rows:"4",type:"textarea",onChange:this.onChangeInputPesan})),s.createElement("div",null,s.createElement(L.Z,{className:"btn-round",color:"default",size:"lg",type:"submit",disabled:this.state.submitLoading},this.state.submitLoading&&s.createElement(s.Fragment,null,s.createElement("span",{class:"spinner-grow spinner-grow-sm",role:"status","aria-hidden":"true"}),s.createElement("span",{class:"sr-only"},"Loading...")),"  KIRIM PESAN"))))))))))},t}(s.Component),Q=a.p+"static/img-1-1200x1000-41d83c6d75b8d2c5011b4d0e5c5596b8.jpg",q=a.p+"static/img-2-1200x1000-c43a99f71a6be07ac5251d9163f3e65a.jpg",J=a.p+"static/img-3-1200x1000-fca60e07bacd05e020887995e2d84905.jpg",V=a.p+"static/img-4-1200x1000-11e062454c1b9b334c4ad5a97c00d8a6.jpg",U=a.p+"static/img-5-1200x1000-ed8a55239d4f107b30dc32027f266229.jpg",_=a.p+"static/sahabat-2-265ac2ad4b69ddd152c59dc659b62faa.png",$=a(6814),ee=[{src:Q,altText:"PMII Sepuluh Nopember mengadakan sadar berbagi kepada masyarakan terdampak covid",caption:"",header:""},{src:q,altText:"Sambut Wisuda PMII Sepuluh Nopember",caption:"",header:""},{src:J,altText:"Sekolah Rakyat PMII 1011 mendidik adek-adek sekitar",caption:"",header:""},{src:V,altText:"PMII 1011 membantu menjadi panitia resolusi jihad di tugu pahlawan surabaya",caption:"",header:""},{src:U,altText:"Rutianan ngaji kitab kuning rutinan setiap rabu malam ",caption:"",header:""}],te=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))||this).state={posts:null,data:null,pageContext:null},t}(0,n.Z)(t,e);var c=t.prototype;return c.componentDidMount=function(){document.documentElement.scrollTop=0,document.scrollingElement.scrollTop=0,this.refs.main.scrollTop=0,this.setState({data:this.props.data,pageContext:{nextPagePath:this.props.nextPagePath,previousPagePath:this.props.previousPagePath},posts:this.props.data.allWpPost.nodes})},c.render=function(){return s.createElement(s.Fragment,null,s.createElement(H.Z,{title:"PMII Sepuluh Nopember",description:"Organisasi mahasiswa ekstra kampus (ITS, PENS, PPNS, UHT) yang menghimpun dan membina mahasiswa islam Indonesia sesuai dengan sifat dan tujuan PMII serta peraturan perundang-undangan dan paradigma PMII yang berlaku.",lang:"id",img:a(3113)}),s.createElement(D.Z,null),s.createElement("main",{ref:"main"},s.createElement("div",{className:"position-relative"},s.createElement("section",{className:"section section-lg section-shaped pb-200"},s.createElement("div",{className:"shape shape-style-1 shape-default"},s.createElement("span",null),s.createElement("span",null),s.createElement("span",null),s.createElement("span",null),s.createElement("span",null),s.createElement("span",null),s.createElement("span",null),s.createElement("span",null),s.createElement("span",null)),s.createElement(T.Z,{className:"py-lg-md d-flex shape-container"},s.createElement("div",{className:"col px-0"},s.createElement(C.Z,{className:"my-md-5"},s.createElement(j.Z,{md:"6",className:"order-2 order-md-1"},s.createElement("h1",{className:"display-3 text-white"},"Pergerakan Mahasiswa Islam Indonesia",s.createElement("span",null,"Komisariat Sepuluh Nopember")),s.createElement("p",{className:"lead text-white text-justify"},"Merupakan organisasi mahasiswa ekstra kampus (ITS, PENS, PPNS, UHT) yang menghimpun dan membina mahasiswa islam Indonesia sesuai dengan sifat dan tujuan PMII serta peraturan perundang-undangan dan paradigma PMII yang berlaku."),s.createElement("div",{className:"btn-wrapper"},s.createElement(r.Link,{to:"/tentang-kami",itemProp:"url"},s.createElement(L.Z,{className:"btn-icon mb-3 mb-sm-0",color:"info"},s.createElement("span",{className:"btn-inner--icon mr-1"},s.createElement("i",{className:"fa fa-plus"})),s.createElement("span",{className:"btn-inner--text"},"Selengkapnya"))),s.createElement(r.Link,{to:"/daftar",itemProp:"url"},s.createElement(L.Z,{className:"btn-white btn-icon mb-3 mb-sm-0 ml-1",color:"default"},s.createElement("span",{className:"btn-inner--icon mr-1"},s.createElement("i",{className:"fa fa-user"})),s.createElement("span",{className:"btn-inner--text"},"Daftar"))))),s.createElement(j.Z,{md:"6",className:"container order-1 order-md-2 mb-3 mb-sm-5 mt-md-5 d-flex justify-content-center justify-content-lg-end"},s.createElement("img",{alt:"Duta PMII Sepuluh Nopember",className:"img-fluid floating",style:{marginTop:"-45px"},src:$.Z}))))),s.createElement("div",{className:"separator separator-bottom separator-skew"},s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0"},s.createElement("polygon",{className:"fill-white",points:"2560 0 2560 100 0 100"}))))),s.createElement("section",{className:"section section-lg pt-lg-0 mt--200"},s.createElement(T.Z,null,s.createElement(C.Z,{className:"justify-content-center"},s.createElement(j.Z,{lg:"12"},s.createElement(C.Z,{className:"row-grid"},s.createElement(j.Z,{lg:"4"},s.createElement(F.Z,{className:"card-lift--hover shadow border-0"},s.createElement(B.Z,{className:"py-5"},s.createElement("div",{className:"icon icon-shape icon-shape-primary rounded-circle mb-4"},s.createElement("i",{className:"ni ni-check-bold"})),s.createElement("h6",{className:"text-primary text-uppercase"},"Rayon Teknik"),s.createElement("p",{className:"description mt-3"},"Rayon teknik (ITS) fokus pada menghimpun dan membina anggota PMII yang berada di lingkup kampus ITS."),s.createElement("div",null,s.createElement(h,{color:"primary",pill:!0,className:"mr-1"},"#MahasiswaTeknik"),s.createElement(h,{color:"primary",pill:!0,className:"mr-1"},"#ITS"),s.createElement(h,{color:"primary",pill:!0,className:"mr-1"},"#MahasiswaITS")),s.createElement(L.Z,{className:"mt-4",color:"primary",href:"https://www.instagram.com/pmiiteknik1011/"},"Selengkapnya")))),s.createElement(j.Z,{lg:"4"},s.createElement(F.Z,{className:"card-lift--hover shadow border-0"},s.createElement(B.Z,{className:"py-5"},s.createElement("div",{className:"icon icon-shape icon-shape-success rounded-circle mb-4"},s.createElement("i",{className:"ni ni-istanbul"})),s.createElement("h6",{className:"text-success text-uppercase"},"Rayon Bahari"),s.createElement("p",{className:"description mt-3"},"Rayon Bahari (PPNS) fokus pada menghimpun dan membina anggota PMII yang berada di lingkup kampus PPNS."),s.createElement("div",null,s.createElement(h,{color:"success",pill:!0,className:"mr-1"},"#MahasiswaPPNS"),s.createElement(h,{color:"success",pill:!0,className:"mr-1"},"#PPNS"),s.createElement(h,{color:"success",pill:!0,className:"mr-1"},"#MahasiswaKapal")),s.createElement(L.Z,{className:"mt-4",color:"success",href:"https://www.instagram.com/pmii.rayonbahari/"},"Selengkapnya")))),s.createElement(j.Z,{lg:"4"},s.createElement(F.Z,{className:"card-lift--hover shadow border-0"},s.createElement(B.Z,{className:"py-5"},s.createElement("div",{className:"icon icon-shape icon-shape-warning rounded-circle mb-4"},s.createElement("i",{className:"ni ni-planet"})),s.createElement("h6",{className:"text-warning text-uppercase"},"Rayon PENS"),s.createElement("p",{className:"description mt-3"},"Rayon PENS fokus pada menghimpun dan membina anggota PMII yang berada di lingkup kampus PENS."),s.createElement("div",null,s.createElement(h,{color:"warning",pill:!0,className:"mr-1"},"#MahasiswaPENS"),s.createElement(h,{color:"warning",pill:!0,className:"mr-1"},"#PENS"),s.createElement(h,{color:"warning",pill:!0,className:"mr-1"},"#MahasiswaRobot")),s.createElement(L.Z,{className:"mt-4",color:"warning",href:"https://www.instagram.com/pmiirayonpens/"},"Selengkapnya"))))))))),s.createElement("section",{className:"section section-lg"},s.createElement(T.Z,null,s.createElement(C.Z,{className:"row-grid align-items-center"},s.createElement(j.Z,{className:"order-1 order-md-2 my-5 my-md-0 d-flex justify-content-center justify-content-lg-end",md:"6"},s.createElement("img",{alt:"Desain PMII Keren",className:"img-fluid floating",src:_})),s.createElement(j.Z,{className:"order-2 order-md-1",md:"6"},s.createElement("div",{className:"pr-md-5"},s.createElement("div",{className:"icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5"},s.createElement("i",{className:"ni ni-settings-gear-65"})),s.createElement("h3",null,"Kenapa Harus Ber-PMII"),s.createElement("p",null,"Mahasiswa idealnya adalah sebuah generasi perubahan seperti yang dicantumkan pada peran dan fungsi mahasiswa. Di dalam PMII kalian akan dibina untuk menjadi generasi tersebut. Dan dengan Ber-PMII kalian akan mendapatkan banyak sekali manfaat meliputi :"),s.createElement("ul",{className:"list-unstyled mt-5"},s.createElement("li",{className:"py-2"},s.createElement("div",{className:"d-flex align-items-center"},s.createElement("div",null,s.createElement(h,{className:"badge-circle mr-3",color:"success"},s.createElement("i",{className:"ni ni-istanbul"}))),s.createElement("div",null,s.createElement("h6",{className:"mb-0"},"Meningkatkan ketaqwaan kepada Allah SWT.")))),s.createElement("li",{className:"py-2"},s.createElement("div",{className:"d-flex align-items-center"},s.createElement("div",null,s.createElement(h,{className:"badge-circle mr-3",color:"success"},s.createElement("i",{className:"ni ni-chat-round"}))),s.createElement("div",null,s.createElement("h6",{className:"mb-0"},"Meningkatkan ",s.createElement("i",null,"softskill"))))),s.createElement("li",{className:"py-2"},s.createElement("div",{className:"d-flex align-items-center"},s.createElement("div",null,s.createElement(h,{className:"badge-circle mr-3",color:"success"},s.createElement("i",{className:"ni ni-single-02"}))),s.createElement("div",null,s.createElement("h6",{className:"mb-0"},"Relasi networking")))),s.createElement("li",{className:"py-2"},s.createElement("div",{className:"d-flex align-items-center"},s.createElement("div",null,s.createElement(h,{className:"badge-circle mr-3",color:"success"},s.createElement("i",{className:"ni ni-bulb-61"}))),s.createElement("div",null,s.createElement("h6",{className:"mb-0"},"Kecerdasan Intelektual")))),s.createElement("li",{className:"py-2"},s.createElement("div",{className:"d-flex align-items-center"},s.createElement("div",null,s.createElement(h,{className:"badge-circle mr-3",color:"success"},s.createElement("i",{className:"ni ni-fat-add"}))),s.createElement("div",null,s.createElement("h6",{className:"mb-0"},"Dan masih banyak lagi")))))))))),s.createElement("section",{className:"section section-shaped"},s.createElement("div",{className:"shape shape-style-1 shape-default"},s.createElement("span",null),s.createElement("span",null),s.createElement("span",null),s.createElement("span",null),s.createElement("span",null),s.createElement("span",null)),s.createElement(T.Z,{className:"py-md"},s.createElement(C.Z,{className:"justify-content-between align-items-center"},s.createElement(j.Z,{className:"mb-5 mb-lg-0",lg:"5"},s.createElement("h1",{className:"text-white font-weight-light"},"Kegiatan Kami"),s.createElement("p",{className:"lead text-white mt-4 text-justify"},"Kegiatan di PMII 1011 sangat bervariasi mulai dari beberapa rutinan Diba'an, Diskusi, Ngaji Kitab Kuning. Bakti Sosial kepada masyarakat. dan beberapa kegiatan kaderisasi seperti MAPABA (Masa Penerimaan Anggota Baru), SI (Studi Intensif) dan PKD (Pelatihan Kader Dasar). dan masih banyak kegiatan lainnya"),s.createElement(L.Z,{className:"btn-white mt-4",color:"default",href:"https://www.instagram.com/pmii1011",target:"_blank"},s.createElement("i",{className:"fa fa-instagram"}),"  Selengkapnya")),s.createElement(j.Z,{className:"mb-lg-auto",lg:"6"},s.createElement("div",{className:"rounded shadow-lg overflow-hidden transform-perspective-right"},s.createElement(S,{items:ee}))))),s.createElement("div",{className:"separator separator-bottom separator-skew"},s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0"},s.createElement("polygon",{className:"fill-white",points:"2560 0 2560 100 0 100"})))),s.createElement("section",{className:"section section-lg",id:"blog"},s.createElement(T.Z,null,s.createElement(C.Z,{className:"justify-content-center text-center"},s.createElement(j.Z,{lg:"8"},s.createElement("h2",{className:"display-3"},"Artikel Blog"),s.createElement("p",{className:"lead text-muted"},"Pantau informasi, berita, karya terbaru dari kami dengan melihat artikel blog berikut."))),s.createElement(C.Z,{className:"row-grid d-flex justify-content-center"},this.state.posts&&this.state.posts.map((function(e){var t,a,n,c,o,m,d=e.title,u={fluid:null===(t=e.featuredImage)||void 0===t||null===(a=t.node)||void 0===a||null===(n=a.localFile)||void 0===n||null===(c=n.childImageSharp)||void 0===c?void 0:c.fluid,alt:(null===(o=e.featuredImage)||void 0===o||null===(m=o.node)||void 0===m?void 0:m.altText)||""};return s.createElement(s.Fragment,null,s.createElement(j.Z,{key:"post.id",md:"4",className:"my-md-3",style:{height:"500px"}},s.createElement(F.Z,{className:"overflow-hidden bg-default shadow border-0 h-100 h-sm-75 h-md-100"},u.fluid?s.createElement(l.Z,{fluid:u.fluid,alt:u.alt,className:"overflow-hidden",style:{height:"250px",objectFit:"cover"},top:!0}):s.createElement(M,{alt:"...",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA8AAAAMcAQMAAACl5F6MAAAABlBMVEW8vsDn6OnyCdevAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEbUlEQVR4AezBMQEAAADCoPVP7WsIoAcAAAAAAAAAAAAAAAAAAAAAAIydO0iOk4eCAGyVXNEuukF0FB1NHE1H0RG0ZEHRf5A99WYMk1T+Kvolw+vVjBf+CkMLoRCFWQkuqCquB3QOOQKrCpwBKJ1i6Jxk/EzTubaArgAHQOeyjhu8aMEafUrYolLjLRMfLrpw5cMYadeBnTLcrwN7ZXi+DhyuCi8GG/xy8Gyw3SRe7n7cLzfnajah5z87keFJ//lYf0WAAq+vv+rDX+fir+zpr2Xqr95qrle/ywr9OxX+/nF19fGRmR/yrzCJCudRqNHiNDHhIlquTBgCF2aX3V2BwYT9nUYdNoNojnqjiKJ56q0xiRaok4EsWqQO2EW0RJ3wQbTMvDc6iFaYswEvkx5Hnf8E0Tx1xhcfj3gh1lhOLHVWnx8vLvBq/FAnYpGBhwEElVfjhyETjVjj5bFanATpLrHIcpDkIstpJRdZLmRykaW63CLLMZKLLGeVXGS5jvlFluZKq8k1lnGMXGMZuck1lnsVu8ZydybXWOYj5BrLDIxcY5lz8mrML/JupPIC02osf3tyjeVqY9dYikys8QlTAUIsFovFYrFYLJaIP8hq8D4GG2ywwQYbbLDBBhtssMEGG2ywwQYb3N9+G/ePwQYbbLDBBhtssMEGG5yhA3ugqcARmFXgDKwqcAGgAsu+J1zYy94UXDjIRxosH+crwUm2euHCWX43Fy7YciUYI9N1YIeRavDpsMdIM9jgs+BOh4PBavA3ras6aMFRC06TEpyrLsy/H5emBKOrwvxZpsOsA3ssOk8SQQ9edZ4WI6DzfJwU4Ym/FCE7ofFXfQoJlnUugRsHdl9GTKBzlxRF6vzVW9kngr5eLTB5hT6MUhPgLfdDRhwQCQ79TQXe756tAWcp10XgIuMYF8aWxoedLtz5sB/wzIeDLrzw4QiRqHBSgOvnwLWFCrc7eCLCbnwrXFh2ZMdHKhEOyx3ciHBch8OHE2TtCZ0IZ0wCz1S4jhGTDhc0ecN9IcLja/qEVwIswqwC+/H3zfgMDw7j95cbPBFg+YEKnIaGWyoNzpvmcEujws0rwGX7LnCnwWOgDLhlZsFuaJEP+zFCC7yw4DCAhFtWFhwHl/lwwpeowRMJzlpw+QpXEgwl2O3gxoH9Du4cOOzgmQNHLTjt4OXF4byDVw5csAsHhhLssM/EgD32qQw4aMER+zQtuDPgpAVn7DMz4IJ9FgYMJdgdwSsB9jgKAQ5acDyEJy24ng8nLTgfwu18uBzC/XwYSrA7hmfCeyCHWU6Hw18Gr4R3fY5zOpy04PwEngj/KfYw9WwYSrB7BjfCW4qH6a8Kh2fwTHgF9jDLyXDSgvMzeKW8UX6Uk2Eowe45PL0m7J/D9VQ4aMG/isH/JwYbbLDBBhtssMEGG2ywtz3K/2tvDmQAAAAABvlbn+NbCSQWi8VisVgsFovFYrFYLBYvAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEHVJjR5bJLd8AAAAASUVORK5CYII=",top:!0,style:{height:"250px",objectFit:"cover"},className:"overflow-hidden"}),s.createElement("blockquote",{className:"card-blockquote h-100 overflow-hidden"},s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"svg-bg",preserveAspectRatio:"none",viewBox:"0 0 583 95"},s.createElement("polygon",{className:"fill-default",points:"0,52 583,95 0,95"}),s.createElement("polygon",{className:"fill-default",opacity:".2",points:"0,42 583,95 683,0 0,95"})),s.createElement(r.Link,{to:e.uri,itemProp:"url"},s.createElement("h5",{className:"font-weight-bold text-white"},(0,i.ZP)(d))),s.createElement("p",{className:"text-italic text-white text-justify"},(0,i.ZP)(e.excerpt.replace("btn-filled","btn-primary").replace("<p>",'<p class="description">')))))))}))))),s.createElement("section",{className:"section section-lg bg-gradient-default"},s.createElement(T.Z,{className:"pb-300"},s.createElement(F.Z,{className:"bg-gradient-primary shadow-lg border-0"},s.createElement("div",{className:"p-5"},s.createElement(C.Z,{className:"align-items-center"},s.createElement(j.Z,{lg:"8"},s.createElement("h3",{className:"text-white"},"Kritik & saran website PMII 1011"),s.createElement("p",{className:"lead text-white mt-3 text-justify"},"Bantu kami dalam mengembangkan platform website ini dengan membuat ",s.createElement("i",null,"issue "),"di Github apabila terdapat beberapa fitur yang tidak bekerja. Berikan juga saran kepada kami terkait fitur apa yang kalian inginkan dengan adanya website ini.")),s.createElement(j.Z,{className:"ml-lg-auto",lg:"3"},s.createElement(L.Z,{block:!0,className:"btn-white",color:"default",href:"https://github.com/pmii1011/pmii1011.github.io/issues",target:"_blank",size:"lg"},"Buat ",s.createElement("i",null,"Issue"))))))),s.createElement("div",{className:"separator separator-bottom separator-skew zindex-100"},s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0"},s.createElement("polygon",{className:"fill-white",points:"2560 0 2560 100 0 100"})))),s.createElement(O,{isTopFloat:!0})),s.createElement(R.Z,null),s.createElement("iframe",{style:{display:"none"},width:"560",height:"315",src:"https://www.youtube.com/watch?v=in2XFwJjVzg",frameborder:0,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))},t}(s.Component)},3113:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/Logo-Media-PMII-Sepuluh-Nopember-24e3ea9f3a9df691af3b2e2490937cf6.png"}}]);
//# sourceMappingURL=component---src-templates-blog-post-archive-js-56da5d0e122732a80d2e.js.map