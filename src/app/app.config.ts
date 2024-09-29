import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors, withXsrfConfiguration } from '@angular/common/http';
import { loaderInterceptor } from './shared/interceptors/loader.interceptor';
import { LoaderService } from './shared/services/loader.service';
import { authInterceptor } from './shared/interceptors/auth.interceptor';
import { styleReducer } from './store/reducers/style-reducer';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {

  providers: [
    LoaderService,
    
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideStore({ style: styleReducer }), // Registra o reducer de estilo
    provideEffects([]), // Registra efeitos, se houver
    provideStoreDevtools({
      logOnly: environment.production, // Habilita logs apenas em modo de desenvolvimento
    }),
    
    provideHttpClient(
      withInterceptors([loaderInterceptor,authInterceptor]),
      withXsrfConfiguration({
        cookieName: 'XSRF-TOKEN',   // Nome do cookie que o backend envia
        headerName: 'X-XSRF-TOKEN'  // Nome do cabeçalho que será enviado nas requisições HTTP
      })
    ),
    provideRouter(routes)]
};
