let arr = [1, 2, 3, 4, 5, 6];
let obj = {
  one: false,
  two: false,
  three: false,
  four: false,
};
let prime = document.querySelector(".primary");
let pic1 = document.querySelector("#first");
let pic2 = document.querySelector("#second");
let pic3 = document.querySelector("#third");
let pic4 = document.querySelector("#fourth");
let selected = document.querySelector(".selected");
let form = document.querySelector(".form");
let subDiv = document.querySelector(".subDiv");
let p3 = document.querySelector(".firstinst");
let p1 = document.querySelector(".det1");
let p2 = document.querySelector(".det2");
let p4 = document.querySelector(".secondinst");
let p5 = document.querySelector(".current");
let p6 = document.querySelector(".total");
let p7 = document.querySelector(".final");
let p8 = document.querySelector(".token");
let main = document.querySelector(".main");
let resimg = document.querySelector(".congo");
selected.addEventListener(
  "click",
  () => {
    show(selected);
  },
  { once: true }
);
let name;
let email;
let user;
let flag = true;
let randomIndex;
let random;
let count = 0;
let min = 0;
let inp_name = document.querySelector("#name");
let inp_email = document.querySelector("#email");
let inp_user = document.querySelector("#username");
form.addEventListener("submit", validate);

function show(e) {
  prime.classList.add("hide");
  pic1.classList.remove("selected");
  form.classList.remove("hide");
  subDiv.classList.remove("hide");
}

function validate(e) {
  e.preventDefault();
  name = inp_name.value;
  email = inp_email.value;
  user = inp_user.value;
  p3.classList.remove("hide");
  p3.innerText = "Click Profile to check";
  obj["one"] = true;
  if (obj["one"] == true) {
    secondPic();
  }
}

function secondPic() {
  pic2.addEventListener("click", details, { once: true });
  function details() {
    form.classList.add("hide");
    p1.innerText = `Name    :  ${name}`;
    p2.innerText = `Username    :  ${user}`;
    p3.classList.add("hide");
    p1.classList.remove("hide");
    p2.classList.remove("hide");
    p1.classList.add("par");
    p2.classList.add("par");
    p4.classList.remove("hide");
    p4.innerText = "Click Play to Start";
    obj["two"] = true;
    if (obj["one"] == true && obj["two"] == true) {
      thirdpic();
    }
  }
}

function thirdpic() {
  count++;
  let sum = 0;

  pic3.addEventListener("click", play, { once: true });
  function play() {
    if (count > 2) {
      pic3.removeEventListener("click", play);
      return;
    } else {
      p7.classList.add("hide");

      min = 0;
      p4.classList.add("hide");
      p1.classList.add("hide");
      p2.classList.add("hide");
      main.classList.remove("hide");
      prime.classList.remove("hide");
      prime.innerText = "Click on Dice to Roll";
      p5.classList.remove("hide");
      p5.innerText = `Current value : 0`;
      p6.classList.remove("hide");
      p6.innerText = `Total sum : 0`;
      main.addEventListener("click", roll);
      function roll() {
        min++;
        randomIndex = Math.floor(Math.random() * 6);
        random = arr[randomIndex];
        sum += random;
        p5.innerText = `Current value : ${random}`;
        p6.innerText = `Total sum : ${sum}`;
        if (min == 3) {
          prime.classList.add("hide");
          main.removeEventListener("click", roll);
          if (sum <= 10 && flag == true) {
            flag = false;
            thirdpic();
            p7.classList.remove("hide");
            p7.innerText = "Try Again to Click on Play";
            p7.style.color = "red";
          } else if (sum <= 10 && flag == false) {
            p7.classList.remove("hide");
            p7.innerText = "Bad Luck !";
            p7.style.color = "red";
            return;
          } else if (sum > 10) {
            p7.classList.remove("hide");
            p7.innerText = "Congrats ! Click on Cupon to get your Coupon.";
            p7.style.color = "black";
            obj["three"] = true;
            if (
              obj["one"] == true &&
              obj["two"] == true &&
              obj["three"] == true
            ) {
              fourthpic();
            }
          }
        }
      }
    }
  }
}

function fourthpic() {
  pic4.addEventListener("click", results);
  function results() {
    main.classList.add("hide");
    p5.classList.add("hide");
    p6.classList.add("hide");
    p7.classList.add("hide");
    p8.classList.remove("hide");
    resimg.classList.remove("hide");
    let x = generate();
    p8.innerText = `Coupon Code : ${x}`;
    p8.style.color = "black";
  }
}

function generate() {
  let capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let small = "abcdefghijklmnopqrstuvwxyz";
  let num = "0123456789";
  let sc = "~@#$%^&*";
  let char = capital + small + num + sc;
  let tok = "";
  for (let i = 1; i <= 12; i++) {
    let ran = Math.floor(Math.random() * char.length);
    tok += char[ran];
  }
  return tok;
}
