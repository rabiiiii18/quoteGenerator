const quotes = [
  {
    id: 1,
    category: "science",
    text: "Science is a way of thinking much more than it is a body of knowledge.",
    author: "Carl Sagan",
  },
  {
    id: 2,
    category: "science",
    text: "The good thing about science is that it's true whether or not you believe in it.",
    author: "Neil deGrasse Tyson",
  },
  {
    id: 3,
    category: "science",
    text: "Equipped with his five senses, man explores the universe around him and calls the adventure Science.",
    author: "Edwin Hubble",
  },
  {
    id: 4,
    category: "science",
    text: "Science knows no country, because knowledge belongs to humanity.",
    author: "Louis Pasteur",
  },
  {
    id: 5,
    category: "science",
    text: "The science of today is the technology of tomorrow.",
    author: "Edward Teller",
  },
  {
    id: 6,
    category: "science",
    text: "Science is the great antidote to the poison of enthusiasm and superstition.",
    author: "Adam Smith",
  },
  {
    id: 7,
    category: "science",
    text: "Somewhere, something incredible is waiting to be known.",
    author: "Carl Sagan",
  },
  {
    id: 8,
    category: "science",
    text: "The important thing is to never stop questioning.",
    author: "Albert Einstein",
  },
  {
    id: 9,
    category: "science",
    text: "Science without religion is lame, religion without science is blind.",
    author: "Albert Einstein",
  },
  {
    id: 10,
    category: "science",
    text: "Research is what I'm doing when I don't know what I'm doing.",
    author: "Wernher von Braun",
  },

  {
    id: 11,
    category: "love",
    text: "We accept the love we think we deserve.",
    author: "Stephen Chbosky",
  },
  {
    id: 12,
    category: "love",
    text: "Love all, trust a few, do wrong to none.",
    author: "William Shakespeare",
  },
  {
    id: 13,
    category: "love",
    text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    author: "Lao Tzu",
  },
  {
    id: 14,
    category: "love",
    text: "Love is composed of a single soul inhabiting two bodies.",
    author: "Aristotle",
  },
  {
    id: 15,
    category: "love",
    text: "To love and be loved is to feel the sun from both sides.",
    author: "David Viscott",
  },
  {
    id: 16,
    category: "love",
    text: "The best thing to hold onto in life is each other.",
    author: "Audrey Hepburn",
  },
  {
    id: 17,
    category: "love",
    text: "Where there is love there is life.",
    author: "Mahatma Gandhi",
  },
  {
    id: 18,
    category: "love",
    text: "Love recognizes no barriers.",
    author: "Maya Angelou",
  },
  {
    id: 19,
    category: "love",
    text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "Dr. Seuss",
  },
  {
    id: 20,
    category: "love",
    text: "Love is when the other person's happiness is more important than your own.",
    author: "H. Jackson Brown, Jr.",
  },

  {
    id: 21,
    category: "motivational",
    text: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    id: 22,
    category: "motivational",
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    id: 23,
    category: "motivational",
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    id: 24,
    category: "motivational",
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
  },
  {
    id: 25,
    category: "motivational",
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    id: 26,
    category: "motivational",
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    id: 27,
    category: "motivational",
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    id: 28,
    category: "motivational",
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    id: 29,
    category: "motivational",
    text: "Everything you’ve ever wanted is on the other side of fear.",
    author: "George Addair",
  },
  {
    id: 30,
    category: "motivational",
    text: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
  },

  {
    id: 31,
    category: "technology",
    text: "It has become appallingly obvious that our technology has exceeded our humanity.",
    author: "Albert Einstein",
  },
  {
    id: 32,
    category: "technology",
    text: "Technology is best when it brings people together.",
    author: "Matt Mullenweg",
  },
  {
    id: 33,
    category: "technology",
    text: "The science of today is the technology of tomorrow.",
    author: "Edward Teller",
  },
  {
    id: 34,
    category: "technology",
    text: "Technology like art is a soaring exercise of the human imagination.",
    author: "Daniel Bell",
  },
  {
    id: 35,
    category: "technology",
    text: "Technology is a word that describes something that doesn’t work yet.",
    author: "Douglas Adams",
  },
  {
    id: 36,
    category: "technology",
    text: "The great myth of our times is that technology is communication.",
    author: "Libby Larsen",
  },
  {
    id: 37,
    category: "technology",
    text: "Once a new technology rolls over you, if you're not part of the steamroller, you're part of the road.",
    author: "Stewart Brand",
  },
  {
    id: 38,
    category: "technology",
    text: "The real problem is not whether machines think but whether men do.",
    author: "B.F. Skinner",
  },
  {
    id: 39,
    category: "technology",
    text: "Technology is nothing. What's important is that you have a faith in people.",
    author: "Steve Jobs",
  },
  {
    id: 40,
    category: "technology",
    text: "Technology made large populations possible; large populations now make technology indispensable.",
    author: "Joseph Krutch",
  },
];

