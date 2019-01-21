function myReplace(str, before, after) {
  return before[0] === before[0].toUpperCase() ? str.replace(before, (after.charAt(0).toUpperCase() + after.slice(1))) : str.replace(before, after);
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");