$(document).ready(function(){

    $("#run-search").on("click", function(event){
        event.preventDefault();

        var searchTerm = $("#search-term").val().trim();
        var numberRec = $("#num-records-select").val();
        var startYear = $("#start-year").val().trim();
        var endYear = $("#end-year").val().trim();
        
    });

    $("#clear-all").on("click", function(event){
        event.preventDefault();
        $("#well-section").empty();
    });


    function addArticle(index,headlineText,bylineText,articleURL){
        var index = index + 1;
        var link = $("<a>");
        var article = $("<div>");
        article.attr({"class":"well","id":"article-well-"+index});
        
        var headline = $("<h3>");
        headline.attr("class","article-headline");

        var badge = $("<span>");
        badge.attr("class","label label-primary").text(index);

        headline.append(badge).append("<strong>"+headlineText+"</strong>");
        
        var byline = $("<h5>");
        byline.text(bylineText);

        //add all to page
        article.append(headline).append(byline);

        link.attr("href",articleURL);
        link.html(article);

        $("#well-section").append(link);
    }
});