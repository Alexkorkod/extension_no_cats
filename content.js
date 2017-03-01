//TODO deal with suffixes
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function isFirstLetterInUpperCase(string) {
	return string.charAt(0) == string.charAt(0).toUpperCase();
}

document.body.innerHTML = document.body.innerHTML.replace(/[C|c]ats*/g, function(match) {
	var result = 'friend Catherine';
	if (match.charAt(match.length-1) == 's') {
		result = 'friends Catherine and Carl';
	}

	if (isFirstLetterInUpperCase(match)) {
		result = capitalizeFirstLetter(result);
	}
	return result;
});