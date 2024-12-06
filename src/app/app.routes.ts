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
import { Introduction1OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/introduction/introduction1-overview/introduction1-overview.component';
import { Introduction2OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/introduction/introduction2-overview/introduction2-overview.component';
import { Introduction3OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/introduction/introduction3-overview/introduction3-overview.component';
import { Introduction4OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/introduction/introduction4-overview/introduction4-overview.component';
import { Introduction5OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/introduction/introduction5-overview/introduction5-overview.component';
import { Introduction6OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/introduction/introduction6-overview/introduction6-overview.component';
import { Introduction7OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/introduction/introduction7-overview/introduction7-overview.component';
import { Introduction8OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/introduction/introduction8-overview/introduction8-overview.component';



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
                component: Introduction1OverviewComponent
            },
            {
                path: 'understanding-object-and-classes-overview',
                component: Introduction2OverviewComponent
            },
            {
                path: 'introduction-to-java-overview',
                component: Introduction3OverviewComponent
            },
            {
                path: 'basic-oop-concepts-in-java-overview',
                component: Introduction4OverviewComponent
            },
            {
                path: 'class-structure-and-access-overview',
                component: Introduction5OverviewComponent
            },
            {
                path: 'basic-object-oriented-design-overview',
                component: Introduction6OverviewComponent
            },
            {
                path: 'java-class-libraries-overview-overview',
                component: Introduction7OverviewComponent
            },
            {
                path: 'object-interactions-overview',
                component: Introduction8OverviewComponent
            }
            // Abstraction Overview

            // Encapsulation Overview
            // Inheritance Overview
            // Polymorphism Overview
        ]
    }
];
