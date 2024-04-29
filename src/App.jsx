function App() {
	const copyToClipboard = async () => {
		try {
			const text = document.querySelector('#paragraph').innerText
			await navigator.clipboard.writeText(text)
			alert('El texto se ha copiado correctamente')
		} catch (error) {
			console.log(error)
			alert('Ha habido un error al copiar, prueba de nuevo')
		}
	}

	return (
		<>
			<article>
				<button onClick={copyToClipboard}>Copiar</button>
				<p id='paragraph'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
					at minus eum temporibus soluta reprehenderit, debitis molestias quidem
					nam vitae.
				</p>
			</article>
		</>
	)
}

export default App
