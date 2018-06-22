/**
 * Created by Administrator on 2018/6/20.
 */
function Pet(words){
    this.words = words;
    this.speak = function(){
        console.log(this.words);
    }
}

function Dog(words){
    Pet.call(this,words);
    //Pet.apply(this,arguments);
}

var dog = new Dog("wang");
dog.speak()