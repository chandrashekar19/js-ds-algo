const countUpAndDown = (n) => {
  console.log("Going Up");
  for (let i = 0; i <= n; i++) {
    console.log("I", i);
  }

  console.log("At the top Going down...");
  for (let j = n - 1; j >= 0; j--) {
    console.log("J", j);
  }

  console.log("Back down. Bye!");
};

const res = countUpAndDown(9);
//console.log("RESULT", res);
