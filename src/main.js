import 'libs/mdl/material.min.css'
import 'libs/mdl/iconfont/material-icons.css'
import 'libs/mdl/material.min'
try {
  require('./router')
} catch (err) {
  window.alert(err)
}
