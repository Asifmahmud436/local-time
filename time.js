let root = document.querySelector('.root')

setInterval(()=>{
    let time = new Date()
    root.innerText = time.toLocaleTimeString()
},1000)