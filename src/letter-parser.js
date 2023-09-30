function letterParser(templateText) {
    var rg_expressions = /\b(?:IF\W+(?:\w+\W+){1,}?THEN|ELSE IF\W+(?:\w+\W+){1,}?THEN|ELSEIF\W+(?:\w+\W+){1,}?THEN|ELSE|ENDIF|END IF|Endif|endif|EndIf|End if|end if|End If)\b/g;
    var rg_controls = /\|([a-zA-Z0-9 #/?_\@\\'\"$^*()\-+!,~%.&\[\]:;]+)\|/g;

    const matchesExpressions = templateText.match(rg_expressions);
    const matchesControls = templateText.match(rg_controls);
    return { expressions: matchesExpressions, controls: matchesControls };
}
    //1. Find out control's parent expression
    //example pass the control name |age| and identify expressions contain this
    //a {IF |age| > 21  THEN}
    //b {ELSEIF |age < 18|  THEN}

  /*
    Control name -> control value
    evalute
  */

 //find out the context of the above two expressions
    //Case 1
    /*
    This is conditional text
    |text for grownups|
    {IF |name| > "varun"  THEN}
        Hello VArun pariatur |vp|
    {EndIF}
    */
    /*Case 2
     This text is for minors.
     |text for kids|   
    */

    //implement stack => find the context of expressions
    //expression evaluate





var result = letterParser(templateText);
utils.printCollection("Exp", result.expressions);
utils.printCollection("Exp", result.expressions);

//var GetHidenControls = function (controlName, controlValue){
//     console.log("hello");
// };
// var GetVisibleControls = function (controlName, controlValue){
//     console.log("hello");
// };

