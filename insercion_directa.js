function showArrayLeft() {
	var arrayNum = getNumberArray();

	if (array.length < 4) {
		alert('Introduzca un poco mas de elementos!');
	} else {
		document.getElementById("sortarray").value = insertionSortLeft(arrayNum);
	}

}

function showArrayRight() {
	var arrayNum = getNumberArray();

	if (array.length < 4) {
		alert('Introduzca un poco mas de elementos!');
	} else {
		document.getElementById("sortarray").value = insertionSortRight(arrayNum);
	}

}

function getNumberArray() {
	var stringArray = document.getElementById("array").value;  // obtenemos el arreglo separado por comas
	var array = stringArray.split(','); // obteniendo array con el separador de la coma pero los numeros siguen siendo strings

	// creando un nuevo array para tener la representacion numerica del arreglo
	// se uso un metodo de map para iterar en todos los elementos del arreglo array
	var arrayNum = array.map(function (numStr) {
		return parseInt(numStr, 10);
	});

	return arrayNum;
}

// Insercion directa por la izquierda
function insertionSortLeft(array) {
	var key, j;

	for (var i = 1; i < array.length; i++) {
		key = array[i];
		j = i - 1;

		while (j >= 0 && array[j] > key) {
			array[j + 1] = array[j];
			j = j - 1;
		}
		array[j + 1] = key;
	}
	return array;
}

// Insercion directa por la derecha
function insertionSortRight(array) {
	var key, j;

	for (var i = array.length - 1; i >= 0; i--) {
		key = array[i];
		j = i + 1;

		while (j <= array.length && array[j] > key) {
			array[j - 1] = array[j];
			j = j + 1;
		}
		array[j - 1] = key;
	}
	return array;
}