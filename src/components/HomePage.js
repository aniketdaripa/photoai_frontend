import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import Modal from "react-overlays/Modal";
import PopUp from "./PopUp";

const HomePage = (props) => {
  const [imageList, setImageList] = useState([]);
  const [safeImages, setSafeImages] = useState([]);
  const [notsafeImages, setNotSafeImages] = useState([]);
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageQuality, setImageQuality] = useState(1000);
  const [demoUrl, setDemoUrl] = useState("");

  const [showModal, setShowModal] = useState(false);
  const renderBackdrop = (props) => <div className="backdrop" {...props} />;
  // console.log(imageList);
  // let imageList=[]
  var handleClose = () => setShowModal(false);

  useEffect(() => {
    props.getSafeImages(safeImages);
  }, [safeImages]);

  const handleSubmit = async (d) => {
    const formData = new FormData();

    if (true) {
      formData.append("image", d);
      const res = await axios.post(
        "https://photoaiback.onrender.com/uploadImage",
        formData
      );
      let newImgUrl = `https://photoaiback.onrender.com/${res.data}`;
      const templink = `https://touristbackend-z6a1.onrender.com/uploads/2d4ea781d4334ecfb7797f086800e153`;
      setDemoUrl(newImgUrl);
      // api call to check quality of image
      axios
        .get("https://api.sightengine.com/1.0/check.json", {
          params: {
            url: newImgUrl,
            models: "quality",
            api_user: "720670096",
            api_secret: "bqjmuMCXusrfDmub7paz",
          },
        })
        .then(function (response) {
          // on success: handle response
          ///after getting quality of the last uploaded image ..logic after that
          let q = response.data.quality.score;

          if (q <= 0.7) {
            console.log("low quality image.. please upload correct image");
            // imageList.pop();
            setNotSafeImages([
              ...notsafeImages,
              { url: newImgUrl, state: "false" },
            ]);
          } else if (q > 0.7) {
            setImageList([...imageList, d]);
            setSafeImages([...safeImages, { url: newImgUrl, state: "true" }]);
          }
        })
        .catch(function (error) {
          // handle error
          if (error.response) console.log(error.response.data);
          else console.log(error.message);
        });
    }
    // }
  };
  console.log(imageList);
  console.log(safeImages);
  return (
    <Box display={"flex"} flexDirection={"column"} width="25vw">
      <Box p=" 0 0 5px 0">
        <Typography variant="h6">Photos</Typography>
      </Box>
      <Box p=" 0 0 10px 0">
        <Typography variant="h7" fontWeight="600" color="#039487">
          Accepted - {safeImages.length}/10
        </Typography>
      </Box>
      <Box p=" 0 0 10px 0">
        <Typography style={{ color: "grey", textDecoration: "underline",cursor:"pointer" }} onClick={() => setShowModal(true)}>
          Show Photo Requirement.
        </Typography>
      </Box>
      <Modal
        className="modal"
        show={showModal}
        onHide={handleClose}
        renderBackdrop={renderBackdrop}
      >
        <PopUp />
      </Modal>
      {safeImages.length < 10 && (
        <Box py={2}>
          <input
            style={{ width: "250px" }}
            onChange={(e) => {
              handleSubmit(e.target.files[0]);
            }}
            type="file"
          ></input>
        </Box>
      )}

      {notsafeImages.length > 0 && (
        <>
          <Box p=" 0 0 0px 0">
            <Typography variant="h6">Declined Photos</Typography>
          </Box>
          <Box p=" 0 0 10px 0">
            <a style={{ color: "grey" }}>These photos were declined.</a>
          </Box>

          <Box
            display={"flex"}
            flexWrap="wrap"
            gap="5px"
            width="100%"
            border="1px solid black"
            borderRadius={1}
            p={1}
            bgcolor="#ffb6b6"
          >
            {notsafeImages.map((image) => {
              return (
                <Box borderRadius="10px">
                  <img
                    width="60px"
                    style={{ borderRadius: "10px" }}
                    height="70px"
                    src={image.url}
                  />
                </Box>
              );
            })}
          </Box>
        </>
      )}
    </Box>
  );
};

export default HomePage;
