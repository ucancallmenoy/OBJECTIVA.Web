import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

interface QuizData {
    question: string;
    a: string;
    b: string;
    c: string;
    d: string;
    correct: string;
}

@Component({
  selector: 'app-quiz-1',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './quiz-1.component.html',
  styleUrl: './quiz-1.component.css'
})
export class Quiz1Component implements OnInit {
    quizData: QuizData[] = [
        {
            question: "Which language runs in a web browser?",
            a: "Java",
            b: "C",
            c: "Python",
            d: "javascript",
            correct: "d",
        },
        {
            question: "What does CSS stand for?",
            a: "Central Style Sheets",
            b: "Cascading Style Sheets",
            c: "Cascading Simple Sheets",
            d: "Cars SUVs Sailboats",
            correct: "b",
        },
        {
            question: "What does HTML stand for?",
            a: "Hypertext Markup Language",
            b: "Hypertext Markdown Language",
            c: "Hyperloop Machine Language",
            d: "Helicopters Terminals Motorboats Lamborginis",
            correct: "a",
        },
        {
            question: "What year was JavaScript launched?",
            a: "1996",
            b: "1995",
            c: "1994",
            d: "none of the above",
            correct: "b",
        },
    ];

    currentQuiz = 0;
    score = 0;

    ngOnInit(): void {
        this.loadQuiz();
    }

    loadQuiz(): void {
        this.deselectAnswers();
        const currentQuizData = this.quizData[this.currentQuiz];
        (document.getElementById('question') as HTMLElement).innerText = currentQuizData.question;
        (document.getElementById('a_text') as HTMLElement).innerText = currentQuizData.a;
        (document.getElementById('b_text') as HTMLElement).innerText = currentQuizData.b;
        (document.getElementById('c_text') as HTMLElement).innerText = currentQuizData.c;
        (document.getElementById('d_text') as HTMLElement).innerText = currentQuizData.d;
    }

    deselectAnswers(): void {
        const answerEls = document.querySelectorAll('.answer') as NodeListOf<HTMLInputElement>;
        answerEls.forEach(answerEl => answerEl.checked = false);
    }

    getSelected(): string | undefined {
        let answer: string | undefined;
        const answerEls = document.querySelectorAll('.answer') as NodeListOf<HTMLInputElement>;
        answerEls.forEach(answerEl => {
            if (answerEl.checked) {
                answer = answerEl.id;
            }
        });
        return answer;
    }

    onSubmit(): void {
        const answer = this.getSelected();
        if (answer) {
            if (answer === this.quizData[this.currentQuiz].correct) {
                this.score++;
            }
            this.currentQuiz++;
            if (this.currentQuiz < this.quizData.length) {
                this.loadQuiz();
            } else {
                (document.getElementById('quiz') as HTMLElement).innerHTML = `
                    <h2>You answered ${this.score}/${this.quizData.length} questions correctly</h2>
                    <button onclick="location.reload()">Reload</button>
                `;
            }
        }
    }
}