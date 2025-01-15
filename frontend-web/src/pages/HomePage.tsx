import React from 'react';
import { TextField, Button, Container, Box } from '@mui/material';
import { IoMdSearch } from "react-icons/io";
import CustomCard from '../components/Card.tsx';

function HomePage() {
    return (
        <Container maxWidth="sm">
            <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
                <form className="flex items-center gap-2">
                    <TextField
                        variant="outlined"
                        placeholder="Search"
                        fullWidth
                        InputProps={{
                            endAdornment: (
                                <Button
                                    type="submit"
                                    variant="text"
                                    color="primary"
                                    startIcon={<IoMdSearch />}
                                >
                                </Button>
                            ),
                        }}
                    />
                </form>
                <Box mt={4}>
                    <CustomCard
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEzSwHWYtdecUbj-IpGr1d4tpon6ybWlTnLw&s"
                        title="Lizard"
                        description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."
                    />
                </Box>
            </Box>
        </Container>
    );
}

export default HomePage;