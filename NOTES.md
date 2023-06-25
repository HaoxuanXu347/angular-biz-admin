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

- git tag: 1_init_project_with_template_and_components

## module and code refactor

```
ng g m public
ng g m secure
ng g c secure
ng g c public
```
- git tag: 2_module_public_secure
