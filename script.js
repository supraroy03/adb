/* ---------------- STAR BACKGROUND ---------------- */

function createStars(){

const fragment=document.createDocumentFragment()

for(let i=0;i<140;i++){

let star=document.createElement("div")
star.className="star"

star.style.left=Math.random()*100+"vw"
star.style.top=Math.random()*100+"vh"

fragment.appendChild(star)

}

document.body.appendChild(fragment)

}

createStars()



/* ---------------- SHOOTING STARS ---------------- */

function shootingStar(){

let star=document.createElement("div")
star.className="shooting-star"

star.style.left=Math.random()*100+"vw"
star.style.top=Math.random()*40+"vh"

document.body.appendChild(star)

setTimeout(()=>{star.remove()},1500)

}

setInterval(shootingStar,6000)



/* ---------------- BIRTHDAY COUNTDOWN ---------------- */

const today = new Date()

let birthday = new Date(today.getFullYear(), 5, 12).getTime()

if (birthday < today.getTime()) {
birthday = new Date(today.getFullYear() + 1, 5, 12).getTime()
}

const days=document.getElementById("days")
const hours=document.getElementById("hours")
const minutes=document.getElementById("minutes")
const seconds=document.getElementById("seconds")

function updateCountdown(){

const now=new Date().getTime()
const dist=birthday-now

if(dist<=0){

document.querySelector(".countdown").style.display="none"
document.getElementById("cake").style.display="block"
document.getElementById("openBtn").style.display="inline-block"

return

}

const d=Math.floor(dist/(1000*60*60*24))
const h=Math.floor((dist%(1000*60*60*24))/(1000*60*60))
const m=Math.floor((dist%(1000*60*60))/(1000*60))
const s=Math.floor((dist%(1000*60))/1000)

days.innerHTML=String(d).padStart(2,'0')
hours.innerHTML=String(h).padStart(2,'0')
minutes.innerHTML=String(m).padStart(2,'0')
seconds.innerHTML=String(s).padStart(2,'0')

}

setInterval(updateCountdown,1000)
updateCountdown()



/* ---------------- CHAT MESSAGES ---------------- */

const messages=[

"Happy Birthday, Aaimoni ❤️",

"Today marks the day the world received someone truly special.",

"Someone whose presence quietly brings warmth and peace.",

"You have a kindness that people feel even without words.",

"The strength you carry through difficult days is inspiring.",

"Your heart has a rare gentleness that the world needs more of.",

"Knowing you has been one of the most beautiful surprises in my life.",

"You may not realize it, but your presence brightens ordinary days.",

"Today I simply want to wish you happiness, calm, and success.",

"May every dream you carry slowly find its way into reality.",

"And may life always treat your beautiful heart with kindness.",

"Happy Birthday, Aaimoni."

]



/* ---------------- OPEN LETTER ---------------- */

function openLetter(){

let flame=document.getElementById("flame")
let smoke=document.getElementById("smoke")

if(flame) flame.classList.add("off")
if(smoke) smoke.classList.add("show")

setTimeout(()=>{

let env=document.getElementById("envelope")
env.style.display="block"
env.classList.add("open")

},700)



setTimeout(()=>{

const chat=document.getElementById("letter")
chat.style.display="flex"

let i=0

function sendMessage(){

if(i < messages.length){

let bubble=document.createElement("div")
bubble.className="msg"
bubble.innerText=messages[i]

chat.appendChild(bubble)
chat.scrollTop=chat.scrollHeight

i++

setTimeout(sendMessage,2200)

}

else{

showHearts()

document.getElementById("admire").style.display="block"

setTimeout(()=>{

document.getElementById("finalMessage").classList.add("show")

let music=document.getElementById("music")
if(music) music.play()

setTimeout(()=>{

showNameStars()
drawConstellationLines()

},2000)

},2000)

}

}

sendMessage()

},1200)

}



/* ---------------- FLOATING HEARTS ---------------- */

function showHearts(){

for(let i=0;i<30;i++){

let heart=document.createElement("div")
heart.className="heart"
heart.innerHTML="❤️"

heart.style.left=Math.random()*100+"vw"
heart.style.bottom="-20px"

document.body.appendChild(heart)

setTimeout(()=>{heart.remove()},4000)

}

}



/* ---------------- MUSIC CONTROL ---------------- */

const music=document.getElementById("music")

function toggleMusic(){

if(music.paused){
music.play()
}else{
music.pause()
}

}



/* ---------------- NAME CONSTELLATION (PERMANENT) ---------------- */

function showNameStars(){

const letters={

A:[[0,2],[1,1],[1,3],[2,0],[2,4],[3,0],[3,1],[3,2],[3,3],[3,4],[4,0],[4,4]],

I:[[0,0],[0,1],[0,2],[1,1],[2,1],[3,1],[4,0],[4,1],[4,2]],

M:[[0,0],[1,0],[2,0],[3,0],[4,0],[1,1],[2,2],[1,3],[0,4],[1,4],[2,4],[3,4],[4,4]],

O:[[0,1],[0,2],[1,0],[1,3],[2,0],[2,3],[3,0],[3,3],[4,1],[4,2]],

N:[[0,0],[1,0],[2,0],[3,0],[4,0],[1,1],[2,2],[3,3],[0,4],[1,4],[2,4],[3,4],[4,4]]

}

const name="AAIMONI"

let startX=10
let startY=18

let spacing=8   // bigger spacing for clarity
let letterGap=16

for(let i=0;i<name.length;i++){

let pattern=letters[name[i]]

if(!pattern) continue

pattern.forEach(p=>{

let star=document.createElement("div")
star.className="name-star"

star.style.left=(startX+p[1]*spacing)+"vw"
star.style.top=(startY+p[0]*spacing)+"vh"

document.body.appendChild(star)

})

startX+=letterGap

}

}


/* ---------------- CONSTELLATION LINES ---------------- */

function drawConstellationLines(){

const stars=document.querySelectorAll(".name-star")

for(let i=0;i<stars.length-1;i++){

const s1=stars[i].getBoundingClientRect()
const s2=stars[i+1].getBoundingClientRect()

const dx=s2.left-s1.left
const dy=s2.top-s1.top

const length=Math.sqrt(dx*dx+dy*dy)
const angle=Math.atan2(dy,dx)*180/Math.PI

let line=document.createElement("div")
line.className="constellation-line"

line.style.width=length+"px"
line.style.left=s1.left+"px"
line.style.top=s1.top+"px"
line.style.transform=`rotate(${angle}deg)`

document.body.appendChild(line)

}

}
