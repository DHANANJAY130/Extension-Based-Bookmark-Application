$(function(){

chrome.tabs.getSelected(null,function(tab) {

    $("#T1").val(tab.title)
    $("#url1").val(tab.url)
    $("#browsers").val("Chrome")
});
var title = $("#T1").val();
var url = $("#url1").val();

});
