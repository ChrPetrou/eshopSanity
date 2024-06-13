import {defineType} from 'sanity'

export default defineType({
  name: 'Product',
  title: 'product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      validation: (Rule) => Rule.required(),
      type: 'string',
      description: 'add product name',
    },
    {
      name: 'slug',
      title: 'Slug',
      validation: (Rule) => Rule.required(),
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      validation: (Rule) => Rule.required(),
      type: 'string',
      description: 'add product short description',
    },
    {
      name: 'price',
      title: 'Price',
      validation: (Rule) => Rule.required(),
      type: 'number',
      description: 'add product price',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          fields: [
            {
              title: 'position',
              name: 'Position',
              type: 'string',
              options: {
                list: [
                  {title: 'left', value: 'left'},
                  {title: 'right', value: 'right'},
                  {title: 'center', value: 'center'},
                ],
                layout: 'radio',
              },
            },
            {
              type: 'text',
              name: 'alt',
              title: 'Description',
            },
          ],
          options: {
            hotspot: true,
          },
        },
      ],
      description: 'add product description',
    },
    {
      name: 'coverImage',
      title: 'CoverImage',
      type: 'image',
      description: 'add product image',
    },
    {
      name: 'images',
      title: 'images',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [{type: 'image'}],
      description: 'add product image',
    },
    {
      name: 'subCategory',
      title: 'subcategory',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [{type: 'reference', to: [{type: 'subCategory'}]}],
      description: 'add product categories',
    },
    {
      name: 'quantity',
      title: 'Quantity',
      type: 'number',
      description: 'add product quantity',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'object',
      fields: [
        {
          name: 'oneStar',
          title: '1 Star',
          type: 'number',
          validation: (Rule) => Rule.min(0).integer(),
        },
        {
          name: 'twoStars',
          title: '2 Stars',
          type: 'number',
          validation: (Rule) => Rule.min(0).integer(),
        },
        {
          name: 'threeStars',
          title: '3 Stars',
          type: 'number',
          validation: (Rule) => Rule.min(0).integer(),
        },
        {
          name: 'fourStars',
          title: '4 Stars',
          type: 'number',
          validation: (Rule) => Rule.min(0).integer(),
        },
        {
          name: 'fiveStars',
          title: '5 Stars',
          type: 'number',
          validation: (Rule) => Rule.min(0).integer(),
        },
      ],
      description: 'Poll-based rating for the product',
    },
    {
      name: 'availability',
      title: 'Availability',
      type: 'string',
      options: {
        list: [
          {title: 'In Stock', value: 'in_stock'},
          {title: 'Out of Stock', value: 'out_of_stock'},
          {title: 'Pre-order', value: 'pre_order'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'dimensions',
      title: 'Dimensions',
      type: 'object',
      fields: [
        {name: 'length', title: 'Length', type: 'number'},
        {name: 'width', title: 'Width', type: 'number'},
        {name: 'height', title: 'Height', type: 'number'},
      ],
      description: 'Physical dimensions of the product',
    },
    {
      name: 'weight',
      title: 'Weight',
      type: 'number',
      description: 'Weight of the product in grams or kilograms',
    },
    {
      name: 'sold',
      title: 'Units Sold',
      type: 'number',
      description: 'Number of units sold',
      validation: (Rule) => Rule.min(0),
    },
  ],
})
