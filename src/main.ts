import { platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app-routing/app.module";


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
