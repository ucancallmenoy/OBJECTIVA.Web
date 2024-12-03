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
import { IntroductionOverviewComponent } from './pages/lessons-folder/lessons-overview-folder/introduction-overview/introduction-overview.component';

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
            {
                path: 'introduction-overview',
                component: IntroductionOverviewComponent
            }
        ]
    }
];
