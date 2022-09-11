
let code =document.getElementById('code')
function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6
  }
  let generator=generateSequence()
code.addEventListener('keypress',function(){
    let num=generator.next()['value']
    if (num==6) {
        location.href='main.html';
    }
    else{
        let next=`itemimg${num+1}`
    console.log(String(next))
    let current=`itemimg${num}`
    console.log(current)
    document.getElementById(String(next)).style.display="block"
    document.getElementById(String(current)).style.display="none"
    }

})