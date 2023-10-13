import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppRouting } from './app/app-routing';


platformBrowserDynamic().bootstrapModule(AppRouting)
  .catch(err => console.error(err));
