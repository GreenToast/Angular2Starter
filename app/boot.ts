import "reflect-metadata";
import 'zone.js/dist/zone';
import { provideRouter } from "@angular/router";
import { AppRoutes } from "./routes";
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from "./app.component";
import { HTTP_PROVIDERS } from "@angular/http";
import { disableDeprecatedForms, provideForms } from "@angular/forms";
import { provideStore ,Store } from "@ngrx/store";
import { commentsReducer } from "./reducer/comments.reducer";
import "./css/app";

bootstrap(AppComponent, [...provideRouter(AppRoutes), disableDeprecatedForms(), provideForms(),provideStore({
    comments: commentsReducer
},{
    comments: [
        {
            id: 1,
            headline: "I wanted to ask a question",
            text: "My example text"
        },
        {
            id: 2,
            headline: "Even the best thing was fine",
            text: "No one knew what was coming"
        }
    ]
}
)]).catch((error: Error) => console.error(error));


