function spinalCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().replace(/(\s|_)/g, '-');
  }

spinalCase('The_Andy_Griffith_Show');

//return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();

