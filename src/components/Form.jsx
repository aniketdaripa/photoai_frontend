import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  FormLabel,
  OutlinedInput,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import HomePage from "./HomePage";
import Modal from "react-overlays/Modal";
import PopUp from "./PopUp";
import "./styleModal.css"
export default function Form(props) {
  const [name, setName] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [gender, setGender] = useState("male");

  const [showModal, setShowModal] = useState(false);
  const renderBackdrop = (props) => <div className="backdrop" {...props} />;

  var handleClose = () => setShowModal(false);
  

  const getSafeImages=(imgs)=>{
    props.getSafeImages(imgs);
  }

  return (
    <Box
      display={"flex"}
      alignItems="flex-start"
      justifyContent={"space-between"}
      padding=" 10px 0px 10px 0"
      width="100%"
      gap={6}
    >
      <Box
        width="50%"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <FormControl sx={{ width: "29ch" }} required>
          <FormLabel>Name</FormLabel>
          <OutlinedInput
            placeholder="Please enter Your Name"
            size="small"
            fullWidth="true"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 248 }} size="small">
          <FormLabel>Ethnicity</FormLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={ethnicity}
            onChange={(e) => {
              setEthnicity(e.target.value);
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Asian"}>Asian</MenuItem>
            <MenuItem value={"Black"}>Black</MenuItem>
            <MenuItem value={"Carribean"}>Carribean</MenuItem>
            <MenuItem value={"Indian"}>Indian</MenuItem>
            <MenuItem value={"Melanesian"}>Melanesian</MenuItem>
            <MenuItem value={"Ploynesian"}>Ploynesian</MenuItem>
            <MenuItem value={"European"}>European</MenuItem>
            <MenuItem value={"Caucasian"}>Caucasian</MenuItem>
            <MenuItem value={"Hispanic"}>Hispanic</MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 248 }} size="small" required>
          <FormLabel>Eye Color</FormLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={eyeColor}
            onChange={(e) => {
              setEyeColor(e.target.value);
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Blue"}>Blue</MenuItem>
            <MenuItem value={"Brown"}>Brown</MenuItem>
            <MenuItem value={"Gray"}>Gray</MenuItem>
            <MenuItem value={"Green"}>Green</MenuItem>
            <MenuItem value={"Hazel"}>Hazel</MenuItem>
            <MenuItem value={"Red"}>Red</MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 248 }} size="small">
          <FormLabel>Who's Photo are you Uploading?</FormLabel>

          <Box
            py={1}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"left"}
            gap={3}
          >
            {gender === "male" ? (
              <>
                <Box
                  bgcolor="purple"
                  p={1}
                  borderRadius={1}
                  color="white"
                  width={60}
                  textAlign={"center"}
                  
                >
                  <Typography style={{cursor:"pointer"}}  variant="h7" onClick={()=>{setGender("male")}} >Male</Typography>
                </Box>
                <Box
                  p={1}
                  borderRadius={1}
                  border="0.5px solid #d3d3d3"
                  width={60}
                  textAlign={"center"}
                >
                     <Typography style={{cursor:"pointer"}} variant="h7" onClick={()=>{setGender("female")}} >Female</Typography>
                </Box>
              </>
            ) : (
              <>
                <Box
                  p={1}
                  borderRadius={1}
                  border="0.5px solid #d3d3d3"
                  width={60}
                  textAlign={"center"}
                >
                   <Typography style={{cursor:"pointer"}} variant="h7" onClick={()=>{setGender("male")}} >Male</Typography>
                </Box>
                <Box
                  bgcolor="purple"
                  p={1}
                  borderRadius={1}
                  color="white"
                  width={60}
                  textAlign={"center"}
                >
                 <Typography style={{cursor:"pointer"}} variant="h7" onClick={()=>{setGender("female")}} >Female</Typography>
                </Box>
              </>
            )}
          </Box>
        </FormControl>

        {/* <Button color="secondary" onClick={() => setShowModal(true)}>Confirm</Button> */}
        <Modal
          className="modal"
          show={showModal}
          onHide={handleClose}
          renderBackdrop={renderBackdrop}
        >
          <PopUp/>
        </Modal>
      </Box>

      <HomePage getSafeImages={getSafeImages} />

    </Box>
  );
}
