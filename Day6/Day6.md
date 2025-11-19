اولا كده انا هنزل الشرح بس انتظرني شوية 


LONg Task : هي مشكلة في الاساس انا حرفيا قابلتني وانا كاتب كل في الورق او الكاتب بمعني اصح حاليا 

قابلني في الاخص وانا بعمل ال ainmition BACKGROUN 
وكان بيحصل ان في الموبيل بالذات لما بعمل SCROLL 
بيحصل ان ال ANIMITION بيبوظ في الحل كان في ال CHUNK 
كنت بستعمل من مكتبة مخصوصة الانيميشن ده وجبته وكبته علي المشروع عندي بس كل لما اعمل اسكرول بيبوظ حرفيا فحذفت الصفحة في وقتها لحد اما اكتشف الحل حاليا بعد ما انا عرفت المشكلة هرجع احلها حاليا 
وفيها كمان حاجات مضمونه من امبارح علشان تبقي فاهم 
ال MICRO TASK , MACRO TASK , LONG TASK , والباقي 

_________________________________
انا حاليا هنزل الورق كمان شوية وهيبقي في شرح لكل حاجه حتي الريبورت هكتبها تاني في الورق 



| المفهوم             | وصفه                          | خطورته              | بيأثر على                            |
| ------------------- | ----------------------------- | ------------------- | ------------------------------------ |
| **Long Task**
    |كود synchronous طويل           | UI freeze           | الاحتفاظ بالmain thread            |
| **Microtask Flood** | سلسلة لا تنتهي من microtasks  | UI freeze **أشد**   | microtask queue + blocking rendering |
| **queueMicrotask**  | طريقة خفيفة لتسجيل microtasks | خطر لو استخدمته غلط | ترتيب event loop                     |






/************************************************
 * 1) FRAMES & RENDERING — فهم الـ 16ms Frame
 *
 * كل Frame في المتصفح = حوالي 16ms
 * لو كودك استغرق أكثر من 16ms → يحصل JANK (تقطيع)
 ************************************************/

function frameDemo() {
  let last = performance.now();

  requestAnimationFrame(function loop(now) {
    console.log("Frame delta:", (now - last).toFixed(2), "ms");
    last = now;
    requestAnimationFrame(loop);
  });
}

// frameDemo();




/************************************************
 * 2) LONG TASK — مهمة طويلة بتقفّل الصفحة
 *
 * أي كود يستغرق أكتر من 50ms يعتبر Long Task.
 * ده يمنع الـ Browser إنه يرندر Frames جديدة → UI يتجمد.
 ************************************************/

function longTaskExample() {
  console.log("Start Long Task…");

  const start = performance.now();

  // ❌ سيئة جدًا — بتجمد الشاشة
  while (performance.now() - start < 2000) {}

  console.log("Long Task Finished");
}

// longTaskExample();




/************************************************
 * 3) MICROTASK FLOOD — طوفان الـ Promise
 *
 * لما تعمل كمية ضخمة من Promise.then()
 * بتتكون Microtask Queue ضخمة جداً بتوقف Rendering
 ************************************************/

function microtaskFlood() {
  console.log("Start Microtask Flood…");

  for (let i = 0; i < 20000; i++) {
    Promise.resolve().then(() => {});
  }

  console.log("End Microtask Flood — لكن الميكرتاسكس لسه شغالة!");
}

// microtaskFlood();




/************************************************
 * 4) queueMicrotask — إضافة Microtask صريحة
 *
 * بتنضاف لنفس Queue بتاع Promise.then()
 * وبتتنفذ قبل أي setTimeout
 ************************************************/

function queueMicrotaskDemo() {
  console.log("A");

  queueMicrotask(() => console.log("C — queueMicrotask"));

  console.log("B");
}

// queueMicrotaskDemo();




/************************************************
 * 5) ORDERING — ترتيب التنفيذ بين:
 * Promise → fetch.then → setTimeout → كود عادي
 *
 * مهم جدًا لفهم الـ Event Loop:
 *
 * 1) synchronous (العادي)
 * 2) microtasks (Promise / queueMicrotask)
 * 3) tasks (setTimeout)
 ************************************************/

