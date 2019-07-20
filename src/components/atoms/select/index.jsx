import React, { memo } from 'react'
import SelectMaterial from '@material-ui/core/Select'

export const Select = memo(({ handleChange, selectedValue, children }) => (
    <SelectMaterial
        fullWidth
        value={selectedValue}
        children={children}
        onChange={handleChange}
        style={{
            height: '40px',
            border: '1px solid blue',
            borderRadius: '10px'
        }}
        disableUnderline
        variant='outlined'
    />
))

Select.defaultProps = { selectedValue: '' }
