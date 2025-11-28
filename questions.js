const questions = [
    // A1 Levels (1-10)
    {
        id: 1,
        level: 'A1',
        question: "I ___ from France.",
        options: ["is", "are", "am", "be"],
        answer: 2
    },
    {
        id: 2,
        level: 'A1',
        question: "This is my brother. ___ name is Paul.",
        options: ["Her", "His", "He", "Him"],
        answer: 1
    },
    {
        id: 3,
        level: 'A1',
        question: "___ five people in my family.",
        options: ["They are", "There is", "There are", "Is"],
        answer: 2
    },
    {
        id: 4,
        level: 'A1',
        question: "I get up ___ 7 o'clock.",
        options: ["at", "on", "in", "to"],
        answer: 0
    },
    {
        id: 5,
        level: 'A1',
        question: "I like ___ apples.",
        options: ["eat", "eating", "eats", "ate"],
        answer: 1
    },
    {
        id: 6,
        level: 'A1',
        question: "___ you speak English?",
        options: ["Are", "Is", "Do", "Does"],
        answer: 2
    },
    {
        id: 7,
        level: 'A1',
        question: "Where ___ they live?",
        options: ["are", "do", "does", "is"],
        answer: 1
    },
    {
        id: 8,
        level: 'A1',
        question: "We don't have ___ milk.",
        options: ["some", "any", "a", "an"],
        answer: 1
    },
    {
        id: 9,
        level: 'A1',
        question: "She ___ a doctor.",
        options: ["isn't", "aren't", "not", "don't"],
        answer: 0
    },
    {
        id: 10,
        level: 'A1',
        question: "Today is Wednesday. Yesterday was ___.",
        options: ["Tuesday", "Thursday", "Friday", "Monday"],
        answer: 0
    },

    // A2 Levels (11-20)
    {
        id: 11,
        level: 'A2',
        question: "I ___ to the cinema last night.",
        options: ["go", "went", "gone", "going"],
        answer: 1
    },
    {
        id: 12,
        level: 'A2',
        question: "This book is ___ than that one.",
        options: ["interesting", "more interesting", "interestinger", "most interesting"],
        answer: 1
    },
    {
        id: 13,
        level: 'A2',
        question: "Have you ever ___ to London?",
        options: ["be", "been", "being", "went"],
        answer: 1
    },
    {
        id: 14,
        level: 'A2',
        question: "I was cooking when the phone ___.",
        options: ["ring", "rang", "ringing", "rung"],
        answer: 1
    },
    {
        id: 15,
        level: 'A2',
        question: "If it rains, we ___ inside.",
        options: ["stay", "will stay", "stayed", "staying"],
        answer: 1
    },
    {
        id: 16,
        level: 'A2',
        question: "He is the ___ student in the class.",
        options: ["good", "better", "best", "goodest"],
        answer: 2
    },
    {
        id: 17,
        level: 'A2',
        question: "I need to buy ___ bread.",
        options: ["a", "some", "any", "many"],
        answer: 1
    },
    {
        id: 18,
        level: 'A2',
        question: "She ___ playing tennis now.",
        options: ["is", "does", "has", "can"],
        answer: 0
    },
    {
        id: 19,
        level: 'A2',
        question: "I ___ see him tomorrow.",
        options: ["going to", "am going to", "will to", "go to"],
        answer: 1
    },
    {
        id: 20,
        level: 'A2',
        question: "You ___ smoke here. It's forbidden.",
        options: ["don't have to", "mustn't", "shouldn't", "needn't"],
        answer: 1
    },

    // B1 Levels (21-30)
    {
        id: 21,
        level: 'B1',
        question: "I've been living here ___ 2010.",
        options: ["for", "since", "ago", "from"],
        answer: 1
    },
    {
        id: 22,
        level: 'B1',
        question: "She asked me where ___.",
        options: ["did I live", "I lived", "do I live", "I live"],
        answer: 1
    },
    {
        id: 23,
        level: 'B1',
        question: "I used ___ a lot of coffee, but now I drink tea.",
        options: ["to drink", "drink", "drinking", "to drinking"],
        answer: 0
    },
    {
        id: 24,
        level: 'B1',
        question: "The car ___ by my father.",
        options: ["washed", "was washed", "has washed", "is washing"],
        answer: 1
    },
    {
        id: 25,
        level: 'B1',
        question: "I wish I ___ more time.",
        options: ["have", "had", "have had", "would have"],
        answer: 1
    },
    {
        id: 26,
        level: 'B1',
        question: "You'd better ___ a doctor.",
        options: ["see", "to see", "seeing", "saw"],
        answer: 0
    },
    {
        id: 27,
        level: 'B1',
        question: "He ___ have gone to the party, but I'm not sure.",
        options: ["must", "might", "should", "can"],
        answer: 1
    },
    {
        id: 28,
        level: 'B1',
        question: "I'm looking forward ___ you.",
        options: ["to see", "seeing", "to seeing", "see"],
        answer: 2
    },
    {
        id: 29,
        level: 'B1',
        question: "Unless you ___, you won't pass the exam.",
        options: ["study", "don't study", "will study", "studied"],
        answer: 0
    },
    {
        id: 30,
        level: 'B1',
        question: "It's time we ___ home.",
        options: ["go", "went", "gone", "going"],
        answer: 1
    },

    // B2 Levels (31-40)
    {
        id: 31,
        level: 'B2',
        question: "By this time next year, I ___ my degree.",
        options: ["will finish", "will have finished", "finish", "have finished"],
        answer: 1
    },
    {
        id: 32,
        level: 'B2',
        question: "I regret ___ you that you failed the test.",
        options: ["tell", "to tell", "telling", "told"],
        answer: 1
    },
    {
        id: 33,
        level: 'B2',
        question: "No sooner had I arrived ___ it started to rain.",
        options: ["than", "when", "that", "then"],
        answer: 0
    },
    {
        id: 34,
        level: 'B2',
        question: "He is believed ___ in Mexico.",
        options: ["living", "to live", "live", "that he lives"],
        answer: 1
    },
    {
        id: 35,
        level: 'B2',
        question: "I'd rather you ___ smoke in here.",
        options: ["don't", "didn't", "not", "won't"],
        answer: 1
    },
    {
        id: 36,
        level: 'B2',
        question: "Despite ___ tired, he kept working.",
        options: ["he was", "of being", "being", "be"],
        answer: 2
    },
    {
        id: 37,
        level: 'B2',
        question: "It was ___ a boring film that I fell asleep.",
        options: ["so", "such", "very", "too"],
        answer: 1
    },
    {
        id: 38,
        level: 'B2',
        question: "You ___ have seen him. He is in New York!",
        options: ["mustn't", "can't", "shouldn't", "needn't"],
        answer: 1
    },
    {
        id: 39,
        level: 'B2',
        question: "Only when I arrived ___ realize I had forgotten my keys.",
        options: ["I did", "did I", "I had", "had I"],
        answer: 1
    },
    {
        id: 40,
        level: 'B2',
        question: "I'll let you know as soon as I ___ from him.",
        options: ["hear", "will hear", "heard", "am hearing"],
        answer: 0
    },

    // C1 Levels (41-50)
    {
        id: 41,
        level: 'C1',
        question: "Seldom ___ such a beautiful sunset.",
        options: ["I have seen", "have I seen", "I saw", "did I see"],
        answer: 1
    },
    {
        id: 42,
        level: 'C1',
        question: "Had I known about the traffic, I ___ earlier.",
        options: ["would leave", "would have left", "left", "had left"],
        answer: 1
    },
    {
        id: 43,
        level: 'C1',
        question: "It is essential that he ___ informed immediately.",
        options: ["be", "is", "will be", "was"],
        answer: 0
    },
    {
        id: 44,
        level: 'C1',
        question: "He was ___ with the crime.",
        options: ["accused", "charged", "blamed", "arrested"],
        answer: 1
    },
    {
        id: 45,
        level: 'C1',
        question: "I can't help ___ that something is wrong.",
        options: ["think", "to think", "thinking", "thought"],
        answer: 2
    },
    {
        id: 46,
        level: 'C1',
        question: "The company is on the ___ of bankruptcy.",
        options: ["edge", "verge", "rim", "border"],
        answer: 1
    },
    {
        id: 47,
        level: 'C1',
        question: "Little ___ that he was being watched.",
        options: ["he knew", "did he know", "he knows", "does he know"],
        answer: 1
    },
    {
        id: 48,
        level: 'C1',
        question: "Whatever ___ happen, I will support you.",
        options: ["may", "can", "will", "shall"],
        answer: 0
    },
    {
        id: 49,
        level: 'C1',
        question: "It's high time we ___ something about this.",
        options: ["do", "did", "done", "doing"],
        answer: 1
    },
    {
        id: 50,
        level: 'C1',
        question: "Not only ___ late, but he also forgot his homework.",
        options: ["he was", "was he", "he is", "is he"],
        answer: 1
    },

    // C2 Levels (51-60)
    {
        id: 51,
        level: 'C2',
        question: "The government has ___ a new policy.",
        options: ["implemented", "implanted", "implicated", "implied"],
        answer: 0
    },
    {
        id: 52,
        level: 'C2',
        question: "His arguments were completely ___.",
        options: ["irrefutable", "irresistible", "irreparable", "irresponsible"],
        answer: 0
    },
    {
        id: 53,
        level: 'C2',
        question: "I was ___ by his lack of knowledge.",
        options: ["astounded", "astounded", "astounding", "astound"],
        answer: 0
    },
    {
        id: 54,
        level: 'C2',
        question: "The project was ___ to failure from the start.",
        options: ["doomed", "destined", "fated", "bound"],
        answer: 0
    },
    {
        id: 55,
        level: 'C2',
        question: "She has a ___ for languages.",
        options: ["flair", "flare", "flavor", "favor"],
        answer: 0
    },
    {
        id: 56,
        level: 'C2',
        question: "The evidence is ___.",
        options: ["inconclusive", "inconceivable", "inconsequential", "inconsiderate"],
        answer: 0
    },
    {
        id: 57,
        level: 'C2',
        question: "He is a ___ opponent.",
        options: ["formidable", "formal", "former", "formulaic"],
        answer: 0
    },
    {
        id: 58,
        level: 'C2',
        question: "The decision was ___.",
        options: ["unanimous", "anonymous", "animus", "anomalous"],
        answer: 0
    },
    {
        id: 59,
        level: 'C2',
        question: "She ___ the opportunity to travel.",
        options: ["seized", "ceased", "sized", "sneezed"],
        answer: 0
    },
    {
        id: 60,
        level: 'C2',
        question: "His behavior was ___.",
        options: ["reprehensible", "comprehensive", "apprehensive", "comprehensible"],
        answer: 0
    }
];
