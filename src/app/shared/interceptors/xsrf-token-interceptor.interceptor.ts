import { HttpInterceptorFn } from '@angular/common/http';

export const xsrfTokenInterceptor: HttpInterceptorFn = (req, next) => {

  

    // Função para obter o valor do cookie
    const getCookie = (name: string): string | null => {
      const ca: Array<string> = document.cookie.split(';');
      const cookieName = `${name}=`;
      for (let i = 0; i < ca.length; i++) {
        const c = ca[i].trim();
        if (c.indexOf(cookieName) === 0) {
          return c.substring(cookieName.length, c.length);
        }
      }
      return null;
    };
// Pegar o token do cookie
const token = getCookie('XSRF-TOKEN');

// Se o token existir, clonar a requisição e adicionar o cabeçalho X-XSRF-TOKEN
if (token) {
  const clonedReq = req.clone({
    headers: req.headers.set('X-XSRF-TOKEN', token)
  });
  return next(clonedReq);
}

// Caso contrário, continuar a requisição sem modificação
return next(req);
};
