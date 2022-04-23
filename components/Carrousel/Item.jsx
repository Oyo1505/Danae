import React from 'react'
import { Card, CardMedia, CardContent } from '@mui/material'
const Item = ({ item }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: 368,
        height: 444,
        borderRadius: 0,
        backgroundColor: 'transparent',
      }}
    >
      <CardMedia
        component="img"
        sx={{ height: 330 }}
        image={item.pictures[0]}
        alt="image"
      />
      <CardContent
        sx={{
          padding: '1.5em',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyItems: 'center',
          lineHeight: '30px',
          color: '#D4D4D4',
          border: '1px #fff solid',
          borderTop: '0',
        }}
      >
        <p className="text-2xl">{item.title}</p>
        <p className="text-1xl">
          {item.artist.username === null ? (
            <>
              {item.artist.last_name} {item.artist.first_name}
            </>
          ) : (
            <>{item.artist.username}</>
          )}
        </p>
      </CardContent>
    </Card>
  )
}

export default Item
