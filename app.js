document.addEventListener("DOMContentLoaded", () => {
    const inputAmigo = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    let amigos = [];

    window.agregarAmigo = function () {
        const nombre = inputAmigo.value.trim();

        if (nombre === "") {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }

        if (amigos.includes(nombre)) {
            alert("Este nombre ya está en la lista.");
            return;
        }

        amigos.push(nombre);
        actualizarLista();
        inputAmigo.value = ""; 
    };

    function actualizarLista() {
        listaAmigos.innerHTML = ""; 
        amigos.forEach((nombre, index) => {
            const li = document.createElement("li");
            li.textContent = nombre;

            const btnEliminar = document.createElement("button");
            btnEliminar.textContent = "❌";
            btnEliminar.classList.add("btn-delete");
            btnEliminar.onclick = () => eliminarAmigo(index);

            li.appendChild(btnEliminar);
            listaAmigos.appendChild(li);
        });
    }

    function eliminarAmigo(index) {
        amigos.splice(index, 1);
        actualizarLista();
    }

    window.sortearAmigo = function () {
        if (amigos.length < 2) {
            alert("Debe haber al menos 2 nombres para realizar el sorteo.");
            return;
        }
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceAleatorio];
        resultado.innerHTML = `<p>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎉</p>`;
        amigos = [];
        actualizarLista();
    };
});
