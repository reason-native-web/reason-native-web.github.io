---
id: http-getting-started
title: Getting started
---

To get started with your first web server simply call the start function with a handler function. The handler functions has the signature `Request.t => Response.t`. Where a `Request.t` is a record with everything you need from the underlying request and a `Response.t` is everything we need to create a response, `status`, `headers` and a `body`.

There are some helpers to create some of the common responses, we will use the text response for a "Hello world!" response.

<!--DOCUSAURUS_CODE_TABS-->
<!--Reason-->

```reason
let handler = _request => Diacetyl.Server.Response.Text.make("Hello world!");

Diacetyl.Server.start(handler)
|> Lwt_main.run;
```

<!--OCaml-->

```ocaml
let handler _request = Diacetyl.Server.Response.Text.make "Hello world!" in
Diacetyl.Server.start handler
|> Lwt_main.run
```

<!--END_DOCUSAURUS_CODE_TABS-->

The code above will answer every request with the text "Hello world!".

If you have [`esy`](https://esy.sh) and [`pesy`](https://github.com/esy/pesy) installed you can get a template that is ready to be used straight away by running `pesy --template=https://github.com/reason-native-web/diacetyl-hello-world-pesy-template` in a empty folder.
