$('#Link1').click(function(){
    let timerInterval
        Swal.fire({
    title: 'Redirecting...',
    timer: 500,
    timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
         const b = Swal.getHtmlContainer().querySelector('b')
         timerInterval = setInterval(() => {
           b.textContent = Swal.getTimerLeft()
               }, 100)
        },
    willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
 if (result.dismiss === Swal.DismissReason.timer) {
  window.location.href = "https://instagram.com/aworldjourney._";   
     }
  })
});

$('#Link2').click(function(){
    let timerInterval
        Swal.fire({
    title: 'Redirecting...',
    timer: 500,
    timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
         const b = Swal.getHtmlContainer().querySelector('b')
         timerInterval = setInterval(() => {
           b.textContent = Swal.getTimerLeft()
               }, 100)
        },
    willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
 if (result.dismiss === Swal.DismissReason.timer) {
  window.location.href = "";   
     }
  })
});