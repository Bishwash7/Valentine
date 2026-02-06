onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  const finalText = `
Hi Angel I don't know how to tell you but it was so unexpected how I met you
I wasn't expecting love in my life but suddenly you came
you made my life easier and beautiful
ik I am bad at expressing but I love you more than you know
which can't be expressed in words

just remember one thing I love you so much

ani mailey timlai dherai Maya garxu
yeti garxu ki jati garxu timlai Matra garxu

Ik it's just a begging but I hope we will succeed this relation together 🌷

Will you be my valentine my cutieeee pieeee 😻
`;

const box = document.getElementById("finalMessage");
const textBox = document.getElementById("typedMessage");

let i = 0;

// wait until ALL flower animations finish
setTimeout(() => {
  box.classList.add("show");
  typeWriter();
}, 12000); // adjust if flowers finish earlier/later

function typeWriter() {
  if (i < finalText.length) {
    textBox.innerHTML += finalText.charAt(i);
    i++;
    setTimeout(typeWriter, 35);
  }
}
