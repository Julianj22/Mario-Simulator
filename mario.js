console.log("loaded!")


let play=document.querySelector("#player")
let touchbox = document.querySelector('#touchME')
touchbox.addEventListener('collide', e => {
play.setAttribute("position","11 3 -320")
})
let touchbox2=document.querySelector('#touchME2')
touchbox2.addEventListener('collide',e=>{
    play.setAttribute('position',"2 2 2")
})
let game=document.querySelector('#gameover')
game.addEventListener('collide',e=>{
    play.setAttribute('position',"2 2 2")
})

let bowser= document.querySelector('#bowser')
bowser.addEventListener('collide', e => {
    play.setAttribute('position','1 0 2')
})

let stars=document.querySelector('#star')
stars.addEventListener('collide',e=>{
    play.setAttribute('position',"-2.159 201 160")
})


// let knu=document.querySelector('#touchME')
// knu.addEventListener('collide',e=>{
//     play.setAttribute('position', "-37.433 24 46.538")
// })


function sound(src) {
    let audio=new Audio(src)
    audio.setAttribute("preload", "auto");
    audio.loop=true
    audio.play()
}
//wait for a keypress, click or touch to play due to chromes auto play policy
let playing=false
events=['click','keydown','touchstart','touchmove']
events.forEach(event => {
    document.body.addEventListener(event,e=>{
        if(playing==false){
            sound('Smb.mp3')
        }
        playing=true
    })
});
alert('Julian and Edwins Upperline project:Mario Simulator: Enjoy, warning no copyright :)' )
