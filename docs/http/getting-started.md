---
id: getting-started
title: Getting started
---

<!--DOCUSAURUS_CODE_TABS-->
<!--Reason-->

```reason
let context = ();
Http.Server.start(~context, (~request as _) => Http.Response.Ok.make)
|> Lwt_main.run;
```

<!--OCaml-->

```ocaml
let context = () in
Http.Server.start ~context (fun ~request:_ -> Http.Response.Ok.make)
|> Lwt_main.run
```

<!--END_DOCUSAURUS_CODE_TABS-->
