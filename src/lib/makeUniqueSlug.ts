import { FieldHook, RowField, TextField } from 'payload'

const makeUniqueSlugHook: FieldHook = async ({ value, originalDoc, req, data, collection }) => {
  if (typeof value !== 'string' || !value) {
    return value
  }

  const slug = value
  let finalSlug = slug
  let counter = 2
  const collectionSlug = collection?.slug

  if (!collectionSlug) {
    return slug
  }

  const currentId = originalDoc?.id || data?.id

  while (true) {
    const { docs } = await req.payload.find({
      collection: collectionSlug,
      where: {
        slug: {
          equals: finalSlug,
        },
      },
      limit: 1,
      depth: 0,
    })

    if (docs.length === 0 || (currentId && docs[0].id === currentId)) {
      break
    }

    finalSlug = `${slug}-${counter}`
    counter++
  }

  return finalSlug
}

export const makeUniqueSlug = (defaultField: RowField): RowField => {
  const slugSubFieldIndex = defaultField.fields.findIndex(
    (field) => 'name' in field && field.name === 'slug',
  )
  if (slugSubFieldIndex !== -1) {
    const slugSubField = defaultField.fields[slugSubFieldIndex]
    if (slugSubField.type === 'text') {
      const textField = slugSubField as TextField
      textField.hooks = {
        ...(textField.hooks || {}),
        beforeChange: [...(textField.hooks?.beforeChange || []), makeUniqueSlugHook],
      }

      defaultField.fields[slugSubFieldIndex] = textField
    }
  }
  return defaultField
}
