/* =========================================================
   data.js
   Books data (using your image file names)
   ========================================================= */

var BOOKS = [
  {
    id: "b1",
    title: "Almost Adulting",
    author: "Arden Rose",
    genre: "fiction",
    length: "medium",
    image: "images/Almost-adulting.jpg",
    synopsis: "A relatable book about growing up, responsibilities and learning life lessons through experience.",
    prequels: [],
    sequels: ["Atomic Habits Workbook"],
    reviews: [
      { name: "Reader 1", rating: 4, comment: "Very relatable and interesting." },
      { name: "Reader 2", rating: 5, comment: "A fun book with real-life lessons." }
    ]
  },

  {
    id: "b2",
    title: "The art of being alone",
    author: "Renuka Gavrani",
    genre: "fiction",
    length: "short",
    image: "images/The-art-of-being-alone.jpg",
    synopsis: "A deep story about self-discovery, silence, and finding peace in solitude.",
    prequels: [],
    sequels: [],
    reviews: [
      { name: "Reader 1", rating: 4, comment: "Beautifully written and emotional." }
    ]
  },

  {
    id: "b3",
    title: "Meet Me in Another Life",
    author: "Catriona Silvey",
    genre: "sci-fi",
    length: "long",
    image: "images/Another-life.jpg",
    synopsis: "A journey across choices and destiny—what if life gave you a second path to follow?",
    prequels: [],
    sequels: [],
    reviews: [
      { name: "Reader 1", rating: 5, comment: "Loved the storyline and meaning." },
      { name: "Reader 2", rating: 4, comment: "Very thoughtful and emotional." }
    ]
  },

  {
    id: "b4",
    title: "Atomic Habits",
    author: "James Clear",
    genre: "fiction",
    length: "medium",
    image: "images/Atomic-habits.jpg",
    synopsis: "A practical guide to building good habits, breaking bad habits, and improving yourself every day.",
    prequels: [],
    sequels: ["Atomic Habits Workbook"],
    reviews: [
      { name: "Reader 1", rating: 5, comment: "Very motivating and useful." },
      { name: "Reader 2", rating: 5, comment: "Simple habits can change life!" }
    ]
  },

  {
    id: "b5",
    title: "Born to Run",
    author: "Christopher McDougall",
    genre: "fiction",
    length: "long",
    image: "images/born-to-run.jpg",
    synopsis: "An inspiring story about endurance, passion, and the power of never giving up.",
    prequels: [],
    sequels: ["Born to Run 2"],
    reviews: [
      { name: "Reader 1", rating: 4, comment: "Inspiring and energetic." }
    ]
  },

  {
    id: "b6",
    title: "Choosing Me",
    author: "Kelly Weekers",
    genre: "fiction",
    length: "medium",
    image: "images/chosing-me.jpg",
    synopsis: "A self-love story that teaches boundaries, healing, and finally putting yourself first.",
    prequels: [],
    sequels: [],
    reviews: [
      { name: "Reader 1", rating: 5, comment: "Powerful and uplifting." }
    ]
  },

  {
    id: "b7",
    title: "It Ends With Us",
    author: "Colleen Hoover",
    genre: "fiction",
    length: "long",
    image: "images/ends-with-us.jpg",
    synopsis: "A powerful emotional story about love, pain, courage and difficult decisions in relationships.",
    prequels: [],
    sequels: ["It Starts With Us"],
    reviews: [
      { name: "Reader 1", rating: 5, comment: "Very emotional and meaningful." },
      { name: "Reader 2", rating: 4, comment: "A strong story with real messages." }
    ]
  },

  {
    id: "b8",
    title: "steel mind soft heart",
    author: "Omshree",
    genre: "fiction",
    length: "short",
    image: "images/steel-mind.jpg",
    synopsis: "A short touching book about love, hope, and the strength inside our hearts.",
    prequels: [],
    sequels: [],
    reviews: [
      { name: "Reader 1", rating: 4, comment: "Short but touching." }
    ]
  },

  {
    id: "b9",
    title: "Stop lying to yourself",
    author: "Simon Gilham",
    genre: "fantacy",
    length: "medium",
    image:"images/stop-lying.jpg",
    synopsis: "A mystery-style story about secrets, lies, and truths that eventually come to light.",
    prequels: [],
    sequels: [],
    reviews: [
      { name: "Reader 1", rating: 4, comment: "Kept me guessing." }
    ]
  },

  {
    id: "b10",
    title: "The Millionaire mind",
    author: "Thomas J. Stanley",
    genre: "fiction",
    length: "medium",
    image: "images/mind-millinore.jpg",
    synopsis: "A mindset-based book about success, wealth thinking, and personal growth.",
    prequels: [],
    sequels: [],
    reviews: [
      { name: "Reader 1", rating: 5, comment: "Mindset changes everything!" }
    ]
  },

  {
    id: "b11",
    title: "The complete works of william Shakespeare",
    author: "William Shakespeare",
    genre: "fiction",
    length: "long",
    image: "images/shakespere.jpg",
    synopsis: "A collection inspired by Shakespeare’s timeless plays and poetic writing.",
    prequels: ["Early Poems"],
    sequels: ["Shakespeare Sonnets Collection"],
    
    reviews: [
      { name: "Reader 1", rating: 4, comment: "Classic and deep." }
    ]
  },

  {
    id: "b12",
    title: "Keep it Shut",
    author: "Karen Ehman",
    genre: "fantasy",
    length: "short",
    image: "images/shut.jpg",
    synopsis: "A short intense story about keeping silent, inner thoughts, and breaking free from fear.",
    prequels: [],
    sequels: [],
    reviews: [
      { name: "Reader 1", rating: 4, comment: "Short and powerful." }
    ]
  },

  {
    id: "b13",
    title: "The Boy in the Striped Pajamas",
    author: "John Boyne",
    genre: "fantasy",
    length: "medium",
    image: "images/striped-pajama.jpg",
    synopsis: "A heartbreaking story seen through innocence, friendship and the cruelty of war.",
    prequels: [],
    sequels: ["All the Broken Places"],
    reviews: [
      { name: "Reader 1", rating: 5, comment: "Very emotional and unforgettable." }
    ]
  },

  {
    id: "b14",
    title: "The Psychology of being that Girl",
    author: "Aniya holmer",
    genre: "fiction",
    length: "medium",
    image: "images/that-girl.jpg",
    synopsis: "A fun inspiring lifestyle book about confidence, glow-up habits, and becoming your best self.",
    prequels: [],
    sequels: [],
    reviews: [
      { name: "Reader 1", rating: 4, comment: "Motivating and cute." }
    ]
  },

  {
    id: "b15",
    title: "Whispers between pages",
    author: "Asmau Magaji",
    genre: "fiction",
    length: "short",
    image: "images/whispers.jpg",
    synopsis: "A soft emotional story about hidden feelings, secrets, and quiet love.",
    prequels: [],
    sequels: [],
    reviews: [
      { name: "Reader 1", rating: 4, comment: "Very calm and emotional." }
    ]
  },

  {
    id: "b16",
    title: "Women who think too much",
    author: "Susan Nolen",
    genre: "fiction",
    length: "long",
    image: "images/women.jpg",
    synopsis: "A strong story about womanhood, strength, struggles and success across generations.",
    prequels: ["Self Love Journey"],
    sequels: [],
    reviews: [
      { name: "Reader 1", rating: 5, comment: "Strong message and inspiring." }
    ]
  }
];
