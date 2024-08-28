const string = "콘크리트 빌딩 숲 속 또다른 숲";//원하는 텍스트를 string변수 선언
const split = string.split(""); //string의 텍스트를 여러개의 문자열로 나눠줌
const str = 'The quick brown fox';
//split을 이용해 문자열 나누기
const words = str.split(' ');
console.log(words);
//["The", "quick", "brown", "fox"]
const chars = str.split('');
console.log(chars);
// expected output: ["T", "h", "e", " ", "q", "u", "i", "c", "k", " ", …]