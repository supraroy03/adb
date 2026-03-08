/* STARS */

for(let i=0;i<120;i++){
let s=document.createElement("div")
s.className="star"
s.style.left=Math.random()*100+"vw"
s.style.top=Math.random()*100+"vh"
document.body.appendChild(s)
}

/* BIRTHDAY */

const birthday=new Date("June 12, 2026 00:00:00").getTime()

const message=`Happy Birthday ❤️

You were born on 12 June 2003.

Some people choose a profession,
but some people become a light in it.

You chose to care for others,
to comfort, to heal,
and to stand beside people
when they need it the most.

Being a nurse takes strength,
patience, and a very kind heart.

And those are things I admire about you.

But beyond everything you do,
I am grateful for the person you are.

A friend who understands,
who listens,
and who makes ordinary days lighter.

On your birthday,
I wish you peace,
happiness,
and success in everything you dream of.`

function update(){

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

setInterval(update,1000)

function openLetter(){

const l=document.getElementById("letter")

l.style.display="block"

let i=0

function type(){

if(i<message.length){
l.innerHTML+=message.charAt(i)
i++
setTimeout(type,35)
}

}

type()

setTimeout(()=>{
document.getElementById("admire").style.display="block"
},7000)

}

const music=document.getElementById("music")

function toggleMusic(){
if(music.paused)music.play()
else music.pause()
}