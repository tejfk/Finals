document.addEventListener('DOMContentLoaded', () => {

    // ===================================
    // ===       CUSTOMIZE HERE        ===
    // ===================================

    const secretWord = "mamijupeta";

    const timelineData = [
      { date: "March 13, 2025", event: "It all began with a simple cup of coffee — and in that moment, my heart found its reason to smile." },
      { date: "March 18, 2025", event: "We shared a quiet, magical day together — a date so simple, yet so unforgettable." },
      { date: "April 07, 2025", event: "You opened the doors to your world and introduced me to your family — a beautiful gesture that meant everything." },
      { date: "May 05, 2025", event: "Our first movie date — where I held your hand in the dark and realized I never wanted to let go." },
      { date: "Today", event: "And now, our love story turns a new page — writing our chapter together, officially and endlessly." }
    ];

    // ⭐ UPDATED: 'poster' property is removed from video items.
    const galleryData = [
        { type: 'image', image: './assets/img/img6.jpeg', note: "where it all began." },
        { type: 'image', image: './assets/img/img1.jpeg', note: "On top of the world with you." },
        { type: 'video', video: './assets/video/vid1.mp4', note: "full of kisses." },
        { type: 'image', image: './assets/img/img2.jpeg', note: "With Bob." },
        { type: 'image', image: './assets/img/img3.jpeg', note: "Cozy dates are the best dates." },
        { type: 'video', video: './assets/video/vid2.mp4', note: "Pawns and Cuddles" },
        { type: 'image', image: './assets/img/img4.jpeg', note: "Cafe Date." },
        { type: 'image', image: './assets/img/img5.jpeg', note: "had our first pic(not selfie)." },
        { type: 'video', video: './assets/video/vid3.mp4', note: "will never get tired of moments like this." },
        { type: 'image', image: './assets/img/img7.jpeg', note: "Mirror pic??." },
        { type: 'video', video: './assets/video/vid4.mp4', note: "Live in typa shi." },
        { type: 'image', image: './assets/img/img8.jpeg', note: "uhhh pic." },
    ];
    
    const loveLetter = {
      title: "To My Dearest,",
      paragraphs: [
        "Hello, my beautiful, sweet, lovely baby.",
        "I know this took a while, but here I am today, showing you my sincerity. I never imagined I’d meet someone like you. You’ve never made me feel like loving you was hard — in fact, you made it the easiest thing in the world.",
        "With you, time flies so fast. I feel like I can never get enough of being by your side. Your presence always puts me at ease, like everything suddenly feels right.",
        "Just like any other couple, we have our own little issues, but what matters to me is how we handle them. I’m genuinely grateful that we can talk things through calmly. I really hope it stays that way as we continue this journey together.",
        "As I’m writing this letter, I feel so excited imagining how you’ll react when you see what I’ve made for you. You truly deserve this and so much more, my love. I’ll never get tired of finding ways to make you feel special — because you are, you’re a very significant part of my life.",
        "I love making you happy, because when you’re happy, I’m happy too. I know I always joke around with you, but deep down, that’s just me struggling to express what I truly feel. So, I’m doing this — writing this — to let you know how much you mean to me.",
        "I love you. And I always will. ❤️"
      ],
      signature: ","
    };


    // --- End of Customization ---

    // --- Minified Core Functions (No changes needed below this line) ---
    function initWordLock(){const e=document.getElementById("lock-page");e.innerHTML='<div class="starry-background"></div><div id="word-lock-instructions" class="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4 pointer-events-none transition-opacity duration-1000"><h1 class="font-serif-display text-4xl md:text-5xl mb-4 animate-pulse">Whisper the secret word.</h1><p class="text-lg text-gray-300">A memory only we share.</p></div><div id="word-display" class="absolute inset-0 flex items-center justify-center text-5xl md:text-8xl font-serif-display text-white tracking-widest"></div>';let t="",n=!1;const o=l=>{if(n)return;const a=document.getElementById("word-display");"Backspace"===l.key?t=t.slice(0,-1):1===l.key.length&&/[a-zA-Z0-9]/.test(l.key)&&(t+=l.key.toLowerCase()),a.innerHTML=t.split("").map(c=>`<span class="letter-pop-in">${c}</span>`).join(""),t===secretWord&&(n=!0,window.removeEventListener("keydown",o),document.getElementById("word-lock-instructions").style.opacity=0,document.querySelectorAll("#word-display span").forEach((c,s)=>{setTimeout(()=>{c.classList.add("letter-glow")},100*s)}),setTimeout(runStardustTransition,100*document.querySelectorAll("#word-display span").length+500))};window.addEventListener("keydown",o)}
    function runStardustTransition(){const e=document.getElementById("stardust-transition"),t=document.getElementById("stardust-canvas"),n=t.getContext("2d");e.classList.remove("hidden");let o=[];t.width=window.innerWidth,t.height=window.innerHeight;for(let l=0;l<300;l++)o.push({x:t.width/2,y:t.height/2,radius:2*Math.random()+1,angle:2*Math.random()*Math.PI,speed:8*Math.random()+2,life:1});document.getElementById("lock-page").style.transition="opacity 1s",document.getElementById("lock-page").style.opacity=0,document.body.classList.remove("bg-gray-900","overflow-hidden"),document.getElementById("hidden-gallery").classList.remove("hidden"),document.getElementById("hidden-gallery").style.opacity="0",document.getElementById("hidden-gallery").style.transition="opacity 1s ease-in .5s";const a=()=>{n.clearRect(0,0,t.width,t.height);let l=!0;o.forEach(c=>{c.life>0&&(l=!1,c.x+=Math.cos(c.angle)*c.speed,c.y+=Math.sin(c.angle)*c.speed,c.life-=.02,c.speed*=.98,n.beginPath(),n.arc(c.x,c.y,c.radius,0,2*Math.PI),n.fillStyle=`rgba(255, 255, 255, ${c.life})`,n.fill())}),document.getElementById("hidden-gallery").style.opacity="1",l?(e.classList.add("hidden"),document.getElementById("lock-page").classList.add("hidden"),startSlowReveal()):requestAnimationFrame(a)};a()}
    function startSlowReveal(){initFireflies(),initTimeline(),initPolaroidGallery(),initLetterModal(),setTimeout(()=>document.getElementById("main-title").classList.add("is-visible"),500),setTimeout(()=>document.getElementById("timeline-section").classList.add("is-visible"),1500),setTimeout(()=>document.getElementById("gallery-heading").classList.add("is-visible"),2500),setTimeout(()=>document.getElementById("clothesline").classList.add("is-visible"),3e3);const e=document.querySelectorAll(".polaroid");e.forEach((t,n)=>{setTimeout(()=>t.classList.add("is-visible"),3500+200*n)});const t=3500+200*e.length;setTimeout(()=>document.getElementById("open-letter-btn").classList.add("is-visible"),t),document.getElementById("background-music").play().catch(()=>{})}
    function initFireflies(){const e=document.getElementById("fireflies-canvas");if(!e)return;let t=e.getContext("2d"),n=[],o={x:null,y:null};function l(){e.width=window.innerWidth,e.height=window.innerHeight,n=[];let t=(e.width*e.height)/9e3;for(let o=0;o<t;o++)n.push({x:Math.random()*e.width,y:Math.random()*e.height,radius:1.5*Math.random()+.5,vx:.5*Math.random()-.25,vy:.5*Math.random()-.25,opacity:.5*Math.random()+.25})}function a(){t.clearRect(0,0,e.width,e.height),n.forEach(c=>{if(o.x&&o.y){let s=o.x-c.x,d=o.y-c.y,r=Math.sqrt(s*s+d*d);r<150&&(c.x+=s/r/5,c.y+=d/r/5)}c.x+=c.vx,c.y+=c.vy,(c.x<0||c.x>e.width)&&(c.vx*=-1),(c.y<0||c.y>e.height)&&(c.vy*=-1),t.beginPath(),t.arc(c.x,c.y,c.radius,0,2*Math.PI),t.fillStyle=`rgba(255, 255, 255, ${c.opacity})`,t.fill()}),requestAnimationFrame(a)}l(),window.addEventListener("mousemove",c=>{o.x=c.clientX,o.y=c.clientY}),window.addEventListener("resize",l)}
    function initTimeline(){const e=document.getElementById("timeline-section");if(!e)return;let t=0;const n=`<h2 class="font-serif-display text-4xl text-purple-300 mb-8">The Story of Us</h2><div class="timeline-container">${timelineData.map((o,l)=>`<div class="timeline-item" data-index="${l}"><div class="timeline-content"><h3 class="font-bold text-lg">${o.date}</h3><p class="text-purple-200">${o.event}</p></div></div>`).join("")}</div><button id="timeline-next">Next Chapter →</button>`;e.innerHTML=n;const o=document.querySelectorAll(".timeline-item");o[0].classList.add("is-visible"),document.getElementById("timeline-next").addEventListener("click",function(){t++,t<o.length&&(o[t].classList.add("is-visible"),o[t].scrollIntoView({behavior:"smooth",block:"center"})),t>=o.length-1&&(this.style.opacity=0,this.style.pointerEvents="none")})}
    function initLetterModal(){const e=document.getElementById("letter-modal"),t=document.getElementById("open-letter-btn"),n=document.getElementById("close-letter-btn"),o=document.getElementById("letter-modal-content");if(!e)return;let l=!1;const a=`<div class="letter-container is-blurred"><h2 class="font-serif-display text-4xl text-purple-300 mb-6 letter-line">${loveLetter.title}</h2>${loveLetter.paragraphs.map(c=>`<p class="font-handwriting text-2xl text-purple-200 mb-4 letter-line">${c}</p>`).join("")}<p class="font-handwriting text-3xl mt-8 letter-line">${loveLetter.signature}</p><div class="letter-prompt">Touch the letter to reveal its words.</div></div>`;o.innerHTML=a;const c=o.querySelector(".letter-container"),s=o.querySelectorAll(".letter-line"),d=o.querySelector(".letter-prompt"),r=()=>{if(l)return;l=!0,d.style.opacity="0",c.classList.remove("is-blurred"),c.style.cursor="default",c.classList.add("is-revealing"),s.forEach((m,p)=>{m.style.transitionDelay=`${.2*p}s`})},i=()=>{l=!1,d.style.opacity="1",c.classList.add("is-blurred"),c.classList.remove("is-revealing"),c.style.cursor="pointer",s.forEach(m=>{m.style.transitionDelay="0s"})};t.addEventListener("click",()=>{i(),e.classList.remove("hidden"),setTimeout(()=>e.classList.add("is-visible"),10)});const u=()=>{e.classList.remove("is-visible"),setTimeout(()=>e.classList.add("hidden"),300)};n.addEventListener("click",u),e.addEventListener("click",m=>{m.target===e&&u()}),c.addEventListener("click",r)}

    // --- ⭐ UPDATED: Polaroid Gallery Logic ---
    function initPolaroidGallery() {
        const galleryContainer = document.getElementById('gallery-container');
        if (!galleryContainer) return;

        galleryData.forEach((item, index) => {
            const polaroid = document.createElement('div');
            polaroid.className = 'polaroid sway-animation';
            polaroid.style.transform = `rotate(${Math.random() * 6 - 3}deg)`;
            polaroid.style.animationDelay = `-${Math.random() * 4}s`;

            let frontContentHTML = '';
            if (item.type === 'video') {
                // Autoplay, muted, loop, and playsinline are added for seamless playback
                frontContentHTML = `<video src="${item.video}" autoplay muted loop playsinline></video>`;
            } else {
                frontContentHTML = `<img src="${item.image}" alt="Memory ${index + 1}">`;
            }

            polaroid.innerHTML = `
                <div class="polaroid-inner">
                    <div class="polaroid-front">${frontContentHTML}</div>
                    <div class="polaroid-back font-handwriting text-2xl"><p>${item.note}</p></div>
                </div>`;
            
            galleryContainer.appendChild(polaroid);

            polaroid.addEventListener('click', () => {
                const isFlipped = polaroid.classList.toggle('is-flipped');
                const video = polaroid.querySelector('video');
                
                // Pause the video when flipped to read the note, and play when flipped back.
                if (video) {
                    if (isFlipped) {
                        video.pause();
                    } else {
                        video.play();
                    }
                }
            });
        });
    }
    
    // --- Initial Setup ---
    initWordLock();
});