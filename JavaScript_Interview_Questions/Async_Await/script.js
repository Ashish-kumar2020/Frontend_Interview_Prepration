const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("After 5 sec");
  }, 15000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("After 15 sec");
  }, 5000);
});

async function handlePromise() {
  console.log("heloo world");
  const val1 = await p1;
  console.log("Val1 printed");
  console.log(val1);

  const val2 = await p2;
  console.log("Val2 printed");
  console.log(val2);
}
handlePromise();
