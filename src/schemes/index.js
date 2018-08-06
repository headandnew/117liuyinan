import { schema } from 'normalizr';


const classes = new schema.Entity('classes', {}, {
  idAttribute: 'id'
});
const teacher = new schema.Entity('teachers',{},{
  idAttribute:'id'
})

const satisfiled = new schema.Entity('satisfiled',{
  class_info:classes,
  teacher_info:teacher
},{
  idAttribute:'time'
})

export const SATISFILEDLIST = [ satisfiled ];


const classes1 = new schema.Entity('classes1', {}, {
  idAttribute: 'id'
});
const teacher1 = new schema.Entity('teachers1',{},{
  idAttribute:'id'
})

const lessonList = new schema.Entity('lessonList',{
  class_info:classes1,
  teacher_info:teacher1
},{
  idAttribute:'id'
})

export const LESSONLIST = [ lessonList ];