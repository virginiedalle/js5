var languagesArrayCreation = function () {
var languages = ['Html', 'CSS', 'Java', 'PHP'];
return languages;
}
//Créer un tableau "languages" contenant "Html", "CSS" , "Java", "PHP".
var numbersArrayCreation = function () {
  var numbers = [0, 1, 2 ,3 , 4, 5];
  return numbers;
}
//Créer un tableau "numbers" contenant les numbers de 0 à 5.
var ElementReplacement = function (languages) {
  languages[2] = 'Javascript';
  return languages;
  // languages.splice(2,1, 'Javascript');
  // return languages;
}
//Remplacer le 3ème élement du tableau par "Javascript".
var AddElementToLanguagesArray = function (languages) {
  languages.push('Ruby', 'Python');
  return languages;
}
//Ajouter "Ruby" et "Python" à la fin du tableau.
var AddElementToNumbersArray = function (numbers) {
  numbers.unshift(-2, -1);
  return numbers;
}
//Ajouter "-2" et "-1" au début du tableau numbers.
var deleteArrayFirstElement = function (languages) {
  languages.shift();
  return languages;
}
//Supprimer le 1er élément du tableau languages.
var deleteArrayLastElement = function (languages) {
  languages.pop();
  return languages;
}
//Supprimer le dernier élément du tableau languages.
var stringToArray = function (socialMediaInString) {
  return socialMediaInString.split(',');
}
//Faire de la chaîne "socialMediaInString" un tableau "socialMedia".
var arrayToString = function (languages) {
      return languages.join(',');
    // return languages.toString();
}
//Faire du tableau "languages" une chaîne "languagesInString". Séparer les languages par une virgule.
var arraySort = function (socialMedia) {
  return socialMedia.sort();
}
//Trier le tableau "socialMedia".(par ordre alphabétique)
var arrayInvert = function (languages){
  return languages.reverse();
}
//Bonus : Inverser le tableau "languages".
