/*


A signup form is receiving names with inconsistent spacing and casing. Normalize the names before showing them back to the user.

Write these functions:

cleanText(text) should remove spaces from the start and end of a string.

capitalize(text) should uppercase the first character and lowercase the rest.

formatDisplayName(firstName, lastName) should clean and capitalize both names, then return the full display name.

*/

function cleanText(text) {
  return text.trim();
}

function capitalize(text) {
  text = text[0].toUpperCase() + text.slice(1, text.length).toLowerCase();
  return text;
}

function formatDisplayName(firstName, lastName) {
  let firstname = capitalize(cleanText(firstName));
  let lastname = capitalize(cleanText(lastName));
  return firstname + " " + lastname;
}

console.log(formatDisplayName("  ava", "STONE  "));
console.log(formatDisplayName("nOAh", "  kim"));
console.log(formatDisplayName("  mINA  ", "pATEL"));
