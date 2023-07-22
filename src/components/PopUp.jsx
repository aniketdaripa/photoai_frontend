import React from "react";
import Box from "@mui/material/Box";
import badPhotos from "../badPhotos.png";
import goodPhotos from "../goodPhotos.png";
import lastPhotos from "../lastPhoto.png";
import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";

export default function PopUp() {
  return (
    <Box bgcolor="grey">
      <Box
        display={"flex"}
        flexDirection={"column"}
        // alignItems={"center"}
        justifyContent={"center"}
        bgcolor="white"
        p={2}
        borderRadius={5}
        width="auto"
      >
        {/* Bad Photo Box */}

        <Box display={"flex"} px={2} py={1}>
          <RemoveCircleRoundedIcon
            style={{ color: "#8B0000", fontSize: "1.8rem" }}
          />
          <Typography p={0} variant="h5" fontWeight="600" color="#8B0000">
            Bad Photos
          </Typography>
        </Box>

        <Box px={2}>
          <img src={badPhotos} width="100%" height="100%" alt="" srcSet="" />
        </Box>
        <Box display={"flex"} justifyContent={"center"} gap={4} px={2} py={0.5}>
          <Box display={"flex"} flexDirection={"column"}>
            <Box display={"flex"}>
              <CloseIcon style={{ color: "#8B0000", fontSize: "1.3rem" }} />
              <Typography p={0} variant="h8">
                Not looking at the camera
              </Typography>
            </Box>
            <Box display={"flex"}>
              <CloseIcon style={{ color: "#8B0000", fontSize: "1.3rem" }} />
              <Typography p={0} variant="h8">
                Too busy/many peoples
              </Typography>
            </Box>
            <Box display={"flex"}>
              <CloseIcon style={{ color: "#8B0000", fontSize: "1.3rem" }} />
              <Typography p={0} variant="h8">
                Face too far/to close
              </Typography>
            </Box>
          </Box>

          <Box display={"flex"} flexDirection={"column"}>
            <Box display={"flex"}>
              <CloseIcon style={{ color: "#8B0000", fontSize: "1.3rem" }} />
              <Typography p={0} variant="h8">
                Bad angle/ bad lighting
              </Typography>
            </Box>
            <Box display={"flex"}>
              <CloseIcon style={{ color: "#8B0000", fontSize: "1.3rem" }} />
              <Typography p={0} variant="h8">
                Funy/dumb expression
              </Typography>
            </Box>
            <Box display={"flex"}>
              <CloseIcon style={{ color: "#8B0000", fontSize: "1.3rem" }} />
              <Typography p={0} variant="h8">
                Blurry and pixelarted photo
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Good Photo Box */}

        <Box display={"flex"} px={2} py={1}>
          <CheckCircleRoundedIcon
            style={{ color: "#32CD32", fontSize: "1.8rem" }}
          />
          <Typography p={0} variant="h5" fontWeight="600" color="#32CD32">
            Good Photos
          </Typography>
        </Box>

        <Box px={2}>
          <img src={goodPhotos} width="100%" height="100%" alt="" srcSet="" />
        </Box>
        <Box display={"flex"} justifyContent={"center"} gap={4} px={2} py={0.5}>
          <Box display={"flex"} flexDirection={"column"}>
            <Box display={"flex"}>
              <DoneIcon style={{ color: "#32CD32", fontSize: "1.3rem" }} />
              <Typography p={0} variant="h8">
                Looking at the camera
              </Typography>
            </Box>
            <Box display={"flex"}>
              <DoneIcon style={{ color: "#32CD32", fontSize: "1.3rem" }} />
              <Typography p={0} variant="h8">
                Clean background
              </Typography>
            </Box>
            <Box display={"flex"}>
              <DoneIcon style={{ color: "#32CD32", fontSize: "1.3rem" }} />
              <Typography p={0} variant="h8">
                Face larger than 20%
              </Typography>
            </Box>
          </Box>

          <Box display={"flex"} flexDirection={"column"}>
            <Box display={"flex"}>
              <DoneIcon style={{ color: "#32CD32", fontSize: "1.3rem" }} />
              <Typography p={0} variant="h8">
                Good angle/clear face
              </Typography>
            </Box>
            <Box display={"flex"}>
              <DoneIcon style={{ color: "#32CD32", fontSize: "1.3rem" }} />
              <Typography p={0} variant="h8">
                Professional expression
              </Typography>
            </Box>
            <Box display={"flex"}>
              <DoneIcon style={{ color: "#32CD32", fontSize: "1.3rem" }} />
              <Typography p={0} variant="h8">
                Made with a good camera
              </Typography>
            </Box>
          </Box>
        </Box>

        {/*Button */}
        <Box px={2} py={1}>
          <img src={lastPhotos} width="100%" height="100%" alt="" srcSet="" />
        </Box>
      </Box>
    </Box>
  );
}
