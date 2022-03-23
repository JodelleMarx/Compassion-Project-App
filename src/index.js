function instructions() {
  let name = prompt("Hi there! My name is Leo. What's your name?");
  alert("Welcome, " + name + "!");

  let timeVisiting = prompt("Is this your first time visiting?");
  if (timeVisiting === "Yes") {
    alert(
      "I'm glad that you're here! Click the buttons below to send a message into the abiss."
    );
  } else {
    alert("Sorry for not recognizing you! I have the memory of a goldfish🐠");
  }
}
let instructionButton = document.querySelector(".instructions");
instructionButton.addEventListener("click", instructions);
function selfLove() {
  let loveLetter = prompt(
    "Write a love letter to yourself. Speak with the same kindness that you would a frined. Click 'okay' when you're done."
  );
  alert(
    "Yay! Practicing self-love isn't always easy, but it's important that we are good friends to ourselves."
  );
}
let loveLetterButton = document.querySelector(".selfLove");
loveLetterButton.addEventListener("click", selfLove);
function pride() {
  let proudOfSelf = prompt(
    "What are you proud of yourself for? This can be as small as setting aside five extra minutes to throw the dog's ball or as complex as graduating. Click 'okay' when you're finished."
  );
  alert("Way to go! I'm proud of you too!😊");
}
let proudOfSelfButton = document.querySelector(".pride");
proudOfSelfButton.addEventListener("click", pride);
function bodyLove() {
  let loveMyBody = prompt(
    "Time to give your body some love. Have you ever paused to think about the coordination of your organs pumping blood, oxygen, and nutrients 24/7? Take a moment to tell your body 'Thank you.' Click 'okay' when you are finished."
  );
  alert(
    "Make sure your body gets what it needs today: sleep, food, rest. . .and did someone say bubble bath?🛁"
  );
}
let loveMyBodyButton = document.querySelector(".bodyLove");
loveMyBodyButton.addEventListener("click", bodyLove);
function respect() {
  let selfRespect = prompt(
    "Say it with me, 'I respect my choice to. . .' We make choices all day long. Write about one that you struggle to come to terms with and focus on offering yourself compassion. Release yourself from the shame and guilt associated with that choice. Remember, all you can do is your best with the information at the time. Click 'okay' when you are finished."
  );
  alert(
    "How are you feeling? Take a deep breath and maybe give yourself a hug. Show yourself extra patience today✨"
  );
}
let selfRespectButton = document.querySelector(".respect");
selfRespectButton.addEventListener("click", respect);
function practicing() {
  let consistentPractice = prompt(
    "The word practicing emphasises that we will make mistakes--which are good!!! The key is being kind to ourselves when we mess up so that we can learn and move forward. What are you practicing? Click 'okay' when you are finished."
  );
  alert(
    "Pro tip: let mistakes be leaping off points for creative recoveries!🪂"
  );
}
let consistentPracticeButton = document.querySelector(".practicing");
consistentPracticeButton.addEventListener("click", practicing);
