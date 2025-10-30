metadata = {
  systemName: "com.k2.mrohstorage",
  displayName: "MROH File Download Broker",
  description: "A broker for downloading files from MROH Azure Blob Storage.",
  configuration: {
    storageAccountUrl: {
      displayName: "Storage Account URL",
      type: "string",
      value: "https://mrohstoragetechrefdev01.blob.core.windows.net"
    },
    containerPath: {
      displayName: "Container Path",
      type: "string",
      value: "/mrohstoragetechrefdev01/Technical%20Reference/Work%20Orders/2025-298/2025-0394872/References"
    },
    "x-ms-version": {
      displayName: "Azure Storage API Version",
      type: "string",
      value: "2020-04-08"
    }
  }
};
ondescribe = async function({ configuration: t }) {
  postSchema({
    objects: {
      file: {
        displayName: "File",
        description: "Download file content from Azure Blob Storage",
        properties: {
          content: {
            displayName: "File Content",
            type: "string"
          },
          fileName: {
            displayName: "File Name",
            type: "string"
          }
        },
        methods: {
          download: {
            displayName: "Download File",
            type: "read",
            outputs: ["content", "fileName"],
            parameters: {
              path: {
                displayName: "File Path",
                description: "Path to the file in blob storage",
                type: "string"
              }
            },
            requiredParameters: ["path"]
          }
        }
      }
    }
  });
};
onexecute = async function({
  objectName: t,
  methodName: n,
  parameters: r,
  properties: o,
  configuration: a
}) {
  switch (t) {
    case "file":
      await h(n, r, o, a);
      break;
    default:
      throw new Error("The object " + t + " is not supported.");
  }
};
async function h(t, n, r, o) {
  switch (t) {
    case "download":
      await u(n, r, o);
      break;
    default:
      throw new Error("The method " + t + " is not supported.");
  }
}
function u(t, n, r) {
  return new Promise(function(o, a) {
    if (typeof t.path != "string") {
      a(new Error('parameters["path"] is not of type string'));
      return;
    }
    const c = r.storageAccountUrl || "https://mrohstoragetechrefdev01.blob.core.windows.net", l = r.containerPath || "/mrohstoragetechrefdev01/Technical%20Reference/Work%20Orders/2025-298/2025-0394872/References", s = t.path, d = c + l + "/" + s, p = r["x-ms-version"] || "2020-04-08";
    var e = new XMLHttpRequest();
    e.withCredentials = !0, e.onreadystatechange = function() {
      try {
        if (e.readyState !== 4)
          return;
        if (e.status !== 200) {
          a(new Error("Failed with status " + e.status + ": " + e.statusText));
          return;
        }
        const i = s.includes("/") ? s.split("/").pop() : s;
        postResult({
          content: e.responseText,
          fileName: i
        }), o();
      } catch (i) {
        a(i);
      }
    }, e.open("GET", d), e.setRequestHeader("x-ms-version", p), e.send();
  });
}
//# sourceMappingURL=BlobFileDownloadBroker.js.map
