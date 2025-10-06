import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function RangeSlider({ value, onChange }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        valueLabelDisplay="off"
        getAriaLabel={() => "Minimum distance"}
        value={value}
        sx={{
          width: "100%",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "0.5px", // expand hit area above
            bottom: "-0.5px", // and below
            left: 0,
            right: 0,
            zIndex: 1,
          },

          "& .MuiSlider-thumb": {
            color: "white",
            width: "14px",
            height: "14px",
            border: "1px solid #bababa",

            boxShadow: "none",
            "&:hover": {
              boxShadow: "none ",
            },
            "&.Mui-focusVisible": {
              boxShadow: "none ",
            },
          },
          "& .MuiSlider-track": {
            height: "6px",
          },
          "& .MuiSlider-rail": {
            // backgroundColor: "#c2c2c2",
            height: "2px",
            border: "1px solid #959595",
            width: "102%",
          },
        }}
        onChange={onChange}
        min={5000}
        max={30000}
        step={5000}
        disableSwap={true}
      />
    </Box>
  );
}
