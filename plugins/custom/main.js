var templates = [
"root/externallib/text!root/plugins/custom/theme.css",
"root/externallib/text!root/plugins/custom/login.html",
//"root/externallib/text!root/plugins/custom/program.html"
];
// Inject allways our custom theme.
$("#mobilecssurl").html(theme);
// Replace the sign-up form with our custom template.
$("#add-site_template").html(loginForm);
// Automatically use the URL of the moodle moot without further checks.
MM.checkSite = function(e) {
MM.addSite(e);
};
// Inject allways our custom theme.
MM.loadCachedRemoteCSS = function(e) {
$("#mobilecssurl").html(theme);
};
// Do not display the manage accounts page.
MM._displayManageAccounts = function() {
MM._displayAddSite();
};
MM.registerPlugin(plugin);
});
