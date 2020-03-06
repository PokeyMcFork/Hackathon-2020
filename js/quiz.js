function displayMessage() {
   $("#quiz-area").css("display", "block").text("Very well. You can come back to the quiz at any time if you wish.")
}

function startQuiz() {

}






const questions = {
    question1: {
        question: "When was Grace Hopper born?",
        answer1: {
            answer: "1706",
            isTrue: false
        },
         answer2: {
            answer: "1906",
            isTrue: true
        },
         answer3: {
            answer: "1806",
            isTrue: false
        }
    },
    question2: {
        question: "What is the name of the computer language that Grace helped create?",
        answer1: {
            answer: "COBOL",
            isTrue: true,
        },
         answer2: {
            answer: "CLOWN",
            isTrue: false,
        },
         answer3: {
            answer: "CHARM",
            isTrue: false
        }
    },
    question3: {
        question: "Where was Grace Born?",
        answer1: {
            answer: "London",
            isTrue: false
        },
         answer2: {
            answer: "Tokyo",
            isTrue: false
        },
         answer3: {
            answer: "New York"
            isTrue: true
        }
    },
    question4: {
        question: "Which military rank did Grace reach?",
        answer1: {
            answer: "Liutenant",
            isTrue: false
        },
         answer2: {
            answer: "Commodore",
            isTrue: false
        },
         answer3: {
            answer: "Sergeant",
            isTrue: false
        }
    },
    question5: {
        question: "Which real bug (insect) was found in one of her computers?",
        answer1: {
            answer: "a cockroach",
            isTrue: false
        },
         answer2: {
            answer: "a bee",
            isTrue: false
        },
         answer3: {
            answer: "a moth",
            isTrue: true
        }
    },
    question6: {
        question: "Which military did Grace Serve in?",
        answer1: {
            answer: "British Air Force",
            isTrue: false
        },
         answer2: {
            answer: "US Navy",
            isTrue: true
        },
         answer3: {
            answer: "French Foreign Legion"
            isTrue: false
        }
    },
    question7: {
        question: "How old was Grace when she dismantled an alarm clock?",
        answer1: {
            answer: "7",
            isTrue: true
        },
         answer2: {
            answer: "17",
            isTrue: false
        },
         answer3: {
            answer: "77",
            isTrue: false
        }
    },
    question8: {
        question: "What is the name of the computer that Grace helped develop?",
        answer1: {
            answer: "VACUUM",
            isTrue: false
        },
         answer2: {
            answer: "SPIDER",
            isTrue: true
        },
         answer3: {
            answer: "UNIVAC",
            isTrue: true
        }
    }

}