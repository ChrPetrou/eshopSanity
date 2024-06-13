import {defineType, defineField, defineArrayMember} from 'sanity'
import {BiSolidCategory as icon} from 'react-icons/bi'

export default defineType({
  name: 'categories',
  title: 'categories',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'add category name',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    }),
  ],
})
