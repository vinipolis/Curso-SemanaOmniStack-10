import React from 'react'

import './global.css'
import './App.css'
import './Sidebar.css'

function App() {
	return (
		<div id="app">
			<aside>
				<strong>Cadastrar</strong>
				<form>
					<div class="input-block">
						<label htmlFor="github_username">Usúario do Github</label>
						<input name="github_username" id="github_username" required />
					</div>

					<div class="input-block">
						<label htmlFor="techs">Tecnologias</label>
						<input name="techs" id="techs" required />
					</div>

					<div className="input-group">
						<div class="input-block">
							<label htmlFor="latitude">Latitude</label>
							<input name="latitude" id="latitude" required />
						</div>

						<div class="input-block">
							<label htmlFor="longitude">Longitude</label>
							<input name="longitude" id="longitude" required />
						</div>
					</div>

					<button type="submit">Salvar</button>
				</form>
			</aside>
			<main></main>
		</div>
	)
}

export default App



// Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propriedade: Informações que um componente Pai passa para o componente Filho
// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)


// 	const [like, setLike] = useState(0)

// 	function incrementLike() {
// 		setLike(like + 1)
// 	}

// 	return (
// 		<>
// 			<button onClick={incrementLike}>Like {like}</button>
// 		</>
//  )