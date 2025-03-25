import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule, Form, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  imports: [NgIf, NgFor, ReactiveFormsModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  submitted: boolean = false;
  score: number = 0;
  wrongs: number[] = [];

  constructor(private fb: FormBuilder) {};

  questionForm!: FormGroup;

  ngOnInit() {
    this.questionForm = this.fb.group({
      questions: this.fb.array<FormGroup>([], Validators.minLength(2)),
    });

    this.addQuestion('When was the first appearance of Super Mario in a video game?', ['1985', '1983', '1981'], '1981');
    this.addQuestion('What is the name of the primary antagonist in the Super Mario franchise?', ['Bowser', 'Yoshi', 'Wario'], 'Bowser');
    this.addQuestion('Who is considered the creator of Super Mario?', ['Hayao Miyazaki', 'Shigeru Miyamoto', 'Koji Kondo'], 'Shigeru Miyamoto');

  }

  get questions(): FormArray<FormGroup> {
    return (this.questionForm.get('questions') as FormArray<FormGroup>);
  }

  getOptions(question: AbstractControl): FormArray {
    return question.get('options') as FormArray;
  }

  getCorrectAnswer(question: AbstractControl): string {
    const control = question.get('correctAnswer');
    return control ? control.value : '';
  }

  addQuestion(questionText: string, options: string[], correctAnswer: string) {
    const questionGroup = this.fb.group({
      questionText: [questionText, Validators.required],
      options: this.fb.array(
        options.map(option => this.fb.control(option))
      ),
      answer: ['', Validators.required],
      correctAnswer: [correctAnswer, Validators.required],
      isCorrect: [false, Validators.required],
    });

    this.questions.push(questionGroup);
  }

  resetQuiz() { 
    this.score = 0; 
    this.submitted = false; 
  
    this.questions.controls.forEach((questionGroup: FormGroup) => {
      questionGroup.patchValue({ 
        answer: '',
        isCorrect: false });
    });
  
    console.log('Quiz has been reset.');
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.questionForm.valid) {
      this.score = 0;
      this.questions.controls.forEach((questionGroup) => {
        const selectedAnswer = questionGroup.get('answer')?.value;
        const correctAnswer = questionGroup.get('correctAnswer')?.value;

        const isCorrect = selectedAnswer === correctAnswer;
        questionGroup.patchValue({ isCorrect });
        if (isCorrect) {
          this.score++;
        }
      });

      console.log('Form Submitted:', this.questionForm.value);
      this.submitted = true;
    } else {
      console.log('Form is invalid');
    }
  }

}
