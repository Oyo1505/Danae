import React, { useContext } from 'react'
import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'
import { StoreContext } from '../../utils/StoreProvider'
const CustomButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  marginTop: '45px',
  fontSize: 16,
  color: '#000',
  padding: '10px 110px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: 'white !important',
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: '#ffff',
    boxShadow: 'none',
  },
})
const ButtonBuy = () => {
  const { inSale, sold, handleSold } = useContext(StoreContext)

  return (
    <div>
      {!sold && inSale && (
        <CustomButton variant="contained" onClick={handleSold}>
          BUY NOW
        </CustomButton>
      )}
    </div>
  )
}

export default ButtonBuy
