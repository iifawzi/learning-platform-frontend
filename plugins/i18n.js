export default function ({ app }) {
    app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
      app.head.htmlAttrs = {
        dir: newLocale == "ar" ? "rtl" : "ltr"
      }
    }
  }