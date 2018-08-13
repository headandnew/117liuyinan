import UserCenter from './container/UserCenter';
import StudentsLib from './container/StudentsLib';
import ClassDetail from './container/ClassDetail';
import AppWrapper from './container/AppWrapper';
import Root from './container/Root'
const routeConfig = { 
  path: '/',
  component: AppWrapper,
  indexRoute: { component: StudentsLib },
  childRoutes: [
    { path: 'studentsLib', component: StudentsLib },
    { path: 'userCenter/:mid', component: UserCenter },
    { path: 'classDetail/:classId', component: ClassDetail },
    { path: 'root', component: Root}

  ]
}

// /studentsLib

export default routeConfig