const increase = document.querySelector(".plus");
const decrease = document.querySelector(".minus");

const quotetext = document.querySelector(".quote");
const toggle = document.querySelector(".bar");
const ball = document.querySelector(".ball");
const container = document.querySelector(".quoteBox");
const heading = document.querySelector(".quoteHeading");
const selectValue = document.querySelector(".category-select");
const author=document.querySelector('.writer')
const nextBtn=document.querySelector('.next')
const prevBtn=document.querySelector('.prev')
const randomBtn=document.querySelector('.random')
const pleaseSelect=document.querySelector('.pleaseSelect')

let filterQuotes = [];
let quoteIndex = 0;

selectValue.addEventListener("change", () => {
  const value = selectValue.value;
  console.log(value);
  filterQuotes = []; 
  quoteIndex = 0;     
  for (let i = 0; i < quotes.length; i++) {
    if (quotes[i].category === value) {
      heading.style.display='block'
      pleaseSelect.style.display='none'

      filterQuotes.push(quotes[i]);
    }
  }
  if (filterQuotes.length > 0) {
    display();
  } else {
    quotetext.textContent = "No quotes available.";
    author.textContent = "";
  }
});

function display() {
  if (filterQuotes.length === 0) {
    quotetext.textContent = "No quotes available.";
    author.textContent = "";
    return;
  }

  const quote = filterQuotes[quoteIndex];
  quotetext.textContent = `"${quote.text}"`;
  author.textContent = `- ${quote.author}`;
}

nextBtn.addEventListener('click', () => {
  quoteIndex++;
  if (quoteIndex >= filterQuotes.length) {
    quoteIndex = 0;
  }
  display();
});

prevBtn.addEventListener('click', () => {
  quoteIndex--;
  if (quoteIndex < 0) {
    quoteIndex = filterQuotes.length - 1; 
  }
  display();
});

randomBtn.addEventListener('click', () => {
  if (filterQuotes.length === 0) return;
  quoteIndex = Math.floor(Math.random() * filterQuotes.length);
  display();
});



toggle.addEventListener("click", () => {
  const isActive = ball.classList.contains("active");
  if (isActive) {
    ball.style.transform = "translateX(0)";
    ball.classList.remove("active");
    container.style.background = "#bbbbbb";
    container.style.color = "black";
   
  } else {
    ball.style.transform = "translateX(100%)";
    ball.classList.add("active");
    container.style.background = "#1e1e1e";
    container.style.color = "#bbb";
  }
});

let currentSize = 20;

function updateFontSize() {
  quotetext.style.fontSize = `${currentSize}px`;
}

increase.addEventListener("click", () => {
  if (currentSize < 38) {
    currentSize += 2;
    updateFontSize();
  }
});
decrease.addEventListener("click", () => {
  if (currentSize > 10) {
    currentSize -= 2;
    updateFontSize();
  }
});
