import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as p,i as l}from"./assets/vendor-BbbuE1sJ.js";const n=document.querySelector("button[data-start]"),i=document.querySelector("#datetime-picker"),S=document.querySelector("[data-days]"),b=document.querySelector("[data-hours]"),g=document.querySelector("[data-minutes]"),w=document.querySelector("[data-seconds]");let u=null,a=null;n.disabled=!0;p(i,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<new Date?(l.error({title:"Error",message:"Please choose a future date!"}),n.disabled=!0):(a=e[0],n.disabled=!1)}});function r(e){return String(e).padStart(2,"0")}function d({days:e,hours:t,minutes:o,seconds:c}){S.textContent=r(e),b.textContent=r(t),g.textContent=r(o),w.textContent=r(c)}n.addEventListener("click",()=>{a&&(n.disabled=!0,i.disabled=!0,u=setInterval(()=>{const t=a-new Date;if(t<=0){clearInterval(u),d({days:0,hours:0,minutes:0,seconds:0}),l.success({title:"Timer Done!",message:"The countdown has reached zero."});return}const o=s(t);d(o)},1e3))});function s(e){const m=Math.floor(e/864e5),f=Math.floor(e%864e5/36e5),h=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:m,hours:f,minutes:h,seconds:y}}console.log(s(2e3));console.log(s(14e4));console.log(s(2414e4));
//# sourceMappingURL=1-timer.js.map
