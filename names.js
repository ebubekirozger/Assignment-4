// SpeakHello.js
(function(window) {
    var speakWord = "Hello";
    var helloSpeaker = {};
  
    helloSpeaker.speak = function(name) {
      console.log(speakWord + " " + name);
    };
  
    window.helloSpeaker = helloSpeaker;
  
  })(window);
  
  // SpeakGoodBye.js
  (function(window) {
    var speakWord = "Good Bye";
    var byeSpeaker = {};
  
    byeSpeaker.speak = function(name) {
      console.log(speakWord + " " + name);
    };
  
    window.byeSpeaker = byeSpeaker;
  
  })(window);
  
  // Your array of names
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
  // Loop over the array and print greetings to the console
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
  
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
