function showValidationMessage(message) {
    const validationMessage = document.getElementById('validationMessage');
    validationMessage.textContent = message;
    validationMessage.style.display = 'block';
    setTimeout(() => {
        validationMessage.style.display = 'none';
    }, 10000); // 10 segundos
}

function encryptText() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    if (!inputText.match(/^[a-z\s]+$/)) {
        showValidationMessage('Solo se permiten letras minúsculas y espacios.');
        return;
    }

    const encryptionMap = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
    let encryptedText = inputText.replace(/[aeiou]/g, char => encryptionMap[char]);
    document.getElementById('outputText').value = encryptedText;
    document.getElementById('outputSection').style.display = 'flex';
}

function decryptText() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    if (!inputText.match(/enter|imes|ai|ober|ufat/g)) {
        showValidationMessage('El texto debe estar encriptado correctamente para poder desencriptarlo.');
        return;
    }

    const decryptionMap = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };
    let decryptedText = inputText;
    for (let key of Object.keys(decryptionMap)) {
        const regex = new RegExp(key, 'g');
        decryptedText = decryptedText.replace(regex, decryptionMap[key]);
    }
    document.getElementById('outputText').value = decryptedText;
    document.getElementById('outputSection').style.display = 'flex';
}

function copyText() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand('copy');

    const copyButton = document.querySelector('.copy-btn');
    copyButton.textContent = 'Texto copiado';
    setTimeout(() => {
        copyButton.textContent = 'Copiar';
    }, 3000);
}

function clearOutput() {
    document.getElementById('outputText').value = '';
    document.getElementById('outputSection').style.display = 'none';
}

