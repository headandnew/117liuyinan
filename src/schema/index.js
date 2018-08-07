import { schema } from 'normalizr';


const author = new schema.Entity('author', {}, {
  idAttribute: 'mid'
});
const classes = new schema.Entity('classes',{},{
  idAttribute:'id'
})

const comment = new schema.Entity('comments', {}, {
  idAttribute:'id'
})

const teacher = new schema.Entity('teacher',{},{
  idAttribute:'id'
})

const homeworkList = new schema.Entity('homeworkList',{
  classInfo:classes,
  comments: [comment],
  teacherInfo:teacher,
  author:author
},{
  idAttribute:'id'
})


export const HOMEWORKLIST = [ homeworkList ];