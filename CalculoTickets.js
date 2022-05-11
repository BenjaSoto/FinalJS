const valorTicket = 200

function preciototal() {
    let cant = document.getElementById("cant").value
    let categoria = document.getElementById("categoria").value

    let total = valorTicket * cant
    if (categoria == 1) { // Estudiante
        let descuento = 0.8 //80%
        total -= total * descuento
    }
    else if (categoria == 2) { // Trainee
        let descuento = 0.5 //50%
        total -= total * descuento
    }
    else { // Junior
        let descuento = 0.15 //15%
        total -= total * descuento
    }
    
    
    document.getElementById("total").innerHTML = total
}

//borrar /resest
function borrar(){
    let nada = '  '
    document.getElementById("total").innerHTML = nada
}