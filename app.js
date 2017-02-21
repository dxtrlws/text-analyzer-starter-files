// your code here!
function wordCount(text) {
    return text.split(" ").length;

}

function averageLength (text) {
    var totalLength = text.join(" ").length;
    return totalLength / text.length;
}

function uniqueWords(text) {
    
}


function renderResults(text) {
    var totalWordLength = wordCount(text);
    var distictWords = uniqueWords(text);
    var avgLenth = averageLength(text);

    $('.js-wordCount').text(totalWordLength);
    $('.js-uniqueWords').text(distictWords);
    $('.js-averageLength').text(avgLenth);
}


function analyzeForm () {
 $('button').click(function(){
    var words = $('textarea').val();
     $('.text-report').removeClass('hidden');
    renderResults(words);
 });

}


$(function() {
analyzeForm();

});