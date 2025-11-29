// import '../../css/Role.css'
// import { LinkButton } from '../LinkButton';
// import { Box, Button as Btn } from '@mui/material';
// import LogoutIcon from '@mui/icons-material/Logout';

// const Admin = () => {
//     return (
//         <div className="role-container">
//             <div className="role-container-box">

//                 <Box
//                     sx={{                        
//                         position: 'absolute',
//                         top: 20,
//                         right: 20,
//                     }}
//                 >
//                     <Btn href="/login" endIcon={<LogoutIcon />}>Logout</Btn>                    
//                 </Box>

//                 <h2>Welcome:</h2>
//                 <h1>ADMIN</h1>
//                 <LinkButton to="/add-account" className="btns" buttonStyle='btn--long' buttonSize='btn--large'>Add Account</LinkButton>
//                 <LinkButton to="/manage-account" className="btns" buttonStyle='btn--long' buttonSize='btn--large'>Manage Accounts</LinkButton>

//             </div>
//         </div>
//     );
// }

// export default Admin;




// import '../../css/Role.css';
// import { LinkButton } from '../LinkButton';
// import { Box, Button as Btn, Typography } from '@mui/material';
// import LogoutIcon from '@mui/icons-material/Logout';
// import SecurityIcon from '@mui/icons-material/Security';
// import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
// import AssessmentIcon from '@mui/icons-material/Assessment';
// import ReportIcon from '@mui/icons-material/Report';

// const Admin = () => {
//   return (
//     <div className="role-container">

//       <div className="role-container-box">

//         {/* Logout Button */}
//         <Box
//           sx={{
//             position: "absolute",
//             top: 20,
//             right: 20,
//           }}
//         >
//           <Btn
//             href="/login"
//             variant="contained"
//             color="error"
//             endIcon={<LogoutIcon />}
//             sx={{ fontWeight: 600 }}
//           >
//             Logout
//           </Btn>
//         </Box>

//         {/* Title */}
//         <Typography
//           variant="h4"
//           sx={{ fontWeight: "bold", mb: 2, color: "#0F1B4C" }}
//         >
//           Admin Dashboard
//         </Typography>

//         {/* Description */}
//         <Typography
//           variant="body1"
//           sx={{
//             mb: 4,
//             maxWidth: "550px",
//             color: "#4F5361",
//             textAlign: "center",
//             lineHeight: "1.6rem",
//           }}
//         >
//           You are the system owner and controller of the Federated Learning–based
//           Medicine Authentication Platform. Manage user roles, approve organizations, 
//           monitor FL training rounds, and handle counterfeit alerts.
//         </Typography>

//         {/* Admin Action Buttons */}
//         <Box sx={{ width: "100%", maxWidth: "450px" }}>

//           {/* Manage Accounts */}
//           <LinkButton
//             to="/manage-account"
//             className="btns"
//             buttonStyle="btn--long"
//             buttonSize="btn--large"
//           >
//             <ManageAccountsIcon style={{ marginRight: "8px" }} />
//             Manage Users & Roles
//           </LinkButton>

//           {/* Add Account */}
//           <LinkButton
//             to="/add-account"
//             className="btns"
//             buttonStyle="btn--long"
//             buttonSize="btn--large"
//           >
//             <SecurityIcon style={{ marginRight: "8px" }} />
//             Add New Account
//           </LinkButton>

//           {/* FL Monitoring Page */}
//           <LinkButton
//             to="/fl-monitoring"
//             className="btns"
//             buttonStyle="btn--long"
//             buttonSize="btn--large"
//           >
//             <AssessmentIcon style={{ marginRight: "8px" }} />
//             View FL Training Status
//           </LinkButton>

//           {/* Counterfeit Reports */}
//           <LinkButton
//             to="/counterfeit-reports"
//             className="btns"
//             buttonStyle="btn--long"
//             buttonSize="btn--large"
//           >
//             <ReportIcon style={{ marginRight: "8px" }} />
//             Counterfeit Alerts
//           </LinkButton>

//         </Box>

//       </div>
//     </div>
//   );
// };

// export default Admin;




import '../../css/Role.css';
import { LinkButton } from '../LinkButton';
import { Box, Button as Btn, Typography, Paper } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import SecurityIcon from '@mui/icons-material/Security';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ReportIcon from '@mui/icons-material/Report';

const Admin = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e8f0fe 0%, #d4e1ff 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "520px",
          padding: "40px 35px",
          borderRadius: "20px",
          backgroundColor: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(10px)",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Logout Button */}
        <Box
          sx={{
            position: "absolute",
            top: 8,
            right: 10,
          }}
        >
          <Btn
            href="/login"
            variant="contained"
            color="error"
            endIcon={<LogoutIcon />}
            sx={{
              fontWeight: 700,
              borderRadius: "10px",
              padding: "6px 14px",
            }}
          >
            Logout
          </Btn>
        </Box>

        {/* Header */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "900",
            color: "#0F1B4C",
            mb: 1,
            fontSize: "2rem",
          }}
        >
          Admin Dashboard
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            maxWidth: "480px",
            color: "#4F5361",
            margin: "0 auto",
            lineHeight: "1.7rem",
            mb: 4,
          }}
        >
          You control the entire Federated Learning–based Medicine Authentication
          Platform. Manage user roles, monitor global FL training, review counterfeit 
          reports, and maintain system integrity.
        </Typography>

        {/* Action Buttons */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "420px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 2.2,
          }}
        >
          {/* Manage Accounts */}
          <LinkButton
            to="/manage-account"
            buttonStyle="btn--long"
            buttonSize="btn--large"
            style={{ fontSize: "1rem" }}
            className="btns"
          >
            <ManageAccountsIcon style={{ marginRight: "10px" }} />
            Manage Users & Roles
          </LinkButton>

          {/* Add Account */}
          <LinkButton
            to="/add-account"
            buttonStyle="btn--long"
            buttonSize="btn--large"
            style={{ fontSize: "1rem" }}
            className="btns"
          >
            <SecurityIcon style={{ marginRight: "10px" }} />
            Add New Account
          </LinkButton>

          {/* FL Monitoring */}
          <LinkButton
            to="/fl-monitoring"
            buttonStyle="btn--long"
            buttonSize="btn--large"
            style={{ fontSize: "1rem" }}
            className="btns"
          >
            <AssessmentIcon style={{ marginRight: "10px" }} />
            View FL Training Status
          </LinkButton>

          {/* Counterfeit Alerts */}
          <LinkButton
            to="/counterfeit-reports"
            buttonStyle="btn--long"
            buttonSize="btn--large"
            style={{ fontSize: "1rem" }}
            className="btns"
          >
            <ReportIcon style={{ marginRight: "10px" }} />
            Counterfeit Alerts
          </LinkButton>
        </Box>
      </Paper>
    </Box>
  );
};

export default Admin;
