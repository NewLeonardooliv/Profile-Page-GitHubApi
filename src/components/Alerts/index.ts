import Swal from "sweetalert2";

export function errorAlert(title = 'Oops...', text = 'Algo de errado aconteceu!') {
    Swal.fire({
        icon: 'error',
        title: title,
        text: text,
    })
}

export function customAlert(title = ``, text = ``, color = `var(--white)`, background = `var(--background)`, width = 600, padding = `3em`) {
    Swal.fire({
        title: title,
        text: text,
        width: width,
        padding: padding,
        color: color,
        background: background,
    })
}