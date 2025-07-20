document.addEventListener('DOMContentLoaded', () => {

    // ===================================
    // ===       CUSTOMIZE HERE        ===
    // ===================================

    const secretWord = 'meribaby';

    const timelineData = [
      { date: "March 13, 2025", event: "It all began with a simple cup of coffee — and in that moment, my heart found its reason to smile." },
      { date: "March 18, 2025", event: "We shared a quiet, magical day together — a date so simple, yet so unforgettable." },
      { date: "April 07, 2025", event: "You opened the doors to your world and introduced me to your family — a beautiful gesture that meant everything." },
      { date: "May 05, 2025", event: "Our first movie date — where I held your hand in the dark and realized I never wanted to let go." },
      { date: "Today", event: "And now, our love story turns a new page — writing our chapter together, officially and endlessly." }
    ];

    const galleryData = [
        { type: 'image', image: './assets/img/img6.jpeg', note: "klaro kayng ibog kay atek2 picture." },
        { type: 'image', image: './assets/img/img1.jpeg', note: "samot klaro kay gipa ila2." },
        { type: 'video', video: './assets/video/vid1.mp4', note: "bahay lambingan." },
        { type: 'image', image: './assets/img/img2.jpeg', note: "with Bob." },
        { type: 'image', image: './assets/img/img3.jpeg', note: "Cozy dates." },
        { type: 'video', video: './assets/video/vid2.mp4', note: "Pawns and cuddles" },
        { type: 'image', image: './assets/img/img4.jpeg', note: "Sunod2 outfit." },
        { type: 'image', image: './assets/img/img5.jpeg', note: "abi nko bayot ka ari." },
        { type: 'video', video: './assets/video/vid3.mp4', note: "Bahay lambingan part 2." },
        { type: 'image', image: './assets/img/img7.jpeg', note: "Merilin bayot." },
        { type: 'video', video: './assets/video/vid4.mp4', note: "Live in typa shi." },
        { type: 'image', image: './assets/img/img8.jpeg', note: "goofy ass b." },
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

    const bouquet = {
        image: './assets/img/boquet.png',
    
    };

    // --- End of Customization ---
    
    function initWordLock(){const e=document.getElementById("hidden-input"),t=document.getElementById("word-display");if(!e||!t)return;let n=!1;e.focus(),e.addEventListener("input",o=>{if(n)return;let l=o.target.value.toLowerCase();if(t.innerHTML=l.split("").map(a=>`<span class="letter-pop-in">${a}</span>`).join(""),l===secretWord){n=!0,e.blur(),document.getElementById("word-lock-instructions").style.opacity=0;const a=document.querySelectorAll("#word-display span");a.forEach((c,s)=>{setTimeout(()=>{c.classList.add("letter-glow")},100*s)}),setTimeout(runStardustTransition,100*a.length+500)}})}
    function runStardustTransition(){const e=document.getElementById("stardust-transition"),t=document.getElementById("stardust-canvas"),n=t.getContext("2d");e.classList.remove("hidden");let o=[];t.width=window.innerWidth,t.height=window.innerHeight;for(let l=0;l<300;l++)o.push({x:t.width/2,y:t.height/2,radius:2*Math.random()+1,angle:2*Math.random()*Math.PI,speed:8*Math.random()+2,life:1});const a=document.getElementById("lock-page"),c=document.getElementById("hidden-gallery");a.style.transition="opacity 1s",a.style.opacity=0,document.body.classList.remove("bg-gray-900","overflow-hidden"),c.classList.remove("hidden"),c.style.opacity="0",c.style.transition="opacity 1s ease-in .5s";const s=()=>{n.clearRect(0,0,t.width,t.height);let l=!0;o.forEach(d=>{d.life>0&&(l=!1,d.x+=Math.cos(d.angle)*d.speed,d.y+=Math.sin(d.angle)*d.speed,d.life-=.02,d.speed*=.98,n.beginPath(),n.arc(d.x,d.y,d.radius,0,2*Math.PI),n.fillStyle=`rgba(255, 255, 255, ${d.life})`,n.fill())}),c.style.opacity="1",l?(e.classList.add("hidden"),a.classList.add("hidden"),startSlowReveal()):requestAnimationFrame(s)};s()}
    function startSlowReveal(){initFireflies(),initTimeline(),initPolaroidGallery(),initLetterModal(),initBouquetFinale(),setTimeout(()=>document.getElementById("main-title").classList.add("is-visible"),500),setTimeout(()=>document.getElementById("timeline-section").classList.add("is-visible"),1500),document.getElementById("background-music").play().catch(()=>{})}
    function initFireflies(){const e=document.getElementById("fireflies-canvas");if(!e)return;let t=e.getContext("2d"),n=[],o={x:null,y:null};function l(){e.width=window.innerWidth,e.height=window.innerHeight,n=[];let t=(e.width*e.height)/9e3;for(let o=0;o<t;o++)n.push({x:Math.random()*e.width,y:Math.random()*e.height,radius:1.5*Math.random()+.5,vx:.5*Math.random()-.25,vy:.5*Math.random()-.25,opacity:.5*Math.random()+.25})}function a(){t.clearRect(0,0,e.width,e.height),n.forEach(c=>{if(o.x&&o.y){let s=o.x-c.x,d=o.y-c.y,r=Math.sqrt(s*s+d*d);r<150&&(c.x+=s/r/5,c.y+=d/r/5)}c.x+=c.vx,c.y+=c.vy,(c.x<0||c.x>e.width)&&(c.vx*=-1),(c.y<0||c.y>e.height)&&(c.vy*=-1),t.beginPath(),t.arc(c.x,c.y,c.radius,0,2*Math.PI),t.fillStyle=`rgba(255, 255, 255, ${c.opacity})`,t.fill()}),requestAnimationFrame(a)}l(),window.addEventListener("mousemove",c=>{o.x=c.clientX,o.y=c.clientY}),window.addEventListener("resize",l)}
    
    // ⭐ UPDATED: Timeline now reveals on scroll.
    function initTimeline() {
        const section = document.getElementById("timeline-section");
        if (!section) return;
        
        const html = `<h2 class="font-serif-display text-4xl text-purple-300 mb-8">The Story of Us</h2><div class="timeline-container">${timelineData.map((item, i) => `<div class="timeline-item" data-index="${i}"><div class="timeline-content"><h3 class="font-bold text-lg">${item.date}</h3><p class="text-purple-200">${item.event}</p></div></div>`).join("")}</div>
        <a href="#gallery-heading" id="scroll-to-gallery-btn" class="reveal-item">
            <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
        </a>`;
        section.innerHTML = html;
        
        const items = document.querySelectorAll(".timeline-item");
        const heartButton = document.getElementById('scroll-to-gallery-btn');

        if (items.length > 0) {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        
                        // Check if the last timeline item is now visible
                        if (entry.target.dataset.index == items.length - 1) {
                            setTimeout(() => {
                                heartButton.classList.add('is-visible');
                            }, 800);
                        }
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 }); // Trigger when 50% of the item is visible

            items.forEach(item => {
                observer.observe(item);
            });
        }

        // The slow reveal for the main gallery is now triggered by the timeline completion
        const galleryObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setTimeout(()=>document.getElementById("gallery-heading").classList.add("is-visible"), 0);
                setTimeout(()=>document.getElementById("clothesline").classList.add("is-visible"), 500);
                const polaroids = document.querySelectorAll(".polaroid");
                polaroids.forEach((p, i) => {
                    setTimeout(() => p.classList.add("is-visible"), 1000 + 200 * i);
                });
                const totalPolaroidRevealTime = 1000 + polaroids.length * 200;
                setTimeout(() => document.getElementById("open-letter-btn").classList.add("is-visible"), totalPolaroidRevealTime);
                galleryObserver.unobserve(entries[0].target);
            }
        }, { threshold: 0.1 });
        galleryObserver.observe(document.getElementById('gallery-heading'));
    }

    function initPolaroidGallery(){const e=document.getElementById("gallery-container");if(!e)return;galleryData.forEach((t,n)=>{const o=document.createElement("div");o.className="polaroid sway-animation",o.style.transform=`rotate(${6*Math.random()-3}deg)`,o.style.animationDelay=`-${4*Math.random()}s`;let l="";l="video"===t.type?`<video src="${t.video}" autoplay muted loop playsinline></video>`:`<img src="${t.image}" alt="Memory ${n+1}">`,o.innerHTML=`<div class="polaroid-inner"><div class="polaroid-front">${l}</div><div class="polaroid-back font-handwriting text-2xl"><p>${t.note}</p></div></div>`,e.appendChild(o),o.addEventListener("click",()=>{const c=o.classList.toggle("is-flipped"),s=o.querySelector("video");s&&(c?s.pause():s.play())})})}
    function initLetterModal(){const e=document.getElementById("letter-modal"),t=document.getElementById("open-letter-btn"),n=document.getElementById("close-letter-btn"),o=document.getElementById("letter-modal-content"),a=document.getElementById("bouquet-surprise");if(!e)return;let c=!1;const s=`<div class="letter-container is-blurred"><h2 class="font-serif-display text-4xl text-purple-300 mb-6 letter-line">${loveLetter.title}</h2>${loveLetter.paragraphs.map(d=>`<p class="font-handwriting text-2xl text-purple-200 mb-4 letter-line">${d}</p>`).join("")}<p class="font-handwriting text-3xl mt-8 letter-line">${loveLetter.signature}</p><div class="letter-prompt">Touch the letter to reveal its words.</div></div>`;o.innerHTML=s;const d=o.querySelector(".letter-container"),r=o.querySelectorAll(".letter-line"),i=o.querySelector(".letter-prompt"),u=()=>{if(c)return;c=!0,i.style.opacity="0",d.classList.remove("is-blurred"),d.style.cursor="default",d.classList.add("is-revealing"),r.forEach((m,p)=>{m.style.transitionDelay=`${.2*p}s`})},m=()=>{c=!1,i.style.opacity="1",d.classList.add("is-blurred"),d.classList.remove("is-revealing"),d.style.cursor="pointer",r.forEach(p=>{p.style.transitionDelay="0s"})};t.addEventListener("click",()=>{m(),e.classList.remove("hidden"),setTimeout(()=>e.classList.add("is-visible"),10)});const p=()=>{e.classList.remove("is-visible"),setTimeout(()=>{e.classList.add("hidden"),a&&setTimeout(()=>{a.classList.remove("hidden"),setTimeout(()=>a.classList.add("is-visible"),10)},300)},300)};n.addEventListener("click",p),e.addEventListener("click",g=>{g.target===e&&p()}),d.addEventListener("click",u)}
    function initBouquetFinale(){const e=document.getElementById("bouquet-surprise"),t=document.getElementById("bouquet-image"),n=document.getElementById("bouquet-message");e&&(t.src=bouquet.image,n.textContent=bouquet.message,e.addEventListener("click",()=>{e.classList.remove("is-visible"),setTimeout(()=>e.classList.add("hidden"),500)}))}
    
    initWordLock();
});
