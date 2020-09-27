$(function(){
$("#sbmt").click(function(){
    $("h1").text("Hey There!")
    // $("#url1").val("this is url")
});
chrome.tabs.getSelected(null,function(tab) {

    $("#T1").val(tab.title)
    $("#url1").val(tab.url)
    $("#browsers").val("Chrome")
});
var title = $("#T1").val();
var url = $("#url1").val();

});
