// your code here!
// calculate word length
function wordCount(text) {
    return text.split(" ").length;

}

//find average length of words
function averageLength (text) {
    var totalLength = text.join(" ").length;
    return totalLength / text.length;
}

//find unique words
function uniqueWords(text) {
    var unique = [];
    for (var i=0; i< text.length; i++) {
        if (unique.indexOf(text[i]) === -1) {
            unique.push(text[i]);
        }
    }
    return unique.length;
}

//render results to the DOM
function renderResults(text) {
    var totalWordLength = wordCount(text);
    var distinctWords = uniqueWords(text);
    var averageWordLength = averageLength(text);

    $('.js-wordCount').text(totalWordLength);
    $('.js-uniqueWords').text(distinctWords);
    $('.js-averageLength').text(averageWordLength);
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