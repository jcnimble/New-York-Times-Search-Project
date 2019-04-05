$(document).ready(function(){

    $("#run-search").on("click", function(event){
        event.preventDefault();

        var searchTerm = $("#search-term").val().trim();
        var numberRec = $("#num-records-select").val();
        var startYear = $("#start-year").val().trim();
        var endYear = $("#end-year").val().trim();

        /*------AL AND MATT'S FUNCTION CALL GOES HERE-------*/
        

        /*-----------------------------*/
        
    });


    $("#clear-all").on("click", function(event){
        event.preventDefault();
        $("#well-section").empty();
    });

    addArticle(0,"We're Done","Jen","#");
    addArticle(1,"Wahoo","Kira","#");
    //A function to create and add HTML elements
    //ARGUMENTS
    //index (integer): the index of the article
    //headlineText (string): headline.main
    //bylineText (string): byline.original
    //articuleURL (string): web_url
    function addArticle(index,headlineText,bylineText,articleURL){
        var index = index + 1;
        var link = $("<a>");
        var article = $("<div>");
        article.attr({"class":"well","id":"article-well-"+index});
        
        var headline = $("<h3>");
        headline.attr("class","article-headline");

        var badge = $("<span>");
        badge.attr("class","label label-primary marginR").text(index);

        headline.append(badge).append("<strong>"+headlineText+"</strong>");
        
        var byline = $("<h5>");
        byline.text(bylineText);

        //add all to page
        article.append(headline).append(byline);

        link.attr("href",articleURL);
        link.html(article);

        $("#well-section").append(link);
    }


$.ajax({
/*------------AL AND MATT'S FUNCTION GOES HERE --------- */

/*--------------------------------------------- */
}).then(function(response){

    var headline = response.docs.headline.main;
    var byline = response.docs.byline.original;
    var url = response.response.docs.web_url;

    for (var i = i; i < SpeechRecognitionResultList.length; i++){
        addArticle(i,headline,byline,url);
    }
   
});

});