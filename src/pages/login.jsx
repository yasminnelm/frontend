import React from "react";
import { Container, 
    Paper, 
    Avatar,
    Typography, 
    Box, 
    TextField, 
    FormControlLabel, 
    Button,
    Checkbox,
    InputLabel } from "@mui/material";
import "../styles/login.css";


function Login() {
    const handleSubmit = () => console.log("login");
    return (
        <Container maxWidth="xs"
            sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",}}
        >
            <Paper elevation={5} sx={{marginTop:8 , padding: 4, px: 5}}>
            <Avatar
                sx={{
                    mx: "auto",
                    bgcolor: "secondary.main",
                    textAlign: "center",
                    mb: 3,
                    width: 70,
                    height: 70,
                }}
                >
                {/* ghn7tu hna logo later */}
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ textAlign: "center" }}>
            Welcome back to Logoipsum
            </Typography>
            <Typography component="h1" variant="caption" sx={{ textAlign: "center", mb: 5}}>
            Enter your username and password to continue
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            {/* <InputLabel htmlFor="username" sx={{ mb: 0.5, fontSize: "0.9rem" }}>
                Username
            </InputLabel> */}
            <TextField
                required
                id="outlined-required"
                label="Email address"
                placeholder="Enter your email address..."
                fullWidth
                slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                sx={{mb:3}}
                />
            <TextField
                required
                id="outlined-required"
                label="Password"
                placeholder="Enter your password..."
                fullWidth
                slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                  type="password"
                />
            {/* <TextField
                label="Email address"
                placeholder="Enter your email"
                fullWidth
                required
                variant="outlined" 
                margin="normal"
            />
            <TextField
                placeholder="Enter password"
                fullWidth
                required
                type="password"
            /> */}
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                sx={{ justifyContent: "flex-start", width: "100%", ml: 0, typography: "body2", mb:5 }}
            />
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }}>
                Sign In
            </Button>
            </Box>
            </Paper>
        </Container>
    );
    };

export default Login;
