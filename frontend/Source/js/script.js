// visibilidade da senha
function togglePasswordVisibility() {
	var passwordInput = document.getElementById("password");
	var icone = document.getElementById("icone");
	var p = document.querySelector("span > p");

	//Caso o tipo do input seja password (ocultado -> visível)
	if (passwordInput.type === "password") {
		passwordInput.type = "text";
		icone.src = "/frontend/Source/image/visivel.png";
		p.textContent = "Ocultar senha"

		//Caso o tipo do input seja text (visivel -> ocultado)
	} else {
		passwordInput.type = "password";
		icone.src = "/frontend/Source/image/ocultar.png";
		p.textContent = "Mostrar senha"
	}
}

const pwVisibility = document.getElementById('TogglePwVisibility')
pwVisibility.addEventListener('click', togglePasswordVisibility);



// Acesso aos clientes

const fetchClientes = async () => {
	const response = await fetch('http://localhost:8080/clientes');
	const clientes = response.json();
	return clientes
}

document.getElementById('btnRedirect').addEventListener('click', async (event) => {
	event.preventDefault();
	const clientes = await fetchClientes();

	var exists = false;

	clientes.forEach(cliente => {
		const { email, senha } = cliente;
		console.log(cliente); // Apagar isso

		if (document.getElementById('email').value === email && document.getElementById('senha').value === senha) {
			exists = true;
		} 
	});

	if (exists) {
		alert('Login correto')

		document.getElementById('email').value = ""
		document.getElementById('senha').value = ""

		window.location.href = "/frontend/principal.html";

	} else {
		alert('Email ou senha incorretos')
	}
});

