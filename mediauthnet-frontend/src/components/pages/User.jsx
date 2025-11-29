import "../../css/Role.css";
import { LinkButton } from "../LinkButton";
import { Box, Button as Btn, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import HistoryIcon from "@mui/icons-material/History";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import PersonIcon from "@mui/icons-material/Person";

const User = () => {
  return (
    <div className="role-container">
      <div
        className="role-container-box"
        style={{
          maxWidth: "520px",
          padding: "35px 30px",
          background: "rgba(255,255,255,0.90)",
          borderRadius: "15px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Small Logout Button */}
        <Btn
          href="/login"
          variant="contained"
          color="error"
          endIcon={<LogoutIcon />}
          sx={{
            position: "absolute",
            top: 4,
            right: 10,
            padding: "4px 10px",
            fontSize: "11px",
            fontWeight: 600,
            minWidth: "auto",
          }}
        >
          Logout
        </Btn>

        {/* Dashboard Title */}
        <Typography
          variant="h4"
          sx={{
            color: "#0F1B4C",
            fontWeight: "800",
            mb: 1,
            fontSize: "32px",
          }}
        >
          User Dashboard
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            fontSize: "15px",
            color: "#4F5361",
            mb: 4,
            lineHeight: "1.7",
          }}
        >
          Verify medicines instantly using our Federated Learning global model.
          Scan QR codes or upload images to check if the medicine is{" "}
          <b>Genuine</b> or <b>Fake</b>.
        </Typography>

        {/* Buttons Container */}
        <Box sx={{ width: "100%", mt: 2 }}>

          <LinkButton
            to="/profile"
            className="btns"
            buttonStyle="btn--long"
            buttonSize="btn--large"
            style={{ marginBottom: "12px" }}
          >
            <PersonIcon style={{ marginRight: "8px" }} />
            View Profile
          </LinkButton>

          <LinkButton
            to="/scanner"
            className="btns"
            buttonStyle="btn--long"
            buttonSize="btn--large"
            style={{ marginBottom: "12px" }}
          >
            <CameraAltIcon style={{ marginRight: "8px" }} />
            Scan Medicine (Verify)
          </LinkButton>

          <LinkButton
            to="/verification-history"
            className="btns"
            buttonStyle="btn--long"
            buttonSize="btn--large"
            style={{ marginBottom: "12px" }}
          >
            <HistoryIcon style={{ marginRight: "8px" }} />
            Verification History
          </LinkButton>

          <LinkButton
            to="/report-counterfeit"
            className="btns"
            buttonStyle="btn--long"
            buttonSize="btn--large"
          >
            <ReportProblemIcon style={{ marginRight: "8px" }} />
            Report Counterfeit Medicine
          </LinkButton>
        </Box>
      </div>
    </div>
  );
};

export default User;
