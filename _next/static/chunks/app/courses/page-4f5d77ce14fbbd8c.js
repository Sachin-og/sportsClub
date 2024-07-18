(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[65],{5361:function(e,t,r){Promise.resolve().then(r.bind(r,9059))},9059:function(e,t,r){"use strict";r.r(t);var s=r(7437);r(2265);var i=r(2982),n=r(7138),a=r(9162);t.default=function(){return(0,s.jsxs)("div",{className:"min-h-screen bg-black py-12 pt-36",children:[(0,s.jsxs)("h1",{className:"text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white",children:["All courses (",a.r.length,")"]}),(0,s.jsx)("div",{className:"flex flex-wrap justify-center",children:a.r.map((e,t)=>(0,s.jsx)(i._L,{className:"inter-var m-4",children:(0,s.jsxs)(i.eW,{className:"bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ",children:[(0,s.jsx)(i.Ss,{translateZ:"50",className:"text-xl font-bold text-neutral-600 dark:text-white",children:e.title}),(0,s.jsx)(i.Ss,{as:"p",translateZ:"60",className:"text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300",children:e.description}),(0,s.jsx)(i.Ss,{translateZ:"100",className:"w-full mt-4",children:(0,s.jsx)("img",{src:"/sportsClub"+e.image,height:"1000",width:"1000",className:"h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl",alt:e.title})}),(0,s.jsxs)("div",{className:"flex justify-between items-center mt-20",children:[(0,s.jsx)(i.Ss,{translateZ:20,as:"button",className:"px-4 py-2 rounded-xl text-xs font-normal dark:text-white",children:"Try now →"}),(0,s.jsx)(n.default,{href:"/sign-in",children:(0,s.jsx)(i.Ss,{translateZ:20,as:"button",className:"px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold",children:"Sign up"})})]})]})},t))})]})}},2982:function(e,t,r){"use strict";r.d(t,{Ss:function(){return o},_L:function(){return l},eW:function(){return c}});var s=r(7437),i=r(6349),n=r(2265);let a=(0,n.createContext)(void 0),l=e=>{let{children:t,className:r,containerClassName:l}=e,c=(0,n.useRef)(null),[o,u]=(0,n.useState)(!1);return(0,s.jsx)(a.Provider,{value:[o,u],children:(0,s.jsx)("div",{className:(0,i.cn)("py-20 flex items-center justify-center",l),style:{perspective:"1000px"},children:(0,s.jsx)("div",{ref:c,onMouseEnter:e=>{if(u(!0),!c.current)return},onMouseMove:e=>{if(!c.current)return;let{left:t,top:r,width:s,height:i}=c.current.getBoundingClientRect(),n=(e.clientX-t-s/2)/25,a=(e.clientY-r-i/2)/25;c.current.style.transform="rotateY(".concat(n,"deg) rotateX(").concat(a,"deg)")},onMouseLeave:e=>{c.current&&(u(!1),c.current.style.transform="rotateY(0deg) rotateX(0deg)")},className:(0,i.cn)("flex items-center justify-center relative transition-all duration-200 ease-linear",r),style:{transformStyle:"preserve-3d"},children:t})})})},c=e=>{let{children:t,className:r}=e;return(0,s.jsx)("div",{className:(0,i.cn)("h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",r),children:t})},o=e=>{let{as:t="div",children:r,className:a,translateX:l=0,translateY:c=0,translateZ:o=0,rotateX:d=0,rotateY:m=0,rotateZ:p=0,...g}=e,f=(0,n.useRef)(null),[h]=u();(0,n.useEffect)(()=>{x()},[h]);let x=()=>{f.current&&(h?f.current.style.transform="translateX(".concat(l,"px) translateY(").concat(c,"px) translateZ(").concat(o,"px) rotateX(").concat(d,"deg) rotateY(").concat(m,"deg) rotateZ(").concat(p,"deg)"):f.current.style.transform="translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)")};return(0,s.jsx)(t,{ref:f,className:(0,i.cn)("w-fit transition duration-200 ease-linear",a),...g,children:r})},u=()=>{let e=(0,n.useContext)(a);if(void 0===e)throw Error("useMouseEnter must be used within a MouseEnterProvider");return e}},6349:function(e,t,r){"use strict";r.d(t,{cn:function(){return n}});var s=r(4839),i=r(6164);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,i.m6)((0,s.W)(t))}},9162:function(e){"use strict";e.exports=JSON.parse('{"r":[{"id":1,"title":"Fitness Fundamentals","slug":"fitness-fundamentals","description":"Master the basics of fitness and exercise with our comprehensive beginner\'s course.","price":99.99,"instructor":"Alex Johnson","isFeatured":true,"image":"/courses/fitness.jpg"},{"id":2,"title":"Basketball Skills Development","slug":"basketball-skills-development","description":"Enhance your basketball skills with expert coaching and tailored drills.","price":109.99,"instructor":"Taylor Smith","isFeatured":false,"image":"/courses/basketball.jpg"},{"id":3,"title":"Soccer Techniques","slug":"soccer-techniques","description":"Learn advanced soccer techniques and strategies for competitive play.","price":119.99,"instructor":"Jordan Brown","isFeatured":true,"image":"/courses/soccer.jpg"},{"id":4,"title":"Swimming Mastery","slug":"swimming-mastery","description":"Achieve mastery in swimming with specialized training programs for all skill levels.","price":129.99,"instructor":"Chris Martinez","isFeatured":false,"image":"/courses/swimming.jpg"},{"id":5,"title":"Athletic Conditioning","slug":"athletic-conditioning","description":"Improve your overall athletic conditioning with personalized fitness regimens.","price":139.99,"instructor":"Michael Davis","isFeatured":false,"image":"/courses/conditioning.jpg"},{"id":6,"title":"Sports Nutrition Essentials","slug":"sports-nutrition-essentials","description":"Understand the essentials of sports nutrition to optimize your performance and recovery.","price":149.99,"instructor":"Jessica Martinez","isFeatured":true,"image":"/courses/nutrition.jpg"},{"id":7,"title":"Tennis Tactics","slug":"tennis-tactics","description":"Master tactical approaches and strategies for competitive tennis matches.","price":159.99,"instructor":"David Brown","isFeatured":false,"image":"/courses/tennis.jpg"},{"id":8,"title":"Golf Swing Mechanics","slug":"golf-swing-mechanics","description":"Refine your golf swing mechanics with expert guidance and video analysis.","price":169.99,"instructor":"Emily Wilson","isFeatured":true,"image":"/courses/golf.jpg"},{"id":9,"title":"Martial Arts Fundamentals","slug":"martial-arts-fundamentals","description":"Explore the fundamentals of martial arts for self-defense and physical fitness.","price":179.99,"instructor":"Chris Morales","isFeatured":false,"image":"/courses/martial-arts.jpg"},{"id":10,"title":"Running Technique Optimization","slug":"running-technique-optimization","description":"Optimize your running technique to enhance speed, endurance, and injury prevention.","price":189.99,"instructor":"Luke Harris","isFeatured":true,"image":"/courses/running.jpg"}]}')}},function(e){e.O(0,[868,138,971,23,744],function(){return e(e.s=5361)}),_N_E=e.O()}]);