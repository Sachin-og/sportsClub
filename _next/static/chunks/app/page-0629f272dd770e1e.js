(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1381:function(e,t,i){Promise.resolve().then(i.t.bind(i,231,23)),Promise.resolve().then(i.bind(i,2300)),Promise.resolve().then(i.bind(i,9243)),Promise.resolve().then(i.bind(i,5587)),Promise.resolve().then(i.bind(i,7097)),Promise.resolve().then(i.bind(i,8025)),Promise.resolve().then(i.bind(i,9398))},2300:function(e,t,i){"use strict";i.d(t,{default:function(){return c}});var r=i(7437),a=i(7138),n=i(9162),s=i(6349);i(2265);var l=i(4799);let o=e=>{let{children:t,className:i,containerClassName:a,animate:n=!0}=e,o={initial:{backgroundPosition:"0 50%"},animate:{backgroundPosition:["0, 50%","100% 50%","0 50%"]}};return(0,r.jsxs)("div",{className:(0,s.cn)("relative p-[4px] group",a),children:[(0,r.jsx)(l.E.div,{variants:n?o:void 0,initial:n?"initial":void 0,animate:n?"animate":void 0,transition:n?{duration:5,repeat:1/0,repeatType:"reverse"}:void 0,style:{backgroundSize:n?"400% 400%":void 0},className:(0,s.cn)("absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500 will-change-transform"," bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]")}),(0,r.jsx)(l.E.div,{variants:n?o:void 0,initial:n?"initial":void 0,animate:n?"animate":void 0,transition:n?{duration:5,repeat:1/0,repeatType:"reverse"}:void 0,style:{backgroundSize:n?"400% 400%":void 0},className:(0,s.cn)("absolute inset-0 rounded-3xl z-[1] will-change-transform","bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]")}),(0,r.jsx)("div",{className:(0,s.cn)("relative z-10",i),children:t})]})};var c=function(){let e=n.r.filter(e=>e.isFeatured);return(0,r.jsxs)("div",{className:"py-12 bg-gray-900",children:[(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)("h2",{className:"text-base text-teal-600 font-semibold tracking-wide uppercase",children:"FEATURED COURSES"}),(0,r.jsx)("p",{className:"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl",children:"Learn With the Best"})]})}),(0,r.jsx)("div",{className:"mt-10 mx-8",children:(0,r.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center",children:e.map(e=>(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(o,{className:"flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm",children:(0,r.jsxs)("div",{className:"p-4 sm:p-6 flex flex-col items-center text-center flex-grow",children:[(0,r.jsx)("p",{className:"text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200",children:e.title}),(0,r.jsx)("p",{className:"text-sm text-neutral-600 dark:text-neutral-400 flex-grow",children:e.description}),(0,r.jsx)(a.default,{href:"/courses/".concat(e.slug),className:"mt-2 px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200",children:"Learn More"})]})})},e.id))})}),(0,r.jsx)("div",{className:"mt-20 text-center",children:(0,r.jsx)(a.default,{href:"/courses",className:"px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200",children:" View All Courses"})})]})}},9243:function(e,t,i){"use strict";i.d(t,{default:function(){return x}});var r=i(7437),a=i(2265),n=i(6349),s=i(8184);let l=e=>{let t,i,l,o,c,d,u,{children:h,className:m,containerClassName:f,colors:p,waveWidth:x,backgroundFill:g,blur:v=10,speed:b="fast",waveOpacity:w=.5,...y}=e,j=(0,s.zz)(),N=(0,a.useRef)(null),k=()=>{switch(b){case"slow":default:return .001;case"fast":return .002}},_=()=>{t=(d=N.current.getContext("2d")).canvas.width=window.innerWidth,i=d.canvas.height=window.innerHeight,d.filter="blur(".concat(v,"px)"),l=0,window.onresize=function(){t=d.canvas.width=window.innerWidth,i=d.canvas.height=window.innerHeight,d.filter="blur(".concat(v,"px)")},E()},z=null!=p?p:["#38bdf8","#818cf8","#c084fc","#e879f9","#22d3ee"],M=e=>{for(l+=k(),o=0;o<e;o++){for(d.beginPath(),d.lineWidth=x||50,d.strokeStyle=z[o%z.length],c=0;c<t;c+=5){var r=100*j(c/800,.3*o,l);d.lineTo(c,r+.5*i)}d.stroke(),d.closePath()}},E=()=>{d.fillStyle=g||"black",d.globalAlpha=w||.5,d.fillRect(0,0,t,i),M(5),u=requestAnimationFrame(E)};(0,a.useEffect)(()=>(_(),()=>{cancelAnimationFrame(u)}),[]);let[F,A]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{A(navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome"))},[]),(0,r.jsxs)("div",{className:(0,n.cn)("h-screen flex flex-col items-center justify-center",f),children:[(0,r.jsx)("canvas",{className:"absolute inset-0 z-0",ref:N,id:"canvas",style:{...F?{filter:"blur(".concat(v,"px)")}:{}}}),(0,r.jsx)("div",{className:(0,n.cn)("relative z-10",m),...y,children:h})]})};var o=i(6648),c=i(5282),d=i(6391),u=i(831),h=i(5127),m=i(4799);let f=e=>{let{items:t}=e,[i,n]=(0,a.useState)(null),s={stiffness:100,damping:5},l=(0,c.c)(0),f=(0,d.q)((0,u.H)(l,[-100,100],[-45,45]),s),p=(0,d.q)((0,u.H)(l,[-100,100],[-50,50]),s),x=e=>{let t=e.target.offsetWidth/2;l.set(e.nativeEvent.offsetX-t)};return(0,r.jsx)(r.Fragment,{children:t.map((e,t)=>(0,r.jsxs)("div",{className:"-mr-4  relative group",onMouseEnter:()=>n(e.id),onMouseLeave:()=>n(null),children:[(0,r.jsx)(h.M,{mode:"wait",children:i===e.id&&(0,r.jsxs)(m.E.div,{initial:{opacity:0,y:20,scale:.6},animate:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:260,damping:10}},exit:{opacity:0,y:20,scale:.6},style:{translateX:p,rotate:f,whiteSpace:"nowrap"},className:"absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2",children:[(0,r.jsx)("div",{className:"absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px "}),(0,r.jsx)("div",{className:"absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px "}),(0,r.jsx)("div",{className:"font-bold text-white relative z-30 text-base",children:e.name}),(0,r.jsx)("div",{className:"text-white text-xs",children:e.designation})]})}),(0,r.jsx)(o.default,{onMouseMove:x,height:100,width:100,src:e.image,alt:e.name,className:"object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500"})]},e.name))})};var p=[{id:1,name:"Alex Johnson",designation:"Fitness Coach",image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"},{id:2,name:"Taylor Smith",designation:"Basketball Instructor",image:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"},{id:3,name:"Jordan Brown",designation:"Soccer Coach",image:"https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"},{id:4,name:"Chris Martinez",designation:"Swimming Instructor",image:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"}],x=function(){return(0,r.jsx)("div",{className:"relative h-[40rem] overflow-hidden flex items-center justify-center",children:(0,r.jsxs)(l,{className:"w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full",children:[(0,r.jsx)("h2",{className:"text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8",children:"Meet Our Instructors"}),(0,r.jsx)("p",{className:"text-base md:text-lg text-white text-center mb-4",children:"Meet the expert coaches who will elevate your athletic journey."}),(0,r.jsx)("div",{className:"flex flex-row items-center justify-center mb-10 w-full",children:(0,r.jsx)(f,{items:p})})]})})}},5587:function(e,t,i){"use strict";i.d(t,{default:function(){return o}});var r=i(7437),a=[{quote:"Joining the sports club transformed my approach to athletics and helped me to achieve new heights. The coaches are exceptional!",name:"Sarah Johnson",title:"Basketball Player"},{quote:"The sense of camaraderie and encouragement at this club are incredible. I've developed not just as a player, but also as a team member, thanks to their supportive environment.",name:"David Brown",title:"Soccer Player"},{quote:"This club provided me with the skills and motivation to push my fitness to the next level. I'm grateful for the expert guidance.",name:"Jessica Martinez",title:"Fitness Enthusiast"},{quote:"Being a part of this club has been instrumental in refining my techniques and strategies in swimming. The coaching staff really understands my goals and helps me achieve them.",name:"Emma Wilson",title:"Swimmer"},{quote:"The training programs here have broadened my understanding of sports conditioning. I highly recommend it for anyone serious about improving their athletic performance!",name:"Michael Davis",title:"Athlete"}],n=i(2265),s=i(6349);let l=e=>{let{items:t,direction:i="left",speed:a="fast",pauseOnHover:l=!0,className:o}=e,c=n.useRef(null),d=n.useRef(null);(0,n.useEffect)(()=>{c.current&&d.current&&(Array.from(d.current.children).forEach(e=>{let t=e.cloneNode(!0);d.current&&d.current.appendChild(t)}),m(),f(),h(!0))},[]);let[u,h]=(0,n.useState)(!1),m=()=>{c.current&&("left"===i?c.current.style.setProperty("--animation-direction","forwards"):c.current.style.setProperty("--animation-direction","reverse"))},f=()=>{c.current&&("fast"===a?c.current.style.setProperty("--animation-duration","20s"):"normal"===a?c.current.style.setProperty("--animation-duration","40s"):c.current.style.setProperty("--animation-duration","80s"))};return(0,r.jsx)("div",{ref:c,className:(0,s.cn)("scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",o),children:(0,r.jsx)("ul",{ref:d,className:(0,s.cn)(" flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",u&&"animate-scroll ",l&&"hover:[animation-play-state:paused]"),children:t.map((e,t)=>(0,r.jsx)("li",{className:"w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]",style:{background:"linear-gradient(180deg, var(--slate-800), var(--slate-900)"},children:(0,r.jsxs)("blockquote",{children:[(0,r.jsx)("div",{"aria-hidden":"true",className:"user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"}),(0,r.jsx)("span",{className:" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal",children:e.quote}),(0,r.jsx)("div",{className:"relative z-20 mt-6 flex flex-row items-center",children:(0,r.jsxs)("span",{className:"flex flex-col gap-1",children:[(0,r.jsx)("span",{className:" text-sm leading-[1.6] text-gray-400 font-normal",children:e.name}),(0,r.jsx)("span",{className:" text-sm leading-[1.6] text-gray-400 font-normal",children:e.title})]})})]})},e.name))})})};var o=function(){return(0,r.jsxs)("div",{className:"h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.1] relative flex flex-col items-center justify-center overflow-hidden",children:[(0,r.jsx)("h2",{className:"text-3xl font-bold text-center mb-8 z-10",children:"Athlete Achievements: Stories of Success"}),(0,r.jsx)("div",{className:"flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8",children:(0,r.jsx)("div",{className:"w-full max-w-6xl",children:(0,r.jsx)(l,{items:a,direction:"right",speed:"normal"})})})]})}},8025:function(e,t,i){"use strict";i.d(t,{default:function(){return f}});var r=i(7437),a=i(7138),n=[{title:"Fundamentals of Sports Training",description:"Dive deep into the basics of sports training and enhance your athletic skills.",slug:"fundamentals-of-sports-training",isFeatured:!0},{title:"Advanced Techniques in Team Sports",description:"Learn advanced strategies and techniques for excelling in team sports.",slug:"advanced-techniques-in-team-sports",isFeatured:!0},{title:"Personalized Fitness Programs",description:"Develop a fitness program tailored to your specific needs and goals.",slug:"personalized-fitness-programs",isFeatured:!0},{title:"Nutrition for Athletes",description:"Get a comprehensive overview of nutrition and diet plans for peak performance.",slug:"nutrition-for-athletes",isFeatured:!0},{title:"Mental Toughness Training",description:"Enhance your mental toughness with techniques from top sports psychologists.",slug:"mental-toughness-training",isFeatured:!0},{title:"Injury Prevention and Recovery",description:"Learn the best practices for preventing injuries and recovering effectively.",slug:"injury-prevention-and-recovery",isFeatured:!0}],s=i(6349),l=i(5127),o=i(4799),c=i(2265);let d=e=>{let{items:t,className:i}=e,[n,d]=(0,c.useState)(null);return(0,r.jsx)("div",{className:(0,s.cn)("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",i),children:t.map((e,t)=>(0,r.jsxs)(a.default,{href:null==e?void 0:e.link,className:"relative group  block p-2 h-full w-full",onMouseEnter:()=>d(t),onMouseLeave:()=>d(null),children:[(0,r.jsx)(l.M,{children:n===t&&(0,r.jsx)(o.E.span,{className:"absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl",layoutId:"hoverBackground",initial:{opacity:0},animate:{opacity:1,transition:{duration:.15}},exit:{opacity:0,transition:{duration:.15,delay:.2}}})}),(0,r.jsxs)(u,{children:[(0,r.jsx)(h,{children:e.title}),(0,r.jsx)(m,{children:e.description})]})]},null==e?void 0:e.link))})},u=e=>{let{className:t,children:i}=e;return(0,r.jsx)("div",{className:(0,s.cn)("rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",t),children:(0,r.jsx)("div",{className:"relative z-50",children:(0,r.jsx)("div",{className:"p-4",children:i})})})},h=e=>{let{className:t,children:i}=e;return(0,r.jsx)("h4",{className:(0,s.cn)("text-zinc-100 font-bold tracking-wide mt-4",t),children:i})},m=e=>{let{className:t,children:i}=e;return(0,r.jsx)("p",{className:(0,s.cn)("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",t),children:i})};var f=function(){return(0,r.jsx)("div",{className:"p-12 bg-gray-900",children:(0,r.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6",children:[(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)("h2",{className:"text-base text-teal-600 font-semibold tracking-wide uppercase",children:"FEATURED WEBINARS"}),(0,r.jsx)("p",{className:"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl",children:"Enhance Your Atheletics Journey"})]}),(0,r.jsx)("div",{className:"mt-10",children:(0,r.jsx)(d,{items:n.map((e,t)=>({key:t,title:e.title,description:e.description,link:"/"}))})}),(0,r.jsx)("div",{className:"mt-10 text-center",children:(0,r.jsx)(a.default,{href:"/",className:"px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200",children:"View All webinars"})})]})})}},9398:function(e,t,i){"use strict";i.d(t,{default:function(){return u}});var r=i(7437),a=i(2265),n=i(9754),s=i(6179),l=i(4799),o=i(6349);let c=e=>{var t;let{content:i,contentClassName:c}=e,[d,u]=a.useState(0),h=(0,a.useRef)(null),{scrollYProgress:m}=(0,n.v)({container:h,offset:["start start","end start"]}),f=i.length;(0,s.W)(m,"change",e=>{let t=i.map((e,t)=>t/f);u(t.reduce((i,r,a)=>Math.abs(e-r)<Math.abs(e-t[i])?a:i,0))});let p=["var(--slate-900)","var(--black)","var(--neutral-900)"],x=["linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))","linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))","linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))"],[g,v]=(0,a.useState)(x[0]);return(0,a.useEffect)(()=>{v(x[d%x.length])},[d]),(0,r.jsxs)(l.E.div,{animate:{backgroundColor:p[d%p.length]},className:"h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10",ref:h,children:[(0,r.jsx)("div",{className:"div relative flex items-start px-4",children:(0,r.jsxs)("div",{className:"max-w-2xl",children:[i.map((e,t)=>(0,r.jsxs)("div",{className:"my-20",children:[(0,r.jsx)(l.E.h2,{initial:{opacity:0},animate:{opacity:d===t?1:.3},className:"text-2xl font-bold text-slate-100",children:e.title}),(0,r.jsx)(l.E.p,{initial:{opacity:0},animate:{opacity:d===t?1:.3},className:"text-kg text-slate-300 max-w-sm mt-10",children:e.description})]},e.title+t)),(0,r.jsx)("div",{className:"h-40"})]})}),(0,r.jsx)("div",{style:{background:g},className:(0,o.cn)("hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",c),children:null!==(t=i[d].content)&&void 0!==t?t:null})]})};var d=[{title:"Elevate Your Game with Us: A Personal Journey in Athletic Excellence",description:"Embark on an athletic journey that&apos;s uniquely yours. Our personalized training adapts to your individual needs, setting the stage for unparalleled growth and performance. At our sports club, your goals meet our dedicated support, creating a path to peak performance."},{title:"Real-Time Feedback & Engagement",description:"Immerse yourself in an interactive training experience where feedback is immediate, just like real-time changes in a dynamic game. This approach enhances your understanding and mastery of sports techniques and strategies."},{title:"Innovative Training Programs",description:"Our training programs are continuously updated to include the latest sports science trends and technologies, ensuring you&apos;re always training with the most current and effective methods. Say goodbye to outdated techniques and welcome a training regimen that evolves with the sport."},{title:"Unlimited Training Opportunities",description:"With our expansive resource library and dynamic training sessions, you&apos;ll never find yourself without something new to master. Our platform provides continuous opportunities for growth, ensuring your athletic skills are always advancing."}],u=function(){return(0,r.jsx)("div",{children:(0,r.jsx)(c,{content:d})})}},7097:function(e,t,i){"use strict";i.d(t,{Button:function(){return m}});var r=i(8646),a=i(7437),n=i(2265),s=i(5282),l=i(6227),o=i(831),c=i(4846),d=i(4799),u=i(6349);function h(){let e=(0,r._)(["translateX(","px) translateY(","px) translateX(-50%) translateY(-50%)"]);return h=function(){return e},e}function m(e){let{borderRadius:t="1.75rem",children:i,as:r="button",containerClassName:n,borderClassName:s,duration:l,className:o,...c}=e;return(0,a.jsxs)(r,{className:(0,u.cn)("bg-transparent relative text-xl  h-16 w-40 p-[1px] overflow-hidden ",n),style:{borderRadius:t},...c,children:[(0,a.jsx)("div",{className:"absolute inset-0",style:{borderRadius:"calc(".concat(t," * 0.96)")},children:(0,a.jsx)(f,{duration:l,rx:"30%",ry:"30%",children:(0,a.jsx)("div",{className:(0,u.cn)("h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]",s)})})}),(0,a.jsx)("div",{className:(0,u.cn)("relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",o),style:{borderRadius:"calc(".concat(t," * 0.96)")},children:i})]})}let f=e=>{let{children:t,duration:i=2e3,rx:r,ry:u,...m}=e,f=(0,n.useRef)(),p=(0,s.c)(0);(0,l.p)(e=>{var t;let r=null===(t=f.current)||void 0===t?void 0:t.getTotalLength();r&&p.set(r/i*e%r)});let x=(0,o.H)(p,e=>{var t;return null===(t=f.current)||void 0===t?void 0:t.getPointAtLength(e).x}),g=(0,o.H)(p,e=>{var t;return null===(t=f.current)||void 0===t?void 0:t.getPointAtLength(e).y}),v=(0,c.Y)(h(),x,g);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",className:"absolute h-full w-full",width:"100%",height:"100%",...m,children:(0,a.jsx)("rect",{fill:"none",width:"100%",height:"100%",rx:r,ry:u,ref:f})}),(0,a.jsx)(d.E.div,{style:{position:"absolute",top:0,left:0,display:"inline-block",transform:v},children:t})]})}},6349:function(e,t,i){"use strict";i.d(t,{cn:function(){return n}});var r=i(4839),a=i(6164);function n(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,a.m6)((0,r.W)(t))}},9162:function(e){"use strict";e.exports=JSON.parse('{"r":[{"id":1,"title":"Fitness Fundamentals","slug":"fitness-fundamentals","description":"Master the basics of fitness and exercise with our comprehensive beginner\'s course.","price":99.99,"instructor":"Alex Johnson","isFeatured":true,"image":"/courses/fitness.jpg"},{"id":2,"title":"Basketball Skills Development","slug":"basketball-skills-development","description":"Enhance your basketball skills with expert coaching and tailored drills.","price":109.99,"instructor":"Taylor Smith","isFeatured":false,"image":"/courses/basketball.jpg"},{"id":3,"title":"Soccer Techniques","slug":"soccer-techniques","description":"Learn advanced soccer techniques and strategies for competitive play.","price":119.99,"instructor":"Jordan Brown","isFeatured":true,"image":"/courses/soccer.jpg"},{"id":4,"title":"Swimming Mastery","slug":"swimming-mastery","description":"Achieve mastery in swimming with specialized training programs for all skill levels.","price":129.99,"instructor":"Chris Martinez","isFeatured":false,"image":"/courses/swimming.jpg"},{"id":5,"title":"Athletic Conditioning","slug":"athletic-conditioning","description":"Improve your overall athletic conditioning with personalized fitness regimens.","price":139.99,"instructor":"Michael Davis","isFeatured":false,"image":"/courses/conditioning.jpg"},{"id":6,"title":"Sports Nutrition Essentials","slug":"sports-nutrition-essentials","description":"Understand the essentials of sports nutrition to optimize your performance and recovery.","price":149.99,"instructor":"Jessica Martinez","isFeatured":true,"image":"/courses/nutrition.jpg"},{"id":7,"title":"Tennis Tactics","slug":"tennis-tactics","description":"Master tactical approaches and strategies for competitive tennis matches.","price":159.99,"instructor":"David Brown","isFeatured":false,"image":"/courses/tennis.jpg"},{"id":8,"title":"Golf Swing Mechanics","slug":"golf-swing-mechanics","description":"Refine your golf swing mechanics with expert guidance and video analysis.","price":169.99,"instructor":"Emily Wilson","isFeatured":true,"image":"/courses/golf.jpg"},{"id":9,"title":"Martial Arts Fundamentals","slug":"martial-arts-fundamentals","description":"Explore the fundamentals of martial arts for self-defense and physical fitness.","price":179.99,"instructor":"Chris Morales","isFeatured":false,"image":"/courses/martial-arts.jpg"},{"id":10,"title":"Running Technique Optimization","slug":"running-technique-optimization","description":"Optimize your running technique to enhance speed, endurance, and injury prevention.","price":189.99,"instructor":"Luke Harris","isFeatured":true,"image":"/courses/running.jpg"}]}')}},function(e){e.O(0,[868,799,138,648,441,971,23,744],function(){return e(e.s=1381)}),_N_E=e.O()}]);