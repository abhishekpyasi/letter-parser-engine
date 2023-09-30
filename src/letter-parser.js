function letterParser(templateText) {
    var expressions = null;
    var controls = null;

    var rg_expressions = /\b(?:IF\W+(?:\w+\W+){1,}?THEN|ELSE IF\W+(?:\w+\W+){1,}?THEN|ELSEIF\W+(?:\w+\W+){1,}?THEN|ELSE|ENDIF|END IF|Endif|endif|EndIf|End if|end if|End If)\b/g;
    var rg_controls = /\|([a-zA-Z0-9 #/?_\@\\'\"$^*()\-+!,~%.&\[\]:;]+)\|/g;

    const matchesExpressions = templateText.match(rg_expressions);
    const matchesControls = templateText.match(rg_controls);

    if (matchesExpressions) {
      for (const match of matchesExpressions) {
        console.log(`Expression found: ${match}`);
      }
    } else {
      console.log('No expressions found.');
    }

    if (matchesControls) {
      for (const match of matchesControls) {
        console.log(`Control found: ${match}`);
      }
    } else {
      console.log('No controls found.');
    }



    

    return { expressions: matchesExpressions, controls: matchesControls };
}


var result = letterParser(templateText);
console.log(result);
//obj.sayHello()

//var GetHidenControls = function (controlName, controlValue){
//     console.log("hello");
// };
// var GetVisibleControls = function (controlName, controlValue){
//     console.log("hello");
// };

