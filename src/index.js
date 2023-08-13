module.exports = function check(str, bracketsConfig) {
  const r = /\(\)|\[\]|\{\}|\|\||12|34|56|77|88/gm;
  let num1 = "";
  let num2 = str; 
  while (num2 !== num1) {
    num1 = num2,
    num2 = num2.replace(r, '');
  }

  return num1 == '';
}