function fetchOrdering() {
  console.log("1 — Start");

  setTimeout(() => console.log("4 — setTimeout"), 0);

  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(() => console.log("3 — fetch.then (microtask)"));

  Promise.resolve().then(() => console.log("2 — Promise.then"));

  console.log("5 — End");
}

// fetchOrdering();




/************************************************
 * 6) DEBOUNCE
 *
 * يمنع تنفيذ الدالة إلا بعد توقف الحدث لفترة معينة.
 * مثال: وقف سبام الكتابة في OnInput
 ************************************************/

function debounce(fn, delay) {
  let timer = null;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

const debouncedLog = debounce((value) => {
  console.log("Debounced Input:", value);
}, 500);

// مثال Browser:
// document.addEventListener("mousemove", e => debouncedLog(e.clientX));




/************************************************
 * 7) THROTTLE
 *
 * يسمح للدالة بالعمل كل X ms مهما حصل أحداث كثيرة.
 * مثال: Scroll → مبيهنضربش كل 1ms
 ************************************************/

function throttle(fn, limit) {
  let last = 0;

  return (...args) => {
    const now = Date.now();

    if (now - last >= limit) {
      last = now;
      fn(...args);
    }
  };
}

const throttledLog = throttle((v) => console.log("Scroll:", v), 300);

// مثال:
// window.addEventListener("scroll", () => throttledLog(window.scrollY));




/************************************************
 * 8) CHUNKING — تقسيم العمل الثقيل لتجنب التقطيع
 *
 * الفكرة: بدل ما ننفذ Array كبيرة جدًا في While واحدة
 * نقسمها Chunks صغيرة بحيث كل Chunk ≤ 16ms
 *
 * requestAnimationFrame:
 * → بيشغل الكود قبل Render Frame الجديدة
 * → أحسن وسيلة لتقسيم الشغل
 ************************************************/

function processLargeArrayChunked(arr) {
  let i = 0;

  function processChunk() {
    const start = performance.now();

    // معالجة chunk لمدة 16ms فقط
    while (i < arr.length && performance.now() - start < 16) {
      arr[i] = arr[i] * 2;
      i++;
    }

    // لو لسه بيانات مكملش
    if (i < arr.length) {
      requestAnimationFrame(processChunk);
    } else {
      console.log("Chunked processing finished successfully!");
    }
  }

  requestAnimationFrame(processChunk);
}

// Example:
// processLargeArrayChunked(new Array(200000).fill(1));




/************************************************
 * 9) FIXING JANK — مثال قبل/بعد
 ************************************************/

// ❌ قبل: عملية ثقيلة بتعمل JANK لمدة 1.5 ثانية
function janky() {
  console.log("Start jank...");

  let start = performance.now();
  while (performance.now() - start < 1500) {}

  console.log("Jank finished");
}

// janky();


// ✅ بعد: نفس العمل ولكن Chunks باستخدام rAF — بدون جمود
function smooth() {
  let i = 0;
  const total = 6_000_000;

  function runChunk() {
    const start = performance.now();

    while (i < total && performance.now() - start < 16) {
      i++;
    }

    if (i < total) {
      requestAnimationFrame(runChunk);
    } else {
      console.log("Smooth work finished!");
    }
  }

  requestAnimationFrame(runChunk);
}

// smooth();




/************************************************
 * 10) FULL EVENT LOOP ORDER — كل حاجة مع بعض
 ************************************************/

function fullOrderingDemo() {
  console.log("A — Script start");

  setTimeout(() => console.log("E — setTimeout (task)"), 0);

  queueMicrotask(() => console.log("C — queueMicrotask"));

  Promise.resolve().then(() => console.log("B — Promise.then"));

  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(() => console.log("D — fetch.then"));

  console.log("F — Script end");
}

// fullOrderingDemo();
