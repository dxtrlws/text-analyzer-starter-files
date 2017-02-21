// your code here!
function totalWords (words) {
    return words.split(' ').length;
}

function averageLength (words) {

}

function renderResults(words) {

}


function analyzeForm () {
 $('button').click(function(){
    var words = $('textarea').val();
    $('.text-report').removeClass('hidden');
    superCounter(words);
 });

}


$(function() {
analyzeForm();

});