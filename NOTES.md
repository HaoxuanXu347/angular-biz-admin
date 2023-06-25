## Init

- How to update Git and tag, with new changes:

```
git add .
git commit -m "update"
git push
git tag xxx (e.g., 1_init_project_with_template_and_components)
git push origin --tags
git tag (list all tags)

## how to delete a tag
git tag -d 2_module_public_securexx
git push --delete origin 2_module_public_securexx
```

- `ng new angular-biz-admin --skip-git`
  - add routing
  - using `css`
- `cd angular-biz-admin`
- `ng s`


- add bootstrap: https://getbootstrap.com/
  - use 5.2.3: https://getbootstrap.com/docs/5.2/getting-started/introduction/
  - dashboard: https://getbootstrap.com/docs/5.2/examples/dashboard/

- git tag 1_init_project_with_template_and_components

## module and code refactor

```
ng g m public
ng g m secure
ng g c secure
ng g c public
```
- git tag 2_module_public_secure


## routing

```
ng g c public/login
ng g c public/register
```
- create routes in `app-routing.module.ts`

- git tag 3_routing_public_login_register


## register Form and environments
- https://getbootstrap.com/docs/5.2/examples/sign-in/
- 
- `ng g environments`
  - https://dev.to/this-is-angular/angular-15-what-happened-to-environmentts-koh

- add the following in `main.ts`
```angular2html
import {enableProdMode} from "@angular/core";

if (environment.production) {
  enableProdMode();
}
```
- git tag 4_register_form_http_client_env

## login, redirect, jwt cookie set

- reuse css
- check chrome application section to verify jwt cookie been set
- git tag 5_register_form_http_client_env
