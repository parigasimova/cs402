//15. Eyni zamanda iki ədəd arasında toplama, çıxma, vurma, bölmə əməliyyatlarını yerinə yetirən funsiya yazın. Funksiya dinamik olmalıdır yəni ədədləri parametr olaraq almalıdır.
function toplama(a, b) {
  return a + b;
}
function cixma(a, b) {
  return a - b;
}
function vurma(a, b) {
  return a * b;
}
function bolme(a, b) {
  return a / b;
}
const eded1 = 10;
const eded2 = 5;

console.log("Toplama:" + toplama);
console.log("cixma:" + cixma);
console.log("vurma:" + vurma);
console.log("bolme:" + bolme);

//16. Ədədin tək və ya cüt olduğunu təyin edən funksiya yazın. Funksiya dinamik olmalıdır yəni ədədi parametr olaraq almalıdır.
function tekcut(ədəd) {
  if (ədəd % 2 === 0) {
    return "Cut";
  } else {
    return "Tek";
  }
}

const num = 11;
const final = tekcut(num);
console.log(final);
