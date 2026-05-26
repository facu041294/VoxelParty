var ep=Object.defineProperty;var tp=(n,e,t)=>e in n?ep(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ds=(n,e,t)=>tp(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vc="162",zi={ROTATE:0,DOLLY:1,PAN:2},Hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},np=0,ll=1,ip=2,Mh=1,rp=2,Dn=3,si=0,Bt=1,Pn=2,ti=0,cr=1,ul=2,hl=3,dl=4,sp=5,Si=100,op=101,ap=102,fl=103,pl=104,cp=200,lp=201,up=202,hp=203,qa=204,Ya=205,dp=206,fp=207,pp=208,mp=209,gp=210,_p=211,vp=212,yp=213,xp=214,Sp=0,bp=1,Ep=2,$s=3,Mp=4,wp=5,Tp=6,Ap=7,wh=0,Cp=1,Rp=2,ni=0,Lp=1,Dp=2,Pp=3,Ip=4,Up=5,Np=6,Op=7,Th=300,mr=301,gr=302,$a=303,Ka=304,xo=306,Za=1e3,cn=1001,Ja=1002,Nt=1003,ml=1004,Or=1005,kt=1006,Ko=1007,Ei=1008,ii=1009,Fp=1010,kp=1011,yc=1012,Ah=1013,Qn=1014,In=1015,Wr=1016,Ch=1017,Rh=1018,Mi=1020,Bp=1021,ln=1023,zp=1024,Hp=1025,wi=1026,_r=1027,Gp=1028,Lh=1029,Vp=1030,Dh=1031,Ph=1033,Zo=33776,Jo=33777,Qo=33778,ea=33779,gl=35840,_l=35841,vl=35842,yl=35843,Ih=36196,xl=37492,Sl=37496,bl=37808,El=37809,Ml=37810,wl=37811,Tl=37812,Al=37813,Cl=37814,Rl=37815,Ll=37816,Dl=37817,Pl=37818,Il=37819,Ul=37820,Nl=37821,ta=36492,Ol=36494,Fl=36495,Wp=36283,kl=36284,Bl=36285,zl=36286,Xp=3200,jp=3201,Uh=0,qp=1,Zn="",pn="srgb",li="srgb-linear",xc="display-p3",So="display-p3-linear",Ks="linear",it="srgb",Zs="rec709",Js="p3",Gi=7680,Hl=519,Yp=512,$p=513,Kp=514,Nh=515,Zp=516,Jp=517,Qp=518,em=519,Gl=35044,Vl="300 es",Qa=1035,Un=2e3,Qs=2001;class Fi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hs=Math.PI/180,ec=180/Math.PI;function ts(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]).toLowerCase()}function Ot(n,e,t){return Math.max(e,Math.min(t,n))}function tm(n,e){return(n%e+e)%e}function na(n,e,t){return(1-t)*n+t*e}function Wl(n){return(n&n-1)===0&&n!==0}function tc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Fr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const nm={DEG2RAD:Hs};class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,r,s,a,o,c,u){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,u)}set(e,t,i,r,s,a,o,c,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=c,f[6]=i,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],u=i[1],f=i[4],l=i[7],d=i[2],g=i[5],v=i[8],b=r[0],y=r[3],_=r[6],C=r[1],x=r[4],E=r[7],T=r[2],A=r[5],M=r[8];return s[0]=a*b+o*C+c*T,s[3]=a*y+o*x+c*A,s[6]=a*_+o*E+c*M,s[1]=u*b+f*C+l*T,s[4]=u*y+f*x+l*A,s[7]=u*_+f*E+l*M,s[2]=d*b+g*C+v*T,s[5]=d*y+g*x+v*A,s[8]=d*_+g*E+v*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],f=e[8];return t*a*f-t*o*u-i*s*f+i*o*c+r*s*u-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],f=e[8],l=f*a-o*u,d=o*c-f*s,g=u*s-a*c,v=t*l+i*d+r*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/v;return e[0]=l*b,e[1]=(r*u-f*i)*b,e[2]=(o*i-r*a)*b,e[3]=d*b,e[4]=(f*t-r*c)*b,e[5]=(r*s-o*t)*b,e[6]=g*b,e[7]=(i*c-u*t)*b,e[8]=(a*t-i*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ia.makeScale(e,t)),this}rotate(e){return this.premultiply(ia.makeRotation(-e)),this}translate(e,t){return this.premultiply(ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ia=new We;function Oh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function eo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function im(){const n=eo("canvas");return n.style.display="block",n}const Xl={};function rm(n){n in Xl||(Xl[n]=!0,console.warn(n))}const jl=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ql=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fs={[li]:{transfer:Ks,primaries:Zs,toReference:n=>n,fromReference:n=>n},[pn]:{transfer:it,primaries:Zs,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[So]:{transfer:Ks,primaries:Js,toReference:n=>n.applyMatrix3(ql),fromReference:n=>n.applyMatrix3(jl)},[xc]:{transfer:it,primaries:Js,toReference:n=>n.convertSRGBToLinear().applyMatrix3(ql),fromReference:n=>n.applyMatrix3(jl).convertLinearToSRGB()}},sm=new Set([li,So]),Qe={enabled:!0,_workingColorSpace:li,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!sm.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=fs[e].toReference,r=fs[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return fs[n].primaries},getTransfer:function(n){return n===Zn?Ks:fs[n].transfer}};function lr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ra(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vi;class Fh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vi===void 0&&(Vi=eo("canvas")),Vi.width=e.width,Vi.height=e.height;const i=Vi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Vi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=eo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=lr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(lr(t[i]/255)*255):t[i]=lr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let om=0;class kh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=ts(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(sa(r[a].image)):s.push(sa(r[a]))}else s=sa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function sa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let am=0;class zt extends Fi{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,i=cn,r=cn,s=kt,a=Ei,o=ln,c=ii,u=zt.DEFAULT_ANISOTROPY,f=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=ts(),this.name="",this.source=new kh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Th)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Za:e.x=e.x-Math.floor(e.x);break;case cn:e.x=e.x<0?0:1;break;case Ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Za:e.y=e.y-Math.floor(e.y);break;case cn:e.y=e.y<0?0:1;break;case Ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Th;zt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,u=c[0],f=c[4],l=c[8],d=c[1],g=c[5],v=c[9],b=c[2],y=c[6],_=c[10];if(Math.abs(f-d)<.01&&Math.abs(l-b)<.01&&Math.abs(v-y)<.01){if(Math.abs(f+d)<.1&&Math.abs(l+b)<.1&&Math.abs(v+y)<.1&&Math.abs(u+g+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,E=(g+1)/2,T=(_+1)/2,A=(f+d)/4,M=(l+b)/4,D=(v+y)/4;return x>E&&x>T?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=M/i):E>T?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=A/r,s=D/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=M/s,r=D/s),this.set(i,r,s,t),this}let C=Math.sqrt((y-v)*(y-v)+(l-b)*(l-b)+(d-f)*(d-f));return Math.abs(C)<.001&&(C=1),this.x=(y-v)/C,this.y=(l-b)/C,this.z=(d-f)/C,this.w=Math.acos((u+g+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cm extends Fi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new kh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends cm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Bh extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lm extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Li{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],u=i[r+1],f=i[r+2],l=i[r+3];const d=s[a+0],g=s[a+1],v=s[a+2],b=s[a+3];if(o===0){e[t+0]=c,e[t+1]=u,e[t+2]=f,e[t+3]=l;return}if(o===1){e[t+0]=d,e[t+1]=g,e[t+2]=v,e[t+3]=b;return}if(l!==b||c!==d||u!==g||f!==v){let y=1-o;const _=c*d+u*g+f*v+l*b,C=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const T=Math.sqrt(x),A=Math.atan2(T,_*C);y=Math.sin(y*A)/T,o=Math.sin(o*A)/T}const E=o*C;if(c=c*y+d*E,u=u*y+g*E,f=f*y+v*E,l=l*y+b*E,y===1-o){const T=1/Math.sqrt(c*c+u*u+f*f+l*l);c*=T,u*=T,f*=T,l*=T}}e[t]=c,e[t+1]=u,e[t+2]=f,e[t+3]=l}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],u=i[r+2],f=i[r+3],l=s[a],d=s[a+1],g=s[a+2],v=s[a+3];return e[t]=o*v+f*l+c*g-u*d,e[t+1]=c*v+f*d+u*l-o*g,e[t+2]=u*v+f*g+o*d-c*l,e[t+3]=f*v-o*l-c*d-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(i/2),f=o(r/2),l=o(s/2),d=c(i/2),g=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=d*f*l+u*g*v,this._y=u*g*l-d*f*v,this._z=u*f*v+d*g*l,this._w=u*f*l-d*g*v;break;case"YXZ":this._x=d*f*l+u*g*v,this._y=u*g*l-d*f*v,this._z=u*f*v-d*g*l,this._w=u*f*l+d*g*v;break;case"ZXY":this._x=d*f*l-u*g*v,this._y=u*g*l+d*f*v,this._z=u*f*v+d*g*l,this._w=u*f*l-d*g*v;break;case"ZYX":this._x=d*f*l-u*g*v,this._y=u*g*l+d*f*v,this._z=u*f*v-d*g*l,this._w=u*f*l+d*g*v;break;case"YZX":this._x=d*f*l+u*g*v,this._y=u*g*l+d*f*v,this._z=u*f*v-d*g*l,this._w=u*f*l-d*g*v;break;case"XZY":this._x=d*f*l-u*g*v,this._y=u*g*l-d*f*v,this._z=u*f*v+d*g*l,this._w=u*f*l+d*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],u=t[2],f=t[6],l=t[10],d=i+o+l;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(f-c)*g,this._y=(s-u)*g,this._z=(a-r)*g}else if(i>o&&i>l){const g=2*Math.sqrt(1+i-o-l);this._w=(f-c)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+u)/g}else if(o>l){const g=2*Math.sqrt(1+o-i-l);this._w=(s-u)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(c+f)/g}else{const g=2*Math.sqrt(1+l-i-o);this._w=(a-r)/g,this._x=(s+u)/g,this._y=(c+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,u=t._z,f=t._w;return this._x=i*f+a*o+r*u-s*c,this._y=r*f+a*c+s*o-i*u,this._z=s*f+a*u+i*c-r*o,this._w=a*f-i*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*i+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const u=Math.sqrt(c),f=Math.atan2(u,o),l=Math.sin((1-t)*f)/u,d=Math.sin(t*f)/u;return this._w=a*l+this._w*d,this._x=i*l+this._x*d,this._y=r*l+this._y*d,this._z=s*l+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*i),f=2*(o*t-s*r),l=2*(s*i-a*t);return this.x=t+c*u+a*l-o*f,this.y=i+c*f+o*u-s*l,this.z=r+c*l+s*f-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return oa.copy(this).projectOnVector(e),this.sub(oa)}reflect(e){return this.sub(oa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oa=new W,Yl=new Li;class ns{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,sn):sn.fromBufferAttribute(s,a),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ps.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ps.copy(i.boundingBox)),ps.applyMatrix4(e.matrixWorld),this.union(ps)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(kr),ms.subVectors(this.max,kr),Wi.subVectors(e.a,kr),Xi.subVectors(e.b,kr),ji.subVectors(e.c,kr),Vn.subVectors(Xi,Wi),Wn.subVectors(ji,Xi),fi.subVectors(Wi,ji);let t=[0,-Vn.z,Vn.y,0,-Wn.z,Wn.y,0,-fi.z,fi.y,Vn.z,0,-Vn.x,Wn.z,0,-Wn.x,fi.z,0,-fi.x,-Vn.y,Vn.x,0,-Wn.y,Wn.x,0,-fi.y,fi.x,0];return!aa(t,Wi,Xi,ji,ms)||(t=[1,0,0,0,1,0,0,0,1],!aa(t,Wi,Xi,ji,ms))?!1:(gs.crossVectors(Vn,Wn),t=[gs.x,gs.y,gs.z],aa(t,Wi,Xi,ji,ms))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wn=[new W,new W,new W,new W,new W,new W,new W,new W],sn=new W,ps=new ns,Wi=new W,Xi=new W,ji=new W,Vn=new W,Wn=new W,fi=new W,kr=new W,ms=new W,gs=new W,pi=new W;function aa(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){pi.fromArray(n,s);const o=r.x*Math.abs(pi.x)+r.y*Math.abs(pi.y)+r.z*Math.abs(pi.z),c=e.dot(pi),u=t.dot(pi),f=i.dot(pi);if(Math.max(-Math.max(c,u,f),Math.min(c,u,f))>o)return!1}return!0}const um=new ns,Br=new W,ca=new W;class bo{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):um.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Br.subVectors(e,this.center);const t=Br.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Br,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Br.copy(e.center).add(ca)),this.expandByPoint(Br.copy(e.center).sub(ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new W,la=new W,_s=new W,Xn=new W,ua=new W,vs=new W,ha=new W;class Eo{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.origin).addScaledVector(this.direction,t),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){la.copy(e).add(t).multiplyScalar(.5),_s.copy(t).sub(e).normalize(),Xn.copy(this.origin).sub(la);const s=e.distanceTo(t)*.5,a=-this.direction.dot(_s),o=Xn.dot(this.direction),c=-Xn.dot(_s),u=Xn.lengthSq(),f=Math.abs(1-a*a);let l,d,g,v;if(f>0)if(l=a*c-o,d=a*o-c,v=s*f,l>=0)if(d>=-v)if(d<=v){const b=1/f;l*=b,d*=b,g=l*(l+a*d+2*o)+d*(a*l+d+2*c)+u}else d=s,l=Math.max(0,-(a*d+o)),g=-l*l+d*(d+2*c)+u;else d=-s,l=Math.max(0,-(a*d+o)),g=-l*l+d*(d+2*c)+u;else d<=-v?(l=Math.max(0,-(-a*s+o)),d=l>0?-s:Math.min(Math.max(-s,-c),s),g=-l*l+d*(d+2*c)+u):d<=v?(l=0,d=Math.min(Math.max(-s,-c),s),g=d*(d+2*c)+u):(l=Math.max(0,-(a*s+o)),d=l>0?s:Math.min(Math.max(-s,-c),s),g=-l*l+d*(d+2*c)+u);else d=a>0?-s:s,l=Math.max(0,-(a*d+o)),g=-l*l+d*(d+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,l),r&&r.copy(la).addScaledVector(_s,d),g}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);const i=Tn.dot(this.direction),r=Tn.dot(Tn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const u=1/this.direction.x,f=1/this.direction.y,l=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),f>=0?(s=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),l>=0?(o=(e.min.z-d.z)*l,c=(e.max.z-d.z)*l):(o=(e.max.z-d.z)*l,c=(e.min.z-d.z)*l),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,i,r,s){ua.subVectors(t,e),vs.subVectors(i,e),ha.crossVectors(ua,vs);let a=this.direction.dot(ha),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xn.subVectors(this.origin,e);const c=o*this.direction.dot(vs.crossVectors(Xn,vs));if(c<0)return null;const u=o*this.direction.dot(ua.cross(Xn));if(u<0||c+u>a)return null;const f=-o*Xn.dot(ha);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,i,r,s,a,o,c,u,f,l,d,g,v,b,y){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,u,f,l,d,g,v,b,y)}set(e,t,i,r,s,a,o,c,u,f,l,d,g,v,b,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=c,_[2]=u,_[6]=f,_[10]=l,_[14]=d,_[3]=g,_[7]=v,_[11]=b,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/qi.setFromMatrixColumn(e,0).length(),s=1/qi.setFromMatrixColumn(e,1).length(),a=1/qi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),u=Math.sin(r),f=Math.cos(s),l=Math.sin(s);if(e.order==="XYZ"){const d=a*f,g=a*l,v=o*f,b=o*l;t[0]=c*f,t[4]=-c*l,t[8]=u,t[1]=g+v*u,t[5]=d-b*u,t[9]=-o*c,t[2]=b-d*u,t[6]=v+g*u,t[10]=a*c}else if(e.order==="YXZ"){const d=c*f,g=c*l,v=u*f,b=u*l;t[0]=d+b*o,t[4]=v*o-g,t[8]=a*u,t[1]=a*l,t[5]=a*f,t[9]=-o,t[2]=g*o-v,t[6]=b+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*f,g=c*l,v=u*f,b=u*l;t[0]=d-b*o,t[4]=-a*l,t[8]=v+g*o,t[1]=g+v*o,t[5]=a*f,t[9]=b-d*o,t[2]=-a*u,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*f,g=a*l,v=o*f,b=o*l;t[0]=c*f,t[4]=v*u-g,t[8]=d*u+b,t[1]=c*l,t[5]=b*u+d,t[9]=g*u-v,t[2]=-u,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,g=a*u,v=o*c,b=o*u;t[0]=c*f,t[4]=b-d*l,t[8]=v*l+g,t[1]=l,t[5]=a*f,t[9]=-o*f,t[2]=-u*f,t[6]=g*l+v,t[10]=d-b*l}else if(e.order==="XZY"){const d=a*c,g=a*u,v=o*c,b=o*u;t[0]=c*f,t[4]=-l,t[8]=u*f,t[1]=d*l+b,t[5]=a*f,t[9]=g*l-v,t[2]=v*l-g,t[6]=o*f,t[10]=b*l+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hm,e,dm)}lookAt(e,t,i){const r=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),jn.crossVectors(i,Vt),jn.lengthSq()===0&&(Math.abs(i.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),jn.crossVectors(i,Vt)),jn.normalize(),ys.crossVectors(Vt,jn),r[0]=jn.x,r[4]=ys.x,r[8]=Vt.x,r[1]=jn.y,r[5]=ys.y,r[9]=Vt.y,r[2]=jn.z,r[6]=ys.z,r[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],u=i[12],f=i[1],l=i[5],d=i[9],g=i[13],v=i[2],b=i[6],y=i[10],_=i[14],C=i[3],x=i[7],E=i[11],T=i[15],A=r[0],M=r[4],D=r[8],F=r[12],S=r[1],w=r[5],k=r[9],G=r[13],N=r[2],Y=r[6],X=r[10],ie=r[14],ee=r[3],K=r[7],ae=r[11],he=r[15];return s[0]=a*A+o*S+c*N+u*ee,s[4]=a*M+o*w+c*Y+u*K,s[8]=a*D+o*k+c*X+u*ae,s[12]=a*F+o*G+c*ie+u*he,s[1]=f*A+l*S+d*N+g*ee,s[5]=f*M+l*w+d*Y+g*K,s[9]=f*D+l*k+d*X+g*ae,s[13]=f*F+l*G+d*ie+g*he,s[2]=v*A+b*S+y*N+_*ee,s[6]=v*M+b*w+y*Y+_*K,s[10]=v*D+b*k+y*X+_*ae,s[14]=v*F+b*G+y*ie+_*he,s[3]=C*A+x*S+E*N+T*ee,s[7]=C*M+x*w+E*Y+T*K,s[11]=C*D+x*k+E*X+T*ae,s[15]=C*F+x*G+E*ie+T*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],f=e[2],l=e[6],d=e[10],g=e[14],v=e[3],b=e[7],y=e[11],_=e[15];return v*(+s*c*l-r*u*l-s*o*d+i*u*d+r*o*g-i*c*g)+b*(+t*c*g-t*u*d+s*a*d-r*a*g+r*u*f-s*c*f)+y*(+t*u*l-t*o*g-s*a*l+i*a*g+s*o*f-i*u*f)+_*(-r*o*f-t*c*l+t*o*d+r*a*l-i*a*d+i*c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],f=e[8],l=e[9],d=e[10],g=e[11],v=e[12],b=e[13],y=e[14],_=e[15],C=l*y*u-b*d*u+b*c*g-o*y*g-l*c*_+o*d*_,x=v*d*u-f*y*u-v*c*g+a*y*g+f*c*_-a*d*_,E=f*b*u-v*l*u+v*o*g-a*b*g-f*o*_+a*l*_,T=v*l*c-f*b*c-v*o*d+a*b*d+f*o*y-a*l*y,A=t*C+i*x+r*E+s*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/A;return e[0]=C*M,e[1]=(b*d*s-l*y*s-b*r*g+i*y*g+l*r*_-i*d*_)*M,e[2]=(o*y*s-b*c*s+b*r*u-i*y*u-o*r*_+i*c*_)*M,e[3]=(l*c*s-o*d*s-l*r*u+i*d*u+o*r*g-i*c*g)*M,e[4]=x*M,e[5]=(f*y*s-v*d*s+v*r*g-t*y*g-f*r*_+t*d*_)*M,e[6]=(v*c*s-a*y*s-v*r*u+t*y*u+a*r*_-t*c*_)*M,e[7]=(a*d*s-f*c*s+f*r*u-t*d*u-a*r*g+t*c*g)*M,e[8]=E*M,e[9]=(v*l*s-f*b*s-v*i*g+t*b*g+f*i*_-t*l*_)*M,e[10]=(a*b*s-v*o*s+v*i*u-t*b*u-a*i*_+t*o*_)*M,e[11]=(f*o*s-a*l*s-f*i*u+t*l*u+a*i*g-t*o*g)*M,e[12]=T*M,e[13]=(f*b*r-v*l*r+v*i*d-t*b*d-f*i*y+t*l*y)*M,e[14]=(v*o*r-a*b*r-v*i*c+t*b*c+a*i*y-t*o*y)*M,e[15]=(a*l*r-f*o*r+f*i*c-t*l*c-a*i*d+t*o*d)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,u=s*a,f=s*o;return this.set(u*a+i,u*o-r*c,u*c+r*o,0,u*o+r*c,f*o+i,f*c-r*a,0,u*c-r*o,f*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,u=s+s,f=a+a,l=o+o,d=s*u,g=s*f,v=s*l,b=a*f,y=a*l,_=o*l,C=c*u,x=c*f,E=c*l,T=i.x,A=i.y,M=i.z;return r[0]=(1-(b+_))*T,r[1]=(g+E)*T,r[2]=(v-x)*T,r[3]=0,r[4]=(g-E)*A,r[5]=(1-(d+_))*A,r[6]=(y+C)*A,r[7]=0,r[8]=(v+x)*M,r[9]=(y-C)*M,r[10]=(1-(d+b))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=qi.set(r[0],r[1],r[2]).length();const a=qi.set(r[4],r[5],r[6]).length(),o=qi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],on.copy(this);const u=1/s,f=1/a,l=1/o;return on.elements[0]*=u,on.elements[1]*=u,on.elements[2]*=u,on.elements[4]*=f,on.elements[5]*=f,on.elements[6]*=f,on.elements[8]*=l,on.elements[9]*=l,on.elements[10]*=l,t.setFromRotationMatrix(on),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Un){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),l=(t+e)/(t-e),d=(i+r)/(i-r);let g,v;if(o===Un)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Qs)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Un){const c=this.elements,u=1/(t-e),f=1/(i-r),l=1/(a-s),d=(t+e)*u,g=(i+r)*f;let v,b;if(o===Un)v=(a+s)*l,b=-2*l;else if(o===Qs)v=s*l,b=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*f,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=b,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const qi=new W,on=new at,hm=new W(0,0,0),dm=new W(1,1,1),jn=new W,ys=new W,Vt=new W,$l=new at,Kl=new Li;class xn{constructor(e=0,t=0,i=0,r=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],f=r[9],l=r[2],d=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-l,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-l,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-l,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $l.makeRotationFromQuaternion(e),this.setFromRotationMatrix($l,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kl.setFromEuler(this),this.setFromQuaternion(Kl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class Sc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fm=0;const Zl=new W,Yi=new Li,An=new at,xs=new W,zr=new W,pm=new W,mm=new Li,Jl=new W(1,0,0),Ql=new W(0,1,0),eu=new W(0,0,1),gm={type:"added"},_m={type:"removed"},da={type:"childadded",child:null},fa={type:"childremoved",child:null};class wt extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new W,t=new xn,i=new Li,r=new W(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new We}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(Jl,e)}rotateY(e){return this.rotateOnAxis(Ql,e)}rotateZ(e){return this.rotateOnAxis(eu,e)}translateOnAxis(e,t){return Zl.copy(e).applyQuaternion(this.quaternion),this.position.add(Zl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jl,e)}translateY(e){return this.translateOnAxis(Ql,e)}translateZ(e){return this.translateOnAxis(eu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xs.copy(e):xs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(zr,xs,this.up):An.lookAt(xs,zr,this.up),this.quaternion.setFromRotationMatrix(An),r&&(An.extractRotation(r.matrixWorld),Yi.setFromRotationMatrix(An),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(gm),da.child=e,this.dispatchEvent(da),da.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_m),fa.child=e,this.dispatchEvent(fa),fa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,e,pm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,mm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,f=c.length;u<f;u++){const l=c[u];s(e.shapes,l)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),u=a(e.textures),f=a(e.images),l=a(e.shapes),d=a(e.skeletons),g=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),l.length>0&&(i.shapes=l),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const c=[];for(const u in o){const f=o[u];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}wt.DEFAULT_UP=new W(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new W,Cn=new W,pa=new W,Rn=new W,$i=new W,Ki=new W,tu=new W,ma=new W,ga=new W,_a=new W;class gn{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),an.subVectors(e,t),r.cross(an);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){an.subVectors(r,t),Cn.subVectors(i,t),pa.subVectors(e,t);const a=an.dot(an),o=an.dot(Cn),c=an.dot(pa),u=Cn.dot(Cn),f=Cn.dot(pa),l=a*u-o*o;if(l===0)return s.set(0,0,0),null;const d=1/l,g=(u*c-o*f)*d,v=(a*f-o*c)*d;return s.set(1-g-v,v,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,Rn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Rn.x),c.addScaledVector(a,Rn.y),c.addScaledVector(o,Rn.z),c)}static isFrontFacing(e,t,i,r){return an.subVectors(i,t),Cn.subVectors(e,t),an.cross(Cn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),an.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return gn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;$i.subVectors(r,i),Ki.subVectors(s,i),ma.subVectors(e,i);const c=$i.dot(ma),u=Ki.dot(ma);if(c<=0&&u<=0)return t.copy(i);ga.subVectors(e,r);const f=$i.dot(ga),l=Ki.dot(ga);if(f>=0&&l<=f)return t.copy(r);const d=c*l-f*u;if(d<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(i).addScaledVector($i,a);_a.subVectors(e,s);const g=$i.dot(_a),v=Ki.dot(_a);if(v>=0&&g<=v)return t.copy(s);const b=g*u-c*v;if(b<=0&&u>=0&&v<=0)return o=u/(u-v),t.copy(i).addScaledVector(Ki,o);const y=f*v-g*l;if(y<=0&&l-f>=0&&g-v>=0)return tu.subVectors(s,r),o=(l-f)/(l-f+(g-v)),t.copy(r).addScaledVector(tu,o);const _=1/(y+b+d);return a=b*_,o=d*_,t.copy(i).addScaledVector($i,a).addScaledVector(Ki,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},Ss={h:0,s:0,l:0};function va(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=tm(e,1),t=Ot(t,0,1),i=Ot(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=va(a,s,e+1/3),this.g=va(a,s,e),this.b=va(a,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,t=pn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){const i=zh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=ra(e.r),this.g=ra(e.g),this.b=ra(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return Qe.fromWorkingColorSpace(Dt.copy(this),e),Math.round(Ot(Dt.r*255,0,255))*65536+Math.round(Ot(Dt.g*255,0,255))*256+Math.round(Ot(Dt.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Dt.copy(this),t);const i=Dt.r,r=Dt.g,s=Dt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,u;const f=(o+a)/2;if(o===a)c=0,u=0;else{const l=a-o;switch(u=f<=.5?l/(a+o):l/(2-a-o),a){case i:c=(r-s)/l+(r<s?6:0);break;case r:c=(s-i)/l+2;break;case s:c=(i-r)/l+4;break}c/=6}return e.h=c,e.s=u,e.l=f,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=pn){Qe.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,i=Dt.g,r=Dt.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(qn),this.setHSL(qn.h+e,qn.s+t,qn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL(Ss);const i=na(qn.h,Ss.h,t),r=na(qn.s,Ss.s,t),s=na(qn.l,Ss.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new qe;qe.NAMES=zh;let vm=0;class Cr extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=cr,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qa,this.blendDst=Ya,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cr&&(i.blending=this.blending),this.side!==si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qa&&(i.blendSrc=this.blendSrc),this.blendDst!==Ya&&(i.blendDst=this.blendDst),this.blendEquation!==Si&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hh extends Cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new W,bs=new Ne;class vn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return rm("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)bs.fromBufferAttribute(this,t),bs.applyMatrix3(e),this.setXY(t,bs.x,bs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Fr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gl&&(e.usage=this.usage),e}}class Gh extends vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Vh extends vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Tt extends vn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ym=0;const Kt=new at,ya=new wt,Zi=new W,Wt=new ns,Hr=new ns,vt=new W;class hn extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Oh(e)?Vh:Gh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,i){return Kt.makeTranslation(e,t,i),this.applyMatrix4(Kt),this}scale(e,t,i){return Kt.makeScale(e,t,i),this.applyMatrix4(Kt),this}lookAt(e){return ya.lookAt(e),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Wt.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Hr.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(Wt.min,Hr.min),Wt.expandByPoint(vt),vt.addVectors(Wt.max,Hr.max),Wt.expandByPoint(vt)):(Wt.expandByPoint(Hr.min),Wt.expandByPoint(Hr.max))}Wt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(vt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)vt.fromBufferAttribute(o,u),c&&(Zi.fromBufferAttribute(e,u),vt.add(Zi)),r=Math.max(r,i.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<i.count;D++)o[D]=new W,c[D]=new W;const u=new W,f=new W,l=new W,d=new Ne,g=new Ne,v=new Ne,b=new W,y=new W;function _(D,F,S){u.fromBufferAttribute(i,D),f.fromBufferAttribute(i,F),l.fromBufferAttribute(i,S),d.fromBufferAttribute(s,D),g.fromBufferAttribute(s,F),v.fromBufferAttribute(s,S),f.sub(u),l.sub(u),g.sub(d),v.sub(d);const w=1/(g.x*v.y-v.x*g.y);isFinite(w)&&(b.copy(f).multiplyScalar(v.y).addScaledVector(l,-g.y).multiplyScalar(w),y.copy(l).multiplyScalar(g.x).addScaledVector(f,-v.x).multiplyScalar(w),o[D].add(b),o[F].add(b),o[S].add(b),c[D].add(y),c[F].add(y),c[S].add(y))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let D=0,F=C.length;D<F;++D){const S=C[D],w=S.start,k=S.count;for(let G=w,N=w+k;G<N;G+=3)_(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const x=new W,E=new W,T=new W,A=new W;function M(D){T.fromBufferAttribute(r,D),A.copy(T);const F=o[D];x.copy(F),x.sub(T.multiplyScalar(T.dot(F))).normalize(),E.crossVectors(A,F);const w=E.dot(c[D])<0?-1:1;a.setXYZW(D,x.x,x.y,x.z,w)}for(let D=0,F=C.length;D<F;++D){const S=C[D],w=S.start,k=S.count;for(let G=w,N=w+k;G<N;G+=3)M(e.getX(G+0)),M(e.getX(G+1)),M(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const r=new W,s=new W,a=new W,o=new W,c=new W,u=new W,f=new W,l=new W;if(e)for(let d=0,g=e.count;d<g;d+=3){const v=e.getX(d+0),b=e.getX(d+1),y=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,b),a.fromBufferAttribute(t,y),f.subVectors(a,s),l.subVectors(r,s),f.cross(l),o.fromBufferAttribute(i,v),c.fromBufferAttribute(i,b),u.fromBufferAttribute(i,y),o.add(f),c.add(f),u.add(f),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(b,c.x,c.y,c.z),i.setXYZ(y,u.x,u.y,u.z)}else for(let d=0,g=t.count;d<g;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),f.subVectors(a,s),l.subVectors(r,s),f.cross(l),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,c){const u=o.array,f=o.itemSize,l=o.normalized,d=new u.constructor(c.length*f);let g=0,v=0;for(let b=0,y=c.length;b<y;b++){o.isInterleavedBufferAttribute?g=c[b]*o.data.stride+o.offset:g=c[b]*f;for(let _=0;_<f;_++)d[v++]=u[g++]}return new vn(d,f,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=e(c,i);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let f=0,l=u.length;f<l;f++){const d=u[f],g=e(d,i);c.push(g)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],f=[];for(let l=0,d=u.length;l<d;l++){const g=u[l];f.push(g.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(t))}const s=e.morphAttributes;for(const u in s){const f=[],l=s[u];for(let d=0,g=l.length;d<g;d++)f.push(l[d].clone(t));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,f=a.length;u<f;u++){const l=a[u];this.addGroup(l.start,l.count,l.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nu=new at,mi=new Eo,Es=new bo,iu=new W,Ji=new W,Qi=new W,er=new W,xa=new W,Ms=new W,ws=new Ne,Ts=new Ne,As=new Ne,ru=new W,su=new W,ou=new W,Cs=new W,Rs=new W;class _n extends wt{constructor(e=new hn,t=new Hh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ms.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const f=o[c],l=s[c];f!==0&&(xa.fromBufferAttribute(l,e),a?Ms.addScaledVector(xa,f):Ms.addScaledVector(xa.sub(t),f))}t.add(Ms)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Es.copy(i.boundingSphere),Es.applyMatrix4(s),mi.copy(e.ray).recast(e.near),!(Es.containsPoint(mi.origin)===!1&&(mi.intersectSphere(Es,iu)===null||mi.origin.distanceToSquared(iu)>(e.far-e.near)**2))&&(nu.copy(s).invert(),mi.copy(e.ray).applyMatrix4(nu),!(i.boundingBox!==null&&mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,l=s.attributes.normal,d=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,b=d.length;v<b;v++){const y=d[v],_=a[y.materialIndex],C=Math.max(y.start,g.start),x=Math.min(o.count,Math.min(y.start+y.count,g.start+g.count));for(let E=C,T=x;E<T;E+=3){const A=o.getX(E),M=o.getX(E+1),D=o.getX(E+2);r=Ls(this,_,e,i,u,f,l,A,M,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{const v=Math.max(0,g.start),b=Math.min(o.count,g.start+g.count);for(let y=v,_=b;y<_;y+=3){const C=o.getX(y),x=o.getX(y+1),E=o.getX(y+2);r=Ls(this,a,e,i,u,f,l,C,x,E),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,b=d.length;v<b;v++){const y=d[v],_=a[y.materialIndex],C=Math.max(y.start,g.start),x=Math.min(c.count,Math.min(y.start+y.count,g.start+g.count));for(let E=C,T=x;E<T;E+=3){const A=E,M=E+1,D=E+2;r=Ls(this,_,e,i,u,f,l,A,M,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{const v=Math.max(0,g.start),b=Math.min(c.count,g.start+g.count);for(let y=v,_=b;y<_;y+=3){const C=y,x=y+1,E=y+2;r=Ls(this,a,e,i,u,f,l,C,x,E),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}}}function xm(n,e,t,i,r,s,a,o){let c;if(e.side===Bt?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===si,o),c===null)return null;Rs.copy(o),Rs.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Rs);return u<t.near||u>t.far?null:{distance:u,point:Rs.clone(),object:n}}function Ls(n,e,t,i,r,s,a,o,c,u){n.getVertexPosition(o,Ji),n.getVertexPosition(c,Qi),n.getVertexPosition(u,er);const f=xm(n,e,t,i,Ji,Qi,er,Cs);if(f){r&&(ws.fromBufferAttribute(r,o),Ts.fromBufferAttribute(r,c),As.fromBufferAttribute(r,u),f.uv=gn.getInterpolation(Cs,Ji,Qi,er,ws,Ts,As,new Ne)),s&&(ws.fromBufferAttribute(s,o),Ts.fromBufferAttribute(s,c),As.fromBufferAttribute(s,u),f.uv1=gn.getInterpolation(Cs,Ji,Qi,er,ws,Ts,As,new Ne)),a&&(ru.fromBufferAttribute(a,o),su.fromBufferAttribute(a,c),ou.fromBufferAttribute(a,u),f.normal=gn.getInterpolation(Cs,Ji,Qi,er,ru,su,ou,new W),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const l={a:o,b:c,c:u,normal:new W,materialIndex:0};gn.getNormal(Ji,Qi,er,l.normal),f.face=l}return f}class Rr extends hn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],f=[],l=[];let d=0,g=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Tt(u,3)),this.setAttribute("normal",new Tt(f,3)),this.setAttribute("uv",new Tt(l,2));function v(b,y,_,C,x,E,T,A,M,D,F){const S=E/M,w=T/D,k=E/2,G=T/2,N=A/2,Y=M+1,X=D+1;let ie=0,ee=0;const K=new W;for(let ae=0;ae<X;ae++){const he=ae*w-G;for(let ve=0;ve<Y;ve++){const Ee=ve*S-k;K[b]=Ee*C,K[y]=he*x,K[_]=N,u.push(K.x,K.y,K.z),K[b]=0,K[y]=0,K[_]=A>0?1:-1,f.push(K.x,K.y,K.z),l.push(ve/M),l.push(1-ae/D),ie+=1}}for(let ae=0;ae<D;ae++)for(let he=0;he<M;he++){const ve=d+he+Y*ae,Ee=d+he+Y*(ae+1),q=d+(he+1)+Y*(ae+1),ce=d+(he+1)+Y*ae;c.push(ve,Ee,ce),c.push(Ee,q,ce),ee+=6}o.addGroup(g,ee,F),g+=ee,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ut(n){const e={};for(let t=0;t<n.length;t++){const i=vr(n[t]);for(const r in i)e[r]=i[r]}return e}function Sm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Wh(n){return n.getRenderTarget()===null?n.outputColorSpace:Qe.workingColorSpace}const bm={clone:vr,merge:Ut};var Em=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends Cr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Em,this.fragmentShader=Mm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vr(e.uniforms),this.uniformsGroups=Sm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Xh extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Un}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new W,au=new Ne,cu=new Ne;class Zt extends Xh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ec*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ec*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z)}getViewSize(e,t){return this.getViewBounds(e,au,cu),t.subVectors(cu,au)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const tr=-90,nr=1;class wm extends wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zt(tr,nr,e,t);r.layers=this.layers,this.add(r);const s=new Zt(tr,nr,e,t);s.layers=this.layers,this.add(s);const a=new Zt(tr,nr,e,t);a.layers=this.layers,this.add(a);const o=new Zt(tr,nr,e,t);o.layers=this.layers,this.add(o);const c=new Zt(tr,nr,e,t);c.layers=this.layers,this.add(c);const u=new Zt(tr,nr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const u of t)this.remove(u);if(e===Un)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Qs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,f]=this.children,l=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,r),e.render(t,f),e.setRenderTarget(l,d,g),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class jh extends zt{constructor(e,t,i,r,s,a,o,c,u,f){e=e!==void 0?e:[],t=t!==void 0?t:mr,super(e,t,i,r,s,a,o,c,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tm extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new jh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Rr(5,5,5),s=new oi({name:"CubemapFromEquirect",uniforms:vr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:ti});s.uniforms.tEquirect.value=t;const a=new _n(r,s),o=t.minFilter;return t.minFilter===Ei&&(t.minFilter=kt),new wm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Sa=new W,Am=new W,Cm=new We;class $n{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Sa.subVectors(i,t).cross(Am.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Sa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Cm.getNormalMatrix(e),r=this.coplanarPoint(Sa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new bo,Ds=new W;class bc{constructor(e=new $n,t=new $n,i=new $n,r=new $n,s=new $n,a=new $n){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Un){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],u=r[4],f=r[5],l=r[6],d=r[7],g=r[8],v=r[9],b=r[10],y=r[11],_=r[12],C=r[13],x=r[14],E=r[15];if(i[0].setComponents(c-s,d-u,y-g,E-_).normalize(),i[1].setComponents(c+s,d+u,y+g,E+_).normalize(),i[2].setComponents(c+a,d+f,y+v,E+C).normalize(),i[3].setComponents(c-a,d-f,y-v,E-C).normalize(),i[4].setComponents(c-o,d-l,y-b,E-x).normalize(),t===Un)i[5].setComponents(c+o,d+l,y+b,E+x).normalize();else if(t===Qs)i[5].setComponents(o,l,b,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ds.x=r.normal.x>0?e.max.x:e.min.x,Ds.y=r.normal.y>0?e.max.y:e.min.y,Ds.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ds)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qh(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Rm(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,f){const l=u.array,d=u.usage,g=l.byteLength,v=n.createBuffer();n.bindBuffer(f,v),n.bufferData(f,l,d),u.onUploadCallback();let b;if(l instanceof Float32Array)b=n.FLOAT;else if(l instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)b=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)b=n.SHORT;else if(l instanceof Uint32Array)b=n.UNSIGNED_INT;else if(l instanceof Int32Array)b=n.INT;else if(l instanceof Int8Array)b=n.BYTE;else if(l instanceof Uint8Array)b=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)b=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:v,type:b,bytesPerElement:l.BYTES_PER_ELEMENT,version:u.version,size:g}}function s(u,f,l){const d=f.array,g=f._updateRange,v=f.updateRanges;if(n.bindBuffer(l,u),g.count===-1&&v.length===0&&n.bufferSubData(l,0,d),v.length!==0){for(let b=0,y=v.length;b<y;b++){const _=v[b];t?n.bufferSubData(l,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count):n.bufferSubData(l,_.start*d.BYTES_PER_ELEMENT,d.subarray(_.start,_.start+_.count))}f.clearUpdateRanges()}g.count!==-1&&(t?n.bufferSubData(l,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):n.bufferSubData(l,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1),f.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(n.deleteBuffer(f.buffer),i.delete(u))}function c(u,f){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const l=i.get(u);if(l===void 0)i.set(u,r(u,f));else if(l.version<u.version){if(l.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(l.buffer,u,f),l.version=u.version}}return{get:a,remove:o,update:c}}class Mo extends hn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),u=o+1,f=c+1,l=e/o,d=t/c,g=[],v=[],b=[],y=[];for(let _=0;_<f;_++){const C=_*d-a;for(let x=0;x<u;x++){const E=x*l-s;v.push(E,-C,0),b.push(0,0,1),y.push(x/o),y.push(1-_/c)}}for(let _=0;_<c;_++)for(let C=0;C<o;C++){const x=C+u*_,E=C+u*(_+1),T=C+1+u*(_+1),A=C+1+u*_;g.push(x,E,A),g.push(E,T,A)}this.setIndex(g),this.setAttribute("position",new Tt(v,3)),this.setAttribute("normal",new Tt(b,3)),this.setAttribute("uv",new Tt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Lm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Im=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Um=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Om=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,km=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,zm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$m=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Km=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Jm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Qm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ng=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ig=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,og="gl_FragColor = linearToOutputTexel( gl_FragColor );",ag=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,cg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ug=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_g=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,yg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Eg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Mg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ag=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Rg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ig=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ug=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ng=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Og=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Fg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,jg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,qg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Yg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$g=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,e_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,r_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,o_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,c_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,d_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,f_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,p_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,m_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,g_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,__=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,v_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,x_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,M_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,w_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,T_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,A_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,C_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,R_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const L_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,D_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,F_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,k_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,B_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,H_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,V_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,W_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,X_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Z_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,J_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,t0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,s0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,c0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:Lm,alphahash_pars_fragment:Dm,alphamap_fragment:Pm,alphamap_pars_fragment:Im,alphatest_fragment:Um,alphatest_pars_fragment:Nm,aomap_fragment:Om,aomap_pars_fragment:Fm,batching_pars_vertex:km,batching_vertex:Bm,begin_vertex:zm,beginnormal_vertex:Hm,bsdfs:Gm,iridescence_fragment:Vm,bumpmap_pars_fragment:Wm,clipping_planes_fragment:Xm,clipping_planes_pars_fragment:jm,clipping_planes_pars_vertex:qm,clipping_planes_vertex:Ym,color_fragment:$m,color_pars_fragment:Km,color_pars_vertex:Zm,color_vertex:Jm,common:Qm,cube_uv_reflection_fragment:eg,defaultnormal_vertex:tg,displacementmap_pars_vertex:ng,displacementmap_vertex:ig,emissivemap_fragment:rg,emissivemap_pars_fragment:sg,colorspace_fragment:og,colorspace_pars_fragment:ag,envmap_fragment:cg,envmap_common_pars_fragment:lg,envmap_pars_fragment:ug,envmap_pars_vertex:hg,envmap_physical_pars_fragment:Eg,envmap_vertex:dg,fog_vertex:fg,fog_pars_vertex:pg,fog_fragment:mg,fog_pars_fragment:gg,gradientmap_pars_fragment:_g,lightmap_fragment:vg,lightmap_pars_fragment:yg,lights_lambert_fragment:xg,lights_lambert_pars_fragment:Sg,lights_pars_begin:bg,lights_toon_fragment:Mg,lights_toon_pars_fragment:wg,lights_phong_fragment:Tg,lights_phong_pars_fragment:Ag,lights_physical_fragment:Cg,lights_physical_pars_fragment:Rg,lights_fragment_begin:Lg,lights_fragment_maps:Dg,lights_fragment_end:Pg,logdepthbuf_fragment:Ig,logdepthbuf_pars_fragment:Ug,logdepthbuf_pars_vertex:Ng,logdepthbuf_vertex:Og,map_fragment:Fg,map_pars_fragment:kg,map_particle_fragment:Bg,map_particle_pars_fragment:zg,metalnessmap_fragment:Hg,metalnessmap_pars_fragment:Gg,morphinstance_vertex:Vg,morphcolor_vertex:Wg,morphnormal_vertex:Xg,morphtarget_pars_vertex:jg,morphtarget_vertex:qg,normal_fragment_begin:Yg,normal_fragment_maps:$g,normal_pars_fragment:Kg,normal_pars_vertex:Zg,normal_vertex:Jg,normalmap_pars_fragment:Qg,clearcoat_normal_fragment_begin:e_,clearcoat_normal_fragment_maps:t_,clearcoat_pars_fragment:n_,iridescence_pars_fragment:i_,opaque_fragment:r_,packing:s_,premultiplied_alpha_fragment:o_,project_vertex:a_,dithering_fragment:c_,dithering_pars_fragment:l_,roughnessmap_fragment:u_,roughnessmap_pars_fragment:h_,shadowmap_pars_fragment:d_,shadowmap_pars_vertex:f_,shadowmap_vertex:p_,shadowmask_pars_fragment:m_,skinbase_vertex:g_,skinning_pars_vertex:__,skinning_vertex:v_,skinnormal_vertex:y_,specularmap_fragment:x_,specularmap_pars_fragment:S_,tonemapping_fragment:b_,tonemapping_pars_fragment:E_,transmission_fragment:M_,transmission_pars_fragment:w_,uv_pars_fragment:T_,uv_pars_vertex:A_,uv_vertex:C_,worldpos_vertex:R_,background_vert:L_,background_frag:D_,backgroundCube_vert:P_,backgroundCube_frag:I_,cube_vert:U_,cube_frag:N_,depth_vert:O_,depth_frag:F_,distanceRGBA_vert:k_,distanceRGBA_frag:B_,equirect_vert:z_,equirect_frag:H_,linedashed_vert:G_,linedashed_frag:V_,meshbasic_vert:W_,meshbasic_frag:X_,meshlambert_vert:j_,meshlambert_frag:q_,meshmatcap_vert:Y_,meshmatcap_frag:$_,meshnormal_vert:K_,meshnormal_frag:Z_,meshphong_vert:J_,meshphong_frag:Q_,meshphysical_vert:e0,meshphysical_frag:t0,meshtoon_vert:n0,meshtoon_frag:i0,points_vert:r0,points_frag:s0,shadow_vert:o0,shadow_frag:a0,sprite_vert:c0,sprite_frag:l0},me={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},mn={basic:{uniforms:Ut([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Ut([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Ut([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Ut([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Ut([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Ut([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Ut([me.points,me.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Ut([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Ut([me.common,me.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Ut([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Ut([me.sprite,me.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Ut([me.common,me.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Ut([me.lights,me.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};mn.physical={uniforms:Ut([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Ps={r:0,b:0,g:0},_i=new xn,u0=new at;function h0(n,e,t,i,r,s,a){const o=new qe(0);let c=s===!0?0:1,u,f,l=null,d=0,g=null;function v(y,_){let C=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x)),x===null?b(o,c):x&&x.isColor&&(b(x,1),C=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||C)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===xo)?(f===void 0&&(f=new _n(new Rr(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:vr(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(T,A,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),_i.copy(_.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),f.material.uniforms.envMap.value=x,f.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(u0.makeRotationFromEuler(_i)),f.material.toneMapped=Qe.getTransfer(x.colorSpace)!==it,(l!==x||d!==x.version||g!==n.toneMapping)&&(f.material.needsUpdate=!0,l=x,d=x.version,g=n.toneMapping),f.layers.enableAll(),y.unshift(f,f.geometry,f.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new _n(new Mo(2,2),new oi({name:"BackgroundMaterial",uniforms:vr(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(x.colorSpace)!==it,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(l!==x||d!==x.version||g!==n.toneMapping)&&(u.material.needsUpdate=!0,l=x,d=x.version,g=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function b(y,_){y.getRGB(Ps,Wh(n)),i.buffers.color.setClear(Ps.r,Ps.g,Ps.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),c=_,b(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,b(o,c)},render:v}}function d0(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},c=y(null);let u=c,f=!1;function l(N,Y,X,ie,ee){let K=!1;if(a){const ae=b(ie,X,Y);u!==ae&&(u=ae,g(u.object)),K=_(N,ie,X,ee),K&&C(N,ie,X,ee)}else{const ae=Y.wireframe===!0;(u.geometry!==ie.id||u.program!==X.id||u.wireframe!==ae)&&(u.geometry=ie.id,u.program=X.id,u.wireframe=ae,K=!0)}ee!==null&&t.update(ee,n.ELEMENT_ARRAY_BUFFER),(K||f)&&(f=!1,D(N,Y,X,ie),ee!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ee).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function g(N){return i.isWebGL2?n.bindVertexArray(N):s.bindVertexArrayOES(N)}function v(N){return i.isWebGL2?n.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function b(N,Y,X){const ie=X.wireframe===!0;let ee=o[N.id];ee===void 0&&(ee={},o[N.id]=ee);let K=ee[Y.id];K===void 0&&(K={},ee[Y.id]=K);let ae=K[ie];return ae===void 0&&(ae=y(d()),K[ie]=ae),ae}function y(N){const Y=[],X=[],ie=[];for(let ee=0;ee<r;ee++)Y[ee]=0,X[ee]=0,ie[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:X,attributeDivisors:ie,object:N,attributes:{},index:null}}function _(N,Y,X,ie){const ee=u.attributes,K=Y.attributes;let ae=0;const he=X.getAttributes();for(const ve in he)if(he[ve].location>=0){const q=ee[ve];let ce=K[ve];if(ce===void 0&&(ve==="instanceMatrix"&&N.instanceMatrix&&(ce=N.instanceMatrix),ve==="instanceColor"&&N.instanceColor&&(ce=N.instanceColor)),q===void 0||q.attribute!==ce||ce&&q.data!==ce.data)return!0;ae++}return u.attributesNum!==ae||u.index!==ie}function C(N,Y,X,ie){const ee={},K=Y.attributes;let ae=0;const he=X.getAttributes();for(const ve in he)if(he[ve].location>=0){let q=K[ve];q===void 0&&(ve==="instanceMatrix"&&N.instanceMatrix&&(q=N.instanceMatrix),ve==="instanceColor"&&N.instanceColor&&(q=N.instanceColor));const ce={};ce.attribute=q,q&&q.data&&(ce.data=q.data),ee[ve]=ce,ae++}u.attributes=ee,u.attributesNum=ae,u.index=ie}function x(){const N=u.newAttributes;for(let Y=0,X=N.length;Y<X;Y++)N[Y]=0}function E(N){T(N,0)}function T(N,Y){const X=u.newAttributes,ie=u.enabledAttributes,ee=u.attributeDivisors;X[N]=1,ie[N]===0&&(n.enableVertexAttribArray(N),ie[N]=1),ee[N]!==Y&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,Y),ee[N]=Y)}function A(){const N=u.newAttributes,Y=u.enabledAttributes;for(let X=0,ie=Y.length;X<ie;X++)Y[X]!==N[X]&&(n.disableVertexAttribArray(X),Y[X]=0)}function M(N,Y,X,ie,ee,K,ae){ae===!0?n.vertexAttribIPointer(N,Y,X,ee,K):n.vertexAttribPointer(N,Y,X,ie,ee,K)}function D(N,Y,X,ie){if(i.isWebGL2===!1&&(N.isInstancedMesh||ie.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const ee=ie.attributes,K=X.getAttributes(),ae=Y.defaultAttributeValues;for(const he in K){const ve=K[he];if(ve.location>=0){let Ee=ee[he];if(Ee===void 0&&(he==="instanceMatrix"&&N.instanceMatrix&&(Ee=N.instanceMatrix),he==="instanceColor"&&N.instanceColor&&(Ee=N.instanceColor)),Ee!==void 0){const q=Ee.normalized,ce=Ee.itemSize,ge=t.get(Ee);if(ge===void 0)continue;const De=ge.buffer,Ce=ge.type,xe=ge.bytesPerElement,He=i.isWebGL2===!0&&(Ce===n.INT||Ce===n.UNSIGNED_INT||Ee.gpuType===Ah);if(Ee.isInterleavedBufferAttribute){const Ie=Ee.data,V=Ie.stride,Ke=Ee.offset;if(Ie.isInstancedInterleavedBuffer){for(let Me=0;Me<ve.locationSize;Me++)T(ve.location+Me,Ie.meshPerAttribute);N.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let Me=0;Me<ve.locationSize;Me++)E(ve.location+Me);n.bindBuffer(n.ARRAY_BUFFER,De);for(let Me=0;Me<ve.locationSize;Me++)M(ve.location+Me,ce/ve.locationSize,Ce,q,V*xe,(Ke+ce/ve.locationSize*Me)*xe,He)}else{if(Ee.isInstancedBufferAttribute){for(let Ie=0;Ie<ve.locationSize;Ie++)T(ve.location+Ie,Ee.meshPerAttribute);N.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Ie=0;Ie<ve.locationSize;Ie++)E(ve.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,De);for(let Ie=0;Ie<ve.locationSize;Ie++)M(ve.location+Ie,ce/ve.locationSize,Ce,q,ce*xe,ce/ve.locationSize*Ie*xe,He)}}else if(ae!==void 0){const q=ae[he];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(ve.location,q);break;case 3:n.vertexAttrib3fv(ve.location,q);break;case 4:n.vertexAttrib4fv(ve.location,q);break;default:n.vertexAttrib1fv(ve.location,q)}}}}A()}function F(){k();for(const N in o){const Y=o[N];for(const X in Y){const ie=Y[X];for(const ee in ie)v(ie[ee].object),delete ie[ee];delete Y[X]}delete o[N]}}function S(N){if(o[N.id]===void 0)return;const Y=o[N.id];for(const X in Y){const ie=Y[X];for(const ee in ie)v(ie[ee].object),delete ie[ee];delete Y[X]}delete o[N.id]}function w(N){for(const Y in o){const X=o[Y];if(X[N.id]===void 0)continue;const ie=X[N.id];for(const ee in ie)v(ie[ee].object),delete ie[ee];delete X[N.id]}}function k(){G(),f=!0,u!==c&&(u=c,g(u.object))}function G(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:l,reset:k,resetDefaultState:G,dispose:F,releaseStatesOfGeometry:S,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:E,disableUnusedAttributes:A}}function f0(n,e,t,i){const r=i.isWebGL2;let s;function a(f){s=f}function o(f,l){n.drawArrays(s,f,l),t.update(l,s,1)}function c(f,l,d){if(d===0)return;let g,v;if(r)g=n,v="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[v](s,f,l,d),t.update(l,s,d)}function u(f,l,d){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<d;v++)this.render(f[v],l[v]);else{g.multiDrawArraysWEBGL(s,f,0,l,0,d);let v=0;for(let b=0;b<d;b++)v+=l[b];t.update(v,s,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=u}function p0(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const u=a||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,l=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),b=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),C=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,E=a||e.has("OES_texture_float"),T=x&&E,A=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:f,maxTextures:l,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:v,maxAttributes:b,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:C,vertexTextures:x,floatFragmentTextures:E,floatVertexTextures:T,maxSamples:A}}function m0(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new $n,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,d){const g=l.length!==0||d||i!==0||r;return r=d,i=l.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(l,d){t=f(l,d,0)},this.setState=function(l,d,g){const v=l.clippingPlanes,b=l.clipIntersection,y=l.clipShadows,_=n.get(l);if(!r||v===null||v.length===0||s&&!y)s?f(null):u();else{const C=s?0:i,x=C*4;let E=_.clippingState||null;c.value=E,E=f(v,d,x,g);for(let T=0;T!==x;++T)E[T]=t[T];_.clippingState=E,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=C}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(l,d,g,v){const b=l!==null?l.length:0;let y=null;if(b!==0){if(y=c.value,v!==!0||y===null){const _=g+b*4,C=d.matrixWorldInverse;o.getNormalMatrix(C),(y===null||y.length<_)&&(y=new Float32Array(_));for(let x=0,E=g;x!==b;++x,E+=4)a.copy(l[x]).applyMatrix4(C,o),a.normal.toArray(y,E),y[E+3]=a.constant}c.value=y,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}function g0(n){let e=new WeakMap;function t(a,o){return o===$a?a.mapping=mr:o===Ka&&(a.mapping=gr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===$a||o===Ka)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new Tm(c.height);return u.fromEquirectangularTexture(n,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Yh extends Xh{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const or=4,lu=[.125,.215,.35,.446,.526,.582],bi=20,ba=new Yh,uu=new qe;let Ea=null,Ma=0,wa=0;const yi=(1+Math.sqrt(5))/2,ir=1/yi,hu=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,yi,ir),new W(0,yi,-ir),new W(ir,0,yi),new W(-ir,0,yi),new W(yi,ir,0),new W(-yi,ir,0)];class du{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ea=this._renderer.getRenderTarget(),Ma=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ea,Ma,wa),e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mr||e.mapping===gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ea=this._renderer.getRenderTarget(),Ma=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Wr,format:ln,colorSpace:li,depthBuffer:!1},r=fu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_0(s)),this._blurMaterial=v0(s,e,t)}return r}_compileMaterial(e){const t=new _n(this._lodPlanes[0],e);this._renderer.compile(t,ba)}_sceneToCubeUV(e,t,i,r){const o=new Zt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,l=f.autoClear,d=f.toneMapping;f.getClearColor(uu),f.toneMapping=ni,f.autoClear=!1;const g=new Hh({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),v=new _n(new Rr,g);let b=!1;const y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,b=!0):(g.color.copy(uu),b=!0);for(let _=0;_<6;_++){const C=_%3;C===0?(o.up.set(0,c[_],0),o.lookAt(u[_],0,0)):C===1?(o.up.set(0,0,c[_]),o.lookAt(0,u[_],0)):(o.up.set(0,c[_],0),o.lookAt(0,0,u[_]));const x=this._cubeSize;Is(r,C*x,_>2?x:0,x,x),f.setRenderTarget(r),b&&f.render(v,o),f.render(e,o)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=d,f.autoClear=l,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===mr||e.mapping===gr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new _n(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Is(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,ba)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=hu[(r-1)%hu.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,l=new _n(this._lodPlanes[r],u),d=u.uniforms,g=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*bi-1),b=s/v,y=isFinite(s)?1+Math.floor(f*b):bi;y>bi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${bi}`);const _=[];let C=0;for(let M=0;M<bi;++M){const D=M/b,F=Math.exp(-D*D/2);_.push(F),M===0?C+=F:M<y&&(C+=2*F)}for(let M=0;M<_.length;M++)_[M]=_[M]/C;d.envMap.value=e.texture,d.samples.value=y,d.weights.value=_,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=v,d.mipInt.value=x-i;const E=this._sizeLods[r],T=3*E*(r>x-or?r-x+or:0),A=4*(this._cubeSize-E);Is(t,T,A,3*E,2*E),c.setRenderTarget(t),c.render(l,ba)}}function _0(n){const e=[],t=[],i=[];let r=n;const s=n-or+1+lu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-or?c=lu[a-n+or-1]:a===0&&(c=0),i.push(c);const u=1/(o-2),f=-u,l=1+u,d=[f,f,l,f,l,l,f,f,l,l,f,l],g=6,v=6,b=3,y=2,_=1,C=new Float32Array(b*v*g),x=new Float32Array(y*v*g),E=new Float32Array(_*v*g);for(let A=0;A<g;A++){const M=A%3*2/3-1,D=A>2?0:-1,F=[M,D,0,M+2/3,D,0,M+2/3,D+1,0,M,D,0,M+2/3,D+1,0,M,D+1,0];C.set(F,b*v*A),x.set(d,y*v*A);const S=[A,A,A,A,A,A];E.set(S,_*v*A)}const T=new hn;T.setAttribute("position",new vn(C,b)),T.setAttribute("uv",new vn(x,y)),T.setAttribute("faceIndex",new vn(E,_)),e.push(T),r>or&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function fu(n,e,t){const i=new Ri(n,e,t);return i.texture.mapping=xo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Is(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function v0(n,e,t){const i=new Float32Array(bi),r=new W(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function pu(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function mu(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Ec(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function y0(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,u=c===$a||c===Ka,f=c===mr||c===gr;if(u||f)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let l=e.get(o);return t===null&&(t=new du(n)),l=u?t.fromEquirectangular(o,l):t.fromCubemap(o,l),e.set(o,l),l.texture}else{if(e.has(o))return e.get(o).texture;{const l=o.image;if(u&&l&&l.height>0||f&&l&&r(l)){t===null&&(t=new du(n));const d=u?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let c=0;const u=6;for(let f=0;f<u;f++)o[f]!==void 0&&c++;return c===u}function s(o){const c=o.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function x0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function S0(n,e,t,i){const r={},s=new WeakMap;function a(l){const d=l.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const b=d.morphAttributes[v];for(let y=0,_=b.length;y<_;y++)e.remove(b[y])}d.removeEventListener("dispose",a),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(l,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(l){const d=l.attributes;for(const v in d)e.update(d[v],n.ARRAY_BUFFER);const g=l.morphAttributes;for(const v in g){const b=g[v];for(let y=0,_=b.length;y<_;y++)e.update(b[y],n.ARRAY_BUFFER)}}function u(l){const d=[],g=l.index,v=l.attributes.position;let b=0;if(g!==null){const C=g.array;b=g.version;for(let x=0,E=C.length;x<E;x+=3){const T=C[x+0],A=C[x+1],M=C[x+2];d.push(T,A,A,M,M,T)}}else if(v!==void 0){const C=v.array;b=v.version;for(let x=0,E=C.length/3-1;x<E;x+=3){const T=x+0,A=x+1,M=x+2;d.push(T,A,A,M,M,T)}}else return;const y=new(Oh(d)?Vh:Gh)(d,1);y.version=b;const _=s.get(l);_&&e.remove(_),s.set(l,y)}function f(l){const d=s.get(l);if(d){const g=l.index;g!==null&&d.version<g.version&&u(l)}else u(l);return s.get(l)}return{get:o,update:c,getWireframeAttribute:f}}function b0(n,e,t,i){const r=i.isWebGL2;let s;function a(g){s=g}let o,c;function u(g){o=g.type,c=g.bytesPerElement}function f(g,v){n.drawElements(s,v,o,g*c),t.update(v,s,1)}function l(g,v,b){if(b===0)return;let y,_;if(r)y=n,_="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[_](s,v,o,g*c,b),t.update(v,s,b)}function d(g,v,b){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<b;_++)this.render(g[_]/c,v[_]);else{y.multiDrawElementsWEBGL(s,v,0,o,g,0,b);let _=0;for(let C=0;C<b;C++)_+=v[C];t.update(_,s,1)}}this.setMode=a,this.setIndex=u,this.render=f,this.renderInstances=l,this.renderMultiDraw=d}function E0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function M0(n,e){return n[0]-e[0]}function w0(n,e){return Math.abs(e[1])-Math.abs(n[1])}function T0(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new bt,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function c(u,f,l){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,b=v!==void 0?v.length:0;let y=s.get(f);if(y===void 0||y.count!==b){let G=function(){w.dispose(),s.delete(f),f.removeEventListener("dispose",G)};var g=G;y!==void 0&&y.texture.dispose();const _=f.morphAttributes.position!==void 0,C=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,E=f.morphAttributes.position||[],T=f.morphAttributes.normal||[],A=f.morphAttributes.color||[];let M=0;_===!0&&(M=1),C===!0&&(M=2),x===!0&&(M=3);let D=f.attributes.position.count*M,F=1;D>e.maxTextureSize&&(F=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const S=new Float32Array(D*F*4*b),w=new Bh(S,D,F,b);w.type=In,w.needsUpdate=!0;const k=M*4;for(let N=0;N<b;N++){const Y=E[N],X=T[N],ie=A[N],ee=D*F*4*N;for(let K=0;K<Y.count;K++){const ae=K*k;_===!0&&(a.fromBufferAttribute(Y,K),S[ee+ae+0]=a.x,S[ee+ae+1]=a.y,S[ee+ae+2]=a.z,S[ee+ae+3]=0),C===!0&&(a.fromBufferAttribute(X,K),S[ee+ae+4]=a.x,S[ee+ae+5]=a.y,S[ee+ae+6]=a.z,S[ee+ae+7]=0),x===!0&&(a.fromBufferAttribute(ie,K),S[ee+ae+8]=a.x,S[ee+ae+9]=a.y,S[ee+ae+10]=a.z,S[ee+ae+11]=ie.itemSize===4?a.w:1)}}y={count:b,texture:w,size:new Ne(D,F)},s.set(f,y),f.addEventListener("dispose",G)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let _=0;for(let x=0;x<d.length;x++)_+=d[x];const C=f.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",C),l.getUniforms().setValue(n,"morphTargetInfluences",d)}l.getUniforms().setValue(n,"morphTargetsTexture",y.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",y.size)}else{const v=d===void 0?0:d.length;let b=i[f.id];if(b===void 0||b.length!==v){b=[];for(let E=0;E<v;E++)b[E]=[E,0];i[f.id]=b}for(let E=0;E<v;E++){const T=b[E];T[0]=E,T[1]=d[E]}b.sort(w0);for(let E=0;E<8;E++)E<v&&b[E][1]?(o[E][0]=b[E][0],o[E][1]=b[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(M0);const y=f.morphAttributes.position,_=f.morphAttributes.normal;let C=0;for(let E=0;E<8;E++){const T=o[E],A=T[0],M=T[1];A!==Number.MAX_SAFE_INTEGER&&M?(y&&f.getAttribute("morphTarget"+E)!==y[A]&&f.setAttribute("morphTarget"+E,y[A]),_&&f.getAttribute("morphNormal"+E)!==_[A]&&f.setAttribute("morphNormal"+E,_[A]),r[E]=M,C+=M):(y&&f.hasAttribute("morphTarget"+E)===!0&&f.deleteAttribute("morphTarget"+E),_&&f.hasAttribute("morphNormal"+E)===!0&&f.deleteAttribute("morphNormal"+E),r[E]=0)}const x=f.morphTargetsRelative?1:1-C;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function A0(n,e,t,i){let r=new WeakMap;function s(c){const u=i.render.frame,f=c.geometry,l=e.get(c,f);if(r.get(l)!==u&&(e.update(l),r.set(l,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return l}function a(){r=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}class $h extends zt{constructor(e,t,i,r,s,a,o,c,u,f){if(f=f!==void 0?f:wi,f!==wi&&f!==_r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===wi&&(i=Qn),i===void 0&&f===_r&&(i=Mi),super(null,r,s,a,o,c,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Nt,this.minFilter=c!==void 0?c:Nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Kh=new zt,Zh=new $h(1,1);Zh.compareFunction=Nh;const Jh=new Bh,Qh=new lm,ed=new jh,gu=[],_u=[],vu=new Float32Array(16),yu=new Float32Array(9),xu=new Float32Array(4);function Lr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=gu[r];if(s===void 0&&(s=new Float32Array(r),gu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function wo(n,e){let t=_u[e];t===void 0&&(t=new Int32Array(e),_u[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function C0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function R0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2fv(this.addr,e),mt(t,e)}}function L0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;n.uniform3fv(this.addr,e),mt(t,e)}}function D0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4fv(this.addr,e),mt(t,e)}}function P0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;xu.set(i),n.uniformMatrix2fv(this.addr,!1,xu),mt(t,i)}}function I0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;yu.set(i),n.uniformMatrix3fv(this.addr,!1,yu),mt(t,i)}}function U0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;vu.set(i),n.uniformMatrix4fv(this.addr,!1,vu),mt(t,i)}}function N0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function O0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2iv(this.addr,e),mt(t,e)}}function F0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3iv(this.addr,e),mt(t,e)}}function k0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4iv(this.addr,e),mt(t,e)}}function B0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function z0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2uiv(this.addr,e),mt(t,e)}}function H0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3uiv(this.addr,e),mt(t,e)}}function G0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4uiv(this.addr,e),mt(t,e)}}function V0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Zh:Kh;t.setTexture2D(e||s,r)}function W0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Qh,r)}function X0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ed,r)}function j0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Jh,r)}function q0(n){switch(n){case 5126:return C0;case 35664:return R0;case 35665:return L0;case 35666:return D0;case 35674:return P0;case 35675:return I0;case 35676:return U0;case 5124:case 35670:return N0;case 35667:case 35671:return O0;case 35668:case 35672:return F0;case 35669:case 35673:return k0;case 5125:return B0;case 36294:return z0;case 36295:return H0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return X0;case 36289:case 36303:case 36311:case 36292:return j0}}function Y0(n,e){n.uniform1fv(this.addr,e)}function $0(n,e){const t=Lr(e,this.size,2);n.uniform2fv(this.addr,t)}function K0(n,e){const t=Lr(e,this.size,3);n.uniform3fv(this.addr,t)}function Z0(n,e){const t=Lr(e,this.size,4);n.uniform4fv(this.addr,t)}function J0(n,e){const t=Lr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Q0(n,e){const t=Lr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ev(n,e){const t=Lr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function tv(n,e){n.uniform1iv(this.addr,e)}function nv(n,e){n.uniform2iv(this.addr,e)}function iv(n,e){n.uniform3iv(this.addr,e)}function rv(n,e){n.uniform4iv(this.addr,e)}function sv(n,e){n.uniform1uiv(this.addr,e)}function ov(n,e){n.uniform2uiv(this.addr,e)}function av(n,e){n.uniform3uiv(this.addr,e)}function cv(n,e){n.uniform4uiv(this.addr,e)}function lv(n,e,t){const i=this.cache,r=e.length,s=wo(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Kh,s[a])}function uv(n,e,t){const i=this.cache,r=e.length,s=wo(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Qh,s[a])}function hv(n,e,t){const i=this.cache,r=e.length,s=wo(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||ed,s[a])}function dv(n,e,t){const i=this.cache,r=e.length,s=wo(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Jh,s[a])}function fv(n){switch(n){case 5126:return Y0;case 35664:return $0;case 35665:return K0;case 35666:return Z0;case 35674:return J0;case 35675:return Q0;case 35676:return ev;case 5124:case 35670:return tv;case 35667:case 35671:return nv;case 35668:case 35672:return iv;case 35669:case 35673:return rv;case 5125:return sv;case 36294:return ov;case 36295:return av;case 36296:return cv;case 35678:case 36198:case 36298:case 36306:case 35682:return lv;case 35679:case 36299:case 36307:return uv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return dv}}class pv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=q0(t.type)}}class mv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fv(t.type)}}class gv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ta=/(\w+)(\])?(\[|\.)?/g;function Su(n,e){n.seq.push(e),n.map[e.id]=e}function _v(n,e,t){const i=n.name,r=i.length;for(Ta.lastIndex=0;;){const s=Ta.exec(i),a=Ta.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){Su(t,u===void 0?new pv(o,n,e):new mv(o,n,e));break}else{let l=t.map[o];l===void 0&&(l=new gv(o),Su(t,l)),t=l}}}class Gs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);_v(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function bu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const vv=37297;let yv=0;function xv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Sv(n){const e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(n);let i;switch(e===t?i="":e===Js&&t===Zs?i="LinearDisplayP3ToLinearSRGB":e===Zs&&t===Js&&(i="LinearSRGBToLinearDisplayP3"),n){case li:case So:return[i,"LinearTransferOETF"];case pn:case xc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Eu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+xv(n.getShaderSource(e),a)}else return r}function bv(n,e){const t=Sv(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Ev(n,e){let t;switch(e){case Lp:t="Linear";break;case Dp:t="Reinhard";break;case Pp:t="OptimizedCineon";break;case Ip:t="ACESFilmic";break;case Np:t="AgX";break;case Op:t="Neutral";break;case Up:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Mv(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ar).join(`
`)}function wv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function Tv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Av(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ar(n){return n!==""}function Mu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function nc(n){return n.replace(Cv,Lv)}const Rv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Lv(n,e){let t=Ve[e];if(t===void 0){const i=Rv.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return nc(t)}const Dv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tu(n){return n.replace(Dv,Pv)}function Pv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Au(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	`;return n.isWebGL2&&(e+=`precision ${n.precision} sampler3D;
		precision ${n.precision} sampler2DArray;
		precision ${n.precision} sampler2DShadow;
		precision ${n.precision} samplerCubeShadow;
		precision ${n.precision} sampler2DArrayShadow;
		precision ${n.precision} isampler2D;
		precision ${n.precision} isampler3D;
		precision ${n.precision} isamplerCube;
		precision ${n.precision} isampler2DArray;
		precision ${n.precision} usampler2D;
		precision ${n.precision} usampler3D;
		precision ${n.precision} usamplerCube;
		precision ${n.precision} usampler2DArray;
		`),n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Iv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Mh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===rp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Dn&&(e="SHADOWMAP_TYPE_VSM"),e}function Uv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case mr:case gr:e="ENVMAP_TYPE_CUBE";break;case xo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Nv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case gr:e="ENVMAP_MODE_REFRACTION";break}return e}function Ov(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case wh:e="ENVMAP_BLENDING_MULTIPLY";break;case Cp:e="ENVMAP_BLENDING_MIX";break;case Rp:e="ENVMAP_BLENDING_ADD";break}return e}function Fv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function kv(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Iv(t),u=Uv(t),f=Nv(t),l=Ov(t),d=Fv(t),g=t.isWebGL2?"":Mv(t),v=wv(t),b=Tv(s),y=r.createProgram();let _,C,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(ar).join(`
`),_.length>0&&(_+=`
`),C=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(ar).join(`
`),C.length>0&&(C+=`
`)):(_=[Au(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),C=[g,Au(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMap?"#define "+l:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?Ve.tonemapping_pars_fragment:"",t.toneMapping!==ni?Ev("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,bv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ar).join(`
`)),a=nc(a),a=Mu(a,t),a=wu(a,t),o=nc(o),o=Mu(o,t),o=wu(o,t),a=Tu(a),o=Tu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,_=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,C=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+C);const E=x+_+a,T=x+C+o,A=bu(r,r.VERTEX_SHADER,E),M=bu(r,r.FRAGMENT_SHADER,T);r.attachShader(y,A),r.attachShader(y,M),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function D(k){if(n.debug.checkShaderErrors){const G=r.getProgramInfoLog(y).trim(),N=r.getShaderInfoLog(A).trim(),Y=r.getShaderInfoLog(M).trim();let X=!0,ie=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,A,M);else{const ee=Eu(r,A,"vertex"),K=Eu(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+G+`
`+ee+`
`+K)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(N===""||Y==="")&&(ie=!1);ie&&(k.diagnostics={runnable:X,programLog:G,vertexShader:{log:N,prefix:_},fragmentShader:{log:Y,prefix:C}})}r.deleteShader(A),r.deleteShader(M),F=new Gs(r,y),S=Av(r,y)}let F;this.getUniforms=function(){return F===void 0&&D(this),F};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(y,vv)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yv++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=M,this}let Bv=0;class zv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Hv(e),t.set(e,i)),i}}class Hv{constructor(e){this.id=Bv++,this.code=e,this.usedTimes=0}}function Gv(n,e,t,i,r,s,a){const o=new Sc,c=new zv,u=new Set,f=[],l=r.isWebGL2,d=r.logarithmicDepthBuffer,g=r.vertexTextures;let v=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return u.add(S),S===0?"uv":`uv${S}`}function _(S,w,k,G,N){const Y=G.fog,X=N.geometry,ie=S.isMeshStandardMaterial?G.environment:null,ee=(S.isMeshStandardMaterial?t:e).get(S.envMap||ie),K=ee&&ee.mapping===xo?ee.image.height:null,ae=b[S.type];S.precision!==null&&(v=r.getMaxPrecision(S.precision),v!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",v,"instead."));const he=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ve=he!==void 0?he.length:0;let Ee=0;X.morphAttributes.position!==void 0&&(Ee=1),X.morphAttributes.normal!==void 0&&(Ee=2),X.morphAttributes.color!==void 0&&(Ee=3);let q,ce,ge,De;if(ae){const Je=mn[ae];q=Je.vertexShader,ce=Je.fragmentShader}else q=S.vertexShader,ce=S.fragmentShader,c.update(S),ge=c.getVertexShaderID(S),De=c.getFragmentShaderID(S);const Ce=n.getRenderTarget(),xe=N.isInstancedMesh===!0,He=N.isBatchedMesh===!0,Ie=!!S.map,V=!!S.matcap,Ke=!!ee,Me=!!S.aoMap,z=!!S.lightMap,H=!!S.bumpMap,ne=!!S.normalMap,le=!!S.displacementMap,L=!!S.emissiveMap,h=!!S.metalnessMap,p=!!S.roughnessMap,m=S.anisotropy>0,R=S.clearcoat>0,I=S.iridescence>0,O=S.sheen>0,$=S.transmission>0,pe=m&&!!S.anisotropyMap,_e=R&&!!S.clearcoatMap,re=R&&!!S.clearcoatNormalMap,se=R&&!!S.clearcoatRoughnessMap,we=I&&!!S.iridescenceMap,de=I&&!!S.iridescenceThicknessMap,Ze=O&&!!S.sheenColorMap,Oe=O&&!!S.sheenRoughnessMap,Te=!!S.specularMap,Se=!!S.specularColorMap,Re=!!S.specularIntensityMap,U=$&&!!S.transmissionMap,oe=$&&!!S.thicknessMap,Ae=!!S.gradientMap,B=!!S.alphaMap,fe=S.alphaTest>0,Z=!!S.alphaHash,ue=!!S.extensions;let ye=ni;S.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(ye=n.toneMapping);const je={isWebGL2:l,shaderID:ae,shaderType:S.type,shaderName:S.name,vertexShader:q,fragmentShader:ce,defines:S.defines,customVertexShaderID:ge,customFragmentShaderID:De,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:v,batching:He,instancing:xe,instancingColor:xe&&N.instanceColor!==null,instancingMorph:xe&&N.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Ce===null?n.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:li,alphaToCoverage:!!S.alphaToCoverage,map:Ie,matcap:V,envMap:Ke,envMapMode:Ke&&ee.mapping,envMapCubeUVHeight:K,aoMap:Me,lightMap:z,bumpMap:H,normalMap:ne,displacementMap:g&&le,emissiveMap:L,normalMapObjectSpace:ne&&S.normalMapType===qp,normalMapTangentSpace:ne&&S.normalMapType===Uh,metalnessMap:h,roughnessMap:p,anisotropy:m,anisotropyMap:pe,clearcoat:R,clearcoatMap:_e,clearcoatNormalMap:re,clearcoatRoughnessMap:se,iridescence:I,iridescenceMap:we,iridescenceThicknessMap:de,sheen:O,sheenColorMap:Ze,sheenRoughnessMap:Oe,specularMap:Te,specularColorMap:Se,specularIntensityMap:Re,transmission:$,transmissionMap:U,thicknessMap:oe,gradientMap:Ae,opaque:S.transparent===!1&&S.blending===cr&&S.alphaToCoverage===!1,alphaMap:B,alphaTest:fe,alphaHash:Z,combine:S.combine,mapUv:Ie&&y(S.map.channel),aoMapUv:Me&&y(S.aoMap.channel),lightMapUv:z&&y(S.lightMap.channel),bumpMapUv:H&&y(S.bumpMap.channel),normalMapUv:ne&&y(S.normalMap.channel),displacementMapUv:le&&y(S.displacementMap.channel),emissiveMapUv:L&&y(S.emissiveMap.channel),metalnessMapUv:h&&y(S.metalnessMap.channel),roughnessMapUv:p&&y(S.roughnessMap.channel),anisotropyMapUv:pe&&y(S.anisotropyMap.channel),clearcoatMapUv:_e&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:re&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:de&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&y(S.sheenRoughnessMap.channel),specularMapUv:Te&&y(S.specularMap.channel),specularColorMapUv:Se&&y(S.specularColorMap.channel),specularIntensityMapUv:Re&&y(S.specularIntensityMap.channel),transmissionMapUv:U&&y(S.transmissionMap.channel),thicknessMapUv:oe&&y(S.thicknessMap.channel),alphaMapUv:B&&y(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ne||m),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!X.attributes.uv&&(Ie||B),fog:!!Y,useFog:S.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:N.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ee,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:ye,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ie&&S.map.isVideoTexture===!0&&Qe.getTransfer(S.map.colorSpace)===it,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Pn,flipSided:S.side===Bt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ue&&S.extensions.derivatives===!0,extensionFragDepth:ue&&S.extensions.fragDepth===!0,extensionDrawBuffers:ue&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ue&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:l||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return je.vertexUv1s=u.has(1),je.vertexUv2s=u.has(2),je.vertexUv3s=u.has(3),u.clear(),je}function C(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const k in S.defines)w.push(k),w.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(x(w,S),E(w,S),w.push(n.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function x(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function E(S,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.instancingMorph&&o.enable(4),w.matcap&&o.enable(5),w.envMap&&o.enable(6),w.normalMapObjectSpace&&o.enable(7),w.normalMapTangentSpace&&o.enable(8),w.clearcoat&&o.enable(9),w.iridescence&&o.enable(10),w.alphaTest&&o.enable(11),w.vertexColors&&o.enable(12),w.vertexAlphas&&o.enable(13),w.vertexUv1s&&o.enable(14),w.vertexUv2s&&o.enable(15),w.vertexUv3s&&o.enable(16),w.vertexTangents&&o.enable(17),w.anisotropy&&o.enable(18),w.alphaHash&&o.enable(19),w.batching&&o.enable(20),S.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),S.push(o.mask)}function T(S){const w=b[S.type];let k;if(w){const G=mn[w];k=bm.clone(G.uniforms)}else k=S.uniforms;return k}function A(S,w){let k;for(let G=0,N=f.length;G<N;G++){const Y=f[G];if(Y.cacheKey===w){k=Y,++k.usedTimes;break}}return k===void 0&&(k=new kv(n,w,S,s),f.push(k)),k}function M(S){if(--S.usedTimes===0){const w=f.indexOf(S);f[w]=f[f.length-1],f.pop(),S.destroy()}}function D(S){c.remove(S)}function F(){c.dispose()}return{getParameters:_,getProgramCacheKey:C,getUniforms:T,acquireProgram:A,releaseProgram:M,releaseShaderCache:D,programs:f,dispose:F}}function Vv(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Wv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Cu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ru(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(l,d,g,v,b,y){let _=n[e];return _===void 0?(_={id:l.id,object:l,geometry:d,material:g,groupOrder:v,renderOrder:l.renderOrder,z:b,group:y},n[e]=_):(_.id=l.id,_.object=l,_.geometry=d,_.material=g,_.groupOrder=v,_.renderOrder=l.renderOrder,_.z=b,_.group=y),e++,_}function o(l,d,g,v,b,y){const _=a(l,d,g,v,b,y);g.transmission>0?i.push(_):g.transparent===!0?r.push(_):t.push(_)}function c(l,d,g,v,b,y){const _=a(l,d,g,v,b,y);g.transmission>0?i.unshift(_):g.transparent===!0?r.unshift(_):t.unshift(_)}function u(l,d){t.length>1&&t.sort(l||Wv),i.length>1&&i.sort(d||Cu),r.length>1&&r.sort(d||Cu)}function f(){for(let l=e,d=n.length;l<d;l++){const g=n[l];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:f,sort:u}}function Xv(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Ru,n.set(i,[a])):r>=s.length?(a=new Ru,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function jv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new qe};break;case"SpotLight":t={position:new W,direction:new W,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function qv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Yv=0;function $v(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Kv(n,e){const t=new jv,i=qv(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new W);const s=new W,a=new at,o=new at;function c(f,l){let d=0,g=0,v=0;for(let k=0;k<9;k++)r.probe[k].set(0,0,0);let b=0,y=0,_=0,C=0,x=0,E=0,T=0,A=0,M=0,D=0,F=0;f.sort($v);const S=l===!0?Math.PI:1;for(let k=0,G=f.length;k<G;k++){const N=f[k],Y=N.color,X=N.intensity,ie=N.distance,ee=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=Y.r*X*S,g+=Y.g*X*S,v+=Y.b*X*S;else if(N.isLightProbe){for(let K=0;K<9;K++)r.probe[K].addScaledVector(N.sh.coefficients[K],X);F++}else if(N.isDirectionalLight){const K=t.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity*S),N.castShadow){const ae=N.shadow,he=i.get(N);he.shadowBias=ae.bias,he.shadowNormalBias=ae.normalBias,he.shadowRadius=ae.radius,he.shadowMapSize=ae.mapSize,r.directionalShadow[b]=he,r.directionalShadowMap[b]=ee,r.directionalShadowMatrix[b]=N.shadow.matrix,E++}r.directional[b]=K,b++}else if(N.isSpotLight){const K=t.get(N);K.position.setFromMatrixPosition(N.matrixWorld),K.color.copy(Y).multiplyScalar(X*S),K.distance=ie,K.coneCos=Math.cos(N.angle),K.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),K.decay=N.decay,r.spot[_]=K;const ae=N.shadow;if(N.map&&(r.spotLightMap[M]=N.map,M++,ae.updateMatrices(N),N.castShadow&&D++),r.spotLightMatrix[_]=ae.matrix,N.castShadow){const he=i.get(N);he.shadowBias=ae.bias,he.shadowNormalBias=ae.normalBias,he.shadowRadius=ae.radius,he.shadowMapSize=ae.mapSize,r.spotShadow[_]=he,r.spotShadowMap[_]=ee,A++}_++}else if(N.isRectAreaLight){const K=t.get(N);K.color.copy(Y).multiplyScalar(X),K.halfWidth.set(N.width*.5,0,0),K.halfHeight.set(0,N.height*.5,0),r.rectArea[C]=K,C++}else if(N.isPointLight){const K=t.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity*S),K.distance=N.distance,K.decay=N.decay,N.castShadow){const ae=N.shadow,he=i.get(N);he.shadowBias=ae.bias,he.shadowNormalBias=ae.normalBias,he.shadowRadius=ae.radius,he.shadowMapSize=ae.mapSize,he.shadowCameraNear=ae.camera.near,he.shadowCameraFar=ae.camera.far,r.pointShadow[y]=he,r.pointShadowMap[y]=ee,r.pointShadowMatrix[y]=N.shadow.matrix,T++}r.point[y]=K,y++}else if(N.isHemisphereLight){const K=t.get(N);K.skyColor.copy(N.color).multiplyScalar(X*S),K.groundColor.copy(N.groundColor).multiplyScalar(X*S),r.hemi[x]=K,x++}}C>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=g,r.ambient[2]=v;const w=r.hash;(w.directionalLength!==b||w.pointLength!==y||w.spotLength!==_||w.rectAreaLength!==C||w.hemiLength!==x||w.numDirectionalShadows!==E||w.numPointShadows!==T||w.numSpotShadows!==A||w.numSpotMaps!==M||w.numLightProbes!==F)&&(r.directional.length=b,r.spot.length=_,r.rectArea.length=C,r.point.length=y,r.hemi.length=x,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=A+M-D,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=F,w.directionalLength=b,w.pointLength=y,w.spotLength=_,w.rectAreaLength=C,w.hemiLength=x,w.numDirectionalShadows=E,w.numPointShadows=T,w.numSpotShadows=A,w.numSpotMaps=M,w.numLightProbes=F,r.version=Yv++)}function u(f,l){let d=0,g=0,v=0,b=0,y=0;const _=l.matrixWorldInverse;for(let C=0,x=f.length;C<x;C++){const E=f[C];if(E.isDirectionalLight){const T=r.directional[d];T.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(_),d++}else if(E.isSpotLight){const T=r.spot[v];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(_),T.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(_),v++}else if(E.isRectAreaLight){const T=r.rectArea[b];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(_),o.identity(),a.copy(E.matrixWorld),a.premultiply(_),o.extractRotation(a),T.halfWidth.set(E.width*.5,0,0),T.halfHeight.set(0,E.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),b++}else if(E.isPointLight){const T=r.point[g];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(_),g++}else if(E.isHemisphereLight){const T=r.hemi[y];T.direction.setFromMatrixPosition(E.matrixWorld),T.direction.transformDirection(_),y++}}}return{setup:c,setupView:u,state:r}}function Lu(n,e){const t=new Kv(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(l){i.push(l)}function o(l){r.push(l)}function c(l){t.setup(i,l)}function u(l){t.setupView(i,l)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o}}function Zv(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let c;return o===void 0?(c=new Lu(n,e),t.set(s,[c])):a>=o.length?(c=new Lu(n,e),o.push(c)):c=o[a],c}function r(){t=new WeakMap}return{get:i,dispose:r}}class Jv extends Cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qv extends Cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ey=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ty=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ny(n,e,t){let i=new bc;const r=new Ne,s=new Ne,a=new bt,o=new Jv({depthPacking:jp}),c=new Qv,u={},f=t.maxTextureSize,l={[si]:Bt,[Bt]:si,[Pn]:Pn},d=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:ey,fragmentShader:ty}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const v=new hn;v.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new _n(v,d),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mh;let _=this.type;this.render=function(A,M,D){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||A.length===0)return;const F=n.getRenderTarget(),S=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),k=n.state;k.setBlending(ti),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const G=_!==Dn&&this.type===Dn,N=_===Dn&&this.type!==Dn;for(let Y=0,X=A.length;Y<X;Y++){const ie=A[Y],ee=ie.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;r.copy(ee.mapSize);const K=ee.getFrameExtents();if(r.multiply(K),s.copy(ee.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/K.x),r.x=s.x*K.x,ee.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/K.y),r.y=s.y*K.y,ee.mapSize.y=s.y)),ee.map===null||G===!0||N===!0){const he=this.type!==Dn?{minFilter:Nt,magFilter:Nt}:{};ee.map!==null&&ee.map.dispose(),ee.map=new Ri(r.x,r.y,he),ee.map.texture.name=ie.name+".shadowMap",ee.camera.updateProjectionMatrix()}n.setRenderTarget(ee.map),n.clear();const ae=ee.getViewportCount();for(let he=0;he<ae;he++){const ve=ee.getViewport(he);a.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),k.viewport(a),ee.updateMatrices(ie,he),i=ee.getFrustum(),E(M,D,ee.camera,ie,this.type)}ee.isPointLightShadow!==!0&&this.type===Dn&&C(ee,D),ee.needsUpdate=!1}_=this.type,y.needsUpdate=!1,n.setRenderTarget(F,S,w)};function C(A,M){const D=e.update(b);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ri(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(M,null,D,d,b,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value=A.mapSize,g.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(M,null,D,g,b,null)}function x(A,M,D,F){let S=null;const w=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)S=w;else if(S=D.isPointLight===!0?c:o,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const k=S.uuid,G=M.uuid;let N=u[k];N===void 0&&(N={},u[k]=N);let Y=N[G];Y===void 0&&(Y=S.clone(),N[G]=Y,M.addEventListener("dispose",T)),S=Y}if(S.visible=M.visible,S.wireframe=M.wireframe,F===Dn?S.side=M.shadowSide!==null?M.shadowSide:M.side:S.side=M.shadowSide!==null?M.shadowSide:l[M.side],S.alphaMap=M.alphaMap,S.alphaTest=M.alphaTest,S.map=M.map,S.clipShadows=M.clipShadows,S.clippingPlanes=M.clippingPlanes,S.clipIntersection=M.clipIntersection,S.displacementMap=M.displacementMap,S.displacementScale=M.displacementScale,S.displacementBias=M.displacementBias,S.wireframeLinewidth=M.wireframeLinewidth,S.linewidth=M.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const k=n.properties.get(S);k.light=D}return S}function E(A,M,D,F,S){if(A.visible===!1)return;if(A.layers.test(M.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Dn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const G=e.update(A),N=A.material;if(Array.isArray(N)){const Y=G.groups;for(let X=0,ie=Y.length;X<ie;X++){const ee=Y[X],K=N[ee.materialIndex];if(K&&K.visible){const ae=x(A,K,F,S);A.onBeforeShadow(n,A,M,D,G,ae,ee),n.renderBufferDirect(D,null,G,ae,A,ee),A.onAfterShadow(n,A,M,D,G,ae,ee)}}}else if(N.visible){const Y=x(A,N,F,S);A.onBeforeShadow(n,A,M,D,G,Y,null),n.renderBufferDirect(D,null,G,Y,A,null),A.onAfterShadow(n,A,M,D,G,Y,null)}}const k=A.children;for(let G=0,N=k.length;G<N;G++)E(k[G],M,D,F,S)}function T(A){A.target.removeEventListener("dispose",T);for(const D in u){const F=u[D],S=A.target.uuid;S in F&&(F[S].dispose(),delete F[S])}}}function iy(n,e,t){const i=t.isWebGL2;function r(){let B=!1;const fe=new bt;let Z=null;const ue=new bt(0,0,0,0);return{setMask:function(ye){Z!==ye&&!B&&(n.colorMask(ye,ye,ye,ye),Z=ye)},setLocked:function(ye){B=ye},setClear:function(ye,je,Je,et,ct){ct===!0&&(ye*=et,je*=et,Je*=et),fe.set(ye,je,Je,et),ue.equals(fe)===!1&&(n.clearColor(ye,je,Je,et),ue.copy(fe))},reset:function(){B=!1,Z=null,ue.set(-1,0,0,0)}}}function s(){let B=!1,fe=null,Z=null,ue=null;return{setTest:function(ye){ye?xe(n.DEPTH_TEST):He(n.DEPTH_TEST)},setMask:function(ye){fe!==ye&&!B&&(n.depthMask(ye),fe=ye)},setFunc:function(ye){if(Z!==ye){switch(ye){case Sp:n.depthFunc(n.NEVER);break;case bp:n.depthFunc(n.ALWAYS);break;case Ep:n.depthFunc(n.LESS);break;case $s:n.depthFunc(n.LEQUAL);break;case Mp:n.depthFunc(n.EQUAL);break;case wp:n.depthFunc(n.GEQUAL);break;case Tp:n.depthFunc(n.GREATER);break;case Ap:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=ye}},setLocked:function(ye){B=ye},setClear:function(ye){ue!==ye&&(n.clearDepth(ye),ue=ye)},reset:function(){B=!1,fe=null,Z=null,ue=null}}}function a(){let B=!1,fe=null,Z=null,ue=null,ye=null,je=null,Je=null,et=null,ct=null;return{setTest:function($e){B||($e?xe(n.STENCIL_TEST):He(n.STENCIL_TEST))},setMask:function($e){fe!==$e&&!B&&(n.stencilMask($e),fe=$e)},setFunc:function($e,nt,Ct){(Z!==$e||ue!==nt||ye!==Ct)&&(n.stencilFunc($e,nt,Ct),Z=$e,ue=nt,ye=Ct)},setOp:function($e,nt,Ct){(je!==$e||Je!==nt||et!==Ct)&&(n.stencilOp($e,nt,Ct),je=$e,Je=nt,et=Ct)},setLocked:function($e){B=$e},setClear:function($e){ct!==$e&&(n.clearStencil($e),ct=$e)},reset:function(){B=!1,fe=null,Z=null,ue=null,ye=null,je=null,Je=null,et=null,ct=null}}}const o=new r,c=new s,u=new a,f=new WeakMap,l=new WeakMap;let d={},g={},v=new WeakMap,b=[],y=null,_=!1,C=null,x=null,E=null,T=null,A=null,M=null,D=null,F=new qe(0,0,0),S=0,w=!1,k=null,G=null,N=null,Y=null,X=null;const ie=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,K=0;const ae=n.getParameter(n.VERSION);ae.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(ae)[1]),ee=K>=1):ae.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),ee=K>=2);let he=null,ve={};const Ee=n.getParameter(n.SCISSOR_BOX),q=n.getParameter(n.VIEWPORT),ce=new bt().fromArray(Ee),ge=new bt().fromArray(q);function De(B,fe,Z,ue){const ye=new Uint8Array(4),je=n.createTexture();n.bindTexture(B,je),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Je=0;Je<Z;Je++)i&&(B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY)?n.texImage3D(fe,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(fe+Je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return je}const Ce={};Ce[n.TEXTURE_2D]=De(n.TEXTURE_2D,n.TEXTURE_2D,1),Ce[n.TEXTURE_CUBE_MAP]=De(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ce[n.TEXTURE_2D_ARRAY]=De(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ce[n.TEXTURE_3D]=De(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),xe(n.DEPTH_TEST),c.setFunc($s),le(!1),L(ll),xe(n.CULL_FACE),H(ti);function xe(B){d[B]!==!0&&(n.enable(B),d[B]=!0)}function He(B){d[B]!==!1&&(n.disable(B),d[B]=!1)}function Ie(B,fe){return g[B]!==fe?(n.bindFramebuffer(B,fe),g[B]=fe,i&&(B===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=fe),B===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=fe)),!0):!1}function V(B,fe){let Z=b,ue=!1;if(B){Z=v.get(fe),Z===void 0&&(Z=[],v.set(fe,Z));const ye=B.textures;if(Z.length!==ye.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let je=0,Je=ye.length;je<Je;je++)Z[je]=n.COLOR_ATTACHMENT0+je;Z.length=ye.length,ue=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,ue=!0);if(ue)if(t.isWebGL2)n.drawBuffers(Z);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Ke(B){return y!==B?(n.useProgram(B),y=B,!0):!1}const Me={[Si]:n.FUNC_ADD,[op]:n.FUNC_SUBTRACT,[ap]:n.FUNC_REVERSE_SUBTRACT};if(i)Me[fl]=n.MIN,Me[pl]=n.MAX;else{const B=e.get("EXT_blend_minmax");B!==null&&(Me[fl]=B.MIN_EXT,Me[pl]=B.MAX_EXT)}const z={[cp]:n.ZERO,[lp]:n.ONE,[up]:n.SRC_COLOR,[qa]:n.SRC_ALPHA,[gp]:n.SRC_ALPHA_SATURATE,[pp]:n.DST_COLOR,[dp]:n.DST_ALPHA,[hp]:n.ONE_MINUS_SRC_COLOR,[Ya]:n.ONE_MINUS_SRC_ALPHA,[mp]:n.ONE_MINUS_DST_COLOR,[fp]:n.ONE_MINUS_DST_ALPHA,[_p]:n.CONSTANT_COLOR,[vp]:n.ONE_MINUS_CONSTANT_COLOR,[yp]:n.CONSTANT_ALPHA,[xp]:n.ONE_MINUS_CONSTANT_ALPHA};function H(B,fe,Z,ue,ye,je,Je,et,ct,$e){if(B===ti){_===!0&&(He(n.BLEND),_=!1);return}if(_===!1&&(xe(n.BLEND),_=!0),B!==sp){if(B!==C||$e!==w){if((x!==Si||A!==Si)&&(n.blendEquation(n.FUNC_ADD),x=Si,A=Si),$e)switch(B){case cr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ul:n.blendFunc(n.ONE,n.ONE);break;case hl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case cr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ul:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case hl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}E=null,T=null,M=null,D=null,F.set(0,0,0),S=0,C=B,w=$e}return}ye=ye||fe,je=je||Z,Je=Je||ue,(fe!==x||ye!==A)&&(n.blendEquationSeparate(Me[fe],Me[ye]),x=fe,A=ye),(Z!==E||ue!==T||je!==M||Je!==D)&&(n.blendFuncSeparate(z[Z],z[ue],z[je],z[Je]),E=Z,T=ue,M=je,D=Je),(et.equals(F)===!1||ct!==S)&&(n.blendColor(et.r,et.g,et.b,ct),F.copy(et),S=ct),C=B,w=!1}function ne(B,fe){B.side===Pn?He(n.CULL_FACE):xe(n.CULL_FACE);let Z=B.side===Bt;fe&&(Z=!Z),le(Z),B.blending===cr&&B.transparent===!1?H(ti):H(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),o.setMask(B.colorWrite);const ue=B.stencilWrite;u.setTest(ue),ue&&(u.setMask(B.stencilWriteMask),u.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),u.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),p(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?xe(n.SAMPLE_ALPHA_TO_COVERAGE):He(n.SAMPLE_ALPHA_TO_COVERAGE)}function le(B){k!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),k=B)}function L(B){B!==np?(xe(n.CULL_FACE),B!==G&&(B===ll?n.cullFace(n.BACK):B===ip?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):He(n.CULL_FACE),G=B}function h(B){B!==N&&(ee&&n.lineWidth(B),N=B)}function p(B,fe,Z){B?(xe(n.POLYGON_OFFSET_FILL),(Y!==fe||X!==Z)&&(n.polygonOffset(fe,Z),Y=fe,X=Z)):He(n.POLYGON_OFFSET_FILL)}function m(B){B?xe(n.SCISSOR_TEST):He(n.SCISSOR_TEST)}function R(B){B===void 0&&(B=n.TEXTURE0+ie-1),he!==B&&(n.activeTexture(B),he=B)}function I(B,fe,Z){Z===void 0&&(he===null?Z=n.TEXTURE0+ie-1:Z=he);let ue=ve[Z];ue===void 0&&(ue={type:void 0,texture:void 0},ve[Z]=ue),(ue.type!==B||ue.texture!==fe)&&(he!==Z&&(n.activeTexture(Z),he=Z),n.bindTexture(B,fe||Ce[B]),ue.type=B,ue.texture=fe)}function O(){const B=ve[he];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function $(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _e(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function re(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ze(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Oe(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Se(B){ce.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),ce.copy(B))}function Re(B){ge.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),ge.copy(B))}function U(B,fe){let Z=l.get(fe);Z===void 0&&(Z=new WeakMap,l.set(fe,Z));let ue=Z.get(B);ue===void 0&&(ue=n.getUniformBlockIndex(fe,B.name),Z.set(B,ue))}function oe(B,fe){const ue=l.get(fe).get(B);f.get(fe)!==ue&&(n.uniformBlockBinding(fe,ue,B.__bindingPointIndex),f.set(fe,ue))}function Ae(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},he=null,ve={},g={},v=new WeakMap,b=[],y=null,_=!1,C=null,x=null,E=null,T=null,A=null,M=null,D=null,F=new qe(0,0,0),S=0,w=!1,k=null,G=null,N=null,Y=null,X=null,ce.set(0,0,n.canvas.width,n.canvas.height),ge.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:xe,disable:He,bindFramebuffer:Ie,drawBuffers:V,useProgram:Ke,setBlending:H,setMaterial:ne,setFlipSided:le,setCullFace:L,setLineWidth:h,setPolygonOffset:p,setScissorTest:m,activeTexture:R,bindTexture:I,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:pe,texImage2D:Oe,texImage3D:Te,updateUBOMapping:U,uniformBlockBinding:oe,texStorage2D:de,texStorage3D:Ze,texSubImage2D:_e,texSubImage3D:re,compressedTexSubImage2D:se,compressedTexSubImage3D:we,scissor:Se,viewport:Re,reset:Ae}}function ry(n,e,t,i,r,s,a){const o=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Ne,l=new WeakMap;let d;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(p,m){return v?new OffscreenCanvas(p,m):eo("canvas")}function y(p,m,R,I){let O=1;const $=h(p);if(($.width>I||$.height>I)&&(O=I/Math.max($.width,$.height)),O<1||m===!0)if(typeof HTMLImageElement<"u"&&p instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&p instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&p instanceof ImageBitmap||typeof VideoFrame<"u"&&p instanceof VideoFrame){const pe=m?tc:Math.floor,_e=pe(O*$.width),re=pe(O*$.height);d===void 0&&(d=b(_e,re));const se=R?b(_e,re):d;return se.width=_e,se.height=re,se.getContext("2d").drawImage(p,0,0,_e,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+_e+"x"+re+")."),se}else return"data"in p&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),p;return p}function _(p){const m=h(p);return Wl(m.width)&&Wl(m.height)}function C(p){return o?!1:p.wrapS!==cn||p.wrapT!==cn||p.minFilter!==Nt&&p.minFilter!==kt}function x(p,m){return p.generateMipmaps&&m&&p.minFilter!==Nt&&p.minFilter!==kt}function E(p){n.generateMipmap(p)}function T(p,m,R,I,O=!1){if(o===!1)return m;if(p!==null){if(n[p]!==void 0)return n[p];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+p+"'")}let $=m;if(m===n.RED&&(R===n.FLOAT&&($=n.R32F),R===n.HALF_FLOAT&&($=n.R16F),R===n.UNSIGNED_BYTE&&($=n.R8)),m===n.RED_INTEGER&&(R===n.UNSIGNED_BYTE&&($=n.R8UI),R===n.UNSIGNED_SHORT&&($=n.R16UI),R===n.UNSIGNED_INT&&($=n.R32UI),R===n.BYTE&&($=n.R8I),R===n.SHORT&&($=n.R16I),R===n.INT&&($=n.R32I)),m===n.RG&&(R===n.FLOAT&&($=n.RG32F),R===n.HALF_FLOAT&&($=n.RG16F),R===n.UNSIGNED_BYTE&&($=n.RG8)),m===n.RG_INTEGER&&(R===n.UNSIGNED_BYTE&&($=n.RG8UI),R===n.UNSIGNED_SHORT&&($=n.RG16UI),R===n.UNSIGNED_INT&&($=n.RG32UI),R===n.BYTE&&($=n.RG8I),R===n.SHORT&&($=n.RG16I),R===n.INT&&($=n.RG32I)),m===n.RGBA){const pe=O?Ks:Qe.getTransfer(I);R===n.FLOAT&&($=n.RGBA32F),R===n.HALF_FLOAT&&($=n.RGBA16F),R===n.UNSIGNED_BYTE&&($=pe===it?n.SRGB8_ALPHA8:n.RGBA8),R===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),R===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function A(p,m,R){return x(p,R)===!0||p.isFramebufferTexture&&p.minFilter!==Nt&&p.minFilter!==kt?Math.log2(Math.max(m.width,m.height))+1:p.mipmaps!==void 0&&p.mipmaps.length>0?p.mipmaps.length:p.isCompressedTexture&&Array.isArray(p.image)?m.mipmaps.length:1}function M(p){return p===Nt||p===ml||p===Or?n.NEAREST:n.LINEAR}function D(p){const m=p.target;m.removeEventListener("dispose",D),S(m),m.isVideoTexture&&l.delete(m)}function F(p){const m=p.target;m.removeEventListener("dispose",F),k(m)}function S(p){const m=i.get(p);if(m.__webglInit===void 0)return;const R=p.source,I=g.get(R);if(I){const O=I[m.__cacheKey];O.usedTimes--,O.usedTimes===0&&w(p),Object.keys(I).length===0&&g.delete(R)}i.remove(p)}function w(p){const m=i.get(p);n.deleteTexture(m.__webglTexture);const R=p.source,I=g.get(R);delete I[m.__cacheKey],a.memory.textures--}function k(p){const m=i.get(p);if(p.depthTexture&&p.depthTexture.dispose(),p.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(m.__webglFramebuffer[I]))for(let O=0;O<m.__webglFramebuffer[I].length;O++)n.deleteFramebuffer(m.__webglFramebuffer[I][O]);else n.deleteFramebuffer(m.__webglFramebuffer[I]);m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer[I])}else{if(Array.isArray(m.__webglFramebuffer))for(let I=0;I<m.__webglFramebuffer.length;I++)n.deleteFramebuffer(m.__webglFramebuffer[I]);else n.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&n.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let I=0;I<m.__webglColorRenderbuffer.length;I++)m.__webglColorRenderbuffer[I]&&n.deleteRenderbuffer(m.__webglColorRenderbuffer[I]);m.__webglDepthRenderbuffer&&n.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const R=p.textures;for(let I=0,O=R.length;I<O;I++){const $=i.get(R[I]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(R[I])}i.remove(p)}let G=0;function N(){G=0}function Y(){const p=G;return p>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+p+" texture units while this GPU supports only "+r.maxTextures),G+=1,p}function X(p){const m=[];return m.push(p.wrapS),m.push(p.wrapT),m.push(p.wrapR||0),m.push(p.magFilter),m.push(p.minFilter),m.push(p.anisotropy),m.push(p.internalFormat),m.push(p.format),m.push(p.type),m.push(p.generateMipmaps),m.push(p.premultiplyAlpha),m.push(p.flipY),m.push(p.unpackAlignment),m.push(p.colorSpace),m.join()}function ie(p,m){const R=i.get(p);if(p.isVideoTexture&&le(p),p.isRenderTargetTexture===!1&&p.version>0&&R.__version!==p.version){const I=p.image;if(I===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(I.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(R,p,m);return}}t.bindTexture(n.TEXTURE_2D,R.__webglTexture,n.TEXTURE0+m)}function ee(p,m){const R=i.get(p);if(p.version>0&&R.__version!==p.version){ge(R,p,m);return}t.bindTexture(n.TEXTURE_2D_ARRAY,R.__webglTexture,n.TEXTURE0+m)}function K(p,m){const R=i.get(p);if(p.version>0&&R.__version!==p.version){ge(R,p,m);return}t.bindTexture(n.TEXTURE_3D,R.__webglTexture,n.TEXTURE0+m)}function ae(p,m){const R=i.get(p);if(p.version>0&&R.__version!==p.version){De(R,p,m);return}t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+m)}const he={[Za]:n.REPEAT,[cn]:n.CLAMP_TO_EDGE,[Ja]:n.MIRRORED_REPEAT},ve={[Nt]:n.NEAREST,[ml]:n.NEAREST_MIPMAP_NEAREST,[Or]:n.NEAREST_MIPMAP_LINEAR,[kt]:n.LINEAR,[Ko]:n.LINEAR_MIPMAP_NEAREST,[Ei]:n.LINEAR_MIPMAP_LINEAR},Ee={[Yp]:n.NEVER,[em]:n.ALWAYS,[$p]:n.LESS,[Nh]:n.LEQUAL,[Kp]:n.EQUAL,[Qp]:n.GEQUAL,[Zp]:n.GREATER,[Jp]:n.NOTEQUAL};function q(p,m,R){if(m.type===In&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===kt||m.magFilter===Ko||m.magFilter===Or||m.magFilter===Ei||m.minFilter===kt||m.minFilter===Ko||m.minFilter===Or||m.minFilter===Ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),R?(n.texParameteri(p,n.TEXTURE_WRAP_S,he[m.wrapS]),n.texParameteri(p,n.TEXTURE_WRAP_T,he[m.wrapT]),(p===n.TEXTURE_3D||p===n.TEXTURE_2D_ARRAY)&&n.texParameteri(p,n.TEXTURE_WRAP_R,he[m.wrapR]),n.texParameteri(p,n.TEXTURE_MAG_FILTER,ve[m.magFilter]),n.texParameteri(p,n.TEXTURE_MIN_FILTER,ve[m.minFilter])):(n.texParameteri(p,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(p,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(p===n.TEXTURE_3D||p===n.TEXTURE_2D_ARRAY)&&n.texParameteri(p,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(m.wrapS!==cn||m.wrapT!==cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(p,n.TEXTURE_MAG_FILTER,M(m.magFilter)),n.texParameteri(p,n.TEXTURE_MIN_FILTER,M(m.minFilter)),m.minFilter!==Nt&&m.minFilter!==kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),m.compareFunction&&(n.texParameteri(p,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(p,n.TEXTURE_COMPARE_FUNC,Ee[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Nt||m.minFilter!==Or&&m.minFilter!==Ei||m.type===In&&e.has("OES_texture_float_linear")===!1||o===!1&&m.type===Wr&&e.has("OES_texture_half_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(p,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function ce(p,m){let R=!1;p.__webglInit===void 0&&(p.__webglInit=!0,m.addEventListener("dispose",D));const I=m.source;let O=g.get(I);O===void 0&&(O={},g.set(I,O));const $=X(m);if($!==p.__cacheKey){O[$]===void 0&&(O[$]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,R=!0),O[$].usedTimes++;const pe=O[p.__cacheKey];pe!==void 0&&(O[p.__cacheKey].usedTimes--,pe.usedTimes===0&&w(m)),p.__cacheKey=$,p.__webglTexture=O[$].texture}return R}function ge(p,m,R){let I=n.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(I=n.TEXTURE_2D_ARRAY),m.isData3DTexture&&(I=n.TEXTURE_3D);const O=ce(p,m),$=m.source;t.bindTexture(I,p.__webglTexture,n.TEXTURE0+R);const pe=i.get($);if($.version!==pe.__version||O===!0){t.activeTexture(n.TEXTURE0+R);const _e=Qe.getPrimaries(Qe.workingColorSpace),re=m.colorSpace===Zn?null:Qe.getPrimaries(m.colorSpace),se=m.colorSpace===Zn||_e===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const we=C(m)&&_(m.image)===!1;let de=y(m.image,we,!1,r.maxTextureSize);de=L(m,de);const Ze=_(de)||o,Oe=s.convert(m.format,m.colorSpace);let Te=s.convert(m.type),Se=T(m.internalFormat,Oe,Te,m.colorSpace,m.isVideoTexture);q(I,m,Ze);let Re;const U=m.mipmaps,oe=o&&m.isVideoTexture!==!0&&Se!==Ih,Ae=pe.__version===void 0||O===!0,B=$.dataReady,fe=A(m,de,Ze);if(m.isDepthTexture)Se=n.DEPTH_COMPONENT,o?m.type===In?Se=n.DEPTH_COMPONENT32F:m.type===Qn?Se=n.DEPTH_COMPONENT24:m.type===Mi?Se=n.DEPTH24_STENCIL8:Se=n.DEPTH_COMPONENT16:m.type===In&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),m.format===wi&&Se===n.DEPTH_COMPONENT&&m.type!==yc&&m.type!==Qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),m.type=Qn,Te=s.convert(m.type)),m.format===_r&&Se===n.DEPTH_COMPONENT&&(Se=n.DEPTH_STENCIL,m.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),m.type=Mi,Te=s.convert(m.type))),Ae&&(oe?t.texStorage2D(n.TEXTURE_2D,1,Se,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,Se,de.width,de.height,0,Oe,Te,null));else if(m.isDataTexture)if(U.length>0&&Ze){oe&&Ae&&t.texStorage2D(n.TEXTURE_2D,fe,Se,U[0].width,U[0].height);for(let Z=0,ue=U.length;Z<ue;Z++)Re=U[Z],oe?B&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,Re.width,Re.height,Oe,Te,Re.data):t.texImage2D(n.TEXTURE_2D,Z,Se,Re.width,Re.height,0,Oe,Te,Re.data);m.generateMipmaps=!1}else oe?(Ae&&t.texStorage2D(n.TEXTURE_2D,fe,Se,de.width,de.height),B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de.width,de.height,Oe,Te,de.data)):t.texImage2D(n.TEXTURE_2D,0,Se,de.width,de.height,0,Oe,Te,de.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){oe&&Ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Se,U[0].width,U[0].height,de.depth);for(let Z=0,ue=U.length;Z<ue;Z++)Re=U[Z],m.format!==ln?Oe!==null?oe?B&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,Re.width,Re.height,de.depth,Oe,Re.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,Se,Re.width,Re.height,de.depth,0,Re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,Re.width,Re.height,de.depth,Oe,Te,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Z,Se,Re.width,Re.height,de.depth,0,Oe,Te,Re.data)}else{oe&&Ae&&t.texStorage2D(n.TEXTURE_2D,fe,Se,U[0].width,U[0].height);for(let Z=0,ue=U.length;Z<ue;Z++)Re=U[Z],m.format!==ln?Oe!==null?oe?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,Re.width,Re.height,Oe,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,Z,Se,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?B&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,Re.width,Re.height,Oe,Te,Re.data):t.texImage2D(n.TEXTURE_2D,Z,Se,Re.width,Re.height,0,Oe,Te,Re.data)}else if(m.isDataArrayTexture)oe?(Ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Se,de.width,de.height,de.depth),B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Oe,Te,de.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,de.width,de.height,de.depth,0,Oe,Te,de.data);else if(m.isData3DTexture)oe?(Ae&&t.texStorage3D(n.TEXTURE_3D,fe,Se,de.width,de.height,de.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Oe,Te,de.data)):t.texImage3D(n.TEXTURE_3D,0,Se,de.width,de.height,de.depth,0,Oe,Te,de.data);else if(m.isFramebufferTexture){if(Ae)if(oe)t.texStorage2D(n.TEXTURE_2D,fe,Se,de.width,de.height);else{let Z=de.width,ue=de.height;for(let ye=0;ye<fe;ye++)t.texImage2D(n.TEXTURE_2D,ye,Se,Z,ue,0,Oe,Te,null),Z>>=1,ue>>=1}}else if(U.length>0&&Ze){if(oe&&Ae){const Z=h(U[0]);t.texStorage2D(n.TEXTURE_2D,fe,Se,Z.width,Z.height)}for(let Z=0,ue=U.length;Z<ue;Z++)Re=U[Z],oe?B&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,Oe,Te,Re):t.texImage2D(n.TEXTURE_2D,Z,Se,Oe,Te,Re);m.generateMipmaps=!1}else if(oe){if(Ae){const Z=h(de);t.texStorage2D(n.TEXTURE_2D,fe,Se,Z.width,Z.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Oe,Te,de)}else t.texImage2D(n.TEXTURE_2D,0,Se,Oe,Te,de);x(m,Ze)&&E(I),pe.__version=$.version,m.onUpdate&&m.onUpdate(m)}p.__version=m.version}function De(p,m,R){if(m.image.length!==6)return;const I=ce(p,m),O=m.source;t.bindTexture(n.TEXTURE_CUBE_MAP,p.__webglTexture,n.TEXTURE0+R);const $=i.get(O);if(O.version!==$.__version||I===!0){t.activeTexture(n.TEXTURE0+R);const pe=Qe.getPrimaries(Qe.workingColorSpace),_e=m.colorSpace===Zn?null:Qe.getPrimaries(m.colorSpace),re=m.colorSpace===Zn||pe===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const se=m.isCompressedTexture||m.image[0].isCompressedTexture,we=m.image[0]&&m.image[0].isDataTexture,de=[];for(let Z=0;Z<6;Z++)!se&&!we?de[Z]=y(m.image[Z],!1,!0,r.maxCubemapSize):de[Z]=we?m.image[Z].image:m.image[Z],de[Z]=L(m,de[Z]);const Ze=de[0],Oe=_(Ze)||o,Te=s.convert(m.format,m.colorSpace),Se=s.convert(m.type),Re=T(m.internalFormat,Te,Se,m.colorSpace),U=o&&m.isVideoTexture!==!0,oe=$.__version===void 0||I===!0,Ae=O.dataReady;let B=A(m,Ze,Oe);q(n.TEXTURE_CUBE_MAP,m,Oe);let fe;if(se){U&&oe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,B,Re,Ze.width,Ze.height);for(let Z=0;Z<6;Z++){fe=de[Z].mipmaps;for(let ue=0;ue<fe.length;ue++){const ye=fe[ue];m.format!==ln?Te!==null?U?Ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,0,0,ye.width,ye.height,Te,ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,Re,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,0,0,ye.width,ye.height,Te,Se,ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,Re,ye.width,ye.height,0,Te,Se,ye.data)}}}else{if(fe=m.mipmaps,U&&oe){fe.length>0&&B++;const Z=h(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,B,Re,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(we){U?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,de[Z].width,de[Z].height,Te,Se,de[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Re,de[Z].width,de[Z].height,0,Te,Se,de[Z].data);for(let ue=0;ue<fe.length;ue++){const je=fe[ue].image[Z].image;U?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,0,0,je.width,je.height,Te,Se,je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,Re,je.width,je.height,0,Te,Se,je.data)}}else{U?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Te,Se,de[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Re,Te,Se,de[Z]);for(let ue=0;ue<fe.length;ue++){const ye=fe[ue];U?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,0,0,Te,Se,ye.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,Re,Te,Se,ye.image[Z])}}}x(m,Oe)&&E(n.TEXTURE_CUBE_MAP),$.__version=O.version,m.onUpdate&&m.onUpdate(m)}p.__version=m.version}function Ce(p,m,R,I,O,$){const pe=s.convert(R.format,R.colorSpace),_e=s.convert(R.type),re=T(R.internalFormat,pe,_e,R.colorSpace);if(!i.get(m).__hasExternalTextures){const we=Math.max(1,m.width>>$),de=Math.max(1,m.height>>$);O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?t.texImage3D(O,$,re,we,de,m.depth,0,pe,_e,null):t.texImage2D(O,$,re,we,de,0,pe,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,p),ne(m)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,I,O,i.get(R).__webglTexture,0,H(m)):(O===n.TEXTURE_2D||O>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,I,O,i.get(R).__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(p,m,R){if(n.bindRenderbuffer(n.RENDERBUFFER,p),m.depthBuffer&&!m.stencilBuffer){let I=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(R||ne(m)){const O=m.depthTexture;O&&O.isDepthTexture&&(O.type===In?I=n.DEPTH_COMPONENT32F:O.type===Qn&&(I=n.DEPTH_COMPONENT24));const $=H(m);ne(m)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$,I,m.width,m.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,$,I,m.width,m.height)}else n.renderbufferStorage(n.RENDERBUFFER,I,m.width,m.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,p)}else if(m.depthBuffer&&m.stencilBuffer){const I=H(m);R&&ne(m)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,I,n.DEPTH24_STENCIL8,m.width,m.height):ne(m)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,I,n.DEPTH24_STENCIL8,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,m.width,m.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,p)}else{const I=m.textures;for(let O=0;O<I.length;O++){const $=I[O],pe=s.convert($.format,$.colorSpace),_e=s.convert($.type),re=T($.internalFormat,pe,_e,$.colorSpace),se=H(m);R&&ne(m)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,re,m.width,m.height):ne(m)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,re,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,re,m.width,m.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function He(p,m){if(m&&m.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,p),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(m.depthTexture).__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),ie(m.depthTexture,0);const I=i.get(m.depthTexture).__webglTexture,O=H(m);if(m.depthTexture.format===wi)ne(m)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,I,0,O):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,I,0);else if(m.depthTexture.format===_r)ne(m)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,I,0,O):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,I,0);else throw new Error("Unknown depthTexture format")}function Ie(p){const m=i.get(p),R=p.isWebGLCubeRenderTarget===!0;if(p.depthTexture&&!m.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");He(m.__webglFramebuffer,p)}else if(R){m.__webglDepthbuffer=[];for(let I=0;I<6;I++)t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[I]),m.__webglDepthbuffer[I]=n.createRenderbuffer(),xe(m.__webglDepthbuffer[I],p,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer=n.createRenderbuffer(),xe(m.__webglDepthbuffer,p,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function V(p,m,R){const I=i.get(p);m!==void 0&&Ce(I.__webglFramebuffer,p,p.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),R!==void 0&&Ie(p)}function Ke(p){const m=p.texture,R=i.get(p),I=i.get(m);p.addEventListener("dispose",F);const O=p.textures,$=p.isWebGLCubeRenderTarget===!0,pe=O.length>1,_e=_(p)||o;if(pe||(I.__webglTexture===void 0&&(I.__webglTexture=n.createTexture()),I.__version=m.version,a.memory.textures++),$){R.__webglFramebuffer=[];for(let re=0;re<6;re++)if(o&&m.mipmaps&&m.mipmaps.length>0){R.__webglFramebuffer[re]=[];for(let se=0;se<m.mipmaps.length;se++)R.__webglFramebuffer[re][se]=n.createFramebuffer()}else R.__webglFramebuffer[re]=n.createFramebuffer()}else{if(o&&m.mipmaps&&m.mipmaps.length>0){R.__webglFramebuffer=[];for(let re=0;re<m.mipmaps.length;re++)R.__webglFramebuffer[re]=n.createFramebuffer()}else R.__webglFramebuffer=n.createFramebuffer();if(pe)if(r.drawBuffers)for(let re=0,se=O.length;re<se;re++){const we=i.get(O[re]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&p.samples>0&&ne(p)===!1){R.__webglMultisampledFramebuffer=n.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let re=0;re<O.length;re++){const se=O[re];R.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,R.__webglColorRenderbuffer[re]);const we=s.convert(se.format,se.colorSpace),de=s.convert(se.type),Ze=T(se.internalFormat,we,de,se.colorSpace,p.isXRRenderTarget===!0),Oe=H(p);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,Ze,p.width,p.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,R.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),p.depthBuffer&&(R.__webglDepthRenderbuffer=n.createRenderbuffer(),xe(R.__webglDepthRenderbuffer,p,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture),q(n.TEXTURE_CUBE_MAP,m,_e);for(let re=0;re<6;re++)if(o&&m.mipmaps&&m.mipmaps.length>0)for(let se=0;se<m.mipmaps.length;se++)Ce(R.__webglFramebuffer[re][se],p,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,se);else Ce(R.__webglFramebuffer[re],p,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);x(m,_e)&&E(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let re=0,se=O.length;re<se;re++){const we=O[re],de=i.get(we);t.bindTexture(n.TEXTURE_2D,de.__webglTexture),q(n.TEXTURE_2D,we,_e),Ce(R.__webglFramebuffer,p,we,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,0),x(we,_e)&&E(n.TEXTURE_2D)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((p.isWebGL3DRenderTarget||p.isWebGLArrayRenderTarget)&&(o?re=p.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,I.__webglTexture),q(re,m,_e),o&&m.mipmaps&&m.mipmaps.length>0)for(let se=0;se<m.mipmaps.length;se++)Ce(R.__webglFramebuffer[se],p,m,n.COLOR_ATTACHMENT0,re,se);else Ce(R.__webglFramebuffer,p,m,n.COLOR_ATTACHMENT0,re,0);x(m,_e)&&E(re),t.unbindTexture()}p.depthBuffer&&Ie(p)}function Me(p){const m=_(p)||o,R=p.textures;for(let I=0,O=R.length;I<O;I++){const $=R[I];if(x($,m)){const pe=p.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,_e=i.get($).__webglTexture;t.bindTexture(pe,_e),E(pe),t.unbindTexture()}}}function z(p){if(o&&p.samples>0&&ne(p)===!1){const m=p.textures,R=p.width,I=p.height;let O=n.COLOR_BUFFER_BIT;const $=[],pe=p.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(p),re=m.length>1;if(re)for(let se=0;se<m.length;se++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let se=0;se<m.length;se++){$.push(n.COLOR_ATTACHMENT0+se),p.depthBuffer&&$.push(pe);const we=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(we===!1&&(p.depthBuffer&&(O|=n.DEPTH_BUFFER_BIT),p.stencilBuffer&&(O|=n.STENCIL_BUFFER_BIT)),re&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[se]),we===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[pe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[pe])),re){const de=i.get(m[se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,de,0)}n.blitFramebuffer(0,0,R,I,0,0,R,I,O,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let se=0;se<m.length;se++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,_e.__webglColorRenderbuffer[se]);const we=i.get(m[se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.TEXTURE_2D,we,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}}function H(p){return Math.min(r.maxSamples,p.samples)}function ne(p){const m=i.get(p);return o&&p.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function le(p){const m=a.render.frame;l.get(p)!==m&&(l.set(p,m),p.update())}function L(p,m){const R=p.colorSpace,I=p.format,O=p.type;return p.isCompressedTexture===!0||p.isVideoTexture===!0||p.format===Qa||R!==li&&R!==Zn&&(Qe.getTransfer(R)===it?o===!1?e.has("EXT_sRGB")===!0&&I===ln?(p.format=Qa,p.minFilter=kt,p.generateMipmaps=!1):m=Fh.sRGBToLinear(m):(I!==ln||O!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),m}function h(p){return typeof HTMLImageElement<"u"&&p instanceof HTMLImageElement?(f.width=p.naturalWidth||p.width,f.height=p.naturalHeight||p.height):typeof VideoFrame<"u"&&p instanceof VideoFrame?(f.width=p.displayWidth,f.height=p.displayHeight):(f.width=p.width,f.height=p.height),f}this.allocateTextureUnit=Y,this.resetTextureUnits=N,this.setTexture2D=ie,this.setTexture2DArray=ee,this.setTexture3D=K,this.setTextureCube=ae,this.rebindTextures=V,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=ne}function sy(n,e,t){const i=t.isWebGL2;function r(s,a=Zn){let o;const c=Qe.getTransfer(a);if(s===ii)return n.UNSIGNED_BYTE;if(s===Ch)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Rh)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Fp)return n.BYTE;if(s===kp)return n.SHORT;if(s===yc)return n.UNSIGNED_SHORT;if(s===Ah)return n.INT;if(s===Qn)return n.UNSIGNED_INT;if(s===In)return n.FLOAT;if(s===Wr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Bp)return n.ALPHA;if(s===ln)return n.RGBA;if(s===zp)return n.LUMINANCE;if(s===Hp)return n.LUMINANCE_ALPHA;if(s===wi)return n.DEPTH_COMPONENT;if(s===_r)return n.DEPTH_STENCIL;if(s===Qa)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Gp)return n.RED;if(s===Lh)return n.RED_INTEGER;if(s===Vp)return n.RG;if(s===Dh)return n.RG_INTEGER;if(s===Ph)return n.RGBA_INTEGER;if(s===Zo||s===Jo||s===Qo||s===ea)if(c===it)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Zo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Jo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Qo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ea)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Zo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Jo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Qo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ea)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===gl||s===_l||s===vl||s===yl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===gl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===_l)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===vl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===yl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ih)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===xl||s===Sl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===xl)return c===it?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Sl)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===bl||s===El||s===Ml||s===wl||s===Tl||s===Al||s===Cl||s===Rl||s===Ll||s===Dl||s===Pl||s===Il||s===Ul||s===Nl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===bl)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===El)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ml)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===wl)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Tl)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Al)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Cl)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Rl)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ll)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Dl)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Pl)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Il)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ul)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Nl)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ta||s===Ol||s===Fl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===ta)return c===it?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ol)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Fl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Wp||s===kl||s===Bl||s===zl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===ta)return o.COMPRESSED_RED_RGTC1_EXT;if(s===kl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Bl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===zl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Mi?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class oy extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Us extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ay={type:"move"};class Aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const b of e.hand.values()){const y=t.getJointPose(b,i),_=this._getHandJoint(u,b);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const f=u.joints["index-finger-tip"],l=u.joints["thumb-tip"],d=f.position.distanceTo(l.position),g=.02,v=.005;u.inputState.pinching&&d>g+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=g-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ay)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Us;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const cy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ly=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class uy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new zt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new oi({extensions:{fragDepth:!0},vertexShader:cy,fragmentShader:ly,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new _n(new Mo(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class hy extends Fi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,u=null,f=null,l=null,d=null,g=null,v=null;const b=new uy,y=t.getContextAttributes();let _=null,C=null;const x=[],E=[],T=new Ne;let A=null;const M=new Zt;M.layers.enable(1),M.viewport=new bt;const D=new Zt;D.layers.enable(2),D.viewport=new bt;const F=[M,D],S=new oy;S.layers.enable(1),S.layers.enable(2);let w=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ce=x[q];return ce===void 0&&(ce=new Aa,x[q]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(q){let ce=x[q];return ce===void 0&&(ce=new Aa,x[q]=ce),ce.getGripSpace()},this.getHand=function(q){let ce=x[q];return ce===void 0&&(ce=new Aa,x[q]=ce),ce.getHandSpace()};function G(q){const ce=E.indexOf(q.inputSource);if(ce===-1)return;const ge=x[ce];ge!==void 0&&(ge.update(q.inputSource,q.frame,u||a),ge.dispatchEvent({type:q.type,data:q.inputSource}))}function N(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",Y);for(let q=0;q<x.length;q++){const ce=E[q];ce!==null&&(E[q]=null,x[q].disconnect(ce))}w=null,k=null,b.reset(),e.setRenderTarget(_),g=null,d=null,l=null,r=null,C=null,Ee.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return l},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",N),r.addEventListener("inputsourceschange",Y),y.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ce={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,ce),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),C=new Ri(g.framebufferWidth,g.framebufferHeight,{format:ln,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ce=null,ge=null,De=null;y.depth&&(De=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=y.stencil?_r:wi,ge=y.stencil?Mi:Qn);const Ce={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:s};l=new XRWebGLBinding(r,t),d=l.createProjectionLayer(Ce),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),C=new Ri(d.textureWidth,d.textureHeight,{format:ln,type:ii,depthTexture:new $h(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const xe=e.properties.get(C);xe.__ignoreDepthValues=d.ignoreDepthValues}C.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),Ee.setContext(r),Ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Y(q){for(let ce=0;ce<q.removed.length;ce++){const ge=q.removed[ce],De=E.indexOf(ge);De>=0&&(E[De]=null,x[De].disconnect(ge))}for(let ce=0;ce<q.added.length;ce++){const ge=q.added[ce];let De=E.indexOf(ge);if(De===-1){for(let xe=0;xe<x.length;xe++)if(xe>=E.length){E.push(ge),De=xe;break}else if(E[xe]===null){E[xe]=ge,De=xe;break}if(De===-1)break}const Ce=x[De];Ce&&Ce.connect(ge)}}const X=new W,ie=new W;function ee(q,ce,ge){X.setFromMatrixPosition(ce.matrixWorld),ie.setFromMatrixPosition(ge.matrixWorld);const De=X.distanceTo(ie),Ce=ce.projectionMatrix.elements,xe=ge.projectionMatrix.elements,He=Ce[14]/(Ce[10]-1),Ie=Ce[14]/(Ce[10]+1),V=(Ce[9]+1)/Ce[5],Ke=(Ce[9]-1)/Ce[5],Me=(Ce[8]-1)/Ce[0],z=(xe[8]+1)/xe[0],H=He*Me,ne=He*z,le=De/(-Me+z),L=le*-Me;ce.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(L),q.translateZ(le),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const h=He+le,p=Ie+le,m=H-L,R=ne+(De-L),I=V*Ie/p*h,O=Ke*Ie/p*h;q.projectionMatrix.makePerspective(m,R,I,O,h,p),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function K(q,ce){ce===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ce.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;b.texture!==null&&(q.near=b.depthNear,q.far=b.depthFar),S.near=D.near=M.near=q.near,S.far=D.far=M.far=q.far,(w!==S.near||k!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,k=S.far,M.near=w,M.far=k,D.near=w,D.far=k,M.updateProjectionMatrix(),D.updateProjectionMatrix(),q.updateProjectionMatrix());const ce=q.parent,ge=S.cameras;K(S,ce);for(let De=0;De<ge.length;De++)K(ge[De],ce);ge.length===2?ee(S,M,D):S.projectionMatrix.copy(M.projectionMatrix),ae(q,S,ce)};function ae(q,ce,ge){ge===null?q.matrix.copy(ce.matrixWorld):(q.matrix.copy(ge.matrixWorld),q.matrix.invert(),q.matrix.multiply(ce.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ce.projectionMatrix),q.projectionMatrixInverse.copy(ce.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ec*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&g===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=q)},this.hasDepthSensing=function(){return b.texture!==null};let he=null;function ve(q,ce){if(f=ce.getViewerPose(u||a),v=ce,f!==null){const ge=f.views;g!==null&&(e.setRenderTargetFramebuffer(C,g.framebuffer),e.setRenderTarget(C));let De=!1;ge.length!==S.cameras.length&&(S.cameras.length=0,De=!0);for(let xe=0;xe<ge.length;xe++){const He=ge[xe];let Ie=null;if(g!==null)Ie=g.getViewport(He);else{const Ke=l.getViewSubImage(d,He);Ie=Ke.viewport,xe===0&&(e.setRenderTargetTextures(C,Ke.colorTexture,d.ignoreDepthValues?void 0:Ke.depthStencilTexture),e.setRenderTarget(C))}let V=F[xe];V===void 0&&(V=new Zt,V.layers.enable(xe),V.viewport=new bt,F[xe]=V),V.matrix.fromArray(He.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(He.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),xe===0&&(S.matrix.copy(V.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),De===!0&&S.cameras.push(V)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const xe=l.getDepthInformation(ge[0]);xe&&xe.isValid&&xe.texture&&b.init(e,xe,r.renderState)}}for(let ge=0;ge<x.length;ge++){const De=E[ge],Ce=x[ge];De!==null&&Ce!==void 0&&Ce.update(De,ce,u||a)}b.render(e,S),he&&he(q,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),v=null}const Ee=new qh;Ee.setAnimationLoop(ve),this.setAnimationLoop=function(q){he=q},this.dispose=function(){}}}const vi=new xn,dy=new at;function fy(n,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function i(y,_){_.color.getRGB(y.fogColor.value,Wh(n)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function r(y,_,C,x,E){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(y,_):_.isMeshToonMaterial?(s(y,_),l(y,_)):_.isMeshPhongMaterial?(s(y,_),f(y,_)):_.isMeshStandardMaterial?(s(y,_),d(y,_),_.isMeshPhysicalMaterial&&g(y,_,E)):_.isMeshMatcapMaterial?(s(y,_),v(y,_)):_.isMeshDepthMaterial?s(y,_):_.isMeshDistanceMaterial?(s(y,_),b(y,_)):_.isMeshNormalMaterial?s(y,_):_.isLineBasicMaterial?(a(y,_),_.isLineDashedMaterial&&o(y,_)):_.isPointsMaterial?c(y,_,C,x):_.isSpriteMaterial?u(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Bt&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Bt&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const C=e.get(_),x=C.envMap,E=C.envMapRotation;if(x&&(y.envMap.value=x,vi.copy(E),vi.x*=-1,vi.y*=-1,vi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),y.envMapRotation.value.setFromMatrix4(dy.makeRotationFromEuler(vi)),y.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap){y.lightMap.value=_.lightMap;const T=n._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=_.lightMapIntensity*T,t(_.lightMap,y.lightMapTransform)}_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function a(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function o(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function c(y,_,C,x){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*C,y.scale.value=x*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function u(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function f(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function l(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function d(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),e.get(_).envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function g(y,_,C){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Bt&&y.clearcoatNormalScale.value.negate())),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function v(y,_){_.matcap&&(y.matcap.value=_.matcap)}function b(y,_){const C=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(C.matrixWorld),y.nearDistance.value=C.shadow.camera.near,y.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function py(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(C,x){const E=x.program;i.uniformBlockBinding(C,E)}function u(C,x){let E=r[C.id];E===void 0&&(v(C),E=f(C),r[C.id]=E,C.addEventListener("dispose",y));const T=x.program;i.updateUBOMapping(C,T);const A=e.render.frame;s[C.id]!==A&&(d(C),s[C.id]=A)}function f(C){const x=l();C.__bindingPointIndex=x;const E=n.createBuffer(),T=C.__size,A=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,T,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,E),E}function l(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(C){const x=r[C.id],E=C.uniforms,T=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let A=0,M=E.length;A<M;A++){const D=Array.isArray(E[A])?E[A]:[E[A]];for(let F=0,S=D.length;F<S;F++){const w=D[F];if(g(w,A,F,T)===!0){const k=w.__offset,G=Array.isArray(w.value)?w.value:[w.value];let N=0;for(let Y=0;Y<G.length;Y++){const X=G[Y],ie=b(X);typeof X=="number"||typeof X=="boolean"?(w.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,k+N,w.__data)):X.isMatrix3?(w.__data[0]=X.elements[0],w.__data[1]=X.elements[1],w.__data[2]=X.elements[2],w.__data[3]=0,w.__data[4]=X.elements[3],w.__data[5]=X.elements[4],w.__data[6]=X.elements[5],w.__data[7]=0,w.__data[8]=X.elements[6],w.__data[9]=X.elements[7],w.__data[10]=X.elements[8],w.__data[11]=0):(X.toArray(w.__data,N),N+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(C,x,E,T){const A=C.value,M=x+"_"+E;if(T[M]===void 0)return typeof A=="number"||typeof A=="boolean"?T[M]=A:T[M]=A.clone(),!0;{const D=T[M];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return T[M]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function v(C){const x=C.uniforms;let E=0;const T=16;for(let M=0,D=x.length;M<D;M++){const F=Array.isArray(x[M])?x[M]:[x[M]];for(let S=0,w=F.length;S<w;S++){const k=F[S],G=Array.isArray(k.value)?k.value:[k.value];for(let N=0,Y=G.length;N<Y;N++){const X=G[N],ie=b(X),ee=E%T;ee!==0&&T-ee<ie.boundary&&(E+=T-ee),k.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=ie.storage}}}const A=E%T;return A>0&&(E+=T-A),C.__size=E,C.__cache={},this}function b(C){const x={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(x.boundary=4,x.storage=4):C.isVector2?(x.boundary=8,x.storage=8):C.isVector3||C.isColor?(x.boundary=16,x.storage=12):C.isVector4?(x.boundary=16,x.storage=16):C.isMatrix3?(x.boundary=48,x.storage=48):C.isMatrix4?(x.boundary=64,x.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),x}function y(C){const x=C.target;x.removeEventListener("dispose",y);const E=a.indexOf(x.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function _(){for(const C in r)n.deleteBuffer(r[C]);a=[],r={},s={}}return{bind:c,update:u,dispose:_}}class td{constructor(e={}){const{canvas:t=im(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:l=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const g=new Uint32Array(4),v=new Int32Array(4);let b=null,y=null;const _=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pn,this._useLegacyLights=!1,this.toneMapping=ni,this.toneMappingExposure=1;const x=this;let E=!1,T=0,A=0,M=null,D=-1,F=null;const S=new bt,w=new bt;let k=null;const G=new qe(0);let N=0,Y=t.width,X=t.height,ie=1,ee=null,K=null;const ae=new bt(0,0,Y,X),he=new bt(0,0,Y,X);let ve=!1;const Ee=new bc;let q=!1,ce=!1,ge=null;const De=new at,Ce=new Ne,xe=new W,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return M===null?ie:1}let V=i;function Ke(P,j){for(let Q=0;Q<P.length;Q++){const te=P[Q],J=t.getContext(te,j);if(J!==null)return J}return null}try{const P={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vc}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",fe,!1),V===null){const j=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&j.shift(),V=Ke(j,P),V===null)throw Ke(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Me,z,H,ne,le,L,h,p,m,R,I,O,$,pe,_e,re,se,we,de,Ze,Oe,Te,Se,Re;function U(){Me=new x0(V),z=new p0(V,Me,e),Me.init(z),Te=new sy(V,Me,z),H=new iy(V,Me,z),ne=new E0(V),le=new Vv,L=new ry(V,Me,H,le,z,Te,ne),h=new g0(x),p=new y0(x),m=new Rm(V,z),Se=new d0(V,Me,m,z),R=new S0(V,m,ne,Se),I=new A0(V,R,m,ne),de=new T0(V,z,L),re=new m0(le),O=new Gv(x,h,p,Me,z,Se,re),$=new fy(x,le),pe=new Xv,_e=new Zv(Me,z),we=new h0(x,h,p,H,I,d,c),se=new ny(x,I,z),Re=new py(V,ne,z,H),Ze=new f0(V,Me,ne,z),Oe=new b0(V,Me,ne,z),ne.programs=O.programs,x.capabilities=z,x.extensions=Me,x.properties=le,x.renderLists=pe,x.shadowMap=se,x.state=H,x.info=ne}U();const oe=new hy(x,V);this.xr=oe,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const P=Me.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Me.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(P){P!==void 0&&(ie=P,this.setSize(Y,X,!1))},this.getSize=function(P){return P.set(Y,X)},this.setSize=function(P,j,Q=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=P,X=j,t.width=Math.floor(P*ie),t.height=Math.floor(j*ie),Q===!0&&(t.style.width=P+"px",t.style.height=j+"px"),this.setViewport(0,0,P,j)},this.getDrawingBufferSize=function(P){return P.set(Y*ie,X*ie).floor()},this.setDrawingBufferSize=function(P,j,Q){Y=P,X=j,ie=Q,t.width=Math.floor(P*Q),t.height=Math.floor(j*Q),this.setViewport(0,0,P,j)},this.getCurrentViewport=function(P){return P.copy(S)},this.getViewport=function(P){return P.copy(ae)},this.setViewport=function(P,j,Q,te){P.isVector4?ae.set(P.x,P.y,P.z,P.w):ae.set(P,j,Q,te),H.viewport(S.copy(ae).multiplyScalar(ie).round())},this.getScissor=function(P){return P.copy(he)},this.setScissor=function(P,j,Q,te){P.isVector4?he.set(P.x,P.y,P.z,P.w):he.set(P,j,Q,te),H.scissor(w.copy(he).multiplyScalar(ie).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(P){H.setScissorTest(ve=P)},this.setOpaqueSort=function(P){ee=P},this.setTransparentSort=function(P){K=P},this.getClearColor=function(P){return P.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(P=!0,j=!0,Q=!0){let te=0;if(P){let J=!1;if(M!==null){const be=M.texture.format;J=be===Ph||be===Dh||be===Lh}if(J){const be=M.texture.type,Le=be===ii||be===Qn||be===yc||be===Mi||be===Ch||be===Rh,Ue=we.getClearColor(),Fe=we.getClearAlpha(),Xe=Ue.r,Be=Ue.g,ze=Ue.b;Le?(g[0]=Xe,g[1]=Be,g[2]=ze,g[3]=Fe,V.clearBufferuiv(V.COLOR,0,g)):(v[0]=Xe,v[1]=Be,v[2]=ze,v[3]=Fe,V.clearBufferiv(V.COLOR,0,v))}else te|=V.COLOR_BUFFER_BIT}j&&(te|=V.DEPTH_BUFFER_BIT),Q&&(te|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),pe.dispose(),_e.dispose(),le.dispose(),h.dispose(),p.dispose(),I.dispose(),Se.dispose(),Re.dispose(),O.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",ct),oe.removeEventListener("sessionend",$e),ge&&(ge.dispose(),ge=null),nt.stop()};function Ae(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const P=ne.autoReset,j=se.enabled,Q=se.autoUpdate,te=se.needsUpdate,J=se.type;U(),ne.autoReset=P,se.enabled=j,se.autoUpdate=Q,se.needsUpdate=te,se.type=J}function fe(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Z(P){const j=P.target;j.removeEventListener("dispose",Z),ue(j)}function ue(P){ye(P),le.remove(P)}function ye(P){const j=le.get(P).programs;j!==void 0&&(j.forEach(function(Q){O.releaseProgram(Q)}),P.isShaderMaterial&&O.releaseShaderCache(P))}this.renderBufferDirect=function(P,j,Q,te,J,be){j===null&&(j=He);const Le=J.isMesh&&J.matrixWorld.determinant()<0,Ue=Kf(P,j,Q,te,J);H.setMaterial(te,Le);let Fe=Q.index,Xe=1;if(te.wireframe===!0){if(Fe=R.getWireframeAttribute(Q),Fe===void 0)return;Xe=2}const Be=Q.drawRange,ze=Q.attributes.position;let ut=Be.start*Xe,Gt=(Be.start+Be.count)*Xe;be!==null&&(ut=Math.max(ut,be.start*Xe),Gt=Math.min(Gt,(be.start+be.count)*Xe)),Fe!==null?(ut=Math.max(ut,0),Gt=Math.min(Gt,Fe.count)):ze!=null&&(ut=Math.max(ut,0),Gt=Math.min(Gt,ze.count));const _t=Gt-ut;if(_t<0||_t===1/0)return;Se.setup(J,te,Ue,Q,Fe);let Mn,st=Ze;if(Fe!==null&&(Mn=m.get(Fe),st=Oe,st.setIndex(Mn)),J.isMesh)te.wireframe===!0?(H.setLineWidth(te.wireframeLinewidth*Ie()),st.setMode(V.LINES)):st.setMode(V.TRIANGLES);else if(J.isLine){let Ge=te.linewidth;Ge===void 0&&(Ge=1),H.setLineWidth(Ge*Ie()),J.isLineSegments?st.setMode(V.LINES):J.isLineLoop?st.setMode(V.LINE_LOOP):st.setMode(V.LINE_STRIP)}else J.isPoints?st.setMode(V.POINTS):J.isSprite&&st.setMode(V.TRIANGLES);if(J.isBatchedMesh)st.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)st.renderInstances(ut,_t,J.count);else if(Q.isInstancedBufferGeometry){const Ge=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,jo=Math.min(Q.instanceCount,Ge);st.renderInstances(ut,_t,jo)}else st.render(ut,_t)};function je(P,j,Q){P.transparent===!0&&P.side===Pn&&P.forceSinglePass===!1?(P.side=Bt,P.needsUpdate=!0,hs(P,j,Q),P.side=si,P.needsUpdate=!0,hs(P,j,Q),P.side=Pn):hs(P,j,Q)}this.compile=function(P,j,Q=null){Q===null&&(Q=P),y=_e.get(Q),y.init(),C.push(y),Q.traverseVisible(function(J){J.isLight&&J.layers.test(j.layers)&&(y.pushLight(J),J.castShadow&&y.pushShadow(J))}),P!==Q&&P.traverseVisible(function(J){J.isLight&&J.layers.test(j.layers)&&(y.pushLight(J),J.castShadow&&y.pushShadow(J))}),y.setupLights(x._useLegacyLights);const te=new Set;return P.traverse(function(J){const be=J.material;if(be)if(Array.isArray(be))for(let Le=0;Le<be.length;Le++){const Ue=be[Le];je(Ue,Q,J),te.add(Ue)}else je(be,Q,J),te.add(be)}),C.pop(),y=null,te},this.compileAsync=function(P,j,Q=null){const te=this.compile(P,j,Q);return new Promise(J=>{function be(){if(te.forEach(function(Le){le.get(Le).currentProgram.isReady()&&te.delete(Le)}),te.size===0){J(P);return}setTimeout(be,10)}Me.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Je=null;function et(P){Je&&Je(P)}function ct(){nt.stop()}function $e(){nt.start()}const nt=new qh;nt.setAnimationLoop(et),typeof self<"u"&&nt.setContext(self),this.setAnimationLoop=function(P){Je=P,oe.setAnimationLoop(P),P===null?nt.stop():nt.start()},oe.addEventListener("sessionstart",ct),oe.addEventListener("sessionend",$e),this.render=function(P,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(j),j=oe.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,j,M),y=_e.get(P,C.length),y.init(),C.push(y),De.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Ee.setFromProjectionMatrix(De),ce=this.localClippingEnabled,q=re.init(this.clippingPlanes,ce),b=pe.get(P,_.length),b.init(),_.push(b),Ct(P,j,0,x.sortObjects),b.finish(),x.sortObjects===!0&&b.sort(ee,K),this.info.render.frame++,q===!0&&re.beginShadows();const Q=y.state.shadowsArray;if(se.render(Q,P,j),q===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset(),(oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1)&&we.render(b,P),y.setupLights(x._useLegacyLights),j.isArrayCamera){const te=j.cameras;for(let J=0,be=te.length;J<be;J++){const Le=te[J];ui(b,P,Le,Le.viewport)}}else ui(b,P,j);M!==null&&(L.updateMultisampleRenderTarget(M),L.updateRenderTargetMipmap(M)),P.isScene===!0&&P.onAfterRender(x,P,j),Se.resetDefaultState(),D=-1,F=null,C.pop(),C.length>0?y=C[C.length-1]:y=null,_.pop(),_.length>0?b=_[_.length-1]:b=null};function Ct(P,j,Q,te){if(P.visible===!1)return;if(P.layers.test(j.layers)){if(P.isGroup)Q=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(j);else if(P.isLight)y.pushLight(P),P.castShadow&&y.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Ee.intersectsSprite(P)){te&&xe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(De);const Le=I.update(P),Ue=P.material;Ue.visible&&b.push(P,Le,Ue,Q,xe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Ee.intersectsObject(P))){const Le=I.update(P),Ue=P.material;if(te&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),xe.copy(P.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),xe.copy(Le.boundingSphere.center)),xe.applyMatrix4(P.matrixWorld).applyMatrix4(De)),Array.isArray(Ue)){const Fe=Le.groups;for(let Xe=0,Be=Fe.length;Xe<Be;Xe++){const ze=Fe[Xe],ut=Ue[ze.materialIndex];ut&&ut.visible&&b.push(P,Le,ut,Q,xe.z,ze)}}else Ue.visible&&b.push(P,Le,Ue,Q,xe.z,null)}}const be=P.children;for(let Le=0,Ue=be.length;Le<Ue;Le++)Ct(be[Le],j,Q,te)}function ui(P,j,Q,te){const J=P.opaque,be=P.transmissive,Le=P.transparent;y.setupLightsView(Q),q===!0&&re.setGlobalState(x.clippingPlanes,Q),be.length>0&&ls(J,be,j,Q),te&&H.viewport(S.copy(te)),J.length>0&&us(J,j,Q),be.length>0&&us(be,j,Q),Le.length>0&&us(Le,j,Q),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function ls(P,j,Q,te){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;const be=z.isWebGL2;ge===null&&(ge=new Ri(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?Wr:ii,minFilter:Ei,samples:be?4:0})),x.getDrawingBufferSize(Ce),be?ge.setSize(Ce.x,Ce.y):ge.setSize(tc(Ce.x),tc(Ce.y));const Le=x.getRenderTarget();x.setRenderTarget(ge),x.getClearColor(G),N=x.getClearAlpha(),N<1&&x.setClearColor(16777215,.5),x.clear();const Ue=x.toneMapping;x.toneMapping=ni,us(P,Q,te),L.updateMultisampleRenderTarget(ge),L.updateRenderTargetMipmap(ge);let Fe=!1;for(let Xe=0,Be=j.length;Xe<Be;Xe++){const ze=j[Xe],ut=ze.object,Gt=ze.geometry,_t=ze.material,Mn=ze.group;if(_t.side===Pn&&ut.layers.test(te.layers)){const st=_t.side;_t.side=Bt,_t.needsUpdate=!0,rl(ut,Q,te,Gt,_t,Mn),_t.side=st,_t.needsUpdate=!0,Fe=!0}}Fe===!0&&(L.updateMultisampleRenderTarget(ge),L.updateRenderTargetMipmap(ge)),x.setRenderTarget(Le),x.setClearColor(G,N),x.toneMapping=Ue}function us(P,j,Q){const te=j.isScene===!0?j.overrideMaterial:null;for(let J=0,be=P.length;J<be;J++){const Le=P[J],Ue=Le.object,Fe=Le.geometry,Xe=te===null?Le.material:te,Be=Le.group;Ue.layers.test(Q.layers)&&rl(Ue,j,Q,Fe,Xe,Be)}}function rl(P,j,Q,te,J,be){P.onBeforeRender(x,j,Q,te,J,be),P.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),J.onBeforeRender(x,j,Q,te,P,be),J.transparent===!0&&J.side===Pn&&J.forceSinglePass===!1?(J.side=Bt,J.needsUpdate=!0,x.renderBufferDirect(Q,j,te,J,P,be),J.side=si,J.needsUpdate=!0,x.renderBufferDirect(Q,j,te,J,P,be),J.side=Pn):x.renderBufferDirect(Q,j,te,J,P,be),P.onAfterRender(x,j,Q,te,J,be)}function hs(P,j,Q){j.isScene!==!0&&(j=He);const te=le.get(P),J=y.state.lights,be=y.state.shadowsArray,Le=J.state.version,Ue=O.getParameters(P,J.state,be,j,Q),Fe=O.getProgramCacheKey(Ue);let Xe=te.programs;te.environment=P.isMeshStandardMaterial?j.environment:null,te.fog=j.fog,te.envMap=(P.isMeshStandardMaterial?p:h).get(P.envMap||te.environment),te.envMapRotation=te.environment!==null&&P.envMap===null?j.environmentRotation:P.envMapRotation,Xe===void 0&&(P.addEventListener("dispose",Z),Xe=new Map,te.programs=Xe);let Be=Xe.get(Fe);if(Be!==void 0){if(te.currentProgram===Be&&te.lightsStateVersion===Le)return ol(P,Ue),Be}else Ue.uniforms=O.getUniforms(P),P.onBuild(Q,Ue,x),P.onBeforeCompile(Ue,x),Be=O.acquireProgram(Ue,Fe),Xe.set(Fe,Be),te.uniforms=Ue.uniforms;const ze=te.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ze.clippingPlanes=re.uniform),ol(P,Ue),te.needsLights=Jf(P),te.lightsStateVersion=Le,te.needsLights&&(ze.ambientLightColor.value=J.state.ambient,ze.lightProbe.value=J.state.probe,ze.directionalLights.value=J.state.directional,ze.directionalLightShadows.value=J.state.directionalShadow,ze.spotLights.value=J.state.spot,ze.spotLightShadows.value=J.state.spotShadow,ze.rectAreaLights.value=J.state.rectArea,ze.ltc_1.value=J.state.rectAreaLTC1,ze.ltc_2.value=J.state.rectAreaLTC2,ze.pointLights.value=J.state.point,ze.pointLightShadows.value=J.state.pointShadow,ze.hemisphereLights.value=J.state.hemi,ze.directionalShadowMap.value=J.state.directionalShadowMap,ze.directionalShadowMatrix.value=J.state.directionalShadowMatrix,ze.spotShadowMap.value=J.state.spotShadowMap,ze.spotLightMatrix.value=J.state.spotLightMatrix,ze.spotLightMap.value=J.state.spotLightMap,ze.pointShadowMap.value=J.state.pointShadowMap,ze.pointShadowMatrix.value=J.state.pointShadowMatrix),te.currentProgram=Be,te.uniformsList=null,Be}function sl(P){if(P.uniformsList===null){const j=P.currentProgram.getUniforms();P.uniformsList=Gs.seqWithValue(j.seq,P.uniforms)}return P.uniformsList}function ol(P,j){const Q=le.get(P);Q.outputColorSpace=j.outputColorSpace,Q.batching=j.batching,Q.instancing=j.instancing,Q.instancingColor=j.instancingColor,Q.instancingMorph=j.instancingMorph,Q.skinning=j.skinning,Q.morphTargets=j.morphTargets,Q.morphNormals=j.morphNormals,Q.morphColors=j.morphColors,Q.morphTargetsCount=j.morphTargetsCount,Q.numClippingPlanes=j.numClippingPlanes,Q.numIntersection=j.numClipIntersection,Q.vertexAlphas=j.vertexAlphas,Q.vertexTangents=j.vertexTangents,Q.toneMapping=j.toneMapping}function Kf(P,j,Q,te,J){j.isScene!==!0&&(j=He),L.resetTextureUnits();const be=j.fog,Le=te.isMeshStandardMaterial?j.environment:null,Ue=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:li,Fe=(te.isMeshStandardMaterial?p:h).get(te.envMap||Le),Xe=te.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Be=!!Q.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),ze=!!Q.morphAttributes.position,ut=!!Q.morphAttributes.normal,Gt=!!Q.morphAttributes.color;let _t=ni;te.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(_t=x.toneMapping);const Mn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,st=Mn!==void 0?Mn.length:0,Ge=le.get(te),jo=y.state.lights;if(q===!0&&(ce===!0||P!==F)){const $t=P===F&&te.id===D;re.setState(te,P,$t)}let rt=!1;te.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==jo.state.version||Ge.outputColorSpace!==Ue||J.isBatchedMesh&&Ge.batching===!1||!J.isBatchedMesh&&Ge.batching===!0||J.isInstancedMesh&&Ge.instancing===!1||!J.isInstancedMesh&&Ge.instancing===!0||J.isSkinnedMesh&&Ge.skinning===!1||!J.isSkinnedMesh&&Ge.skinning===!0||J.isInstancedMesh&&Ge.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ge.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Ge.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Ge.instancingMorph===!1&&J.morphTexture!==null||Ge.envMap!==Fe||te.fog===!0&&Ge.fog!==be||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==re.numPlanes||Ge.numIntersection!==re.numIntersection)||Ge.vertexAlphas!==Xe||Ge.vertexTangents!==Be||Ge.morphTargets!==ze||Ge.morphNormals!==ut||Ge.morphColors!==Gt||Ge.toneMapping!==_t||z.isWebGL2===!0&&Ge.morphTargetsCount!==st)&&(rt=!0):(rt=!0,Ge.__version=te.version);let hi=Ge.currentProgram;rt===!0&&(hi=hs(te,j,J));let al=!1,Nr=!1,qo=!1;const Rt=hi.getUniforms(),di=Ge.uniforms;if(H.useProgram(hi.program)&&(al=!0,Nr=!0,qo=!0),te.id!==D&&(D=te.id,Nr=!0),al||F!==P){Rt.setValue(V,"projectionMatrix",P.projectionMatrix),Rt.setValue(V,"viewMatrix",P.matrixWorldInverse);const $t=Rt.map.cameraPosition;$t!==void 0&&$t.setValue(V,xe.setFromMatrixPosition(P.matrixWorld)),z.logarithmicDepthBuffer&&Rt.setValue(V,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Rt.setValue(V,"isOrthographic",P.isOrthographicCamera===!0),F!==P&&(F=P,Nr=!0,qo=!0)}if(J.isSkinnedMesh){Rt.setOptional(V,J,"bindMatrix"),Rt.setOptional(V,J,"bindMatrixInverse");const $t=J.skeleton;$t&&(z.floatVertexTextures?($t.boneTexture===null&&$t.computeBoneTexture(),Rt.setValue(V,"boneTexture",$t.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}J.isBatchedMesh&&(Rt.setOptional(V,J,"batchingTexture"),Rt.setValue(V,"batchingTexture",J._matricesTexture,L));const Yo=Q.morphAttributes;if((Yo.position!==void 0||Yo.normal!==void 0||Yo.color!==void 0&&z.isWebGL2===!0)&&de.update(J,Q,hi),(Nr||Ge.receiveShadow!==J.receiveShadow)&&(Ge.receiveShadow=J.receiveShadow,Rt.setValue(V,"receiveShadow",J.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(di.envMap.value=Fe,di.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Nr&&(Rt.setValue(V,"toneMappingExposure",x.toneMappingExposure),Ge.needsLights&&Zf(di,qo),be&&te.fog===!0&&$.refreshFogUniforms(di,be),$.refreshMaterialUniforms(di,te,ie,X,ge),Gs.upload(V,sl(Ge),di,L)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Gs.upload(V,sl(Ge),di,L),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Rt.setValue(V,"center",J.center),Rt.setValue(V,"modelViewMatrix",J.modelViewMatrix),Rt.setValue(V,"normalMatrix",J.normalMatrix),Rt.setValue(V,"modelMatrix",J.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const $t=te.uniformsGroups;for(let $o=0,Qf=$t.length;$o<Qf;$o++)if(z.isWebGL2){const cl=$t[$o];Re.update(cl,hi),Re.bind(cl,hi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hi}function Zf(P,j){P.ambientLightColor.needsUpdate=j,P.lightProbe.needsUpdate=j,P.directionalLights.needsUpdate=j,P.directionalLightShadows.needsUpdate=j,P.pointLights.needsUpdate=j,P.pointLightShadows.needsUpdate=j,P.spotLights.needsUpdate=j,P.spotLightShadows.needsUpdate=j,P.rectAreaLights.needsUpdate=j,P.hemisphereLights.needsUpdate=j}function Jf(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(P,j,Q){le.get(P.texture).__webglTexture=j,le.get(P.depthTexture).__webglTexture=Q;const te=le.get(P);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=Q===void 0,te.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,j){const Q=le.get(P);Q.__webglFramebuffer=j,Q.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(P,j=0,Q=0){M=P,T=j,A=Q;let te=!0,J=null,be=!1,Le=!1;if(P){const Fe=le.get(P);Fe.__useDefaultFramebuffer!==void 0?(H.bindFramebuffer(V.FRAMEBUFFER,null),te=!1):Fe.__webglFramebuffer===void 0?L.setupRenderTarget(P):Fe.__hasExternalTextures&&L.rebindTextures(P,le.get(P.texture).__webglTexture,le.get(P.depthTexture).__webglTexture);const Xe=P.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Le=!0);const Be=le.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Be[j])?J=Be[j][Q]:J=Be[j],be=!0):z.isWebGL2&&P.samples>0&&L.useMultisampledRTT(P)===!1?J=le.get(P).__webglMultisampledFramebuffer:Array.isArray(Be)?J=Be[Q]:J=Be,S.copy(P.viewport),w.copy(P.scissor),k=P.scissorTest}else S.copy(ae).multiplyScalar(ie).floor(),w.copy(he).multiplyScalar(ie).floor(),k=ve;if(H.bindFramebuffer(V.FRAMEBUFFER,J)&&z.drawBuffers&&te&&H.drawBuffers(P,J),H.viewport(S),H.scissor(w),H.setScissorTest(k),be){const Fe=le.get(P.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,Fe.__webglTexture,Q)}else if(Le){const Fe=le.get(P.texture),Xe=j||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Fe.__webglTexture,Q||0,Xe)}D=-1},this.readRenderTargetPixels=function(P,j,Q,te,J,be,Le){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=le.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue){H.bindFramebuffer(V.FRAMEBUFFER,Ue);try{const Fe=P.texture,Xe=Fe.format,Be=Fe.type;if(Xe!==ln&&Te.convert(Xe)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Be===Wr&&(Me.has("EXT_color_buffer_half_float")||z.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Be!==ii&&Te.convert(Be)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===In&&(z.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=P.width-te&&Q>=0&&Q<=P.height-J&&V.readPixels(j,Q,te,J,Te.convert(Xe),Te.convert(Be),be)}finally{const Fe=M!==null?le.get(M).__webglFramebuffer:null;H.bindFramebuffer(V.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(P,j,Q=0){const te=Math.pow(2,-Q),J=Math.floor(j.image.width*te),be=Math.floor(j.image.height*te);L.setTexture2D(j,0),V.copyTexSubImage2D(V.TEXTURE_2D,Q,0,0,P.x,P.y,J,be),H.unbindTexture()},this.copyTextureToTexture=function(P,j,Q,te=0){const J=j.image.width,be=j.image.height,Le=Te.convert(Q.format),Ue=Te.convert(Q.type);L.setTexture2D(Q,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Q.unpackAlignment),j.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,te,P.x,P.y,J,be,Le,Ue,j.image.data):j.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,te,P.x,P.y,j.mipmaps[0].width,j.mipmaps[0].height,Le,j.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,te,P.x,P.y,Le,Ue,j.image),te===0&&Q.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),H.unbindTexture()},this.copyTextureToTexture3D=function(P,j,Q,te,J=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=Math.round(P.max.x-P.min.x),Le=Math.round(P.max.y-P.min.y),Ue=P.max.z-P.min.z+1,Fe=Te.convert(te.format),Xe=Te.convert(te.type);let Be;if(te.isData3DTexture)L.setTexture3D(te,0),Be=V.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)L.setTexture2DArray(te,0),Be=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,te.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,te.unpackAlignment);const ze=V.getParameter(V.UNPACK_ROW_LENGTH),ut=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Gt=V.getParameter(V.UNPACK_SKIP_PIXELS),_t=V.getParameter(V.UNPACK_SKIP_ROWS),Mn=V.getParameter(V.UNPACK_SKIP_IMAGES),st=Q.isCompressedTexture?Q.mipmaps[J]:Q.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,st.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,st.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,P.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,P.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,P.min.z),Q.isDataTexture||Q.isData3DTexture?V.texSubImage3D(Be,J,j.x,j.y,j.z,be,Le,Ue,Fe,Xe,st.data):te.isCompressedArrayTexture?V.compressedTexSubImage3D(Be,J,j.x,j.y,j.z,be,Le,Ue,Fe,st.data):V.texSubImage3D(Be,J,j.x,j.y,j.z,be,Le,Ue,Fe,Xe,st),V.pixelStorei(V.UNPACK_ROW_LENGTH,ze),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ut),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Gt),V.pixelStorei(V.UNPACK_SKIP_ROWS,_t),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Mn),J===0&&te.generateMipmaps&&V.generateMipmap(Be),H.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?L.setTextureCube(P,0):P.isData3DTexture?L.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?L.setTexture2DArray(P,0):L.setTexture2D(P,0),H.unbindTexture()},this.resetState=function(){T=0,A=0,M=null,H.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===xc?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===So?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class my extends td{}my.prototype.isWebGL1Renderer=!0;class gy extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class nd extends Cr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Du=new W,Pu=new W,Iu=new at,Ca=new Eo,Ns=new bo;class _y extends wt{constructor(e=new hn,t=new nd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Du.fromBufferAttribute(t,r-1),Pu.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Du.distanceTo(Pu);e.setAttribute("lineDistance",new Tt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ns.copy(i.boundingSphere),Ns.applyMatrix4(r),Ns.radius+=s,e.ray.intersectsSphere(Ns)===!1)return;Iu.copy(r).invert(),Ca.copy(e.ray).applyMatrix4(Iu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=new W,f=new W,l=new W,d=new W,g=this.isLineSegments?2:1,v=i.index,y=i.attributes.position;if(v!==null){const _=Math.max(0,a.start),C=Math.min(v.count,a.start+a.count);for(let x=_,E=C-1;x<E;x+=g){const T=v.getX(x),A=v.getX(x+1);if(u.fromBufferAttribute(y,T),f.fromBufferAttribute(y,A),Ca.distanceSqToSegment(u,f,d,l)>c)continue;d.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:l.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,a.start),C=Math.min(y.count,a.start+a.count);for(let x=_,E=C-1;x<E;x+=g){if(u.fromBufferAttribute(y,x),f.fromBufferAttribute(y,x+1),Ca.distanceSqToSegment(u,f,d,l)>c)continue;d.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:l.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Uu=new W,Nu=new W;class vy extends _y{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Uu.fromBufferAttribute(t,r),Nu.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Uu.distanceTo(Nu);e.setAttribute("lineDistance",new Tt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mc extends hn{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const u=this;r=Math.floor(r),s=Math.floor(s);const f=[],l=[],d=[],g=[];let v=0;const b=[],y=i/2;let _=0;C(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(f),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(g,2));function C(){const E=new W,T=new W;let A=0;const M=(t-e)/i;for(let D=0;D<=s;D++){const F=[],S=D/s,w=S*(t-e)+e;for(let k=0;k<=r;k++){const G=k/r,N=G*c+o,Y=Math.sin(N),X=Math.cos(N);T.x=w*Y,T.y=-S*i+y,T.z=w*X,l.push(T.x,T.y,T.z),E.set(Y,M,X).normalize(),d.push(E.x,E.y,E.z),g.push(G,1-S),F.push(v++)}b.push(F)}for(let D=0;D<r;D++)for(let F=0;F<s;F++){const S=b[F][D],w=b[F+1][D],k=b[F+1][D+1],G=b[F][D+1];f.push(S,w,G),f.push(w,k,G),A+=6}u.addGroup(_,A,0),_+=A}function x(E){const T=v,A=new Ne,M=new W;let D=0;const F=E===!0?e:t,S=E===!0?1:-1;for(let k=1;k<=r;k++)l.push(0,y*S,0),d.push(0,S,0),g.push(.5,.5),v++;const w=v;for(let k=0;k<=r;k++){const N=k/r*c+o,Y=Math.cos(N),X=Math.sin(N);M.x=F*X,M.y=y*S,M.z=F*Y,l.push(M.x,M.y,M.z),d.push(0,S,0),A.x=Y*.5+.5,A.y=X*.5*S+.5,g.push(A.x,A.y),v++}for(let k=0;k<r;k++){const G=T+k,N=w+k;E===!0?f.push(N,N+1,G):f.push(N+1,N,G),D+=3}u.addGroup(_,D,E===!0?1:2),_+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wc extends hn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let u=0;const f=[],l=new W,d=new W,g=[],v=[],b=[],y=[];for(let _=0;_<=i;_++){const C=[],x=_/i;let E=0;_===0&&a===0?E=.5/t:_===i&&c===Math.PI&&(E=-.5/t);for(let T=0;T<=t;T++){const A=T/t;l.x=-e*Math.cos(r+A*s)*Math.sin(a+x*o),l.y=e*Math.cos(a+x*o),l.z=e*Math.sin(r+A*s)*Math.sin(a+x*o),v.push(l.x,l.y,l.z),d.copy(l).normalize(),b.push(d.x,d.y,d.z),y.push(A+E,1-x),C.push(u++)}f.push(C)}for(let _=0;_<i;_++)for(let C=0;C<t;C++){const x=f[_][C+1],E=f[_][C],T=f[_+1][C],A=f[_+1][C+1];(_!==0||a>0)&&g.push(x,E,A),(_!==i-1||c<Math.PI)&&g.push(E,T,A)}this.setIndex(g),this.setAttribute("position",new Tt(v,3)),this.setAttribute("normal",new Tt(b,3)),this.setAttribute("uv",new Tt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class yy extends Cr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uh,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class id extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ra=new at,Ou=new W,Fu=new W;class xy{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bc,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ou.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ou),Fu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fu),t.updateMatrixWorld(),Ra.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ra),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ra)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Sy extends xy{constructor(){super(new Yh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class by extends id{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new Sy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ey extends id{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ku=new at;class My{constructor(e,t,i=0,r=1/0){this.ray=new Eo(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Sc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ku.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ku),this}intersectObject(e,t=!0,i=[]){return ic(e,this,i,t),i.sort(Bu),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ic(e[r],this,i,t);return i.sort(Bu),i}}function Bu(n,e){return n.distance-e.distance}function ic(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,a=r.length;s<a;s++)ic(r[s],e,t,!0)}}class zu{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ot(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class wy extends vy{constructor(e=10,t=10,i=4473924,r=8947848){i=new qe(i),r=new qe(r);const s=t/2,a=e/t,o=e/2,c=[],u=[];for(let d=0,g=0,v=-o;d<=t;d++,v+=a){c.push(-o,0,v,o,0,v),c.push(v,0,-o,v,0,o);const b=d===s?i:r;b.toArray(u,g),g+=3,b.toArray(u,g),g+=3,b.toArray(u,g),g+=3,b.toArray(u,g),g+=3}const f=new hn;f.setAttribute("position",new Tt(c,3)),f.setAttribute("color",new Tt(u,3));const l=new nd({vertexColors:!0,toneMapped:!1});super(f,l),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vc);const Hu={type:"change"},La={type:"start"},Gu={type:"end"},Os=new Eo,Vu=new $n,Ty=Math.cos(70*nm.DEG2RAD);class Ay extends Fi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zi.ROTATE,MIDDLE:zi.DOLLY,RIGHT:zi.PAN},this.touches={ONE:Hi.ROTATE,TWO:Hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",_e),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_e),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Hu),i.update(),s=r.NONE},this.update=function(){const U=new W,oe=new Li().setFromUnitVectors(e.up,new W(0,1,0)),Ae=oe.clone().invert(),B=new W,fe=new Li,Z=new W,ue=2*Math.PI;return function(je=null){const Je=i.object.position;U.copy(Je).sub(i.target),U.applyQuaternion(oe),o.setFromVector3(U),i.autoRotate&&s===r.NONE&&k(S(je)),i.enableDamping?(o.theta+=c.theta*i.dampingFactor,o.phi+=c.phi*i.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let et=i.minAzimuthAngle,ct=i.maxAzimuthAngle;isFinite(et)&&isFinite(ct)&&(et<-Math.PI?et+=ue:et>Math.PI&&(et-=ue),ct<-Math.PI?ct+=ue:ct>Math.PI&&(ct-=ue),et<=ct?o.theta=Math.max(et,Math.min(ct,o.theta)):o.theta=o.theta>(et+ct)/2?Math.max(et,o.theta):Math.min(ct,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let $e=!1;if(i.zoomToCursor&&A||i.object.isOrthographicCamera)o.radius=ae(o.radius);else{const nt=o.radius;o.radius=ae(o.radius*u),$e=nt!=o.radius}if(U.setFromSpherical(o),U.applyQuaternion(Ae),Je.copy(i.target).add(U),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),f.set(0,0,0)),i.zoomToCursor&&A){let nt=null;if(i.object.isPerspectiveCamera){const Ct=U.length();nt=ae(Ct*u);const ui=Ct-nt;i.object.position.addScaledVector(E,ui),i.object.updateMatrixWorld(),$e=!!ui}else if(i.object.isOrthographicCamera){const Ct=new W(T.x,T.y,0);Ct.unproject(i.object);const ui=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),$e=ui!==i.object.zoom;const ls=new W(T.x,T.y,0);ls.unproject(i.object),i.object.position.sub(ls).add(Ct),i.object.updateMatrixWorld(),nt=U.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;nt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(nt).add(i.object.position):(Os.origin.copy(i.object.position),Os.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Os.direction))<Ty?e.lookAt(i.target):(Vu.setFromNormalAndCoplanarPoint(i.object.up,i.target),Os.intersectPlane(Vu,i.target))))}else if(i.object.isOrthographicCamera){const nt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),nt!==i.object.zoom&&(i.object.updateProjectionMatrix(),$e=!0)}return u=1,A=!1,$e||B.distanceToSquared(i.object.position)>a||8*(1-fe.dot(i.object.quaternion))>a||Z.distanceToSquared(i.target)>a?(i.dispatchEvent(Hu),B.copy(i.object.position),fe.copy(i.object.quaternion),Z.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",we),i.domElement.removeEventListener("pointerdown",L),i.domElement.removeEventListener("pointercancel",p),i.domElement.removeEventListener("wheel",I),i.domElement.removeEventListener("pointermove",h),i.domElement.removeEventListener("pointerup",p),i.domElement.getRootNode().removeEventListener("keydown",$,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",_e),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new zu,c=new zu;let u=1;const f=new W,l=new Ne,d=new Ne,g=new Ne,v=new Ne,b=new Ne,y=new Ne,_=new Ne,C=new Ne,x=new Ne,E=new W,T=new Ne;let A=!1;const M=[],D={};let F=!1;function S(U){return U!==null?2*Math.PI/60*i.autoRotateSpeed*U:2*Math.PI/60/60*i.autoRotateSpeed}function w(U){const oe=Math.abs(U*.01);return Math.pow(.95,i.zoomSpeed*oe)}function k(U){c.theta-=U}function G(U){c.phi-=U}const N=function(){const U=new W;return function(Ae,B){U.setFromMatrixColumn(B,0),U.multiplyScalar(-Ae),f.add(U)}}(),Y=function(){const U=new W;return function(Ae,B){i.screenSpacePanning===!0?U.setFromMatrixColumn(B,1):(U.setFromMatrixColumn(B,0),U.crossVectors(i.object.up,U)),U.multiplyScalar(Ae),f.add(U)}}(),X=function(){const U=new W;return function(Ae,B){const fe=i.domElement;if(i.object.isPerspectiveCamera){const Z=i.object.position;U.copy(Z).sub(i.target);let ue=U.length();ue*=Math.tan(i.object.fov/2*Math.PI/180),N(2*Ae*ue/fe.clientHeight,i.object.matrix),Y(2*B*ue/fe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(N(Ae*(i.object.right-i.object.left)/i.object.zoom/fe.clientWidth,i.object.matrix),Y(B*(i.object.top-i.object.bottom)/i.object.zoom/fe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ie(U){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ee(U){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(U,oe){if(!i.zoomToCursor)return;A=!0;const Ae=i.domElement.getBoundingClientRect(),B=U-Ae.left,fe=oe-Ae.top,Z=Ae.width,ue=Ae.height;T.x=B/Z*2-1,T.y=-(fe/ue)*2+1,E.set(T.x,T.y,1).unproject(i.object).sub(i.object.position).normalize()}function ae(U){return Math.max(i.minDistance,Math.min(i.maxDistance,U))}function he(U){l.set(U.clientX,U.clientY)}function ve(U){K(U.clientX,U.clientX),_.set(U.clientX,U.clientY)}function Ee(U){v.set(U.clientX,U.clientY)}function q(U){d.set(U.clientX,U.clientY),g.subVectors(d,l).multiplyScalar(i.rotateSpeed);const oe=i.domElement;k(2*Math.PI*g.x/oe.clientHeight),G(2*Math.PI*g.y/oe.clientHeight),l.copy(d),i.update()}function ce(U){C.set(U.clientX,U.clientY),x.subVectors(C,_),x.y>0?ie(w(x.y)):x.y<0&&ee(w(x.y)),_.copy(C),i.update()}function ge(U){b.set(U.clientX,U.clientY),y.subVectors(b,v).multiplyScalar(i.panSpeed),X(y.x,y.y),v.copy(b),i.update()}function De(U){K(U.clientX,U.clientY),U.deltaY<0?ee(w(U.deltaY)):U.deltaY>0&&ie(w(U.deltaY)),i.update()}function Ce(U){let oe=!1;switch(U.code){case i.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?G(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(0,i.keyPanSpeed),oe=!0;break;case i.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?G(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(0,-i.keyPanSpeed),oe=!0;break;case i.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?k(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(i.keyPanSpeed,0),oe=!0;break;case i.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?k(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(-i.keyPanSpeed,0),oe=!0;break}oe&&(U.preventDefault(),i.update())}function xe(U){if(M.length===1)l.set(U.pageX,U.pageY);else{const oe=Se(U),Ae=.5*(U.pageX+oe.x),B=.5*(U.pageY+oe.y);l.set(Ae,B)}}function He(U){if(M.length===1)v.set(U.pageX,U.pageY);else{const oe=Se(U),Ae=.5*(U.pageX+oe.x),B=.5*(U.pageY+oe.y);v.set(Ae,B)}}function Ie(U){const oe=Se(U),Ae=U.pageX-oe.x,B=U.pageY-oe.y,fe=Math.sqrt(Ae*Ae+B*B);_.set(0,fe)}function V(U){i.enableZoom&&Ie(U),i.enablePan&&He(U)}function Ke(U){i.enableZoom&&Ie(U),i.enableRotate&&xe(U)}function Me(U){if(M.length==1)d.set(U.pageX,U.pageY);else{const Ae=Se(U),B=.5*(U.pageX+Ae.x),fe=.5*(U.pageY+Ae.y);d.set(B,fe)}g.subVectors(d,l).multiplyScalar(i.rotateSpeed);const oe=i.domElement;k(2*Math.PI*g.x/oe.clientHeight),G(2*Math.PI*g.y/oe.clientHeight),l.copy(d)}function z(U){if(M.length===1)b.set(U.pageX,U.pageY);else{const oe=Se(U),Ae=.5*(U.pageX+oe.x),B=.5*(U.pageY+oe.y);b.set(Ae,B)}y.subVectors(b,v).multiplyScalar(i.panSpeed),X(y.x,y.y),v.copy(b)}function H(U){const oe=Se(U),Ae=U.pageX-oe.x,B=U.pageY-oe.y,fe=Math.sqrt(Ae*Ae+B*B);C.set(0,fe),x.set(0,Math.pow(C.y/_.y,i.zoomSpeed)),ie(x.y),_.copy(C);const Z=(U.pageX+oe.x)*.5,ue=(U.pageY+oe.y)*.5;K(Z,ue)}function ne(U){i.enableZoom&&H(U),i.enablePan&&z(U)}function le(U){i.enableZoom&&H(U),i.enableRotate&&Me(U)}function L(U){i.enabled!==!1&&(M.length===0&&(i.domElement.setPointerCapture(U.pointerId),i.domElement.addEventListener("pointermove",h),i.domElement.addEventListener("pointerup",p)),!Oe(U)&&(de(U),U.pointerType==="touch"?re(U):m(U)))}function h(U){i.enabled!==!1&&(U.pointerType==="touch"?se(U):R(U))}function p(U){switch(Ze(U),M.length){case 0:i.domElement.releasePointerCapture(U.pointerId),i.domElement.removeEventListener("pointermove",h),i.domElement.removeEventListener("pointerup",p),i.dispatchEvent(Gu),s=r.NONE;break;case 1:const oe=M[0],Ae=D[oe];re({pointerId:oe,pageX:Ae.x,pageY:Ae.y});break}}function m(U){let oe;switch(U.button){case 0:oe=i.mouseButtons.LEFT;break;case 1:oe=i.mouseButtons.MIDDLE;break;case 2:oe=i.mouseButtons.RIGHT;break;default:oe=-1}switch(oe){case zi.DOLLY:if(i.enableZoom===!1)return;ve(U),s=r.DOLLY;break;case zi.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(i.enablePan===!1)return;Ee(U),s=r.PAN}else{if(i.enableRotate===!1)return;he(U),s=r.ROTATE}break;case zi.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(i.enableRotate===!1)return;he(U),s=r.ROTATE}else{if(i.enablePan===!1)return;Ee(U),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(La)}function R(U){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;q(U);break;case r.DOLLY:if(i.enableZoom===!1)return;ce(U);break;case r.PAN:if(i.enablePan===!1)return;ge(U);break}}function I(U){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(U.preventDefault(),i.dispatchEvent(La),De(O(U)),i.dispatchEvent(Gu))}function O(U){const oe=U.deltaMode,Ae={clientX:U.clientX,clientY:U.clientY,deltaY:U.deltaY};switch(oe){case 1:Ae.deltaY*=16;break;case 2:Ae.deltaY*=100;break}return U.ctrlKey&&!F&&(Ae.deltaY*=10),Ae}function $(U){U.key==="Control"&&(F=!0,i.domElement.getRootNode().addEventListener("keyup",pe,{passive:!0,capture:!0}))}function pe(U){U.key==="Control"&&(F=!1,i.domElement.getRootNode().removeEventListener("keyup",pe,{passive:!0,capture:!0}))}function _e(U){i.enabled===!1||i.enablePan===!1||Ce(U)}function re(U){switch(Te(U),M.length){case 1:switch(i.touches.ONE){case Hi.ROTATE:if(i.enableRotate===!1)return;xe(U),s=r.TOUCH_ROTATE;break;case Hi.PAN:if(i.enablePan===!1)return;He(U),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Hi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;V(U),s=r.TOUCH_DOLLY_PAN;break;case Hi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ke(U),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(La)}function se(U){switch(Te(U),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Me(U),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;z(U),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ne(U),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;le(U),i.update();break;default:s=r.NONE}}function we(U){i.enabled!==!1&&U.preventDefault()}function de(U){M.push(U.pointerId)}function Ze(U){delete D[U.pointerId];for(let oe=0;oe<M.length;oe++)if(M[oe]==U.pointerId){M.splice(oe,1);return}}function Oe(U){for(let oe=0;oe<M.length;oe++)if(M[oe]==U.pointerId)return!0;return!1}function Te(U){let oe=D[U.pointerId];oe===void 0&&(oe=new Ne,D[U.pointerId]=oe),oe.set(U.pageX,U.pageY)}function Se(U){const oe=U.pointerId===M[0]?M[1]:M[0];return D[oe]}i.domElement.addEventListener("contextmenu",we),i.domElement.addEventListener("pointerdown",L),i.domElement.addEventListener("pointercancel",p),i.domElement.addEventListener("wheel",I,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",$,{passive:!0,capture:!0}),this.update()}}const Nn=new gy;Nn.background=new qe(592656);const kn=new Zt(60,1,.1,1e3);kn.position.set(8,6,8);kn.lookAt(0,0,0);const Di=new td({antialias:!0});Di.setPixelRatio(window.devicePixelRatio);const To=new Ay(kn,Di.domElement);To.enableDamping=!0;To.dampingFactor=.05;const Cy=new Ey(16777215,.5);Nn.add(Cy);const rd=new by(16777215,1);rd.position.set(5,10,7);Nn.add(rd);const Ry=new wy(20,20,1711657,1185053);Nn.add(Ry);function Ly(){const n=document.getElementById("viewport-canvas");n&&(n.appendChild(Di.domElement),Tc())}function Tc(){const n=document.getElementById("viewport-canvas");if(!n)return;const e=n.clientWidth,t=n.clientHeight;kn.aspect=e/t,kn.updateProjectionMatrix(),Di.setSize(e,t)}window.addEventListener("resize",Tc);const Ht=()=>new Map,rc=n=>{const e=Ht();return n.forEach((t,i)=>{e.set(i,t)}),e},Yt=(n,e,t)=>{let i=n.get(e);return i===void 0&&n.set(e,i=t()),i},Dy=(n,e)=>{const t=[];for(const[i,r]of n)t.push(e(r,i));return t},Py=(n,e)=>{for(const[t,i]of n)if(e(i,t))return!0;return!1},ai=()=>new Set,Da=n=>n[n.length-1],Iy=(n,e)=>{for(let t=0;t<e.length;t++)n.push(e[t])},Bn=Array.from,Ac=(n,e)=>{for(let t=0;t<n.length;t++)if(!e(n[t],t,n))return!1;return!0},sd=(n,e)=>{for(let t=0;t<n.length;t++)if(e(n[t],t,n))return!0;return!1},Uy=(n,e)=>{const t=new Array(n);for(let i=0;i<n;i++)t[i]=e(i,t);return t},Ao=Array.isArray;class od{constructor(){this._observers=Ht()}on(e,t){return Yt(this._observers,e,ai).add(t),t}once(e,t){const i=(...r)=>{this.off(e,i),t(...r)};this.on(e,i)}off(e,t){const i=this._observers.get(e);i!==void 0&&(i.delete(t),i.size===0&&this._observers.delete(e))}emit(e,t){return Bn((this._observers.get(e)||Ht()).values()).forEach(i=>i(...t))}destroy(){this._observers=Ht()}}class ad{constructor(){this._observers=Ht()}on(e,t){Yt(this._observers,e,ai).add(t)}once(e,t){const i=(...r)=>{this.off(e,i),t(...r)};this.on(e,i)}off(e,t){const i=this._observers.get(e);i!==void 0&&(i.delete(t),i.size===0&&this._observers.delete(e))}emit(e,t){return Bn((this._observers.get(e)||Ht()).values()).forEach(i=>i(...t))}destroy(){this._observers=Ht()}}const tn=Math.floor,Vs=Math.abs,Ny=Math.log10,Cc=(n,e)=>n<e?n:e,ki=(n,e)=>n>e?n:e,cd=n=>n!==0?n<0:1/n<0,Wu=1,Xu=2,Pa=4,Ia=8,Xr=32,On=64,qt=128,Co=31,sc=63,Ti=127,Oy=2147483647,to=Number.MAX_SAFE_INTEGER,ju=Number.MIN_SAFE_INTEGER,Fy=Number.isInteger||(n=>typeof n=="number"&&isFinite(n)&&tn(n)===n),ld=String.fromCharCode,ky=n=>n.toLowerCase(),By=/^\s*/g,zy=n=>n.replace(By,""),Hy=/([A-Z])/g,qu=(n,e)=>zy(n.replace(Hy,t=>`${e}${ky(t)}`)),Gy=n=>{const e=unescape(encodeURIComponent(n)),t=e.length,i=new Uint8Array(t);for(let r=0;r<t;r++)i[r]=e.codePointAt(r);return i},jr=typeof TextEncoder<"u"?new TextEncoder:null,Vy=n=>jr.encode(n),oc=jr?Vy:Gy;let Gr=typeof TextDecoder>"u"?null:new TextDecoder("utf-8",{fatal:!0,ignoreBOM:!0});Gr&&Gr.decode(new Uint8Array).length===1&&(Gr=null);const Wy=(n,e)=>Uy(e,()=>n).join("");class is{constructor(){this.cpos=0,this.cbuf=new Uint8Array(100),this.bufs=[]}}const St=()=>new is,Xy=n=>{let e=n.cpos;for(let t=0;t<n.bufs.length;t++)e+=n.bufs[t].length;return e},ot=n=>{const e=new Uint8Array(Xy(n));let t=0;for(let i=0;i<n.bufs.length;i++){const r=n.bufs[i];e.set(r,t),t+=r.length}return e.set(new Uint8Array(n.cbuf.buffer,0,n.cpos),t),e},jy=(n,e)=>{const t=n.cbuf.length;t-n.cpos<e&&(n.bufs.push(new Uint8Array(n.cbuf.buffer,0,n.cpos)),n.cbuf=new Uint8Array(ki(t,e)*2),n.cpos=0)},yt=(n,e)=>{const t=n.cbuf.length;n.cpos===t&&(n.bufs.push(n.cbuf),n.cbuf=new Uint8Array(t*2),n.cpos=0),n.cbuf[n.cpos++]=e},qr=yt,Pe=(n,e)=>{for(;e>Ti;)yt(n,qt|Ti&e),e=tn(e/128);yt(n,Ti&e)},Rc=(n,e)=>{const t=cd(e);for(t&&(e=-e),yt(n,(e>sc?qt:0)|(t?On:0)|sc&e),e=tn(e/64);e>0;)yt(n,(e>Ti?qt:0)|Ti&e),e=tn(e/128)},ac=new Uint8Array(3e4),qy=ac.length/3,Yy=(n,e)=>{if(e.length<qy){const t=jr.encodeInto(e,ac).written||0;Pe(n,t);for(let i=0;i<t;i++)yt(n,ac[i])}else lt(n,oc(e))},$y=(n,e)=>{const t=unescape(encodeURIComponent(e)),i=t.length;Pe(n,i);for(let r=0;r<i;r++)yt(n,t.codePointAt(r))},yn=jr&&jr.encodeInto?Yy:$y,Ro=(n,e)=>{const t=n.cbuf.length,i=n.cpos,r=Cc(t-i,e.length),s=e.length-r;n.cbuf.set(e.subarray(0,r),i),n.cpos+=r,s>0&&(n.bufs.push(n.cbuf),n.cbuf=new Uint8Array(ki(t*2,s)),n.cbuf.set(e.subarray(r)),n.cpos=s)},lt=(n,e)=>{Pe(n,e.byteLength),Ro(n,e)},Lc=(n,e)=>{jy(n,e);const t=new DataView(n.cbuf.buffer,n.cpos,e);return n.cpos+=e,t},Ky=(n,e)=>Lc(n,4).setFloat32(0,e,!1),Zy=(n,e)=>Lc(n,8).setFloat64(0,e,!1),Jy=(n,e)=>Lc(n,8).setBigInt64(0,e,!1),Yu=new DataView(new ArrayBuffer(4)),Qy=n=>(Yu.setFloat32(0,n),Yu.getFloat32(0)===n),yr=(n,e)=>{switch(typeof e){case"string":yt(n,119),yn(n,e);break;case"number":Fy(e)&&Vs(e)<=Oy?(yt(n,125),Rc(n,e)):Qy(e)?(yt(n,124),Ky(n,e)):(yt(n,123),Zy(n,e));break;case"bigint":yt(n,122),Jy(n,e);break;case"object":if(e===null)yt(n,126);else if(Ao(e)){yt(n,117),Pe(n,e.length);for(let t=0;t<e.length;t++)yr(n,e[t])}else if(e instanceof Uint8Array)yt(n,116),lt(n,e);else{yt(n,118);const t=Object.keys(e);Pe(n,t.length);for(let i=0;i<t.length;i++){const r=t[i];yn(n,r),yr(n,e[r])}}break;case"boolean":yt(n,e?120:121);break;default:yt(n,127)}};class $u extends is{constructor(e){super(),this.w=e,this.s=null,this.count=0}write(e){this.s===e?this.count++:(this.count>0&&Pe(this,this.count-1),this.count=1,this.w(this,e),this.s=e)}}const Ku=n=>{n.count>0&&(Rc(n.encoder,n.count===1?n.s:-n.s),n.count>1&&Pe(n.encoder,n.count-2))};class Ws{constructor(){this.encoder=new is,this.s=0,this.count=0}write(e){this.s===e?this.count++:(Ku(this),this.count=1,this.s=e)}toUint8Array(){return Ku(this),ot(this.encoder)}}const Zu=n=>{if(n.count>0){const e=n.diff*2+(n.count===1?0:1);Rc(n.encoder,e),n.count>1&&Pe(n.encoder,n.count-2)}};class Ua{constructor(){this.encoder=new is,this.s=0,this.count=0,this.diff=0}write(e){this.diff===e-this.s?(this.s=e,this.count++):(Zu(this),this.count=1,this.diff=e-this.s,this.s=e)}toUint8Array(){return Zu(this),ot(this.encoder)}}class ex{constructor(){this.sarr=[],this.s="",this.lensE=new Ws}write(e){this.s+=e,this.s.length>19&&(this.sarr.push(this.s),this.s=""),this.lensE.write(e.length)}toUint8Array(){const e=new is;return this.sarr.push(this.s),this.s="",yn(e,this.sarr.join("")),Ro(e,this.lensE.toUint8Array()),ot(e)}}const nn=n=>new Error(n),un=()=>{throw nn("Method unimplemented")},rn=()=>{throw nn("Unexpected case")},ud=nn("Unexpected end of array"),hd=nn("Integer out of Range");class Lo{constructor(e){this.arr=e,this.pos=0}}const En=n=>new Lo(n),tx=n=>n.pos!==n.arr.length,nx=(n,e)=>{const t=new Uint8Array(n.arr.buffer,n.pos+n.arr.byteOffset,e);return n.pos+=e,t},xt=n=>nx(n,ke(n)),Pi=n=>n.arr[n.pos++],ke=n=>{let e=0,t=1;const i=n.arr.length;for(;n.pos<i;){const r=n.arr[n.pos++];if(e=e+(r&Ti)*t,t*=128,r<qt)return e;if(e>to)throw hd}throw ud},Dc=n=>{let e=n.arr[n.pos++],t=e&sc,i=64;const r=(e&On)>0?-1:1;if(!(e&qt))return r*t;const s=n.arr.length;for(;n.pos<s;){if(e=n.arr[n.pos++],t=t+(e&Ti)*i,i*=128,e<qt)return r*t;if(t>to)throw hd}throw ud},ix=n=>{let e=ke(n);if(e===0)return"";{let t=String.fromCodePoint(Pi(n));if(--e<100)for(;e--;)t+=String.fromCodePoint(Pi(n));else for(;e>0;){const i=e<1e4?e:1e4,r=n.arr.subarray(n.pos,n.pos+i);n.pos+=i,t+=String.fromCodePoint.apply(null,r),e-=i}return decodeURIComponent(escape(t))}},rx=n=>Gr.decode(xt(n)),Fn=Gr?rx:ix,Pc=(n,e)=>{const t=new DataView(n.arr.buffer,n.arr.byteOffset+n.pos,e);return n.pos+=e,t},sx=n=>Pc(n,4).getFloat32(0,!1),ox=n=>Pc(n,8).getFloat64(0,!1),ax=n=>Pc(n,8).getBigInt64(0,!1),cx=[n=>{},n=>null,Dc,sx,ox,ax,n=>!1,n=>!0,Fn,n=>{const e=ke(n),t={};for(let i=0;i<e;i++){const r=Fn(n);t[r]=xr(n)}return t},n=>{const e=ke(n),t=[];for(let i=0;i<e;i++)t.push(xr(n));return t},xt],xr=n=>cx[127-Pi(n)](n);class Ju extends Lo{constructor(e,t){super(e),this.reader=t,this.s=null,this.count=0}read(){return this.count===0&&(this.s=this.reader(this),tx(this)?this.count=ke(this)+1:this.count=-1),this.count--,this.s}}class Xs extends Lo{constructor(e){super(e),this.s=0,this.count=0}read(){if(this.count===0){this.s=Dc(this);const e=cd(this.s);this.count=1,e&&(this.s=-this.s,this.count=ke(this)+2)}return this.count--,this.s}}class Na extends Lo{constructor(e){super(e),this.s=0,this.count=0,this.diff=0}read(){if(this.count===0){const e=Dc(this),t=e&1;this.diff=tn(e/2),this.count=1,t&&(this.count=ke(this)+2)}return this.s+=this.diff,this.count--,this.s}}class lx{constructor(e){this.decoder=new Xs(e),this.str=Fn(this.decoder),this.spos=0}read(){const e=this.spos+this.decoder.read(),t=this.str.slice(this.spos,e);return this.spos=e,t}}const ux=crypto.getRandomValues.bind(crypto),hx=Math.random,dd=()=>ux(new Uint32Array(1))[0],dx="10000000-1000-4000-8000"+-1e11,fd=()=>dx.replace(/[018]/g,n=>(n^dd()&15>>n/4).toString(16)),zn=Date.now,Qu=n=>new Promise(n);Promise.all.bind(Promise);const fx=n=>Promise.reject(n),Ic=n=>Promise.resolve(n),eh=n=>n===void 0?null:n;class px{constructor(){this.map=new Map}setItem(e,t){this.map.set(e,t)}getItem(e){return this.map.get(e)}}let pd=new px,Uc=!0;try{typeof localStorage<"u"&&localStorage&&(pd=localStorage,Uc=!1)}catch{}const md=pd,mx=n=>Uc||addEventListener("storage",n),gx=n=>Uc||removeEventListener("storage",n),Yr=Symbol("Equality"),gd=(n,e)=>{var t;return n===e||!!((t=n==null?void 0:n[Yr])!=null&&t.call(n,e))||!1},_x=n=>typeof n=="object",vx=Object.assign,yx=Object.keys,xx=(n,e)=>{for(const t in n)e(n[t],t)},no=n=>yx(n).length,Sx=n=>{for(const e in n)return!1;return!0},rs=(n,e)=>{for(const t in n)if(!e(n[t],t))return!1;return!0},Nc=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),bx=(n,e)=>n===e||no(n)===no(e)&&rs(n,(t,i)=>(t!==void 0||Nc(e,i))&&gd(e[i],t)),Ex=Object.freeze,_d=n=>{for(const e in n){const t=n[e];(typeof t=="object"||typeof t=="function")&&_d(n[e])}return Ex(n)},Oc=(n,e,t=0)=>{try{for(;t<n.length;t++)n[t](...e)}finally{t<n.length&&Oc(n,e,t+1)}},Mx=()=>{},wx=n=>n,ur=(n,e)=>{if(n===e)return!0;if(n==null||e==null||n.constructor!==e.constructor&&(n.constructor||Object)!==(e.constructor||Object))return!1;if(n[Yr]!=null)return n[Yr](e);switch(n.constructor){case ArrayBuffer:n=new Uint8Array(n),e=new Uint8Array(e);case Uint8Array:{if(n.byteLength!==e.byteLength)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;break}case Set:{if(n.size!==e.size)return!1;for(const t of n)if(!e.has(t))return!1;break}case Map:{if(n.size!==e.size)return!1;for(const t of n.keys())if(!e.has(t)||!ur(n.get(t),e.get(t)))return!1;break}case void 0:case Object:if(no(n)!==no(e))return!1;for(const t in n)if(!Nc(n,t)||!ur(n[t],e[t]))return!1;break;case Array:if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(!ur(n[t],e[t]))return!1;break;default:return!1}return!0},Tx=(n,e)=>e.includes(n);var vd={};const Sr=typeof process<"u"&&process.release&&/node|io\.js/.test(process.release.name)&&Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]",yd=typeof window<"u"&&typeof document<"u"&&!Sr;let dn;const Ax=()=>{if(dn===void 0)if(Sr){dn=Ht();const n=process.argv;let e=null;for(let t=0;t<n.length;t++){const i=n[t];i[0]==="-"?(e!==null&&dn.set(e,""),e=i):e!==null&&(dn.set(e,i),e=null)}e!==null&&dn.set(e,"")}else typeof location=="object"?(dn=Ht(),(location.search||"?").slice(1).split("&").forEach(n=>{if(n.length!==0){const[e,t]=n.split("=");dn.set(`--${qu(e,"-")}`,t),dn.set(`-${qu(e,"-")}`,t)}})):dn=Ht();return dn},cc=n=>Ax().has(n),$r=n=>eh(Sr?vd[n.toUpperCase().replaceAll("-","_")]:md.getItem(n)),xd=n=>cc("--"+n)||$r(n)!==null,Cx=xd("production"),Rx=Sr&&Tx(vd.FORCE_COLOR,["true","1","2"]),Lx=Rx||!cc("--no-colors")&&!xd("no-color")&&(!Sr||process.stdout.isTTY)&&(!Sr||cc("--color")||$r("COLORTERM")!==null||($r("TERM")||"").includes("color")),Sd=n=>new Uint8Array(n),Dx=(n,e,t)=>new Uint8Array(n,e,t),Px=n=>new Uint8Array(n),Ix=n=>{let e="";for(let t=0;t<n.byteLength;t++)e+=ld(n[t]);return btoa(e)},Ux=n=>Buffer.from(n.buffer,n.byteOffset,n.byteLength).toString("base64"),Nx=n=>{const e=atob(n),t=Sd(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t},Ox=n=>{const e=Buffer.from(n,"base64");return Dx(e.buffer,e.byteOffset,e.byteLength)},bd=yd?Ix:Ux,Ed=yd?Nx:Ox,Fx=n=>{const e=Sd(n.byteLength);return e.set(n),e};class kx{constructor(e,t){this.left=e,this.right=t}}const Ln=(n,e)=>new kx(n,e),th=n=>n.next()>=.5,Oa=(n,e,t)=>tn(n.next()*(t+1-e)+e),Md=(n,e,t)=>tn(n.next()*(t+1-e)+e),Fc=(n,e,t)=>Md(n,e,t),Bx=n=>ld(Fc(n,97,122)),zx=(n,e=0,t=20)=>{const i=Fc(n,e,t);let r="";for(let s=0;s<i;s++)r+=Bx(n);return r},Fa=(n,e)=>e[Fc(n,0,e.length-1)],Hx=Symbol("0schema");class Gx{constructor(){this._rerrs=[]}extend(e,t,i,r=null){this._rerrs.push({path:e,expected:t,has:i,message:r})}toString(){const e=[];for(let t=this._rerrs.length-1;t>0;t--){const i=this._rerrs[t];e.push(Wy(" ",(this._rerrs.length-t)*2)+`${i.path!=null?`[${i.path}] `:""}${i.has} doesn't match ${i.expected}. ${i.message}`)}return e.join(`
`)}}const lc=(n,e)=>n===e?!0:n==null||e==null||n.constructor!==e.constructor?!1:n[Yr]?gd(n,e):Ao(n)?Ac(n,t=>sd(e,i=>lc(t,i))):_x(n)?rs(n,(t,i)=>lc(t,e[i])):!1;class It{extends(e){let[t,i]=[this.shape,e.shape];return this.constructor._dilutes&&([i,t]=[t,i]),lc(t,i)}equals(e){return this.constructor===e.constructor&&ur(this.shape,e.shape)}[Hx](){return!0}[Yr](e){return this.equals(e)}validate(e){return this.check(e)}check(e,t){un()}get nullable(){return Dr(this,No)}get optional(){return new Ad(this)}cast(e){return nh(e,this),e}expect(e){return nh(e,this),e}}ds(It,"_dilutes",!1);class kc extends It{constructor(e,t){super(),this.shape=e,this._c=t}check(e,t=void 0){const i=(e==null?void 0:e.constructor)===this.shape&&(this._c==null||this._c(e));return!i&&(t==null||t.extend(null,this.shape.name,e==null?void 0:e.constructor.name,(e==null?void 0:e.constructor)!==this.shape?"Constructor match failed":"Check failed")),i}}const dt=(n,e=null)=>new kc(n,e);dt(kc);class Bc extends It{constructor(e){super(),this.shape=e}check(e,t){const i=this.shape(e);return!i&&(t==null||t.extend(null,"custom prop",e==null?void 0:e.constructor.name,"failed to check custom prop")),i}}const Mt=n=>new Bc(n);dt(Bc);class Do extends It{constructor(e){super(),this.shape=e}check(e,t){const i=this.shape.some(r=>r===e);return!i&&(t==null||t.extend(null,this.shape.join(" | "),e.toString())),i}}const Po=(...n)=>new Do(n),wd=dt(Do),Vx=RegExp.escape||(n=>n.replace(/[().|&,$^[\]]/g,e=>"\\"+e)),Td=n=>{if(br.check(n))return[Vx(n)];if(wd.check(n))return n.shape.map(e=>e+"");if(Od.check(n))return["[+-]?\\d+.?\\d*"];if(Fd.check(n))return[".*"];if(ro.check(n))return n.shape.map(Td).flat(1);rn()};class Wx extends It{constructor(e){super(),this.shape=e,this._r=new RegExp("^"+e.map(Td).map(t=>`(${t.join("|")})`).join("")+"$")}check(e,t){const i=this._r.exec(e)!=null;return!i&&(t==null||t.extend(null,this._r.toString(),e.toString(),"String doesn't match string template.")),i}}dt(Wx);const Xx=Symbol("optional");class Ad extends It{constructor(e){super(),this.shape=e}check(e,t){const i=e===void 0||this.shape.check(e);return!i&&(t==null||t.extend(null,"undefined (optional)","()")),i}get[Xx](){return!0}}const jx=dt(Ad);class qx extends It{check(e,t){return t==null||t.extend(null,"never",typeof e),!1}}dt(qx);const yo=class yo extends It{constructor(e,t=!1){super(),this.shape=e,this._isPartial=t}get partial(){return new yo(this.shape,!0)}check(e,t){return e==null?(t==null||t.extend(null,"object","null"),!1):rs(this.shape,(i,r)=>{const s=this._isPartial&&!Nc(e,r)||i.check(e[r],t);return!s&&(t==null||t.extend(r.toString(),i.toString(),typeof e[r],"Object property does not match")),s})}};ds(yo,"_dilutes",!0);let io=yo;const Yx=n=>new io(n),$x=dt(io),Kx=Mt(n=>n!=null&&(n.constructor===Object||n.constructor==null));class Cd extends It{constructor(e,t){super(),this.shape={keys:e,values:t}}check(e,t){return e!=null&&rs(e,(i,r)=>{const s=this.shape.keys.check(r,t);return!s&&(t==null||t.extend(r+"","Record",typeof e,s?"Key doesn't match schema":"Value doesn't match value")),s&&this.shape.values.check(i,t)})}}const Rd=(n,e)=>new Cd(n,e),Zx=dt(Cd);class Ld extends It{constructor(e){super(),this.shape=e}check(e,t){return e!=null&&rs(this.shape,(i,r)=>{const s=i.check(e[r],t);return!s&&(t==null||t.extend(r.toString(),"Tuple",typeof i)),s})}}const Jx=(...n)=>new Ld(n);dt(Ld);class Dd extends It{constructor(e){super(),this.shape=e.length===1?e[0]:new Io(e)}check(e,t){const i=Ao(e)&&Ac(e,r=>this.shape.check(r));return!i&&(t==null||t.extend(null,"Array","")),i}}const Pd=(...n)=>new Dd(n),Qx=dt(Dd),eS=Mt(n=>Ao(n));class Id extends It{constructor(e,t){super(),this.shape=e,this._c=t}check(e,t){const i=e instanceof this.shape&&(this._c==null||this._c(e));return!i&&(t==null||t.extend(null,this.shape.name,e==null?void 0:e.constructor.name)),i}}const tS=(n,e=null)=>new Id(n,e);dt(Id);const nS=tS(It);class iS extends It{constructor(e){super(),this.len=e.length-1,this.args=Jx(...e.slice(-1)),this.res=e[this.len]}check(e,t){const i=e.constructor===Function&&e.length<=this.len;return!i&&(t==null||t.extend(null,"function",typeof e)),i}}const rS=dt(iS),sS=Mt(n=>typeof n=="function");class oS extends It{constructor(e){super(),this.shape=e}check(e,t){const i=Ac(this.shape,r=>r.check(e,t));return!i&&(t==null||t.extend(null,"Intersectinon",typeof e)),i}}dt(oS,n=>n.shape.length>0);class Io extends It{constructor(e){super(),this.shape=e}check(e,t){const i=sd(this.shape,r=>r.check(e,t));return t==null||t.extend(null,"Union",typeof e),i}}ds(Io,"_dilutes",!0);const Dr=(...n)=>n.findIndex(e=>ro.check(e))>=0?Dr(...n.map(e=>Kr(e)).map(e=>ro.check(e)?e.shape:[e]).flat(1)):n.length===1?n[0]:new Io(n),ro=dt(Io),Ud=()=>!0,so=Mt(Ud),aS=dt(Bc,n=>n.shape===Ud),zc=Mt(n=>typeof n=="bigint"),cS=Mt(n=>n===zc),Nd=Mt(n=>typeof n=="symbol");Mt(n=>n===Nd);const hr=Mt(n=>typeof n=="number"),Od=Mt(n=>n===hr),br=Mt(n=>typeof n=="string"),Fd=Mt(n=>n===br),Uo=Mt(n=>typeof n=="boolean"),lS=Mt(n=>n===Uo),kd=Po(void 0);dt(Do,n=>n.shape.length===1&&n.shape[0]===void 0);Po(void 0);const No=Po(null),uS=dt(Do,n=>n.shape.length===1&&n.shape[0]===null);dt(Uint8Array);dt(kc,n=>n.shape===Uint8Array);const hS=Dr(hr,br,No,kd,zc,Uo,Nd);(()=>{const n=Pd(so),e=Rd(br,so),t=Dr(hr,br,No,Uo,n,e);return n.shape=t,e.shape.values=t,t})();const Kr=n=>{if(nS.check(n))return n;if(Kx.check(n)){const e={};for(const t in n)e[t]=Kr(n[t]);return Yx(e)}else{if(eS.check(n))return Dr(...n.map(Kr));if(hS.check(n))return Po(n);if(sS.check(n))return dt(n)}rn()},nh=Cx?()=>{}:(n,e)=>{const t=new Gx;if(!e.check(n,t))throw nn(`Expected value to be of type ${e.constructor.name}.
${t.toString()}`)};class dS{constructor(e){this.patterns=[],this.$state=e}if(e,t){return this.patterns.push({if:Kr(e),h:t}),this}else(e){return this.if(so,e)}done(){return(e,t)=>{for(let i=0;i<this.patterns.length;i++){const r=this.patterns[i];if(r.if.check(e))return r.h(e,t)}throw nn("Unhandled pattern")}}}const fS=n=>new dS(n),Bd=fS(so).if(Od,(n,e)=>Oa(e,ju,to)).if(Fd,(n,e)=>zx(e)).if(lS,(n,e)=>th(e)).if(cS,(n,e)=>BigInt(Oa(e,ju,to))).if(ro,(n,e)=>rr(e,Fa(e,n.shape))).if($x,(n,e)=>{const t={};for(const i in n.shape){let r=n.shape[i];if(jx.check(r)){if(th(e))continue;r=r.shape}t[i]=Bd(r,e)}return t}).if(Qx,(n,e)=>{const t=[],i=Md(e,0,42);for(let r=0;r<i;r++)t.push(rr(e,n.shape));return t}).if(wd,(n,e)=>Fa(e,n.shape)).if(uS,(n,e)=>null).if(rS,(n,e)=>{const t=rr(e,n.res);return()=>t}).if(aS,(n,e)=>rr(e,Fa(e,[hr,br,No,kd,zc,Uo,Pd(hr),Rd(Dr("a","b","c"),hr)]))).if(Zx,(n,e)=>{const t={},i=Oa(e,0,3);for(let r=0;r<i;r++){const s=rr(e,n.shape.keys),a=rr(e,n.shape.values);t[s]=a}return t}).done(),rr=(n,e)=>Bd(Kr(e),n),Oo=typeof document<"u"?document:{};Mt(n=>n.nodeType===vS);typeof DOMParser<"u"&&new DOMParser;Mt(n=>n.nodeType===mS);Mt(n=>n.nodeType===gS);const pS=n=>Dy(n,(e,t)=>`${t}:${e};`).join(""),mS=Oo.ELEMENT_NODE,gS=Oo.TEXT_NODE,_S=Oo.DOCUMENT_NODE,vS=Oo.DOCUMENT_FRAGMENT_NODE;Mt(n=>n.nodeType===_S);const yS=JSON.stringify,Hn=Symbol,en=Hn(),Ii=Hn(),zd=Hn(),Hc=Hn(),Hd=Hn(),Gd=Hn(),Vd=Hn(),Fo=Hn(),ko=Hn(),xS=n=>{var r;n.length===1&&((r=n[0])==null?void 0:r.constructor)===Function&&(n=n[0]());const e=[],t=[];let i=0;for(;i<n.length;i++){const s=n[i];if(s===void 0)break;if(s.constructor===String||s.constructor===Number)e.push(s);else if(s.constructor===Object)break}for(i>0&&t.push(e.join(""));i<n.length;i++){const s=n[i];s instanceof Symbol||t.push(s)}return t},ih=[Hd,Vd,Fo,zd];let ka=0,rh=zn();const SS=(n,e)=>{const t=ih[ka],i=$r("log"),r=i!==null&&(i==="*"||i==="true"||new RegExp(i,"gi").test(e));return ka=(ka+1)%ih.length,e+=": ",r?(...s)=>{var c;s.length===1&&((c=s[0])==null?void 0:c.constructor)===Function&&(s=s[0]());const a=zn(),o=a-rh;rh=a,n(t,e,ko,...s.map(u=>{switch(u!=null&&u.constructor===Uint8Array&&(u=Array.from(u)),typeof u){case"string":case"symbol":return u;default:return yS(u)}}),t," +"+o+"ms")}:Mx},bS={[en]:Ln("font-weight","bold"),[Ii]:Ln("font-weight","normal"),[zd]:Ln("color","blue"),[Hd]:Ln("color","green"),[Hc]:Ln("color","grey"),[Gd]:Ln("color","red"),[Vd]:Ln("color","purple"),[Fo]:Ln("color","orange"),[ko]:Ln("color","black")},ES=n=>{var a;n.length===1&&((a=n[0])==null?void 0:a.constructor)===Function&&(n=n[0]());const e=[],t=[],i=Ht();let r=[],s=0;for(;s<n.length;s++){const o=n[s],c=bS[o];if(c!==void 0)i.set(c.left,c.right);else{if(o===void 0)break;if(o.constructor===String||o.constructor===Number){const u=pS(i);s>0||u.length>0?(e.push("%c"+o),t.push(u)):e.push(o)}else break}}for(s>0&&(r=t,r.unshift(e.join("")));s<n.length;s++){const o=n[s];o instanceof Symbol||r.push(o)}return r},Wd=Lx?ES:xS,Xd=(...n)=>{console.log(...Wd(n)),jd.forEach(e=>e.print(n))},MS=(...n)=>{console.warn(...Wd(n)),n.unshift(Fo),jd.forEach(e=>e.print(n))},jd=ai(),wS=n=>SS(Xd,n),qd=n=>({[Symbol.iterator](){return this},next:n}),TS=(n,e)=>qd(()=>{let t;do t=n.next();while(!t.done&&!e(t.value));return t}),Ba=(n,e)=>qd(()=>{const{done:t,value:i}=n.next();return{done:t,value:t?void 0:e(i)}});class Bo{constructor(e,t){this.clock=e,this.len=t}}class ss{constructor(){this.clients=new Map}}const Yd=(n,e,t)=>e.clients.forEach((i,r)=>{const s=n.doc.store.clients.get(r);if(s!=null){const a=s[s.length-1],o=a.id.clock+a.length;for(let c=0,u=i[c];c<i.length&&u.clock<o;u=i[++c])cf(n,s,u.clock,u.len,t)}}),AS=(n,e)=>{let t=0,i=n.length-1;for(;t<=i;){const r=tn((t+i)/2),s=n[r],a=s.clock;if(a<=e){if(e<a+s.len)return r;t=r+1}else i=r-1}return null},$d=(n,e)=>{const t=n.clients.get(e.client);return t!==void 0&&AS(t,e.clock)!==null},Gc=n=>{n.clients.forEach(e=>{e.sort((r,s)=>r.clock-s.clock);let t,i;for(t=1,i=1;t<e.length;t++){const r=e[i-1],s=e[t];r.clock+r.len>=s.clock?e[i-1]=new Bo(r.clock,ki(r.len,s.clock+s.len-r.clock)):(i<t&&(e[i]=s),i++)}e.length=i})},CS=n=>{const e=new ss;for(let t=0;t<n.length;t++)n[t].clients.forEach((i,r)=>{if(!e.clients.has(r)){const s=i.slice();for(let a=t+1;a<n.length;a++)Iy(s,n[a].clients.get(r)||[]);e.clients.set(r,s)}});return Gc(e),e},oo=(n,e,t,i)=>{Yt(n.clients,e,()=>[]).push(new Bo(t,i))},RS=()=>new ss,LS=n=>{const e=RS();return n.clients.forEach((t,i)=>{const r=[];for(let s=0;s<t.length;s++){const a=t[s];if(a.deleted){const o=a.id.clock;let c=a.length;if(s+1<t.length)for(let u=t[s+1];s+1<t.length&&u.deleted;u=t[++s+1])c+=u.length;r.push(new Bo(o,c))}}r.length>0&&e.clients.set(i,r)}),e},Pr=(n,e)=>{Pe(n.restEncoder,e.clients.size),Bn(e.clients.entries()).sort((t,i)=>i[0]-t[0]).forEach(([t,i])=>{n.resetDsCurVal(),Pe(n.restEncoder,t);const r=i.length;Pe(n.restEncoder,r);for(let s=0;s<r;s++){const a=i[s];n.writeDsClock(a.clock),n.writeDsLen(a.len)}})},Vc=n=>{const e=new ss,t=ke(n.restDecoder);for(let i=0;i<t;i++){n.resetDsCurVal();const r=ke(n.restDecoder),s=ke(n.restDecoder);if(s>0){const a=Yt(e.clients,r,()=>[]);for(let o=0;o<s;o++)a.push(new Bo(n.readDsClock(),n.readDsLen()))}}return e},sh=(n,e,t)=>{const i=new ss,r=ke(n.restDecoder);for(let s=0;s<r;s++){n.resetDsCurVal();const a=ke(n.restDecoder),o=ke(n.restDecoder),c=t.clients.get(a)||[],u=Et(t,a);for(let f=0;f<o;f++){const l=n.readDsClock(),d=l+n.readDsLen();if(l<u){u<d&&oo(i,a,u,d-u);let g=Sn(c,l),v=c[g];for(!v.deleted&&v.id.clock<l&&(c.splice(g+1,0,po(e,v,l-v.id.clock)),g++);g<c.length&&(v=c[g++],v.id.clock<d);)v.deleted||(d<v.id.clock+v.length&&c.splice(g,0,po(e,v,d-v.id.clock)),v.delete(e))}else oo(i,a,l,d-l)}}if(i.clients.size>0){const s=new Ui;return Pe(s.restEncoder,0),Pr(s,i),s.toUint8Array()}return null},Kd=dd;class Ir extends od{constructor({guid:e=fd(),collectionid:t=null,gc:i=!0,gcFilter:r=()=>!0,meta:s=null,autoLoad:a=!1,shouldLoad:o=!0}={}){super(),this.gc=i,this.gcFilter=r,this.clientID=Kd(),this.guid=e,this.collectionid=t,this.share=new Map,this.store=new of,this._transaction=null,this._transactionCleanups=[],this.subdocs=new Set,this._item=null,this.shouldLoad=o,this.autoLoad=a,this.meta=s,this.isLoaded=!1,this.isSynced=!1,this.isDestroyed=!1,this.whenLoaded=Qu(u=>{this.on("load",()=>{this.isLoaded=!0,u(this)})});const c=()=>Qu(u=>{const f=l=>{(l===void 0||l===!0)&&(this.off("sync",f),u())};this.on("sync",f)});this.on("sync",u=>{u===!1&&this.isSynced&&(this.whenSynced=c()),this.isSynced=u===void 0||u===!0,this.isSynced&&!this.isLoaded&&this.emit("load",[this])}),this.whenSynced=c()}load(){const e=this._item;e!==null&&!this.shouldLoad&&tt(e.parent.doc,t=>{t.subdocsLoaded.add(this)},null,!0),this.shouldLoad=!0}getSubdocs(){return this.subdocs}getSubdocGuids(){return new Set(Bn(this.subdocs).map(e=>e.guid))}transact(e,t=null){return tt(this,e,t)}get(e,t=At){const i=Yt(this.share,e,()=>{const s=new t;return s._integrate(this,null),s}),r=i.constructor;if(t!==At&&r!==t)if(r===At){const s=new t;s._map=i._map,i._map.forEach(a=>{for(;a!==null;a=a.left)a.parent=s}),s._start=i._start;for(let a=s._start;a!==null;a=a.right)a.parent=s;return s._length=i._length,this.share.set(e,s),s._integrate(this,null),s}else throw new Error(`Type with the name ${e} has already been defined with a different constructor`);return i}getArray(e=""){return this.get(e,fr)}getText(e=""){return this.get(e,wr)}getMap(e=""){return this.get(e,Mr)}getXmlElement(e=""){return this.get(e,Tr)}getXmlFragment(e=""){return this.get(e,Ni)}toJSON(){const e={};return this.share.forEach((t,i)=>{e[i]=t.toJSON()}),e}destroy(){this.isDestroyed=!0,Bn(this.subdocs).forEach(t=>t.destroy());const e=this._item;if(e!==null){this._item=null;const t=e.content;t.doc=new Ir({guid:this.guid,...t.opts,shouldLoad:!1}),t.doc._item=e,tt(e.parent.doc,i=>{const r=t.doc;e.deleted||i.subdocsAdded.add(r),i.subdocsRemoved.add(this)},null,!0)}this.emit("destroyed",[!0]),this.emit("destroy",[this]),super.destroy()}}class Zd{constructor(e){this.restDecoder=e}resetDsCurVal(){}readDsClock(){return ke(this.restDecoder)}readDsLen(){return ke(this.restDecoder)}}class Jd extends Zd{readLeftID(){return Ye(ke(this.restDecoder),ke(this.restDecoder))}readRightID(){return Ye(ke(this.restDecoder),ke(this.restDecoder))}readClient(){return ke(this.restDecoder)}readInfo(){return Pi(this.restDecoder)}readString(){return Fn(this.restDecoder)}readParentInfo(){return ke(this.restDecoder)===1}readTypeRef(){return ke(this.restDecoder)}readLen(){return ke(this.restDecoder)}readAny(){return xr(this.restDecoder)}readBuf(){return Fx(xt(this.restDecoder))}readJSON(){return JSON.parse(Fn(this.restDecoder))}readKey(){return Fn(this.restDecoder)}}class DS{constructor(e){this.dsCurrVal=0,this.restDecoder=e}resetDsCurVal(){this.dsCurrVal=0}readDsClock(){return this.dsCurrVal+=ke(this.restDecoder),this.dsCurrVal}readDsLen(){const e=ke(this.restDecoder)+1;return this.dsCurrVal+=e,e}}class Er extends DS{constructor(e){super(e),this.keys=[],ke(e),this.keyClockDecoder=new Na(xt(e)),this.clientDecoder=new Xs(xt(e)),this.leftClockDecoder=new Na(xt(e)),this.rightClockDecoder=new Na(xt(e)),this.infoDecoder=new Ju(xt(e),Pi),this.stringDecoder=new lx(xt(e)),this.parentInfoDecoder=new Ju(xt(e),Pi),this.typeRefDecoder=new Xs(xt(e)),this.lenDecoder=new Xs(xt(e))}readLeftID(){return new dr(this.clientDecoder.read(),this.leftClockDecoder.read())}readRightID(){return new dr(this.clientDecoder.read(),this.rightClockDecoder.read())}readClient(){return this.clientDecoder.read()}readInfo(){return this.infoDecoder.read()}readString(){return this.stringDecoder.read()}readParentInfo(){return this.parentInfoDecoder.read()===1}readTypeRef(){return this.typeRefDecoder.read()}readLen(){return this.lenDecoder.read()}readAny(){return xr(this.restDecoder)}readBuf(){return xt(this.restDecoder)}readJSON(){return xr(this.restDecoder)}readKey(){const e=this.keyClockDecoder.read();if(e<this.keys.length)return this.keys[e];{const t=this.stringDecoder.read();return this.keys.push(t),t}}}class Qd{constructor(){this.restEncoder=St()}toUint8Array(){return ot(this.restEncoder)}resetDsCurVal(){}writeDsClock(e){Pe(this.restEncoder,e)}writeDsLen(e){Pe(this.restEncoder,e)}}class os extends Qd{writeLeftID(e){Pe(this.restEncoder,e.client),Pe(this.restEncoder,e.clock)}writeRightID(e){Pe(this.restEncoder,e.client),Pe(this.restEncoder,e.clock)}writeClient(e){Pe(this.restEncoder,e)}writeInfo(e){qr(this.restEncoder,e)}writeString(e){yn(this.restEncoder,e)}writeParentInfo(e){Pe(this.restEncoder,e?1:0)}writeTypeRef(e){Pe(this.restEncoder,e)}writeLen(e){Pe(this.restEncoder,e)}writeAny(e){yr(this.restEncoder,e)}writeBuf(e){lt(this.restEncoder,e)}writeJSON(e){yn(this.restEncoder,JSON.stringify(e))}writeKey(e){yn(this.restEncoder,e)}}class ef{constructor(){this.restEncoder=St(),this.dsCurrVal=0}toUint8Array(){return ot(this.restEncoder)}resetDsCurVal(){this.dsCurrVal=0}writeDsClock(e){const t=e-this.dsCurrVal;this.dsCurrVal=e,Pe(this.restEncoder,t)}writeDsLen(e){e===0&&rn(),Pe(this.restEncoder,e-1),this.dsCurrVal+=e}}class Ui extends ef{constructor(){super(),this.keyMap=new Map,this.keyClock=0,this.keyClockEncoder=new Ua,this.clientEncoder=new Ws,this.leftClockEncoder=new Ua,this.rightClockEncoder=new Ua,this.infoEncoder=new $u(qr),this.stringEncoder=new ex,this.parentInfoEncoder=new $u(qr),this.typeRefEncoder=new Ws,this.lenEncoder=new Ws}toUint8Array(){const e=St();return Pe(e,0),lt(e,this.keyClockEncoder.toUint8Array()),lt(e,this.clientEncoder.toUint8Array()),lt(e,this.leftClockEncoder.toUint8Array()),lt(e,this.rightClockEncoder.toUint8Array()),lt(e,ot(this.infoEncoder)),lt(e,this.stringEncoder.toUint8Array()),lt(e,ot(this.parentInfoEncoder)),lt(e,this.typeRefEncoder.toUint8Array()),lt(e,this.lenEncoder.toUint8Array()),Ro(e,ot(this.restEncoder)),ot(e)}writeLeftID(e){this.clientEncoder.write(e.client),this.leftClockEncoder.write(e.clock)}writeRightID(e){this.clientEncoder.write(e.client),this.rightClockEncoder.write(e.clock)}writeClient(e){this.clientEncoder.write(e)}writeInfo(e){this.infoEncoder.write(e)}writeString(e){this.stringEncoder.write(e)}writeParentInfo(e){this.parentInfoEncoder.write(e?1:0)}writeTypeRef(e){this.typeRefEncoder.write(e)}writeLen(e){this.lenEncoder.write(e)}writeAny(e){yr(this.restEncoder,e)}writeBuf(e){lt(this.restEncoder,e)}writeJSON(e){yr(this.restEncoder,e)}writeKey(e){const t=this.keyMap.get(e);t===void 0?(this.keyClockEncoder.write(this.keyClock++),this.stringEncoder.write(e)):this.keyClockEncoder.write(t)}}const PS=(n,e,t,i)=>{i=ki(i,e[0].id.clock);const r=Sn(e,i);Pe(n.restEncoder,e.length-r),n.writeClient(t),Pe(n.restEncoder,i);const s=e[r];s.write(n,i-s.id.clock);for(let a=r+1;a<e.length;a++)e[a].write(n,0)},Wc=(n,e,t)=>{const i=new Map;t.forEach((r,s)=>{Et(e,s)>r&&i.set(s,r)}),zo(e).forEach((r,s)=>{t.has(s)||i.set(s,0)}),Pe(n.restEncoder,i.size),Bn(i.entries()).sort((r,s)=>s[0]-r[0]).forEach(([r,s])=>{PS(n,e.clients.get(r),r,s)})},IS=(n,e)=>{const t=Ht(),i=ke(n.restDecoder);for(let r=0;r<i;r++){const s=ke(n.restDecoder),a=new Array(s),o=n.readClient();let c=ke(n.restDecoder);t.set(o,{i:0,refs:a});for(let u=0;u<s;u++){const f=n.readInfo();switch(Co&f){case 0:{const l=n.readLen();a[u]=new Jt(Ye(o,c),l),c+=l;break}case 10:{const l=ke(n.restDecoder);a[u]=new Qt(Ye(o,c),l),c+=l;break}default:{const l=(f&(On|qt))===0,d=new ft(Ye(o,c),null,(f&qt)===qt?n.readLeftID():null,null,(f&On)===On?n.readRightID():null,l?n.readParentInfo()?e.get(n.readString()):n.readLeftID():null,l&&(f&Xr)===Xr?n.readString():null,Af(n,f));a[u]=d,c+=d.length}}}}return t},US=(n,e,t)=>{const i=[];let r=Bn(t.keys()).sort((g,v)=>g-v);if(r.length===0)return null;const s=()=>{if(r.length===0)return null;let g=t.get(r[r.length-1]);for(;g.refs.length===g.i;)if(r.pop(),r.length>0)g=t.get(r[r.length-1]);else return null;return g};let a=s();if(a===null)return null;const o=new of,c=new Map,u=(g,v)=>{const b=c.get(g);(b==null||b>v)&&c.set(g,v)};let f=a.refs[a.i++];const l=new Map,d=()=>{for(const g of i){const v=g.id.client,b=t.get(v);b?(b.i--,o.clients.set(v,b.refs.slice(b.i)),t.delete(v),b.i=0,b.refs=[]):o.clients.set(v,[g]),r=r.filter(y=>y!==v)}i.length=0};for(;;){if(f.constructor!==Qt){const v=Yt(l,f.id.client,()=>Et(e,f.id.client))-f.id.clock;if(v<0)i.push(f),u(f.id.client,f.id.clock-1),d();else{const b=f.getMissing(n,e);if(b!==null){i.push(f);const y=t.get(b)||{refs:[],i:0};if(y.refs.length===y.i)u(b,Et(e,b)),d();else{f=y.refs[y.i++];continue}}else(v===0||v<f.length)&&(f.integrate(n,v),l.set(f.id.client,f.id.clock+f.length))}}if(i.length>0)f=i.pop();else if(a!==null&&a.i<a.refs.length)f=a.refs[a.i++];else{if(a=s(),a===null)break;f=a.refs[a.i++]}}if(o.clients.size>0){const g=new Ui;return Wc(g,o,new Map),Pe(g.restEncoder,0),{missing:c,update:g.toUint8Array()}}return null},NS=(n,e)=>Wc(n,e.doc.store,e.beforeState),OS=(n,e,t,i=new Er(n))=>tt(e,r=>{r.local=!1;let s=!1;const a=r.doc,o=a.store,c=IS(i,a),u=US(r,o,c),f=o.pendingStructs;if(f){for(const[d,g]of f.missing)if(g<Et(o,d)){s=!0;break}if(u){for(const[d,g]of u.missing){const v=f.missing.get(d);(v==null||v>g)&&f.missing.set(d,g)}f.update=ao([f.update,u.update])}}else o.pendingStructs=u;const l=sh(i,r,o);if(o.pendingDs){const d=new Er(En(o.pendingDs));ke(d.restDecoder);const g=sh(d,r,o);l&&g?o.pendingDs=ao([l,g]):o.pendingDs=l||g}else o.pendingDs=l;if(s){const d=o.pendingStructs.update;o.pendingStructs=null,tf(r.doc,d)}},t,!1),tf=(n,e,t,i=Er)=>{const r=En(e);OS(r,n,t,new i(r))},FS=(n,e,t)=>tf(n,e,t,Jd),kS=(n,e,t=new Map)=>{Wc(n,e.store,t),Pr(n,LS(e.store))},BS=(n,e=new Uint8Array([0]),t=new Ui)=>{const i=nf(e);kS(t,n,i);const r=[t.toUint8Array()];if(n.store.pendingDs&&r.push(n.store.pendingDs),n.store.pendingStructs&&r.push(tb(n.store.pendingStructs.update,e)),r.length>1){if(t.constructor===os)return QS(r.map((s,a)=>a===0?s:ib(s)));if(t.constructor===Ui)return ao(r)}return r[0]},zS=(n,e)=>BS(n,e,new os),HS=n=>{const e=new Map,t=ke(n.restDecoder);for(let i=0;i<t;i++){const r=ke(n.restDecoder),s=ke(n.restDecoder);e.set(r,s)}return e},nf=n=>HS(new Zd(En(n))),rf=(n,e)=>(Pe(n.restEncoder,e.size),Bn(e.entries()).sort((t,i)=>i[0]-t[0]).forEach(([t,i])=>{Pe(n.restEncoder,t),Pe(n.restEncoder,i)}),n),GS=(n,e)=>rf(n,zo(e.store)),VS=(n,e=new ef)=>(n instanceof Map?rf(e,n):GS(e,n),e.toUint8Array()),WS=n=>VS(n,new Qd);class XS{constructor(){this.l=[]}}const oh=()=>new XS,ah=(n,e)=>n.l.push(e),ch=(n,e)=>{const t=n.l,i=t.length;n.l=t.filter(r=>e!==r),i===n.l.length&&console.error("[yjs] Tried to remove event handler that doesn't exist.")},sf=(n,e,t)=>Oc(n.l,[e,t]);class dr{constructor(e,t){this.client=e,this.clock=t}}const Fs=(n,e)=>n===e||n!==null&&e!==null&&n.client===e.client&&n.clock===e.clock,Ye=(n,e)=>new dr(n,e),jS=n=>{for(const[e,t]of n.doc.share.entries())if(t===n)return e;throw rn()},sr=(n,e)=>e===void 0?!n.deleted:e.sv.has(n.id.client)&&(e.sv.get(n.id.client)||0)>n.id.clock&&!$d(e.ds,n.id),uc=(n,e)=>{const t=Yt(n.meta,uc,ai),i=n.doc.store;t.has(e)||(e.sv.forEach((r,s)=>{r<Et(i,s)&&ci(n,Ye(s,r))}),Yd(n,e.ds,r=>{}),t.add(e))};class of{constructor(){this.clients=new Map,this.pendingStructs=null,this.pendingDs=null}}const zo=n=>{const e=new Map;return n.clients.forEach((t,i)=>{const r=t[t.length-1];e.set(i,r.id.clock+r.length)}),e},Et=(n,e)=>{const t=n.clients.get(e);if(t===void 0)return 0;const i=t[t.length-1];return i.id.clock+i.length},af=(n,e)=>{let t=n.clients.get(e.id.client);if(t===void 0)t=[],n.clients.set(e.id.client,t);else{const i=t[t.length-1];if(i.id.clock+i.length!==e.id.clock)throw rn()}t.push(e)},Sn=(n,e)=>{let t=0,i=n.length-1,r=n[i],s=r.id.clock;if(s===e)return i;let a=tn(e/(s+r.length-1)*i);for(;t<=i;){if(r=n[a],s=r.id.clock,s<=e){if(e<s+r.length)return a;t=a+1}else i=a-1;a=tn((t+i)/2)}throw rn()},qS=(n,e)=>{const t=n.clients.get(e.client);return t[Sn(t,e.clock)]},za=qS,hc=(n,e,t)=>{const i=Sn(e,t),r=e[i];return r.id.clock<t&&r instanceof ft?(e.splice(i+1,0,po(n,r,t-r.id.clock)),i+1):i},ci=(n,e)=>{const t=n.doc.store.clients.get(e.client);return t[hc(n,t,e.clock)]},lh=(n,e,t)=>{const i=e.clients.get(t.client),r=Sn(i,t.clock),s=i[r];return t.clock!==s.id.clock+s.length-1&&s.constructor!==Jt&&i.splice(r+1,0,po(n,s,t.clock-s.id.clock+1)),s},YS=(n,e,t)=>{const i=n.clients.get(e.id.client);i[Sn(i,e.id.clock)]=t},cf=(n,e,t,i,r)=>{if(i===0)return;const s=t+i;let a=hc(n,e,t),o;do o=e[a++],s<o.id.clock+o.length&&hc(n,e,s),r(o);while(a<e.length&&e[a].id.clock<s)};class $S{constructor(e,t,i){this.doc=e,this.deleteSet=new ss,this.beforeState=zo(e.store),this.afterState=new Map,this.changed=new Map,this.changedParentTypes=new Map,this._mergeStructs=[],this.origin=t,this.meta=new Map,this.local=i,this.subdocsAdded=new Set,this.subdocsRemoved=new Set,this.subdocsLoaded=new Set,this._needFormattingCleanup=!1}}const uh=(n,e)=>e.deleteSet.clients.size===0&&!Py(e.afterState,(t,i)=>e.beforeState.get(i)!==t)?!1:(Gc(e.deleteSet),NS(n,e),Pr(n,e.deleteSet),!0),hh=(n,e,t)=>{const i=e._item;(i===null||i.id.clock<(n.beforeState.get(i.id.client)||0)&&!i.deleted)&&Yt(n.changed,e,ai).add(t)},js=(n,e)=>{let t=n[e],i=n[e-1],r=e;for(;r>0;t=i,i=n[--r-1]){if(i.deleted===t.deleted&&i.constructor===t.constructor&&i.mergeWith(t)){t instanceof ft&&t.parentSub!==null&&t.parent._map.get(t.parentSub)===t&&t.parent._map.set(t.parentSub,i);continue}break}const s=e-r;return s&&n.splice(e+1-s,s),s},KS=(n,e,t)=>{for(const[i,r]of n.clients.entries()){const s=e.clients.get(i);for(let a=r.length-1;a>=0;a--){const o=r[a],c=o.clock+o.len;for(let u=Sn(s,o.clock),f=s[u];u<s.length&&f.id.clock<c;f=s[++u]){const l=s[u];if(o.clock+o.len<=l.id.clock)break;l instanceof ft&&l.deleted&&!l.keep&&t(l)&&l.gc(e,!1)}}}},ZS=(n,e)=>{n.clients.forEach((t,i)=>{const r=e.clients.get(i);for(let s=t.length-1;s>=0;s--){const a=t[s],o=Cc(r.length-1,1+Sn(r,a.clock+a.len-1));for(let c=o,u=r[c];c>0&&u.id.clock>=a.clock;u=r[c])c-=1+js(r,c)}})},lf=(n,e)=>{if(e<n.length){const t=n[e],i=t.doc,r=i.store,s=t.deleteSet,a=t._mergeStructs;try{Gc(s),t.afterState=zo(t.doc.store),i.emit("beforeObserverCalls",[t,i]);const o=[];t.changed.forEach((c,u)=>o.push(()=>{(u._item===null||!u._item.deleted)&&u._callObserver(t,c)})),o.push(()=>{t.changedParentTypes.forEach((c,u)=>{u._dEH.l.length>0&&(u._item===null||!u._item.deleted)&&(c=c.filter(f=>f.target._item===null||!f.target._item.deleted),c.forEach(f=>{f.currentTarget=u,f._path=null}),c.sort((f,l)=>f.path.length-l.path.length),o.push(()=>{sf(u._dEH,c,t)}))}),o.push(()=>i.emit("afterTransaction",[t,i])),o.push(()=>{t._needFormattingCleanup&&_b(t)})}),Oc(o,[])}finally{i.gc&&KS(s,r,i.gcFilter),ZS(s,r),t.afterState.forEach((f,l)=>{const d=t.beforeState.get(l)||0;if(d!==f){const g=r.clients.get(l),v=ki(Sn(g,d),1);for(let b=g.length-1;b>=v;)b-=1+js(g,b)}});for(let f=a.length-1;f>=0;f--){const{client:l,clock:d}=a[f].id,g=r.clients.get(l),v=Sn(g,d);v+1<g.length&&js(g,v+1)>1||v>0&&js(g,v)}if(!t.local&&t.afterState.get(i.clientID)!==t.beforeState.get(i.clientID)&&(Xd(Fo,en,"[yjs] ",Ii,Gd,"Changed the client-id because another client seems to be using it."),i.clientID=Kd()),i.emit("afterTransactionCleanup",[t,i]),i._observers.has("update")){const f=new os;uh(f,t)&&i.emit("update",[f.toUint8Array(),t.origin,i,t])}if(i._observers.has("updateV2")){const f=new Ui;uh(f,t)&&i.emit("updateV2",[f.toUint8Array(),t.origin,i,t])}const{subdocsAdded:o,subdocsLoaded:c,subdocsRemoved:u}=t;(o.size>0||u.size>0||c.size>0)&&(o.forEach(f=>{f.clientID=i.clientID,f.collectionid==null&&(f.collectionid=i.collectionid),i.subdocs.add(f)}),u.forEach(f=>i.subdocs.delete(f)),i.emit("subdocs",[{loaded:c,added:o,removed:u},i,t]),u.forEach(f=>f.destroy())),n.length<=e+1?(i._transactionCleanups=[],i.emit("afterAllTransactions",[i,n])):lf(n,e+1)}}},tt=(n,e,t=null,i=!0)=>{const r=n._transactionCleanups;let s=!1,a=null;n._transaction===null&&(s=!0,n._transaction=new $S(n,t,i),r.push(n._transaction),r.length===1&&n.emit("beforeAllTransactions",[n]),n.emit("beforeTransaction",[n._transaction,n]));try{a=e(n._transaction)}finally{if(s){const o=n._transaction===r[0];n._transaction=null,o&&lf(r,0)}}return a};function*JS(n){const e=ke(n.restDecoder);for(let t=0;t<e;t++){const i=ke(n.restDecoder),r=n.readClient();let s=ke(n.restDecoder);for(let a=0;a<i;a++){const o=n.readInfo();if(o===10){const c=ke(n.restDecoder);yield new Qt(Ye(r,s),c),s+=c}else if(Co&o){const c=(o&(On|qt))===0,u=new ft(Ye(r,s),null,(o&qt)===qt?n.readLeftID():null,null,(o&On)===On?n.readRightID():null,c?n.readParentInfo()?n.readString():n.readLeftID():null,c&&(o&Xr)===Xr?n.readString():null,Af(n,o));yield u,s+=u.length}else{const c=n.readLen();yield new Jt(Ye(r,s),c),s+=c}}}}class Xc{constructor(e,t){this.gen=JS(e),this.curr=null,this.done=!1,this.filterSkips=t,this.next()}next(){do this.curr=this.gen.next().value||null;while(this.filterSkips&&this.curr!==null&&this.curr.constructor===Qt);return this.curr}}class jc{constructor(e){this.currClient=0,this.startClock=0,this.written=0,this.encoder=e,this.clientStructs=[]}}const QS=n=>ao(n,Jd,os),eb=(n,e)=>{if(n.constructor===Jt){const{client:t,clock:i}=n.id;return new Jt(Ye(t,i+e),n.length-e)}else if(n.constructor===Qt){const{client:t,clock:i}=n.id;return new Qt(Ye(t,i+e),n.length-e)}else{const t=n,{client:i,clock:r}=t.id;return new ft(Ye(i,r+e),null,Ye(i,r+e-1),null,t.rightOrigin,t.parent,t.parentSub,t.content.splice(e))}},ao=(n,e=Er,t=Ui)=>{if(n.length===1)return n[0];const i=n.map(f=>new e(En(f)));let r=i.map(f=>new Xc(f,!0)),s=null;const a=new t,o=new jc(a);for(;r=r.filter(d=>d.curr!==null),r.sort((d,g)=>{if(d.curr.id.client===g.curr.id.client){const v=d.curr.id.clock-g.curr.id.clock;return v===0?d.curr.constructor===g.curr.constructor?0:d.curr.constructor===Qt?1:-1:v}else return g.curr.id.client-d.curr.id.client}),r.length!==0;){const f=r[0],l=f.curr.id.client;if(s!==null){let d=f.curr,g=!1;for(;d!==null&&d.id.clock+d.length<=s.struct.id.clock+s.struct.length&&d.id.client>=s.struct.id.client;)d=f.next(),g=!0;if(d===null||d.id.client!==l||g&&d.id.clock>s.struct.id.clock+s.struct.length)continue;if(l!==s.struct.id.client)Jn(o,s.struct,s.offset),s={struct:d,offset:0},f.next();else if(s.struct.id.clock+s.struct.length<d.id.clock)if(s.struct.constructor===Qt)s.struct.length=d.id.clock+d.length-s.struct.id.clock;else{Jn(o,s.struct,s.offset);const v=d.id.clock-s.struct.id.clock-s.struct.length;s={struct:new Qt(Ye(l,s.struct.id.clock+s.struct.length),v),offset:0}}else{const v=s.struct.id.clock+s.struct.length-d.id.clock;v>0&&(s.struct.constructor===Qt?s.struct.length-=v:d=eb(d,v)),s.struct.mergeWith(d)||(Jn(o,s.struct,s.offset),s={struct:d,offset:0},f.next())}}else s={struct:f.curr,offset:0},f.next();for(let d=f.curr;d!==null&&d.id.client===l&&d.id.clock===s.struct.id.clock+s.struct.length&&d.constructor!==Qt;d=f.next())Jn(o,s.struct,s.offset),s={struct:d,offset:0}}s!==null&&(Jn(o,s.struct,s.offset),s=null),qc(o);const c=i.map(f=>Vc(f)),u=CS(c);return Pr(a,u),a.toUint8Array()},tb=(n,e,t=Er,i=Ui)=>{const r=nf(e),s=new i,a=new jc(s),o=new t(En(n)),c=new Xc(o,!1);for(;c.curr;){const f=c.curr,l=f.id.client,d=r.get(l)||0;if(c.curr.constructor===Qt){c.next();continue}if(f.id.clock+f.length>d)for(Jn(a,f,ki(d-f.id.clock,0)),c.next();c.curr&&c.curr.id.client===l;)Jn(a,c.curr,0),c.next();else for(;c.curr&&c.curr.id.client===l&&c.curr.id.clock+c.curr.length<=d;)c.next()}qc(a);const u=Vc(o);return Pr(s,u),s.toUint8Array()},uf=n=>{n.written>0&&(n.clientStructs.push({written:n.written,restEncoder:ot(n.encoder.restEncoder)}),n.encoder.restEncoder=St(),n.written=0)},Jn=(n,e,t)=>{n.written>0&&n.currClient!==e.id.client&&uf(n),n.written===0&&(n.currClient=e.id.client,n.encoder.writeClient(e.id.client),Pe(n.encoder.restEncoder,e.id.clock+t)),e.write(n.encoder,t),n.written++},qc=n=>{uf(n);const e=n.encoder.restEncoder;Pe(e,n.clientStructs.length);for(let t=0;t<n.clientStructs.length;t++){const i=n.clientStructs[t];Pe(e,i.written),Ro(e,i.restEncoder)}},nb=(n,e,t,i)=>{const r=new t(En(n)),s=new Xc(r,!1),a=new i,o=new jc(a);for(let u=s.curr;u!==null;u=s.next())Jn(o,e(u),0);qc(o);const c=Vc(r);return Pr(a,c),a.toUint8Array()},ib=n=>nb(n,wx,Er,os),dh="You must not compute changes after the event-handler fired.";class Ho{constructor(e,t){this.target=e,this.currentTarget=e,this.transaction=t,this._changes=null,this._keys=null,this._delta=null,this._path=null}get path(){return this._path||(this._path=rb(this.currentTarget,this.target))}deletes(e){return $d(this.transaction.deleteSet,e.id)}get keys(){if(this._keys===null){if(this.transaction.doc._transactionCleanups.length===0)throw nn(dh);const e=new Map,t=this.target;this.transaction.changed.get(t).forEach(r=>{if(r!==null){const s=t._map.get(r);let a,o;if(this.adds(s)){let c=s.left;for(;c!==null&&this.adds(c);)c=c.left;if(this.deletes(s))if(c!==null&&this.deletes(c))a="delete",o=Da(c.content.getContent());else return;else c!==null&&this.deletes(c)?(a="update",o=Da(c.content.getContent())):(a="add",o=void 0)}else if(this.deletes(s))a="delete",o=Da(s.content.getContent());else return;e.set(r,{action:a,oldValue:o})}}),this._keys=e}return this._keys}get delta(){return this.changes.delta}adds(e){return e.id.clock>=(this.transaction.beforeState.get(e.id.client)||0)}get changes(){let e=this._changes;if(e===null){if(this.transaction.doc._transactionCleanups.length===0)throw nn(dh);const t=this.target,i=ai(),r=ai(),s=[];if(e={added:i,deleted:r,delta:s,keys:this.keys},this.transaction.changed.get(t).has(null)){let o=null;const c=()=>{o&&s.push(o)};for(let u=t._start;u!==null;u=u.right)u.deleted?this.deletes(u)&&!this.adds(u)&&((o===null||o.delete===void 0)&&(c(),o={delete:0}),o.delete+=u.length,r.add(u)):this.adds(u)?((o===null||o.insert===void 0)&&(c(),o={insert:[]}),o.insert=o.insert.concat(u.content.getContent()),i.add(u)):((o===null||o.retain===void 0)&&(c(),o={retain:0}),o.retain+=u.length);o!==null&&o.retain===void 0&&c()}this._changes=e}return e}}const rb=(n,e)=>{const t=[];for(;e._item!==null&&e!==n;){if(e._item.parentSub!==null)t.unshift(e._item.parentSub);else{let i=0,r=e._item.parent._start;for(;r!==e._item&&r!==null;)!r.deleted&&r.countable&&(i+=r.length),r=r.right;t.unshift(i)}e=e._item.parent}return t},Pt=()=>{MS("Invalid access: Add Yjs type to a document before reading data.")},hf=80;let Yc=0;class sb{constructor(e,t){e.marker=!0,this.p=e,this.index=t,this.timestamp=Yc++}}const ob=n=>{n.timestamp=Yc++},df=(n,e,t)=>{n.p.marker=!1,n.p=e,e.marker=!0,n.index=t,n.timestamp=Yc++},ab=(n,e,t)=>{if(n.length>=hf){const i=n.reduce((r,s)=>r.timestamp<s.timestamp?r:s);return df(i,e,t),i}else{const i=new sb(e,t);return n.push(i),i}},Go=(n,e)=>{if(n._start===null||e===0||n._searchMarker===null)return null;const t=n._searchMarker.length===0?null:n._searchMarker.reduce((s,a)=>Vs(e-s.index)<Vs(e-a.index)?s:a);let i=n._start,r=0;for(t!==null&&(i=t.p,r=t.index,ob(t));i.right!==null&&r<e;){if(!i.deleted&&i.countable){if(e<r+i.length)break;r+=i.length}i=i.right}for(;i.left!==null&&r>e;)i=i.left,!i.deleted&&i.countable&&(r-=i.length);for(;i.left!==null&&i.left.id.client===i.id.client&&i.left.id.clock+i.left.length===i.id.clock;)i=i.left,!i.deleted&&i.countable&&(r-=i.length);return t!==null&&Vs(t.index-r)<i.parent.length/hf?(df(t,i,r),t):ab(n._searchMarker,i,r)},Zr=(n,e,t)=>{for(let i=n.length-1;i>=0;i--){const r=n[i];if(t>0){let s=r.p;for(s.marker=!1;s&&(s.deleted||!s.countable);)s=s.left,s&&!s.deleted&&s.countable&&(r.index-=s.length);if(s===null||s.marker===!0){n.splice(i,1);continue}r.p=s,s.marker=!0}(e<r.index||t>0&&e===r.index)&&(r.index=ki(e,r.index+t))}},Vo=(n,e,t)=>{const i=n,r=e.changedParentTypes;for(;Yt(r,n,()=>[]).push(t),n._item!==null;)n=n._item.parent;sf(i._eH,t,e)};class At{constructor(){this._item=null,this._map=new Map,this._start=null,this.doc=null,this._length=0,this._eH=oh(),this._dEH=oh(),this._searchMarker=null}get parent(){return this._item?this._item.parent:null}_integrate(e,t){this.doc=e,this._item=t}_copy(){throw un()}clone(){throw un()}_write(e){}get _first(){let e=this._start;for(;e!==null&&e.deleted;)e=e.right;return e}_callObserver(e,t){!e.local&&this._searchMarker&&(this._searchMarker.length=0)}observe(e){ah(this._eH,e)}observeDeep(e){ah(this._dEH,e)}unobserve(e){ch(this._eH,e)}unobserveDeep(e){ch(this._dEH,e)}toJSON(){}}const ff=(n,e,t)=>{n.doc??Pt(),e<0&&(e=n._length+e),t<0&&(t=n._length+t);let i=t-e;const r=[];let s=n._start;for(;s!==null&&i>0;){if(s.countable&&!s.deleted){const a=s.content.getContent();if(a.length<=e)e-=a.length;else{for(let o=e;o<a.length&&i>0;o++)r.push(a[o]),i--;e=0}}s=s.right}return r},pf=n=>{n.doc??Pt();const e=[];let t=n._start;for(;t!==null;){if(t.countable&&!t.deleted){const i=t.content.getContent();for(let r=0;r<i.length;r++)e.push(i[r])}t=t.right}return e},Jr=(n,e)=>{let t=0,i=n._start;for(n.doc??Pt();i!==null;){if(i.countable&&!i.deleted){const r=i.content.getContent();for(let s=0;s<r.length;s++)e(r[s],t++,n)}i=i.right}},mf=(n,e)=>{const t=[];return Jr(n,(i,r)=>{t.push(e(i,r,n))}),t},cb=n=>{let e=n._start,t=null,i=0;return{[Symbol.iterator](){return this},next:()=>{if(t===null){for(;e!==null&&e.deleted;)e=e.right;if(e===null)return{done:!0,value:void 0};t=e.content.getContent(),i=0,e=e.right}const r=t[i++];return t.length<=i&&(t=null),{done:!1,value:r}}}},gf=(n,e)=>{n.doc??Pt();const t=Go(n,e);let i=n._start;for(t!==null&&(i=t.p,e-=t.index);i!==null;i=i.right)if(!i.deleted&&i.countable){if(e<i.length)return i.content.getContent()[e];e-=i.length}},co=(n,e,t,i)=>{let r=t;const s=n.doc,a=s.clientID,o=s.store,c=t===null?e._start:t.right;let u=[];const f=()=>{u.length>0&&(r=new ft(Ye(a,Et(o,a)),r,r&&r.lastId,c,c&&c.id,e,null,new Oi(u)),r.integrate(n,0),u=[])};i.forEach(l=>{if(l===null)u.push(l);else switch(l.constructor){case Number:case Object:case Boolean:case Array:case String:u.push(l);break;default:switch(f(),l.constructor){case Uint8Array:case ArrayBuffer:r=new ft(Ye(a,Et(o,a)),r,r&&r.lastId,c,c&&c.id,e,null,new as(new Uint8Array(l))),r.integrate(n,0);break;case Ir:r=new ft(Ye(a,Et(o,a)),r,r&&r.lastId,c,c&&c.id,e,null,new cs(l)),r.integrate(n,0);break;default:if(l instanceof At)r=new ft(Ye(a,Et(o,a)),r,r&&r.lastId,c,c&&c.id,e,null,new Gn(l)),r.integrate(n,0);else throw new Error("Unexpected content type in insert operation")}}}),f()},_f=()=>nn("Length exceeded!"),vf=(n,e,t,i)=>{if(t>e._length)throw _f();if(t===0)return e._searchMarker&&Zr(e._searchMarker,t,i.length),co(n,e,null,i);const r=t,s=Go(e,t);let a=e._start;for(s!==null&&(a=s.p,t-=s.index,t===0&&(a=a.prev,t+=a&&a.countable&&!a.deleted?a.length:0));a!==null;a=a.right)if(!a.deleted&&a.countable){if(t<=a.length){t<a.length&&ci(n,Ye(a.id.client,a.id.clock+t));break}t-=a.length}return e._searchMarker&&Zr(e._searchMarker,r,i.length),co(n,e,a,i)},lb=(n,e,t)=>{let r=(e._searchMarker||[]).reduce((s,a)=>a.index>s.index?a:s,{index:0,p:e._start}).p;if(r)for(;r.right;)r=r.right;return co(n,e,r,t)},yf=(n,e,t,i)=>{if(i===0)return;const r=t,s=i,a=Go(e,t);let o=e._start;for(a!==null&&(o=a.p,t-=a.index);o!==null&&t>0;o=o.right)!o.deleted&&o.countable&&(t<o.length&&ci(n,Ye(o.id.client,o.id.clock+t)),t-=o.length);for(;i>0&&o!==null;)o.deleted||(i<o.length&&ci(n,Ye(o.id.client,o.id.clock+i)),o.delete(n),i-=o.length),o=o.right;if(i>0)throw _f();e._searchMarker&&Zr(e._searchMarker,r,-s+i)},lo=(n,e,t)=>{const i=e._map.get(t);i!==void 0&&i.delete(n)},$c=(n,e,t,i)=>{const r=e._map.get(t)||null,s=n.doc,a=s.clientID;let o;if(i==null)o=new Oi([i]);else switch(i.constructor){case Number:case Object:case Boolean:case Array:case String:case Date:case BigInt:o=new Oi([i]);break;case Uint8Array:o=new as(i);break;case Ir:o=new cs(i);break;default:if(i instanceof At)o=new Gn(i);else throw new Error("Unexpected content type")}new ft(Ye(a,Et(s.store,a)),r,r&&r.lastId,null,null,e,t,o).integrate(n,0)},Kc=(n,e)=>{n.doc??Pt();const t=n._map.get(e);return t!==void 0&&!t.deleted?t.content.getContent()[t.length-1]:void 0},xf=n=>{const e={};return n.doc??Pt(),n._map.forEach((t,i)=>{t.deleted||(e[i]=t.content.getContent()[t.length-1])}),e},Sf=(n,e)=>{n.doc??Pt();const t=n._map.get(e);return t!==void 0&&!t.deleted},ub=(n,e)=>{const t={};return n._map.forEach((i,r)=>{let s=i;for(;s!==null&&(!e.sv.has(s.id.client)||s.id.clock>=(e.sv.get(s.id.client)||0));)s=s.left;s!==null&&sr(s,e)&&(t[r]=s.content.getContent()[s.length-1])}),t},ks=n=>(n.doc??Pt(),TS(n._map.entries(),e=>!e[1].deleted));class hb extends Ho{}class fr extends At{constructor(){super(),this._prelimContent=[],this._searchMarker=[]}static from(e){const t=new fr;return t.push(e),t}_integrate(e,t){super._integrate(e,t),this.insert(0,this._prelimContent),this._prelimContent=null}_copy(){return new fr}clone(){const e=new fr;return e.insert(0,this.toArray().map(t=>t instanceof At?t.clone():t)),e}get length(){return this.doc??Pt(),this._length}_callObserver(e,t){super._callObserver(e,t),Vo(this,e,new hb(this,e))}insert(e,t){this.doc!==null?tt(this.doc,i=>{vf(i,this,e,t)}):this._prelimContent.splice(e,0,...t)}push(e){this.doc!==null?tt(this.doc,t=>{lb(t,this,e)}):this._prelimContent.push(...e)}unshift(e){this.insert(0,e)}delete(e,t=1){this.doc!==null?tt(this.doc,i=>{yf(i,this,e,t)}):this._prelimContent.splice(e,t)}get(e){return gf(this,e)}toArray(){return pf(this)}slice(e=0,t=this.length){return ff(this,e,t)}toJSON(){return this.map(e=>e instanceof At?e.toJSON():e)}map(e){return mf(this,e)}forEach(e){Jr(this,e)}[Symbol.iterator](){return cb(this)}_write(e){e.writeTypeRef(Ob)}}const db=n=>new fr;class fb extends Ho{constructor(e,t,i){super(e,t),this.keysChanged=i}}class Mr extends At{constructor(e){super(),this._prelimContent=null,e===void 0?this._prelimContent=new Map:this._prelimContent=new Map(e)}_integrate(e,t){super._integrate(e,t),this._prelimContent.forEach((i,r)=>{this.set(r,i)}),this._prelimContent=null}_copy(){return new Mr}clone(){const e=new Mr;return this.forEach((t,i)=>{e.set(i,t instanceof At?t.clone():t)}),e}_callObserver(e,t){Vo(this,e,new fb(this,e,t))}toJSON(){this.doc??Pt();const e={};return this._map.forEach((t,i)=>{if(!t.deleted){const r=t.content.getContent()[t.length-1];e[i]=r instanceof At?r.toJSON():r}}),e}get size(){return[...ks(this)].length}keys(){return Ba(ks(this),e=>e[0])}values(){return Ba(ks(this),e=>e[1].content.getContent()[e[1].length-1])}entries(){return Ba(ks(this),e=>[e[0],e[1].content.getContent()[e[1].length-1]])}forEach(e){this.doc??Pt(),this._map.forEach((t,i)=>{t.deleted||e(t.content.getContent()[t.length-1],i,this)})}[Symbol.iterator](){return this.entries()}delete(e){this.doc!==null?tt(this.doc,t=>{lo(t,this,e)}):this._prelimContent.delete(e)}set(e,t){return this.doc!==null?tt(this.doc,i=>{$c(i,this,e,t)}):this._prelimContent.set(e,t),t}get(e){return Kc(this,e)}has(e){return Sf(this,e)}clear(){this.doc!==null?tt(this.doc,e=>{this.forEach(function(t,i,r){lo(e,r,i)})}):this._prelimContent.clear()}_write(e){e.writeTypeRef(Fb)}}const pb=n=>new Mr,ei=(n,e)=>n===e||typeof n=="object"&&typeof e=="object"&&n&&e&&bx(n,e);class dc{constructor(e,t,i,r){this.left=e,this.right=t,this.index=i,this.currentAttributes=r}forward(){switch(this.right===null&&rn(),this.right.content.constructor){case gt:this.right.deleted||Ur(this.currentAttributes,this.right.content);break;default:this.right.deleted||(this.index+=this.right.length);break}this.left=this.right,this.right=this.right.right}}const fh=(n,e,t)=>{for(;e.right!==null&&t>0;){switch(e.right.content.constructor){case gt:e.right.deleted||Ur(e.currentAttributes,e.right.content);break;default:e.right.deleted||(t<e.right.length&&ci(n,Ye(e.right.id.client,e.right.id.clock+t)),e.index+=e.right.length,t-=e.right.length);break}e.left=e.right,e.right=e.right.right}return e},Bs=(n,e,t,i)=>{const r=new Map,s=i?Go(e,t):null;if(s){const a=new dc(s.p.left,s.p,s.index,r);return fh(n,a,t-s.index)}else{const a=new dc(null,e._start,0,r);return fh(n,a,t)}},bf=(n,e,t,i)=>{for(;t.right!==null&&(t.right.deleted===!0||t.right.content.constructor===gt&&ei(i.get(t.right.content.key),t.right.content.value));)t.right.deleted||i.delete(t.right.content.key),t.forward();const r=n.doc,s=r.clientID;i.forEach((a,o)=>{const c=t.left,u=t.right,f=new ft(Ye(s,Et(r.store,s)),c,c&&c.lastId,u,u&&u.id,e,null,new gt(o,a));f.integrate(n,0),t.right=f,t.forward()})},Ur=(n,e)=>{const{key:t,value:i}=e;i===null?n.delete(t):n.set(t,i)},Ef=(n,e)=>{for(;n.right!==null;){if(!(n.right.deleted||n.right.content.constructor===gt&&ei(e[n.right.content.key]??null,n.right.content.value)))break;n.forward()}},Mf=(n,e,t,i)=>{const r=n.doc,s=r.clientID,a=new Map;for(const o in i){const c=i[o],u=t.currentAttributes.get(o)??null;if(!ei(u,c)){a.set(o,u);const{left:f,right:l}=t;t.right=new ft(Ye(s,Et(r.store,s)),f,f&&f.lastId,l,l&&l.id,e,null,new gt(o,c)),t.right.integrate(n,0),t.forward()}}return a},Ha=(n,e,t,i,r)=>{t.currentAttributes.forEach((d,g)=>{r[g]===void 0&&(r[g]=null)});const s=n.doc,a=s.clientID;Ef(t,r);const o=Mf(n,e,t,r),c=i.constructor===String?new bn(i):i instanceof At?new Gn(i):new Bi(i);let{left:u,right:f,index:l}=t;e._searchMarker&&Zr(e._searchMarker,t.index,c.getLength()),f=new ft(Ye(a,Et(s.store,a)),u,u&&u.lastId,f,f&&f.id,e,null,c),f.integrate(n,0),t.right=f,t.index=l,t.forward(),bf(n,e,t,o)},ph=(n,e,t,i,r)=>{const s=n.doc,a=s.clientID;Ef(t,r);const o=Mf(n,e,t,r);e:for(;t.right!==null&&(i>0||o.size>0&&(t.right.deleted||t.right.content.constructor===gt));){if(!t.right.deleted)switch(t.right.content.constructor){case gt:{const{key:c,value:u}=t.right.content,f=r[c];if(f!==void 0){if(ei(f,u))o.delete(c);else{if(i===0)break e;o.set(c,u)}t.right.delete(n)}else t.currentAttributes.set(c,u);break}default:i<t.right.length&&ci(n,Ye(t.right.id.client,t.right.id.clock+i)),i-=t.right.length;break}t.forward()}if(i>0){let c="";for(;i>0;i--)c+=`
`;t.right=new ft(Ye(a,Et(s.store,a)),t.left,t.left&&t.left.lastId,t.right,t.right&&t.right.id,e,null,new bn(c)),t.right.integrate(n,0),t.forward()}bf(n,e,t,o)},wf=(n,e,t,i,r)=>{let s=e;const a=Ht();for(;s&&(!s.countable||s.deleted);){if(!s.deleted&&s.content.constructor===gt){const u=s.content;a.set(u.key,u)}s=s.right}let o=0,c=!1;for(;e!==s;){if(t===e&&(c=!0),!e.deleted){const u=e.content;switch(u.constructor){case gt:{const{key:f,value:l}=u,d=i.get(f)??null;(a.get(f)!==u||d===l)&&(e.delete(n),o++,!c&&(r.get(f)??null)===l&&d!==l&&(d===null?r.delete(f):r.set(f,d))),!c&&!e.deleted&&Ur(r,u);break}}}e=e.right}return o},mb=(n,e)=>{for(;e&&e.right&&(e.right.deleted||!e.right.countable);)e=e.right;const t=new Set;for(;e&&(e.deleted||!e.countable);){if(!e.deleted&&e.content.constructor===gt){const i=e.content.key;t.has(i)?e.delete(n):t.add(i)}e=e.left}},gb=n=>{let e=0;return tt(n.doc,t=>{let i=n._start,r=n._start,s=Ht();const a=rc(s);for(;r;){if(r.deleted===!1)switch(r.content.constructor){case gt:Ur(a,r.content);break;default:e+=wf(t,i,r,s,a),s=rc(a),i=r;break}r=r.right}}),e},_b=n=>{const e=new Set,t=n.doc;for(const[i,r]of n.afterState.entries()){const s=n.beforeState.get(i)||0;r!==s&&cf(n,t.store.clients.get(i),s,r,a=>{!a.deleted&&a.content.constructor===gt&&a.constructor!==Jt&&e.add(a.parent)})}tt(t,i=>{Yd(n,n.deleteSet,r=>{if(r instanceof Jt||!r.parent._hasFormatting||e.has(r.parent))return;const s=r.parent;r.content.constructor===gt?e.add(s):mb(i,r)});for(const r of e)gb(r)})},mh=(n,e,t)=>{const i=t,r=rc(e.currentAttributes),s=e.right;for(;t>0&&e.right!==null;){if(e.right.deleted===!1)switch(e.right.content.constructor){case Gn:case Bi:case bn:t<e.right.length&&ci(n,Ye(e.right.id.client,e.right.id.clock+t)),t-=e.right.length,e.right.delete(n);break}e.forward()}s&&wf(n,s,e.right,r,e.currentAttributes);const a=(e.left||e.right).parent;return a._searchMarker&&Zr(a._searchMarker,e.index,-i+t),e};class vb extends Ho{constructor(e,t,i){super(e,t),this.childListChanged=!1,this.keysChanged=new Set,i.forEach(r=>{r===null?this.childListChanged=!0:this.keysChanged.add(r)})}get changes(){if(this._changes===null){const e={keys:this.keys,delta:this.delta,added:new Set,deleted:new Set};this._changes=e}return this._changes}get delta(){if(this._delta===null){const e=this.target.doc,t=[];tt(e,i=>{const r=new Map,s=new Map;let a=this.target._start,o=null;const c={};let u="",f=0,l=0;const d=()=>{if(o!==null){let g=null;switch(o){case"delete":l>0&&(g={delete:l}),l=0;break;case"insert":(typeof u=="object"||u.length>0)&&(g={insert:u},r.size>0&&(g.attributes={},r.forEach((v,b)=>{v!==null&&(g.attributes[b]=v)}))),u="";break;case"retain":f>0&&(g={retain:f},Sx(c)||(g.attributes=vx({},c))),f=0;break}g&&t.push(g),o=null}};for(;a!==null;){switch(a.content.constructor){case Gn:case Bi:this.adds(a)?this.deletes(a)||(d(),o="insert",u=a.content.getContent()[0],d()):this.deletes(a)?(o!=="delete"&&(d(),o="delete"),l+=1):a.deleted||(o!=="retain"&&(d(),o="retain"),f+=1);break;case bn:this.adds(a)?this.deletes(a)||(o!=="insert"&&(d(),o="insert"),u+=a.content.str):this.deletes(a)?(o!=="delete"&&(d(),o="delete"),l+=a.length):a.deleted||(o!=="retain"&&(d(),o="retain"),f+=a.length);break;case gt:{const{key:g,value:v}=a.content;if(this.adds(a)){if(!this.deletes(a)){const b=r.get(g)??null;ei(b,v)?v!==null&&a.delete(i):(o==="retain"&&d(),ei(v,s.get(g)??null)?delete c[g]:c[g]=v)}}else if(this.deletes(a)){s.set(g,v);const b=r.get(g)??null;ei(b,v)||(o==="retain"&&d(),c[g]=b)}else if(!a.deleted){s.set(g,v);const b=c[g];b!==void 0&&(ei(b,v)?b!==null&&a.delete(i):(o==="retain"&&d(),v===null?delete c[g]:c[g]=v))}a.deleted||(o==="insert"&&d(),Ur(r,a.content));break}}a=a.right}for(d();t.length>0;){const g=t[t.length-1];if(g.retain!==void 0&&g.attributes===void 0)t.pop();else break}}),this._delta=t}return this._delta}}class wr extends At{constructor(e){super(),this._pending=e!==void 0?[()=>this.insert(0,e)]:[],this._searchMarker=[],this._hasFormatting=!1}get length(){return this.doc??Pt(),this._length}_integrate(e,t){super._integrate(e,t);try{this._pending.forEach(i=>i())}catch(i){console.error(i)}this._pending=null}_copy(){return new wr}clone(){const e=new wr;return e.applyDelta(this.toDelta()),e}_callObserver(e,t){super._callObserver(e,t);const i=new vb(this,e,t);Vo(this,e,i),!e.local&&this._hasFormatting&&(e._needFormattingCleanup=!0)}toString(){this.doc??Pt();let e="",t=this._start;for(;t!==null;)!t.deleted&&t.countable&&t.content.constructor===bn&&(e+=t.content.str),t=t.right;return e}toJSON(){return this.toString()}applyDelta(e,{sanitize:t=!0}={}){this.doc!==null?tt(this.doc,i=>{const r=new dc(null,this._start,0,new Map);for(let s=0;s<e.length;s++){const a=e[s];if(a.insert!==void 0){const o=!t&&typeof a.insert=="string"&&s===e.length-1&&r.right===null&&a.insert.slice(-1)===`
`?a.insert.slice(0,-1):a.insert;(typeof o!="string"||o.length>0)&&Ha(i,this,r,o,a.attributes||{})}else a.retain!==void 0?ph(i,this,r,a.retain,a.attributes||{}):a.delete!==void 0&&mh(i,r,a.delete)}}):this._pending.push(()=>this.applyDelta(e))}toDelta(e,t,i){this.doc??Pt();const r=[],s=new Map,a=this.doc;let o="",c=this._start;function u(){if(o.length>0){const l={};let d=!1;s.forEach((v,b)=>{d=!0,l[b]=v});const g={insert:o};d&&(g.attributes=l),r.push(g),o=""}}const f=()=>{for(;c!==null;){if(sr(c,e)||t!==void 0&&sr(c,t))switch(c.content.constructor){case bn:{const l=s.get("ychange");e!==void 0&&!sr(c,e)?(l===void 0||l.user!==c.id.client||l.type!=="removed")&&(u(),s.set("ychange",i?i("removed",c.id):{type:"removed"})):t!==void 0&&!sr(c,t)?(l===void 0||l.user!==c.id.client||l.type!=="added")&&(u(),s.set("ychange",i?i("added",c.id):{type:"added"})):l!==void 0&&(u(),s.delete("ychange")),o+=c.content.str;break}case Gn:case Bi:{u();const l={insert:c.content.getContent()[0]};if(s.size>0){const d={};l.attributes=d,s.forEach((g,v)=>{d[v]=g})}r.push(l);break}case gt:sr(c,e)&&(u(),Ur(s,c.content));break}c=c.right}u()};return e||t?tt(a,l=>{e&&uc(l,e),t&&uc(l,t),f()},"cleanup"):f(),r}insert(e,t,i){if(t.length<=0)return;const r=this.doc;r!==null?tt(r,s=>{const a=Bs(s,this,e,!i);i||(i={},a.currentAttributes.forEach((o,c)=>{i[c]=o})),Ha(s,this,a,t,i)}):this._pending.push(()=>this.insert(e,t,i))}insertEmbed(e,t,i){const r=this.doc;r!==null?tt(r,s=>{const a=Bs(s,this,e,!i);Ha(s,this,a,t,i||{})}):this._pending.push(()=>this.insertEmbed(e,t,i||{}))}delete(e,t){if(t===0)return;const i=this.doc;i!==null?tt(i,r=>{mh(r,Bs(r,this,e,!0),t)}):this._pending.push(()=>this.delete(e,t))}format(e,t,i){if(t===0)return;const r=this.doc;r!==null?tt(r,s=>{const a=Bs(s,this,e,!1);a.right!==null&&ph(s,this,a,t,i)}):this._pending.push(()=>this.format(e,t,i))}removeAttribute(e){this.doc!==null?tt(this.doc,t=>{lo(t,this,e)}):this._pending.push(()=>this.removeAttribute(e))}setAttribute(e,t){this.doc!==null?tt(this.doc,i=>{$c(i,this,e,t)}):this._pending.push(()=>this.setAttribute(e,t))}getAttribute(e){return Kc(this,e)}getAttributes(){return xf(this)}_write(e){e.writeTypeRef(kb)}}const yb=n=>new wr;class Ga{constructor(e,t=()=>!0){this._filter=t,this._root=e,this._currentNode=e._start,this._firstCall=!0,e.doc??Pt()}[Symbol.iterator](){return this}next(){let e=this._currentNode,t=e&&e.content&&e.content.type;if(e!==null&&(!this._firstCall||e.deleted||!this._filter(t)))do if(t=e.content.type,!e.deleted&&(t.constructor===Tr||t.constructor===Ni)&&t._start!==null)e=t._start;else for(;e!==null;){const i=e.next;if(i!==null){e=i;break}else e.parent===this._root?e=null:e=e.parent._item}while(e!==null&&(e.deleted||!this._filter(e.content.type)));return this._firstCall=!1,e===null?{value:void 0,done:!0}:(this._currentNode=e,{value:e.content.type,done:!1})}}class Ni extends At{constructor(){super(),this._prelimContent=[]}get firstChild(){const e=this._first;return e?e.content.getContent()[0]:null}_integrate(e,t){super._integrate(e,t),this.insert(0,this._prelimContent),this._prelimContent=null}_copy(){return new Ni}clone(){const e=new Ni;return e.insert(0,this.toArray().map(t=>t instanceof At?t.clone():t)),e}get length(){return this.doc??Pt(),this._prelimContent===null?this._length:this._prelimContent.length}createTreeWalker(e){return new Ga(this,e)}querySelector(e){e=e.toUpperCase();const i=new Ga(this,r=>r.nodeName&&r.nodeName.toUpperCase()===e).next();return i.done?null:i.value}querySelectorAll(e){return e=e.toUpperCase(),Bn(new Ga(this,t=>t.nodeName&&t.nodeName.toUpperCase()===e))}_callObserver(e,t){Vo(this,e,new bb(this,t,e))}toString(){return mf(this,e=>e.toString()).join("")}toJSON(){return this.toString()}toDOM(e=document,t={},i){const r=e.createDocumentFragment();return i!==void 0&&i._createAssociation(r,this),Jr(this,s=>{r.insertBefore(s.toDOM(e,t,i),null)}),r}insert(e,t){this.doc!==null?tt(this.doc,i=>{vf(i,this,e,t)}):this._prelimContent.splice(e,0,...t)}insertAfter(e,t){if(this.doc!==null)tt(this.doc,i=>{const r=e&&e instanceof At?e._item:e;co(i,this,r,t)});else{const i=this._prelimContent,r=e===null?0:i.findIndex(s=>s===e)+1;if(r===0&&e!==null)throw nn("Reference item not found");i.splice(r,0,...t)}}delete(e,t=1){this.doc!==null?tt(this.doc,i=>{yf(i,this,e,t)}):this._prelimContent.splice(e,t)}toArray(){return pf(this)}push(e){this.insert(this.length,e)}unshift(e){this.insert(0,e)}get(e){return gf(this,e)}slice(e=0,t=this.length){return ff(this,e,t)}forEach(e){Jr(this,e)}_write(e){e.writeTypeRef(zb)}}const xb=n=>new Ni;class Tr extends Ni{constructor(e="UNDEFINED"){super(),this.nodeName=e,this._prelimAttrs=new Map}get nextSibling(){const e=this._item?this._item.next:null;return e?e.content.type:null}get prevSibling(){const e=this._item?this._item.prev:null;return e?e.content.type:null}_integrate(e,t){super._integrate(e,t),this._prelimAttrs.forEach((i,r)=>{this.setAttribute(r,i)}),this._prelimAttrs=null}_copy(){return new Tr(this.nodeName)}clone(){const e=new Tr(this.nodeName),t=this.getAttributes();return xx(t,(i,r)=>{e.setAttribute(r,i)}),e.insert(0,this.toArray().map(i=>i instanceof At?i.clone():i)),e}toString(){const e=this.getAttributes(),t=[],i=[];for(const o in e)i.push(o);i.sort();const r=i.length;for(let o=0;o<r;o++){const c=i[o];t.push(c+'="'+e[c]+'"')}const s=this.nodeName.toLocaleLowerCase(),a=t.length>0?" "+t.join(" "):"";return`<${s}${a}>${super.toString()}</${s}>`}removeAttribute(e){this.doc!==null?tt(this.doc,t=>{lo(t,this,e)}):this._prelimAttrs.delete(e)}setAttribute(e,t){this.doc!==null?tt(this.doc,i=>{$c(i,this,e,t)}):this._prelimAttrs.set(e,t)}getAttribute(e){return Kc(this,e)}hasAttribute(e){return Sf(this,e)}getAttributes(e){return e?ub(this,e):xf(this)}toDOM(e=document,t={},i){const r=e.createElement(this.nodeName),s=this.getAttributes();for(const a in s){const o=s[a];typeof o=="string"&&r.setAttribute(a,o)}return Jr(this,a=>{r.appendChild(a.toDOM(e,t,i))}),i!==void 0&&i._createAssociation(r,this),r}_write(e){e.writeTypeRef(Bb),e.writeKey(this.nodeName)}}const Sb=n=>new Tr(n.readKey());class bb extends Ho{constructor(e,t,i){super(e,i),this.childListChanged=!1,this.attributesChanged=new Set,t.forEach(r=>{r===null?this.childListChanged=!0:this.attributesChanged.add(r)})}}class uo extends Mr{constructor(e){super(),this.hookName=e}_copy(){return new uo(this.hookName)}clone(){const e=new uo(this.hookName);return this.forEach((t,i)=>{e.set(i,t)}),e}toDOM(e=document,t={},i){const r=t[this.hookName];let s;return r!==void 0?s=r.createDom(this):s=document.createElement(this.hookName),s.setAttribute("data-yjs-hook",this.hookName),i!==void 0&&i._createAssociation(s,this),s}_write(e){e.writeTypeRef(Hb),e.writeKey(this.hookName)}}const Eb=n=>new uo(n.readKey());class ho extends wr{get nextSibling(){const e=this._item?this._item.next:null;return e?e.content.type:null}get prevSibling(){const e=this._item?this._item.prev:null;return e?e.content.type:null}_copy(){return new ho}clone(){const e=new ho;return e.applyDelta(this.toDelta()),e}toDOM(e=document,t,i){const r=e.createTextNode(this.toString());return i!==void 0&&i._createAssociation(r,this),r}toString(){return this.toDelta().map(e=>{const t=[];for(const r in e.attributes){const s=[];for(const a in e.attributes[r])s.push({key:a,value:e.attributes[r][a]});s.sort((a,o)=>a.key<o.key?-1:1),t.push({nodeName:r,attrs:s})}t.sort((r,s)=>r.nodeName<s.nodeName?-1:1);let i="";for(let r=0;r<t.length;r++){const s=t[r];i+=`<${s.nodeName}`;for(let a=0;a<s.attrs.length;a++){const o=s.attrs[a];i+=` ${o.key}="${o.value}"`}i+=">"}i+=e.insert;for(let r=t.length-1;r>=0;r--)i+=`</${t[r].nodeName}>`;return i}).join("")}toJSON(){return this.toString()}_write(e){e.writeTypeRef(Gb)}}const Mb=n=>new ho;class Zc{constructor(e,t){this.id=e,this.length=t}get deleted(){throw un()}mergeWith(e){return!1}write(e,t,i){throw un()}integrate(e,t){throw un()}}const wb=0;class Jt extends Zc{get deleted(){return!0}delete(){}mergeWith(e){return this.constructor!==e.constructor?!1:(this.length+=e.length,!0)}integrate(e,t){t>0&&(this.id.clock+=t,this.length-=t),af(e.doc.store,this)}write(e,t){e.writeInfo(wb),e.writeLen(this.length-t)}getMissing(e,t){return null}}class as{constructor(e){this.content=e}getLength(){return 1}getContent(){return[this.content]}isCountable(){return!0}copy(){return new as(this.content)}splice(e){throw un()}mergeWith(e){return!1}integrate(e,t){}delete(e){}gc(e){}write(e,t){e.writeBuf(this.content)}getRef(){return 3}}const Tb=n=>new as(n.readBuf());class Qr{constructor(e){this.len=e}getLength(){return this.len}getContent(){return[]}isCountable(){return!1}copy(){return new Qr(this.len)}splice(e){const t=new Qr(this.len-e);return this.len=e,t}mergeWith(e){return this.len+=e.len,!0}integrate(e,t){oo(e.deleteSet,t.id.client,t.id.clock,this.len),t.markDeleted()}delete(e){}gc(e){}write(e,t){e.writeLen(this.len-t)}getRef(){return 1}}const Ab=n=>new Qr(n.readLen()),Tf=(n,e)=>new Ir({guid:n,...e,shouldLoad:e.shouldLoad||e.autoLoad||!1});class cs{constructor(e){e._item&&console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid."),this.doc=e;const t={};this.opts=t,e.gc||(t.gc=!1),e.autoLoad&&(t.autoLoad=!0),e.meta!==null&&(t.meta=e.meta)}getLength(){return 1}getContent(){return[this.doc]}isCountable(){return!0}copy(){return new cs(Tf(this.doc.guid,this.opts))}splice(e){throw un()}mergeWith(e){return!1}integrate(e,t){this.doc._item=t,e.subdocsAdded.add(this.doc),this.doc.shouldLoad&&e.subdocsLoaded.add(this.doc)}delete(e){e.subdocsAdded.has(this.doc)?e.subdocsAdded.delete(this.doc):e.subdocsRemoved.add(this.doc)}gc(e){}write(e,t){e.writeString(this.doc.guid),e.writeAny(this.opts)}getRef(){return 9}}const Cb=n=>new cs(Tf(n.readString(),n.readAny()));class Bi{constructor(e){this.embed=e}getLength(){return 1}getContent(){return[this.embed]}isCountable(){return!0}copy(){return new Bi(this.embed)}splice(e){throw un()}mergeWith(e){return!1}integrate(e,t){}delete(e){}gc(e){}write(e,t){e.writeJSON(this.embed)}getRef(){return 5}}const Rb=n=>new Bi(n.readJSON());class gt{constructor(e,t){this.key=e,this.value=t}getLength(){return 1}getContent(){return[]}isCountable(){return!1}copy(){return new gt(this.key,this.value)}splice(e){throw un()}mergeWith(e){return!1}integrate(e,t){const i=t.parent;i._searchMarker=null,i._hasFormatting=!0}delete(e){}gc(e){}write(e,t){e.writeKey(this.key),e.writeJSON(this.value)}getRef(){return 6}}const Lb=n=>new gt(n.readKey(),n.readJSON());class fo{constructor(e){this.arr=e}getLength(){return this.arr.length}getContent(){return this.arr}isCountable(){return!0}copy(){return new fo(this.arr)}splice(e){const t=new fo(this.arr.slice(e));return this.arr=this.arr.slice(0,e),t}mergeWith(e){return this.arr=this.arr.concat(e.arr),!0}integrate(e,t){}delete(e){}gc(e){}write(e,t){const i=this.arr.length;e.writeLen(i-t);for(let r=t;r<i;r++){const s=this.arr[r];e.writeString(s===void 0?"undefined":JSON.stringify(s))}}getRef(){return 2}}const Db=n=>{const e=n.readLen(),t=[];for(let i=0;i<e;i++){const r=n.readString();r==="undefined"?t.push(void 0):t.push(JSON.parse(r))}return new fo(t)},Pb=$r("node_env")==="development";class Oi{constructor(e){this.arr=e,Pb&&_d(e)}getLength(){return this.arr.length}getContent(){return this.arr}isCountable(){return!0}copy(){return new Oi(this.arr)}splice(e){const t=new Oi(this.arr.slice(e));return this.arr=this.arr.slice(0,e),t}mergeWith(e){return this.arr=this.arr.concat(e.arr),!0}integrate(e,t){}delete(e){}gc(e){}write(e,t){const i=this.arr.length;e.writeLen(i-t);for(let r=t;r<i;r++){const s=this.arr[r];e.writeAny(s)}}getRef(){return 8}}const Ib=n=>{const e=n.readLen(),t=[];for(let i=0;i<e;i++)t.push(n.readAny());return new Oi(t)};class bn{constructor(e){this.str=e}getLength(){return this.str.length}getContent(){return this.str.split("")}isCountable(){return!0}copy(){return new bn(this.str)}splice(e){const t=new bn(this.str.slice(e));this.str=this.str.slice(0,e);const i=this.str.charCodeAt(e-1);return i>=55296&&i<=56319&&(this.str=this.str.slice(0,e-1)+"�",t.str="�"+t.str.slice(1)),t}mergeWith(e){return this.str+=e.str,!0}integrate(e,t){}delete(e){}gc(e){}write(e,t){e.writeString(t===0?this.str:this.str.slice(t))}getRef(){return 4}}const Ub=n=>new bn(n.readString()),Nb=[db,pb,yb,Sb,xb,Eb,Mb],Ob=0,Fb=1,kb=2,Bb=3,zb=4,Hb=5,Gb=6;class Gn{constructor(e){this.type=e}getLength(){return 1}getContent(){return[this.type]}isCountable(){return!0}copy(){return new Gn(this.type._copy())}splice(e){throw un()}mergeWith(e){return!1}integrate(e,t){this.type._integrate(e.doc,t)}delete(e){let t=this.type._start;for(;t!==null;)t.deleted?t.id.clock<(e.beforeState.get(t.id.client)||0)&&e._mergeStructs.push(t):t.delete(e),t=t.right;this.type._map.forEach(i=>{i.deleted?i.id.clock<(e.beforeState.get(i.id.client)||0)&&e._mergeStructs.push(i):i.delete(e)}),e.changed.delete(this.type)}gc(e){let t=this.type._start;for(;t!==null;)t.gc(e,!0),t=t.right;this.type._start=null,this.type._map.forEach(i=>{for(;i!==null;)i.gc(e,!0),i=i.left}),this.type._map=new Map}write(e,t){this.type._write(e)}getRef(){return 7}}const Vb=n=>new Gn(Nb[n.readTypeRef()](n)),po=(n,e,t)=>{const{client:i,clock:r}=e.id,s=new ft(Ye(i,r+t),e,Ye(i,r+t-1),e.right,e.rightOrigin,e.parent,e.parentSub,e.content.splice(t));return e.deleted&&s.markDeleted(),e.keep&&(s.keep=!0),e.redone!==null&&(s.redone=Ye(e.redone.client,e.redone.clock+t)),e.right=s,s.right!==null&&(s.right.left=s),n._mergeStructs.push(s),s.parentSub!==null&&s.right===null&&s.parent._map.set(s.parentSub,s),e.length=t,s};class ft extends Zc{constructor(e,t,i,r,s,a,o,c){super(e,c.getLength()),this.origin=i,this.left=t,this.right=r,this.rightOrigin=s,this.parent=a,this.parentSub=o,this.redone=null,this.content=c,this.info=this.content.isCountable()?Xu:0}set marker(e){(this.info&Ia)>0!==e&&(this.info^=Ia)}get marker(){return(this.info&Ia)>0}get keep(){return(this.info&Wu)>0}set keep(e){this.keep!==e&&(this.info^=Wu)}get countable(){return(this.info&Xu)>0}get deleted(){return(this.info&Pa)>0}set deleted(e){this.deleted!==e&&(this.info^=Pa)}markDeleted(){this.info|=Pa}getMissing(e,t){if(this.origin&&this.origin.client!==this.id.client&&this.origin.clock>=Et(t,this.origin.client))return this.origin.client;if(this.rightOrigin&&this.rightOrigin.client!==this.id.client&&this.rightOrigin.clock>=Et(t,this.rightOrigin.client))return this.rightOrigin.client;if(this.parent&&this.parent.constructor===dr&&this.id.client!==this.parent.client&&this.parent.clock>=Et(t,this.parent.client))return this.parent.client;if(this.origin&&(this.left=lh(e,t,this.origin),this.origin=this.left.lastId),this.rightOrigin&&(this.right=ci(e,this.rightOrigin),this.rightOrigin=this.right.id),this.left&&this.left.constructor===Jt||this.right&&this.right.constructor===Jt)this.parent=null;else if(!this.parent)this.left&&this.left.constructor===ft?(this.parent=this.left.parent,this.parentSub=this.left.parentSub):this.right&&this.right.constructor===ft&&(this.parent=this.right.parent,this.parentSub=this.right.parentSub);else if(this.parent.constructor===dr){const i=za(t,this.parent);i.constructor===Jt?this.parent=null:this.parent=i.content.type}return null}integrate(e,t){if(t>0&&(this.id.clock+=t,this.left=lh(e,e.doc.store,Ye(this.id.client,this.id.clock-1)),this.origin=this.left.lastId,this.content=this.content.splice(t),this.length-=t),this.parent){if(!this.left&&(!this.right||this.right.left!==null)||this.left&&this.left.right!==this.right){let i=this.left,r;if(i!==null)r=i.right;else if(this.parentSub!==null)for(r=this.parent._map.get(this.parentSub)||null;r!==null&&r.left!==null;)r=r.left;else r=this.parent._start;const s=new Set,a=new Set;for(;r!==null&&r!==this.right;){if(a.add(r),s.add(r),Fs(this.origin,r.origin)){if(r.id.client<this.id.client)i=r,s.clear();else if(Fs(this.rightOrigin,r.rightOrigin))break}else if(r.origin!==null&&a.has(za(e.doc.store,r.origin)))s.has(za(e.doc.store,r.origin))||(i=r,s.clear());else break;r=r.right}this.left=i}if(this.left!==null){const i=this.left.right;this.right=i,this.left.right=this}else{let i;if(this.parentSub!==null)for(i=this.parent._map.get(this.parentSub)||null;i!==null&&i.left!==null;)i=i.left;else i=this.parent._start,this.parent._start=this;this.right=i}this.right!==null?this.right.left=this:this.parentSub!==null&&(this.parent._map.set(this.parentSub,this),this.left!==null&&this.left.delete(e)),this.parentSub===null&&this.countable&&!this.deleted&&(this.parent._length+=this.length),af(e.doc.store,this),this.content.integrate(e,this),hh(e,this.parent,this.parentSub),(this.parent._item!==null&&this.parent._item.deleted||this.parentSub!==null&&this.right!==null)&&this.delete(e)}else new Jt(this.id,this.length).integrate(e,0)}get next(){let e=this.right;for(;e!==null&&e.deleted;)e=e.right;return e}get prev(){let e=this.left;for(;e!==null&&e.deleted;)e=e.left;return e}get lastId(){return this.length===1?this.id:Ye(this.id.client,this.id.clock+this.length-1)}mergeWith(e){if(this.constructor===e.constructor&&Fs(e.origin,this.lastId)&&this.right===e&&Fs(this.rightOrigin,e.rightOrigin)&&this.id.client===e.id.client&&this.id.clock+this.length===e.id.clock&&this.deleted===e.deleted&&this.redone===null&&e.redone===null&&this.content.constructor===e.content.constructor&&this.content.mergeWith(e.content)){const t=this.parent._searchMarker;return t&&t.forEach(i=>{i.p===e&&(i.p=this,!this.deleted&&this.countable&&(i.index-=this.length))}),e.keep&&(this.keep=!0),this.right=e.right,this.right!==null&&(this.right.left=this),this.length+=e.length,!0}return!1}delete(e){if(!this.deleted){const t=this.parent;this.countable&&this.parentSub===null&&(t._length-=this.length),this.markDeleted(),oo(e.deleteSet,this.id.client,this.id.clock,this.length),hh(e,t,this.parentSub),this.content.delete(e)}}gc(e,t){if(!this.deleted)throw rn();this.content.gc(e),t?YS(e,this,new Jt(this.id,this.length)):this.content=new Qr(this.length)}write(e,t){const i=t>0?Ye(this.id.client,this.id.clock+t-1):this.origin,r=this.rightOrigin,s=this.parentSub,a=this.content.getRef()&Co|(i===null?0:qt)|(r===null?0:On)|(s===null?0:Xr);if(e.writeInfo(a),i!==null&&e.writeLeftID(i),r!==null&&e.writeRightID(r),i===null&&r===null){const o=this.parent;if(o._item!==void 0){const c=o._item;if(c===null){const u=jS(o);e.writeParentInfo(!0),e.writeString(u)}else e.writeParentInfo(!1),e.writeLeftID(c.id)}else o.constructor===String?(e.writeParentInfo(!0),e.writeString(o)):o.constructor===dr?(e.writeParentInfo(!1),e.writeLeftID(o)):rn();s!==null&&e.writeString(s)}this.content.write(e,t)}}const Af=(n,e)=>Wb[e&Co](n),Wb=[()=>{rn()},Ab,Db,Tb,Ub,Rb,Lb,Vb,Ib,Cb,()=>{rn()}],Xb=10;class Qt extends Zc{get deleted(){return!0}delete(){}mergeWith(e){return this.constructor!==e.constructor?!1:(this.length+=e.length,!0)}integrate(e,t){rn()}write(e,t){e.writeInfo(Xb),Pe(e.restEncoder,this.length-t)}getMissing(e,t){return null}}const Cf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:{},Rf="__ $YJS$ __";Cf[Rf]===!0&&console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");Cf[Rf]=!0;const jb=1200,qb=2500,mo=3e4,fc=n=>{if(n.shouldConnect&&n.ws===null){const e=new WebSocket(n.url),t=n.binaryType;let i=null;t&&(e.binaryType=t),n.ws=e,n.connecting=!0,n.connected=!1,e.onmessage=a=>{n.lastMessageReceived=zn();const o=a.data,c=typeof o=="string"?JSON.parse(o):o;c&&c.type==="pong"&&(clearTimeout(i),i=setTimeout(s,mo/2)),n.emit("message",[c,n])};const r=a=>{n.ws!==null&&(n.ws=null,n.connecting=!1,n.connected?(n.connected=!1,n.emit("disconnect",[{type:"disconnect",error:a},n])):n.unsuccessfulReconnects++,setTimeout(fc,Cc(Ny(n.unsuccessfulReconnects+1)*jb,qb),n)),clearTimeout(i)},s=()=>{n.ws===e&&n.send({type:"ping"})};e.onclose=()=>r(null),e.onerror=a=>r(a),e.onopen=()=>{n.lastMessageReceived=zn(),n.connecting=!1,n.connected=!0,n.unsuccessfulReconnects=0,n.emit("connect",[{type:"connect"},n]),i=setTimeout(s,mo/2)}}};class Yb extends ad{constructor(e,{binaryType:t}={}){super(),this.url=e,this.ws=null,this.binaryType=t||null,this.connected=!1,this.connecting=!1,this.unsuccessfulReconnects=0,this.lastMessageReceived=0,this.shouldConnect=!0,this._checkInterval=setInterval(()=>{this.connected&&mo<zn()-this.lastMessageReceived&&this.ws.close()},mo/2),fc(this)}send(e){this.ws&&this.ws.send(JSON.stringify(e))}destroy(){clearInterval(this._checkInterval),this.disconnect(),super.destroy()}disconnect(){this.shouldConnect=!1,this.ws!==null&&this.ws.close()}connect(){this.shouldConnect=!0,!this.connected&&this.ws===null&&fc(this)}}const Lf=new Map;class $b{constructor(e){this.room=e,this.onmessage=null,this._onChange=t=>t.key===e&&this.onmessage!==null&&this.onmessage({data:Ed(t.newValue||"")}),mx(this._onChange)}postMessage(e){md.setItem(this.room,bd(Px(e)))}close(){gx(this._onChange)}}const Kb=typeof BroadcastChannel>"u"?$b:BroadcastChannel,Jc=n=>Yt(Lf,n,()=>{const e=ai(),t=new Kb(n);return t.onmessage=i=>e.forEach(r=>r(i.data,"broadcastchannel")),{bc:t,subs:e}}),Zb=(n,e)=>(Jc(n).subs.add(e),e),Jb=(n,e)=>{const t=Jc(n),i=t.subs.delete(e);return i&&t.subs.size===0&&(t.bc.close(),Lf.delete(n)),i},Qb=(n,e,t=null)=>{const i=Jc(n);i.bc.postMessage(e),i.subs.forEach(r=>r(e,t))},eE=()=>{let n=!0;return(e,t)=>{if(n){n=!1;try{e()}finally{n=!0}}else t!==void 0&&t()}};var fn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function tE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function zs(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Df={exports:{}};(function(n,e){(function(t){n.exports=t()})(function(){var t=Math.floor,i=Math.abs,r=Math.pow;return function(){function s(a,o,c){function u(d,g){if(!o[d]){if(!a[d]){var v=typeof zs=="function"&&zs;if(!g&&v)return v(d,!0);if(f)return f(d,!0);var b=new Error("Cannot find module '"+d+"'");throw b.code="MODULE_NOT_FOUND",b}var y=o[d]={exports:{}};a[d][0].call(y.exports,function(_){var C=a[d][1][_];return u(C||_)},y,y.exports,s,a,o,c)}return o[d].exports}for(var f=typeof zs=="function"&&zs,l=0;l<c.length;l++)u(c[l]);return u}return s}()({1:[function(s,a,o){function c(E){var T=E.length;if(0<T%4)throw new Error("Invalid string. Length must be a multiple of 4");var A=E.indexOf("=");A===-1&&(A=T);var M=A===T?0:4-A%4;return[A,M]}function u(E,T,A){return 3*(T+A)/4-A}function f(E){var T,A,M=c(E),D=M[0],F=M[1],S=new y(u(E,D,F)),w=0,k=0<F?D-4:D;for(A=0;A<k;A+=4)T=b[E.charCodeAt(A)]<<18|b[E.charCodeAt(A+1)]<<12|b[E.charCodeAt(A+2)]<<6|b[E.charCodeAt(A+3)],S[w++]=255&T>>16,S[w++]=255&T>>8,S[w++]=255&T;return F===2&&(T=b[E.charCodeAt(A)]<<2|b[E.charCodeAt(A+1)]>>4,S[w++]=255&T),F===1&&(T=b[E.charCodeAt(A)]<<10|b[E.charCodeAt(A+1)]<<4|b[E.charCodeAt(A+2)]>>2,S[w++]=255&T>>8,S[w++]=255&T),S}function l(E){return v[63&E>>18]+v[63&E>>12]+v[63&E>>6]+v[63&E]}function d(E,T,A){for(var M,D=[],F=T;F<A;F+=3)M=(16711680&E[F]<<16)+(65280&E[F+1]<<8)+(255&E[F+2]),D.push(l(M));return D.join("")}function g(E){for(var T,A=E.length,M=A%3,D=[],F=16383,S=0,w=A-M;S<w;S+=F)D.push(d(E,S,S+F>w?w:S+F));return M===1?(T=E[A-1],D.push(v[T>>2]+v[63&T<<4]+"==")):M===2&&(T=(E[A-2]<<8)+E[A-1],D.push(v[T>>10]+v[63&T>>4]+v[63&T<<2]+"=")),D.join("")}o.byteLength=function(E){var T=c(E),A=T[0],M=T[1];return 3*(A+M)/4-M},o.toByteArray=f,o.fromByteArray=g;for(var v=[],b=[],y=typeof Uint8Array>"u"?Array:Uint8Array,_="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",C=0,x=_.length;C<x;++C)v[C]=_[C],b[_.charCodeAt(C)]=C;b[45]=62,b[95]=63},{}],2:[function(){},{}],3:[function(s,a,o){(function(){(function(){var c=String.fromCharCode,u=Math.min;function f(h){if(2147483647<h)throw new RangeError('The value "'+h+'" is invalid for option "size"');var p=new Uint8Array(h);return p.__proto__=l.prototype,p}function l(h,p,m){if(typeof h=="number"){if(typeof p=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return b(h)}return d(h,p,m)}function d(h,p,m){if(typeof h=="string")return y(h,p);if(ArrayBuffer.isView(h))return _(h);if(h==null)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof h);if(z(h,ArrayBuffer)||h&&z(h.buffer,ArrayBuffer))return C(h,p,m);if(typeof h=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var R=h.valueOf&&h.valueOf();if(R!=null&&R!==h)return l.from(R,p,m);var I=x(h);if(I)return I;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof h[Symbol.toPrimitive]=="function")return l.from(h[Symbol.toPrimitive]("string"),p,m);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof h)}function g(h){if(typeof h!="number")throw new TypeError('"size" argument must be of type number');if(0>h)throw new RangeError('The value "'+h+'" is invalid for option "size"')}function v(h,p,m){return g(h),0>=h||p===void 0?f(h):typeof m=="string"?f(h).fill(p,m):f(h).fill(p)}function b(h){return g(h),f(0>h?0:0|E(h))}function y(h,p){if((typeof p!="string"||p==="")&&(p="utf8"),!l.isEncoding(p))throw new TypeError("Unknown encoding: "+p);var m=0|T(h,p),R=f(m),I=R.write(h,p);return I!==m&&(R=R.slice(0,I)),R}function _(h){for(var p=0>h.length?0:0|E(h.length),m=f(p),R=0;R<p;R+=1)m[R]=255&h[R];return m}function C(h,p,m){if(0>p||h.byteLength<p)throw new RangeError('"offset" is outside of buffer bounds');if(h.byteLength<p+(m||0))throw new RangeError('"length" is outside of buffer bounds');var R;return R=p===void 0&&m===void 0?new Uint8Array(h):m===void 0?new Uint8Array(h,p):new Uint8Array(h,p,m),R.__proto__=l.prototype,R}function x(h){if(l.isBuffer(h)){var p=0|E(h.length),m=f(p);return m.length===0||h.copy(m,0,0,p),m}return h.length===void 0?h.type==="Buffer"&&Array.isArray(h.data)?_(h.data):void 0:typeof h.length!="number"||H(h.length)?f(0):_(h)}function E(h){if(h>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|h}function T(h,p){if(l.isBuffer(h))return h.length;if(ArrayBuffer.isView(h)||z(h,ArrayBuffer))return h.byteLength;if(typeof h!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof h);var m=h.length,R=2<arguments.length&&arguments[2]===!0;if(!R&&m===0)return 0;for(var I=!1;;)switch(p){case"ascii":case"latin1":case"binary":return m;case"utf8":case"utf-8":return He(h).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*m;case"hex":return m>>>1;case"base64":return Ke(h).length;default:if(I)return R?-1:He(h).length;p=(""+p).toLowerCase(),I=!0}}function A(h,p,m){var R=!1;if((p===void 0||0>p)&&(p=0),p>this.length||((m===void 0||m>this.length)&&(m=this.length),0>=m)||(m>>>=0,p>>>=0,m<=p))return"";for(h||(h="utf8");;)switch(h){case"hex":return he(this,p,m);case"utf8":case"utf-8":return ie(this,p,m);case"ascii":return K(this,p,m);case"latin1":case"binary":return ae(this,p,m);case"base64":return X(this,p,m);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ve(this,p,m);default:if(R)throw new TypeError("Unknown encoding: "+h);h=(h+"").toLowerCase(),R=!0}}function M(h,p,m){var R=h[p];h[p]=h[m],h[m]=R}function D(h,p,m,R,I){if(h.length===0)return-1;if(typeof m=="string"?(R=m,m=0):2147483647<m?m=2147483647:-2147483648>m&&(m=-2147483648),m=+m,H(m)&&(m=I?0:h.length-1),0>m&&(m=h.length+m),m>=h.length){if(I)return-1;m=h.length-1}else if(0>m)if(I)m=0;else return-1;if(typeof p=="string"&&(p=l.from(p,R)),l.isBuffer(p))return p.length===0?-1:F(h,p,m,R,I);if(typeof p=="number")return p&=255,typeof Uint8Array.prototype.indexOf=="function"?I?Uint8Array.prototype.indexOf.call(h,p,m):Uint8Array.prototype.lastIndexOf.call(h,p,m):F(h,[p],m,R,I);throw new TypeError("val must be string, number or Buffer")}function F(h,p,m,R,I){function O(Ze,Oe){return $===1?Ze[Oe]:Ze.readUInt16BE(Oe*$)}var $=1,pe=h.length,_e=p.length;if(R!==void 0&&(R=(R+"").toLowerCase(),R==="ucs2"||R==="ucs-2"||R==="utf16le"||R==="utf-16le")){if(2>h.length||2>p.length)return-1;$=2,pe/=2,_e/=2,m/=2}var re;if(I){var se=-1;for(re=m;re<pe;re++)if(O(h,re)!==O(p,se===-1?0:re-se))se!==-1&&(re-=re-se),se=-1;else if(se===-1&&(se=re),re-se+1===_e)return se*$}else for(m+_e>pe&&(m=pe-_e),re=m;0<=re;re--){for(var we=!0,de=0;de<_e;de++)if(O(h,re+de)!==O(p,de)){we=!1;break}if(we)return re}return-1}function S(h,p,m,R){m=+m||0;var I=h.length-m;R?(R=+R,R>I&&(R=I)):R=I;var O=p.length;R>O/2&&(R=O/2);for(var $,pe=0;pe<R;++pe){if($=parseInt(p.substr(2*pe,2),16),H($))return pe;h[m+pe]=$}return pe}function w(h,p,m,R){return Me(He(p,h.length-m),h,m,R)}function k(h,p,m,R){return Me(Ie(p),h,m,R)}function G(h,p,m,R){return k(h,p,m,R)}function N(h,p,m,R){return Me(Ke(p),h,m,R)}function Y(h,p,m,R){return Me(V(p,h.length-m),h,m,R)}function X(h,p,m){return p===0&&m===h.length?ne.fromByteArray(h):ne.fromByteArray(h.slice(p,m))}function ie(h,p,m){m=u(h.length,m);for(var R=[],I=p;I<m;){var O=h[I],$=null,pe=239<O?4:223<O?3:191<O?2:1;if(I+pe<=m){var _e,re,se,we;pe===1?128>O&&($=O):pe===2?(_e=h[I+1],(192&_e)==128&&(we=(31&O)<<6|63&_e,127<we&&($=we))):pe===3?(_e=h[I+1],re=h[I+2],(192&_e)==128&&(192&re)==128&&(we=(15&O)<<12|(63&_e)<<6|63&re,2047<we&&(55296>we||57343<we)&&($=we))):pe===4&&(_e=h[I+1],re=h[I+2],se=h[I+3],(192&_e)==128&&(192&re)==128&&(192&se)==128&&(we=(15&O)<<18|(63&_e)<<12|(63&re)<<6|63&se,65535<we&&1114112>we&&($=we)))}$===null?($=65533,pe=1):65535<$&&($-=65536,R.push(55296|1023&$>>>10),$=56320|1023&$),R.push($),I+=pe}return ee(R)}function ee(h){var p=h.length;if(p<=4096)return c.apply(String,h);for(var m="",R=0;R<p;)m+=c.apply(String,h.slice(R,R+=4096));return m}function K(h,p,m){var R="";m=u(h.length,m);for(var I=p;I<m;++I)R+=c(127&h[I]);return R}function ae(h,p,m){var R="";m=u(h.length,m);for(var I=p;I<m;++I)R+=c(h[I]);return R}function he(h,p,m){var R=h.length;(!p||0>p)&&(p=0),(!m||0>m||m>R)&&(m=R);for(var I="",O=p;O<m;++O)I+=xe(h[O]);return I}function ve(h,p,m){for(var R=h.slice(p,m),I="",O=0;O<R.length;O+=2)I+=c(R[O]+256*R[O+1]);return I}function Ee(h,p,m){if(h%1!=0||0>h)throw new RangeError("offset is not uint");if(h+p>m)throw new RangeError("Trying to access beyond buffer length")}function q(h,p,m,R,I,O){if(!l.isBuffer(h))throw new TypeError('"buffer" argument must be a Buffer instance');if(p>I||p<O)throw new RangeError('"value" argument is out of bounds');if(m+R>h.length)throw new RangeError("Index out of range")}function ce(h,p,m,R){if(m+R>h.length)throw new RangeError("Index out of range");if(0>m)throw new RangeError("Index out of range")}function ge(h,p,m,R,I){return p=+p,m>>>=0,I||ce(h,p,m,4),le.write(h,p,m,R,23,4),m+4}function De(h,p,m,R,I){return p=+p,m>>>=0,I||ce(h,p,m,8),le.write(h,p,m,R,52,8),m+8}function Ce(h){if(h=h.split("=")[0],h=h.trim().replace(L,""),2>h.length)return"";for(;h.length%4!=0;)h+="=";return h}function xe(h){return 16>h?"0"+h.toString(16):h.toString(16)}function He(h,p){p=p||1/0;for(var m,R=h.length,I=null,O=[],$=0;$<R;++$){if(m=h.charCodeAt($),55295<m&&57344>m){if(!I){if(56319<m){-1<(p-=3)&&O.push(239,191,189);continue}else if($+1===R){-1<(p-=3)&&O.push(239,191,189);continue}I=m;continue}if(56320>m){-1<(p-=3)&&O.push(239,191,189),I=m;continue}m=(I-55296<<10|m-56320)+65536}else I&&-1<(p-=3)&&O.push(239,191,189);if(I=null,128>m){if(0>(p-=1))break;O.push(m)}else if(2048>m){if(0>(p-=2))break;O.push(192|m>>6,128|63&m)}else if(65536>m){if(0>(p-=3))break;O.push(224|m>>12,128|63&m>>6,128|63&m)}else if(1114112>m){if(0>(p-=4))break;O.push(240|m>>18,128|63&m>>12,128|63&m>>6,128|63&m)}else throw new Error("Invalid code point")}return O}function Ie(h){for(var p=[],m=0;m<h.length;++m)p.push(255&h.charCodeAt(m));return p}function V(h,p){for(var m,R,I,O=[],$=0;$<h.length&&!(0>(p-=2));++$)m=h.charCodeAt($),R=m>>8,I=m%256,O.push(I),O.push(R);return O}function Ke(h){return ne.toByteArray(Ce(h))}function Me(h,p,m,R){for(var I=0;I<R&&!(I+m>=p.length||I>=h.length);++I)p[I+m]=h[I];return I}function z(h,p){return h instanceof p||h!=null&&h.constructor!=null&&h.constructor.name!=null&&h.constructor.name===p.name}function H(h){return h!==h}var ne=s("base64-js"),le=s("ieee754");o.Buffer=l,o.SlowBuffer=function(h){return+h!=h&&(h=0),l.alloc(+h)},o.INSPECT_MAX_BYTES=50,o.kMaxLength=2147483647,l.TYPED_ARRAY_SUPPORT=function(){try{var h=new Uint8Array(1);return h.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},h.foo()===42}catch{return!1}}(),l.TYPED_ARRAY_SUPPORT||typeof console>"u"||typeof console.error!="function"||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){return l.isBuffer(this)?this.buffer:void 0}}),Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){return l.isBuffer(this)?this.byteOffset:void 0}}),typeof Symbol<"u"&&Symbol.species!=null&&l[Symbol.species]===l&&Object.defineProperty(l,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1}),l.poolSize=8192,l.from=function(h,p,m){return d(h,p,m)},l.prototype.__proto__=Uint8Array.prototype,l.__proto__=Uint8Array,l.alloc=function(h,p,m){return v(h,p,m)},l.allocUnsafe=function(h){return b(h)},l.allocUnsafeSlow=function(h){return b(h)},l.isBuffer=function(h){return h!=null&&h._isBuffer===!0&&h!==l.prototype},l.compare=function(h,p){if(z(h,Uint8Array)&&(h=l.from(h,h.offset,h.byteLength)),z(p,Uint8Array)&&(p=l.from(p,p.offset,p.byteLength)),!l.isBuffer(h)||!l.isBuffer(p))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(h===p)return 0;for(var m=h.length,R=p.length,I=0,O=u(m,R);I<O;++I)if(h[I]!==p[I]){m=h[I],R=p[I];break}return m<R?-1:R<m?1:0},l.isEncoding=function(h){switch((h+"").toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(h,p){if(!Array.isArray(h))throw new TypeError('"list" argument must be an Array of Buffers');if(h.length===0)return l.alloc(0);var m;if(p===void 0)for(p=0,m=0;m<h.length;++m)p+=h[m].length;var R=l.allocUnsafe(p),I=0;for(m=0;m<h.length;++m){var O=h[m];if(z(O,Uint8Array)&&(O=l.from(O)),!l.isBuffer(O))throw new TypeError('"list" argument must be an Array of Buffers');O.copy(R,I),I+=O.length}return R},l.byteLength=T,l.prototype._isBuffer=!0,l.prototype.swap16=function(){var h=this.length;if(h%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var p=0;p<h;p+=2)M(this,p,p+1);return this},l.prototype.swap32=function(){var h=this.length;if(h%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var p=0;p<h;p+=4)M(this,p,p+3),M(this,p+1,p+2);return this},l.prototype.swap64=function(){var h=this.length;if(h%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var p=0;p<h;p+=8)M(this,p,p+7),M(this,p+1,p+6),M(this,p+2,p+5),M(this,p+3,p+4);return this},l.prototype.toString=function(){var h=this.length;return h===0?"":arguments.length===0?ie(this,0,h):A.apply(this,arguments)},l.prototype.toLocaleString=l.prototype.toString,l.prototype.equals=function(h){if(!l.isBuffer(h))throw new TypeError("Argument must be a Buffer");return this===h||l.compare(this,h)===0},l.prototype.inspect=function(){var h="",p=o.INSPECT_MAX_BYTES;return h=this.toString("hex",0,p).replace(/(.{2})/g,"$1 ").trim(),this.length>p&&(h+=" ... "),"<Buffer "+h+">"},l.prototype.compare=function(h,p,m,R,I){if(z(h,Uint8Array)&&(h=l.from(h,h.offset,h.byteLength)),!l.isBuffer(h))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof h);if(p===void 0&&(p=0),m===void 0&&(m=h?h.length:0),R===void 0&&(R=0),I===void 0&&(I=this.length),0>p||m>h.length||0>R||I>this.length)throw new RangeError("out of range index");if(R>=I&&p>=m)return 0;if(R>=I)return-1;if(p>=m)return 1;if(p>>>=0,m>>>=0,R>>>=0,I>>>=0,this===h)return 0;for(var O=I-R,$=m-p,pe=u(O,$),_e=this.slice(R,I),re=h.slice(p,m),se=0;se<pe;++se)if(_e[se]!==re[se]){O=_e[se],$=re[se];break}return O<$?-1:$<O?1:0},l.prototype.includes=function(h,p,m){return this.indexOf(h,p,m)!==-1},l.prototype.indexOf=function(h,p,m){return D(this,h,p,m,!0)},l.prototype.lastIndexOf=function(h,p,m){return D(this,h,p,m,!1)},l.prototype.write=function(h,p,m,R){if(p===void 0)R="utf8",m=this.length,p=0;else if(m===void 0&&typeof p=="string")R=p,m=this.length,p=0;else if(isFinite(p))p>>>=0,isFinite(m)?(m>>>=0,R===void 0&&(R="utf8")):(R=m,m=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var I=this.length-p;if((m===void 0||m>I)&&(m=I),0<h.length&&(0>m||0>p)||p>this.length)throw new RangeError("Attempt to write outside buffer bounds");R||(R="utf8");for(var O=!1;;)switch(R){case"hex":return S(this,h,p,m);case"utf8":case"utf-8":return w(this,h,p,m);case"ascii":return k(this,h,p,m);case"latin1":case"binary":return G(this,h,p,m);case"base64":return N(this,h,p,m);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Y(this,h,p,m);default:if(O)throw new TypeError("Unknown encoding: "+R);R=(""+R).toLowerCase(),O=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},l.prototype.slice=function(h,p){var m=this.length;h=~~h,p=p===void 0?m:~~p,0>h?(h+=m,0>h&&(h=0)):h>m&&(h=m),0>p?(p+=m,0>p&&(p=0)):p>m&&(p=m),p<h&&(p=h);var R=this.subarray(h,p);return R.__proto__=l.prototype,R},l.prototype.readUIntLE=function(h,p,m){h>>>=0,p>>>=0,m||Ee(h,p,this.length);for(var R=this[h],I=1,O=0;++O<p&&(I*=256);)R+=this[h+O]*I;return R},l.prototype.readUIntBE=function(h,p,m){h>>>=0,p>>>=0,m||Ee(h,p,this.length);for(var R=this[h+--p],I=1;0<p&&(I*=256);)R+=this[h+--p]*I;return R},l.prototype.readUInt8=function(h,p){return h>>>=0,p||Ee(h,1,this.length),this[h]},l.prototype.readUInt16LE=function(h,p){return h>>>=0,p||Ee(h,2,this.length),this[h]|this[h+1]<<8},l.prototype.readUInt16BE=function(h,p){return h>>>=0,p||Ee(h,2,this.length),this[h]<<8|this[h+1]},l.prototype.readUInt32LE=function(h,p){return h>>>=0,p||Ee(h,4,this.length),(this[h]|this[h+1]<<8|this[h+2]<<16)+16777216*this[h+3]},l.prototype.readUInt32BE=function(h,p){return h>>>=0,p||Ee(h,4,this.length),16777216*this[h]+(this[h+1]<<16|this[h+2]<<8|this[h+3])},l.prototype.readIntLE=function(h,p,m){h>>>=0,p>>>=0,m||Ee(h,p,this.length);for(var R=this[h],I=1,O=0;++O<p&&(I*=256);)R+=this[h+O]*I;return I*=128,R>=I&&(R-=r(2,8*p)),R},l.prototype.readIntBE=function(h,p,m){h>>>=0,p>>>=0,m||Ee(h,p,this.length);for(var R=p,I=1,O=this[h+--R];0<R&&(I*=256);)O+=this[h+--R]*I;return I*=128,O>=I&&(O-=r(2,8*p)),O},l.prototype.readInt8=function(h,p){return h>>>=0,p||Ee(h,1,this.length),128&this[h]?-1*(255-this[h]+1):this[h]},l.prototype.readInt16LE=function(h,p){h>>>=0,p||Ee(h,2,this.length);var m=this[h]|this[h+1]<<8;return 32768&m?4294901760|m:m},l.prototype.readInt16BE=function(h,p){h>>>=0,p||Ee(h,2,this.length);var m=this[h+1]|this[h]<<8;return 32768&m?4294901760|m:m},l.prototype.readInt32LE=function(h,p){return h>>>=0,p||Ee(h,4,this.length),this[h]|this[h+1]<<8|this[h+2]<<16|this[h+3]<<24},l.prototype.readInt32BE=function(h,p){return h>>>=0,p||Ee(h,4,this.length),this[h]<<24|this[h+1]<<16|this[h+2]<<8|this[h+3]},l.prototype.readFloatLE=function(h,p){return h>>>=0,p||Ee(h,4,this.length),le.read(this,h,!0,23,4)},l.prototype.readFloatBE=function(h,p){return h>>>=0,p||Ee(h,4,this.length),le.read(this,h,!1,23,4)},l.prototype.readDoubleLE=function(h,p){return h>>>=0,p||Ee(h,8,this.length),le.read(this,h,!0,52,8)},l.prototype.readDoubleBE=function(h,p){return h>>>=0,p||Ee(h,8,this.length),le.read(this,h,!1,52,8)},l.prototype.writeUIntLE=function(h,p,m,R){if(h=+h,p>>>=0,m>>>=0,!R){var I=r(2,8*m)-1;q(this,h,p,m,I,0)}var O=1,$=0;for(this[p]=255&h;++$<m&&(O*=256);)this[p+$]=255&h/O;return p+m},l.prototype.writeUIntBE=function(h,p,m,R){if(h=+h,p>>>=0,m>>>=0,!R){var I=r(2,8*m)-1;q(this,h,p,m,I,0)}var O=m-1,$=1;for(this[p+O]=255&h;0<=--O&&($*=256);)this[p+O]=255&h/$;return p+m},l.prototype.writeUInt8=function(h,p,m){return h=+h,p>>>=0,m||q(this,h,p,1,255,0),this[p]=255&h,p+1},l.prototype.writeUInt16LE=function(h,p,m){return h=+h,p>>>=0,m||q(this,h,p,2,65535,0),this[p]=255&h,this[p+1]=h>>>8,p+2},l.prototype.writeUInt16BE=function(h,p,m){return h=+h,p>>>=0,m||q(this,h,p,2,65535,0),this[p]=h>>>8,this[p+1]=255&h,p+2},l.prototype.writeUInt32LE=function(h,p,m){return h=+h,p>>>=0,m||q(this,h,p,4,4294967295,0),this[p+3]=h>>>24,this[p+2]=h>>>16,this[p+1]=h>>>8,this[p]=255&h,p+4},l.prototype.writeUInt32BE=function(h,p,m){return h=+h,p>>>=0,m||q(this,h,p,4,4294967295,0),this[p]=h>>>24,this[p+1]=h>>>16,this[p+2]=h>>>8,this[p+3]=255&h,p+4},l.prototype.writeIntLE=function(h,p,m,R){if(h=+h,p>>>=0,!R){var I=r(2,8*m-1);q(this,h,p,m,I-1,-I)}var O=0,$=1,pe=0;for(this[p]=255&h;++O<m&&($*=256);)0>h&&pe===0&&this[p+O-1]!==0&&(pe=1),this[p+O]=255&(h/$>>0)-pe;return p+m},l.prototype.writeIntBE=function(h,p,m,R){if(h=+h,p>>>=0,!R){var I=r(2,8*m-1);q(this,h,p,m,I-1,-I)}var O=m-1,$=1,pe=0;for(this[p+O]=255&h;0<=--O&&($*=256);)0>h&&pe===0&&this[p+O+1]!==0&&(pe=1),this[p+O]=255&(h/$>>0)-pe;return p+m},l.prototype.writeInt8=function(h,p,m){return h=+h,p>>>=0,m||q(this,h,p,1,127,-128),0>h&&(h=255+h+1),this[p]=255&h,p+1},l.prototype.writeInt16LE=function(h,p,m){return h=+h,p>>>=0,m||q(this,h,p,2,32767,-32768),this[p]=255&h,this[p+1]=h>>>8,p+2},l.prototype.writeInt16BE=function(h,p,m){return h=+h,p>>>=0,m||q(this,h,p,2,32767,-32768),this[p]=h>>>8,this[p+1]=255&h,p+2},l.prototype.writeInt32LE=function(h,p,m){return h=+h,p>>>=0,m||q(this,h,p,4,2147483647,-2147483648),this[p]=255&h,this[p+1]=h>>>8,this[p+2]=h>>>16,this[p+3]=h>>>24,p+4},l.prototype.writeInt32BE=function(h,p,m){return h=+h,p>>>=0,m||q(this,h,p,4,2147483647,-2147483648),0>h&&(h=4294967295+h+1),this[p]=h>>>24,this[p+1]=h>>>16,this[p+2]=h>>>8,this[p+3]=255&h,p+4},l.prototype.writeFloatLE=function(h,p,m){return ge(this,h,p,!0,m)},l.prototype.writeFloatBE=function(h,p,m){return ge(this,h,p,!1,m)},l.prototype.writeDoubleLE=function(h,p,m){return De(this,h,p,!0,m)},l.prototype.writeDoubleBE=function(h,p,m){return De(this,h,p,!1,m)},l.prototype.copy=function(h,p,m,R){if(!l.isBuffer(h))throw new TypeError("argument should be a Buffer");if(m||(m=0),R||R===0||(R=this.length),p>=h.length&&(p=h.length),p||(p=0),0<R&&R<m&&(R=m),R===m||h.length===0||this.length===0)return 0;if(0>p)throw new RangeError("targetStart out of bounds");if(0>m||m>=this.length)throw new RangeError("Index out of range");if(0>R)throw new RangeError("sourceEnd out of bounds");R>this.length&&(R=this.length),h.length-p<R-m&&(R=h.length-p+m);var I=R-m;if(this===h&&typeof Uint8Array.prototype.copyWithin=="function")this.copyWithin(p,m,R);else if(this===h&&m<p&&p<R)for(var O=I-1;0<=O;--O)h[O+p]=this[O+m];else Uint8Array.prototype.set.call(h,this.subarray(m,R),p);return I},l.prototype.fill=function(h,p,m,R){if(typeof h=="string"){if(typeof p=="string"?(R=p,p=0,m=this.length):typeof m=="string"&&(R=m,m=this.length),R!==void 0&&typeof R!="string")throw new TypeError("encoding must be a string");if(typeof R=="string"&&!l.isEncoding(R))throw new TypeError("Unknown encoding: "+R);if(h.length===1){var I=h.charCodeAt(0);(R==="utf8"&&128>I||R==="latin1")&&(h=I)}}else typeof h=="number"&&(h&=255);if(0>p||this.length<p||this.length<m)throw new RangeError("Out of range index");if(m<=p)return this;p>>>=0,m=m===void 0?this.length:m>>>0,h||(h=0);var O;if(typeof h=="number")for(O=p;O<m;++O)this[O]=h;else{var $=l.isBuffer(h)?h:l.from(h,R),pe=$.length;if(pe===0)throw new TypeError('The value "'+h+'" is invalid for argument "value"');for(O=0;O<m-p;++O)this[O+p]=$[O%pe]}return this};var L=/[^+/0-9A-Za-z-_]/g}).call(this)}).call(this,s("buffer").Buffer)},{"base64-js":1,buffer:3,ieee754:9}],4:[function(s,a,o){(function(c){(function(){function u(){let l;try{l=o.storage.getItem("debug")}catch{}return!l&&typeof c<"u"&&"env"in c&&(l=c.env.DEBUG),l}o.formatArgs=function(l){if(l[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+l[0]+(this.useColors?"%c ":" ")+"+"+a.exports.humanize(this.diff),!this.useColors)return;const d="color: "+this.color;l.splice(1,0,d,"color: inherit");let g=0,v=0;l[0].replace(/%[a-zA-Z%]/g,b=>{b==="%%"||(g++,b==="%c"&&(v=g))}),l.splice(v,0,d)},o.save=function(l){try{l?o.storage.setItem("debug",l):o.storage.removeItem("debug")}catch{}},o.load=u,o.useColors=function(){return!!(typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))||!(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&(typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&31<=parseInt(RegExp.$1,10)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},o.storage=function(){try{return localStorage}catch{}}(),o.destroy=(()=>{let l=!1;return()=>{l||(l=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),o.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],o.log=console.debug||console.log||(()=>{}),a.exports=s("./common")(o);const{formatters:f}=a.exports;f.j=function(l){try{return JSON.stringify(l)}catch(d){return"[UnexpectedJSONParseError]: "+d.message}}}).call(this)}).call(this,s("_process"))},{"./common":5,_process:12}],5:[function(s,a){a.exports=function(o){function c(l){function d(...b){if(!d.enabled)return;const y=d,_=+new Date,C=_-(g||_);y.diff=C,y.prev=g,y.curr=_,g=_,b[0]=c.coerce(b[0]),typeof b[0]!="string"&&b.unshift("%O");let x=0;b[0]=b[0].replace(/%([a-zA-Z%])/g,(T,A)=>{if(T==="%%")return"%";x++;const M=c.formatters[A];if(typeof M=="function"){const D=b[x];T=M.call(y,D),b.splice(x,1),x--}return T}),c.formatArgs.call(y,b),(y.log||c.log).apply(y,b)}let g,v=null;return d.namespace=l,d.useColors=c.useColors(),d.color=c.selectColor(l),d.extend=u,d.destroy=c.destroy,Object.defineProperty(d,"enabled",{enumerable:!0,configurable:!1,get:()=>v===null?c.enabled(l):v,set:b=>{v=b}}),typeof c.init=="function"&&c.init(d),d}function u(l,d){const g=c(this.namespace+(typeof d>"u"?":":d)+l);return g.log=this.log,g}function f(l){return l.toString().substring(2,l.toString().length-2).replace(/\.\*\?$/,"*")}return c.debug=c,c.default=c,c.coerce=function(l){return l instanceof Error?l.stack||l.message:l},c.disable=function(){const l=[...c.names.map(f),...c.skips.map(f).map(d=>"-"+d)].join(",");return c.enable(""),l},c.enable=function(l){c.save(l),c.names=[],c.skips=[];let d;const g=(typeof l=="string"?l:"").split(/[\s,]+/),v=g.length;for(d=0;d<v;d++)g[d]&&(l=g[d].replace(/\*/g,".*?"),l[0]==="-"?c.skips.push(new RegExp("^"+l.substr(1)+"$")):c.names.push(new RegExp("^"+l+"$")))},c.enabled=function(l){if(l[l.length-1]==="*")return!0;let d,g;for(d=0,g=c.skips.length;d<g;d++)if(c.skips[d].test(l))return!1;for(d=0,g=c.names.length;d<g;d++)if(c.names[d].test(l))return!0;return!1},c.humanize=s("ms"),c.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(o).forEach(l=>{c[l]=o[l]}),c.names=[],c.skips=[],c.formatters={},c.selectColor=function(l){let d=0;for(let g=0;g<l.length;g++)d=(d<<5)-d+l.charCodeAt(g),d|=0;return c.colors[i(d)%c.colors.length]},c.enable(c.load()),c}},{ms:11}],6:[function(s,a){function o(c,u){for(const f in u)Object.defineProperty(c,f,{value:u[f],enumerable:!0,configurable:!0});return c}a.exports=function(c,u,f){if(!c||typeof c=="string")throw new TypeError("Please pass an Error to err-code");f||(f={}),typeof u=="object"&&(f=u,u=""),u&&(f.code=u);try{return o(c,f)}catch{f.message=c.message,f.stack=c.stack;const d=function(){};return d.prototype=Object.create(Object.getPrototypeOf(c)),o(new d,f)}}},{}],7:[function(s,a){function o(S){console&&console.warn&&console.warn(S)}function c(){c.init.call(this)}function u(S){if(typeof S!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof S)}function f(S){return S._maxListeners===void 0?c.defaultMaxListeners:S._maxListeners}function l(S,w,k,G){var N,Y,X;if(u(k),Y=S._events,Y===void 0?(Y=S._events=Object.create(null),S._eventsCount=0):(Y.newListener!==void 0&&(S.emit("newListener",w,k.listener?k.listener:k),Y=S._events),X=Y[w]),X===void 0)X=Y[w]=k,++S._eventsCount;else if(typeof X=="function"?X=Y[w]=G?[k,X]:[X,k]:G?X.unshift(k):X.push(k),N=f(S),0<N&&X.length>N&&!X.warned){X.warned=!0;var ie=new Error("Possible EventEmitter memory leak detected. "+X.length+" "+(w+" listeners added. Use emitter.setMaxListeners() to increase limit"));ie.name="MaxListenersExceededWarning",ie.emitter=S,ie.type=w,ie.count=X.length,o(ie)}return S}function d(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function g(S,w,k){var G={fired:!1,wrapFn:void 0,target:S,type:w,listener:k},N=d.bind(G);return N.listener=k,G.wrapFn=N,N}function v(S,w,k){var G=S._events;if(G===void 0)return[];var N=G[w];return N===void 0?[]:typeof N=="function"?k?[N.listener||N]:[N]:k?C(N):y(N,N.length)}function b(S){var w=this._events;if(w!==void 0){var k=w[S];if(typeof k=="function")return 1;if(k!==void 0)return k.length}return 0}function y(S,w){for(var k=Array(w),G=0;G<w;++G)k[G]=S[G];return k}function _(S,w){for(;w+1<S.length;w++)S[w]=S[w+1];S.pop()}function C(S){for(var w=Array(S.length),k=0;k<w.length;++k)w[k]=S[k].listener||S[k];return w}function x(S,w,k){typeof S.on=="function"&&E(S,"error",w,k)}function E(S,w,k,G){if(typeof S.on=="function")G.once?S.once(w,k):S.on(w,k);else if(typeof S.addEventListener=="function")S.addEventListener(w,function N(Y){G.once&&S.removeEventListener(w,N),k(Y)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof S)}var T,A=typeof Reflect=="object"?Reflect:null,M=A&&typeof A.apply=="function"?A.apply:function(S,w,k){return Function.prototype.apply.call(S,w,k)};T=A&&typeof A.ownKeys=="function"?A.ownKeys:Object.getOwnPropertySymbols?function(S){return Object.getOwnPropertyNames(S).concat(Object.getOwnPropertySymbols(S))}:function(S){return Object.getOwnPropertyNames(S)};var D=Number.isNaN||function(S){return S!==S};a.exports=c,a.exports.once=function(S,w){return new Promise(function(k,G){function N(X){S.removeListener(w,Y),G(X)}function Y(){typeof S.removeListener=="function"&&S.removeListener("error",N),k([].slice.call(arguments))}E(S,w,Y,{once:!0}),w!=="error"&&x(S,N,{once:!0})})},c.EventEmitter=c,c.prototype._events=void 0,c.prototype._eventsCount=0,c.prototype._maxListeners=void 0;var F=10;Object.defineProperty(c,"defaultMaxListeners",{enumerable:!0,get:function(){return F},set:function(S){if(typeof S!="number"||0>S||D(S))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+S+".");F=S}}),c.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},c.prototype.setMaxListeners=function(S){if(typeof S!="number"||0>S||D(S))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+S+".");return this._maxListeners=S,this},c.prototype.getMaxListeners=function(){return f(this)},c.prototype.emit=function(S){for(var w=[],k=1;k<arguments.length;k++)w.push(arguments[k]);var G=S==="error",N=this._events;if(N!==void 0)G=G&&N.error===void 0;else if(!G)return!1;if(G){var Y;if(0<w.length&&(Y=w[0]),Y instanceof Error)throw Y;var X=new Error("Unhandled error."+(Y?" ("+Y.message+")":""));throw X.context=Y,X}var ie=N[S];if(ie===void 0)return!1;if(typeof ie=="function")M(ie,this,w);else for(var ee=ie.length,K=y(ie,ee),k=0;k<ee;++k)M(K[k],this,w);return!0},c.prototype.addListener=function(S,w){return l(this,S,w,!1)},c.prototype.on=c.prototype.addListener,c.prototype.prependListener=function(S,w){return l(this,S,w,!0)},c.prototype.once=function(S,w){return u(w),this.on(S,g(this,S,w)),this},c.prototype.prependOnceListener=function(S,w){return u(w),this.prependListener(S,g(this,S,w)),this},c.prototype.removeListener=function(S,w){var k,G,N,Y,X;if(u(w),G=this._events,G===void 0)return this;if(k=G[S],k===void 0)return this;if(k===w||k.listener===w)--this._eventsCount==0?this._events=Object.create(null):(delete G[S],G.removeListener&&this.emit("removeListener",S,k.listener||w));else if(typeof k!="function"){for(N=-1,Y=k.length-1;0<=Y;Y--)if(k[Y]===w||k[Y].listener===w){X=k[Y].listener,N=Y;break}if(0>N)return this;N===0?k.shift():_(k,N),k.length===1&&(G[S]=k[0]),G.removeListener!==void 0&&this.emit("removeListener",S,X||w)}return this},c.prototype.off=c.prototype.removeListener,c.prototype.removeAllListeners=function(S){var w,k,G;if(k=this._events,k===void 0)return this;if(k.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):k[S]!==void 0&&(--this._eventsCount==0?this._events=Object.create(null):delete k[S]),this;if(arguments.length===0){var N,Y=Object.keys(k);for(G=0;G<Y.length;++G)N=Y[G],N!=="removeListener"&&this.removeAllListeners(N);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(w=k[S],typeof w=="function")this.removeListener(S,w);else if(w!==void 0)for(G=w.length-1;0<=G;G--)this.removeListener(S,w[G]);return this},c.prototype.listeners=function(S){return v(this,S,!0)},c.prototype.rawListeners=function(S){return v(this,S,!1)},c.listenerCount=function(S,w){return typeof S.listenerCount=="function"?S.listenerCount(w):b.call(S,w)},c.prototype.listenerCount=b,c.prototype.eventNames=function(){return 0<this._eventsCount?T(this._events):[]}},{}],8:[function(s,a){a.exports=function(){if(typeof globalThis>"u")return null;var o={RTCPeerConnection:globalThis.RTCPeerConnection||globalThis.mozRTCPeerConnection||globalThis.webkitRTCPeerConnection,RTCSessionDescription:globalThis.RTCSessionDescription||globalThis.mozRTCSessionDescription||globalThis.webkitRTCSessionDescription,RTCIceCandidate:globalThis.RTCIceCandidate||globalThis.mozRTCIceCandidate||globalThis.webkitRTCIceCandidate};return o.RTCPeerConnection?o:null}},{}],9:[function(s,a,o){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */o.read=function(c,u,f,l,d){var g,v,b=8*d-l-1,y=(1<<b)-1,_=y>>1,C=-7,x=f?d-1:0,E=f?-1:1,T=c[u+x];for(x+=E,g=T&(1<<-C)-1,T>>=-C,C+=b;0<C;g=256*g+c[u+x],x+=E,C-=8);for(v=g&(1<<-C)-1,g>>=-C,C+=l;0<C;v=256*v+c[u+x],x+=E,C-=8);if(g===0)g=1-_;else{if(g===y)return v?NaN:(T?-1:1)*(1/0);v+=r(2,l),g-=_}return(T?-1:1)*v*r(2,g-l)},o.write=function(c,u,f,l,d,g){var v,b,y,_=Math.LN2,C=Math.log,x=8*g-d-1,E=(1<<x)-1,T=E>>1,A=d===23?r(2,-24)-r(2,-77):0,M=l?0:g-1,D=l?1:-1,F=0>u||u===0&&0>1/u?1:0;for(u=i(u),isNaN(u)||u===1/0?(b=isNaN(u)?1:0,v=E):(v=t(C(u)/_),1>u*(y=r(2,-v))&&(v--,y*=2),u+=1<=v+T?A/y:A*r(2,1-T),2<=u*y&&(v++,y/=2),v+T>=E?(b=0,v=E):1<=v+T?(b=(u*y-1)*r(2,d),v+=T):(b=u*r(2,T-1)*r(2,d),v=0));8<=d;c[f+M]=255&b,M+=D,b/=256,d-=8);for(v=v<<d|b,x+=d;0<x;c[f+M]=255&v,M+=D,v/=256,x-=8);c[f+M-D]|=128*F}},{}],10:[function(s,a){a.exports=typeof Object.create=="function"?function(o,c){c&&(o.super_=c,o.prototype=Object.create(c.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}))}:function(o,c){if(c){o.super_=c;var u=function(){};u.prototype=c.prototype,o.prototype=new u,o.prototype.constructor=o}}},{}],11:[function(s,a){var o=Math.round;function c(d){if(d+="",!(100<d.length)){var g=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(d);if(g){var v=parseFloat(g[1]),b=(g[2]||"ms").toLowerCase();return b==="years"||b==="year"||b==="yrs"||b==="yr"||b==="y"?315576e5*v:b==="weeks"||b==="week"||b==="w"?6048e5*v:b==="days"||b==="day"||b==="d"?864e5*v:b==="hours"||b==="hour"||b==="hrs"||b==="hr"||b==="h"?36e5*v:b==="minutes"||b==="minute"||b==="mins"||b==="min"||b==="m"?6e4*v:b==="seconds"||b==="second"||b==="secs"||b==="sec"||b==="s"?1e3*v:b==="milliseconds"||b==="millisecond"||b==="msecs"||b==="msec"||b==="ms"?v:void 0}}}function u(d){var g=i(d);return 864e5<=g?o(d/864e5)+"d":36e5<=g?o(d/36e5)+"h":6e4<=g?o(d/6e4)+"m":1e3<=g?o(d/1e3)+"s":d+"ms"}function f(d){var g=i(d);return 864e5<=g?l(d,g,864e5,"day"):36e5<=g?l(d,g,36e5,"hour"):6e4<=g?l(d,g,6e4,"minute"):1e3<=g?l(d,g,1e3,"second"):d+" ms"}function l(d,g,v,b){return o(d/v)+" "+b+(g>=1.5*v?"s":"")}a.exports=function(d,g){g=g||{};var v=typeof d;if(v=="string"&&0<d.length)return c(d);if(v==="number"&&isFinite(d))return g.long?f(d):u(d);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(d))}},{}],12:[function(s,a){function o(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function u(A){if(b===setTimeout)return setTimeout(A,0);if((b===o||!b)&&setTimeout)return b=setTimeout,setTimeout(A,0);try{return b(A,0)}catch{try{return b.call(null,A,0)}catch{return b.call(this,A,0)}}}function f(A){if(y===clearTimeout)return clearTimeout(A);if((y===c||!y)&&clearTimeout)return y=clearTimeout,clearTimeout(A);try{return y(A)}catch{try{return y.call(null,A)}catch{return y.call(this,A)}}}function l(){E&&C&&(E=!1,C.length?x=C.concat(x):T=-1,x.length&&d())}function d(){if(!E){var A=u(l);E=!0;for(var M=x.length;M;){for(C=x,x=[];++T<M;)C&&C[T].run();T=-1,M=x.length}C=null,E=!1,f(A)}}function g(A,M){this.fun=A,this.array=M}function v(){}var b,y,_=a.exports={};(function(){try{b=typeof setTimeout=="function"?setTimeout:o}catch{b=o}try{y=typeof clearTimeout=="function"?clearTimeout:c}catch{y=c}})();var C,x=[],E=!1,T=-1;_.nextTick=function(A){var M=Array(arguments.length-1);if(1<arguments.length)for(var D=1;D<arguments.length;D++)M[D-1]=arguments[D];x.push(new g(A,M)),x.length!==1||E||u(d)},g.prototype.run=function(){this.fun.apply(null,this.array)},_.title="browser",_.browser=!0,_.env={},_.argv=[],_.version="",_.versions={},_.on=v,_.addListener=v,_.once=v,_.off=v,_.removeListener=v,_.removeAllListeners=v,_.emit=v,_.prependListener=v,_.prependOnceListener=v,_.listeners=function(){return[]},_.binding=function(){throw new Error("process.binding is not supported")},_.cwd=function(){return"/"},_.chdir=function(){throw new Error("process.chdir is not supported")},_.umask=function(){return 0}},{}],13:[function(s,a){(function(o){(function(){/*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */let c;a.exports=typeof queueMicrotask=="function"?queueMicrotask.bind(typeof window>"u"?o:window):u=>(c||(c=Promise.resolve())).then(u).catch(f=>setTimeout(()=>{throw f},0))}).call(this)}).call(this,typeof fn>"u"?typeof self>"u"?typeof window>"u"?{}:window:self:fn)},{}],14:[function(s,a){(function(o,c){(function(){var u=s("safe-buffer").Buffer,f=c.crypto||c.msCrypto;a.exports=f&&f.getRandomValues?function(l,d){if(l>4294967295)throw new RangeError("requested too many random bytes");var g=u.allocUnsafe(l);if(0<l)if(65536<l)for(var v=0;v<l;v+=65536)f.getRandomValues(g.slice(v,v+65536));else f.getRandomValues(g);return typeof d=="function"?o.nextTick(function(){d(null,g)}):g}:function(){throw new Error(`Secure random number generation is not supported by this browser.
Use Chrome, Firefox or Internet Explorer 11`)}}).call(this)}).call(this,s("_process"),typeof fn>"u"?typeof self>"u"?typeof window>"u"?{}:window:self:fn)},{_process:12,"safe-buffer":30}],15:[function(s,a){function o(v,b){v.prototype=Object.create(b.prototype),v.prototype.constructor=v,v.__proto__=b}function c(v,b,y){function _(x,E,T){return typeof b=="string"?b:b(x,E,T)}y||(y=Error);var C=function(x){function E(T,A,M){return x.call(this,_(T,A,M))||this}return o(E,x),E}(y);C.prototype.name=y.name,C.prototype.code=v,g[v]=C}function u(v,b){if(Array.isArray(v)){var y=v.length;return v=v.map(function(_){return _+""}),2<y?"one of ".concat(b," ").concat(v.slice(0,y-1).join(", "),", or ")+v[y-1]:y===2?"one of ".concat(b," ").concat(v[0]," or ").concat(v[1]):"of ".concat(b," ").concat(v[0])}return"of ".concat(b," ").concat(v+"")}function f(v,b,y){return v.substr(0,b.length)===b}function l(v,b,y){return(y===void 0||y>v.length)&&(y=v.length),v.substring(y-b.length,y)===b}function d(v,b,y){return typeof y!="number"&&(y=0),!(y+b.length>v.length)&&v.indexOf(b,y)!==-1}var g={};c("ERR_INVALID_OPT_VALUE",function(v,b){return'The value "'+b+'" is invalid for option "'+v+'"'},TypeError),c("ERR_INVALID_ARG_TYPE",function(v,b,y){var _;typeof b=="string"&&f(b,"not ")?(_="must not be",b=b.replace(/^not /,"")):_="must be";var C;if(l(v," argument"))C="The ".concat(v," ").concat(_," ").concat(u(b,"type"));else{var x=d(v,".")?"property":"argument";C='The "'.concat(v,'" ').concat(x," ").concat(_," ").concat(u(b,"type"))}return C+=". Received type ".concat(typeof y),C},TypeError),c("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF"),c("ERR_METHOD_NOT_IMPLEMENTED",function(v){return"The "+v+" method is not implemented"}),c("ERR_STREAM_PREMATURE_CLOSE","Premature close"),c("ERR_STREAM_DESTROYED",function(v){return"Cannot call "+v+" after a stream was destroyed"}),c("ERR_MULTIPLE_CALLBACK","Callback called multiple times"),c("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable"),c("ERR_STREAM_WRITE_AFTER_END","write after end"),c("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError),c("ERR_UNKNOWN_ENCODING",function(v){return"Unknown encoding: "+v},TypeError),c("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event"),a.exports.codes=g},{}],16:[function(s,a){(function(o){(function(){function c(_){return this instanceof c?(d.call(this,_),g.call(this,_),this.allowHalfOpen=!0,void(_&&(_.readable===!1&&(this.readable=!1),_.writable===!1&&(this.writable=!1),_.allowHalfOpen===!1&&(this.allowHalfOpen=!1,this.once("end",u))))):new c(_)}function u(){this._writableState.ended||o.nextTick(f,this)}function f(_){_.end()}var l=Object.keys||function(_){var C=[];for(var x in _)C.push(x);return C};a.exports=c;var d=s("./_stream_readable"),g=s("./_stream_writable");s("inherits")(c,d);for(var v,b=l(g.prototype),y=0;y<b.length;y++)v=b[y],c.prototype[v]||(c.prototype[v]=g.prototype[v]);Object.defineProperty(c.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(c.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(c.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(c.prototype,"destroyed",{enumerable:!1,get:function(){return this._readableState!==void 0&&this._writableState!==void 0&&this._readableState.destroyed&&this._writableState.destroyed},set:function(_){this._readableState===void 0||this._writableState===void 0||(this._readableState.destroyed=_,this._writableState.destroyed=_)}})}).call(this)}).call(this,s("_process"))},{"./_stream_readable":18,"./_stream_writable":20,_process:12,inherits:10}],17:[function(s,a){function o(u){return this instanceof o?void c.call(this,u):new o(u)}a.exports=o;var c=s("./_stream_transform");s("inherits")(o,c),o.prototype._transform=function(u,f,l){l(null,u)}},{"./_stream_transform":19,inherits:10}],18:[function(s,a){(function(o,c){(function(){function u(L){return ve.from(L)}function f(L){return ve.isBuffer(L)||L instanceof Ee}function l(L,h,p){return typeof L.prependListener=="function"?L.prependListener(h,p):void(L._events&&L._events[h]?Array.isArray(L._events[h])?L._events[h].unshift(p):L._events[h]=[p,L._events[h]]:L.on(h,p))}function d(L,h,p){ee=ee||s("./_stream_duplex"),L=L||{},typeof p!="boolean"&&(p=h instanceof ee),this.objectMode=!!L.objectMode,p&&(this.objectMode=this.objectMode||!!L.readableObjectMode),this.highWaterMark=Ie(this,L,"readableHighWaterMark",p),this.buffer=new Ce,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.paused=!0,this.emitClose=L.emitClose!==!1,this.autoDestroy=!!L.autoDestroy,this.destroyed=!1,this.defaultEncoding=L.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,L.encoding&&(!ce&&(ce=s("string_decoder/").StringDecoder),this.decoder=new ce(L.encoding),this.encoding=L.encoding)}function g(L){if(ee=ee||s("./_stream_duplex"),!(this instanceof g))return new g(L);var h=this instanceof ee;this._readableState=new d(L,this,h),this.readable=!0,L&&(typeof L.read=="function"&&(this._read=L.read),typeof L.destroy=="function"&&(this._destroy=L.destroy)),he.call(this)}function v(L,h,p,m,R){K("readableAddChunk",h);var I=L._readableState;if(h===null)I.reading=!1,x(L,I);else{var O;if(R||(O=y(I,h)),O)ne(L,O);else if(!(I.objectMode||h&&0<h.length))m||(I.reading=!1,A(L,I));else if(typeof h=="string"||I.objectMode||Object.getPrototypeOf(h)===ve.prototype||(h=u(h)),m)I.endEmitted?ne(L,new H):b(L,I,h,!0);else if(I.ended)ne(L,new Me);else{if(I.destroyed)return!1;I.reading=!1,I.decoder&&!p?(h=I.decoder.write(h),I.objectMode||h.length!==0?b(L,I,h,!1):A(L,I)):b(L,I,h,!1)}}return!I.ended&&(I.length<I.highWaterMark||I.length===0)}function b(L,h,p,m){h.flowing&&h.length===0&&!h.sync?(h.awaitDrain=0,L.emit("data",p)):(h.length+=h.objectMode?1:p.length,m?h.buffer.unshift(p):h.buffer.push(p),h.needReadable&&E(L)),A(L,h)}function y(L,h){var p;return f(h)||typeof h=="string"||h===void 0||L.objectMode||(p=new Ke("chunk",["string","Buffer","Uint8Array"],h)),p}function _(L){return 1073741824<=L?L=1073741824:(L--,L|=L>>>1,L|=L>>>2,L|=L>>>4,L|=L>>>8,L|=L>>>16,L++),L}function C(L,h){return 0>=L||h.length===0&&h.ended?0:h.objectMode?1:L===L?(L>h.highWaterMark&&(h.highWaterMark=_(L)),L<=h.length?L:h.ended?h.length:(h.needReadable=!0,0)):h.flowing&&h.length?h.buffer.head.data.length:h.length}function x(L,h){if(K("onEofChunk"),!h.ended){if(h.decoder){var p=h.decoder.end();p&&p.length&&(h.buffer.push(p),h.length+=h.objectMode?1:p.length)}h.ended=!0,h.sync?E(L):(h.needReadable=!1,!h.emittedReadable&&(h.emittedReadable=!0,T(L)))}}function E(L){var h=L._readableState;K("emitReadable",h.needReadable,h.emittedReadable),h.needReadable=!1,h.emittedReadable||(K("emitReadable",h.flowing),h.emittedReadable=!0,o.nextTick(T,L))}function T(L){var h=L._readableState;K("emitReadable_",h.destroyed,h.length,h.ended),!h.destroyed&&(h.length||h.ended)&&(L.emit("readable"),h.emittedReadable=!1),h.needReadable=!h.flowing&&!h.ended&&h.length<=h.highWaterMark,G(L)}function A(L,h){h.readingMore||(h.readingMore=!0,o.nextTick(M,L,h))}function M(L,h){for(;!h.reading&&!h.ended&&(h.length<h.highWaterMark||h.flowing&&h.length===0);){var p=h.length;if(K("maybeReadMore read 0"),L.read(0),p===h.length)break}h.readingMore=!1}function D(L){return function(){var h=L._readableState;K("pipeOnDrain",h.awaitDrain),h.awaitDrain&&h.awaitDrain--,h.awaitDrain===0&&ae(L,"data")&&(h.flowing=!0,G(L))}}function F(L){var h=L._readableState;h.readableListening=0<L.listenerCount("readable"),h.resumeScheduled&&!h.paused?h.flowing=!0:0<L.listenerCount("data")&&L.resume()}function S(L){K("readable nexttick read 0"),L.read(0)}function w(L,h){h.resumeScheduled||(h.resumeScheduled=!0,o.nextTick(k,L,h))}function k(L,h){K("resume",h.reading),h.reading||L.read(0),h.resumeScheduled=!1,L.emit("resume"),G(L),h.flowing&&!h.reading&&L.read(0)}function G(L){var h=L._readableState;for(K("flow",h.flowing);h.flowing&&L.read()!==null;);}function N(L,h){if(h.length===0)return null;var p;return h.objectMode?p=h.buffer.shift():!L||L>=h.length?(p=h.decoder?h.buffer.join(""):h.buffer.length===1?h.buffer.first():h.buffer.concat(h.length),h.buffer.clear()):p=h.buffer.consume(L,h.decoder),p}function Y(L){var h=L._readableState;K("endReadable",h.endEmitted),h.endEmitted||(h.ended=!0,o.nextTick(X,h,L))}function X(L,h){if(K("endReadableNT",L.endEmitted,L.length),!L.endEmitted&&L.length===0&&(L.endEmitted=!0,h.readable=!1,h.emit("end"),L.autoDestroy)){var p=h._writableState;(!p||p.autoDestroy&&p.finished)&&h.destroy()}}function ie(L,h){for(var p=0,m=L.length;p<m;p++)if(L[p]===h)return p;return-1}a.exports=g;var ee;g.ReadableState=d;var K;s("events").EventEmitter;var ae=function(L,h){return L.listeners(h).length},he=s("./internal/streams/stream"),ve=s("buffer").Buffer,Ee=c.Uint8Array||function(){},q=s("util");K=q&&q.debuglog?q.debuglog("stream"):function(){};var ce,ge,De,Ce=s("./internal/streams/buffer_list"),xe=s("./internal/streams/destroy"),He=s("./internal/streams/state"),Ie=He.getHighWaterMark,V=s("../errors").codes,Ke=V.ERR_INVALID_ARG_TYPE,Me=V.ERR_STREAM_PUSH_AFTER_EOF,z=V.ERR_METHOD_NOT_IMPLEMENTED,H=V.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;s("inherits")(g,he);var ne=xe.errorOrDestroy,le=["error","close","destroy","pause","resume"];Object.defineProperty(g.prototype,"destroyed",{enumerable:!1,get:function(){return this._readableState!==void 0&&this._readableState.destroyed},set:function(L){this._readableState&&(this._readableState.destroyed=L)}}),g.prototype.destroy=xe.destroy,g.prototype._undestroy=xe.undestroy,g.prototype._destroy=function(L,h){h(L)},g.prototype.push=function(L,h){var p,m=this._readableState;return m.objectMode?p=!0:typeof L=="string"&&(h=h||m.defaultEncoding,h!==m.encoding&&(L=ve.from(L,h),h=""),p=!0),v(this,L,h,!1,p)},g.prototype.unshift=function(L){return v(this,L,null,!0,!1)},g.prototype.isPaused=function(){return this._readableState.flowing===!1},g.prototype.setEncoding=function(L){ce||(ce=s("string_decoder/").StringDecoder);var h=new ce(L);this._readableState.decoder=h,this._readableState.encoding=this._readableState.decoder.encoding;for(var p=this._readableState.buffer.head,m="";p!==null;)m+=h.write(p.data),p=p.next;return this._readableState.buffer.clear(),m!==""&&this._readableState.buffer.push(m),this._readableState.length=m.length,this},g.prototype.read=function(L){K("read",L),L=parseInt(L,10);var h=this._readableState,p=L;if(L!==0&&(h.emittedReadable=!1),L===0&&h.needReadable&&((h.highWaterMark===0?0<h.length:h.length>=h.highWaterMark)||h.ended))return K("read: emitReadable",h.length,h.ended),h.length===0&&h.ended?Y(this):E(this),null;if(L=C(L,h),L===0&&h.ended)return h.length===0&&Y(this),null;var m=h.needReadable;K("need readable",m),(h.length===0||h.length-L<h.highWaterMark)&&(m=!0,K("length less than watermark",m)),h.ended||h.reading?(m=!1,K("reading or ended",m)):m&&(K("do read"),h.reading=!0,h.sync=!0,h.length===0&&(h.needReadable=!0),this._read(h.highWaterMark),h.sync=!1,!h.reading&&(L=C(p,h)));var R;return R=0<L?N(L,h):null,R===null?(h.needReadable=h.length<=h.highWaterMark,L=0):(h.length-=L,h.awaitDrain=0),h.length===0&&(!h.ended&&(h.needReadable=!0),p!==L&&h.ended&&Y(this)),R!==null&&this.emit("data",R),R},g.prototype._read=function(){ne(this,new z("_read()"))},g.prototype.pipe=function(L,h){function p(Te,Se){K("onunpipe"),Te===re&&Se&&Se.hasUnpiped===!1&&(Se.hasUnpiped=!0,R())}function m(){K("onend"),L.end()}function R(){K("cleanup"),L.removeListener("close",$),L.removeListener("finish",pe),L.removeListener("drain",Ze),L.removeListener("error",O),L.removeListener("unpipe",p),re.removeListener("end",m),re.removeListener("end",_e),re.removeListener("data",I),Oe=!0,se.awaitDrain&&(!L._writableState||L._writableState.needDrain)&&Ze()}function I(Te){K("ondata");var Se=L.write(Te);K("dest.write",Se),Se===!1&&((se.pipesCount===1&&se.pipes===L||1<se.pipesCount&&ie(se.pipes,L)!==-1)&&!Oe&&(K("false write response, pause",se.awaitDrain),se.awaitDrain++),re.pause())}function O(Te){K("onerror",Te),_e(),L.removeListener("error",O),ae(L,"error")===0&&ne(L,Te)}function $(){L.removeListener("finish",pe),_e()}function pe(){K("onfinish"),L.removeListener("close",$),_e()}function _e(){K("unpipe"),re.unpipe(L)}var re=this,se=this._readableState;switch(se.pipesCount){case 0:se.pipes=L;break;case 1:se.pipes=[se.pipes,L];break;default:se.pipes.push(L)}se.pipesCount+=1,K("pipe count=%d opts=%j",se.pipesCount,h);var we=(!h||h.end!==!1)&&L!==o.stdout&&L!==o.stderr,de=we?m:_e;se.endEmitted?o.nextTick(de):re.once("end",de),L.on("unpipe",p);var Ze=D(re);L.on("drain",Ze);var Oe=!1;return re.on("data",I),l(L,"error",O),L.once("close",$),L.once("finish",pe),L.emit("pipe",re),se.flowing||(K("pipe resume"),re.resume()),L},g.prototype.unpipe=function(L){var h=this._readableState,p={hasUnpiped:!1};if(h.pipesCount===0)return this;if(h.pipesCount===1)return L&&L!==h.pipes?this:(L||(L=h.pipes),h.pipes=null,h.pipesCount=0,h.flowing=!1,L&&L.emit("unpipe",this,p),this);if(!L){var m=h.pipes,R=h.pipesCount;h.pipes=null,h.pipesCount=0,h.flowing=!1;for(var I=0;I<R;I++)m[I].emit("unpipe",this,{hasUnpiped:!1});return this}var O=ie(h.pipes,L);return O===-1?this:(h.pipes.splice(O,1),h.pipesCount-=1,h.pipesCount===1&&(h.pipes=h.pipes[0]),L.emit("unpipe",this,p),this)},g.prototype.on=function(L,h){var p=he.prototype.on.call(this,L,h),m=this._readableState;return L==="data"?(m.readableListening=0<this.listenerCount("readable"),m.flowing!==!1&&this.resume()):L=="readable"&&!m.endEmitted&&!m.readableListening&&(m.readableListening=m.needReadable=!0,m.flowing=!1,m.emittedReadable=!1,K("on readable",m.length,m.reading),m.length?E(this):!m.reading&&o.nextTick(S,this)),p},g.prototype.addListener=g.prototype.on,g.prototype.removeListener=function(L,h){var p=he.prototype.removeListener.call(this,L,h);return L==="readable"&&o.nextTick(F,this),p},g.prototype.removeAllListeners=function(L){var h=he.prototype.removeAllListeners.apply(this,arguments);return(L==="readable"||L===void 0)&&o.nextTick(F,this),h},g.prototype.resume=function(){var L=this._readableState;return L.flowing||(K("resume"),L.flowing=!L.readableListening,w(this,L)),L.paused=!1,this},g.prototype.pause=function(){return K("call pause flowing=%j",this._readableState.flowing),this._readableState.flowing!==!1&&(K("pause"),this._readableState.flowing=!1,this.emit("pause")),this._readableState.paused=!0,this},g.prototype.wrap=function(L){var h=this,p=this._readableState,m=!1;for(var R in L.on("end",function(){if(K("wrapped end"),p.decoder&&!p.ended){var O=p.decoder.end();O&&O.length&&h.push(O)}h.push(null)}),L.on("data",function(O){if(K("wrapped data"),p.decoder&&(O=p.decoder.write(O)),!(p.objectMode&&O==null)&&(p.objectMode||O&&O.length)){var $=h.push(O);$||(m=!0,L.pause())}}),L)this[R]===void 0&&typeof L[R]=="function"&&(this[R]=function(O){return function(){return L[O].apply(L,arguments)}}(R));for(var I=0;I<le.length;I++)L.on(le[I],this.emit.bind(this,le[I]));return this._read=function(O){K("wrapped _read",O),m&&(m=!1,L.resume())},this},typeof Symbol=="function"&&(g.prototype[Symbol.asyncIterator]=function(){return ge===void 0&&(ge=s("./internal/streams/async_iterator")),ge(this)}),Object.defineProperty(g.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}}),Object.defineProperty(g.prototype,"readableBuffer",{enumerable:!1,get:function(){return this._readableState&&this._readableState.buffer}}),Object.defineProperty(g.prototype,"readableFlowing",{enumerable:!1,get:function(){return this._readableState.flowing},set:function(L){this._readableState&&(this._readableState.flowing=L)}}),g._fromList=N,Object.defineProperty(g.prototype,"readableLength",{enumerable:!1,get:function(){return this._readableState.length}}),typeof Symbol=="function"&&(g.from=function(L,h){return De===void 0&&(De=s("./internal/streams/from")),De(g,L,h)})}).call(this)}).call(this,s("_process"),typeof fn>"u"?typeof self>"u"?typeof window>"u"?{}:window:self:fn)},{"../errors":15,"./_stream_duplex":16,"./internal/streams/async_iterator":21,"./internal/streams/buffer_list":22,"./internal/streams/destroy":23,"./internal/streams/from":25,"./internal/streams/state":27,"./internal/streams/stream":28,_process:12,buffer:3,events:7,inherits:10,"string_decoder/":31,util:2}],19:[function(s,a){function o(_,C){var x=this._transformState;x.transforming=!1;var E=x.writecb;if(E===null)return this.emit("error",new g);x.writechunk=null,x.writecb=null,C!=null&&this.push(C),E(_);var T=this._readableState;T.reading=!1,(T.needReadable||T.length<T.highWaterMark)&&this._read(T.highWaterMark)}function c(_){return this instanceof c?(y.call(this,_),this._transformState={afterTransform:o.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,_&&(typeof _.transform=="function"&&(this._transform=_.transform),typeof _.flush=="function"&&(this._flush=_.flush)),void this.on("prefinish",u)):new c(_)}function u(){var _=this;typeof this._flush!="function"||this._readableState.destroyed?f(this,null,null):this._flush(function(C,x){f(_,C,x)})}function f(_,C,x){if(C)return _.emit("error",C);if(x!=null&&_.push(x),_._writableState.length)throw new b;if(_._transformState.transforming)throw new v;return _.push(null)}a.exports=c;var l=s("../errors").codes,d=l.ERR_METHOD_NOT_IMPLEMENTED,g=l.ERR_MULTIPLE_CALLBACK,v=l.ERR_TRANSFORM_ALREADY_TRANSFORMING,b=l.ERR_TRANSFORM_WITH_LENGTH_0,y=s("./_stream_duplex");s("inherits")(c,y),c.prototype.push=function(_,C){return this._transformState.needTransform=!1,y.prototype.push.call(this,_,C)},c.prototype._transform=function(_,C,x){x(new d("_transform()"))},c.prototype._write=function(_,C,x){var E=this._transformState;if(E.writecb=x,E.writechunk=_,E.writeencoding=C,!E.transforming){var T=this._readableState;(E.needTransform||T.needReadable||T.length<T.highWaterMark)&&this._read(T.highWaterMark)}},c.prototype._read=function(){var _=this._transformState;_.writechunk===null||_.transforming?_.needTransform=!0:(_.transforming=!0,this._transform(_.writechunk,_.writeencoding,_.afterTransform))},c.prototype._destroy=function(_,C){y.prototype._destroy.call(this,_,function(x){C(x)})}},{"../errors":15,"./_stream_duplex":16,inherits:10}],20:[function(s,a){(function(o,c){(function(){function u(z){var H=this;this.next=null,this.entry=null,this.finish=function(){Y(H,z)}}function f(z){return K.from(z)}function l(z){return K.isBuffer(z)||z instanceof ae}function d(){}function g(z,H,ne){X=X||s("./_stream_duplex"),z=z||{},typeof ne!="boolean"&&(ne=H instanceof X),this.objectMode=!!z.objectMode,ne&&(this.objectMode=this.objectMode||!!z.writableObjectMode),this.highWaterMark=Ee(this,z,"writableHighWaterMark",ne),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var le=z.decodeStrings===!1;this.decodeStrings=!le,this.defaultEncoding=z.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(L){A(H,L)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.emitClose=z.emitClose!==!1,this.autoDestroy=!!z.autoDestroy,this.bufferedRequestCount=0,this.corkedRequestsFree=new u(this)}function v(z){X=X||s("./_stream_duplex");var H=this instanceof X;return H||Me.call(v,this)?(this._writableState=new g(z,this,H),this.writable=!0,z&&(typeof z.write=="function"&&(this._write=z.write),typeof z.writev=="function"&&(this._writev=z.writev),typeof z.destroy=="function"&&(this._destroy=z.destroy),typeof z.final=="function"&&(this._final=z.final)),void ee.call(this)):new v(z)}function b(z,H){var ne=new Ie;Ke(z,ne),o.nextTick(H,ne)}function y(z,H,ne,le){var L;return ne===null?L=new He:typeof ne!="string"&&!H.objectMode&&(L=new ce("chunk",["string","Buffer"],ne)),!L||(Ke(z,L),o.nextTick(le,L),!1)}function _(z,H,ne){return z.objectMode||z.decodeStrings===!1||typeof H!="string"||(H=K.from(H,ne)),H}function C(z,H,ne,le,L,h){if(!ne){var p=_(H,le,L);le!==p&&(ne=!0,L="buffer",le=p)}var m=H.objectMode?1:le.length;H.length+=m;var R=H.length<H.highWaterMark;if(R||(H.needDrain=!0),H.writing||H.corked){var I=H.lastBufferedRequest;H.lastBufferedRequest={chunk:le,encoding:L,isBuf:ne,callback:h,next:null},I?I.next=H.lastBufferedRequest:H.bufferedRequest=H.lastBufferedRequest,H.bufferedRequestCount+=1}else x(z,H,!1,m,le,L,h);return R}function x(z,H,ne,le,L,h,p){H.writelen=le,H.writecb=p,H.writing=!0,H.sync=!0,H.destroyed?H.onwrite(new xe("write")):ne?z._writev(L,H.onwrite):z._write(L,h,H.onwrite),H.sync=!1}function E(z,H,ne,le,L){--H.pendingcb,ne?(o.nextTick(L,le),o.nextTick(G,z,H),z._writableState.errorEmitted=!0,Ke(z,le)):(L(le),z._writableState.errorEmitted=!0,Ke(z,le),G(z,H))}function T(z){z.writing=!1,z.writecb=null,z.length-=z.writelen,z.writelen=0}function A(z,H){var ne=z._writableState,le=ne.sync,L=ne.writecb;if(typeof L!="function")throw new De;if(T(ne),H)E(z,ne,le,H,L);else{var h=S(ne)||z.destroyed;h||ne.corked||ne.bufferProcessing||!ne.bufferedRequest||F(z,ne),le?o.nextTick(M,z,ne,h,L):M(z,ne,h,L)}}function M(z,H,ne,le){ne||D(z,H),H.pendingcb--,le(),G(z,H)}function D(z,H){H.length===0&&H.needDrain&&(H.needDrain=!1,z.emit("drain"))}function F(z,H){H.bufferProcessing=!0;var ne=H.bufferedRequest;if(z._writev&&ne&&ne.next){var le=H.bufferedRequestCount,L=Array(le),h=H.corkedRequestsFree;h.entry=ne;for(var p=0,m=!0;ne;)L[p]=ne,ne.isBuf||(m=!1),ne=ne.next,p+=1;L.allBuffers=m,x(z,H,!0,H.length,L,"",h.finish),H.pendingcb++,H.lastBufferedRequest=null,h.next?(H.corkedRequestsFree=h.next,h.next=null):H.corkedRequestsFree=new u(H),H.bufferedRequestCount=0}else{for(;ne;){var R=ne.chunk,I=ne.encoding,O=ne.callback,$=H.objectMode?1:R.length;if(x(z,H,!1,$,R,I,O),ne=ne.next,H.bufferedRequestCount--,H.writing)break}ne===null&&(H.lastBufferedRequest=null)}H.bufferedRequest=ne,H.bufferProcessing=!1}function S(z){return z.ending&&z.length===0&&z.bufferedRequest===null&&!z.finished&&!z.writing}function w(z,H){z._final(function(ne){H.pendingcb--,ne&&Ke(z,ne),H.prefinished=!0,z.emit("prefinish"),G(z,H)})}function k(z,H){H.prefinished||H.finalCalled||(typeof z._final!="function"||H.destroyed?(H.prefinished=!0,z.emit("prefinish")):(H.pendingcb++,H.finalCalled=!0,o.nextTick(w,z,H)))}function G(z,H){var ne=S(H);if(ne&&(k(z,H),H.pendingcb===0&&(H.finished=!0,z.emit("finish"),H.autoDestroy))){var le=z._readableState;(!le||le.autoDestroy&&le.endEmitted)&&z.destroy()}return ne}function N(z,H,ne){H.ending=!0,G(z,H),ne&&(H.finished?o.nextTick(ne):z.once("finish",ne)),H.ended=!0,z.writable=!1}function Y(z,H,ne){var le=z.entry;for(z.entry=null;le;){var L=le.callback;H.pendingcb--,L(ne),le=le.next}H.corkedRequestsFree.next=z}a.exports=v;var X;v.WritableState=g;var ie={deprecate:s("util-deprecate")},ee=s("./internal/streams/stream"),K=s("buffer").Buffer,ae=c.Uint8Array||function(){},he=s("./internal/streams/destroy"),ve=s("./internal/streams/state"),Ee=ve.getHighWaterMark,q=s("../errors").codes,ce=q.ERR_INVALID_ARG_TYPE,ge=q.ERR_METHOD_NOT_IMPLEMENTED,De=q.ERR_MULTIPLE_CALLBACK,Ce=q.ERR_STREAM_CANNOT_PIPE,xe=q.ERR_STREAM_DESTROYED,He=q.ERR_STREAM_NULL_VALUES,Ie=q.ERR_STREAM_WRITE_AFTER_END,V=q.ERR_UNKNOWN_ENCODING,Ke=he.errorOrDestroy;s("inherits")(v,ee),g.prototype.getBuffer=function(){for(var z=this.bufferedRequest,H=[];z;)H.push(z),z=z.next;return H},function(){try{Object.defineProperty(g.prototype,"buffer",{get:ie.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch{}}();var Me;typeof Symbol=="function"&&Symbol.hasInstance&&typeof Function.prototype[Symbol.hasInstance]=="function"?(Me=Function.prototype[Symbol.hasInstance],Object.defineProperty(v,Symbol.hasInstance,{value:function(z){return!!Me.call(this,z)||this===v&&z&&z._writableState instanceof g}})):Me=function(z){return z instanceof this},v.prototype.pipe=function(){Ke(this,new Ce)},v.prototype.write=function(z,H,ne){var le=this._writableState,L=!1,h=!le.objectMode&&l(z);return h&&!K.isBuffer(z)&&(z=f(z)),typeof H=="function"&&(ne=H,H=null),h?H="buffer":!H&&(H=le.defaultEncoding),typeof ne!="function"&&(ne=d),le.ending?b(this,ne):(h||y(this,le,z,ne))&&(le.pendingcb++,L=C(this,le,h,z,H,ne)),L},v.prototype.cork=function(){this._writableState.corked++},v.prototype.uncork=function(){var z=this._writableState;z.corked&&(z.corked--,!z.writing&&!z.corked&&!z.bufferProcessing&&z.bufferedRequest&&F(this,z))},v.prototype.setDefaultEncoding=function(z){if(typeof z=="string"&&(z=z.toLowerCase()),!(-1<["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((z+"").toLowerCase())))throw new V(z);return this._writableState.defaultEncoding=z,this},Object.defineProperty(v.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(v.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),v.prototype._write=function(z,H,ne){ne(new ge("_write()"))},v.prototype._writev=null,v.prototype.end=function(z,H,ne){var le=this._writableState;return typeof z=="function"?(ne=z,z=null,H=null):typeof H=="function"&&(ne=H,H=null),z!=null&&this.write(z,H),le.corked&&(le.corked=1,this.uncork()),le.ending||N(this,le,ne),this},Object.defineProperty(v.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(v.prototype,"destroyed",{enumerable:!1,get:function(){return this._writableState!==void 0&&this._writableState.destroyed},set:function(z){this._writableState&&(this._writableState.destroyed=z)}}),v.prototype.destroy=he.destroy,v.prototype._undestroy=he.undestroy,v.prototype._destroy=function(z,H){H(z)}}).call(this)}).call(this,s("_process"),typeof fn>"u"?typeof self>"u"?typeof window>"u"?{}:window:self:fn)},{"../errors":15,"./_stream_duplex":16,"./internal/streams/destroy":23,"./internal/streams/state":27,"./internal/streams/stream":28,_process:12,buffer:3,inherits:10,"util-deprecate":32}],21:[function(s,a){(function(o){(function(){function c(D,F,S){return F in D?Object.defineProperty(D,F,{value:S,enumerable:!0,configurable:!0,writable:!0}):D[F]=S,D}function u(D,F){return{value:D,done:F}}function f(D){var F=D[b];if(F!==null){var S=D[T].read();S!==null&&(D[x]=null,D[b]=null,D[y]=null,F(u(S,!1)))}}function l(D){o.nextTick(f,D)}function d(D,F){return function(S,w){D.then(function(){return F[C]?void S(u(void 0,!0)):void F[E](S,w)},w)}}var g,v=s("./end-of-stream"),b=Symbol("lastResolve"),y=Symbol("lastReject"),_=Symbol("error"),C=Symbol("ended"),x=Symbol("lastPromise"),E=Symbol("handlePromise"),T=Symbol("stream"),A=Object.getPrototypeOf(function(){}),M=Object.setPrototypeOf((g={get stream(){return this[T]},next:function(){var D=this,F=this[_];if(F!==null)return Promise.reject(F);if(this[C])return Promise.resolve(u(void 0,!0));if(this[T].destroyed)return new Promise(function(G,N){o.nextTick(function(){D[_]?N(D[_]):G(u(void 0,!0))})});var S,w=this[x];if(w)S=new Promise(d(w,this));else{var k=this[T].read();if(k!==null)return Promise.resolve(u(k,!1));S=new Promise(this[E])}return this[x]=S,S}},c(g,Symbol.asyncIterator,function(){return this}),c(g,"return",function(){var D=this;return new Promise(function(F,S){D[T].destroy(null,function(w){return w?void S(w):void F(u(void 0,!0))})})}),g),A);a.exports=function(D){var F,S=Object.create(M,(F={},c(F,T,{value:D,writable:!0}),c(F,b,{value:null,writable:!0}),c(F,y,{value:null,writable:!0}),c(F,_,{value:null,writable:!0}),c(F,C,{value:D._readableState.endEmitted,writable:!0}),c(F,E,{value:function(w,k){var G=S[T].read();G?(S[x]=null,S[b]=null,S[y]=null,w(u(G,!1))):(S[b]=w,S[y]=k)},writable:!0}),F));return S[x]=null,v(D,function(w){if(w&&w.code!=="ERR_STREAM_PREMATURE_CLOSE"){var k=S[y];return k!==null&&(S[x]=null,S[b]=null,S[y]=null,k(w)),void(S[_]=w)}var G=S[b];G!==null&&(S[x]=null,S[b]=null,S[y]=null,G(u(void 0,!0))),S[C]=!0}),D.on("readable",l.bind(null,S)),S}}).call(this)}).call(this,s("_process"))},{"./end-of-stream":24,_process:12}],22:[function(s,a){function o(x,E){var T=Object.keys(x);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(x);E&&(A=A.filter(function(M){return Object.getOwnPropertyDescriptor(x,M).enumerable})),T.push.apply(T,A)}return T}function c(x){for(var E,T=1;T<arguments.length;T++)E=arguments[T]==null?{}:arguments[T],T%2?o(Object(E),!0).forEach(function(A){u(x,A,E[A])}):Object.getOwnPropertyDescriptors?Object.defineProperties(x,Object.getOwnPropertyDescriptors(E)):o(Object(E)).forEach(function(A){Object.defineProperty(x,A,Object.getOwnPropertyDescriptor(E,A))});return x}function u(x,E,T){return E in x?Object.defineProperty(x,E,{value:T,enumerable:!0,configurable:!0,writable:!0}):x[E]=T,x}function f(x,E){if(!(x instanceof E))throw new TypeError("Cannot call a class as a function")}function l(x,E){for(var T,A=0;A<E.length;A++)T=E[A],T.enumerable=T.enumerable||!1,T.configurable=!0,"value"in T&&(T.writable=!0),Object.defineProperty(x,T.key,T)}function d(x,E,T){return E&&l(x.prototype,E),x}function g(x,E,T){b.prototype.copy.call(x,E,T)}var v=s("buffer"),b=v.Buffer,y=s("util"),_=y.inspect,C=_&&_.custom||"inspect";a.exports=function(){function x(){f(this,x),this.head=null,this.tail=null,this.length=0}return d(x,[{key:"push",value:function(E){var T={data:E,next:null};0<this.length?this.tail.next=T:this.head=T,this.tail=T,++this.length}},{key:"unshift",value:function(E){var T={data:E,next:this.head};this.length===0&&(this.tail=T),this.head=T,++this.length}},{key:"shift",value:function(){if(this.length!==0){var E=this.head.data;return this.head=this.length===1?this.tail=null:this.head.next,--this.length,E}}},{key:"clear",value:function(){this.head=this.tail=null,this.length=0}},{key:"join",value:function(E){if(this.length===0)return"";for(var T=this.head,A=""+T.data;T=T.next;)A+=E+T.data;return A}},{key:"concat",value:function(E){if(this.length===0)return b.alloc(0);for(var T=b.allocUnsafe(E>>>0),A=this.head,M=0;A;)g(A.data,T,M),M+=A.data.length,A=A.next;return T}},{key:"consume",value:function(E,T){var A;return E<this.head.data.length?(A=this.head.data.slice(0,E),this.head.data=this.head.data.slice(E)):E===this.head.data.length?A=this.shift():A=T?this._getString(E):this._getBuffer(E),A}},{key:"first",value:function(){return this.head.data}},{key:"_getString",value:function(E){var T=this.head,A=1,M=T.data;for(E-=M.length;T=T.next;){var D=T.data,F=E>D.length?D.length:E;if(M+=F===D.length?D:D.slice(0,E),E-=F,E===0){F===D.length?(++A,this.head=T.next?T.next:this.tail=null):(this.head=T,T.data=D.slice(F));break}++A}return this.length-=A,M}},{key:"_getBuffer",value:function(E){var T=b.allocUnsafe(E),A=this.head,M=1;for(A.data.copy(T),E-=A.data.length;A=A.next;){var D=A.data,F=E>D.length?D.length:E;if(D.copy(T,T.length-E,0,F),E-=F,E===0){F===D.length?(++M,this.head=A.next?A.next:this.tail=null):(this.head=A,A.data=D.slice(F));break}++M}return this.length-=M,T}},{key:C,value:function(E,T){return _(this,c({},T,{depth:0,customInspect:!1}))}}]),x}()},{buffer:3,util:2}],23:[function(s,a){(function(o){(function(){function c(l,d){f(l,d),u(l)}function u(l){l._writableState&&!l._writableState.emitClose||l._readableState&&!l._readableState.emitClose||l.emit("close")}function f(l,d){l.emit("error",d)}a.exports={destroy:function(l,d){var g=this,v=this._readableState&&this._readableState.destroyed,b=this._writableState&&this._writableState.destroyed;return v||b?(d?d(l):l&&(this._writableState?!this._writableState.errorEmitted&&(this._writableState.errorEmitted=!0,o.nextTick(f,this,l)):o.nextTick(f,this,l)),this):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(l||null,function(y){!d&&y?g._writableState?g._writableState.errorEmitted?o.nextTick(u,g):(g._writableState.errorEmitted=!0,o.nextTick(c,g,y)):o.nextTick(c,g,y):d?(o.nextTick(u,g),d(y)):o.nextTick(u,g)}),this)},undestroy:function(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finalCalled=!1,this._writableState.prefinished=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)},errorOrDestroy:function(l,d){var g=l._readableState,v=l._writableState;g&&g.autoDestroy||v&&v.autoDestroy?l.destroy(d):l.emit("error",d)}}}).call(this)}).call(this,s("_process"))},{_process:12}],24:[function(s,a){function o(d){var g=!1;return function(){if(!g){g=!0;for(var v=arguments.length,b=Array(v),y=0;y<v;y++)b[y]=arguments[y];d.apply(this,b)}}}function c(){}function u(d){return d.setHeader&&typeof d.abort=="function"}function f(d,g,v){if(typeof g=="function")return f(d,null,g);g||(g={}),v=o(v||c);var b=g.readable||g.readable!==!1&&d.readable,y=g.writable||g.writable!==!1&&d.writable,_=function(){d.writable||x()},C=d._writableState&&d._writableState.finished,x=function(){y=!1,C=!0,b||v.call(d)},E=d._readableState&&d._readableState.endEmitted,T=function(){b=!1,E=!0,y||v.call(d)},A=function(F){v.call(d,F)},M=function(){var F;return b&&!E?(d._readableState&&d._readableState.ended||(F=new l),v.call(d,F)):y&&!C?(d._writableState&&d._writableState.ended||(F=new l),v.call(d,F)):void 0},D=function(){d.req.on("finish",x)};return u(d)?(d.on("complete",x),d.on("abort",M),d.req?D():d.on("request",D)):y&&!d._writableState&&(d.on("end",_),d.on("close",_)),d.on("end",T),d.on("finish",x),g.error!==!1&&d.on("error",A),d.on("close",M),function(){d.removeListener("complete",x),d.removeListener("abort",M),d.removeListener("request",D),d.req&&d.req.removeListener("finish",x),d.removeListener("end",_),d.removeListener("close",_),d.removeListener("finish",x),d.removeListener("end",T),d.removeListener("error",A),d.removeListener("close",M)}}var l=s("../../../errors").codes.ERR_STREAM_PREMATURE_CLOSE;a.exports=f},{"../../../errors":15}],25:[function(s,a){a.exports=function(){throw new Error("Readable.from is not available in the browser")}},{}],26:[function(s,a){function o(C){var x=!1;return function(){x||(x=!0,C.apply(void 0,arguments))}}function c(C){if(C)throw C}function u(C){return C.setHeader&&typeof C.abort=="function"}function f(C,x,E,T){T=o(T);var A=!1;C.on("close",function(){A=!0}),v===void 0&&(v=s("./end-of-stream")),v(C,{readable:x,writable:E},function(D){return D?T(D):(A=!0,void T())});var M=!1;return function(D){if(!A)return M?void 0:(M=!0,u(C)?C.abort():typeof C.destroy=="function"?C.destroy():void T(D||new _("pipe")))}}function l(C){C()}function d(C,x){return C.pipe(x)}function g(C){return C.length&&typeof C[C.length-1]=="function"?C.pop():c}var v,b=s("../../../errors").codes,y=b.ERR_MISSING_ARGS,_=b.ERR_STREAM_DESTROYED;a.exports=function(){for(var C=arguments.length,x=Array(C),E=0;E<C;E++)x[E]=arguments[E];var T=g(x);if(Array.isArray(x[0])&&(x=x[0]),2>x.length)throw new y("streams");var A,M=x.map(function(D,F){var S=F<x.length-1;return f(D,S,0<F,function(w){A||(A=w),w&&M.forEach(l),S||(M.forEach(l),T(A))})});return x.reduce(d)}},{"../../../errors":15,"./end-of-stream":24}],27:[function(s,a){function o(u,f,l){return u.highWaterMark==null?f?u[l]:null:u.highWaterMark}var c=s("../../../errors").codes.ERR_INVALID_OPT_VALUE;a.exports={getHighWaterMark:function(u,f,l,d){var g=o(f,d,l);if(g!=null){if(!(isFinite(g)&&t(g)===g)||0>g){var v=d?l:"highWaterMark";throw new c(v,g)}return t(g)}return u.objectMode?16:16384}}},{"../../../errors":15}],28:[function(s,a){a.exports=s("events").EventEmitter},{events:7}],29:[function(s,a,o){o=a.exports=s("./lib/_stream_readable.js"),o.Stream=o,o.Readable=o,o.Writable=s("./lib/_stream_writable.js"),o.Duplex=s("./lib/_stream_duplex.js"),o.Transform=s("./lib/_stream_transform.js"),o.PassThrough=s("./lib/_stream_passthrough.js"),o.finished=s("./lib/internal/streams/end-of-stream.js"),o.pipeline=s("./lib/internal/streams/pipeline.js")},{"./lib/_stream_duplex.js":16,"./lib/_stream_passthrough.js":17,"./lib/_stream_readable.js":18,"./lib/_stream_transform.js":19,"./lib/_stream_writable.js":20,"./lib/internal/streams/end-of-stream.js":24,"./lib/internal/streams/pipeline.js":26}],30:[function(s,a,o){function c(d,g){for(var v in d)g[v]=d[v]}function u(d,g,v){return l(d,g,v)}/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */var f=s("buffer"),l=f.Buffer;l.from&&l.alloc&&l.allocUnsafe&&l.allocUnsafeSlow?a.exports=f:(c(f,o),o.Buffer=u),u.prototype=Object.create(l.prototype),c(l,u),u.from=function(d,g,v){if(typeof d=="number")throw new TypeError("Argument must not be a number");return l(d,g,v)},u.alloc=function(d,g,v){if(typeof d!="number")throw new TypeError("Argument must be a number");var b=l(d);return g===void 0?b.fill(0):typeof v=="string"?b.fill(g,v):b.fill(g),b},u.allocUnsafe=function(d){if(typeof d!="number")throw new TypeError("Argument must be a number");return l(d)},u.allocUnsafeSlow=function(d){if(typeof d!="number")throw new TypeError("Argument must be a number");return f.SlowBuffer(d)}},{buffer:3}],31:[function(s,a,o){function c(M){if(!M)return"utf8";for(var D;;)switch(M){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return M;default:if(D)return;M=(""+M).toLowerCase(),D=!0}}function u(M){var D=c(M);if(typeof D!="string"&&(T.isEncoding===A||!A(M)))throw new Error("Unknown encoding: "+M);return D||M}function f(M){this.encoding=u(M);var D;switch(this.encoding){case"utf16le":this.text=b,this.end=y,D=4;break;case"utf8":this.fillLast=v,D=4;break;case"base64":this.text=_,this.end=C,D=3;break;default:return this.write=x,void(this.end=E)}this.lastNeed=0,this.lastTotal=0,this.lastChar=T.allocUnsafe(D)}function l(M){return 127>=M?0:M>>5==6?2:M>>4==14?3:M>>3==30?4:M>>6==2?-1:-2}function d(M,D,F){var S=D.length-1;if(S<F)return 0;var w=l(D[S]);return 0<=w?(0<w&&(M.lastNeed=w-1),w):--S<F||w===-2?0:(w=l(D[S]),0<=w?(0<w&&(M.lastNeed=w-2),w):--S<F||w===-2?0:(w=l(D[S]),0<=w?(0<w&&(w===2?w=0:M.lastNeed=w-3),w):0))}function g(M,D){if((192&D[0])!=128)return M.lastNeed=0,"�";if(1<M.lastNeed&&1<D.length){if((192&D[1])!=128)return M.lastNeed=1,"�";if(2<M.lastNeed&&2<D.length&&(192&D[2])!=128)return M.lastNeed=2,"�"}}function v(M){var D=this.lastTotal-this.lastNeed,F=g(this,M);return F===void 0?this.lastNeed<=M.length?(M.copy(this.lastChar,D,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(M.copy(this.lastChar,D,0,M.length),void(this.lastNeed-=M.length)):F}function b(M,D){if((M.length-D)%2==0){var F=M.toString("utf16le",D);if(F){var S=F.charCodeAt(F.length-1);if(55296<=S&&56319>=S)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=M[M.length-2],this.lastChar[1]=M[M.length-1],F.slice(0,-1)}return F}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=M[M.length-1],M.toString("utf16le",D,M.length-1)}function y(M){var D=M&&M.length?this.write(M):"";if(this.lastNeed){var F=this.lastTotal-this.lastNeed;return D+this.lastChar.toString("utf16le",0,F)}return D}function _(M,D){var F=(M.length-D)%3;return F==0?M.toString("base64",D):(this.lastNeed=3-F,this.lastTotal=3,F==1?this.lastChar[0]=M[M.length-1]:(this.lastChar[0]=M[M.length-2],this.lastChar[1]=M[M.length-1]),M.toString("base64",D,M.length-F))}function C(M){var D=M&&M.length?this.write(M):"";return this.lastNeed?D+this.lastChar.toString("base64",0,3-this.lastNeed):D}function x(M){return M.toString(this.encoding)}function E(M){return M&&M.length?this.write(M):""}var T=s("safe-buffer").Buffer,A=T.isEncoding||function(M){switch(M=""+M,M&&M.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};o.StringDecoder=f,f.prototype.write=function(M){if(M.length===0)return"";var D,F;if(this.lastNeed){if(D=this.fillLast(M),D===void 0)return"";F=this.lastNeed,this.lastNeed=0}else F=0;return F<M.length?D?D+this.text(M,F):this.text(M,F):D||""},f.prototype.end=function(M){var D=M&&M.length?this.write(M):"";return this.lastNeed?D+"�":D},f.prototype.text=function(M,D){var F=d(this,M,D);if(!this.lastNeed)return M.toString("utf8",D);this.lastTotal=F;var S=M.length-(F-this.lastNeed);return M.copy(this.lastChar,0,S),M.toString("utf8",D,S)},f.prototype.fillLast=function(M){return this.lastNeed<=M.length?(M.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(M.copy(this.lastChar,this.lastTotal-this.lastNeed,0,M.length),void(this.lastNeed-=M.length))}},{"safe-buffer":30}],32:[function(s,a){(function(o){(function(){function c(u){try{if(!o.localStorage)return!1}catch{return!1}var f=o.localStorage[u];return f!=null&&(f+"").toLowerCase()==="true"}a.exports=function(u,f){function l(){if(!d){if(c("throwDeprecation"))throw new Error(f);c("traceDeprecation")?console.trace(f):console.warn(f),d=!0}return u.apply(this,arguments)}if(c("noDeprecation"))return u;var d=!1;return l}}).call(this)}).call(this,typeof fn>"u"?typeof self>"u"?typeof window>"u"?{}:window:self:fn)},{}],"/":[function(s,a){function o(C){return C.replace(/a=ice-options:trickle\s\n/g,"")}function c(C){console.warn(C)}/*! simple-peer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */const u=s("debug")("simple-peer"),f=s("get-browser-rtc"),l=s("randombytes"),d=s("readable-stream"),g=s("queue-microtask"),v=s("err-code"),{Buffer:b}=s("buffer"),y=65536;class _ extends d.Duplex{constructor(x){if(x=Object.assign({allowHalfOpen:!1},x),super(x),this._id=l(4).toString("hex").slice(0,7),this._debug("new peer %o",x),this.channelName=x.initiator?x.channelName||l(20).toString("hex"):null,this.initiator=x.initiator||!1,this.channelConfig=x.channelConfig||_.channelConfig,this.channelNegotiated=this.channelConfig.negotiated,this.config=Object.assign({},_.config,x.config),this.offerOptions=x.offerOptions||{},this.answerOptions=x.answerOptions||{},this.sdpTransform=x.sdpTransform||(E=>E),this.streams=x.streams||(x.stream?[x.stream]:[]),this.trickle=x.trickle===void 0||x.trickle,this.allowHalfTrickle=x.allowHalfTrickle!==void 0&&x.allowHalfTrickle,this.iceCompleteTimeout=x.iceCompleteTimeout||5e3,this.destroyed=!1,this.destroying=!1,this._connected=!1,this.remoteAddress=void 0,this.remoteFamily=void 0,this.remotePort=void 0,this.localAddress=void 0,this.localFamily=void 0,this.localPort=void 0,this._wrtc=x.wrtc&&typeof x.wrtc=="object"?x.wrtc:f(),!this._wrtc)throw v(typeof window>"u"?new Error("No WebRTC support: Specify `opts.wrtc` option in this environment"):new Error("No WebRTC support: Not a supported browser"),"ERR_WEBRTC_SUPPORT");this._pcReady=!1,this._channelReady=!1,this._iceComplete=!1,this._iceCompleteTimer=null,this._channel=null,this._pendingCandidates=[],this._isNegotiating=!1,this._firstNegotiation=!0,this._batchedNegotiation=!1,this._queuedNegotiation=!1,this._sendersAwaitingStable=[],this._senderMap=new Map,this._closingInterval=null,this._remoteTracks=[],this._remoteStreams=[],this._chunk=null,this._cb=null,this._interval=null;try{this._pc=new this._wrtc.RTCPeerConnection(this.config)}catch(E){return void this.destroy(v(E,"ERR_PC_CONSTRUCTOR"))}this._isReactNativeWebrtc=typeof this._pc._peerConnectionId=="number",this._pc.oniceconnectionstatechange=()=>{this._onIceStateChange()},this._pc.onicegatheringstatechange=()=>{this._onIceStateChange()},this._pc.onconnectionstatechange=()=>{this._onConnectionStateChange()},this._pc.onsignalingstatechange=()=>{this._onSignalingStateChange()},this._pc.onicecandidate=E=>{this._onIceCandidate(E)},typeof this._pc.peerIdentity=="object"&&this._pc.peerIdentity.catch(E=>{this.destroy(v(E,"ERR_PC_PEER_IDENTITY"))}),this.initiator||this.channelNegotiated?this._setupData({channel:this._pc.createDataChannel(this.channelName,this.channelConfig)}):this._pc.ondatachannel=E=>{this._setupData(E)},this.streams&&this.streams.forEach(E=>{this.addStream(E)}),this._pc.ontrack=E=>{this._onTrack(E)},this._debug("initial negotiation"),this._needsNegotiation(),this._onFinishBound=()=>{this._onFinish()},this.once("finish",this._onFinishBound)}get bufferSize(){return this._channel&&this._channel.bufferedAmount||0}get connected(){return this._connected&&this._channel.readyState==="open"}address(){return{port:this.localPort,family:this.localFamily,address:this.localAddress}}signal(x){if(!this.destroying){if(this.destroyed)throw v(new Error("cannot signal after peer is destroyed"),"ERR_DESTROYED");if(typeof x=="string")try{x=JSON.parse(x)}catch{x={}}this._debug("signal()"),x.renegotiate&&this.initiator&&(this._debug("got request to renegotiate"),this._needsNegotiation()),x.transceiverRequest&&this.initiator&&(this._debug("got request for transceiver"),this.addTransceiver(x.transceiverRequest.kind,x.transceiverRequest.init)),x.candidate&&(this._pc.remoteDescription&&this._pc.remoteDescription.type?this._addIceCandidate(x.candidate):this._pendingCandidates.push(x.candidate)),x.sdp&&this._pc.setRemoteDescription(new this._wrtc.RTCSessionDescription(x)).then(()=>{this.destroyed||(this._pendingCandidates.forEach(E=>{this._addIceCandidate(E)}),this._pendingCandidates=[],this._pc.remoteDescription.type==="offer"&&this._createAnswer())}).catch(E=>{this.destroy(v(E,"ERR_SET_REMOTE_DESCRIPTION"))}),x.sdp||x.candidate||x.renegotiate||x.transceiverRequest||this.destroy(v(new Error("signal() called with invalid signal data"),"ERR_SIGNALING"))}}_addIceCandidate(x){const E=new this._wrtc.RTCIceCandidate(x);this._pc.addIceCandidate(E).catch(T=>{!E.address||E.address.endsWith(".local")?c("Ignoring unsupported ICE candidate."):this.destroy(v(T,"ERR_ADD_ICE_CANDIDATE"))})}send(x){if(!this.destroying){if(this.destroyed)throw v(new Error("cannot send after peer is destroyed"),"ERR_DESTROYED");this._channel.send(x)}}addTransceiver(x,E){if(!this.destroying){if(this.destroyed)throw v(new Error("cannot addTransceiver after peer is destroyed"),"ERR_DESTROYED");if(this._debug("addTransceiver()"),this.initiator)try{this._pc.addTransceiver(x,E),this._needsNegotiation()}catch(T){this.destroy(v(T,"ERR_ADD_TRANSCEIVER"))}else this.emit("signal",{type:"transceiverRequest",transceiverRequest:{kind:x,init:E}})}}addStream(x){if(!this.destroying){if(this.destroyed)throw v(new Error("cannot addStream after peer is destroyed"),"ERR_DESTROYED");this._debug("addStream()"),x.getTracks().forEach(E=>{this.addTrack(E,x)})}}addTrack(x,E){if(this.destroying)return;if(this.destroyed)throw v(new Error("cannot addTrack after peer is destroyed"),"ERR_DESTROYED");this._debug("addTrack()");const T=this._senderMap.get(x)||new Map;let A=T.get(E);if(!A)A=this._pc.addTrack(x,E),T.set(E,A),this._senderMap.set(x,T),this._needsNegotiation();else throw A.removed?v(new Error("Track has been removed. You should enable/disable tracks that you want to re-add."),"ERR_SENDER_REMOVED"):v(new Error("Track has already been added to that stream."),"ERR_SENDER_ALREADY_ADDED")}replaceTrack(x,E,T){if(this.destroying)return;if(this.destroyed)throw v(new Error("cannot replaceTrack after peer is destroyed"),"ERR_DESTROYED");this._debug("replaceTrack()");const A=this._senderMap.get(x),M=A?A.get(T):null;if(!M)throw v(new Error("Cannot replace track that was never added."),"ERR_TRACK_NOT_ADDED");E&&this._senderMap.set(E,A),M.replaceTrack==null?this.destroy(v(new Error("replaceTrack is not supported in this browser"),"ERR_UNSUPPORTED_REPLACETRACK")):M.replaceTrack(E)}removeTrack(x,E){if(this.destroying)return;if(this.destroyed)throw v(new Error("cannot removeTrack after peer is destroyed"),"ERR_DESTROYED");this._debug("removeSender()");const T=this._senderMap.get(x),A=T?T.get(E):null;if(!A)throw v(new Error("Cannot remove track that was never added."),"ERR_TRACK_NOT_ADDED");try{A.removed=!0,this._pc.removeTrack(A)}catch(M){M.name==="NS_ERROR_UNEXPECTED"?this._sendersAwaitingStable.push(A):this.destroy(v(M,"ERR_REMOVE_TRACK"))}this._needsNegotiation()}removeStream(x){if(!this.destroying){if(this.destroyed)throw v(new Error("cannot removeStream after peer is destroyed"),"ERR_DESTROYED");this._debug("removeSenders()"),x.getTracks().forEach(E=>{this.removeTrack(E,x)})}}_needsNegotiation(){this._debug("_needsNegotiation"),this._batchedNegotiation||(this._batchedNegotiation=!0,g(()=>{this._batchedNegotiation=!1,this.initiator||!this._firstNegotiation?(this._debug("starting batched negotiation"),this.negotiate()):this._debug("non-initiator initial negotiation request discarded"),this._firstNegotiation=!1}))}negotiate(){if(!this.destroying){if(this.destroyed)throw v(new Error("cannot negotiate after peer is destroyed"),"ERR_DESTROYED");this.initiator?this._isNegotiating?(this._queuedNegotiation=!0,this._debug("already negotiating, queueing")):(this._debug("start negotiation"),setTimeout(()=>{this._createOffer()},0)):this._isNegotiating?(this._queuedNegotiation=!0,this._debug("already negotiating, queueing")):(this._debug("requesting negotiation from initiator"),this.emit("signal",{type:"renegotiate",renegotiate:!0})),this._isNegotiating=!0}}destroy(x){this._destroy(x,()=>{})}_destroy(x,E){this.destroyed||this.destroying||(this.destroying=!0,this._debug("destroying (error: %s)",x&&(x.message||x)),g(()=>{if(this.destroyed=!0,this.destroying=!1,this._debug("destroy (error: %s)",x&&(x.message||x)),this.readable=this.writable=!1,this._readableState.ended||this.push(null),this._writableState.finished||this.end(),this._connected=!1,this._pcReady=!1,this._channelReady=!1,this._remoteTracks=null,this._remoteStreams=null,this._senderMap=null,clearInterval(this._closingInterval),this._closingInterval=null,clearInterval(this._interval),this._interval=null,this._chunk=null,this._cb=null,this._onFinishBound&&this.removeListener("finish",this._onFinishBound),this._onFinishBound=null,this._channel){try{this._channel.close()}catch{}this._channel.onmessage=null,this._channel.onopen=null,this._channel.onclose=null,this._channel.onerror=null}if(this._pc){try{this._pc.close()}catch{}this._pc.oniceconnectionstatechange=null,this._pc.onicegatheringstatechange=null,this._pc.onsignalingstatechange=null,this._pc.onicecandidate=null,this._pc.ontrack=null,this._pc.ondatachannel=null}this._pc=null,this._channel=null,x&&this.emit("error",x),this.emit("close"),E()}))}_setupData(x){if(!x.channel)return this.destroy(v(new Error("Data channel event is missing `channel` property"),"ERR_DATA_CHANNEL"));this._channel=x.channel,this._channel.binaryType="arraybuffer",typeof this._channel.bufferedAmountLowThreshold=="number"&&(this._channel.bufferedAmountLowThreshold=y),this.channelName=this._channel.label,this._channel.onmessage=T=>{this._onChannelMessage(T)},this._channel.onbufferedamountlow=()=>{this._onChannelBufferedAmountLow()},this._channel.onopen=()=>{this._onChannelOpen()},this._channel.onclose=()=>{this._onChannelClose()},this._channel.onerror=T=>{const A=T.error instanceof Error?T.error:new Error(`Datachannel error: ${T.message} ${T.filename}:${T.lineno}:${T.colno}`);this.destroy(v(A,"ERR_DATA_CHANNEL"))};let E=!1;this._closingInterval=setInterval(()=>{this._channel&&this._channel.readyState==="closing"?(E&&this._onChannelClose(),E=!0):E=!1},5e3)}_read(){}_write(x,E,T){if(this.destroyed)return T(v(new Error("cannot write after peer is destroyed"),"ERR_DATA_CHANNEL"));if(this._connected){try{this.send(x)}catch(A){return this.destroy(v(A,"ERR_DATA_CHANNEL"))}this._channel.bufferedAmount>y?(this._debug("start backpressure: bufferedAmount %d",this._channel.bufferedAmount),this._cb=T):T(null)}else this._debug("write before connect"),this._chunk=x,this._cb=T}_onFinish(){if(!this.destroyed){const x=()=>{setTimeout(()=>this.destroy(),1e3)};this._connected?x():this.once("connect",x)}}_startIceCompleteTimeout(){this.destroyed||this._iceCompleteTimer||(this._debug("started iceComplete timeout"),this._iceCompleteTimer=setTimeout(()=>{this._iceComplete||(this._iceComplete=!0,this._debug("iceComplete timeout completed"),this.emit("iceTimeout"),this.emit("_iceComplete"))},this.iceCompleteTimeout))}_createOffer(){this.destroyed||this._pc.createOffer(this.offerOptions).then(x=>{if(this.destroyed)return;this.trickle||this.allowHalfTrickle||(x.sdp=o(x.sdp)),x.sdp=this.sdpTransform(x.sdp);const E=()=>{if(!this.destroyed){const T=this._pc.localDescription||x;this._debug("signal"),this.emit("signal",{type:T.type,sdp:T.sdp})}};this._pc.setLocalDescription(x).then(()=>{this._debug("createOffer success"),this.destroyed||(this.trickle||this._iceComplete?E():this.once("_iceComplete",E))}).catch(T=>{this.destroy(v(T,"ERR_SET_LOCAL_DESCRIPTION"))})}).catch(x=>{this.destroy(v(x,"ERR_CREATE_OFFER"))})}_requestMissingTransceivers(){this._pc.getTransceivers&&this._pc.getTransceivers().forEach(x=>{x.mid||!x.sender.track||x.requested||(x.requested=!0,this.addTransceiver(x.sender.track.kind))})}_createAnswer(){this.destroyed||this._pc.createAnswer(this.answerOptions).then(x=>{if(this.destroyed)return;this.trickle||this.allowHalfTrickle||(x.sdp=o(x.sdp)),x.sdp=this.sdpTransform(x.sdp);const E=()=>{if(!this.destroyed){const T=this._pc.localDescription||x;this._debug("signal"),this.emit("signal",{type:T.type,sdp:T.sdp}),this.initiator||this._requestMissingTransceivers()}};this._pc.setLocalDescription(x).then(()=>{this.destroyed||(this.trickle||this._iceComplete?E():this.once("_iceComplete",E))}).catch(T=>{this.destroy(v(T,"ERR_SET_LOCAL_DESCRIPTION"))})}).catch(x=>{this.destroy(v(x,"ERR_CREATE_ANSWER"))})}_onConnectionStateChange(){this.destroyed||this._pc.connectionState==="failed"&&this.destroy(v(new Error("Connection failed."),"ERR_CONNECTION_FAILURE"))}_onIceStateChange(){if(this.destroyed)return;const x=this._pc.iceConnectionState,E=this._pc.iceGatheringState;this._debug("iceStateChange (connection: %s) (gathering: %s)",x,E),this.emit("iceStateChange",x,E),(x==="connected"||x==="completed")&&(this._pcReady=!0,this._maybeReady()),x==="failed"&&this.destroy(v(new Error("Ice connection failed."),"ERR_ICE_CONNECTION_FAILURE")),x==="closed"&&this.destroy(v(new Error("Ice connection closed."),"ERR_ICE_CONNECTION_CLOSED"))}getStats(x){const E=T=>(Object.prototype.toString.call(T.values)==="[object Array]"&&T.values.forEach(A=>{Object.assign(T,A)}),T);this._pc.getStats.length===0||this._isReactNativeWebrtc?this._pc.getStats().then(T=>{const A=[];T.forEach(M=>{A.push(E(M))}),x(null,A)},T=>x(T)):0<this._pc.getStats.length?this._pc.getStats(T=>{if(this.destroyed)return;const A=[];T.result().forEach(M=>{const D={};M.names().forEach(F=>{D[F]=M.stat(F)}),D.id=M.id,D.type=M.type,D.timestamp=M.timestamp,A.push(E(D))}),x(null,A)},T=>x(T)):x(null,[])}_maybeReady(){if(this._debug("maybeReady pc %s channel %s",this._pcReady,this._channelReady),this._connected||this._connecting||!this._pcReady||!this._channelReady)return;this._connecting=!0;const x=()=>{this.destroyed||this.getStats((E,T)=>{if(this.destroyed)return;E&&(T=[]);const A={},M={},D={};let F=!1;T.forEach(w=>{(w.type==="remotecandidate"||w.type==="remote-candidate")&&(A[w.id]=w),(w.type==="localcandidate"||w.type==="local-candidate")&&(M[w.id]=w),(w.type==="candidatepair"||w.type==="candidate-pair")&&(D[w.id]=w)});const S=w=>{F=!0;let k=M[w.localCandidateId];k&&(k.ip||k.address)?(this.localAddress=k.ip||k.address,this.localPort=+k.port):k&&k.ipAddress?(this.localAddress=k.ipAddress,this.localPort=+k.portNumber):typeof w.googLocalAddress=="string"&&(k=w.googLocalAddress.split(":"),this.localAddress=k[0],this.localPort=+k[1]),this.localAddress&&(this.localFamily=this.localAddress.includes(":")?"IPv6":"IPv4");let G=A[w.remoteCandidateId];G&&(G.ip||G.address)?(this.remoteAddress=G.ip||G.address,this.remotePort=+G.port):G&&G.ipAddress?(this.remoteAddress=G.ipAddress,this.remotePort=+G.portNumber):typeof w.googRemoteAddress=="string"&&(G=w.googRemoteAddress.split(":"),this.remoteAddress=G[0],this.remotePort=+G[1]),this.remoteAddress&&(this.remoteFamily=this.remoteAddress.includes(":")?"IPv6":"IPv4"),this._debug("connect local: %s:%s remote: %s:%s",this.localAddress,this.localPort,this.remoteAddress,this.remotePort)};if(T.forEach(w=>{w.type==="transport"&&w.selectedCandidatePairId&&S(D[w.selectedCandidatePairId]),(w.type==="googCandidatePair"&&w.googActiveConnection==="true"||(w.type==="candidatepair"||w.type==="candidate-pair")&&w.selected)&&S(w)}),!F&&(!Object.keys(D).length||Object.keys(M).length))return void setTimeout(x,100);if(this._connecting=!1,this._connected=!0,this._chunk){try{this.send(this._chunk)}catch(k){return this.destroy(v(k,"ERR_DATA_CHANNEL"))}this._chunk=null,this._debug('sent chunk from "write before connect"');const w=this._cb;this._cb=null,w(null)}typeof this._channel.bufferedAmountLowThreshold!="number"&&(this._interval=setInterval(()=>this._onInterval(),150),this._interval.unref&&this._interval.unref()),this._debug("connect"),this.emit("connect")})};x()}_onInterval(){this._cb&&this._channel&&!(this._channel.bufferedAmount>y)&&this._onChannelBufferedAmountLow()}_onSignalingStateChange(){this.destroyed||(this._pc.signalingState==="stable"&&(this._isNegotiating=!1,this._debug("flushing sender queue",this._sendersAwaitingStable),this._sendersAwaitingStable.forEach(x=>{this._pc.removeTrack(x),this._queuedNegotiation=!0}),this._sendersAwaitingStable=[],this._queuedNegotiation?(this._debug("flushing negotiation queue"),this._queuedNegotiation=!1,this._needsNegotiation()):(this._debug("negotiated"),this.emit("negotiated"))),this._debug("signalingStateChange %s",this._pc.signalingState),this.emit("signalingStateChange",this._pc.signalingState))}_onIceCandidate(x){this.destroyed||(x.candidate&&this.trickle?this.emit("signal",{type:"candidate",candidate:{candidate:x.candidate.candidate,sdpMLineIndex:x.candidate.sdpMLineIndex,sdpMid:x.candidate.sdpMid}}):!x.candidate&&!this._iceComplete&&(this._iceComplete=!0,this.emit("_iceComplete")),x.candidate&&this._startIceCompleteTimeout())}_onChannelMessage(x){if(this.destroyed)return;let E=x.data;E instanceof ArrayBuffer&&(E=b.from(E)),this.push(E)}_onChannelBufferedAmountLow(){if(!this.destroyed&&this._cb){this._debug("ending backpressure: bufferedAmount %d",this._channel.bufferedAmount);const x=this._cb;this._cb=null,x(null)}}_onChannelOpen(){this._connected||this.destroyed||(this._debug("on channel open"),this._channelReady=!0,this._maybeReady())}_onChannelClose(){this.destroyed||(this._debug("on channel close"),this.destroy())}_onTrack(x){this.destroyed||x.streams.forEach(E=>{this._debug("on track"),this.emit("track",x.track,E),this._remoteTracks.push({track:x.track,stream:E}),this._remoteStreams.some(T=>T.id===E.id)||(this._remoteStreams.push(E),g(()=>{this._debug("on stream"),this.emit("stream",E)}))})}_debug(){const x=[].slice.call(arguments);x[0]="["+this._id+"] "+x[0],u.apply(null,x)}}_.WEBRTC_SUPPORT=!!f(),_.config={iceServers:[{urls:["stun:stun.l.google.com:19302","stun:global.stun.twilio.com:3478"]}],sdpSemantics:"unified-plan"},_.channelConfig={},a.exports=_},{buffer:3,debug:4,"err-code":6,"get-browser-rtc":8,"queue-microtask":13,randombytes:14,"readable-stream":29}]},{},[])("/")})})(Df);var nE=Df.exports;const iE=tE(nE),Qc=0,el=1,Pf=2,If=(n,e)=>{Pe(n,Qc);const t=WS(e);lt(n,t)},Uf=(n,e,t)=>{Pe(n,el),lt(n,zS(e,t))},rE=(n,e,t)=>Uf(e,t,xt(n)),Nf=(n,e,t,i)=>{try{FS(e,xt(n),t)}catch(r){i!=null&&i(r),console.error("Caught error while handling a Yjs update",r)}},sE=(n,e)=>{Pe(n,Pf),lt(n,e)},oE=Nf,aE=(n,e,t,i,r)=>{const s=ke(n);switch(s){case Qc:rE(n,e,t);break;case el:Nf(n,t,i,r);break;case Pf:oE(n,t,i,r);break;default:throw new Error("Unknown message type")}return s},Va=3e4;class cE extends ad{constructor(e){super(),this.doc=e,this.clientID=e.clientID,this.states=new Map,this.meta=new Map,this._checkInterval=setInterval(()=>{const t=zn();this.getLocalState()!==null&&Va/2<=t-this.meta.get(this.clientID).lastUpdated&&this.setLocalState(this.getLocalState());const i=[];this.meta.forEach((r,s)=>{s!==this.clientID&&Va<=t-r.lastUpdated&&this.states.has(s)&&i.push(s)}),i.length>0&&pc(this,i,"timeout")},tn(Va/10)),e.on("destroy",()=>{this.destroy()}),this.setLocalState({})}destroy(){this.emit("destroy",[this]),this.setLocalState(null),super.destroy(),clearInterval(this._checkInterval)}getLocalState(){return this.states.get(this.clientID)||null}setLocalState(e){const t=this.clientID,i=this.meta.get(t),r=i===void 0?0:i.clock+1,s=this.states.get(t);e===null?this.states.delete(t):this.states.set(t,e),this.meta.set(t,{clock:r,lastUpdated:zn()});const a=[],o=[],c=[],u=[];e===null?u.push(t):s==null?e!=null&&a.push(t):(o.push(t),ur(s,e)||c.push(t)),(a.length>0||c.length>0||u.length>0)&&this.emit("change",[{added:a,updated:c,removed:u},"local"]),this.emit("update",[{added:a,updated:o,removed:u},"local"])}setLocalStateField(e,t){const i=this.getLocalState();i!==null&&this.setLocalState({...i,[e]:t})}getStates(){return this.states}}const pc=(n,e,t)=>{const i=[];for(let r=0;r<e.length;r++){const s=e[r];if(n.states.has(s)){if(n.states.delete(s),s===n.clientID){const a=n.meta.get(s);n.meta.set(s,{clock:a.clock+1,lastUpdated:zn()})}i.push(s)}}i.length>0&&(n.emit("change",[{added:[],updated:[],removed:i},t]),n.emit("update",[{added:[],updated:[],removed:i},t]))},go=(n,e,t=n.states)=>{const i=e.length,r=St();Pe(r,i);for(let s=0;s<i;s++){const a=e[s],o=t.get(a)||null,c=n.meta.get(a).clock;Pe(r,a),Pe(r,c),yn(r,JSON.stringify(o))}return ot(r)},lE=(n,e,t)=>{const i=En(e),r=zn(),s=[],a=[],o=[],c=[],u=ke(i);for(let f=0;f<u;f++){const l=ke(i);let d=ke(i);const g=JSON.parse(Fn(i)),v=n.meta.get(l),b=n.states.get(l),y=v===void 0?0:v.clock;(y<d||y===d&&g===null&&n.states.has(l))&&(g===null?l===n.clientID&&n.getLocalState()!=null?d++:n.states.delete(l):n.states.set(l,g),n.meta.set(l,{clock:d,lastUpdated:r}),v===void 0&&g!==null?s.push(l):v!==void 0&&g===null?c.push(l):g!==null&&(ur(g,b)||o.push(l),a.push(l)))}(s.length>0||o.length>0||c.length>0)&&n.emit("change",[{added:s,updated:o,removed:c},t]),(s.length>0||a.length>0||c.length>0)&&n.emit("update",[{added:s,updated:a,removed:c},t])},uE=(n,e)=>{const t=oc(n).buffer,i=oc(e).buffer;return crypto.subtle.importKey("raw",t,"PBKDF2",!1,["deriveKey"]).then(r=>crypto.subtle.deriveKey({name:"PBKDF2",salt:i,iterations:1e5,hash:"SHA-256"},r,{name:"AES-GCM",length:256},!0,["encrypt","decrypt"]))},Of=(n,e)=>{if(!e)return Ic(n);const t=crypto.getRandomValues(new Uint8Array(12));return crypto.subtle.encrypt({name:"AES-GCM",iv:t},e,n).then(i=>{const r=St();return yn(r,"AES-GCM"),lt(r,t),lt(r,new Uint8Array(i)),ot(r)})},hE=(n,e)=>{const t=St();return yr(t,n),Of(ot(t),e)},Ff=(n,e)=>{if(!e)return Ic(n);const t=En(n);Fn(t)!=="AES-GCM"&&fx(nn("Unknown encryption algorithm"));const r=xt(t),s=xt(t);return crypto.subtle.decrypt({name:"AES-GCM",iv:r},e,s).then(a=>new Uint8Array(a))},dE=(n,e)=>Ff(n,e).then(t=>xr(En(new Uint8Array(t)))),Xt=wS("y-webrtc"),pr=0,kf=3,es=1,tl=4,_o=new Map,Ai=new Map,Bf=n=>{let e=!0;n.webrtcConns.forEach(t=>{t.synced||(e=!1)}),(!e&&n.synced||e&&!n.synced)&&(n.synced=e,n.provider.emit("synced",[{synced:e}]),Xt("synced ",en,n.name,Ii," with all peers"))},zf=(n,e,t)=>{const i=En(e),r=St(),s=ke(i);if(n===void 0)return null;const a=n.awareness,o=n.doc;let c=!1;switch(s){case pr:{Pe(r,pr);const u=aE(i,r,o,n);u===el&&!n.synced&&t(),u===Qc&&(c=!0);break}case kf:Pe(r,es),lt(r,go(a,Array.from(a.getStates().keys()))),c=!0;break;case es:lE(a,xt(i),n);break;case tl:{const u=Pi(i)===1,f=Fn(i);if(f!==n.peerId&&(n.bcConns.has(f)&&!u||!n.bcConns.has(f)&&u)){const l=[],d=[];u?(n.bcConns.add(f),d.push(f)):(n.bcConns.delete(f),l.push(f)),n.provider.emit("peers",[{added:d,removed:l,webrtcPeers:Array.from(n.webrtcConns.keys()),bcPeers:Array.from(n.bcConns)}]),Hf(n)}break}default:return console.error("Unable to compute message"),r}return c?r:null},fE=(n,e)=>{const t=n.room;return Xt("received message from ",en,n.remotePeerId,Hc," (",t.name,")",Ii,ko),zf(t,e,()=>{n.synced=!0,Xt("synced ",en,t.name,Ii," with ",en,n.remotePeerId),Bf(t)})},Wa=(n,e)=>{Xt("send message to ",en,n.remotePeerId,Ii,Hc," (",n.room.name,")",ko);try{n.peer.send(ot(e))}catch{}},pE=(n,e)=>{Xt("broadcast message in ",en,n.name,Ii),n.webrtcConns.forEach(t=>{try{t.peer.send(e)}catch{}})};class gh{constructor(e,t,i,r){Xt("establishing connection to ",en,i),this.room=r,this.remotePeerId=i,this.glareToken=void 0,this.closed=!1,this.connected=!1,this.synced=!1,this.peer=new iE({initiator:t,...r.provider.peerOpts}),this.peer.on("signal",s=>{this.glareToken===void 0&&(this.glareToken=Date.now()+Math.random()),nl(e,r,{to:i,from:r.peerId,type:"signal",token:this.glareToken,signal:s})}),this.peer.on("connect",()=>{Xt("connected to ",en,i),this.connected=!0;const a=r.provider.doc,o=r.awareness,c=St();Pe(c,pr),If(c,a),Wa(this,c);const u=o.getStates();if(u.size>0){const f=St();Pe(f,es),lt(f,go(o,Array.from(u.keys()))),Wa(this,f)}}),this.peer.on("close",()=>{this.connected=!1,this.closed=!0,r.webrtcConns.has(this.remotePeerId)&&(r.webrtcConns.delete(this.remotePeerId),r.provider.emit("peers",[{removed:[this.remotePeerId],added:[],webrtcPeers:Array.from(r.webrtcConns.keys()),bcPeers:Array.from(r.bcConns)}])),Bf(r),this.peer.destroy(),Xt("closed connection to ",en,i),mc(r)}),this.peer.on("error",s=>{Xt("Error in connection to ",en,i,": ",s),mc(r)}),this.peer.on("data",s=>{const a=fE(this,s);a!==null&&Wa(this,a)})}destroy(){this.peer.destroy()}}const Kn=(n,e)=>Of(e,n.key).then(t=>n.mux(()=>Qb(n.name,t))),_h=(n,e)=>{n.bcconnected&&Kn(n,e),pE(n,e)},mc=n=>{_o.forEach(e=>{e.connected&&(e.send({type:"subscribe",topics:[n.name]}),n.webrtcConns.size<n.provider.maxConns&&nl(e,n,{type:"announce",from:n.peerId}))})},Hf=n=>{if(n.provider.filterBcConns){const e=St();Pe(e,tl),qr(e,1),yn(e,n.peerId),Kn(n,ot(e))}};class mE{constructor(e,t,i,r){this.peerId=fd(),this.doc=e,this.awareness=t.awareness,this.provider=t,this.synced=!1,this.name=i,this.key=r,this.webrtcConns=new Map,this.bcConns=new Set,this.mux=eE(),this.bcconnected=!1,this._bcSubscriber=s=>Ff(new Uint8Array(s),r).then(a=>this.mux(()=>{const o=zf(this,a,()=>{});o&&Kn(this,ot(o))})),this._docUpdateHandler=(s,a)=>{const o=St();Pe(o,pr),sE(o,s),_h(this,ot(o))},this._awarenessUpdateHandler=({added:s,updated:a,removed:o},c)=>{const u=s.concat(a).concat(o),f=St();Pe(f,es),lt(f,go(this.awareness,u)),_h(this,ot(f))},this._beforeUnloadHandler=()=>{pc(this.awareness,[e.clientID],"window unload"),Ai.forEach(s=>{s.disconnect()})},typeof window<"u"?window.addEventListener("beforeunload",this._beforeUnloadHandler):typeof process<"u"&&process.on("exit",this._beforeUnloadHandler)}connect(){this.doc.on("update",this._docUpdateHandler),this.awareness.on("update",this._awarenessUpdateHandler),mc(this);const e=this.name;Zb(e,this._bcSubscriber),this.bcconnected=!0,Hf(this);const t=St();Pe(t,pr),If(t,this.doc),Kn(this,ot(t));const i=St();Pe(i,pr),Uf(i,this.doc),Kn(this,ot(i));const r=St();Pe(r,kf),Kn(this,ot(r));const s=St();Pe(s,es),lt(s,go(this.awareness,[this.doc.clientID])),Kn(this,ot(s))}disconnect(){_o.forEach(t=>{t.connected&&t.send({type:"unsubscribe",topics:[this.name]})}),pc(this.awareness,[this.doc.clientID],"disconnect");const e=St();Pe(e,tl),qr(e,0),yn(e,this.peerId),Kn(this,ot(e)),Jb(this.name,this._bcSubscriber),this.bcconnected=!1,this.doc.off("update",this._docUpdateHandler),this.awareness.off("update",this._awarenessUpdateHandler),this.webrtcConns.forEach(t=>t.destroy())}destroy(){this.disconnect(),typeof window<"u"?window.removeEventListener("beforeunload",this._beforeUnloadHandler):typeof process<"u"&&process.off("exit",this._beforeUnloadHandler)}}const gE=(n,e,t,i)=>{if(Ai.has(t))throw nn(`A Yjs Doc connected to room "${t}" already exists!`);const r=new mE(n,e,t,i);return Ai.set(t,r),r},nl=(n,e,t)=>{e.key?hE(t,e.key).then(i=>{n.send({type:"publish",topic:e.name,data:bd(i)})}):n.send({type:"publish",topic:e.name,data:t})};class _E extends Yb{constructor(e){super(e),this.providers=new Set,this.on("connect",()=>{Xt(`connected (${e})`);const t=Array.from(Ai.keys());this.send({type:"subscribe",topics:t}),Ai.forEach(i=>nl(this,i,{type:"announce",from:i.peerId}))}),this.on("message",t=>{switch(t.type){case"publish":{const i=t.topic,r=Ai.get(i);if(r==null||typeof i!="string")return;const s=a=>{const o=r.webrtcConns,c=r.peerId;if(a==null||a.from===c||a.to!==void 0&&a.to!==c||r.bcConns.has(a.from))return;const u=o.has(a.from)?()=>{}:()=>r.provider.emit("peers",[{removed:[],added:[a.from],webrtcPeers:Array.from(r.webrtcConns.keys()),bcPeers:Array.from(r.bcConns)}]);switch(a.type){case"announce":o.size<r.provider.maxConns&&(Yt(o,a.from,()=>new gh(this,!0,a.from,r)),u());break;case"signal":if(a.signal.type==="offer"){const f=o.get(a.from);if(f){const l=a.token,d=f.glareToken;if(d&&d>l){Xt("offer rejected: ",a.from);return}f.glareToken=void 0}}if(a.signal.type==="answer"){Xt("offer answered by: ",a.from);const f=o.get(a.from);f.glareToken=void 0}a.to===c&&(Yt(o,a.from,()=>new gh(this,!1,a.from,r)).peer.signal(a.signal),u());break}};r.key?typeof t.data=="string"&&dE(Ed(t.data),r.key).then(s):s(t.data)}}}),this.on("disconnect",()=>Xt(`disconnect (${e})`))}}const Xa=n=>{n.emit("status",[{connected:n.connected}])};class vE extends od{constructor(e,t,{signaling:i=["wss://y-webrtc-eu.fly.dev"],password:r=null,awareness:s=new cE(t),maxConns:a=20+tn(hx()*15),filterBcConns:o=!0,peerOpts:c={}}={}){super(),this.roomName=e,this.doc=t,this.filterBcConns=o,this.awareness=s,this.shouldConnect=!1,this.signalingUrls=i,this.signalingConns=[],this.maxConns=a,this.peerOpts=c,this.key=r?uE(r,e):Ic(null),this.room=null,this.key.then(u=>{this.room=gE(t,this,e,u),this.shouldConnect?this.room.connect():this.room.disconnect(),Xa(this)}),this.connect(),this.destroy=this.destroy.bind(this),t.on("destroy",this.destroy)}get connected(){return this.room!==null&&this.shouldConnect}connect(){this.shouldConnect=!0,this.signalingUrls.forEach(e=>{const t=Yt(_o,e,()=>new _E(e));this.signalingConns.push(t),t.providers.add(this)}),this.room&&(this.room.connect(),Xa(this))}disconnect(){this.shouldConnect=!1,this.signalingConns.forEach(e=>{e.providers.delete(this),e.providers.size===0&&(e.destroy(),_o.delete(e.url))}),this.room&&(this.room.disconnect(),Xa(this))}destroy(){this.doc.off("destroy",this.destroy),this.key.then(()=>{this.room.destroy(),Ai.delete(this.roomName)}),super.destroy()}}const Gf=new Ir,gc=new vE("max-academy-3d-room",Gf,{signaling:["wss://signaling.yjs.dev"]}),ri=Gf.getMap("objects"),_c=gc.awareness;function yE(n){gc.on("synced",e=>{n(e?"connected":"syncing")}),n(gc.connected?"connected":"connecting")}function xE(n){_c.setLocalStateField("user",n)}function SE(n){_c.on("change",()=>{const e=[];_c.getStates().forEach((t,i)=>{t.user&&e.push({clientId:i,...t.user})}),n(e)})}const xi=new Map,vh=["#00d4ff","#8b5cf6","#e879f9","#84cc16","#f97316","#f87171","#fbbf24"];function bE(){return vh[Math.floor(Math.random()*vh.length)]}function yh(n){let e;switch(n.type){case"sphere":e=new wc(.5,32,32);break;case"cylinder":e=new Mc(.4,.4,1,32);break;case"cube":default:e=new Rr(1,1,1)}const t=new yy({color:n.color||"#2a3a5c"}),i=new _n(e,t);return i.position.set(n.position.x,n.position.y,n.position.z),i.rotation.set(n.rotation.x,n.rotation.y,n.rotation.z),i.scale.set(n.scale.x,n.scale.y,n.scale.z),i.userData.objectId=n.id,i.userData.objectType=n.type,i.userData.objectName=n.name,i}function qs(n="cube",e={x:0,y:.5,z:0}){const t=crypto.randomUUID(),i=bE(),r=`${n.charAt(0).toUpperCase()+n.slice(1)}_${t.slice(0,4)}`,s={id:t,type:n,name:r,color:i,position:e,rotation:{x:0,y:0,z:0},scale:{x:1,y:1,z:1}};return ri.set(t,s),t}function EE(n){ri.delete(n)}function xh(n,e){const t=ri.get(n);if(!t)return;const i={...t,...e};ri.set(n,i)}function Ar(){const n=[];return ri.forEach((e,t)=>{n.push(e)}),n}function ME(n){ri.forEach((e,t)=>{if(!xi.has(t)){const i=yh(e);Nn.add(i),xi.set(t,i)}}),ri.observe(e=>{e.changes.keys.forEach((t,i)=>{if(t.action==="add"||t.action==="update"){const r=ri.get(i);if(!r)return;let s=xi.get(i);s&&t.action==="update"?(s.position.set(r.position.x,r.position.y,r.position.z),s.rotation.set(r.rotation.x,r.rotation.y,r.rotation.z),s.scale.set(r.scale.x,r.scale.y,r.scale.z),r.color&&s.material.color.set(r.color)):(s&&(Nn.remove(s),s.geometry.dispose(),s.material.dispose()),s=yh(r),Nn.add(s),xi.set(i,s))}else if(t.action==="delete"){const r=xi.get(i);r&&(Nn.remove(r),r.geometry.dispose(),r.material.dispose(),xi.delete(i))}}),n&&n()})}const Sh={cursor:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2l10 6-5 1.5L6.5 14 3 2z"/></svg>',move:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v12M2 8h12M5 5L2 8l3 3M11 5l3 3-3 3M5 5L8 2l3 3M5 11l3 3 3-3"/></svg>',rotate:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 8a5.5 5.5 0 11-1.34-3.6M13.5 2v3.5H10"/></svg>',scale:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="4" height="4" rx="1"/><rect x="10" y="2" width="4" height="4" rx="1"/><path d="M6 8h2M8 4h2M10 4L6 8"/></svg>',cube:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2l5 3v6l-5 3-5-3V5z"/><path d="M8 2v12M3 5l5 3 5-3"/></svg>',sphere:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="8" cy="8" r="5.5"/><path d="M2.5 8h11M8 2.5C6 5 6 11 8 13.5M8 2.5C10 5 10 11 8 13.5"/></svg>',cylinder:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><ellipse cx="8" cy="4" rx="5" ry="2"/><path d="M3 4v8c0 1.1 2.2 2 5 2s5-.9 5-2V4"/></svg>',duplicate:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="5" width="8" height="8" rx="1.5"/><path d="M3 11V3h8"/></svg>',delete:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4h12M5 4V3h6v1M6 7v5M10 7v5M3 4l1 9h8l1-9"/></svg>',reset:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8a5 5 0 105-5H5M3 3v3h3"/></svg>',eye:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z"/><circle cx="8" cy="8" r="2"/></svg>',lock:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="10" height="7" rx="1.5"/><path d="M5 7V5a3 3 0 016 0v2"/></svg>',plus:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M8 3v10M3 8h10"/></svg>'};function Vf(n,e=14){return(Sh[n]||Sh.cube).replace("viewBox",`width="${e}" height="${e}" viewBox`)}const wE=[{id:"select",label:"Select",key:"Q",icon:"cursor"},{id:"move",label:"Move",key:"W",icon:"move"},{id:"rotate",label:"Rotate",key:"E",icon:"rotate"},{id:"scale",label:"Scale",key:"R",icon:"scale"},{id:"sep1",type:"sep"},{id:"add-cube",label:"Add Cube",key:"C",icon:"cube"},{id:"add-sphere",label:"Add Sphere",key:"S",icon:"sphere"},{id:"add-cylinder",label:"Add Cylinder",key:"Y",icon:"cylinder"},{id:"sep2",type:"sep"},{id:"duplicate",label:"Duplicate",key:"D",icon:"duplicate"},{id:"delete",label:"Delete",key:"X",icon:"delete",danger:!0},{id:"sep3",type:"sep"},{id:"reset-view",label:"Reset View",key:"F",icon:"reset"}];let Wf="select",jt=null;const Ys=[];function vo(n,e="info"){const t=document.getElementById("toast-container"),i=document.createElement("div");i.className=`toast type-${e}`,i.textContent=n,t.appendChild(i),setTimeout(()=>{i.classList.add("fade-out"),setTimeout(()=>i.remove(),250)},2400)}function Ci(){const n=document.getElementById("sync-status");n.classList.add("visible"),setTimeout(()=>n.classList.remove("visible"),1500)}function Vr(n,e,t,i="#00d4ff"){Ys.unshift({user:n,action:e,target:t,color:i,time:"just now"}),Ys.length>8&&Ys.pop(),Xf()}function Xf(){const n=document.getElementById("activity-feed");n&&(n.innerHTML=Ys.map(e=>`
    <div class="activity-item">
      <div class="activity-dot" style="background:${e.color}"></div>
      <div>
        <div class="activity-text"><strong>${e.user}</strong> ${e.action} <strong>${e.target}</strong></div>
        <div class="activity-time">${e.time}</div>
      </div>
    </div>`).join(""))}function jf(){const n=document.getElementById("toolbar");n.innerHTML=wE.map(e=>{if(e.type==="sep")return'<div class="toolbar-sep"></div>';const t=Wf===e.id,i=e.danger;return`
      <button class="tool-btn ${t?"active":""} ${i?"danger-tool":""}"
        data-tool="${e.id}" data-tip="${e.label}" title="${e.label} (${e.key})">
        ${Vf(e.icon,16)}
        <span class="tool-key">${e.key}</span>
      </button>`}).join(""),n.querySelectorAll(".tool-btn[data-tool]").forEach(e=>{e.addEventListener("click",()=>il(e.dataset.tool))})}function il(n){if(["select","move","rotate","scale"].includes(n))Wf=n,jf(),vo(`${n.charAt(0).toUpperCase()+n.slice(1)} tool active`);else if(n==="add-cube"){const e={x:(Math.random()-.5)*6,y:.5,z:(Math.random()-.5)*6};qs("cube",e),Vr("You","added","Cube","#00d4ff"),Ci()}else if(n==="add-sphere"){const e={x:(Math.random()-.5)*6,y:.5,z:(Math.random()-.5)*6};qs("sphere",e),Vr("You","added","Sphere","#8b5cf6"),Ci()}else if(n==="add-cylinder"){const e={x:(Math.random()-.5)*6,y:.5,z:(Math.random()-.5)*6};qs("cylinder",e),Vr("You","added","Cylinder","#84cc16"),Ci()}else n==="duplicate"&&jt?TE():n==="delete"&&jt?AE():n==="reset-view"&&(kn.position.set(8,6,8),kn.lookAt(0,0,0),To.target.set(0,0,0),vo("View reset"))}function TE(){const e=Ar().find(i=>i.id===jt);if(!e)return;const t={x:e.position.x+1,y:e.position.y,z:e.position.z+1};qs(e.type,t),Vr("You","duplicated",e.name,"#e879f9"),Ci()}function AE(){const e=Ar().find(t=>t.id===jt);e&&(EE(jt),Vr("You","deleted",e.name,"#f87171"),jt=null,Wo(),Xo(),Ci())}function Wo(){const n=document.getElementById("scene-list");if(!n)return;const e=Ar();n.innerHTML=e.map(t=>`
      <div class="scene-item ${t.id===jt?"selected":""}" data-id="${t.id}">
        <span class="scene-item-icon">${Vf(t.type==="sphere"?"sphere":t.type==="cylinder"?"cylinder":"cube",13)}</span>
        <span class="scene-color-dot" style="background:${t.color}"></span>
        <span class="scene-item-name">${t.name}</span>
        <span class="scene-item-type">${t.type}</span>
      </div>`).join(""),n.querySelectorAll(".scene-item").forEach(t=>{t.addEventListener("click",()=>qf(t.dataset.id))})}function Xo(){const n=document.getElementById("props-content");if(!n)return;const t=Ar().find(s=>s.id===jt);if(!t){n.innerHTML='<div class="panel-section" style="color:var(--text-muted);font-size:var(--text-sm);text-align:center;padding:32px 16px;">No object selected</div>',document.getElementById("props-obj-badge").textContent="";return}document.getElementById("props-obj-badge").textContent=t.type;const i=s=>Number(s).toFixed(2);n.innerHTML=`
    <div class="panel-section">
      <div class="prop-object-name">${t.name}</div>
      <div class="prop-object-type">${t.type}</div>
    </div>
    <div class="panel-section">
      <div class="prop-label">Position</div>
      <div class="prop-input-group">
        <div class="prop-input-labeled"><div class="axis-label x">X</div><input type="number" step="0.1" value="${i(t.position.x)}" data-axis="px"></div>
        <div class="prop-input-labeled"><div class="axis-label y">Y</div><input type="number" step="0.1" value="${i(t.position.y)}" data-axis="py"></div>
        <div class="prop-input-labeled"><div class="axis-label z">Z</div><input type="number" step="0.1" value="${i(t.position.z)}" data-axis="pz"></div>
      </div>
      <div class="prop-label">Scale</div>
      <div class="prop-input-group">
        <div class="prop-input-labeled"><div class="axis-label x">X</div><input type="number" step="0.1" value="${i(t.scale.x)}" data-axis="sx"></div>
        <div class="prop-input-labeled"><div class="axis-label y">Y</div><input type="number" step="0.1" value="${i(t.scale.y)}" data-axis="sy"></div>
        <div class="prop-input-labeled"><div class="axis-label z">Z</div><input type="number" step="0.1" value="${i(t.scale.z)}" data-axis="sz"></div>
      </div>
      <div class="prop-label">Color</div>
      <div style="display:flex;align-items:center;gap:var(--sp-2)">
        <input type="color" value="${t.color}" id="prop-color" style="width:32px;height:32px;padding:0;border:1px solid var(--border-strong);border-radius:var(--radius-sm);cursor:pointer">
        <span style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--text-muted)">${t.color}</span>
      </div>
    </div>`,n.querySelectorAll("input[data-axis]").forEach(s=>{s.addEventListener("change",()=>{const a=s.dataset.axis,o=parseFloat(s.value);if(isNaN(o))return;const c=Ar().find(f=>f.id===jt);if(!c)return;const u={};a==="px"&&(u.position={...c.position,x:o}),a==="py"&&(u.position={...c.position,y:o}),a==="pz"&&(u.position={...c.position,z:o}),a==="sx"&&(u.scale={...c.scale,x:o}),a==="sy"&&(u.scale={...c.scale,y:o}),a==="sz"&&(u.scale={...c.scale,z:o}),xh(jt,u),Ci()})});const r=n.querySelector("#prop-color");r&&r.addEventListener("input",()=>{xh(jt,{color:r.value}),Ci()})}function qf(n){jt=n,Wo(),Xo(),CE()}function CE(){const n=document.getElementById("vp-selection-bar");if(!n)return;const t=Ar().find(i=>i.id===jt);if(t){n.style.display="flex";const i=r=>Number(r).toFixed(2);n.innerHTML=`
      <div class="sel-item"><div class="sel-dot"></div><span style="color:var(--accent-cyan);font-weight:600">${t.name}</span></div>
      <div class="sel-item" style="color:var(--text-muted)">${t.type}</div>
      <div class="sel-item" style="color:var(--text-muted);font-family:var(--font-mono)">
        ${i(t.position.x)}, ${i(t.position.y)}, ${i(t.position.z)}
      </div>`}else n.style.display="none"}function RE(n){const e=document.getElementById("users-list"),t=document.getElementById("user-stack"),i=document.getElementById("user-count"),r=document.getElementById("users-header-stat");e&&(e.innerHTML=n.map(s=>`
    <div class="user-row">
      <div class="avatar" style="background:${s.color}20;color:${s.color}">${s.initials||"??"}</div>
      <div class="user-info">
        <div class="user-name">${s.name||"Anonymous"}</div>
      </div>
    </div>`).join(""),t&&(t.innerHTML=n.slice(0,4).map(s=>`<div class="avatar" style="background:${s.color}20;color:${s.color};border:2px solid var(--bg-panel)">${s.initials||"??"}</div>`).join("")),i&&(i.textContent=`${n.length} online`),r&&(r.innerHTML=`<strong>${n.length}</strong> editing`))}function LE(n){const e=document.getElementById("conn-status"),t=document.getElementById("conn-label");if(!e||!t)return;e.className="conn-status "+n;const i={connected:"Connected",syncing:"Syncing",connecting:"Connecting…"};t.textContent=i[n]||n}function DE(){const n={q:"select",w:"move",e:"rotate",r:"scale",c:"add-cube",s:"add-sphere",y:"add-cylinder",d:"duplicate",x:"delete",f:"reset-view"};document.addEventListener("keydown",e=>{if(e.target.tagName==="INPUT")return;const t=n[e.key.toLowerCase()];t&&il(t)})}function PE(){var n,e;(n=document.getElementById("btn-share"))==null||n.addEventListener("click",()=>{var i;const t=window.location.href;(i=navigator.clipboard)==null||i.writeText(t),vo("Room link copied!","success")}),(e=document.getElementById("btn-add-from-panel"))==null||e.addEventListener("click",()=>{il("add-cube")})}function IE(){jf(),Wo(),Xo(),Xf(),DE(),PE()}const bh=new My,ja=new Ne;function UE(n){Di.domElement.addEventListener("pointerdown",e=>{if(e.button!==0)return;const t=Di.domElement.getBoundingClientRect();ja.x=(e.clientX-t.left)/t.width*2-1,ja.y=-((e.clientY-t.top)/t.height)*2+1,bh.setFromCamera(ja,kn);const i=Array.from(xi.values()),r=bh.intersectObjects(i);if(r.length>0){const a=r[0].object.userData.objectId;a&&n(a)}})}Ly();Tc();const Eh=["#00d4ff","#8b5cf6","#e879f9","#84cc16","#f97316"],NE=Eh[Math.floor(Math.random()*Eh.length)],Yf="User_"+Math.random().toString(36).slice(2,6),OE=Yf.slice(0,2).toUpperCase();xE({name:Yf,color:NE,initials:OE});yE(n=>{LE(n),n==="connected"&&vo("Connected to room","success")});SE(n=>{RE(n)});ME(()=>{Wo(),Xo()});IE();UE(qf);function $f(){requestAnimationFrame($f),To.update(),Di.render(Nn,kn)}$f();console.log("[VoxelParty] Ready — room: max-academy-3d-room");
