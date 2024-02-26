

function createNewVisitor(event){
document.getElementById('create-visitor-form').addEventListener('submit',event => event.preventDefault());
const nameInput = document.getElementById('name');
const name = nameInput.value.trim();

if(!name){
  alert("Name cannot be empty!)");
}

// if(!selectedAvatar){
//   alert("please select an avatar!");
// }

if(visitorExists(name)){
  alert("A visitor with this name already exists!");
}

const newVisitor = makeVisitor(name,selectedAvatar);
visitors.push(newVisitor);
localStorage.setItem('visitors', JSON.stringify(visitors));
window.location.href = "login.html";

const createForm = document.getElementById("create-visitor-form");
if (createForm) {
  createForm.addEventListener("submit", createNewVisitor);}
}


function visitorExists(name) {
  return visitors.some(visitor => visitor.name === name);
}

function makeVisitor(name, avatar) {
  return { name, coins: 50, image: avatar };
}



















  /**
  צרו אורח חדש כאן 👇
  ניתן לפצל את הלוגיקה למספר בלתי מוגבל של פונקציות.
  כמו שיותר מפוצל וטהור - פונקציות עם מטרה יחידה ושם משמעותי שמסביר מה הפונקציה עושה ומחזירה
  דוגמא:

  const validateFormInputs = () => {
    בודק האם האינפוטים קיימים ויש בהם ערך
    מחזיר האם תקין או לא (בוליאני)
  }

  const visitorExists = (name) => {
    מקבל שם ומחזיר תשובה האם השם האורח קיים
  }

  const makeVisitor = (name) => {
    מקבל שם, בודק שאין אותו כבר במערך האורחים ומחזיר אובייקט אורח
  }
  **/


/**************************************
  מימשתי עבורכם את ההאזנה לאירוע שליחת טופס
  שימו לב כי האיידי של createForm
  זהה לאיידי של הטופס בעמוד signup.html
  אין לשנות אותו */

