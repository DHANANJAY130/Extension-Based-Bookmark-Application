$(function(){
$("#sbmt").click(function(){
    $("h1").text("Hey There!")
    // $("#url1").val("this is url")
});
chrome.tabs.getSelected(null,function(tab) {

    $("#T1").val(tab.url)
    $("#url1").val(tab.title)
    $("#browsers").val("Chrome")
});
var url = $("#T1").val();
var title = $("#url1").val();

});