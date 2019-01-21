function pairElement(str) {
  return str.split('').map(item => [item, { A:'T', T:'A', G:'C', C:'G'}[item]]);
}

pairElement("ATCGA");