export default function ({ app }) {
  console.log("called");
  app.head.htmlAttrs = {
    dir: app.i18n.locale == "ar" ? "rtl" : "ltr"
  }
    app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
      app.head.htmlAttrs = {
        dir: newLocale == "ar" ? "rtl" : "ltr"
      }
    }
  }