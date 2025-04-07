function changeImg(newSrc) {
    document.getElementById("mainImg").src = newSrc;
}

function resetImg() {
    document.getElementById("mainImg").src = "./assets/main.png";
}

setTimeout(function() {
    const notiNewMsg = document.getElementById('noti_new_msg');
    const notiAudio = document.getElementById('ding');

    notiAudio.play();

    notiNewMsg.innerHTML = `
        <div class="pro-pic-wrapper" id='rfy-pro-pic' >
            <div class="noti-position">
                <div class='notification rfy-noti'>+1</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                </svg>                       
            </div>  
            <div class="profile-pic-rafayel"></div>
            <p>Rafayel</p>
        </div>`
}, 16000)

const notiNewMsg = document.getElementById('noti_new_msg');

notiNewMsg.addEventListener('click', () => {
    const niaMsg = document.querySelectorAll('.msg-wrapper');
    const rfyMsg = document.getElementById('rfy-chat')
    const rfyNotiIcon = document.getElementsByClassName('noti-position')
    
    niaMsg.forEach((msg) => {
        msg.remove();
    })
    Array.from(rfyNotiIcon).forEach((el) => {
        el.remove();
    })

    rfyMsg.innerHTML = `
        <div class="msg-wrapper-rfy">
            <div style="margin-right: 8px;">Rafayel</div>
            <div class="msg-box">
                <div>Hey! cutie</div>
            </div>
        </div>`;
    
    setTimeout(() => {
        rfyMsg.innerHTML += `
            <div class="msg-wrapper-rfy">
                <div style="margin-right: 8px;">Rafayel</div>
                <div class="msg-box">
                    <div>I actually remember but....</div>
                </div>
            </div>`;
    }, 2000)
    setTimeout(() => {
        rfyMsg.innerHTML += `
            <div class="msg-wrapper-rfy">
                <div style="margin-right: 8px;">Rafayel</div>
                <div class="msg-box">
                    <div>Nia told me it's yor birthday today</div>
                </div>
            </div>`;
    }, 4000)
    setTimeout(() => {
        rfyMsg.innerHTML += `
            <div class="msg-wrapper-rfy">
                <div style="margin-right: 8px;">Rafayel</div>
                <div class="msg-box" >
                    <div id='voice-msg'>
                        <div id="playBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                            </svg>
                        </div>
                        <div id='wave_form'></div>
                    </div>
                </div>
            </div>`;

            const waveId = document.getElementById('wave_form');

            const playVoiceMsgBtn = document.getElementById('playBtn');

            let wavesurfer = WaveSurfer.create({
                container: waveId,
                waveColor: 'rgb(152, 152, 152)',
                progressColor: 'rgb(255, 255, 255)',
                height: 20,
            });
                    
            wavesurfer.load('./assets/RFY-Audio.mp3');

            playVoiceMsgBtn.onclick = function(){
                wavesurfer.playPause();
            }
    }, 7000)
});