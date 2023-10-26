function togglePasswordVisibility() {
	var passwordInput = document.getElementById("password");
	var icone = document.getElementById("icone");
	var p = document.querySelector("span > p");

	//Caso o tipo do input seja password (ocultado -> visível)
	if (passwordInput.type === "password") {
		passwordInput.type = "text";
		icone.src = "Source/image/ocultar.png";
		p.textContent = "Ocultar senha"

		//Caso o tipo do input seja text (visivel -> ocultado)
	} else {
		passwordInput.type = "password";
		icone.src = "Source/image/visivel.png";
		p.textContent = "Mostrar senha"
	}
}

// Event listener para o botão
document.getElementById('btnRedirect').addEventListener('click', function() {
	console.log(window.location.href);
	window.location.href = "principal.html";
	console.log(window.location.href);
});