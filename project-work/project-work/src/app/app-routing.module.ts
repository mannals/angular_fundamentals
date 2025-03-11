import { Routes } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { TextEditorComponent } from "./text-editor/text-editor.component";
import { QuizComponent } from "./quiz/quiz.component";

export const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'calculator', component: CalculatorComponent},
    {path: 'text-editor', component: TextEditorComponent},
    {path: 'quiz', component: QuizComponent}
];

export class AppRoutingModule {};