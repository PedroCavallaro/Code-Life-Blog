import Swal from "sweetalert2";
export const swal = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
});
