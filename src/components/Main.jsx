import React, { useState } from "react";
import Box from "@mui/material/Box";

import logo from "../logo.png";
import badPhotos from "../badPhotos.png";
import goodPhotos from "../goodPhotos.png";
import { Button, Typography, useThemeProps } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import Form from "./Form";

export default function Main() {
  const [tab, setTab] = useState("welcome");
  const [safeImages, setSafeImages] = useState([]);
  
  const getSafeImages = (imgs) => {
    setSafeImages(imgs);
  };

  return (
    <Box
      height="auto"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      bgcolor="#eeeeee"
      paddingBottom={3}
    >
      <Box py={3}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          py={1}
        >
          <img src={logo} alt="" srcSet="" />
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          border="0.5px solid #d3d3d3"
          bgcolor="#e2e2e2"
          p={1}
          gap={1.5}
          borderRadius={2}
          px={2.5}
        >
          <Box>Welcome</Box>
          <Box>Upload</Box>
          <Box>Summary</Box>
        </Box>
      </Box>

      <>
        {tab == "upload" && (
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            bgcolor="white"
            p={4}
            borderRadius={5}
            width="auto"
          >
            <Box>
              <Box>
                <Typography variant="h5" fontWeight="700">
                  Upload Your Photos
                </Typography>
              </Box>
              <Box>
                <Typography>
                  Upload your best Photos of yourself. These will be used to
                  generate your Headshot.
                </Typography>
              </Box>
            </Box>

            <Box height="2px" width="100%" bgcolor="#e2e2e2"></Box>

            <Form getSafeImages={getSafeImages} />
            {safeImages.length >= 10 && (
              <Button
                width="100%"
                variant="contained"
                color="success"
                onClick={() => {
                  setTab("summary");
                }}
              >
                upload
              </Button>
            )}
            {safeImages.length < 10 && (
              <Button
                width="100%"
                variant="disabled"
                onClick={() => {
                  setTab("summary");
                }}
              >
                upload at least 10 Photos
              </Button>
            )}
          </Box>
        )}
        {tab == "welcome" && (
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            bgcolor="white"
            p={4}
            borderRadius={5}
            width="40%"
          >
            <Box textAlign="left">
              <Typography variant="h4" fontWeight="700">
                Good and Bad Examples
              </Typography>
            </Box>

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
              <img
                src={badPhotos}
                width="100%"
                height="100%"
                alt=""
                srcSet=""
              />
            </Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              gap={5}
              px={2}
              py={0.5}
            >
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
              <img
                src={goodPhotos}
                width="100%"
                height="100%"
                alt=""
                srcSet=""
              />
            </Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              gap={8}
              px={2}
              py={0.5}
            >
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

            <Box>
              <Box display={"flex"} alignItems="center" justifyContent="center">
                <WarningRoundedIcon
                  style={{ color: "#eed202", fontSize: "1.3rem" }}
                />
                <Typography p={0} variant="h7" fontWeight="500">
                  We do not Refund anyone who break these terms.
                </Typography>
              </Box>
              <Box py={0.5} px={1}>
                <Button
                  style={{
                    backgroundColor: "#32CD32",
                    color: "white",
                    width: "100%",
                  }}
                  variant="filled"
                  onClick={() => {
                    setTab("upload");
                  }}
                >
                  {" "}
                  okay
                </Button>
              </Box>
            </Box>
          </Box>
        )}

        {tab === "summary" && (
          <Box
            display={"flex"}
            justifyContent={"center"}
            bgcolor="white"
            p={4}
            borderRadius={5}
            width="50%"
          >
            <Box
              display={"flex"}
              flexWrap="wrap"
              gap="5px"
              width="100%"
              borderRadius={1}
              p={1}
            >
              {safeImages.map((image) => {
                return (
                  <Box borderRadius={1} p="5px" bgcolor="#32de84">
                    <img width="100px" height="100px" src={image.url} />
                  </Box>
                );
              })}
            </Box>
          </Box>
        )}
      </>
    </Box>
  );
}
