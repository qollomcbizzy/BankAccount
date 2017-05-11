$(document).ready(function(){
  //back-end logic
  function Account(name,initial){
    this.Personname=name;
    this.PersonInitial=initial;
    this.operations=[];
  }
  //user Interface
  $("form#bankaccount").submit(function(event){
    event.preventDefault();
    var inputedName=$("input#new-name").val();
    var inputInitial=parseInt($("input#new-initial").val());
    newAccount= new Account(inputedName,inputInitial);
  });
});
