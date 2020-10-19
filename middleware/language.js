export default ({app,req,i18n})=> {
        app.head.htmlAttrs = {
            dir: app.i18n.locale == "ar" ? "rtl" : "ltr"
          }
}