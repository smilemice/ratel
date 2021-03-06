import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from './article/article/article.component';
import { HomeComponent } from './home/home/home.component';
import { FourZeroFourComponent } from './tool/four-zero-four/four-zero-four.component';
import { ReplyFullComponent } from './comment/reply-full/reply-full.component';
import { ArticleCreationComponent } from './article/article-creation/article-creation.component';
import { ArticleCreateGuard } from './providers/guard.service';
import { BookMarkComponent } from './auth/book-mark/book-mark.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'home/:id', component: ArticleComponent, runGuardsAndResolvers: 'paramsChange' },
    { path: 'topic', loadChildren: './topic/topic.module#TopicModule' },
    { path: 'home/:id/reply', component: ReplyFullComponent },
    { path: 'create', component: ArticleCreationComponent, canDeactivate: [ArticleCreateGuard] },
    { path: 'bookmark', component: BookMarkComponent },
    { path: ':id', redirectTo: 'home/:id', pathMatch: 'full' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: FourZeroFourComponent },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes, {
            preloadingStrategy: PreloadAllModules,
            onSameUrlNavigation: 'reload',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
