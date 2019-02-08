(function run()
{
    let x = ['a','b','c','d'];
    x.map(LetterInput=> 
    {
        console.log(LetterInput);
        return LetterInput+"1";
    }).map(LetterInput=>
    {
        console.log(LetterInput);
        return LetterInput+"2";
    }).forEach(LetterInput =>console.log(LetterInput));

})();