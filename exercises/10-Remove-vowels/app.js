// Your code goes here
const rapid= (name)=>{
    /*
    let name2=Array.from(name);
        for(let i=0;i<name.length;i++){
            if(name[i]=="a" || name[i]=="e" || name[i]=="i" || name[i]=="o" || name[i]=="u"){   
             name2.splice(i,1);
        }
        }
        name2=name2.join("");
        name2=name2.toString();
        return name2.toUpperCase();
        */
       //solucion de 4geek
       let consonants = [];
       for(let letter of name.toLowerCase()){
           if(['a','e','i','o','u'].includes(letter) == false)
               consonants.push(letter.toUpperCase())
       }
       return consonants.join('');
   
      
}

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
