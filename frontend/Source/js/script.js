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
document.getElementById('btnRedirect').addEventListener('click', function () {
	console.log(window.location.href);
	window.location.href = "/frontend/principal.html";
	console.log(window.location.href);
});


// let express = require('express')
// let mysql = require('mysql2')
// let conexao = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: '1234',
// 	database: 'auaufollowstore'
// });

// function togglePasswordVisibility() {
// 	var passwordInput = document.getElementById("password");
// 	var icone = document.getElementById("icone");
// 	var p = document.querySelector("span > p");

// 	//Caso o tipo do input seja password (ocultado -> visível)
// 	if (passwordInput.type === "password") {
// 		passwordInput.type = "text";
// 		icone.src = "Source/image/ocultar.png";
// 		p.textContent = "Ocultar senha"

// 		//Caso o tipo do input seja text (visivel -> ocultado)
// 	} else {
// 		passwordInput.type = "password";
// 		icone.src = "Source/image/visivel.png";
// 		p.textContent = "Mostrar senha"
// 	}
// }

// function connectDatabase() {
// 	console.log('Connection estabilished...')

// 	conexao.query( // Buscando dados
// 		'select * from clientes',
// 		(erro, result) => {
// 			console.log(result)
// 		}
// 	)
// }
