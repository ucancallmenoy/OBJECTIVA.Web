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
import { Abstraction1OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/abstraction/abstraction1-overview/abstraction1-overview.component';
import { Abstraction2OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/abstraction/abstraction2-overview/abstraction2-overview.component';
import { Abstraction3OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/abstraction/abstraction3-overview/abstraction3-overview.component';
import { Abstraction4OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/abstraction/abstraction4-overview/abstraction4-overview.component';
import { Encapsulation1OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/encapsulation/encapsulation1-overview/encapsulation1-overview.component';
import { Encapsulation2OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/encapsulation/encapsulation2-overview/encapsulation2-overview.component';
import { Encapsulation3OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/encapsulation/encapsulation3-overview/encapsulation3-overview.component';
import { Encapsulation5OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/encapsulation/encapsulation5-overview/encapsulation5-overview.component';
import { Encapsulation6OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/encapsulation/encapsulation6-overview/encapsulation6-overview.component';
import { Inheritance1OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/inheritance/inheritance1-overview/inheritance1-overview.component';
import { Inheritance2OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/inheritance/inheritance2-overview/inheritance2-overview.component';
import { Inheritance3OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/inheritance/inheritance3-overview/inheritance3-overview.component';
import { Inheritance4OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/inheritance/inheritance4-overview/inheritance4-overview.component';
import { Inheritance5OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/inheritance/inheritance5-overview/inheritance5-overview.component';
import { Inheritance6OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/inheritance/inheritance6-overview/inheritance6-overview.component';
import { Polymorphism1OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/polymorphism/polymorphism1-overview/polymorphism1-overview.component';
import { Polymorphism2OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/polymorphism/polymorphism2-overview/polymorphism2-overview.component';
import { Polymorphism3OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/polymorphism/polymorphism3-overview/polymorphism3-overview.component';
import { Polymorphism4OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/polymorphism/polymorphism4-overview/polymorphism4-overview.component';
import { Polymorphism5OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/polymorphism/polymorphism5-overview/polymorphism5-overview.component';
import { Polymorphism6OverviewComponent } from './pages/lessons-folder/lessons-overview-folder/polymorphism/polymorphism6-overview/polymorphism6-overview.component';
import { IntroductionContent1Component } from './pages/lessons-content/introduction/introduction-content-1/introduction-content-1.component';
import { IntroductionContent2Component } from './pages/lessons-content/introduction/introduction-content-2/introduction-content-2.component';
import { IntroductionContent3Component } from './pages/lessons-content/introduction/introduction-content-3/introduction-content-3.component';
import { IntroductionContent4Component } from './pages/lessons-content/introduction/introduction-content-4/introduction-content-4.component';
import { IntroductionContent5Component } from './pages/lessons-content/introduction/introduction-content-5/introduction-content-5.component';
import { IntroductionContent6Component } from './pages/lessons-content/introduction/introduction-content-6/introduction-content-6.component';
import { IntroductionContent7Component } from './pages/lessons-content/introduction/introduction-content-7/introduction-content-7.component';
import { IntroductionContent8Component } from './pages/lessons-content/introduction/introduction-content-8/introduction-content-8.component';
import { EncapsulationContent1Component } from './pages/lessons-content/encapsulation/encapsulation-content-1/encapsulation-content-1.component';
import { EncapsulationContent2Component } from './pages/lessons-content/encapsulation/encapsulation-content-2/encapsulation-content-2.component';
import { EncapsulationContent3Component } from './pages/lessons-content/encapsulation/encapsulation-content-3/encapsulation-content-3.component';
import { EncapsulationContent4Component } from './pages/lessons-content/encapsulation/encapsulation-content-4/encapsulation-content-4.component';
import { EncapsulationContent5Component } from './pages/lessons-content/encapsulation/encapsulation-content-5/encapsulation-content-5.component';
import { Quiz1Component } from './pages/quiz-content/quiz-1/quiz-1.component';

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
    // LAYOUT (WITH HEADER NAV) ROUTES
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
            },
            // Abstraction Overview
            {
                path: 'understanding-abstraction-overview',
                component: Abstraction1OverviewComponent
            },
            {
                path: 'abstract-classes-overview',
                component: Abstraction2OverviewComponent
            },
            {
                path: 'interfaces-overview',
                component: Abstraction3OverviewComponent
            },
            {
                path: 'abstraction-implementation-in-java-overview',
                component: Abstraction4OverviewComponent
            },
            // Encapsulation Overview
            {
                path:'understanding-encapsulation-overview',
                component: Encapsulation1OverviewComponent
            },
            {
                path:'access-modifiers-overview',
                component: Encapsulation2OverviewComponent
            },
            {
                path:'getters-and-setters-overview',
                component: Encapsulation3OverviewComponent
            },
            {
                path:'data-validation-overview',
                component: Encapsulation5OverviewComponent
            },
            {
                path:'encapsulation-implementation-in-java-overview',
                component: Encapsulation6OverviewComponent
            },
            // Inheritance Overview
            {
                path: 'understanding-inheritance-overview',
                component: Inheritance1OverviewComponent
            },
            {
                path: 'single-inheritance-overview',
                component: Inheritance2OverviewComponent
            },
            {
                path: 'types-of-inheritance-in-java-overview',
                component: Inheritance3OverviewComponent
            },
            {
                path: 'methods-overriding-overview',
                component: Inheritance4OverviewComponent
            },
            {
                path: 'advanced-inheritance-concepts-overview',
                component: Inheritance5OverviewComponent
            },
            {
                path: 'inheritance-implementation-in-java-overview',
                component: Inheritance6OverviewComponent
            },
            // Polymorphism Overview
            {
                path: 'understanding-polymorphism-overview',
                component: Polymorphism1OverviewComponent
            },
            {
                path: 'compile-time-polymorphism-overview',
                component: Polymorphism2OverviewComponent
            },
            {
                path: 'runtime-polymorphism-overview',
                component: Polymorphism3OverviewComponent
            },
            {
                path: 'advanced-polymorphic-concepts-overview',
                component: Polymorphism4OverviewComponent
            },
            {
                path: 'polymorphism-with-interfaces-overview',
                component: Polymorphism5OverviewComponent
            },
            {
                path: 'polymorphism-implementation-in-java-overview',
                component: Polymorphism6OverviewComponent
            },

            // CONTENT
            // INTRODUCTION CONTENT
            {
                path: 'introduction-to-object-oriented-programming',
                component: IntroductionContent1Component
            },
            {
                path: 'understanding-object-and-classes',
                component: IntroductionContent2Component
            },
            {
                path: 'introduction-to-java',
                component: IntroductionContent3Component
            },
            {
                path: 'basic-oop-concepts-in-java',
                component: IntroductionContent4Component
            },
            {
                path: 'class-structure-and-access',
                component: IntroductionContent5Component
            },
            {
                path: 'basic-object-oriented-design',
                component: IntroductionContent6Component
            },
            {
                path: 'java-class-libraries',
                component: IntroductionContent7Component
            },
            {
                path: 'object-interactions',
                component: IntroductionContent8Component
            },

            // ENCAPSULATION CONTENT
            {
                path: 'understanding-encapsulation',
                component: EncapsulationContent1Component
            },
            {
                path: 'access-modifiers',
                component: EncapsulationContent2Component
            },
            {
                path: 'getters-and-setters',
                component: EncapsulationContent3Component
            },
            {
                path: 'data-validation',
                component: EncapsulationContent4Component
            },
            {
                path: 'implementation-in-java',
                component: EncapsulationContent5Component
            },

        ]
    },
    
    // QUIZ (NO HEADER NAV) ROUTES
    {
        path: 'quiz-about-object-oriented-programming',
        component: Quiz1Component
    },

];
