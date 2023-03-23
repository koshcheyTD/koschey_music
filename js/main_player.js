const 
    player=document.querySelector('.audio_main');
    playBtn=document.querySelector('.play');
    prevBtn=document.querySelector('.prev');
    nextBtn=document.querySelector('.next');
    imgAlbum=document.querySelector('.icon_disc');
    artist=document.querySelector('.name');
    track=document.querySelector('.track');
    menuBtn=document.querySelector('.menu_btn');
    progressConteiner=document.querySelector('.progress_conteiner');
    progress=document.querySelector('.progress');
    audio=document.querySelector('.audio');
    imgSrc=document.querySelector('.img_src');
    cover=document.querySelector('.img_album');
    playList=document.querySelector('.playlist');
    playlistTab=document.querySelector('.playlist_tab');
    playlistTrack1=document.querySelector('.playlist_track1');
    playlistTrack2=document.querySelector('.playlist_track2');
    playlistTrack3=document.querySelector('.playlist_track3');
    volumeSlider=document.querySelector('.volume_slider');
    muteVolume=document.querySelector('.mute_volume');
    imgMute=document.querySelector('.img_mute');
    iconMenu=document.querySelector('.nav_icon_menu');
    iconBtn=document.querySelector('.icon_menu');
    navMenu=document.querySelector('.nav_menu');
    scrollTop=document.querySelector('.scroll');
    

//Songs title
const songs=['Вместе','Орхидея','Русалка']

//Song one
let songIndex=0

function letSong(song){
    track.innerHTML=song
    audio.src=`tracks/${song}.mp3`
    cover.src='./img_Album/disc.svg'
}
letSong(songs[songIndex])

//Play
function playSong(){
    player.classList.add('play')
    cover.classList.add('active')
    imgSrc.src='./img_Album/pause.svg'
    audio.play()
}

//Pause
function pauseSong(){
    player.classList.remove('play')
    cover.classList.remove('active')
    imgSrc.src='./img_Album/play.svg'
    audio.pause()
}
playBtn.addEventListener('click',()=>{
    const isPlaying=player.classList.contains('play')
    if(isPlaying){
        pauseSong()
    }
    else{
        playSong()
    }
})
//Next song
function nextSong(){
    songIndex++

    if(songIndex>songs.length -1){
        songIndex=0
    }

    letSong(songs[songIndex])
    playSong()
}
nextBtn.addEventListener('click', nextSong)

//Prev Song
function prevSong(){
    songIndex--

    if(songIndex<0){
        songIndex=songs.length-1
    }
    letSong(songs[songIndex])
    playSong()
}
prevBtn.addEventListener('click', prevSong)

//progress bar
function updateProgress(e){
const{duration, currentTime}=e.srcElement
const progressPersent=(currentTime/duration)*100
progress.style.width=`${progressPersent}%`
}
audio.addEventListener('timeupdate',updateProgress)

//click progress
function setProgress(e){
const width = this.clientWidth
const click = e.offsetX
const duration=audio.duration
audio.currentTime=(click/width)*duration
}
progressConteiner.addEventListener('click',setProgress)

//menu BTN
menuBtn.addEventListener('click', menuTransform)
function menuTransform(e){
    e.preventDefault();
    playList.classList.toggle('open');
    menuBtn.classList.toggle('active');
    playlistTab.classList.toggle('open');
    artist.classList.toggle('active');
    track.classList.toggle('active');
    imgAlbum.classList.toggle('active');
}
function playlistAction1(){
    songIndex=0;
    playlistTrack1.classList.add('active');
    
    letSong(songs[songIndex]);
    playSong()
}
function playlistAction2(){
    songIndex=1
    playlistTrack2.classList.add('active');
    
    letSong(songs[songIndex]);
    playSong()
}
function playlistAction3(){
    songIndex=2;
    playlistTrack3.classList.add('active');
    
    letSong(songs[songIndex]);
    playSong()
}

//Volume
function setVolume(){
    audio.volume=volumeSlider.value/100;
}
muteVolume.addEventListener('click', volumeOff)
    function volumeOff(){
        if(audio.muted){
            audio.muted=false;
            imgMute.src='./img_Album/volume.svg';
        } else{
            audio.muted=true;
            imgMute.src='./img_Album/volume_no.svg';
        }
    }

//icon menu
iconBtn.addEventListener('click', () =>{
    if(iconMenu.classList.contains('disp')==true){
        iconMenu.classList.remove('disp');
    } else{
        iconMenu.classList.add('disp');
    }
})

navMenu.addEventListener('click', menuClose)
    function menuClose(){
        if(iconMenu.classList.add('disp')==true){
            iconMenu.classList.remove('disp');
        } 
    }

//scroll
window.onscroll=()=>{
    if(window.scrollY>300){
        scrollTop.classList.remove('scroll');
    } else if(window.scrollY<300){
        scrollTop.classList.add('scroll');
    }
}
scrollTop.onclick=()=>{
    window.scrollTo(0,0);
}
