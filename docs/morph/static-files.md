---
id: static-files
title: Static files
---

<!--DOCUSAURUS_CODE_TABS-->
<!--Reason-->
```ocaml
Http.Server.start(~context=(), (~request as _, ()) => {
    Http.Response.Ok.make();
})
|> Lwt_main.run;
```

<!--OCaml-->
```ocaml
Http.Server.start ~context: () (fun ~request -> Http.Response.Ok.make)
|> Lwt_main.run
```
<!--END_DOCUSAURUS_CODE_TABS-->
