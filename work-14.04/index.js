let word = "    Men bu gun Bakiya gedirem ki, yaxsi dincelim. Gelende kime ne alim? Kiminse ureyi ne ise istese gedib ozu alar...";


//1
// console.log("length: ",word.length);
// console.log("slice: ",word.slice(16,20));
// console.log("substring: ", word.substring(7,-8));
// console.log("replace:",word.replace("e", "ə"));
// console.log("replaceAll:",word.replaceAll("e", "ə"));
// console.log("toUpperCase: ",word.toUpperCase());
// console.log("toLowerCase: ", word.toLowerCase());
// console.log("concat: ",word.concat());
// console.log("trim: ", word.trim());
// console.log("trimstart: ", word.trimStart());
// console.log("trimend: ",word.trimEnd());
 //console.log("padstart: ", word.padStart(120,"x"));
// console.log("padend: ",word.padEnd(120,"0"));
// console.log("charat: ", word.charAt(6));
// console.log("charcodeat: ", word.charCodeAt(18));
// console.log("split: ", word.split("*"));


//2
function uzunluq(word) {
    let word_uzunluq = word.length;
    return word_uzunluq;
}
console.log("uzunluq: ", uzunluq(word));




//3
function ikinci_soz(word) {
    let words = word.trim().split(' ');
  
    if (words.length <= 2) {
      console.log("Stringdə ikinci söz yoxdur");
      return;
    }
  
    console.log(words[1]);
  }
  
    

