import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@hbcode/mf-header",
  app: () => System.import("@hbcode/mf-header") as Promise<any>,
  activeWhen: ["/"],
});
registerApplication({
  name: "@hbcode/mf-footer",
  app: () => System.import("@hbcode/mf-footer") as Promise<any>,
  activeWhen: ["/"],
});
registerApplication({
  name: "@hbcode/mf-react",
  app: () => System.import("@hbcode/mf-react") as Promise<any>,
  activeWhen: ["/"],
});
registerApplication({
  name: "@hbcode/mf-set-id",
  app: () => System.import("@hbcode/mf-set-id") as Promise<any>,
  activeWhen: ["/mf-main"],
});
registerApplication({
  name: "@hbcode/mf-main",
  app: () => System.import("@hbcode/mf-main") as Promise<any>,
  activeWhen: ["/mf-main"],
});
registerApplication({
  name: "@hbcode/mf-images",
  app: () => System.import("@hbcode/mf-images") as Promise<any>,
  activeWhen: ["/mf-images"],
});
registerApplication({
  name: "@hbcode/mf-cats",
  app: () => System.import("@hbcode/mf-cats") as Promise<any>,
  activeWhen: ["/mf-cats"],
});
registerApplication({
  name: "@hbcode/mf-react-prueba",
  app: () => System.import("@hbcode/mf-react-prueba") as Promise<any>,
  activeWhen: ["/prueba"],
});

start({
  urlRerouteOnly: true,
});
