!function(t,s){"object"==typeof exports&&"undefined"!=typeof module?module.exports=s():"function"==typeof define&&define.amd?define(s):(t=t||self).RenderKLine=s()}(this,function(){"use strict";function a(t,s){for(var i=0;i<s.length;i++){var e=s[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function r(t,s){(null==s||s>t.length)&&(s=t.length);for(var i=0,e=new Array(s);i<s;i++)e[i]=t[i];return e}function l(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,s){if(t){if("string"==typeof t)return r(t,s);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?r(t,s):void 0}}(t))){var s=0,i=function(){};return{s:i,n:function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var e,a,h=!0,n=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return h=t.done,t},e:function(t){n=!0,a=t},f:function(){try{h||null==e.return||e.return()}finally{if(n)throw a}}}}var e=function(t){return t<10?"0"+t:""+t},h=function(t){var s=new Date(1e3*t);return{year:s.getFullYear(),month:s.getMonth()+1,date:s.getDate(),hours:s.getHours(),minutes:s.getMinutes(),seconds:s.getSeconds(),day:s.getDay()}},u=2,v="open_price",f="close",m="low",g="high",x="time",y=1,P=40,S=20,w=60;function b(){this.ctx.translate(this.canvas.width,0),this.ctx.scale(-1,1)}function C(){this.totalWidth=(this.dataArr.length*(u+this.blockWidth)+w)*this.sharpness}function D(t,s){s=Number(s);var i=h(t);return 43200===s?i.year+"-"+e(i.month):1440===s||10080===s?e(i.month)+"-"+e(i.date):e(i.hours)+":"+e(i.minutes)}function R(t,s,i,e,a){this.ctx.beginPath(),this.ctx.rect(parseInt(t),parseInt(s),parseInt(i),parseInt(e)),this.ctx.fillStyle=a,this.ctx.fill(),this.ctx.closePath()}function k(t,s,i,e,a){this.ctx.save(),this.ctx.strokeStyle=a||this.lineColor,this.ctx.beginPath(),this.ctx.moveTo(t,s),this.ctx.lineTo(i,e),this.ctx.stroke(),this.ctx.closePath(),this.ctx.restore()}function M(t,s,i,e,a){this.ctx.save(),this.ctx.setLineDash([5*this.sharpness,2*this.sharpness]),this.ctx.strokeStyle=a||this.lineColor,this.ctx.beginPath(),this.ctx.moveTo(t,s),this.ctx.lineTo(i,e),this.ctx.stroke(),this.ctx.closePath(),this.ctx.restore()}function W(t,s,i,e){var a=4<arguments.length&&void 0!==arguments[4]?arguments[4]:"left",h=5<arguments.length&&void 0!==arguments[5]?arguments[5]:"middle";this.ctx.fillStyle=this.fontColor,this.ctx.textAlign=a,this.ctx.textBaseline=h,this.ctx.fillText(t,s,i,e)}function p(){if(this.dataArr.length){var t,s;C.call(this),function(){this.minPrice=9999999;for(var t=(this.maxPrice=0)<(t=Math.floor((this.movingRange-w)/(this.blockWidth+u)))?t:0,s=(s=Math.ceil(this.canvas.width/((this.blockWidth+u)*this.sharpness))+1+t)>this.dataArr.length?this.dataArr.length:s,i=this.dataArr.slice(t,s),e=0;e<i.length;e++)this.minPrice=Math.min(this.minPrice,i[e][v],i[e][f],i[e][m]),this.maxPrice=Math.max(this.maxPrice,i[e][v],i[e][f],i[e][g]);var a=(this.maxPrice-this.minPrice)/20;this.minPrice=(parseFloat(this.minPrice)-a).toFixed(this.digitsPoint),this.maxPrice=(parseFloat(this.maxPrice)+a).toFixed(this.digitsPoint),this.diffPrice=this.maxPrice-this.minPrice,this.perPricePixel=this.centerSpace/this.diffPrice}.call(this),this.ctx.save(),this.ctx.translate(0,S*this.sharpness),function(){this.ctx.save(),this.ctx.translate(this.movingRange*this.sharpness,0),k.call(this,0,this.centerSpace,this.canvas.width,this.centerSpace),k.call(this,0,0,this.canvas.width,0);for(var t=this.centerSpace/this.horizontalCells,s=1;s<this.horizontalCells;s++)M.call(this,0,parseInt(t*s),this.canvas.width,parseInt(t*s));this.ctx.restore()}.call(this),this.ctx.translate(w*this.sharpness,0);for(var i,e,a,h,n,r,c=y*this.sharpness,o=u*this.sharpness,l=o,p=this.blockWidth*this.sharpness,d=0;d<this.dataArr.length;d++)o=(0!==d&&(o<(this.movingRange-2*w)*this.sharpness||o>this.movingRange*this.sharpness+this.canvas.width)||(a=(t=this.dataArr[d])[v]>t[f]?(s=this.sellColor,i=(t[v]-t[f])*this.perPricePixel,(this.maxPrice-t[v])*this.perPricePixel):(s=this.buyColor,i=(t[f]-t[v])*this.perPricePixel,(this.maxPrice-t[f])*this.perPricePixel),e=(t[g]-t[m])*this.perPricePixel,h=(this.maxPrice-t[g])*this.perPricePixel,e=e>2*this.sharpness?e:2*this.sharpness,i=i>2*this.sharpness?i:2*this.sharpness,0===d&&(n=t[f],r=a+(t[v]>t[f]?i:0)),d%this.xDateSpace==this.fromSpaceNum%this.xDateSpace&&(M.call(this,o+(p-this.sharpness)/2,0,o+(p-this.sharpness)/2,this.centerSpace),this.ctx.save(),b.call(this),this.ctx.translate(this.canvas.width,0),W.call(this,D(t[x],this.dataType),-(o+(p-this.sharpness)/2),this.centerSpace+12*this.sharpness,void 0,"center","top"),this.ctx.restore()),R.call(this,o+(p-this.sharpness)/2,h,c,e,s),R.call(this,o,a,p,i,s)),o+p+l);k.call(this,(this.movingRange-w)*this.sharpness,r,(this.movingRange-w)*this.sharpness+this.canvas.width,r,"#cccccc"),this.ctx.save(),this.ctx.translate(-w*this.sharpness,0),b.call(this),R.call(this,(17-this.movingRange)*this.sharpness,r-10*this.sharpness,this.ctx.measureText(n).width+6*this.sharpness,20*this.sharpness,"#cccccc"),W.call(this,n,(20-this.movingRange)*this.sharpness,r),this.ctx.restore(),this.ctx.translate(-w*this.sharpness,0),function(){this.ctx.save(),this.ctx.translate(this.movingRange*this.sharpness,0),b.call(this),this.ctx.translate(this.canvas.width-w*this.sharpness,0);for(var t=this.diffPrice/this.horizontalCells,s=this.centerSpace/this.horizontalCells,i=0;i<this.horizontalCells+1;i++)W.call(this,(this.maxPrice-t*i).toFixed(this.digitsPoint),0,parseInt(s*i),w*this.sharpness);this.ctx.restore()}.call(this),this.ctx.restore(),function(){var t,s,i,e;this.crossLineStatus&&this.event&&(t=this.canvas.getBoundingClientRect(),s=this.canvas.width-(this.event.clientX-t.left-this.movingRange)*this.sharpness,(i=(this.event.clientY-t.top)*this.sharpness)<S*this.sharpness||i>this.canvas.height-P*this.sharpness||(M.call(this,this.movingRange*this.sharpness,i,this.canvas.width+this.movingRange*this.sharpness,i,"#999999"),M.call(this,s,S*this.sharpness,s,this.canvas.height-P*this.sharpness,"#999999"),this.ctx.save(),this.ctx.translate(this.movingRange*this.sharpness,0),e=(this.maxPrice-(i-S*this.sharpness)/this.perPricePixel).toFixed(this.digitsPoint),b.call(this),this.ctx.translate(this.canvas.width-w*this.sharpness,0),R.call(this,-3*this.sharpness,i-10*this.sharpness,this.ctx.measureText(e).width+6*this.sharpness,20*this.sharpness,"#cccccc"),W.call(this,e,0,i,w*this.sharpness),this.ctx.restore()))}.call(this)}}var c,n,o="";window.addEventListener?(c="addEventListener",n="removeEventListener"):(c="attachEvent",n="detachEvent",o="on");function d(){var t=this;this.canvas[c](o+"mousemove",function(t){if(s.loadingStatus)return;s.event=t||event,s.resetCanvas(),p.call(s)}),this.canvas[c](o+"mouseleave",function(){t.event=void 0,t.resetCanvas(),p.call(t)});var s=this}function A(){function t(t,s,i,e){t[a](h+s,"wheel"==n?i:function(t){var s={originalEvent:t=t||window.event,target:t.target||t.srcElement,ctrlKey:t.ctrlKey||!1,type:"wheel",deltaMode:"MozMousePixelScroll"==t.type?0:1,deltaX:0,deltaZ:0,preventDefault:function(){t.preventDefault?t.preventDefault():t.returnValue=!1}};return"mousewheel"==n?(s.deltaY=-.025*t.wheelDelta,t.wheelDeltaX&&(s.deltaX=-.025*t.wheelDeltaX)):s.deltaY=t.detail,i(s)},e||!1)}var s,i,a,h,e,n;s=this.canvas,i=function(t){if(r.loadingStatus)return;if(0!==Math.abs(t.deltaX)&&0!==Math.abs(t.deltaY))return;if(t.deltaX<0)return r.translateKLine(parseInt(-t.deltaX));if(0<t.deltaX)return r.translateKLine(parseInt(-t.deltaX));if(t.ctrlKey){if(0<t.deltaY)return r.scaleKLine(-1);if(t.deltaY<0)return r.scaleKLine(1)}else{if(0<t.deltaY)return r.scaleKLine(1);if(t.deltaY<0)return r.scaleKLine(-1)}},a=c,h=o,n="onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll",t(s,n,i,e),"DOMMouseScroll"==n&&t(s,"MozMousePixelScroll",i,e);var r=this}function L(t){t.prototype.resetCanvas=function(){this.canvas.width=this.actualWidth*this.sharpness,this.canvas.height=this.actualHeight*this.sharpness,this.canvas.style.height=this.canvas.height/this.sharpness+"px",this.canvas.style.width=this.canvas.width/this.sharpness+"px",this.centerSpace=this.canvas.height-(P+S)*this.sharpness,b.call(this),this.ctx.lineWidth=y*this.sharpness,this.ctx.font="".concat(12*this.sharpness,"px Arial"),this.ctx.translate(-this.movingRange*this.sharpness,0)},t.prototype.loading=function(){var t,s,i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"center";this.loadingStatus||(t={center:"left: 50%;margin-left: -10px;",left:"left: 10px;",right:"right: ".concat(w,"px")},(s=document.createElement("span")).innerHTML="loading...",s.style="position: absolute;top: 50%;margin-top: -10px;width: 20px;opacity: .8;".concat(t[i]),this.cBox.appendChild(s),this.loadingStatus=!0,"left"===i&&this.callbackMore&&this.callbackMore(),"center"===i&&(this.fromSpaceNum=0,this.movingRange=0,this.resetCanvas()))},t.prototype.changeSharpness=function(t){this.loadingStatus||(this.sharpness=t,this.processParams(),this.resetCanvas(),p.call(this))},t.prototype.scaleKLine=function(t){var s,i;this.loadingStatus||(s=this.totalWidth,this.blockWidth+=2*t,this.processParams(),C.call(this),i=(this.movingRange*this.sharpness*this.totalWidth+this.canvas.width/2*this.totalWidth-this.canvas.width/2*s)/s/this.sharpness-this.movingRange,this.translateKLine(i))},t.prototype.translateKLine=function(t){var s;this.loadingStatus||(this.movingRange+=parseInt(t),s=(this.totalWidth-this.canvas.width)/this.sharpness+this.blockWidth,this.totalWidth<=this.canvas.width||this.movingRange<=0?this.movingRange=0:this.movingRange>=s&&(this.movingRange=s,this.loading("left")),this.resetCanvas(),p.call(this))},t.prototype.changeCrossLineStatus=function(t){this.crossLineStatus=!!t},t.prototype.updateRealTimeQuote=function(t){t&&function(t){if(this.loadingStatus)return;this.lastDataTimestamp=this.lastDataTimestamp||this.dataArr[0][x],(t[x]-this.lastDataTimestamp)/60>=this.dataType?(this.dataArr.unshift(t),this.lastDataTimestamp=t[x],this.fromSpaceNum++):this.dataArr.splice(0,1,t);this.resetCanvas(),p.call(this)}.call(this,t)},t.prototype.updateHistoryQuote=function(t){var s=t.data,i=t.type,e=void 0===i?60:i,a=t.reloadData,h=void 0!==a&&a,n=t.callback;h&&(this.dataArr=[]),this.callbackMore=n;var r,c=l(this.cBox.getElementsByTagName("span"));try{for(c.s();!(r=c.n()).done;){var o=r.value;this.cBox.removeChild(o)}}catch(t){c.e(t)}finally{c.f()}this.loadingStatus=!1,s instanceof Array&&s.length&&(this.dataArr=this.dataArr.concat(s),this.dataType=e,p.call(this))}}return function(){function i(t,s){!function(t,s){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")}(this,i),t&&(s=s||{},this.id=t,this.cBox=document.getElementById(t),this.sharpness=s.sharpness,this.blockWidth=s.blockWidth,this.buyColor=s.buyColor||"#F05452",this.sellColor=s.sellColor||"#25C875",this.fontColor=s.fontColor||"#666666",this.lineColor=s.lineColor||"#DDDDDD",this.digitsPoint=s.digitsPoint||2,this.horizontalCells=s.horizontalCells||5,this.crossLineStatus=s.crossLineStatus||!1,this.totalWidth=0,this.movingRange=0,this.minPrice=9999999,this.maxPrice=0,this.diffPrice=0,this.perPricePixel=0,this.centerSpace=0,this.xDateSpace=6,this.fromSpaceNum=0,this.dataArr=[],this.lastDataTimestamp=void 0,this.loadingStatus=!1,this.processParams(),this.init(),L.call(this,i))}var t,s,e;return t=i,(s=[{key:"init",value:function(){this.canvas=document.createElement("canvas"),this.canvas&&this.canvas.getContext&&(this.ctx=this.canvas.getContext("2d")),this.canvas.innerHTML="您的当前浏览器不支持HTML5 canvas",this.cBox.appendChild(this.canvas),this.actualWidth=this.cBox.clientWidth,this.actualHeight=this.cBox.clientHeight,d.call(this),function(){var s,i=this,e=0;this.canvas[c](o+"mousedown",function(t){t=t||event,s=t.pageX,i.canvas[c](o+"mousemove",h)}),this.canvas[c](o+"mouseup",function(){i.canvas[n](o+"mousemove",h)}),this.canvas[c](o+"mouseleave",function(){i.canvas[n](o+"mousemove",h)});var a=this;function h(t){a.loadingStatus||(t=t||event,e=t.pageX-s,s=t.pageX,a.translateKLine(e))}}.call(this),A.call(this)}},{key:"processParams",value:function(){var t,s=parseInt(this.blockWidth);(t=parseInt(this.sharpness))&&1<=t?this.sharpness=t:this.sharpness=2,this.blockWidth=s?s<3?3:49<s?49:s%2?s:s-1:11,3===this.blockWidth?this.xDateSpace=12:5===this.blockWidth?this.xDateSpace=8:20<this.blockWidth?this.xDateSpace=4:this.xDateSpace=6}}])&&a(t.prototype,s),e&&a(t,e),i}()});
