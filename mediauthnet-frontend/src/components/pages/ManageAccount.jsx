// import { Box, Paper, Typography } from '@mui/material';
// import bgImg from '../../img/bg.png';
// import axios from 'axios';
// import { DataGrid } from '@mui/x-data-grid';
// import { Button } from '@mui/material';
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const columns = [
//     { field: 'name', headerName: 'Name', width: 120, editable: true },
//     {
//         field: 'description',
//         headerName: 'Description',
//         width: 300,
//         editable: true
//     },
//     { field: 'username', headerName: 'Username', width: 130, editable: true },
//     { field: 'website', headerName: 'Website', width: 200, editable: true },
//     { field: 'location', headerName: 'Location', width: 200, editable: true },
//     { field: 'role', headerName: 'Role', width: 130, editable: true },
//     { field: 'image', headerName: 'Image', width: 130 }

// ];

// const ManageAccount = () => {
//     const [rows, setRows] = useState([]);
//     const navigate = useNavigate()

//     useEffect(() => {
//         handleData();
//     }, []);

//     const handleData = async (e) => {
//         const res = await axios.get('http://localhost:5000/profileAll')
//             .then(res => {
//                 console.log(JSON.stringify(res.data));
//                 setRows(res.data);
//             })
//     }

//     const handleBack = () => {
//         navigate(-1)
//     }

//     return (
//         <Box sx={{
//             backgroundImage: `url(${bgImg})`,
//             minHeight: "80vh",
//             backgroundRepeat: "no-repeat",
//             position: 'absolute',
//             left: 0,
//             right: 0,
//             top: 0,
//             bottom: 0,
//             backgroundSize: 'cover',
//             zIndex: -2,
//             overflowY: "scroll"
//         }}>
//             <Paper elevation={3} sx={{ width: "80%", margin: "auto", height: "530px", marginTop: "5%", marginBottom: "5%", padding: "3%", backgroundColor: "#e3eefc" }}>
//                 <Typography
//                     variant="h2"
//                     sx={{
//                         textAlign: "center", marginBottom: "3%",
//                         fontFamily: 'Gambetta', fontWeight: "bold", fontSize: "2.5rem"
//                     }}
//                 >
//                     Manage Account
//                 </Typography>
//                 <Paper sx={{ height: 400, width: '100%', backgroundColor: "#e3eefc" }}>
//                     <DataGrid
//                         rows={rows}
//                         columns={columns}
//                         pageSize={5}
//                         rowsPerPageOptions={[5]}

//                     />
//                 </Paper>
//                     <Box
//                         sx={{
//                             width: "100%",
//                             display: "flex",
//                             justifyContent: "center",
//                         }}
//                     >


//                         <Button
//                             onClick={handleBack}
//                             sx={{
//                                 marginTop: "3%",
//                             }}
//                         >
//                             Back
//                         </Button>

//                     </Box>
//             </Paper>
//         </Box>
//     );
// }



// export default ManageAccount;







import { Box, Paper, Typography } from '@mui/material';
import bgImg from '../../img/bg.png';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const columns = [
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'description', headerName: 'Description', width: 250 },
  { field: 'username', headerName: 'Username', width: 150 },
  { field: 'website', headerName: 'Website', width: 180 },
  { field: 'location', headerName: 'Location', width: 200 },
  { field: 'role', headerName: 'Role', width: 140 },
];

const ManageAccount = () => {
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    handleData();
  }, []);

  const handleData = async () => {
    try {
      const res = await axios.get('http://localhost:5000/profileAll');
      const fixedRows = res.data.map((row, index) => ({
        id: index + 1,
        ...row
      }));
      setRows(fixedRows);
    } catch (err) {
      console.error("Error loading users:", err);
    }
  };

  const handleBack = () => navigate(-1);

  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImg})`,
        minHeight: "100vh",
        backgroundSize: 'cover',
        backgroundRepeat: "no-repeat",
        paddingTop: "50px",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "85%",
          margin: "auto",
          padding: "25px",
          borderRadius: "20px",
          backgroundColor: "rgba(255,255,255,0.8)",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            marginBottom: "25px",
            fontWeight: "800",
            color: "#0F1B4C"
          }}
        >
          Manage Accounts
        </Typography>

        <Paper sx={{ height: 400, width: '100%', borderRadius: "10px" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            sx={{ backgroundColor: "white", borderRadius: "10px" }}
          />
        </Paper>

        <Box sx={{ textAlign: "center", marginTop: "20px" }}>
          <Button variant="contained" onClick={handleBack}>
            Back
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ManageAccount;
