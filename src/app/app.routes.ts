import { Routes } from '@angular/router';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { ExercisesComponent } from './pages/exercises/exercises.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { AboutComponent } from './pages/about/about.component';
import { IntroductionComponent } from './pages/lessons-folder/introduction/introduction.component';
import { AbstractionComponent } from './pages/lessons-folder/abstraction/abstraction.component';
import { EncapsulationComponent } from './pages/lessons-folder/encapsulation/encapsulation.component';
import { InheritanceComponent } from './pages/lessons-folder/inheritance/inheritance.component';
import { PolymorphismComponent } from './pages/lessons-folder/polymorphism/polymorphism.component';
import { Lesson1OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/introduction/lesson1-overview/lesson1-overview.component';
import { Lesson2OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/introduction/lesson2-overview/lesson2-overview.component';
import { Lesson3OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/introduction/lesson3-overview/lesson3-overview.component';
import { Lesson4OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/introduction/lesson4-overview/lesson4-overview.component';
import { Lesson5OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/introduction/lesson5-overview/lesson5-overview.component';
import { Lesson6OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/introduction/lesson6-overview/lesson6-overview.component';
import { Lesson7OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/introduction/lesson7-overview/lesson7-overview.component';
import { Lesson8OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/introduction/lesson8-overview/lesson8-overview.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login-register',
        pathMatch: 'full'
    },
    {
        path: 'login-register',
        component: LoginRegisterComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'homepage',
                component: HomepageComponent
            },
            {
                path: 'lessons',
                component: LessonsComponent
            },
            {
                path: 'exercises',
                component: ExercisesComponent
            },
            {
                path: 'quiz',
                component: QuizComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
            // Lessons
            {
                path: 'introduction',
                component: IntroductionComponent

            },
            {
                path: 'abstraction',
                component: AbstractionComponent
            },
            {
                path: 'encapsulation',
                component: EncapsulationComponent
            },
            {
                path: 'inheritance',
                component: InheritanceComponent
            },
            {
                path: 'polymorphism',
                component: PolymorphismComponent
            },
            // Introduction Overview
            {
                path: 'introduction-to-object-oriented-programming-overview',
                component: Lesson1OverviewComponent
            },
            {
                path: 'understanding-object-and-classes-overview',
                component: Lesson2OverviewComponent
            },
            {
                path: 'introduction-to-java-overview',
                component: Lesson3OverviewComponent
            },
            {
                path: 'basic-oop-concepts-in-java-overview',
                component: Lesson4OverviewComponent
            },
            {
                path: 'class-structure-and-access-overview',
                component: Lesson5OverviewComponent
            },
            {
                path: 'basic-object-oriented-design-overview',
                component: Lesson6OverviewComponent
            },
            {
                path: 'java-class-libraries-overview-overview',
                component: Lesson7OverviewComponent
            },
            {
                path: 'object-interactions-overview',
                component: Lesson8OverviewComponent
            }

            // Abstraction Overview
            // Encapsulation Overview
            // Inheritance Overview
            // Polymorphism Overview
        ]
    }
];
