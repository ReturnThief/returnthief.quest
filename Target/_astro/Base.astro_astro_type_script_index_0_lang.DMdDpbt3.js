const e={};await((function(t,n){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const t=document.querySelector("meta[property=csp-nonce]"),o=t?.nonce||t?.getAttribute("nonce");r=Promise.allSettled(n.map((t=>{if((t=function(e){return"/"+e}(t))in e)return;e[t]=!0;const n=t.endsWith(".css"),r=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${r}`))return;const i=document.createElement("link");return i.rel=n?"stylesheet":"modulepreload",n||(i.as="script"),i.crossOrigin="",i.href=t,o&&i.setAttribute("nonce",o),document.head.appendChild(i),n?new Promise(((e,n)=>{i.addEventListener("load",e),i.addEventListener("error",(()=>n(new Error(`Unable to preload CSS for ${t}`))))})):void 0})))}function o(e){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then((e=>{for(const t of e||[])"rejected"===t.status&&o(t.reason);return t().catch(o)}))}))((async()=>{const{initializeApp:e}=await import("./index.esm.DMCO24_P.js");return{initializeApp:e}}),[]).initializeApp({apiKey:"AIzaSyDY8gxW4POoBJbhYJl9s6ZSZ3WlVcKTCww",authDomain:"returnthief.firebaseapp.com",projectId:"returnthief",storageBucket:"returnthief.appspot.com",messagingSenderId:"890963614794",appId:"1:890963614794:web:663adf5b59dad366d1dab3",measurementId:"G-D1GFQDDFPD"});