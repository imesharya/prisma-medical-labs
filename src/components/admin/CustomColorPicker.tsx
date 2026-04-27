'use client'

import React from 'react'
import type { TextFieldClientComponent } from 'payload'
import { useField } from '@payloadcms/ui'
import { FieldLabel } from '@payloadcms/ui/fields/FieldLabel'
import { FieldDescription } from '@payloadcms/ui/fields/FieldDescription'
import { TextInput } from '@payloadcms/ui/fields/Text'

const CustomColorPicker: TextFieldClientComponent = (props) => {
  const {
    field: { name, label, required, admin },
    path,
  } = props

  const { value, setValue } = useField<string>({ path: path || name })

  const formattedValue = (value || '#000000').toUpperCase()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.toUpperCase())
  }

  return (
    <div className="field-type">
      <FieldLabel label={label} required={required} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--base)' }}>
        <input
          type="color"
          value={formattedValue}
          onChange={handleChange}
          style={{
            width: '40px',
            height: '40px',
            padding: 0,
            border: 'none',
            borderRadius: 'var(--style-radius-s)',
            cursor: 'pointer',
            background: 'transparent',
          }}
        />
        <TextInput
          path={path || name}
          value={formattedValue}
          onChange={handleChange}
          placeholder="#RRGGBB"
        />
      </div>
      {admin?.description && <FieldDescription description={admin.description} path={path} />}
    </div>
  )
}

export default CustomColorPicker
