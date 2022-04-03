function ePrimo(n) {

  let primo = true;
  for (let i = 2; i < n; i += 1) {
    if (n % i == 0) {
      primo = false;
      break;
    }
  }

  if (primo == true) {
    return `O número ${n} é primo!`;
  } else if (primo == false) {
    return `O número ${n} não é primo.`;
  }
}

