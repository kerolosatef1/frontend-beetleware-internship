انا بدأت ب ال 
Scope 
علشان ال hosting

Jonas Channel
 hosting  Section8 video91


 video 93 حلو جدا انه بيشرحلك ال cleaning اللي علي ال memory في js اللي هي high level language , c# low level language وبيشرح فائدة ال eventLoop





اولا كده لازم نعرف ان javaScript انه مش interpreter وانه بيستخدم 
JIT 
يعني الاتنين مع بعض وهما ال 
Interpreter , Compiler 



طيب واحد واحده كده احنا اتعلمنا حاليا ال 
parsing , Compilation, Execution 

وده علشان نعرف ازاي الكود بيتنفذ في ال javasCRIPT 
عرفنا ان ال parsing بيقرا الكود 
وبينشئ AST (Abstract Syntax Tree)
وعرفنا ان ال 
Compilation هو 
المحرك بيحول ال
 AST ل Machine Code
وده المسؤل عن ال 
JIT 
ده اللي بيولد كود بسرعة مش بيستعمل ال Interpreter





JavaScript Runtime
ده بوكس بيشمي فيه بالترتيب 
1- اول حاجه بيشتغل عن طريق 
JS Engine 
 وده اللي متختصه ب
Call Stack(اللي بيتم الرن فعليا ) , Heap (اللي بتتخزن فيها ال object)

2- Web Api وده اللي شبه بوكس كده بيتحط فيه كل ال api 
المختة بيه اكتر الحاجات اللي زي ال
Promise واللي منها ال Fetch , async , await , setTimeout , DOM

3- Callback Queue ودي اللي هي ال DOM وكل حاجه مستينها من البوكس تطلع وزي الداتا اللي جي من ال 
api 


4- event Loop دي الجزئية اللي هتنقلها علي الكول استاك علشان تتنفذ 
لا مش هقدر اكتب كل حاجه هكتب العناوين 



video95 + Osama elzero (global scoping 67 , 68 , 69) 
execute context and callstack 

هنا فهمنا ال globalScobe اللي بيحصل علي function 
وعلي ال variable وكمان فهمنا ال execution Context اللي بتتخزن فيها 

وفهمنا ايه اللي هيحصل لو عملنا intialize 
في ال global , local Scope

وفهمنا مشكلة ال var 
اللي بتحصل مع overwrite اللي علي ال scope 

لو انت مثلا واقف globalScobing 
من بره ومستخدم 
var 
وبعديها جيت تعمل 
function
ف انت كده عملت scope تاني
localScope  

"
var interShip = "Beetlware";

function greet() {
   
  var interShip = "Jonas";
  console.log("Inside function:", name);
}

greet();

console.log("Outside function:", name);
"
Beetleware كده global scope 
 , jonas===>localScope
كده مفروض لو تمام 
ميحصلش overwrite 
ليه علشان ده 
scope 
scope وده 

لكن الvar هتخليه يعمل overwrite ويكتب جونس ويطلع الكونسل علي الجونس 

وده مش الصح علشان كده اتعملت ال let 
بجانب برضو ال undefined 
لو حصلت مشكلة ال 
hosting 






video 96 

lexail scope 


دي جزئية ال 
nested scope 
اللي بتحصل وطبعا لما يكون 
variable 
و globalScope 
هقدر اوصله من اي مكان سواء علي hglobal , local 
حتي لو برضو مش 
variable 
وهو function وجواه 
nested function 
ف ده يعتبر globalScope 

وطبعا كل scope بيحترم مكان التاني بمعني انا لو في 
variable 
 مثلا وهي جوه ال 
 local scope
 وانا عاوز استدعيها او اعدل عليها مثلا علي ال global 
 مينفعش 
  وده طبعا بينطبق برضو علي ال 
  arguments 


لما يكونوا ال 
scopes 
اخوات محدش يقدر يوصل ل
variable التاني 

ف ال 
callStack هتشتغل 
GLOBAL الاول 
وبعدين لو في جلوبال فانكشن وبعديه ال نيستد فانكشن لولاده 











V97 + ROUTE ACADEMY

V98




الباقي في 
section 8 هكمله مع 
day 3 
واراجع علي ده برضو لان مفهمتش كويس 
v95 
وبالاخص 
execution context 

____________________________________________________________________________________________________________



Fundmental1

Primitives

let name = "Kero";       String
let age = 24;            Number
let isStudent = true;    Boolean
let city;                Undefined
let score = null;        Null
let id = Symbol("id");   Symbol
let bigNum = 1234567890123456789012345n;  BigInt



Type Coercion 
هي عبارة عن تحويل ال 
types 
ل type
 مختلفة 
وده بيحصل طريقتين 
ال manual , automatic


automatic
console.log("10" + 5);    "105"   بالشكل ده اتحول ل string


علشان بالنسباله كده عملية 
concatoneation 

مختلفة عن الطرح والقسمة والضرب الطرح هيبقي بالنسباله عملية حسابية عادية 



muanual 

console.log(Boolean(0));       // false
console.log(Boolean("Kero"));  // true
console.log(Boolean(""));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null));      // false
String(23);            "23"
String(true);          "true"
String(null);          "null"
String(undefined);     "undefined"
String([1,2,3]);       "1,2,3"



| Keyword | Scope    | Reassignable | Hoisted     | Initial Value |
| ------- | -------- | ------------ | ----------- | ------------- |
| `var`   | Function |  Yes        |   Yes       | `undefined`   |
| `let`   | Block    |  Yes        |   Yes (TDZ) |   Error       |
| `const` | Block    |  No         |   Yes (TDZ) |   Error       |


ده كده اسهل شرح مع اللي احنا فهمناه فوق من 
hosting , scope 


var name = "Kero";  ده مشكلة في ال hosting , scope انه بيعمل overwrite علي الاسكوب بتاعه 
let age = 24;
const country = "Egypt";

name = "Atef"; //  allowed
age = 25;      //  allowed
// country = "USA";  Error - can't reassign const





Refactor var ==> let/const

الافضل بلاش تستخدم 
var 
وبدلها استخدم let 
علشان كوارث ال hosting 
لانه مش هيطلعلك error 
هيطلعلك ب undefined 
وده طبعا غلط 
غير مشكلة ال scope 


var score = 10;
if (true) {
  var score = 20;
  console.log(score); 
}
console.log(score);  scope , overwrite المشكلة


الافضل كده 

let score = 10;
if (true) {
  let score = 20;
  console.log(score);
}
console.log(score);   


summary

كده احنا خلصنا في 
day 1 

fundmental1 بالكامل 
 ,section8 v99 

