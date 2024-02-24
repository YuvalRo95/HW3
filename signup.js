document.getElementById('create-visitor-form').addEventListener('submit', createNewVisitor);

function createNewVisitor(event) {
  // השורה הזו מונעת את התנהגות ברירת המחדל של השליחה, כך שהטופס לא ישלח באופן אוטומטי.
  event.preventDefault();

  const nameInput = document.getElementById('name'); 
  const name = nameInput.value.trim();

  if (!name) {
    alert("Name cannot be empty.");
    return;
  }

  if (visitorExists(name)) {
    alert("A visitor with this name already exists.");
    return;
  }

  const newVisitor = makeVisitor(name);
  visitors.push(newVisitor);

  localStorage.setItem('visitors', JSON.stringify(visitors));
  window.location.href = "login.html";
}


function visitorExists(name) {
  return visitors.some(visitor => visitor.name === name);
}

function makeVisitor(name) {
  return { name, coins: 50 };
}

const createForm = document.getElementById("create-visitor-form");
if (createForm) {
  createForm.addEventListener("submit", createNewVisitor);
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

