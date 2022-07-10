const quizData= [
	{
		question: 'В каком году создан Java',
		a:'1993',
		b:'2003',
		c:'1989',
		d:'1995',
		correct:'d'
	},{
		question:'На каком языке программирования из перечисленных пишут модули ядра Linux',
		a:'C',
		b:'Python',
		c:'JavaScript',
		d:'Java',
		correct:'a'
	},{
		question:'Что такое ООП',
		a:'Объектно-ориентированное программирование — методология программирования, основанная на представлении программы в виде совокупности объектов, каждый из которых является экземпляром определенного класса, а классы образуют иерархию наследования.',
		b:'Основы офигенного программирования',
		c:'Объектно-ориентированное программирование — просто красивое понятие. Просто программисты любят аббревиатуры, так области их знаний выглядят сложнее',
		d:'Очень одинокий программист',
		correct:'a'
	},{
		question:'Низкоуровневый язык программирования',
		a:'C#',
		b:'Assembler',
		c:'Java',
		d:'PHP',
		correct:'b'
	},{
		question:'Лучший язык для Web-Разработки',
		a:'PHP',
		b:'Ruby',
		c:'JavaScript',
		d:'Python',
		correct:'c'
	}
]
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0 

loadQuiz()

function loadQuiz() {
	deselectAnswers()
	const currentQuizData = quizData[currentQuiz]
	questionEl.innerText = currentQuizData.question
	a_text.innerText = currentQuizData.a
	b_text.innerText = currentQuizData.b
	c_text.innerText = currentQuizData.c
	d_text.innerText = currentQuizData.d
}

function getSelected() {
	let answer = undefined 

	answerEls.forEach((answerEl) => {
		if (answerEl.checked) {
			answer = answerEl.id
		}
	})

	return answer
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
	
	const answer = getSelected()
	console.log(answer)
	if (answer) {
		if (answer === quizData[currentQuiz].correct) {
			score++
		}

			currentQuiz++;
		if (currentQuiz < quizData.length) {
			loadQuiz()
		} else{
			quiz.innerHTML = `
                <h2>Ты ответил верно на ${score}/${quizData.length} вопросов</h2>
                
                <button onclick="location.reload()">Начать заново</button>
            `;
		}
	}
	
})