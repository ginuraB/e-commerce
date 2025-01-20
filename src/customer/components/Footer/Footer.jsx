import { Grid, Button, Typography, Box } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <Grid container className="bg-black text-white text-center mt-10"
                sx={{ bgcolor: "black", color: "white", py: 3, px: 2 }}
                spacing={4} // Add spacing between grid items
            >
                {/* Company Section */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Company</Typography>
                    <div><Button className='pb-5' variant='h6' gutterBottom>About</Button></div>
                    <div><Button className='pb-5' variant='h6' gutterBottom>Blog</Button></div>
                    <div><Button className='pb-5' variant='h6' gutterBottom>Jobs</Button></div>
                    <div><Button className='pb-5' variant='h6' gutterBottom>Press</Button></div>
                    <div><Button className='pb-5' variant='h6' gutterBottom>Partners</Button></div>
                </Grid>

                {/* Solutions Section */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Solutions</Typography>
                    <div><Button className='pb-5' variant='h6' gutterBottom>Marketing</Button></div>
                    <div><Button className='pb-5' variant='h6' gutterBottom>Analytics</Button></div>
                    <div><Button className='pb-5' variant='h6' gutterBottom>Commerce</Button></div>
                    <div><Button className='pb-5' variant='h6' gutterBottom>Insights</Button></div>
                    <div><Button className='pb-5' variant='h6' gutterBottom>Support</Button></div>
                </Grid>

                {/* Documentation Section */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Documentation</Typography>
                    <div><Button className='pb-5' variant='h6' gutterBottom>Guides</Button></div>
                    <div><Button className='pb-5' variant='h6' gutterBottom>API Status</Button></div>
                </Grid>

                {/* Legal Section */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Legal</Typography>
                    <div><Button className='pb-5' variant='h6' gutterBottom>Claim</Button></div>
                    <div><Button className='pb-5' variant='h6' gutterBottom>Privacy</Button></div>
                    <div><Button className='pb-5' variant='h6' gutterBottom>Terms</Button></div>
                </Grid>
            </Grid>

            {/* Copyright and Attribution Section */}
            <Box sx={{ bgcolor: "black", color: "white", textAlign: "center", py: 2 }}>
                <Typography variant="body2">
                    © 2025 Ginura Binath. All rights reserved.
                </Typography>
                <Typography variant="body2">
                    Check me out{" "}
                    <a
                        href="https://www.linkedin.com/in/ginura-binath-9658462b7/"
                        style={{ color: "white" }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        www.linkedin.com
                    </a>
                </Typography>
                <Typography variant="body2">
                    Icons made by Freepik from{" "}
                    <a
                        href="https://www.freepik.com/icons"
                        style={{ color: "white" }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        www.freepik.com
                    </a>
                </Typography>

            </Box>
        </div>
    );
}

export default Footer;