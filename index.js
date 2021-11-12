var auth = AsgardeoAuth.AsgardeoSPAClient.getInstance();

window.onload = function () {
  auth.on("sign-in", function () {
    document.getElementById("unauthenticated").style.display = "none";
    document.getElementById("authenticated").style.display = "block";
  });

  auth.initialize({
    signInRedirectURL: "http://localhost:5000/",
    signOutRedirectURL: "https://localhost:5000/",
    clientID: "<client-id>",
    serverOrigin: "https://api.asgardeo.io/t/<tenant>",
    scope: ["openid", "profile"]
  });

  auth.signIn({ callOnlyOnRedirect: true });
};

function login() {
  auth.signIn();
}
