'use strict';
document.addEventListener('DOMContentLoaded', () => {
	if (!window.crypto && !window.crypto.subtle) {
		console.warn('Your current browset not support webCrypto Api');
	} else {
		let keyPair = null;
		createAndSaveKeyPair()
			.then((res) => {
				keyPair = res;
				console.log('-----------keyPair-------------------------');
				console.log(keyPair);
				console.log('------------------------------------');
				document.querySelector('#encrypt').addEventListener('click', 'encrypt');
				document.querySelector('#decrypt').addEventListener('click', 'decrypt');
			})
			.catch((err) => {
				console.error(err.message);
			})
	}
});

const createAndSaveKeyPair = () => {
	return window.crypto.subtle.generateKey({
				name: 'RSA-OAEP',
				modulusLength: 2048,
				publicExponent: new Uint8Array([1, 0, 1]),
				hash: {
					name: "SHA-256"
				}
			},
			true, ["encrypt", "decrypt"])
		.then((res) => {
			return res;
		})
}