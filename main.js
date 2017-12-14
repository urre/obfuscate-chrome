const urlParams = new URLSearchParams(window.location.search)

if(urlParams.get('action').includes('obfuscate')) {
	obfuscate('body')
}
