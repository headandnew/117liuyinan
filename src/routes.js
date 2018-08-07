import UserCenter from './container/UserCenter';
import StudentsLib from './container/StudentsLib';
import ClassDetail from './container/ClassDetail';
import AppWrapper from './container/AppWrapper';
import ReviewHomework from './container/ReviewHomework'

const routeConfig = { 
  path: '/',
  component: AppWrapper,
  indexRoute: { component: StudentsLib },
  childRoutes: [
    { path: 'studentsLib', component: StudentsLib },
    { path: 'userCenter/:mid', component: UserCenter },
    { path: 'classDetail/:classId', component: ClassDetail },
    { path: 'reviewhomework', component: ReviewHomework}
  ]
}

// /studentsLib

export default routeConfig
