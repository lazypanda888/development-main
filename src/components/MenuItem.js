import { Button, Card, CardMedia, Typography, Box} from "@mui/material"

// TODO: create a component that displays a single bakery item
export default function BakeryItem({ item, handleClick, removeItem}) { 

    return (
        <Card sx={{ width: 1, height: 1 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%'}}>
            <CardMedia 
                component='img'
                image={item.image}
                alt={item.name}
            />
            <Box
            
            sx={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    gap: '1rem',
                    padding: '1rem 1rem'
                }}
                >
                    <Box>
                        <Typography sx={{ 
                            fontSize: 'h6.fontSize', 
                            fontWeight: 'bold'
                            }}
                        >
                            {item.name}
                        </Typography>

                        <Typography fontStyle = 'italic'>
                            {item.type}
                        </Typography>
                        <br></br>
                        
                        <Typography>
                            {item.description}
                        </Typography>

                        <Typography fontStyle = 'italic'>
                            {"*" + item.caffeine + "*"}
                        </Typography>
                    </Box>

                    <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center'
                        }}
                    >
                        <Typography>
                            {'$' + item.price}
                        </Typography>
                        
                        <Button 
                            variant="contained" 
                            disableElevation
                            onClick={() => handleClick(item)}
                        >
                            Add to cart
                        </Button>
                        <Button 
                            variant="contained" 
                            disableElevation
                            onClick={() => removeItem(item)}
                        >
                            Remove from cart
                        </Button>
                    </Box>   
                </Box>  
            </Box>
        </Card>
    )
}