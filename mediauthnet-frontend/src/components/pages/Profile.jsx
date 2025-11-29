import { Box, Paper, Avatar, Typography, Button } from '@mui/material';
import bgImg from '../../img/bg.png';
import avatarImg from '../../img/avatar.png';
import { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [profile, setProfile] = useState({});
    const { auth } = useAuth();
    const navigate = useNavigate();

    // Go Back
    const handleBack = () => {
        navigate(-1);
    };

    // Fetch user profile
    const handleData = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/profile/${auth.id}`);
            setProfile(res.data[0]);
        } catch (error) {
            console.error("Profile fetch error:", error);
        }
    };

    useEffect(() => {
        if (auth?.id) {
            handleData();
        }
    }, [auth]);

    return (
        <Box
            sx={{
                backgroundImage: `url(${bgImg})`,
                minHeight: "100vh",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                paddingTop: "7%",
                paddingBottom: "7%",
            }}
        >
            <Paper
                elevation={5}
                sx={{
                    width: "420px",
                    margin: "auto",
                    padding: "35px 30px",
                    backgroundColor: "#e8f0fe",
                    borderRadius: "15px",
                    textAlign: "center"
                }}
            >
                {/* Avatar */}
                <Avatar
                    src={avatarImg}
                    alt="User Avatar"
                    sx={{
                        width: 110,
                        height: 110,
                        margin: "0 auto 15px auto"
                    }}
                />

                {/* Name */}
                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                    {profile?.name || auth?.name || "User"}
                </Typography>

                {/* Email */}
                <Typography sx={{ color: "#444", mb: 1 }}>
                    <strong>Email:</strong> {profile?.email || auth?.email}
                </Typography>

                {/* Role */}
                <Typography sx={{ color: "#444", mb: 1 }}>
                    <strong>Role:</strong> {profile?.role || auth?.role}
                </Typography>

                {/* Description */}
                <Typography sx={{ color: "#444", mb: 1 }}>
                    <strong>Description:</strong> {profile?.description || "N/A"}
                </Typography>

                {/* Website */}
                <Typography sx={{ color: "#444", mb: 1 }}>
                    <strong>Website:</strong> {profile?.website || "N/A"}
                </Typography>

                {/* Location */}
                <Typography sx={{ color: "#444", mb: 3 }}>
                    <strong>Location:</strong> {profile?.location || "N/A"}
                </Typography>

                {/* Back Button */}
                <Button
                    variant="contained"
                    onClick={handleBack}
                    sx={{
                        backgroundColor: "#0F1B4C",
                        "&:hover": { backgroundColor: "#0d1640" },
                        paddingX: 4,
                        marginTop: 1
                    }}
                >
                    Back
                </Button>
            </Paper>
        </Box>
    );
};

export default Profile;

