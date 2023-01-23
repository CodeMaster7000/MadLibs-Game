var submitButton = $(".btn");
$(submitButton).click(function(event) {
  var nounInput = $("#noun").val();
  var verbInput = $("#verb").val();
  var adverbInput = $("#adverb").val();
  var adjectiveInput = $("#adjective").val();
  alert("The " + nounInput + " " + verbInput + " very " + adverbInput + ". " + "The " + nounInput + " is also quite " + adjectiveInput + "! ");
});
