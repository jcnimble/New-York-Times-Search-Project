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
    })
});