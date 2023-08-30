import Swal from 'sweetalert2/dist/sweetalert2.js'
export function alert (msg) {
  Swal.fire({
    title: msg,
    allowOutsideClick: false,
    confirmButtonColor: '#F8412E',
    confirmButtonText: '確認',
    width: 400,
    customClass: {
      title: 'text-class',
      confirmButton: 'confirm-btn-class'
    }
  })
}
