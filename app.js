const video = document.querySelector('#video')
const constraints = {
    video: {
      width: {
        min: 1280,
        ideal: 1920,
        max: 2560,
      },
      height: {
        min: 720,
        ideal: 1080,
        max: 1440,
      },
      facingMode: "environment"
    },
  }


async function exibeVideo () {
    try {
        const videoStream = await navigator.mediaDevices.getUserMedia(constraints)
        video.srcObject = videoStream
    } catch (error) {
        
    }
}
// (async() => {
//     try {
//         const videoStream = await navigator.mediaDevices.getUserMedia(constraints)
//         video.srcObject = videoStream
//     } catch (error) {
        
//     }
// })()
