import {defineType, defineField, defineArrayMember} from 'sanity'
import {BiSolidCategory as icon} from 'react-icons/bi'

export default defineType({
  name: 'subCategory',
  title: 'SubCategory',
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
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [{type: 'reference', to: [{type: 'category'}]}],
      description: 'add product categories',
    },
  ],
})
