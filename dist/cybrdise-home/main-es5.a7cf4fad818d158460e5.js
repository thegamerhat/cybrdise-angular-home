!function(){function o(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function t(o,t){for(var n=0;n<t.length;n++){var e=t[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(o,e.key,e)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(o,t,n){o.exports=n("zUnb")},zUnb:function(n,e,r){"use strict";r.r(e);var i,a,c,p=r("jhN1"),b=r("fXoL"),s=((a=function(){function n(){o(this,n)}var e,r,i;return e=n,(r=[{key:"ngOnInit",value:function(){}}])&&t(e.prototype,r),i&&t(e,i),n}()).\u0275fac=function(o){return new(o||a)},a.\u0275cmp=b.ub({type:a,selectors:[["app-terminal"]],decls:26,vars:0,consts:[[1,"container",2,"color","white","margin-top","10px","margin-bottom","100px","font-family","'Roboto Mono', monospace"],[2,"text-align","center","margin-top","60px","margin-bottom","60px","font-weight","600"],[2,"color","#00AA00"],[2,"color","#fff"],[2,"color","#d41919"],[1,"cursor"],[2,"font-family","'Roboto Mono', monospace","border-radius","5px","background-color","#1E1E1E","margin","30px","width","310px","padding-top","10px","padding-bottom","14px","padding-left","8px","padding-right","8px","font-size","20px","margin","auto","font-family","monospace"],[2,"margin-left","15px","margin-right","3px","color","#00AA00"],["data-period","1000","data-rotate",'["apt upgrade","pacman -Syu","dnf upgrade","brew upgrade","choco upgrade"]',1,"txt-rotate"],[1,"cursortwo"],[2,"font-size","18px","text-align","center","margin-top","10px"],[2,"color","#50FA7B","font-weight","bold"]],template:function(o,t){1&o&&(b.Fb(0,"div",0),b.Fb(1,"p",1),b.Fb(2,"span",2),b.jc(3,"root"),b.Eb(),b.Fb(4,"span",3),b.jc(5,"@"),b.Eb(),b.Fb(6,"span",4),b.jc(7,"cybrdise"),b.Eb(),b.Fb(8,"span",2),b.jc(9,": # "),b.Eb(),b.Fb(10,"span",5),b.jc(11,"_"),b.Eb(),b.Eb(),b.Fb(12,"h1",6),b.Fb(13,"span",7),b.jc(14,"$ "),b.Eb(),b.Fb(15,"span"),b.jc(16,"sudo "),b.Eb(),b.Bb(17,"span",8),b.Fb(18,"span",9),b.jc(19,"\u25ae"),b.Eb(),b.Eb(),b.Bb(20,"br"),b.Fb(21,"h2",10),b.jc(22," An "),b.Fb(23,"span",11),b.jc(24," upgrade "),b.Eb(),b.jc(25," is all you need. "),b.Eb(),b.Eb())},styles:[""]}),a),d=((i=function t(){o(this,t),this.title="cybrdise-home"}).\u0275fac=function(o){return new(o||i)},i.\u0275cmp=b.ub({type:i,selectors:[["app-root"]],decls:20,vars:0,consts:[[1,"container-lg"],[2,"max-width","600px","margin","auto","display","flex","flex-direction","column","justify-content","center","align-items","center"],[2,"text-decoration","none","margin-top","50px","border-radius","8px","background-color","#1E1E1E","width","400px","height","auto","border-width","0px","box-shadow","black","display","flex","padding-top","15px","padding-bottom","15px","margin-bottom","20px"],[1,"d-flex","flex-column"],["src","../assets/vm-logo.svg",2,"margin-bottom","auto","margin-top","auto","margin-left","30px"],[1,"d-flex","flex-column",2,"text-align","center","margin-top","20px","margin-bottom","20px"],[2,"font-size","30px","font-weight","bold","margin-top","-10px","color","#2484F0"],[2,"font-size","18px","margin-top","10px","color","white"],[2,"width","400px","margin-bottom","50px"],[1,"d-flex","flex-row","justify-content-around",2,"display","flex"],[2,"font-size","15px","border-color","#00000000","color","white","width","185px","padding","15px","background-color","#1E1E1E","border-radius","5px","cursor","pointer"],["href","https://blog.cybrdise.com/posts/quick-vm/",2,"text-decoration","none","color","white"],[2,"font-size","15px","border-color","#00000000","color","white","width","185px","background-color","#1E1E1E","border-radius","5px","cursor","pointer","align-items","center"],["width","20","src","../assets/github-icon.svg",2,"vertical-align","middle"],["href","https://github.com/thegamerhat/quick-vm/",2,"text-decoration","none","color","white"]],template:function(o,t){1&o&&(b.Fb(0,"div",0),b.Bb(1,"app-terminal"),b.Fb(2,"div",1),b.Fb(3,"div",2),b.Fb(4,"div",3),b.Bb(5,"img",4),b.Eb(),b.Fb(6,"div",5),b.Fb(7,"div",6),b.jc(8,"Quick VM"),b.Eb(),b.Fb(9,"div",7),b.jc(10,"Make a Windows VM in under 100 seconds!"),b.Eb(),b.Eb(),b.Fb(11,"span",8),b.Fb(12,"div",9),b.Fb(13,"button",10),b.Fb(14,"a",11),b.jc(15,"\ud83d\udcf0 Read Blog"),b.Eb(),b.Eb(),b.Fb(16,"button",12),b.Bb(17,"img",13),b.Fb(18,"a",14),b.jc(19," See on GitHub"),b.Eb(),b.Eb(),b.Eb(),b.Eb(),b.Eb(),b.Eb(),b.Eb())},directives:[s],styles:[""]}),i),l=r("Jho9"),u=r("1kSV"),f=((c=function t(){o(this,t)}).\u0275fac=function(o){return new(o||c)},c.\u0275mod=b.yb({type:c,bootstrap:[d]}),c.\u0275inj=b.xb({providers:[],imports:[[p.a,l.a.register("ngsw-worker.js",{enabled:!0,registrationStrategy:"registerWhenStable:30000"}),u.a]]}),c);Object(b.I)(),p.b().bootstrapModule(f).catch(function(o){return console.error(o)})},zn8P:function(o,t){function n(o){return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+o+"'");throw t.code="MODULE_NOT_FOUND",t})}n.keys=function(){return[]},n.resolve=n,o.exports=n,n.id="zn8P"}},[[0,0,5]]])}();